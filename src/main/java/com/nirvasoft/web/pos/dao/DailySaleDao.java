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

import com.nirvasoft.web.pos.model.CommonData;

@Repository
public class DailySaleDao {
	
	public Map<String, Object> searchDailySaleList(HashMap<String, Object> data, Connection conn) throws SQLException {
		Map<String, Object> result = new HashMap<>();
		List<CommonData> dataList = new ArrayList<CommonData>();
		CommonData commondata = null;
		String fromdate = (String) data.get("fromdate");
		String todate = (String) data.get("today");
		String salesptype = (String) data.get("salesptype");
		String salesperson = (String) data.get("salesperson");
		
		int totalCount = 0;

		String sql = "SELECT CONVERT(Date,t4) AS [Date], SUM(n9+n10) AS Amount, " + 
				"SUM(n9) As Discount, SUM(n14) AS Tax, SUM(n5) As NetAmount " +
				"FROM POS001 WHERE RECORDSTATUS <> 4 AND SYSKEY<> 0 " + 
				"GROUP BY CONVERT(Date,t4)";		
	
		int currentPage = (int) data.get("currentPage");
		int pageSize = (int) data.get("pageSize");
		int start = (currentPage - 1) * pageSize;

		sql += " ORDER BY CONVERT(Date,t4) OFFSET " + start + " ROWS FETCH NEXT " + pageSize + " ROWS ONLY ";

		PreparedStatement stmt = conn.prepareStatement(sql);	
		
		ResultSet rs = stmt.executeQuery();

		while (rs.next()) {
			commondata = new CommonData();
			commondata.setT1(rs.getString("Date"));
			commondata.setT2(rs.getString("Amount"));
			commondata.setT3(rs.getString("Discount"));
			commondata.setT4(rs.getString("Tax"));
			commondata.setT5(rs.getString("NetAmount"));
			dataList.add(commondata);
		}

		stmt = conn.prepareStatement("SELECT COUNT(*) AS totalCount, SUM(T.Amount) AS totalAmt, SUM(T.Discount) AS totDisAmt, SUM(T.Tax) AS totTaxAmt,SUM(T.NetAmount) AS totNetAmt"
				+ " FROM (SELECT CONVERT(Date,t4) AS [Date], SUM(n9+n10) AS Amount, SUM(n9) As Discount, SUM(n14) AS Tax,	SUM(n5) As NetAmount FROM POS001 "
				+ " WHERE RECORDSTATUS <> 4 AND SYSKEY<> 0 GROUP BY CONVERT(Date,t4) ) T ");
				
		rs = stmt.executeQuery();
		if (rs.next()) {
			result.put("dailysaleData", dataList);
			result.put("totalCount", rs.getLong("totalCount"));
			result.put("totalAmount", rs.getDouble("totalAmt"));
			result.put("totalDiscountAmt", rs.getDouble("totDisAmt"));
			result.put("totalTaxAmt", rs.getDouble("totTaxAmt"));
			result.put("totalNetAmt", rs.getDouble("totNetAmt"));
		}

		return result;
	}

}
