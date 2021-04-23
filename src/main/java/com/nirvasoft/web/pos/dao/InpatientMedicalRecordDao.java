package com.nirvasoft.web.pos.dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.HashMap;

import org.springframework.stereotype.Repository;

import com.nirvasoft.web.pos.model.BloodData;
import com.nirvasoft.web.pos.model.DietData;
import com.nirvasoft.web.pos.model.FilterRequest;
import com.nirvasoft.web.pos.model.InjectionData;
import com.nirvasoft.web.pos.model.InstructionData;
import com.nirvasoft.web.pos.model.NonParenteralData;
import com.nirvasoft.web.pos.model.NurseActivity;
import com.nirvasoft.web.pos.model.NurseDoseActivityData;
import com.nirvasoft.web.pos.model.ResponseData;
import com.nirvasoft.web.pos.model.StatMedicationData;
import com.nirvasoft.web.pos.util.QueryUtil;
import com.nirvasoft.web.pos.util.ServerUtil;

@Repository
public class InpatientMedicalRecordDao extends QueryUtil {
	public ArrayList<InstructionData> getAllInstructions(Connection conn) throws SQLException {
		String sql = "SELECT syskey, l.t1, l.t2, l.t3, l.t4, l.t5, l.pId, "
				+ "v.patientid, v.RgsName, v.RefNo, v.RgsNo FROM [dbo].[tblInstruction] "
				+ "AS l LEFT JOIN (SELECT DISTINCT pId, RgsNo, patientid, RgsName, RefNo "
				+ "From viewRegistration) AS v ON l.pId = v.pId AND l.RgsNo = v.RgsNo";
		PreparedStatement stmt = conn.prepareStatement(sql);
		ResultSet rs = stmt.executeQuery();
		ArrayList<InstructionData> instructions = new ArrayList<>();
		while (rs.next()) {
			InstructionData data = new InstructionData();
			data.setSyskey(rs.getLong("syskey"));
			data.setDate(rs.getString("t1"));
			data.setDateTaken(rs.getString("t2"));
			data.setDrugAllergyTo(rs.getString("t3"));
			data.setInstruction(rs.getString("t4"));
			data.setRemarks(rs.getString("t5"));
			data.setpId(rs.getLong("pId"));
			data.setPatientId(rs.getString("patientid"));
			data.setPatientName(rs.getString("RgsName"));
			data.setAdNo(rs.getString("RefNo"));
			data.setRgsNo(rs.getInt("RgsNo"));
			instructions.add(data);
		}
		return instructions;
	}
	
	public StatMedicationData getStatMedicationById(long syskey, Connection conn) throws SQLException {
		String sql = "SELECT syskey, l.t1, l.t2, l.t3, l.t4, l.t5, "
				+ "l.t6, l.t7, l.t8, l.t9, l.t10, l.t11, "
				+ "l.n1, l.n2, l.n3, l.n4, l.n6, l.n7, "
				+ "v.patientid, v.RgsName, v.RefNo FROM [dbo].[tblStatMedication] "
				+ "AS l LEFT JOIN (SELECT DISTINCT pId, RgsNo, patientid, RgsName, RefNo "
				+ "From viewRegistration) AS v ON l.pId = v.pId AND l.RgsNo = v.RgsNo "
				+ "WHERE syskey = ?";
		PreparedStatement stmt = conn.prepareStatement(sql);
		stmt.setLong(1, syskey);
		ResultSet rs = stmt.executeQuery();
		
		StatMedicationData data = new StatMedicationData();
		while (rs.next()) {
			data.setSyskey(rs.getLong("syskey"));
			data.setStockId(rs.getString("t1"));
			data.setStockDescription(rs.getString("t2"));
			data.setTimeAdmin(rs.getString("t3"));
			data.setGivenBy(rs.getString("t4"));
			data.setDrRemark(rs.getString("t5"));
			data.setMoConfirmDate(rs.getString("t6"));
			data.setNurseConfirmDate(rs.getString("t7"));
			data.setPrescriptionRemark(rs.getString("t8"));
			data.setRemark(rs.getString("t9"));
			data.setMoConfirmTime(rs.getString("t10"));
			data.setNurseConfirmTime(rs.getString("t11"));
			data.setRouteSyskey(rs.getInt("n1"));
			data.setDose(rs.getDouble("n2"));
			data.setDoseTypeSyskey(rs.getInt("n3"));
			data.setDoseRemarkSyskey(rs.getInt("n4"));
			data.setPatientId(rs.getString("patientid"));
			data.setPatientName(rs.getString("RgsName"));
			data.setAdNo(rs.getString("RefNo"));
		}
		return data;
	}
	
	public ResponseData getAllStatMedications(FilterRequest req, Connection conn) throws SQLException {
		String sql = "SELECT syskey, l.t1, l.t2, l.t3, l.t4, l.t5, l.t6, l.t7, l.t8, l.t9, l.t10, l.t11, "
				+ "l.n1, l.n2, l.n3, l.n4, l.n6, l.n7, l.RgsNo, "
				+ "v.patientid, v.RgsName, v.RefNo FROM [dbo].[tblStatMedication] "
				+ "AS l LEFT JOIN (SELECT DISTINCT pId, RgsNo, patientid, RgsName, RefNo "
				+ "From viewRegistration) AS v ON l.pId = v.pId AND l.RgsNo = v.RgsNo";
		String[] keys = {"v.patientid", "v.RgsName", "v.RefNo", "l.n1", "l.t2", 
				"l.n2", "l.t8", "l.t3", "l.t4", "l.t5", "l.t9"};
		ResultSet rs = executePaginationQuery(sql, keys, req, conn);
		ArrayList<HashMap<String, Object>> statMedications = new ArrayList<>();
		while (rs.next()) {
			StatMedicationData data = new StatMedicationData();
			data.setSyskey(rs.getLong("syskey"));
			data.setStockId(rs.getString("t1"));
			data.setStockDescription(rs.getString("t2"));
			data.setTimeAdmin(rs.getString("t3"));
			data.setGivenBy(rs.getString("t4"));
			data.setDrRemark(rs.getString("t5"));
			data.setMoConfirmDate(rs.getString("t6"));
			data.setNurseConfirmDate(rs.getString("t7"));
			data.setPrescriptionRemark(rs.getString("t8"));
			data.setRemark(rs.getString("t9"));
			data.setMoConfirmTime(rs.getString("t10"));
			data.setNurseConfirmTime(rs.getString("t11"));
			data.setRouteSyskey(rs.getInt("n1"));
			data.setDose(rs.getDouble("n2"));
			data.setDoseTypeSyskey(rs.getInt("n3"));
			data.setDoseRemarkSyskey(rs.getInt("n4"));
			data.setPatientId(rs.getString("patientid"));
			data.setPatientName(rs.getString("RgsName"));
			data.setAdNo(rs.getString("RefNo"));
			data.setRgsNo(rs.getLong("RgsNo"));
			statMedications.add(data.toHashMap());
		}
		return createResponseData(req, statMedications, 
				getTotalOf("[dbo].[tblStatMedication] AS l LEFT JOIN "
						+ "(SELECT DISTINCT pId, RgsNo, patientid, RgsName, RefNo "
						+ "From viewRegistration) AS v ON l.pId = v.pId AND l.RgsNo = v.RgsNo", 
				getWhereQuery(), new Object[] {}, conn));
	}
	

