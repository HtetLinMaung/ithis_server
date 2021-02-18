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

import com.nirvasoft.web.pos.model.CommonTypeData;
import com.nirvasoft.web.pos.util.ServerUtil;

@Repository
public class CommonTypeDao {
	public boolean isCodeExist(String CommonTypeData, Connection cnn) throws SQLException {
		String sql = "SELECT * FROM CommonType WHERE RECORDSTATUS <> 4 and Syskey =?";
		PreparedStatement stat = cnn.prepareStatement(sql);
		stat.setString(1, CommonTypeData);
		ResultSet rs = stat.executeQuery();
		if (rs.next()) {
			return true;
		}
		return false;
	}

	public int insert(CommonTypeData data, Connection cnn) throws SQLException {
		int i = 1;
		int effectedRow = 0;
		String currentDate = ServerUtil.getCurrentDate();
		String sql = "INSERT INTO CommonType(syskey,createddate,modifieddate,userid,username,RecordStatus,SyncStatus,SyncBatch,usersyskey,type,code,description)"
				+ "VALUES(?,?,?,?,?,?,?,?,?,?,?,?)";
		PreparedStatement stat = cnn.prepareStatement(sql);
		stat.setLong(i++, Long.parseLong(data.getSyskey()));
		stat.setString(i++, currentDate);
		stat.setString(i++, currentDate);
		stat.setString(i++, "");
		stat.setString(i++, "");
		stat.setInt(i++, 1);
		stat.setInt(i++, 0);
		stat.setLong(i++, 0);
		stat.setLong(i++, 0);
		stat.setLong(i++, 0);
		stat.setString(i++, data.getCode());
		stat.setString(i++, data.getDescription());

		effectedRow = stat.executeUpdate();
		return effectedRow;
	}

	public int update(CommonTypeData data, Connection conn) throws SQLException {
		int effectedRow = 0;
		System.out.println(data.toString());
		String sql = "UPDATE CommonType SET  code='" + data.getCode() + "',description='" + data.getDescription() + "'";
		PreparedStatement stmt = conn.prepareStatement(sql);
		System.out.println(sql);
		effectedRow += stmt.executeUpdate();
		return effectedRow;
	}

	public HashMap<String, Object> get(CommonTypeData data, Connection conn)
			throws SQLException {

		Map<String, Object> result = new HashMap<>();
		List<CommonTypeData> NurseList = new ArrayList<CommonTypeData>();
		CommonTypeData nursedata = null;
		String sql = "SELECT CommonType.syskey,CommonType.code,CommonType.description FROM CommonType WHERE CommonType.RECORDSTATUS<>4 ";

		if (!data.getSyskey().equals("") && !data.getSyskey().equals("0")) {

			sql += " and CommonType.syskey = '" + data.getSyskey() + "'";
		}
		if (!data.getCode().equals("") && !data.getCode().equals(null)) {
			sql += "AND CommonType.code like '%" + data.getCode() + "%'";

		}
		if (!data.getDescription().equals("") && !data.getDescription().equals(null)) {
			sql += "AND CommonType.description like '%" + data.getDescription() + "%'";

		}
		sql += "Order by CommonType.code asc";
		PreparedStatement stmt = conn.prepareStatement(sql);
		ResultSet rs = stmt.executeQuery();

		while (rs.next()) {
			nursedata = new CommonTypeData();
			nursedata.setSyskey(rs.getString("syskey"));
			nursedata.setCode(rs.getString("code"));
			nursedata.setDescription(rs.getString("description"));;
			NurseList.add(nursedata);
		}
		System.out.print(NurseList);
		result.put("NurseList", NurseList);
		return (HashMap<String, Object>) result;
	}
	public int delete(String id, Connection conn) throws SQLException {
		int effectedRow = 0;
		String sql = "UPDATE CommonType SET RecordStatus = 4 WHERE syskey = '" + id + "'";
		PreparedStatement stat = conn.prepareStatement(sql);
		System.out.print(sql);
		effectedRow += stat.executeUpdate();
		return effectedRow;
	}


}
