package com.nirvasoft.web.pos.dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;

import org.springframework.stereotype.Repository;

import com.nirvasoft.web.pos.model.FilterRequest;
import com.nirvasoft.web.pos.model.GeneralWardData;
import com.nirvasoft.web.pos.model.GeneralWardDetailData;
import com.nirvasoft.web.pos.model.StatMedicationData;
import com.nirvasoft.web.pos.util.ServerUtil;

@Repository
public class GeneralWardDao {
	public ArrayList<GeneralWardData> getAllGeneralWards(Connection conn) throws SQLException {
		String sql ="SELECT gw.syskey, gwd.syskey AS detailSyskey, gw.t1, gw.t2, gw.n1, gw.n2, gw.n3, gw.pId, gw.RgsNo, "
				+ "gwd.t1 AS dayAt, gwd.t2 AS dayId, gwd.t3 AS dayName, gwd.t5 as nightAt, "
				+ "gwd.t6 as nightId, gwd.t7 as nightName, gwd.n1 as dayNurse, "
				+ "gwd.n2 as nightNurse, com.type, v.patientid, v.RgsName, v.RefNo, v.RgsNo "
				+ "FROM tblGeneralWard AS gw "
				+ "LEFT JOIN tblGeneralWardDetail AS gwd ON gw.syskey = gwd.parentid "
				+ "LEFT JOIN [dbo].[ComTable] AS com ON gw.parentid = com.syskey "
				+ "LEFT JOIN (SELECT DISTINCT pId, RgsNo, patientid, RgsName, RefNo "
				+ "From viewRegistration) AS v ON gw.pId = v.pId AND gw.RgsNo = v.RgsNo";
		PreparedStatement stmt = conn.prepareStatement(sql);
		ResultSet rs = stmt.executeQuery();
		ArrayList<GeneralWardData> list = new ArrayList<>();
		while(rs.next()) {
			GeneralWardData data = new GeneralWardData();
			data.setSyskey(rs.getLong("syskey"));
			data.setpId(rs.getInt("pId"));
			data.setRgsNo(rs.getInt("RgsNo"));
			data.setType(rs.getInt("n1"));
			data.setHeaderDesc(rs.getString("t2"));
			data.setOutcomeMet(rs.getBoolean("n2"));
			data.setInitialDate(rs.getString("t1"));
			data.setSelectedInterventions(rs.getInt("n3"));
			data.setDayNurse(rs.getBoolean("dayNurse"));
			data.setNightNurse(rs.getBoolean("nightNurse"));
			data.setDayNurseAt(rs.getString("dayAt"));
			data.setDayNurseId(rs.getString("dayId"));
			data.setDayNurseName(rs.getString("dayName"));
			data.setNightNurseAt(rs.getString("nightAt"));
			data.setNightNurseId(rs.getString("nightId"));
			data.setNightNurseName(rs.getString("nightName"));
			data.setType(rs.getInt("type"));
			data.setDetailSyskey(rs.getLong("detailSyskey"));
			data.setPatientId(rs.getString("patientid"));
			data.setPatientName(rs.getString("RgsName"));
			data.setAdNo(rs.getString("RefNo"));
			data.setRgsNo(rs.getInt("RgsNo"));
			list.add(data);
		}
		return list;
	}
	