	public ArrayList<BloodData> getAllBloods(Connection conn) throws SQLException {
		String sql = "SELECT l.syskey, l.t1, l.t2, l.t3, l.t6, l.t7, l.t8, l.t9, l.t10, "
				+ "l.n1, l.n2, l.n3, l.n4, v.patientid, v.RgsName, v.RefNo, v.RgsNo FROM tblBlood AS l "
				+ "LEFT JOIN (SELECT DISTINCT pId, RgsNo, patientid, RgsName, "
				+ "RefNo From viewRegistration) AS v ON l.pId = v.pId AND l.RgsNo = v.RgsNo";
		PreparedStatement stmt = conn.prepareStatement(sql);
		ResultSet rs = stmt.executeQuery();
		ArrayList<BloodData> list = new ArrayList<>();
		while(rs.next()) {
			BloodData data = new BloodData();
			data.setSyskey(rs.getLong("syskey"));
			data.setStockId(rs.getString("t1"));
			data.setMedication(rs.getString("t2"));
			data.setRemark(rs.getString("t3"));
			data.setMoConfirmDate(rs.getString("t6"));
			data.setNurseConfirmDate(rs.getString("t7"));
			data.setMoConfirmTime(rs.getString("t8"));
			data.setNurseConfirmTime(rs.getString("t9"));
			data.setGivenByType(rs.getString("t10"));
			
			data.setRouteSyskey(rs.getInt("n1"));
			data.setDose(rs.getDouble("n2"));
			data.setDoseTypeSyskey(rs.getInt("n3"));
			data.setFrequency(rs.getDouble("n4"));
			data.setPatientId(rs.getString("patientid"));
			data.setPatientName(rs.getString("RgsName"));
			data.setAdNo(rs.getString("RefNo"));
			data.setRgsNo(rs.getInt("RgsNo"));
			
			sql = "SELECT [syskey], done, done_at, nurse_id, parentId FROM [dbo].[tblNurseDoseActivityBlood] WHERE parentId = ?";
			stmt = conn.prepareStatement(sql);
			stmt.setLong(1, rs.getLong("syskey"));
			ResultSet rs2 = stmt.executeQuery();
			ArrayList<NurseDoseActivityData> activityDataList = new ArrayList<NurseDoseActivityData>();
			while (rs2.next()) {
				NurseDoseActivityData activityData = new NurseDoseActivityData();
				activityData.setSyskey(rs2.getLong("syskey"));
				activityData.setDone(rs2.getBoolean("done"));
				activityData.setDoneAt(rs2.getString("done_at"));
				activityData.setNurseId(rs2.getLong("nurse_id"));
				activityData.setParentId(rs2.getLong("parentId"));
				activityDataList.add(activityData);
			}
			data.setCheckList(activityDataList);
			list.add(data);
		}
		return list;
	}
	
	public ArrayList<DietData> getAllDiets(Connection conn) throws SQLException {
		String sql = "SELECT l.syskey, l.t1, l.t2, l.t3, l.t4, l.t6, l.t7, "
				+ "v.patientid, v.RgsName, v.RefNo, v.RgsNo FROM tblDiet AS l "
				+ "LEFT JOIN (SELECT DISTINCT pId, RgsNo, patientid, RgsName, RefNo "
				+ "From viewRegistration) AS v ON l.pId = v.pId AND l.RgsNo = v.RgsNo";
		PreparedStatement stmt = conn.prepareStatement(sql);
		ResultSet rs = stmt.executeQuery();
		ArrayList<DietData> list = new ArrayList<>();
		while(rs.next()) {
			DietData data = new DietData();
			data.setSyskey(rs.getLong("syskey"));
			data.setNo(rs.getString("t1"));
			data.setDietEnteralFeed(rs.getString("t2"));
			data.setNotedBy(rs.getString("t3"));
			data.setRemark(rs.getString("t4"));
			data.setDate(rs.getString("t6"));
			data.setTime(rs.getString("t7"));
			data.setPatientId(rs.getString("patientid"));
			data.setPatientName(rs.getString("RgsName"));
			data.setAdNo(rs.getString("RefNo"));
			data.setRgsNo(rs.getInt("RgsNo"));			
			list.add(data);
		}
		return list;
	}
	
	public ArrayList<HashMap<String, String>> getAllergiesByPatient(Long patientId, Connection conn) throws SQLException {
		String sql = "SELECT Allergy FROM [dbo].[Patient] WHERE pId = ?";
		PreparedStatement stmt = conn.prepareStatement(sql);
		stmt.setLong(1, patientId);
		ResultSet rs = stmt.executeQuery();
		
		ArrayList<HashMap<String, String>> data = new ArrayList<>();
		while (rs.next()) {
			HashMap<String, String> map = new HashMap<>();
			map.put("allergy", rs.getString("Allergy"));
			data.add(map);
		}
		return data;
	}
	
	public long saveInstruction(InstructionData data, Connection conn) throws SQLException {
		String sql = "select max(syskey) AS SysKey from dbo.[tblInstruction]";
		PreparedStatement stmt = conn.prepareStatement(sql);
		ResultSet rs = stmt.executeQuery();
		long syskey = 0;
		while(rs.next()) {
			syskey = rs.getLong("SysKey");
		}
		
		sql = "INSERT INTO [dbo].[tblInstruction] " +
	                 "([syskey], [pId], [RgsNo], [userid], [username], [createddate], [modifieddate], t1, t2, t3, t4, t5) " +
		             "VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
		String currentDate = ServerUtil.getCurrentDate();
		stmt = conn.prepareStatement(sql);
		int i = 1;
		stmt.setLong(i++, syskey+1);
		stmt.setLong(i++, data.getpId());
		stmt.setInt(i++, data.getRgsNo());
		stmt.setString(i++, data.getUserid());
		stmt.setString(i++, data.getUsername());
		stmt.setString(i++, currentDate);
		stmt.setString(i++, currentDate);	
		stmt.setString(i++, data.getDate());
		stmt.setString(i++, data.getDateTaken());
		stmt.setString(i++, data.getDrugAllergyTo());
		stmt.setString(i++, data.getInstruction());
		stmt.setString(i++, data.getRemarks());
		
		stmt.executeUpdate();
		return syskey+1;
	}
	public ArrayList<Long> saveStatMedication(ArrayList<StatMedicationData> data, Connection conn) throws SQLException {
		long nextSyskey = getNextSyskey("dbo.[tblStatMedication]", conn);
		int hsid = getHsid(conn);
		
		String sql = "INSERT INTO [dbo].[tblStatMedication] " +
                "([syskey], parentid, Doctorid, RefNo, [pId], [RgsNo], hsid, "
                + "[userid], [username], [createddate], [modifieddate], "
                + "t1, t2, t3, t4, t5, t6, t7, t8, t9, t10, t11, n1, n2, n3, n4, n6, n7) " +
	             "VALUES ";
		
		for (int i = 0; i < data.size(); i++) {
			sql += "(?, ?, ?, ?,"
					+ "?, ?, ?, ?, ?, ?, ?,"
					+ "?, ?, ?, ?, ?, ?, ?,"
					+ "?, ?, ?, ?, ?,"
					+ "?, ?, ?, ?, ?)";
			if (i != data.size() - 1) {
				sql += ", ";
			}
		}
		
		String currentDate = ServerUtil.getCurrentDate();
		PreparedStatement stmt = conn.prepareStatement(sql);
		int i = 1;
		ArrayList<Long> updatedList = new ArrayList<>();
		for (StatMedicationData stat : data) {
			stmt.setLong(i++, nextSyskey);
			stmt.setLong(i++, stat.getParentId());
			stmt.setLong(i++, stat.getDoctorId());
			stmt.setString(i++, stat.getAdNo());			
			stmt.setLong(i++, stat.getpId());
			stmt.setLong(i++, stat.getRgsNo());
			stmt.setInt(i++, hsid);
			stmt.setString(i++, stat.getUserid());
			stmt.setString(i++, stat.getUsername());
			stmt.setString(i++, currentDate);
			stmt.setString(i++, currentDate);	
			stmt.setString(i++, stat.getStockId());
			stmt.setString(i++, stat.getStockDescription());	
			stmt.setString(i++, stat.getTimeAdmin());
			stmt.setString(i++, stat.getGivenBy());
			stmt.setString(i++, stat.getDrRemark());
			stmt.setString(i++, stat.getMoConfirmDate());	
			stmt.setString(i++, stat.getNurseConfirmDate());
			stmt.setString(i++, stat.getPrescriptionRemark());
			stmt.setString(i++, stat.getRemark());
			stmt.setString(i++, stat.getMoConfirmTime());	
			stmt.setString(i++, stat.getNurseConfirmTime());
			stmt.setInt(i++, stat.getRouteSyskey());
			stmt.setDouble(i++, stat.getDose());
			stmt.setInt(i++, stat.getDoseTypeSyskey());
			stmt.setInt(i++, stat.getDoseRemarkSyskey());
			stmt.setLong(i++, stat.isDoctor() ? 1: 0);
			stmt.setLong(i++, !stat.isDoctor() ? 1: 0);
			updatedList.add(nextSyskey++);
		}
		stmt.executeUpdate();
		return updatedList;
	}
	
