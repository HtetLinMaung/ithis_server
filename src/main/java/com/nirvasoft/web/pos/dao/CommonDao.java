package com.nirvasoft.web.pos.dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.nirvasoft.web.pos.model.ComboData;

@Repository
public class CommonDao {
	@Autowired
	RoleDao roleDao;

	

	public List<ComboData> getBins(Connection conn) throws SQLException {
		List<ComboData> bins = new ArrayList<>();
		ComboData bin = null;
		String sql = "SELECT SYSKEY,T1,T2 FROM STK007 WHERE RECORDSTATUS<>4";
		PreparedStatement stmt = conn.prepareStatement(sql);
		ResultSet rs = stmt.executeQuery();
		while (rs.next()) {
			bin = new ComboData();
			bin.setCode(rs.getString("SYSKEY")); // syskey
			bin.setT1(bin.getCode().equalsIgnoreCase("0") ? "-" : rs.getString("T1"));
			bin.setDescription(bin.getCode().equalsIgnoreCase("0") ? "-" : rs.getString("T2")); // desc
			bins.add(bin);
		}
		return bins;
	}

	

}