	public ArrayList<GeneralWardData> getGeneralWards(FilterRequest filteredReq, Connection conn) throws SQLException {
		String sql = "SELECT gw.syskey, gw.parentid, gw.n1, gw.n2, gw.n3, gw.t1, gw.t2, gw.t3, gw.t4, gw.t5, "
				+ "com.description FROM tblGeneralWard AS gw "
				+ "LEFT JOIN [dbo].[ComTable] AS com ON com.syskey = gw.parentid";
		PreparedStatement stmt = conn.prepareStatement(sql);
		ResultSet rs = stmt.executeQuery();
		
		ArrayList<GeneralWardData> list = new ArrayList<>();
		
		while(rs.next()) {
			GeneralWardData data = new GeneralWardData();
			data.setSyskey(rs.getLong("syskey"));
			data.setParentId(rs.getLong("parentid"));
			data.setType(rs.getInt("n1"));
			data.setOutcomeMet(rs.getBoolean("n2"));
			data.setSelectedInterventions(rs.getInt("n3"));
			data.setInitialDate(rs.getString("t1"));
			data.setHeaderDesc(rs.getLong("parentid") == 0 ? rs.getString("t2") : rs.getString("description"));
			data.setOutcomeMetAt(rs.getString("t3"));
			data.setOutcomeMetId(rs.getString("t4"));
			data.setOutcomeMetName(rs.getString("t5"));
			
			sql = "SELECT syskey, t1, t2, t3, t5, t6, t7, n1, n2 FROM tblGeneralWardDetail "
					+ "WHERE parentid = ? AND ((REPLACE(SUBSTRING(t1, 0, 11), '-', '') >= ? "
					+ "AND REPLACE(SUBSTRING(t1, 0, 11), '-', '') <= ?) OR (REPLACE(SUBSTRING(t5, 0, 11), '-', '') >= ? "
					+ "AND REPLACE(SUBSTRING(t5, 0, 11), '-', '') <= ?))";
			stmt = conn.prepareStatement(sql);
			int i = 1;
			stmt.setLong(i++, data.getSyskey());
			stmt.setString(i++, fmtDateForJava(filteredReq.getFrom()));
			stmt.setString(i++, fmtDateForJava(filteredReq.getTo()));
			stmt.setString(i++, fmtDateForJava(filteredReq.getFrom()));
			stmt.setString(i++, fmtDateForJava(filteredReq.getTo()));
			ResultSet rs2 = stmt.executeQuery();
			ArrayList<GeneralWardDetailData> detailList = new ArrayList<>();
			while (rs2.next()) {
				GeneralWardDetailData detailData = new GeneralWardDetailData();
				detailData.setSyskey(rs2.getLong("syskey"));
				detailData.setDayNurseAt(rs2.getString("t1"));
				detailData.setDayNurseId(rs2.getString("t2"));
				detailData.setDayNurseName(rs2.getString("t3"));
				detailData.setNightNurseAt(rs2.getString("t5"));
				detailData.setNightNurseId(rs2.getString("t6"));
				detailData.setNightNurseName(rs2.getString("t7"));
				detailData.setDayNurse(rs2.getBoolean("n1"));
				detailData.setNightNurse(rs2.getBoolean("n2"));
				detailList.add(detailData);
			}
			data.setDetailList(detailList);
			
			list.add(data);
		}
		return list;
	}
	
