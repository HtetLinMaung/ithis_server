package com.nirvasoft.web.pos.util;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.HashMap;

import com.nirvasoft.web.pos.model.AdvanceSearchData;
import com.nirvasoft.web.pos.model.FilterRequest;
import com.nirvasoft.web.pos.model.ResponseData;

public class QueryUtil {
	private String whereQuery = "";
	
	protected int getTotalOf(String tableName, Connection conn) throws SQLException {
		int total = 0;
		String sql = "select count(*) as total from " + tableName;
		PreparedStatement stmt = conn.prepareStatement(sql);	
		ResultSet rs = stmt.executeQuery();
		while (rs.next()) {
			total = rs.getInt("total");
		}
		return total;
	}
	
	protected int getTotalOf(String tableName, String whereQuery, Object[] values, Connection conn) throws SQLException {
		int total = 0;
		String sql = "select count(*) as total from " + tableName + " " + whereQuery;
		PreparedStatement stmt = conn.prepareStatement(sql);	
		if (!whereQuery.isEmpty()) {
			for (int i = 0; i < values.length ; i++) {
				stmt.setObject(i + 1, values[i]);
			}
		}
		ResultSet rs = stmt.executeQuery();
		while (rs.next()) {
			total = rs.getInt("total");
		}
		return total;
	}
	
	protected ResponseData createResponseData(FilterRequest req, 
			ArrayList<HashMap<String, Object>> data, int total) {
		ResponseData res = new ResponseData();
		int offset = (req.getPage() - 1) * req.getPerPage();
		res.setTotal(total);
		res.setPerPage(req.getPerPage());
		res.setCurrentPage(req.getPage());
		res.setLastPage((int) Math.ceil((double) total / req.getPerPage()));
		res.setFrom(offset + 1);
		res.setTo(offset + data.size());
		res.setData(data);
		return res;
	}
	
	protected PreparedStatement preparePaginationQuery(String initialSql, 
			String[] keys, FilterRequest req, String orderByKey, Connection conn) throws SQLException {
		String sql = initialSql;
		if (req.getSearch() != null && !req.getSearch().isEmpty()) {
			String text = req.getSearch();	
			if (sql.contains("WHERE")) {
				sql += " AND (";
			} else {
				sql += " WHERE (";
			}
			
				
			for (int i = 0; i < keys.length; i++) {
				sql += keys[i] + " LIKE " + "'%" + text + "%'";
				if (i != keys.length - 1) {
					sql += " OR ";
				}
			}
			sql += ") ";
		} else {
			if (req.getAdvSearch().size() > 0) {
				if (sql.contains("WHERE")) {
					sql += " AND (";
				} else {
					sql += " WHERE (";
				}
				for (int i = 0; i < req.getAdvSearch().size(); i++) {
					AdvanceSearchData data = req.getAdvSearch().get(i);
					sql +=  getQueryCondition(data);
					if (i != req.getAdvSearch().size() - 1) {
						sql += " AND ";
					}
				}
				sql += ") ";
				
			}	
		}
		
		if (sql.split("WHERE").length == 2) {
			this.whereQuery = "WHERE " + sql.split("WHERE")[1];
		}
		
		sql += String.format(" order by %s OFFSET ? ROW FETCH NEXT ? ROWS ONLY ", orderByKey);
		return conn.prepareStatement(sql);
	}
	
	protected void setPaginationParams(int j, FilterRequest req, PreparedStatement stmt) throws SQLException {
		int i = j;
		int offset = (req.getPage() - 1) * req.getPerPage();
		stmt.setInt(i++, offset);
		stmt.setInt(i++, req.getPerPage());
	}
	
	protected ResultSet executePaginationQuery(String sql, 
			String[] keys, FilterRequest req, Connection conn) throws SQLException {
		PreparedStatement stmt = preparePaginationQuery(sql, keys, req, "syskey", conn);
		
		setPaginationParams(1, req, stmt);
		
		ResultSet rs = stmt.executeQuery();
		return rs;
	}
	
	private String getQueryCondition(AdvanceSearchData data) {
		switch(data.getCondition()) {
		case "1":
			return data.getField() + " = " + data.getSearch();
		case "2":
			return data.getField() + " LIKE " + "'%" + data.getSearch() + "%'";
		case "3":
			return data.getField() + " LIKE " + "'" + data.getSearch() + "%'";
		default:
			return data.getField() + " LIKE " + "'%" + data.getSearch() + "'";
		}
	}

	public String getWhereQuery() {
		return whereQuery;
	}
}