	public ArrayList<Long> saveNonParenteral(ArrayList<NonParenteralData> data, Connection conn) throws SQLException {
		ArrayList<Long> updatedList = new ArrayList<>();
		long nextSyskey = getNextSyskey("dbo.[tblNonParenteral]", conn);
		int hsid = getHsid(conn);
		
		String sql = "INSERT INTO [dbo].[tblNonParenteral] " +
                "([syskey], parentid, Doctorid, RefNo, [pId], [RgsNo], hsid, "
                + "[userid], [username], [createddate], [modifieddate], "
                + "t1, t2, t3, t4, t5, t6, t7, t8, t9, t10, t11, t12, "
                + "n1, n2, n3, n4, n5, n6, n7) " +
	             "VALUES ";
		
		for (int i = 0; i < data.size(); i++) {
			sql += "(?, ?, ?, ?, ?, ?,"
					+ "?, ?, ?, ?, ?, ?, ?,"
					+ "?, ?, ?, ?, ?, ?, ?,"
					+ "?, ?, ?, ?, ?,"
					+ "?, ?, ?, ?, ?)";
			if (i != data.size() - 1) {
				sql += ", ";
			}
		}
		PreparedStatement stmt = conn.prepareStatement(sql);
		String currentDate = ServerUtil.getCurrentDate();
		int i = 1;
		
		for (NonParenteralData parenteral : data) {
			parenteral.setSyskey(nextSyskey);
			stmt.setLong(i++, nextSyskey);
			stmt.setLong(i++, parenteral.getParentId());
			stmt.setLong(i++, parenteral.getDoctorId());
			stmt.setString(i++, parenteral.getAdNo());			
			stmt.setLong(i++, parenteral.getpId());
			stmt.setLong(i++, parenteral.getRgsNo());
			stmt.setInt(i++, hsid);
			stmt.setString(i++, parenteral.getUserid());
			stmt.setString(i++, parenteral.getUsername());
			stmt.setString(i++, currentDate);
			stmt.setString(i++, currentDate);
			
			// t1 - 12
			stmt.setString(i++, parenteral.getStockId());
			stmt.setString(i++, parenteral.getMedication());	
			stmt.setString(i++, parenteral.getRemark());
			stmt.setString(i++, parenteral.getDiagnosis());
			stmt.setString(i++, parenteral.getDrugAllergyTo());	
			stmt.setString(i++, parenteral.getMoConfirmDate());	
			stmt.setString(i++, parenteral.getNurseConfirmDate());
			stmt.setString(i++, parenteral.getDateStart());
			stmt.setString(i++, parenteral.getDateOff());
			stmt.setString(i++, parenteral.getGivenByType());
			stmt.setString(i++, parenteral.getMoConfirmTime());
			stmt.setString(i++, parenteral.getNurseConfirmTime());
			
			// n1 - 7
			stmt.setLong(i++, parenteral.getRouteSyskey());
			stmt.setDouble(i++, parenteral.getDose());
			stmt.setLong(i++, parenteral.getDoseTypeSyskey());
			stmt.setDouble(i++, parenteral.getFrequency());
			stmt.setInt(i++, computeCheckboxCodes(parenteral));
			stmt.setLong(i++, parenteral.isDoctor() ? 1: 0);
			stmt.setLong(i++, !parenteral.isDoctor() ? 1: 0);
			updatedList.add(nextSyskey++);
			saveDoseActivity(parenteral, conn);
		}
		
		stmt.executeUpdate();
		
		return updatedList;
	}
	
	private void saveDoseActivity(NonParenteralData parenteral, Connection conn) 
			throws SQLException {
		String sql = "IF NOT EXISTS (SELECT * FROM dbo.tblNurseDoseActivity WHERE syskey = ?) "
				+ "INSERT INTO dbo.tblNurseDoseActivity (syskey, done, done_at, nurse_id, parentId) "
				+ "VALUES(?, ?, ?, ?, ?) "
				+ "ELSE UPDATE dbo.tblNurseDoseActivity SET done = ?, done_at = ?, nurse_id = ? "
				+ "WHERE syskey = ?";
		
		for (NurseDoseActivityData doseActivity : parenteral.getCheckList()) {
			PreparedStatement stmt = conn.prepareStatement(sql);
			int i = 1;
			stmt.setLong(i++, doseActivity.getSyskey());
			
			stmt.setLong(i++, getNextSyskey("tblNurseDoseActivity", conn));
			stmt.setInt(i++, doseActivity.isDone() ? 1: 0);
			stmt.setString(i++, doseActivity.getDoneAt());
			stmt.setLong(i++, doseActivity.getNurseId());
			stmt.setLong(i++, parenteral.getSyskey());
			
			stmt.setInt(i++, doseActivity.isDone() ? 1: 0);
			stmt.setString(i++, doseActivity.getDoneAt());
			stmt.setLong(i++, doseActivity.getNurseId());
			stmt.setLong(i++, doseActivity.getSyskey());
			stmt.executeUpdate();
		}
	}
	
	public ArrayList<Long> saveInjection(ArrayList<InjectionData> data, Connection conn) throws SQLException {
		ArrayList<Long> updatedList = new ArrayList<>();
		for (InjectionData injection : data) {
			updatedList.add(updateInjection(injection.getSyskey(), injection, conn));	
		}
		return updatedList;
	}
	
