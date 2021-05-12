package com.nirvasoft.web.pos.dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.HashMap;

import org.springframework.stereotype.Repository;

import com.nirvasoft.web.pos.model.FilterRequest;
import com.nirvasoft.web.pos.model.GeneralWardData;
import com.nirvasoft.web.pos.model.GeneralWardDetailData;
import com.nirvasoft.web.pos.model.GoalData;
import com.nirvasoft.web.pos.model.GwData;
import com.nirvasoft.web.pos.model.ResponseData;
import com.nirvasoft.web.pos.model.StatMedicationData;
import com.nirvasoft.web.pos.util.QueryUtil;
import com.nirvasoft.web.pos.util.ServerUtil;

@Repository
public class GeneralWardDao extends QueryUtil {
	public ArrayList<GwData> getPateintADL(FilterRequest req, Connection conn) 
			throws SQLException {
		String sql = "SELECT c.type, c.description, gw.t1, gw.n3, gw.n2, gw.t2, gw.syskey, "
				+ "gw.parentid FROM ComTable AS c LEFT JOIN (SELECT * FROM tblGeneralWard WHERE "
				+ "RgsNo = ? AND REPLACE(SUBSTRING(t1, 0, 11), '-', '') >= ?) AS gw "
				+ "ON c.syskey = gw.parentid WHERE c.type >= 50";
		PreparedStatement stmt = conn.prepareStatement(sql);
		int i = 1;
		stmt.setLong(i++, req.getRgsno());
		stmt.setString(i++, req.getFrom());
		ResultSet rs = stmt.executeQuery();
		
		ArrayList<GwData> list = new ArrayList<>();
		while(rs.next()) {
			GwData data = new GwData();
			data.setSyskey(rs.getLong("syskey"));
			data.setGoal(rs.getInt("type"));
			data.setInterDesc(rs.getString("description"));
			data.setInitDate(rs.getString("t1"));
			data.setInterventionFrom(rs.getLong("parentid"), rs.getInt("n3"));
			data.setOutcomeMet(rs.getBoolean("n2"));
			data.setOutcomeMetAt(rs.getString("t2"));
			
			sql = "SELECT t1, t2, t3, t4, t5, t6, t7, n1, n2 FROM tblGeneralWardDetail "
					+ "WHERE parentId = ? AND REPLACE(t7, '-', '') <= ?";
			stmt = conn.prepareStatement(sql);
			i = 1;
			stmt.setLong(i++, data.getSyskey());
			stmt.setString(i++, req.getTo());
			ResultSet rs2 = stmt.executeQuery();
			
			ArrayList<GeneralWardDetailData> shifts = new ArrayList<>();
			while (rs2.next()) {
				GeneralWardDetailData detailData = new GeneralWardDetailData();
				detailData.setDayAt(rs2.getString("t1"));
				detailData.setDayId(rs2.getString("t2"));
				detailData.setDayName(rs2.getString("t3"));
				detailData.setNightAt(rs2.getString("t4"));
				detailData.setNightId(rs2.getString("t5"));
				detailData.setNightName(rs2.getString("t6"));
				detailData.setDate(rs2.getString("t7"));
				detailData.setNight(rs2.getBoolean("n2"));
				detailData.setDay(rs2.getBoolean("n1"));
				shifts.add(detailData);
			}
			data.setShifts(shifts);
			list.add(data);
		}
		
		return list;
	}
	
	public ResponseData getAllGws(FilterRequest req, Connection conn) throws SQLException {
		String sql = "SELECT v.patientid, v.RgsName, v.RefNo, v.RgsNo, c.description, l.syskey, l.n1, "
				+ "l.parentid, l.n3, l.t1, l.n2, l.t2 FROM tblGeneralWard AS l LEFT JOIN "
				+ "(SELECT DISTINCT pId, RgsNo, patientid, RgsName, RefNo From "
				+ "viewRegistration) AS v ON l.pId = v.pId AND v.RgsNo = l.RgsNo LEFT JOIN "
				+ "ComTable AS c ON l.parentid = c.syskey";
		String[] keys = {"v.patientid", "v.RgsName", "v.RefNo", "c.description", "l.n1", 
				"l.t1", "l.n2", "l.t2"};
		ResultSet rs = executePaginationQuery(sql, keys, req, conn);
		ArrayList<HashMap<String, Object>> list = new ArrayList<>();
		while (rs.next()) {
			GwData data = new GwData();
			data.setPatientId(rs.getString("patientid"));
			data.setPatientName(rs.getString("RgsName"));
			data.setAdNo(rs.getString("RefNo"));
			data.setInterDesc(rs.getString("description"));
			data.setSyskey(rs.getLong("syskey"));
			data.setGoal(rs.getInt("n1"));
			data.setInterventionFrom(rs.getLong("parentid"), rs.getInt("n3"));
			data.setInitDate(rs.getString("t1"));
			data.setOutcomeMet(rs.getBoolean("n2"));
			data.setOutcomeMetAt(rs.getString("t2"));
			data.setRgsNo(rs.getLong("RgsNo"));
			list.add(data.toHashMap());
		}
		return createResponseData(req, list, 
				getTotalOf("tblGeneralWard AS l LEFT JOIN "
						+ "(SELECT DISTINCT pId, RgsNo, patientid, RgsName, RefNo "
						+ "From viewRegistration) AS v ON l.pId = v.pId AND v.RgsNo = l.RgsNo "
						+ "LEFT JOIN ComTable AS c ON l.parentid = c.syskey", getWhereQuery(), 
						new Object[] {}, conn));
	}
	