	public ArrayList<GeneralWardData> getAllGeneralWardsInitial(FilterRequest filteredReq, Connection conn) throws SQLException {
		String sql ="SELECT COUNT(*) AS total FROM tblGeneralWard WHERE pId = ?";
		PreparedStatement stmt = conn.prepareStatement(sql);
		stmt.setLong(1, filteredReq.getPatientId());
		ResultSet rs = stmt.executeQuery();
		
		int generalWardLength = 0;
		while (rs.next()) {
			generalWardLength = rs.getInt("total");
		}
		ArrayList<GeneralWardData> list = new ArrayList<>();
		if (generalWardLength == 0) {
			sql = "SELECT syskey, type, description FROM [dbo].[ComTable] WHERE type >= 50";
			stmt = conn.prepareStatement(sql);
			rs = stmt.executeQuery();
			while(rs.next()) {
				GeneralWardData data = new GeneralWardData();
				data.setParentId(rs.getLong("syskey"));
				data.setType(rs.getInt("type"));
				data.setHeaderDesc(rs.getString("description"));
				data.setGeneralWardLength(generalWardLength);
				list.add(data);
			}
		} else {
			sql = "SELECT gw.syskey, gw.parentid, gw.n1, gw.n2, gw.n3, gw.t1, gw.t2, "
					+ "com.description, gwd.n1 AS dayNurse, gwd.n2 AS nightNurse, "
					+ "gwd.t1 AS dayAt, gwd.t2 AS dayId, gwd.t3 AS dayName, gwd.t5 AS nightAt, gwd.t6 AS nightId, gwd.t7 AS nightName "
					+ "FROM tblGeneralWard AS gw LEFT JOIN [dbo].[ComTable] AS com "
					+ "ON com.syskey = gw.parentid LEFT JOIN tblGeneralWardDetail AS gwd "
					+ "ON gwd.parentid = gw.syskey AND (SUBSTRING(gwd.t1, 0, 11) = ? OR SUBSTRING(gwd.t5, 0, 11) = ?) "
					+ "WHERE gw.pId = ?";
			stmt = conn.prepareStatement(sql);
			int i = 1;
			stmt.setString(i++, filteredReq.getDate());
			stmt.setString(i++, filteredReq.getDate());
			stmt.setLong(i++, filteredReq.getPatientId());
			rs = stmt.executeQuery();
			while(rs.next()) {
				GeneralWardData data = new GeneralWardData();
				data.setSyskey(rs.getLong("syskey"));
				data.setParentId(rs.getLong("parentid"));
				data.setType(rs.getInt("n1"));
				data.setHeaderDesc(rs.getString("description"));
				data.setOutcomeMet(rs.getBoolean("n2"));
				data.setInitialDate(rs.getString("t1"));
				data.setSelectedInterventions(rs.getInt("n3"));
				data.setDayNurse(rs.getBoolean("dayNurse"));
				data.setNightNurse(rs.getBoolean("nightNurse"));
				data.setDayNurseAt(rs.getString("dayAt"));
				data.setDayNurseId(rs.getString("dayId"));
				data.setDayNurseName(rs.getString("dayName"));
				data.setNightNurseAt(rs.getString("nightAt"));
				data.setNightNurseId(rs.getString("nightId"));
				data.setNightNurseName(rs.getString("nightName"));
				data.setGeneralWardLength(generalWardLength);
				list.add(data);
			}
		}
		return list;
	}
	