	public ArrayList<Long> saveBloods(ArrayList<BloodData> data, Connection conn) throws SQLException {
		ArrayList<Long> savedList = new ArrayList<>();
		
		String sql = "INSERT INTO tblBlood ([syskey], parentid, Doctorid, RefNo, [pId], [RgsNo], "
				+ "hsid, [userid], [username], [createddate], [modifieddate], "
				+ "t1, t2, t3, t6, t7, t8, t9, t10, n1, n2, n3, n4, n6, n7) VALUES ";
		
		
		for (int i = 0; i < data.size(); i++) {
			sql += "(?, ?, ?, ?, ?,"
					+ "?, ?, ?, ?, ?,"
					+ "?, ?, ?, ?, ?,"
					+ "?, ?, ?, ?, ?,"
					+ "?, ?, ?, ?, ?)";
			if (i != data.size() - 1) {
				sql += ", ";
			}
		}
		PreparedStatement stmt = conn.prepareStatement(sql);
		String currentDate = ServerUtil.getCurrentDate();
		long syskey = getNextSyskey("tblBlood", conn);
		int hsid = getHsid(conn);
		int i = 1;	 
		for (BloodData item : data) {
			stmt.setLong(i++, ++syskey);
			stmt.setLong(i++, item.getParentId());
			stmt.setLong(i++, item.getDoctorId());
			stmt.setString(i++, syskey + "");			
			stmt.setLong(i++, item.getpId());
			stmt.setInt(i++, item.getRgsNo());
			stmt.setInt(i++, hsid);
			stmt.setString(i++, item.getUserid());
			stmt.setString(i++, item.getUsername());
			stmt.setString(i++, currentDate);
			stmt.setString(i++, currentDate);
			
		
			stmt.setString(i++, item.getStockId());
			stmt.setString(i++, item.getMedication());	
			stmt.setString(i++, item.getRemark());	
			stmt.setString(i++, item.getMoConfirmDate());	
			stmt.setString(i++, item.getNurseConfirmDate());
			stmt.setString(i++, item.getMoConfirmTime());
			stmt.setString(i++, item.getNurseConfirmTime());
			stmt.setString(i++, item.getGivenByType());
			
			
			stmt.setInt(i++, item.getRouteSyskey());
			stmt.setDouble(i++, item.getDose());
			stmt.setInt(i++, item.getDoseTypeSyskey());
			stmt.setDouble(i++, item.getFrequency());
			stmt.setLong(i++, item.isDoctor() ? 1: 0);
			stmt.setLong(i++, !item.isDoctor() ? 1: 0);
			
			for (NurseDoseActivityData activity: item.getCheckList()) {
				sql = "INSERT INTO dbo.tblNurseDoseActivityBlood (syskey, done_at, done, nurse_id, parentId) "
						+ "VALUES (?, ?, ?, ?, ?)";
				PreparedStatement stmt2 = conn.prepareStatement(sql);
				int j = 1;
				stmt2.setLong(j++, getNextSyskey("tblNurseDoseActivityBlood", conn));
				stmt2.setString(j++, activity.getDoneAt());
				stmt2.setBoolean(j++, activity.isDone());
				stmt2.setLong(j++, activity.getNurseId());
				stmt2.setLong(j++, syskey);
				stmt2.executeUpdate();
			}
			savedList.add(syskey);
		}
		
		stmt.executeUpdate();
		return savedList;
	}
	
	public ArrayList<Long> saveDiets(ArrayList<DietData> data, Connection conn) throws SQLException {
		ArrayList<Long> savedList = new ArrayList<>();
		
		String sql = "INSERT INTO tblDiet ([syskey], parentid, Doctorid, RefNo, [pId], [RgsNo], "
				+ "hsid, [userid], [username], [createddate], [modifieddate], "
				+ "t1, t2, t3, t4, t6, t7, n6, n7) VALUES ";
		
		for (int i = 0; i < data.size(); i++) {
			sql += "(?, ?, ?, ?, ?,"
					+ "?, ?, ?, ?, ?,"
					+ "?, ?, ?, ?, ?,"
					+ "?, ?, ?,"
					+ "?)";
			if (i != data.size() - 1) {
				sql += ", ";
			}
		}
		
		PreparedStatement stmt = conn.prepareStatement(sql);
		String currentDate = ServerUtil.getCurrentDate();
		long syskey = getNextSyskey("tblDiet", conn);
		int hsid = getHsid(conn);
		int i = 1;	 
		for (DietData item : data) {
			stmt.setLong(i++, ++syskey);
			stmt.setLong(i++, item.getParentId());
			stmt.setLong(i++, item.getDoctorId());
			stmt.setString(i++, syskey + "");			
			stmt.setLong(i++, item.getpId());
			stmt.setInt(i++, item.getRgsNo());
			stmt.setInt(i++, hsid);
			stmt.setString(i++, item.getUserid());
			stmt.setString(i++, item.getUsername());
			stmt.setString(i++, currentDate);
			stmt.setString(i++, currentDate);
			
		
			stmt.setString(i++, item.getNo());
			stmt.setString(i++, item.getDietEnteralFeed());	
			stmt.setString(i++, item.getNotedBy());
			stmt.setString(i++, item.getRemark());
			stmt.setString(i++, item.getDate());	
			stmt.setString(i++, item.getTime());
			
			stmt.setLong(i++, item.isDoctor() ? 1: 0);
			stmt.setLong(i++, !item.isDoctor() ? 1: 0);
			savedList.add(syskey);
		}
		stmt.executeUpdate();
		return savedList;
	}
	
	
	
	
	
	
	private int computeCheckboxCodes(NonParenteralData parenteral) {
		String code = "";
		if (parenteral.isTubeFeed()) {
			code += "1";
		}
		if (parenteral.isLiquidMedication()) {
			code += "2";
		}
		if (parenteral.isChronicRenalFailure()) {
			code += "3";
		}
		if (parenteral.isPregnant()) {
			code += "4";
		}
		if (code.isEmpty()) {
			code = "0";
		}
		return Integer.parseInt(code);
	}
	
	public long updateStatMedication(long syskey, StatMedicationData stat, Connection conn) throws SQLException {
		String sql = "UPDATE dbo.tblStatMedication SET [userid] = ?, [username] = ?, "
				+ "[modifieddate] = ?, t1 = ?, t2 = ?, t3 = ?, t4 = ?, t5 = ?, t6 = ?, "
				+ "t7 = ?, t8 = ?, t9 = ?, t10 = ?, t11 = ?, n1 = ?, n2 = ?, n3 = ?, "
				+ "n4 = ?, n6 = ?, n7 = ? WHERE syskey = ?";
		PreparedStatement stmt = conn.prepareStatement(sql);
		String currentDate = ServerUtil.getCurrentDate();
		int i = 1;
		
		stmt.setString(i++, stat.getUserid());
		stmt.setString(i++, stat.getUsername());
		stmt.setString(i++, currentDate);
		stmt.setString(i++, stat.getStockId());
		stmt.setString(i++, stat.getStockDescription());	
		stmt.setString(i++, stat.getTimeAdmin());
		stmt.setString(i++, stat.getGivenBy());
		stmt.setString(i++, stat.getDrRemark());
		stmt.setString(i++, stat.getMoConfirmDate());	
		stmt.setString(i++, stat.getNurseConfirmDate());
		stmt.setString(i++, stat.getPrescriptionRemark());
		stmt.setString(i++, stat.getRemark());
		stmt.setString(i++, stat.getMoConfirmTime());
		stmt.setString(i++, stat.getNurseConfirmTime());
		stmt.setInt(i++, stat.getRouteSyskey());
		stmt.setDouble(i++, stat.getDose());
		stmt.setInt(i++, stat.getDoseTypeSyskey());
		stmt.setInt(i++, stat.getDoseRemarkSyskey());
		stmt.setLong(i++, stat.isDoctor() ? 1: 0);
		stmt.setLong(i++, !stat.isDoctor() ? 1: 0);
		stmt.setLong(i++, syskey);
		
		stmt.executeUpdate();
		return syskey;
	}
	