	public ArrayList<GeneralWardDetailData> getShiftsByParent(long parentId, Connection conn) throws SQLException {
		String sql = "SELECT syskey, parentId, t1, t2, t3, t4, t5, t6, t7, n1, n2 "
				+ "FROM tblGeneralWardDetail WHERE parentId = ?";
		PreparedStatement stmt = conn.prepareStatement(sql);
		stmt.setLong(1, parentId);
		ResultSet rs = stmt.executeQuery();
		
		ArrayList<GeneralWardDetailData> shifts = new ArrayList<>();
		while(rs.next()) {
			GeneralWardDetailData detailData = new GeneralWardDetailData();
			detailData.setSyskey(rs.getLong("syskey"));
			detailData.setDayAt(rs.getString("t1"));
			detailData.setDayId(rs.getString("t2"));
			detailData.setDayName(rs.getString("t3"));
			detailData.setNightAt(rs.getString("t4"));
			detailData.setNightId(rs.getString("t5"));
			detailData.setNightName(rs.getString("t6"));
			detailData.setDate(rs.getString("t7"));
			detailData.setNight(rs.getBoolean("n2"));
			detailData.setDay(rs.getBoolean("n1"));
			shifts.add(detailData);
		}
		return shifts;
	}
	
	public ArrayList<GwData> getGwsByRgsNo(FilterRequest req, Connection conn) throws SQLException {
		String sql = "SELECT syskey, n1, parentid, n3, t1, n2, t2 FROM "
				+ "tblGeneralWard WHERE RgsNo = ? AND n2 = 0";
		PreparedStatement stmt = conn.prepareStatement(sql);
		stmt.setLong(1, req.getRgsno());
		ResultSet rs = stmt.executeQuery();
		
		ArrayList<GwData> list = new ArrayList<>();
		while (rs.next()) {
			GwData data = new GwData();
			data.setSyskey(rs.getLong("syskey"));
			data.setGoal(rs.getInt("n1"));
			data.setInterventionFrom(rs.getLong("parentid"), rs.getInt("n3"));
			data.setInitDate(rs.getString("t1"));
			data.setOutcomeMet(rs.getBoolean("n2"));
			data.setOutcomeMetAt(rs.getString("t2"));
			
			sql = "SELECT syskey, parentId, t1, t2, t3, t4, t5, t6, t7, n1, n2 "
					+ "FROM tblGeneralWardDetail WHERE parentId = ?";
			stmt = conn.prepareStatement(sql);
			stmt.setLong(1, data.getSyskey());
			ResultSet rs2 = stmt.executeQuery();
			ArrayList<GeneralWardDetailData> shifts = new ArrayList<>();
			while(rs2.next()) {
				GeneralWardDetailData detailData = new GeneralWardDetailData();
				detailData.setSyskey(rs2.getLong("syskey"));
				detailData.setDayAt(rs2.getString("t1"));
				detailData.setDayId(rs2.getString("t2"));
				detailData.setDayName(rs2.getString("t3"));
				detailData.setNightAt(rs2.getString("t4"));
				detailData.setNightId(rs2.getString("t5"));
				detailData.setNightName(rs2.getString("t6"));
				detailData.setDate(rs2.getString("t7"));
				detailData.setNight(rs2.getBoolean("n2"));
				detailData.setDay(rs2.getBoolean("n1"));
				shifts.add(detailData);
			}
			data.setShifts(shifts);	
			list.add(data);
		}
		
		return list;
		
	}
	