	public ArrayList<Long> saveGeneralWards(ArrayList<GeneralWardData> list, String date, Connection conn) throws SQLException {
		ArrayList<Long> updatedList = new ArrayList<>();
		String sql = "IF NOT EXISTS (SELECT * FROM dbo.tblGeneralWard WHERE syskey = ? AND n2 = 0) "
				+ "INSERT INTO dbo.tblGeneralWard (syskey, n1, n2, n3, t1, t2, t3, t4, t5, "
				+ "Doctorid, RefNo, [pId], [RgsNo], hsid, "
				+ "[userid], [username], [createddate], [modifieddate], parentid) "
				+ "VALUES(?, ?, ?, ?, ?, ?, ?, ?,"
				+ " ?, ?, ?, ?, ?,"
				+ " ?, ?, ?, ?, ?, ?) "
				+ "ELSE UPDATE tblGeneralWard SET t1 = ?, n2 = ?, n3 = ?, [userid] = ?, [username] = ?, [modifieddate] = ?"
				+ "WHERE syskey = ?";
		String currentDate = ServerUtil.getCurrentDate();
		String now = date;
		
		for (GeneralWardData data : list) {
			long newSyskey = getNextSyskey("tblGeneralWard", conn);
			PreparedStatement stmt = conn.prepareStatement(sql);
			int i = 1;
			stmt.setLong(i++, data.getSyskey());
			
			stmt.setLong(i++, newSyskey); // new syskey
			data.setSyskey(data.getSyskey() == 0 ? newSyskey: data.getSyskey());
			stmt.setInt(i++, data.getType()); // n1
			stmt.setBoolean(i++, data.isOutcomeMet()); // n2
			stmt.setInt(i++, data.getSelectedInterventions()); // n3
			stmt.setString(i++, data.getInitialDate()); // t1
			stmt.setString(i++, data.getHeaderDesc()); // t2
			stmt.setString(i++, data.getOutcomeMetAt()); // t3
			stmt.setString(i++, data.getOutcomeMetId()); // t4
			stmt.setString(i++, data.getOutcomeMetName()); // t5
			stmt.setLong(i++, data.getDoctorId());
			stmt.setString(i++, data.getSyskey() + "");			
			stmt.setLong(i++, data.getpId());
			stmt.setInt(i++, data.getRgsNo());
			stmt.setInt(i++, getHsid(conn));
			stmt.setString(i++, data.getUserid());
			stmt.setString(i++, data.getUsername());
			stmt.setString(i++, currentDate);
			stmt.setString(i++, currentDate);
			stmt.setLong(i++, data.getParentId());
			
			stmt.setString(i++, data.getInitialDate()); // t1
			stmt.setBoolean(i++, data.isOutcomeMet()); // n2
			stmt.setInt(i++, data.getSelectedInterventions()); // n3
			stmt.setString(i++, data.getUserid());
			stmt.setString(i++, data.getUsername());
			stmt.setString(i++, currentDate);
			stmt.setLong(i++, data.getSyskey());
			stmt.executeUpdate();
			
			if (!data.isDayNurse() && !data.isNightNurse()) {
				String sql2 = "DELETE FROM tblGeneralWardDetail "
						+ "WHERE parentid = ? AND (SUBSTRING(t1, 0, 11) = ? OR SUBSTRING(t5, 0, 11) = ?)";
				PreparedStatement stmt2 = conn.prepareStatement(sql2);
				i = 1;
				stmt2.setLong(i++, data.getSyskey());
				stmt2.setString(i++, now);
				stmt2.setString(i++, now);
				stmt2.executeUpdate();
			} else {
				String sql2 = "IF NOT EXISTS (SELECT * FROM tblGeneralWardDetail "
						+ "WHERE parentid = ? AND (SUBSTRING(t1, 0, 11) = ? OR SUBSTRING(t5, 0, 11) = ?)) "
						+ "INSERT INTO tblGeneralWardDetail (syskey, parentid, [userid], [username], "
						+ "[createddate], [modifieddate], t1, t2, t3, t5, t6, t7, n1, n2) "
						+ "VALUES "
						+ "(?, ?, ?, ?, ?, "
						+ "?, ?, ?, ?, ?, "
						+ "?, ?, ?, ?) "
						+ "ELSE UPDATE tblGeneralWardDetail SET t1 = ?, t2 = ?, t3 = ?, t5 = ?, t6 = ?, t7 = ?, "
						+ "n1 = ?, n2 = ?, [modifieddate] = ? "
						+ "WHERE parentid = ? AND (SUBSTRING(t1, 0, 11) = ? OR SUBSTRING(t5, 0, 11) = ?)";
				PreparedStatement stmt2 = conn.prepareStatement(sql2);
				i = 1;
				
				stmt2.setLong(i++, data.getSyskey());
				stmt2.setString(i++, now);
				stmt2.setString(i++, now);
				
				stmt2.setLong(i++, getNextSyskey("tblGeneralWardDetail", conn)); // new syskey
				stmt2.setLong(i++, data.getSyskey());
				stmt2.setString(i++, data.getUserid());
				stmt2.setString(i++, data.getUsername());
				stmt2.setString(i++, currentDate);
				stmt2.setString(i++, currentDate);
				stmt2.setString(i++, data.getDayNurseAt()); // t1
				stmt2.setString(i++, data.getDayNurseId()); // t2
				stmt2.setString(i++, data.getDayNurseName()); // t3
				stmt2.setString(i++, data.getNightNurseAt()); // t5
				stmt2.setString(i++, data.getNightNurseId()); // t6
				stmt2.setString(i++, data.getNightNurseName()); // t7
				stmt2.setBoolean(i++, data.isDayNurse()); // n1
				stmt2.setBoolean(i++, data.isNightNurse()); // n2
				
				stmt2.setString(i++, data.getDayNurseAt()); // t1
				stmt2.setString(i++, data.getDayNurseId()); // t2
				stmt2.setString(i++, data.getDayNurseName()); // t3
				stmt2.setString(i++, data.getNightNurseAt()); // t5
				stmt2.setString(i++, data.getNightNurseId()); // t6
				stmt2.setString(i++, data.getNightNurseName()); // t7
				stmt2.setBoolean(i++, data.isDayNurse()); // n1
				stmt2.setBoolean(i++, data.isNightNurse()); // n2
				stmt2.setString(i++, currentDate);
				stmt2.setLong(i++, data.getSyskey());
				stmt2.setString(i++, now);
				stmt2.setString(i++, now);
				stmt2.executeUpdate();		
			}
			updatedList.add(newSyskey);
		}
		
		
		
		return updatedList;
	}
	