	public long updateNonParenteral(long syskey, NonParenteralData parenteral, Connection conn) throws SQLException {
		String sql = "UPDATE dbo.tblNonParenteral SET [userid] = ?, [username] = ?, "
				+ "[modifieddate] = ?, t1 = ?, t2 = ?, t3 = ?, t4 = ?, t5 = ?, t6 = ?, "
				+ "t7 = ?, t8 = ?, t9 = ?, t10 = ?, t11 = ?, t12 = ?, n1 = ?, n2 = ?, "
				+ "n3 = ?, n4 = ?, n5 = ?, n6 = ?, n7 = ? WHERE syskey = ?";
		PreparedStatement stmt = conn.prepareStatement(sql);
		String currentDate = ServerUtil.getCurrentDate();
		int i = 1;
		
		stmt.setString(i++, parenteral.getUserid());
		stmt.setString(i++, parenteral.getUsername());
		stmt.setString(i++, currentDate);
		
		// t1 - 12
		stmt.setString(i++, parenteral.getStockId());
		stmt.setString(i++, parenteral.getMedication());	
		stmt.setString(i++, parenteral.getRemark());
		stmt.setString(i++, parenteral.getDiagnosis());
		stmt.setString(i++, parenteral.getDrugAllergyTo());	
		stmt.setString(i++, parenteral.getMoConfirmDate());	
		stmt.setString(i++, parenteral.getNurseConfirmDate());
		stmt.setString(i++, parenteral.getDateStart());
		stmt.setString(i++, parenteral.getDateOff());
		stmt.setString(i++, parenteral.getGivenByType());
		stmt.setString(i++, parenteral.getMoConfirmTime());
		stmt.setString(i++, parenteral.getNurseConfirmTime());
		
		// n1 - 7
		stmt.setLong(i++, parenteral.getRouteSyskey());
		stmt.setDouble(i++, parenteral.getDose());
		stmt.setLong(i++, parenteral.getDoseTypeSyskey());
		stmt.setDouble(i++, parenteral.getFrequency());
		stmt.setInt(i++, computeCheckboxCodes(parenteral));
		stmt.setLong(i++, parenteral.isDoctor() ? 1: 0);
		stmt.setLong(i++, !parenteral.isDoctor() ? 1: 0);
		
		stmt.setLong(i++, syskey);
		
		stmt.executeUpdate();
		saveDoseActivity(parenteral, conn);	
		return syskey;
	}
	
	public long updateBlood(long syskey, BloodData item, Connection conn) throws SQLException {
		String sql = "UPDATE dbo.tblBlood SET [userid] = ?, [username] = ?, [modifieddate] = ?, "
				+ "t1 = ?, t2 = ?, t3 = ?, t6 = ?, t7 = ?, t8 = ?, t9 = ?, t10 = ?, "
				+ "n1 = ?, n2 = ?, n3 = ?, n4 = ?, n6 = ?, n7 = ? WHERE syskey = ?";
		PreparedStatement stmt = conn.prepareStatement(sql);
		String currentDate = ServerUtil.getCurrentDate();
		int i = 1;
		stmt.setString(i++, item.getUserid());
		stmt.setString(i++, item.getUsername());
		stmt.setString(i++, currentDate);
	
		stmt.setString(i++, item.getStockId());
		stmt.setString(i++, item.getMedication());	
		stmt.setString(i++, item.getRemark());	
		stmt.setString(i++, item.getMoConfirmDate());	
		stmt.setString(i++, item.getNurseConfirmDate());
		stmt.setString(i++, item.getMoConfirmTime());
		stmt.setString(i++, item.getNurseConfirmTime());
		stmt.setString(i++, item.getGivenByType());
		
		stmt.setInt(i++, item.getRouteSyskey());
		stmt.setDouble(i++, item.getDose());
		stmt.setInt(i++, item.getDoseTypeSyskey());
		stmt.setDouble(i++, item.getFrequency());
		stmt.setLong(i++, item.isDoctor() ? 1: 0);
		stmt.setLong(i++, !item.isDoctor() ? 1: 0);
		stmt.setLong(i++, syskey);
		stmt.executeUpdate();
		for (NurseDoseActivityData activity: item.getCheckList()) {
			int j = 1;
			sql = "UPDATE tblNurseDoseActivityBlood SET done = ?, done_at = ?, nurse_id = ? WHERE syskey = ?";
			stmt = conn.prepareStatement(sql);
			stmt.setBoolean(j++, activity.isDone());
			stmt.setString(j++, activity.getDoneAt());
			stmt.setLong(j++, activity.getNurseId());
			stmt.setLong(j++, activity.getSyskey());
			stmt.executeUpdate();
		}
		
		return syskey;
	}
	
	public long updateDiet(long syskey, DietData item, Connection conn) throws SQLException {
		String sql = "UPDATE dbo.tblDiet SET [userid] = ?, [username] = ?, [modifieddate] = ?, "
				+ "t1 = ?, t2 = ?, t3 = ?, t4 = ?, t6 = ?, t7 = ?, "
				+ "n6 = ?, n7 = ? WHERE syskey = ?";
		PreparedStatement stmt = conn.prepareStatement(sql);
		String currentDate = ServerUtil.getCurrentDate();
		int i = 1;
		stmt.setString(i++, item.getUserid());
		stmt.setString(i++, item.getUsername());
		stmt.setString(i++, currentDate);
	
		stmt.setString(i++, item.getNo());
		stmt.setString(i++, item.getDietEnteralFeed());	
		stmt.setString(i++, item.getNotedBy());
		stmt.setString(i++, item.getRemark());	
		stmt.setString(i++, item.getDate());	
		stmt.setString(i++, item.getTime());
		
		stmt.setLong(i++, item.isDoctor() ? 1: 0);
		stmt.setLong(i++, !item.isDoctor() ? 1: 0);
		stmt.setLong(i++, syskey);
		stmt.executeUpdate();
		return syskey;
	}
	
	public long updateInjection(long syskey, InjectionData injection, Connection conn) throws SQLException {
		String sql = "UPDATE dbo.tblInjection SET [userid] = ?, [username] = ?, [modifieddate] = ?, t1 = ?, t2 = ?, t3 = ?, t6 = ?, t7 = ?, t10 = ?,  n1 = ?, n2 = ?, n3 = ?, n4 = ?, n6 = ?, n7 = ? WHERE syskey = ?";
		PreparedStatement stmt = conn.prepareStatement(sql);
		String currentDate = ServerUtil.getCurrentDate();
		int i = 1;
		
		stmt.setString(i++, injection.getUserid());
		stmt.setString(i++, injection.getUsername());
		stmt.setString(i++, currentDate);
		
		// t1 - 10
		stmt.setString(i++, injection.getStockId());
		stmt.setString(i++, injection.getMedication());	
		stmt.setString(i++, injection.getRemark());	
		stmt.setString(i++, injection.getMoConfirmDate());	
		stmt.setString(i++, injection.getNurseConfirmDate());
		stmt.setString(i++, injection.getGivenByType());
		
		// n1 - 7
		stmt.setLong(i++, injection.getRouteSyskey());
		stmt.setDouble(i++, injection.getDose());
		stmt.setLong(i++, injection.getDoseTypeSyskey());
		stmt.setDouble(i++, injection.getFrequency());
		stmt.setLong(i++, injection.isDoctor() ? 1: 0);
		stmt.setLong(i++, !injection.isDoctor() ? 1: 0);
		
		stmt.setLong(i++, syskey);
		
		stmt.executeUpdate();
		sql = "IF NOT EXISTS (SELECT * FROM dbo.tblNurseDoseActivity2 WHERE syskey = ?) "
				+ "INSERT INTO dbo.tblNurseDoseActivity2 (syskey, done, done_at, nurse_id, parentId) "
				+ "VALUES(?, ?, ?, ?, ?) "
				+ "ELSE UPDATE dbo.tblNurseDoseActivity2 SET done = ?, done_at = ?, nurse_id = ? "
				+ "WHERE syskey = ?";
		for (NurseDoseActivityData doseActivity : injection.getCheckList()) {
			stmt = conn.prepareStatement(sql);
			i = 1;
			stmt.setLong(i++, doseActivity.getSyskey());
			
			stmt.setLong(i++, getNextSyskey("tblNurseDoseActivity2", conn));
			stmt.setInt(i++, doseActivity.isDone() ? 1: 0);
			stmt.setString(i++, doseActivity.getDoneAt());
			stmt.setLong(i++, doseActivity.getNurseId());
			stmt.setLong(i++, injection.getSyskey());
			
			stmt.setInt(i++, doseActivity.isDone() ? 1: 0);
			stmt.setString(i++, doseActivity.getDoneAt());
			stmt.setLong(i++, doseActivity.getNurseId());
			stmt.setLong(i++, doseActivity.getSyskey());
			stmt.executeUpdate();
		}
		return syskey;
	}
	