	public ArrayList<GoalData> getAllGoals(Connection conn) throws SQLException {
		String sql = "SELECT syskey, type, description FROM [dbo].[ComTable] WHERE type >= 50";
		PreparedStatement stmt = conn.prepareStatement(sql);
		ResultSet rs = stmt.executeQuery();
		
		
		ArrayList<GoalData> list = new ArrayList<>();
		while(rs.next()) {
			GoalData data = new GoalData();
			data.setSyskey(rs.getLong("syskey"));
			data.setType(rs.getInt("type"));
			data.setDescription(rs.getString("description"));
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
	
	public ArrayList<Long> saveGeneralWards(ArrayList<GwData> list, Connection conn) 
			throws SQLException {
		ArrayList<Long> updatedList = new ArrayList<>();
		String currentDate = ServerUtil.getCurrentDate();
		String sql = "IF NOT EXISTS (SELECT * FROM tblGeneralWard WHERE syskey = ?) "
				+ "INSERT INTO tblGeneralWard (syskey, n1, parentid, n3, t1, n2, t2, pId, "
				+ "RgsNo, hsid, userid, username, createddate, modifieddate) VALUES "
				+ "(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?) ELSE UPDATE tblGeneralWard "
				+ "SET n1 = ?, parentId = ?, n3 = ?, t1 = ?, n2 = ?, t2 = ?, userid = ?, "
				+ "username = ?, modifieddate = ? WHERE syskey = ?";
		
		
		long hsid = getHsid(conn);
		
		for (GwData data: list) {
			int i = 1;
			long newSyskey = getNextSyskey("tblGeneralWard", conn);
			PreparedStatement stmt = conn.prepareStatement(sql);
			stmt.setLong(i++, data.getSyskey());			
			
			stmt.setLong(i++, newSyskey);
			stmt.setInt(i++, data.getGoal()); // n1
			stmt.setLong(i++, data.getParentId());
			stmt.setInt(i++, data.getSelectedDesc()); // n3
			stmt.setString(i++, data.getInitDate()); // t1
			stmt.setInt(i++, data.isOutcomeMet() ? 1 : 0); // n2
			stmt.setString(i++, data.getOutcomeMetAt()); // t2
			stmt.setLong(i++, data.getpId());
			stmt.setLong(i++, data.getRgsNo());
			stmt.setLong(i++, hsid);
			stmt.setString(i++, data.getUserid());
			stmt.setString(i++, data.getUsername());
			stmt.setString(i++, currentDate);
			stmt.setString(i++, currentDate);
			
			// update
			stmt.setInt(i++, data.getGoal()); // n1
			stmt.setLong(i++, data.getParentId());
			stmt.setInt(i++, data.getSelectedDesc()); // n3
			stmt.setString(i++, data.getInitDate()); // t1
			stmt.setInt(i++, data.isOutcomeMet() ? 1 : 0); // n2
			stmt.setString(i++, data.getOutcomeMetAt()); // t2
			stmt.setString(i++, data.getUserid());
			stmt.setString(i++, data.getUsername());
			stmt.setString(i++, currentDate);
			stmt.setLong(i++, data.getSyskey());
			stmt.executeUpdate();
			
			String detailSql = "IF NOT EXISTS (SELECT * FROM tblGeneralWardDetail "
					+ "WHERE syskey = ?) "
					+ "INSERT INTO tblGeneralWardDetail (userid, username, createddate, "
					+ "modifieddate, syskey, parentid, t1, t2, t3, t4, t5, t6, t7, n1, n2) VALUES"
					+ " (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?) ELSE "
					+ "UPDATE tblGeneralWardDetail SET userid = ?, username = ?, modifieddate = ?,"
					+ "t1 = ?, t2 = ?, t3 = ?, t4 = ?, t5 = ?, t6 = ?, n1 = ?, n2 = ? "
					+ "WHERE syskey = ?";
			for (GeneralWardDetailData detailData: data.getShifts()) {
				PreparedStatement detailStmt = conn.prepareStatement(detailSql);
				int j = 1;
				
				detailStmt.setLong(j++, detailData.getSyskey());
				
				detailStmt.setString(j++, data.getUserid());
				detailStmt.setString(j++, data.getUsername());
				detailStmt.setString(j++, currentDate);
				detailStmt.setString(j++, currentDate);
				detailStmt.setLong(j++, getNextSyskey("tblGeneralWardDetail", conn));
				detailStmt.setLong(j++, data.getSyskey() == 0 ? newSyskey: data.getSyskey());
				detailStmt.setString(j++, detailData.getDayAt());
				detailStmt.setString(j++, detailData.getDayId());
				detailStmt.setString(j++, detailData.getDayName());
				detailStmt.setString(j++, detailData.getNightAt());
				detailStmt.setString(j++, detailData.getNightId());
				detailStmt.setString(j++, detailData.getNightName());
				detailStmt.setString(j++, detailData.getDate());
				detailStmt.setInt(j++, detailData.isDay() ? 1 : 0);
				detailStmt.setInt(j++, detailData.isNight() ? 1 : 0);
				
				// update
				detailStmt.setString(j++, data.getUserid());
				detailStmt.setString(j++, data.getUsername());
				detailStmt.setString(j++, currentDate);
				detailStmt.setString(j++, detailData.getDayAt());
				detailStmt.setString(j++, detailData.getDayId());
				detailStmt.setString(j++, detailData.getDayName());
				detailStmt.setString(j++, detailData.getNightAt());
				detailStmt.setString(j++, detailData.getNightId());
				detailStmt.setString(j++, detailData.getNightName());
				detailStmt.setInt(j++, detailData.isDay() ? 1 : 0);
				detailStmt.setInt(j++, detailData.isNight() ? 1 : 0);
				detailStmt.setLong(j++, detailData.getSyskey());
				
				detailStmt.executeUpdate();
			}
			
			updatedList.add(newSyskey++);
		}
		return updatedList;
				
	}
	
//	public ArrayList<Long> saveGeneralWards(ArrayList<GeneralWardData> list, String date, Connection conn) throws SQLException {
//		ArrayList<Long> updatedList = new ArrayList<>();
//		String sql = "IF NOT EXISTS (SELECT * FROM dbo.tblGeneralWard WHERE syskey = ? AND n2 = 0) "
//				+ "INSERT INTO dbo.tblGeneralWard (syskey, n1, n2, n3, t1, t2, t3, t4, t5, "
//				+ "Doctorid, RefNo, [pId], [RgsNo], hsid, "
//				+ "[userid], [username], [createddate], [modifieddate], parentid) "
//				+ "VALUES(?, ?, ?, ?, ?, ?, ?, ?,"
//				+ " ?, ?, ?, ?, ?,"
//				+ " ?, ?, ?, ?, ?, ?) "
//				+ "ELSE UPDATE tblGeneralWard SET t1 = ?, n2 = ?, n3 = ?, [userid] = ?, [username] = ?, [modifieddate] = ?"
//				+ "WHERE syskey = ?";
//		String currentDate = ServerUtil.getCurrentDate();
//		String now = date;
//		
//		for (GeneralWardData data : list) {
//			long newSyskey = getNextSyskey("tblGeneralWard", conn);
//			PreparedStatement stmt = conn.prepareStatement(sql);
//			int i = 1;
//			stmt.setLong(i++, data.getSyskey());
//			
//			stmt.setLong(i++, newSyskey); // new syskey
//			data.setSyskey(data.getSyskey() == 0 ? newSyskey: data.getSyskey());
//			stmt.setInt(i++, data.getType()); // n1
//			stmt.setBoolean(i++, data.isOutcomeMet()); // n2
//			stmt.setInt(i++, data.getSelectedInterventions()); // n3
//			stmt.setString(i++, data.getInitialDate()); // t1
//			stmt.setString(i++, data.getHeaderDesc()); // t2
//			stmt.setString(i++, data.getOutcomeMetAt()); // t3
//			stmt.setString(i++, data.getOutcomeMetId()); // t4
//			stmt.setString(i++, data.getOutcomeMetName()); // t5
//			stmt.setLong(i++, data.getDoctorId());
//			stmt.setString(i++, data.getSyskey() + "");			
//			stmt.setLong(i++, data.getpId());
//			stmt.setInt(i++, data.getRgsNo());
//			stmt.setInt(i++, getHsid(conn));
//			stmt.setString(i++, data.getUserid());
//			stmt.setString(i++, data.getUsername());
//			stmt.setString(i++, currentDate);
//			stmt.setString(i++, currentDate);
//			stmt.setLong(i++, data.getParentId());
//			
//			stmt.setString(i++, data.getInitialDate()); // t1
//			stmt.setBoolean(i++, data.isOutcomeMet()); // n2
//			stmt.setInt(i++, data.getSelectedInterventions()); // n3
//			stmt.setString(i++, data.getUserid());
//			stmt.setString(i++, data.getUsername());
//			stmt.setString(i++, currentDate);
//			stmt.setLong(i++, data.getSyskey());
//			stmt.executeUpdate();
//			
//			if (!data.isDayNurse() && !data.isNightNurse()) {
//				String sql2 = "DELETE FROM tblGeneralWardDetail "
//						+ "WHERE parentid = ? AND (SUBSTRING(t1, 0, 11) = ? OR SUBSTRING(t5, 0, 11) = ?)";
//				PreparedStatement stmt2 = conn.prepareStatement(sql2);
//				i = 1;
//				stmt2.setLong(i++, data.getSyskey());
//				stmt2.setString(i++, now);
//				stmt2.setString(i++, now);
//				stmt2.executeUpdate();
//			} else {
//				String sql2 = "IF NOT EXISTS (SELECT * FROM tblGeneralWardDetail "
//						+ "WHERE parentid = ? AND (SUBSTRING(t1, 0, 11) = ? OR SUBSTRING(t5, 0, 11) = ?)) "
//						+ "INSERT INTO tblGeneralWardDetail (syskey, parentid, [userid], [username], "
//						+ "[createddate], [modifieddate], t1, t2, t3, t5, t6, t7, n1, n2) "
//						+ "VALUES "
//						+ "(?, ?, ?, ?, ?, "
//						+ "?, ?, ?, ?, ?, "
//						+ "?, ?, ?, ?) "
//						+ "ELSE UPDATE tblGeneralWardDetail SET t1 = ?, t2 = ?, t3 = ?, t5 = ?, t6 = ?, t7 = ?, "
//						+ "n1 = ?, n2 = ?, [modifieddate] = ? "
//						+ "WHERE parentid = ? AND (SUBSTRING(t1, 0, 11) = ? OR SUBSTRING(t5, 0, 11) = ?)";
//				PreparedStatement stmt2 = conn.prepareStatement(sql2);
//				i = 1;
//				
//				stmt2.setLong(i++, data.getSyskey());
//				stmt2.setString(i++, now);
//				stmt2.setString(i++, now);
//				
//				stmt2.setLong(i++, getNextSyskey("tblGeneralWardDetail", conn)); // new syskey
//				stmt2.setLong(i++, data.getSyskey());
//				stmt2.setString(i++, data.getUserid());
//				stmt2.setString(i++, data.getUsername());
//				stmt2.setString(i++, currentDate);
//				stmt2.setString(i++, currentDate);
//				stmt2.setString(i++, data.getDayNurseAt()); // t1
//				stmt2.setString(i++, data.getDayNurseId()); // t2
//				stmt2.setString(i++, data.getDayNurseName()); // t3
//				stmt2.setString(i++, data.getNightNurseAt()); // t5
//				stmt2.setString(i++, data.getNightNurseId()); // t6
//				stmt2.setString(i++, data.getNightNurseName()); // t7
//				stmt2.setBoolean(i++, data.isDayNurse()); // n1
//				stmt2.setBoolean(i++, data.isNightNurse()); // n2
//				
//				stmt2.setString(i++, data.getDayNurseAt()); // t1
//				stmt2.setString(i++, data.getDayNurseId()); // t2
//				stmt2.setString(i++, data.getDayNurseName()); // t3
//				stmt2.setString(i++, data.getNightNurseAt()); // t5
//				stmt2.setString(i++, data.getNightNurseId()); // t6
//				stmt2.setString(i++, data.getNightNurseName()); // t7
//				stmt2.setBoolean(i++, data.isDayNurse()); // n1
//				stmt2.setBoolean(i++, data.isNightNurse()); // n2
//				stmt2.setString(i++, currentDate);
//				stmt2.setLong(i++, data.getSyskey());
//				stmt2.setString(i++, now);
//				stmt2.setString(i++, now);
//				stmt2.executeUpdate();		
//			}
//			updatedList.add(newSyskey);
//		}
//		
//		
//		
//		return updatedList;
//	}
	
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
	
//	private int getHsid(Connection conn) throws SQLException {
//		String sql = "select syskey from clinic";
//		PreparedStatement stmt = conn.prepareStatement(sql);
//		ResultSet rs = stmt.executeQuery();
//		int hsid = 0;
//		while(rs.next()) {
//			hsid = rs.getInt("syskey");
//		}
//		return hsid;
//	}
//	
//	private long getNextSyskey(String tableName, Connection conn) throws SQLException {
//		String sql = String.format("SELECT max(syskey) AS syskey FROM %s", tableName);
//		PreparedStatement stmt = conn.prepareStatement(sql);
//		ResultSet rs = stmt.executeQuery();
//		long syskey = 0;
//		while(rs.next()) {
//			syskey = rs.getLong("syskey");
//		}
//		return syskey + 1;
//	}
	
//	private String getNow() {
//		String currentDate = ServerUtil.getCurrentDate();
//		return currentDate.substring(0, 4) + "-" + currentDate.substring(4, 6) + "-" + currentDate.substring(6, 8);
//	}
	
//	private String fmtDateForJava(String date) {
//		return date.replaceAll("-", "");
//	}
}
