package com.nirvasoft.web.pos.dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Repository;

import com.nirvasoft.web.pos.model.ComboData;
import com.nirvasoft.web.pos.model.UserData;
import com.nirvasoft.web.pos.util.EncryptionUtil;

@Repository
public class ElementaryDao {
	public UserData getLoginUser(UserData loginData, Connection conn) throws SQLException {
		UserData userData = new UserData();
		String sql = "SELECT UVM005.SYSKEY,UVM012.SYSKEY AS U12SK,UVM012.T1,UVM012.T2 FROM UVM012 INNER JOIN UVM005 ON UVM012.SYSKEY=UVM005.N4 WHERE UVM005.RECORDSTATUS <> 4 AND  UVM005.T1 LIKE ? AND UVM005.T2 LIKE ?";
		PreparedStatement stat = conn.prepareStatement(sql);
		stat.setString(1, loginData.getUserId());
		stat.setString(2, EncryptionUtil.encrypt(loginData.getPassword()));

		ResultSet rs = stat.executeQuery();
		if (rs.next()) {
			userData.setSyskey(rs.getString("SYSKEY"));
			userData.setU12Syskey(rs.getString("U12SK"));
			userData.setUserId(rs.getString("T1"));
			userData.setUserName(rs.getString("T2"));
		}

		return userData;
	}
	public UserData getUserData(Connection conn, String syskey) throws SQLException {
		UserData result = new UserData();
		String sql = "SELECT N1,N2 FROM UVM005 WHERE SYSKEY=?";
		PreparedStatement stat = conn.prepareStatement(sql);
		stat.setString(1, syskey);
		ResultSet rs = stat.executeQuery();
		if (rs.next()) {
			result.setLocroleSyskey(rs.getString("N1"));
			result.setLocrolestatus(rs.getString("N2"));
		}

		return result;
	}

	public List<ComboData> getLocations(Connection conn, UserData userData) throws SQLException {
		List<ComboData> locationData = new ArrayList<ComboData>();
		ComboData data = null;
		String sql = "";
		if (userData.getLocrolestatus().equals("1"))
			sql = "SELECT SYSKEY,T1,T2,L1,L2,L3 FROM STK006 WHERE RECORDSTATUS<>4 AND SYSKEY=?";
		else
			sql = "SELECT SYSKEY,T1,T2,L1,L2,L3 FROM STK006 WHERE RECORDSTATUS<>4 AND SYSKEY IN (SELECT N2 FROM WJUN004 WHERE N3=?) ";

		PreparedStatement stmt = conn.prepareStatement(sql);
		stmt.setString(1, userData.getLocroleSyskey());
		ResultSet rs = stmt.executeQuery();

		while (rs.next()) {
			data = new ComboData();
			data.setCode(rs.getString("SYSKEY"));
			data.setDescription(data.getCode().equalsIgnoreCase("0") ? "-" : rs.getString("T2"));
			data.setT1(data.getCode().equalsIgnoreCase("0") ? "-" : rs.getString("T1"));
			data.setT2(rs.getString("l1"));
			data.setT3(rs.getString("l2"));
			data.setL3(rs.getDouble("l3"));
			locationData.add(data);
		}

		return locationData;
	}
	public List<ComboData> getLocation(Connection conn) throws SQLException {
		List<ComboData> locationData = new ArrayList<ComboData>();
		ComboData data = null;
		String sql = "SELECT SYSKEY,T1,T2,L1,L2,L3 FROM STK006 WHERE RECORDSTATUS<>4";
		PreparedStatement stmt = conn.prepareStatement(sql);
		ResultSet rs = stmt.executeQuery();

		while (rs.next()) {
			data = new ComboData();
			data.setCode(rs.getString("SYSKEY"));
			data.setDescription(data.getCode().equalsIgnoreCase("0") ? "-" : rs.getString("T2"));
			data.setT1(data.getCode().equalsIgnoreCase("0") ? "-" : rs.getString("T1"));
			data.setT2(rs.getString("l1"));
			data.setT3(rs.getString("l2"));
			data.setL3(rs.getDouble("l3"));
			locationData.add(data);
		}

		return locationData;
	}
}