	public long updateInstruction(long syskey, InstructionData data, Connection conn) throws SQLException {
		String sql = "UPDATE [dbo].[tblInstruction] SET [userid] = ?, [username] = ?, [modifieddate] = ?, t1 = ?, t2 = ?, t3 = ?, t4 = ?, t5 = ? WHERE syskey = ?";
		PreparedStatement stmt = conn.prepareStatement(sql);
		String currentDate = ServerUtil.getCurrentDate();
		int i = 1;
		
		stmt.setString(i++, data.getUserid());
		stmt.setString(i++, data.getUsername());
		stmt.setString(i++, currentDate);
		stmt.setString(i++, data.getDate());
		stmt.setString(i++, data.getDateTaken());
		stmt.setString(i++, data.getDrugAllergyTo());
		stmt.setString(i++, data.getInstruction());
		stmt.setString(i++, data.getRemarks());
		stmt.setLong(i++, syskey);
		
		stmt.executeUpdate();
		return syskey;
	}
	
	public int deleteInstruction(long syskey, Connection conn) throws SQLException {
		String sql = "DELETE FROM [dbo].[tblInstruction] WHERE syskey = ?";
		PreparedStatement stmt = conn.prepareStatement(sql);
		stmt.setLong(1, syskey);
		
		return stmt.executeUpdate();
	}
	
	public int deleteStatMedication(long syskey, Connection conn) throws SQLException {
		String sql = "DELETE FROM [dbo].[tblStatMedication] WHERE syskey = ?";
		PreparedStatement stmt = conn.prepareStatement(sql);
		stmt.setLong(1, syskey);
		
		return stmt.executeUpdate();
	}
	
	public int deleteNonParenteral(long syskey, Connection conn) throws SQLException {
		String sql = "DELETE FROM [dbo].[tblNonParenteral] WHERE syskey = ?";
		PreparedStatement stmt = conn.prepareStatement(sql);
		stmt.setLong(1, syskey);
		stmt.executeUpdate();
		
		sql = "DELETE FROM [dbo].[tblNurseDoseActivity] WHERE parentId = ?";
		stmt = conn.prepareStatement(sql);
		stmt.setLong(1, syskey);
		return stmt.executeUpdate();
	}
	
	public int deleteInjection(long syskey, Connection conn) throws SQLException {
		String sql = "DELETE FROM [dbo].[tblInjection] WHERE syskey = ?";
		PreparedStatement stmt = conn.prepareStatement(sql);
		stmt.setLong(1, syskey);
		stmt.executeUpdate();
		
		sql = "DELETE FROM [dbo].[tblNurseDoseActivity2] WHERE parentId = ?";
		stmt = conn.prepareStatement(sql);
		stmt.setLong(1, syskey);
		return stmt.executeUpdate();
	}
	
	public int deleteBlood(long syskey, Connection conn) throws SQLException {
		String sql = "DELETE FROM [dbo].[tblBlood] WHERE syskey = ?";
		PreparedStatement stmt = conn.prepareStatement(sql);
		stmt.setLong(1, syskey);
		stmt.executeUpdate();
		
		sql = "DELETE FROM [dbo].[tblNurseDoseActivityBlood] WHERE parentId = ?";
		stmt = conn.prepareStatement(sql);
		stmt.setLong(1, syskey);
		return stmt.executeUpdate();
	}
	
	public int deleteDiet(long syskey, Connection conn) throws SQLException {
		String sql = "DELETE FROM [dbo].[tblDiet] WHERE syskey = ?";
		PreparedStatement stmt = conn.prepareStatement(sql);
		stmt.setLong(1, syskey);
		return stmt.executeUpdate();
	}
	
	public ArrayList<HashMap<String, Object>> getRoutes(Connection conn) throws SQLException {
		String sql = "SELECT syskey, Route, EngDesc FROM tblRoute";
		PreparedStatement stmt = conn.prepareStatement(sql);
		ResultSet rs = stmt.executeQuery();
		ArrayList<HashMap<String, Object>> mapList = new ArrayList<>();
		while (rs.next()) {
			HashMap<String, Object> map = new HashMap<>();
			map.put("syskey", rs.getLong("syskey"));
			map.put("route", rs.getString("Route"));
			map.put("EngDesc", rs.getString("EngDesc"));
			mapList.add(map);
		}
		return mapList;
	}
	
	public ArrayList<HashMap<String, Object>> getDoses(Connection conn) throws SQLException {
		String sql = "select syskey, Dose, EngDesc FROM tblDose";
		PreparedStatement stmt = conn.prepareStatement(sql);
		ResultSet rs = stmt.executeQuery();
		ArrayList<HashMap<String, Object>> mapList = new ArrayList<>();
		while (rs.next()) {
			HashMap<String, Object> map = new HashMap<>();
			map.put("syskey", rs.getLong("syskey"));
			map.put("Dose", rs.getString("Dose"));
			map.put("EngDesc", rs.getString("EngDesc"));
			mapList.add(map);
		}
		return mapList;
	}
	
	public ArrayList<HashMap<String, Object>> getDrugTasks(Connection conn) throws SQLException {
		String sql = "select syskey, task, eng_desc FROM tblTasks";
		PreparedStatement stmt = conn.prepareStatement(sql);
		ResultSet rs = stmt.executeQuery();
		ArrayList<HashMap<String, Object>> mapList = new ArrayList<>();
		while (rs.next()) {
			HashMap<String, Object> map = new HashMap<>();
			map.put("syskey", rs.getLong("syskey"));
			map.put("task", rs.getString("task"));
			map.put("eng_desc", rs.getString("eng_desc"));
			mapList.add(map);
		}
		return mapList;
	}
	
