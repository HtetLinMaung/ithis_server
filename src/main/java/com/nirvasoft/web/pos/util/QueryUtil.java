package com.nirvasoft.web.pos.util;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

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
			String[] keys, FilterRequest req, Connection conn) throws SQLException {
		String sql = initialSql;
		this.whereQuery = "";
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
		
		if (!req.isAll()) sql += String.format(" order by %s %s "
				+ "OFFSET ? ROW FETCH NEXT ? ROWS ONLY ", 
				req.getSortBy(), 
				req.isLatestFirst() ? "DESC": "ASC");
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
		PreparedStatement stmt = preparePaginationQuery(sql, keys, req, conn);
		
		if (!req.isAll()) setPaginationParams(1, req, stmt);
		
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
	
	protected long getNextSyskey(String tableName, Connection conn) throws SQLException {
		String sql = String.format("SELECT max(syskey) AS syskey FROM %s", tableName);
		PreparedStatement stmt = conn.prepareStatement(sql);
		ResultSet rs = stmt.executeQuery();
		long syskey = 0;
		while(rs.next()) {
			syskey = rs.getLong("syskey");
		}
		return syskey + 1;
	}
	
	protected int getHsid(Connection conn) throws SQLException {
		String sql = "select syskey from clinic";
		PreparedStatement stmt = conn.prepareStatement(sql);
		ResultSet rs = stmt.executeQuery();
		int hsid = 0;
		while(rs.next()) {
			hsid = rs.getInt("syskey");
		}
		return hsid;
	}
	
	protected ArrayList<Long> executeInsertMany(String tableName, String key, 
			List<HashMap<String, Object>> data, Connection conn) throws SQLException {
		String[] keys = key.split(",");
		long nextSyskey = getNextSyskey(tableName, conn);
		ArrayList<Long> insertedList = new ArrayList<Long>();
		String sql = "INSERT INTO " + tableName + "(syskey," + keys + ") VALUES";
		for (int i = 0; i < data.size(); i++) {
			sql += " (";
			for (int j = 0; j < keys.length; j++) {
				sql += "?";
				if (j != keys.length - 1) {
					sql += ",";
				}
			}
			sql += ")";
			if (i != data.size() - 1) {
				sql += ", ";
			}
		}
		PreparedStatement stmt = conn.prepareStatement(sql);
		int i = 1;
		for (HashMap<String, Object> item : data) {
			stmt.setLong(i, nextSyskey);	
			for (String k : keys) {
				stmt.setObject(i++, item.get(k));
			}
			insertedList.add(nextSyskey++);
		}
		stmt.executeUpdate();
		return insertedList;
	}
}
