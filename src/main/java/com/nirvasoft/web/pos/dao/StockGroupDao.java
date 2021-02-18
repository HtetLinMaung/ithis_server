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
import com.nirvasoft.web.pos.model.StockGroupData;
import com.nirvasoft.web.pos.util.ServerUtil;
import com.nirvasoft.web.pos.util.SyskeyUtil;

@Repository
public class StockGroupDao {

	public int saveStockGroup(StockGroupData data, Connection conn) throws SQLException {
		int effectedRow = 0;
		String sql = "INSERT STK015 (syskey, createddate, modifieddate, userid, username, RecordStatus, SyncStatus, SyncBatch, t1, "
				+ "t2,t3, n1, n2, n3, UserSysKey,t4,n4,n5,n6,n7,n8,n9,n10,n11,n12,n13,n14,n15,t5,n16,n17,n18,n19,n20,n21,n22,n23,n24,n25,n26,n27,n28,n29) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)";
		PreparedStatement stat = conn.prepareStatement(sql);
		String currentDate = ServerUtil.getCurrentDate();
		int i = 1;
		stat.setString(i++, SyskeyUtil.getSyskey()+"");
		stat.setString(i++, currentDate);
		stat.setString(i++, currentDate);
		stat.setString(i++, data.getUserId());
		stat.setString(i++, data.getUserName());
		stat.setInt(i++, 1); // RecordStatus
		stat.setInt(i++, 0); // SyncStatus
		stat.setLong(i++, 0); // SyncBatch
		stat.setString(i++, data.getT1()); // t1
		stat.setString(i++, data.getT2()); // t2
		stat.setString(i++, data.getT3()); // t3
		stat.setInt(i++, 0);// n1
		stat.setInt(i++, Integer.parseInt(data.getCostingMethod()));// n2
		stat.setLong(i++, 0);// n3
		stat.setLong(i++, Long.parseLong(data.getUserSyskey())); // userSyskey
		stat.setString(i++, data.getT4()); // t4
		stat.setLong(i++, Long.parseLong(data.getItemtype())); // n4
		stat.setLong(i++, 0); // n5
		stat.setLong(i++, Long.parseLong(data.getStockSyskey())); // n6
		stat.setLong(i++, Long.parseLong(data.getPurchaseSyskey())); // n7
		stat.setLong(i++, Long.parseLong(data.getPrSyskey())); // n8
		stat.setLong(i++, Long.parseLong(data.getSaleSyskey())); // n9
		stat.setLong(i++, Long.parseLong(data.getSrSyskey())); // n10
		stat.setLong(i++, Long.parseLong(data.getCogsSyskey())); // n11
		stat.setLong(i++, 0); // n12
		stat.setLong(i++, 0); // n13
		stat.setLong(i++, 0); // n14
		stat.setLong(i++, 1); // n15
		stat.setString(i++, ""); // t5
		stat.setInt(i++, Integer.parseInt(data.getBath()));
		stat.setInt(i++, Integer.parseInt(data.getBath()) == 0 ? 0 : 1);
		stat.setInt(i++, 0); // n18
		stat.setInt(i++, 0);
		stat.setInt(i++, 0);
		stat.setInt(i++, 0);
		stat.setInt(i++, 0);
		stat.setInt(i++, 0);
		stat.setInt(i++, 0);
		stat.setInt(i++, 0);
		stat.setInt(i++, 0);
		stat.setInt(i++, Integer.parseInt(data.getDimension())); // n27
		stat.setInt(i++, 0);
		stat.setInt(i++, data.getIsParentGroup());//n29 isParentGroup

		effectedRow = stat.executeUpdate();

		return effectedRow;
	}

	public Map<String, Object> searchStockGroupList(HashMap<String, Object> data, Connection conn) throws SQLException {
		Map<String, Object> result = new HashMap<>();
		List<CommonData> dataList = new ArrayList<CommonData>();
		CommonData commondata = null;
		String code = (String) data.get("code");
		String description = (String) data.get("description");
		String prefix = (String) data.get("prefix");
		int totalCount = 0;

		String sql = "SELECT SYSKEY,T1,T2,T3,T4 FROM STK015";
		String whereClause = " WHERE RECORDSTATUS<>4 AND SYSKEY<>0";
		if(!("".equals(code)&& code.isEmpty()) || !("".equals(description) && description.isEmpty()) || !("".equals(prefix) && prefix.isEmpty())){
			whereClause += " AND (T1 LIKE ? OR T2 LIKE ? OR T4 LIKE ?) ";
		}
		sql += whereClause;
		int currentPage = (int) data.get("currentPage");
		int pageSize = (int) data.get("pageSize");
		int start = (currentPage - 1) * pageSize;

		sql += " ORDER BY T1 OFFSET " + start + " ROWS FETCH NEXT " + pageSize + " ROWS ONLY ";

		PreparedStatement stmt = conn.prepareStatement(sql);
		if(!("".equals(code) && code.isEmpty()) || !("".equals(description) && description.isEmpty()) || !("".equals(prefix) && prefix.isEmpty())){
			stmt.setString(1, "%"+code+"%");
			stmt.setString(2, "%"+description+"%");
			stmt.setString(3, "%"+prefix+"%");
		}
		ResultSet rs = stmt.executeQuery();

		while (rs.next()) {
			commondata = new CommonData();
			commondata.setSyskey(rs.getString("SYSKEY"));
			commondata.setT1(rs.getString("T1"));
			commondata.setT2(rs.getString("T2"));
			commondata.setT3(rs.getString("T3"));
			commondata.setT4(rs.getString("T4"));
			dataList.add(commondata);
		}

		stmt = conn.prepareStatement("SELECT COUNT(SYSKEY) AS totalCount FROM STK015 " + whereClause);
		if(!("".equals(code) && code.isEmpty()) || !("".equals(description) && description.isEmpty()) || !("".equals(prefix) && prefix.isEmpty())){
			stmt.setString(1, "%"+code+"%");
			stmt.setString(2, "%"+description+"%");
			stmt.setString(3, "%"+prefix+"%");
		}
		rs = stmt.executeQuery();
		if (rs.next())
			totalCount = rs.getInt("totalCount");

		result.put("stockGroupData", dataList);
		result.put("totalCount", totalCount);

		return result;
	}

	

}