	public ArrayList<StatMedicationData> getStatMedicationsInitial(FilterRequest req, Connection conn) throws SQLException {
		String sql = "SELECT syskey, route, Medication, dose, "
				+ "engdesc, remark, StockID FROM viewStatMedication "
				+ "WHERE rgsno = ? AND syskey NOT IN (SELECT parentid from tblStatMedication)";
		PreparedStatement stmt = conn.prepareStatement(sql);
		stmt.setInt(1, req.getRgsno());
		ResultSet rs = stmt.executeQuery();
		ArrayList<StatMedicationData> list = new ArrayList<>();
		while (rs.next()) {
			StatMedicationData data = new StatMedicationData();
			data.setSyskey(rs.getLong("syskey"));
			data.setRoute(rs.getString("route"));
			data.setMedication(rs.getString("Medication"));
			data.setDose(rs.getDouble("dose"));
			data.setEngdesc(rs.getString("engdesc"));
			data.setRemark(rs.getString("remark"));
			data.setStockId(rs.getString("StockID"));
			list.add(data);
		}
		return list;
	}
	
	public ResponseData getAllNonParenterals(FilterRequest req, 
			Connection conn) throws SQLException {
		String sql = "SELECT syskey, l.RgsNo, l.t1, l.t2, l.t3, l.t4, l.t5, "
				+ "l.t6, l.t7, l.t8, l.t9, l.t10, l.t11, l.t12, "
				+ "l.n1, l.n2, l.n3, l.n4, l.n5, v.patientid, v.RgsName, v.RefNo "
				+ "FROM tblNonParenteral AS l LEFT JOIN "
				+ "(SELECT DISTINCT pId, RgsNo, patientid, RgsName, RefNo "
				+ "From viewRegistration) AS v ON l.RgsNo = v.RgsNo";
		String[] keys = {"v.patientid", "v.RgsName", "v.RefNo", ""};
		ResultSet rs = executePaginationQuery(sql, keys, req, conn);
		
		
		
		ArrayList<HashMap<String, Object>> list = new ArrayList<>();
		
		while (rs.next()) {
			NonParenteralData data = new NonParenteralData();
			data.setSyskey(rs.getLong("syskey"));
			data.setRgsNo(rs.getLong("RgsNo"));
			data.setStockId(rs.getString("t1"));
			data.setMedication(rs.getString("t2"));
			data.setRemark(rs.getString("t3"));
			data.setDiagnosis(rs.getString("t4"));
			data.setDrugAllergyTo(rs.getString("t5"));
			data.setMoConfirmDate(rs.getString("t6"));
			data.setNurseConfirmDate(rs.getString("t7"));
			data.setDateStart(rs.getString("t8"));
			data.setDateOff(rs.getString("t9"));
			data.setGivenByType(rs.getString("t10"));
			data.setMoConfirmTime(rs.getString("t11"));
			data.setNurseConfirmTime(rs.getString("t12"));
			
			data.setRouteSyskey(rs.getInt("n1"));
			data.setDose(rs.getDouble("n2"));
			data.setDoseTypeSyskey(rs.getInt("n3"));
			data.setFrequency(rs.getDouble("n4"));
			data.setTubeFeed(getCheckboxCode(rs.getInt("n5"), "1"));
			data.setLiquidMedication(getCheckboxCode(rs.getInt("n5"), "2"));
			data.setChronicRenalFailure(getCheckboxCode(rs.getInt("n5"), "3"));
			data.setPregnant(getCheckboxCode(rs.getInt("n5"), "4"));
			data.setPatientId(rs.getString("patientid"));
			data.setPatientName(rs.getString("RgsName"));
			data.setAdNo(rs.getString("RefNo"));
			sql = "SELECT [syskey], done, done_at, nurse_id, parentId FROM [dbo].[tblNurseDoseActivity] WHERE parentId = ?";
			PreparedStatement stmt = conn.prepareStatement(sql);
			stmt.setLong(1, rs.getLong("syskey"));
			ResultSet rs2 = stmt.executeQuery();
			ArrayList<NurseDoseActivityData> activityDataList = new ArrayList<NurseDoseActivityData>();
			while (rs2.next()) {
				NurseDoseActivityData activityData = new NurseDoseActivityData();
				activityData.setSyskey(rs2.getLong("syskey"));
				activityData.setDone(rs2.getBoolean("done"));
				activityData.setDoneAt(rs2.getString("done_at"));
				activityData.setNurseId(rs2.getLong("nurse_id"));
				activityData.setParentId(rs2.getLong("parentId"));
				activityDataList.add(activityData);
			}
			data.setCheckList(activityDataList);
			list.add(data.toHashMap());
		}
		
		
		return createResponseData(req, list, 
				getTotalOf("tblNonParenteral AS l LEFT JOIN "
						+ "(SELECT DISTINCT pId, RgsNo, patientid, RgsName, RefNo "
						+ "From viewRegistration) AS v ON l.pId = v.pId AND l.RgsNo = v.RgsNo", 
				getWhereQuery(), new Object[] {}, conn));
	}
	
	public ArrayList<NonParenteralData> getNonParenteralsInitial(FilterRequest filterRequest, Connection conn) throws SQLException {
			String sql = "SELECT t1.Syskey, t2.SysKey as routeSyskey, t1.Medication, t1.dose, "
					+ "t1.doseSysKey, "
					+ "t1.StockID, t1.rgsno, t1.Frequency "
					+ "from viewNonParenteral AS t1 "
					+ "LEFT JOIN tblRoute AS t2 ON t1.route = t2.Route "
					+ "WHERE t1.rgsno = ? AND t1.syskey NOT IN "
					+ "(SELECT parentid from tblNonParenteral)";
			PreparedStatement stmt = conn.prepareStatement(sql);
			stmt.setInt(1, filterRequest.getRgsno());
			ResultSet rs = stmt.executeQuery();
			ArrayList<NonParenteralData> list = new ArrayList<>();
			while (rs.next()) {
				NonParenteralData data = new NonParenteralData();
				data.setSyskey(rs.getLong("Syskey"));
				data.setRouteSyskey(rs.getLong("routeSyskey"));
				data.setMedication(rs.getString("Medication"));
				data.setDose(rs.getDouble("dose"));
				data.setDoseTypeSyskey(rs.getLong("doseSysKey"));
				data.setStockId(rs.getString("StockID"));
				data.setRgsNo(rs.getLong("rgsno"));
				data.setFrequency(rs.getDouble("Frequency"));
				ArrayList<NurseDoseActivityData> activityDataList = new ArrayList<>();
				for (int i = 0; i < data.getFrequency(); i++) {
					NurseDoseActivityData activityData = new NurseDoseActivityData();
					activityDataList.add(activityData);
				}
				data.setCheckList(activityDataList);
				list.add(data);
			}
		return list;
	}
	