	public long updateGeneralWard(long syskey, GeneralWardData data, Connection conn) throws SQLException {
		String sql = "UPDATE tblGeneralWard SET t1 = ?, n2 = ?, t3 = ?, t4 = ?, t5 = ? WHERE syskey = ?";
		PreparedStatement stmt = conn.prepareStatement(sql);
		int i = 1;
		stmt.setString(i++, data.getInitialDate());
		stmt.setBoolean(i++, data.isOutcomeMet());
		stmt.setString(i++, data.getOutcomeMetAt()); // t3
		stmt.setString(i++, data.getOutcomeMetId()); // t4
		stmt.setString(i++, data.getOutcomeMetName()); // t5
		stmt.setLong(i++, data.getSyskey());
		stmt.executeUpdate();
		sql = "UPDATE tblGeneralWardDetail SET t1 = ?, t2 = ?, t3 = ?, t5 = ?, t6 = ?, t7 = ?, n1 = ?, n2 = ? WHERE syskey = ?";
		PreparedStatement stmt2 = conn.prepareStatement(sql);
		i = 1;
		stmt2.setString(i++, data.getDayNurseAt()); // t1
		stmt2.setString(i++, data.getDayNurseId()); // t2
		stmt2.setString(i++, data.getDayNurseName()); // t3
		stmt2.setString(i++, data.getNightNurseAt()); // t5
		stmt2.setString(i++, data.getNightNurseId()); // t6
		stmt2.setString(i++, data.getNightNurseName()); // t7
		stmt2.setBoolean(i++, data.isDayNurse()); // n1
		stmt2.setBoolean(i++, data.isNightNurse()); // n2
		stmt2.setLong(i++, data.getDetailSyskey());
		stmt2.executeUpdate();
		return syskey;
	}
	
	public int deleteGeneralWard(long syskey, long detailSyskey, Connection conn) throws SQLException {
		String sql = "DELETE FROM tblGeneralWard WHERE syskey = ?";
		PreparedStatement stmt = conn.prepareStatement(sql);
		int i = 1;
		stmt.setLong(i++, syskey);
		stmt.executeUpdate();
		sql = "DELETE FROM tblGeneralWardDetail WHERE syskey = ?";
		stmt = conn.prepareStatement(sql);
		i = 1;
		stmt.setLong(i++, detailSyskey);
		return stmt.executeUpdate();
	}
	
	private int getHsid(Connection conn) throws SQLException {
		String sql = "select syskey from clinic";
		PreparedStatement stmt = conn.prepareStatement(sql);
		ResultSet rs = stmt.executeQuery();
		int hsid = 0;
		while(rs.next()) {
			hsid = rs.getInt("syskey");
		}
		return hsid;
	}
	
	private long getNextSyskey(String tableName, Connection conn) throws SQLException {
		String sql = String.format("SELECT max(syskey) AS syskey FROM %s", tableName);
		PreparedStatement stmt = conn.prepareStatement(sql);
		ResultSet rs = stmt.executeQuery();
		long syskey = 0;
		while(rs.next()) {
			syskey = rs.getLong("syskey");
		}
		return syskey + 1;
	}
	
	private String getNow() {
		String currentDate = ServerUtil.getCurrentDate();
		return currentDate.substring(0, 4) + "-" + currentDate.substring(4, 6) + "-" + currentDate.substring(6, 8);
	}
	
	private String fmtDateForJava(String date) {
		return date.replaceAll("-", "");
	}
}
