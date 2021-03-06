package com.nirvasoft.web.pos.dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Repository;

import com.nirvasoft.web.pos.model.SalesDetailsData;

@Repository
public class SalesDetailsDao {
	
	public Map<String, Object> searchSalesDetialsList(HashMap<String, Object> data, Connection conn) throws SQLException {
		Map<String, Object> result = new HashMap<>();
		List<SalesDetailsData> dataList = new ArrayList<SalesDetailsData>();
		SalesDetailsData salesDetailsData = null;
		String fromDate = (String) data.get("fromDate");
		String toDate = (String) data.get("toDate");
		int totalCount = 0;

		String sql = "SELECT D.T2 AS STKCODE, D.T3 AS STKDESC, D.N49 AS PRICE, SUM(D.N8) AS QTY, D.T10 AS UOM, "
				+ "SUM(D.N8*D.N19) DISAMT, 0 as DISPERCENT, SUM(D.N8*D.N49) AMT , (SUM(D.N8*D.N49)) - (SUM(D.N8*D.N19)) AS NETAMT "
				+ "FROM POS002 D INNER JOIN POS001 H ON H.SYSKEY=D.PARENTID ";
		String whereClause = "";
		if(!("".equals(fromDate)&& fromDate.isEmpty()) || !("".equals(toDate) && toDate.isEmpty())){
			whereClause += " WHERE H.T7 BETWEEN ? AND ? ";
		}
		String groupByClause = "GROUP BY D.T2,D.T3,D.N49,D.T10";
		
		sql += whereClause + groupByClause;
		int currentPage = (int) data.get("currentPage");
		int pageSize = (int) data.get("pageSize");
		int start = (currentPage - 1) * pageSize;

		sql += " ORDER BY D.T2 OFFSET " + start + " ROWS FETCH NEXT " + pageSize + " ROWS ONLY ";

		PreparedStatement stmt = conn.prepareStatement(sql);
		if(!("".equals(fromDate)&& fromDate.isEmpty()) || !("".equals(toDate) && toDate.isEmpty())){
			stmt.setString(1, fromDate);
			stmt.setString(2, toDate);
		}
		ResultSet rs = stmt.executeQuery();

		while (rs.next()) {
			salesDetailsData = new SalesDetailsData();
			salesDetailsData.setStkCode(rs.getString("STKCODE"));
			salesDetailsData.setStkDesc(rs.getString("STKDESC"));
			salesDetailsData.setPrice(rs.getDouble("PRICE"));
			salesDetailsData.setQty(rs.getDouble("QTY"));
			salesDetailsData.setUom(rs.getString("UOM"));
			salesDetailsData.setDiscAmt(rs.getDouble("DISAMT"));
			salesDetailsData.setDiscPer(rs.getDouble("DISPERCENT"));
			salesDetailsData.setAmt(rs.getDouble("AMT"));
			salesDetailsData.setNetAmt(rs.getDouble("NETAMT"));
			dataList.add(salesDetailsData);
		}

		stmt = conn.prepareStatement("SELECT COUNT(DISTINCT D.t2) AS totalCount FROM POS002 D INNER JOIN POS001 H ON H.SYSKEY=D.PARENTID " + whereClause);
		if(!("".equals(fromDate)&& fromDate.isEmpty()) || !("".equals(toDate) && toDate.isEmpty())){
			stmt.setString(1, fromDate);
			stmt.setString(2, toDate);
		}
		rs = stmt.executeQuery();
		if (rs.next())
			totalCount = rs.getInt("totalCount");

		result.put("SalesDetailsData", dataList);
		result.put("totalCount", totalCount);

		return result;
	}

}