	public ArrayList<InjectionData> getAllInjections(FilterRequest filterRequest, Connection conn) throws SQLException {
		String sql = "SELECT l.syskey, l.t1, l.t2, l.t3, l.t6, l.t7, l.t10, "
				+ "l.n1, l.n2, l.n3, l.n4, v.patientid, v.RgsName, v.RefNo, v.RgsNo "
				+ "FROM tblInjection AS l "
				+ "LEFT JOIN (SELECT DISTINCT pId, RgsNo, patientid, "
				+ "RgsName, RefNo From viewRegistration) AS v "
				+ "ON l.RgsNo = v.RgsNo";
		if (filterRequest.isInitial()) {
			sql += " WHERE l.RgsNo = ?";
		}
		PreparedStatement stmt = conn.prepareStatement(sql);
		if (filterRequest.isInitial()) {
			stmt.setInt(1, filterRequest.getRgsno());
		}
		ResultSet rs = stmt.executeQuery();
		ArrayList<InjectionData> list = new ArrayList<>();
		
		while (rs.next()) {
			InjectionData data = new InjectionData();
			data.setSyskey(rs.getLong("syskey"));
			data.setStockId(rs.getString("t1"));
			data.setMedication(rs.getString("t2"));
			data.setRemark(rs.getString("t3"));
			data.setMoConfirmDate(rs.getString("t6"));
			data.setNurseConfirmDate(rs.getString("t7"));
			data.setGivenByType(rs.getString("t10"));
			
			data.setRouteSyskey(rs.getInt("n1"));
			data.setDose(rs.getDouble("n2"));
			data.setDoseTypeSyskey(rs.getInt("n3"));
			data.setFrequency(rs.getDouble("n4"));
			data.setPatientId(rs.getString("patientid"));
			data.setPatientName(rs.getString("RgsName"));
			data.setAdNo(rs.getString("RefNo"));
			data.setRgsNo(rs.getLong("RgsNo"));
			
			sql = "SELECT [syskey], done, done_at, nurse_id, parentId FROM [dbo].[tblNurseDoseActivity2] WHERE parentId = ?";
			stmt = conn.prepareStatement(sql);
			stmt.setLong(1, rs.getLong("syskey"));
			ResultSet rs2 = stmt.executeQuery();
			ArrayList<NurseDoseActivityData> activityDataList = new ArrayList<NurseDoseActivityData>();
			while (rs2.next()) {
				NurseDoseActivityData activityData = new NurseDoseActivityData();
				activityData.setSyskey(rs2.getLong("syskey"));
				activityData.setDone(rs2.getBoolean("done"));
				activityData.setDoneAt(rs2.getString("done_at"));
				activityData.setNurseId(rs2.getLong("nurse_id"));
				activityData.setParentId(rs2.getLong("parentId"));
				activityDataList.add(activityData);
			}
			data.setCheckList(activityDataList);
			list.add(data);
		}
		return list;
	}
	
	public ArrayList<InjectionData> getInjectionsInitial(FilterRequest filterRequest, Connection conn) throws SQLException {
		
		
//		if (filterRequest.isInitial()) {
//			String sql = "INSERT INTO tblInjection (syskey, parentid, n1, t2, n2, n3, t1, RgsNo, n4) "
//					+ "SELECT t1.Syskey, t1.Syskey, t2.SysKey, t1.Medication, t1.dose, t1.doseSysKey, "
//					+ "t1.StockID, t1.rgsno, t1.Frequency from viewInjMedication AS t1 "
//					+ "LEFT JOIN tblRoute AS t2 ON t1.route = t2.Route "
//					+ "WHERE t1.rgsno = ? AND t1.syskey NOT IN (SELECT parentid from tblInjection)";
			String sql = "SELECT t1.Syskey as parentId, t2.SysKey as routeSyskey, t1.Medication, "
					+ "t1.dose, t1.doseSysKey, "
					+ "t1.StockID, t1.rgsno, t1.Frequency FROM viewInjMedication AS t1 "
					+ "LEFT JOIN tblRoute AS t2 ON t1.route = t2.Route WHERE "
					+ "t1.rgsno = ? AND t1.Syskey NOT IN (SELECT parentid from tblInjection)";
			PreparedStatement stmt = conn.prepareStatement(sql);
			stmt.setInt(1, filterRequest.getRgsno());
			ResultSet rs = stmt.executeQuery();
			
			ArrayList<InjectionData> list = new ArrayList<>();
			
			while (rs.next()) {
				InjectionData data = new InjectionData();
				data.setSyskey(0);
				data.setParentId(rs.getLong("parentId"));
				data.setRouteSyskey(rs.getInt("routeSyskey"));
				data.setMedication(rs.getString("Medication"));
				data.setDose(rs.getDouble("dose"));
				data.setDoseTypeSyskey(rs.getInt("doseSysKey"));
				data.setStockId(rs.getString("StockID"));
				data.setRgsNo(rs.getLong("rgsno"));
				data.setFrequency(rs.getDouble("Frequency"));
				list.add(data);
			}
			return list;
			
//			sql = "SELECT syskey, n4 FROM tblInjection";
//			stmt.setInt(1, filterRequest.getRgsno());
//			stmt = conn.prepareStatement(sql);
//			ResultSet rs = stmt.executeQuery();
//			while (rs.next()) {
//				generateNurseDoseActivities2(rs.getInt("n4"), rs.getLong("syskey"), conn);
//			}	
//		}
//		return getAllInjections(filterRequest, conn);
	}
	
	private boolean getCheckboxCode(int code, String c) {
		String codeStr = code + "";
		if (codeStr.contains(c)) {
			return true;
		} else {
			return false;
		}
	}
	
	private void generateNurseDoseActivities(int n, long parentId, Connection conn) throws SQLException {
		String sql = "SELECT COUNT(*) AS total FROM dbo.tblNurseDoseActivity WHERE parentId = ?";
		boolean alreadyInit = false;
		PreparedStatement stmt = conn.prepareStatement(sql);
		stmt.setLong(1, parentId);
		ResultSet rs = stmt.executeQuery();
		while(rs.next()) {
			if (rs.getInt("total") != 0) {
				alreadyInit = true;
			}
		}
				
		int j = 0;
		sql = "INSERT INTO dbo.tblNurseDoseActivity (syskey, parentId) VALUES(?, ?)";
		while (!alreadyInit && j++ < n) {
			stmt = conn.prepareStatement(sql);
			int i = 1;
			stmt.setLong(i++, getNextSyskey("tblNurseDoseActivity", conn));
			stmt.setLong(i++, parentId);
			stmt.executeUpdate();
		}
	}
	
	private void generateNurseDoseActivities2(int n, long parentId, Connection conn) throws SQLException {
		String sql = "SELECT COUNT(*) AS total FROM dbo.tblNurseDoseActivity2 WHERE parentId = ?";
		boolean alreadyInit = false;
		PreparedStatement stmt = conn.prepareStatement(sql);
		stmt.setLong(1, parentId);
		ResultSet rs = stmt.executeQuery();
		while(rs.next()) {
			if (rs.getInt("total") != 0) {
				alreadyInit = true;
			}
		}
				
		int j = 0;
		sql = "INSERT INTO dbo.tblNurseDoseActivity2 (syskey, parentId) VALUES(?, ?)";
		while (!alreadyInit && j++ < n) {
			stmt = conn.prepareStatement(sql);
			int i = 1;
			stmt.setLong(i++, getNextSyskey("tblNurseDoseActivity2", conn));
			stmt.setLong(i++, parentId);
			stmt.executeUpdate();
		}
	}
	
	
//	public ArrayList<InstructionData> getInstructionsByPatient(Long pId, Connection conn) throws SQLException {
//		String sql = "SELECT t1, t2, t3, t4, t5 FROM [dbo].[tblInstruction] WHERE pId = ?";
//		
//		PreparedStatement stmt = conn.prepareStatement(sql);
//		stmt.setLong(1, pId);
//		ResultSet rs = stmt.executeQuery();
//		
//		ArrayList<InstructionData> instructions = new ArrayList<>();
//		while (rs.next()) {
//			InstructionData data = new InstructionData();
//			data.setSyskey(rs.getLong("syskey"));
//			data.setDate(rs.getString("t1"));
//			data.setDateTaken(rs.getString("t2"));
//			data.setDrugAllergyTo(rs.getString("t3"));
//			data.setInstruction(rs.getString("t4"));
//			data.setRemarks(rs.getString("t5"));
//			instructions.add(data);
//		}
//		return instructions;
//	}
}
