package com.nirvasoft.web.pos.dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

import org.springframework.stereotype.Repository;

import com.nirvasoft.web.pos.model.Doctor;
import com.nirvasoft.web.pos.model.FilterRequest;
import com.nirvasoft.web.pos.model.HeaderData;
import com.nirvasoft.web.pos.model.NurseActivity;
import com.nirvasoft.web.pos.model.NurseActivityData;
import com.nirvasoft.web.pos.model.PatientData;
import com.nirvasoft.web.pos.model.PatientTypeData;
import com.nirvasoft.web.pos.model.PatientTypeResponse;
import com.nirvasoft.web.pos.model.ResponseData;
import com.nirvasoft.web.pos.model.SelectItem;
import com.nirvasoft.web.pos.util.QueryUtil;
import com.nirvasoft.web.pos.util.ServerUtil;

@Repository
public class NurseActivityWorklistDao extends QueryUtil {
	public ArrayList<NurseActivity> getAllActivities(Connection conn) throws SQLException {
//		TODO: change server side pagination
		String sql = "SELECT t1.[syskey], t1.Doctorid, t2.name AS doctorName, "
				+ "t1.[t4], t1.[t5], t1.[t6], t1.[n1], t1.[n2], t1.[n3], t1.[n4], "
				+ "t1.[n5], t1.[t7], t1.[t8], t1.[t9], t1.[t10], v.patientid, v.RgsName, v.RefNo, v.RgsNo "
				+ "FROM [dbo].[tblNurseActivity] AS t1 "
				+ "LEFT JOIN [dbo].[viewDoctorSpeciality] AS t2 ON t1.Doctorid = t2.syskey "
				+ "LEFT JOIN (SELECT DISTINCT pId, RgsNo, patientid, RgsName, RefNo From "
				+ "viewRegistration) AS v ON t1.pId = v.pId AND t1.RgsNo = v.RgsNo ORDER BY "
				+ "createddate DESC";
		PreparedStatement stmt = conn.prepareStatement(sql);
		ResultSet rs = stmt.executeQuery();
		ArrayList<NurseActivity> activities = new ArrayList<>();
		while (rs.next()) {
			NurseActivity nurseActivity = new NurseActivity();
			nurseActivity.setDoctorName(rs.getString("doctorName"));
			nurseActivity.setSyskey(rs.getLong("syskey"));
			nurseActivity.setDate(rs.getString("t4"));
			nurseActivity.setDueDateChange(rs.getString("t5"));
			nurseActivity.setDueDateRemove(rs.getString("t6"));
			nurseActivity.setProcedure(rs.getLong("n1"));
			nurseActivity.setSite(rs.getLong("n2"));
			nurseActivity.setSize(rs.getLong("n3"));
			nurseActivity.setMarking(rs.getLong("n4"));
			nurseActivity.setExternalLength(rs.getLong("n5"));
			nurseActivity.setDoctorId(rs.getLong("Doctorid"));
			nurseActivity.setSiteUnit(rs.getString("t7"));
			nurseActivity.setSizeUnit(rs.getString("t8"));
			nurseActivity.setMarkingUnit(rs.getString("t9"));
			nurseActivity.setExternalLengthUnit(rs.getString("t10"));
			nurseActivity.setPatientId(rs.getString("patientid"));
			nurseActivity.setPatientName(rs.getString("RgsName"));
			nurseActivity.setAdNo(rs.getString("RefNo"));
			nurseActivity.setRgsNo(rs.getLong("RgsNo"));
			activities.add(nurseActivity);
		}
		return activities;
	}
	
	public ArrayList<NurseActivity> getActivitiesByPatient(int pId, Connection conn) throws SQLException {
		String sql = "SELECT [t4], [t5], [t6], [n1], [n2], [n3], [n4], [n5], [t7], [t8], [t9], [t10] FROM [dbo].[tblNurseActivity] WHERE pId = ?";
		
		PreparedStatement stmt = conn.prepareStatement(sql);
		stmt.setInt(1, pId);
		ResultSet rs = stmt.executeQuery();
		
		ArrayList<NurseActivity> activities = new ArrayList<>();
		while (rs.next()) {
			NurseActivity nurseActivity = new NurseActivity();
			nurseActivity.setDate(rs.getString("t4"));
			nurseActivity.setDueDateChange(rs.getString("t5"));
			nurseActivity.setDueDateRemove(rs.getString("t6"));
			nurseActivity.setProcedure(rs.getLong("n1"));
			nurseActivity.setSite(rs.getLong("n2"));
			nurseActivity.setSize(rs.getLong("n3"));
			nurseActivity.setMarking(rs.getLong("n4"));
			nurseActivity.setExternalLength(rs.getLong("n5"));
			nurseActivity.setSiteUnit(rs.getString("t7"));
			nurseActivity.setSizeUnit(rs.getString("t8"));
			nurseActivity.setMarkingUnit(rs.getString("t9"));
			nurseActivity.setExternalLengthUnit(rs.getString("t10"));
			activities.add(nurseActivity);
		}
		return activities;
	}
	
	public ArrayList<SelectItem> getAllProcedures(Connection conn) throws SQLException {
		String sql = "SELECT syskey, t2 FROM [dbo].[tblProcedureTube]";		

		PreparedStatement stmt = conn.prepareStatement(sql);	
		ResultSet rs = stmt.executeQuery();
		
		ArrayList<SelectItem> selectItems = new ArrayList<>();
		while (rs.next()) {
			selectItems.add(
					new SelectItem(rs.getString("syskey"), rs.getString("t2"))
			);
		}
		return selectItems;
	}
	
	public ResponseData getAllDoctors(FilterRequest req, Connection conn) throws SQLException {
		String sql = "SELECT syskey, DrID, name, spname, rank, Degree1, Phone, clinicname "
				+ "FROM [dbo].[viewDoctorSpeciality] WHERE syskey <> 0";
				
		String[] keys = {"DrID", "name", "spname", "rank", "Degree1", "Phone", "clinicname"};
		
		ResultSet rs = executePaginationQuery(sql, keys, req, conn);
		ArrayList<HashMap<String, Object>> data = new ArrayList<>();
		while(rs.next()) {
			data.add(
					new Doctor(
							rs.getLong("syskey"),
							rs.getString("DrID"),
							rs.getString("name"),
							rs.getString("spname"),
							rs.getString("rank"),
							rs.getString("Degree1"),
							rs.getString("Phone"),
							rs.getString("clinicname")
					).toHashMap()
			);
		}
		return createResponseData(req, data, getTotalOf("[dbo].[viewDoctorSpeciality]", getWhereQuery(), new Object[] {}, conn));
	}
	
	public Doctor getDoctorById(long syskey, Connection conn) throws SQLException {
		String sql = "SELECT syskey, DrID, name, spname, rank, Degree1, Phone, clinicname "
				+ "FROM [dbo].[viewDoctorSpeciality] WHERE syskey = ?";
		
		PreparedStatement stmt = conn.prepareStatement(sql);
		stmt.setLong(1, syskey);
		ResultSet rs = stmt.executeQuery();
		
		Doctor doctor = new Doctor(0, "", "", "", "", "", "", "");	
		while (rs.next()) {
			doctor = new Doctor(
					rs.getLong("syskey"),
					rs.getString("DrID"),
					rs.getString("name"),
					rs.getString("spname"),
					rs.getString("rank"),
					rs.getString("Degree1"),
					rs.getString("Phone"),
					rs.getString("clinicname")
			);
		}
		
		return doctor;
	}
	

	
	
	
	public long save(NurseActivityData data, Connection conn) throws SQLException {
		String sql = "select max(syskey) AS SysKey from dbo.[tblNurseActivity]";
		PreparedStatement stmt = conn.prepareStatement(sql);
		ResultSet rs = stmt.executeQuery();
		long syskey = 0;
		while(rs.next()) {
			syskey = rs.getLong("SysKey");
		}
		
		sql = "INSERT INTO [dbo].[tblNurseActivity] " +
	                 "([syskey], [pId], [RgsNo], [userid], [username], "
	                 + "[createddate], [modifieddate], [Doctorid], "
	                 + "[t4], [t5], [t6], [n1], [n2], [n3], [n4], "
	                 + "[n5], [t7], [t8], [t9], [t10]) " +
		             "VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
		String currentDate = ServerUtil.getCurrentDate();
		stmt = conn.prepareStatement(sql);
		int i = 1;
		stmt.setLong(i++, syskey+1);
		stmt.setInt(i++, data.getpId());
		stmt.setInt(i++, data.getRgsNo());
		stmt.setString(i++, data.getUserid());
		stmt.setString(i++, data.getUsername());
		stmt.setString(i++, currentDate);
		stmt.setString(i++, currentDate);
		stmt.setLong(i++, data.getDoctorSysKey());
		stmt.setString(i++, data.getDate());
		stmt.setString(i++, data.getDueDateChange());
		stmt.setString(i++, data.getDueDateRemove());
		stmt.setLong(i++, data.getProcedure());
		stmt.setLong(i++, data.getSite());
		stmt.setLong(i++, data.getSize());
		stmt.setLong(i++, data.getMarking());
		stmt.setLong(i++, data.getExternalLength());
		stmt.setString(i++, data.getSiteUnit());
		stmt.setString(i++, data.getSizeUnit());
		stmt.setString(i++, data.getMarkingUnit());
		stmt.setString(i++, data.getExternalLengthUnit());
		
		stmt.executeUpdate();
		return syskey+1;
	}
	
	public long update(long syskey, NurseActivityData data, Connection conn) throws SQLException {
		String sql = "UPDATE [dbo].[tblNurseActivity] SET [pId] = ?, [RgsNo] = ?, [userid] = ?, [username] = ?, [modifieddate] = ?, [Doctorid] = ?, [t4] = ?, [t5] = ?, [t6] = ?, [n1] = ?, [n2] = ?, [n3] = ?, [n4] = ?, [n5] = ?, [t7] = ?, [t8] = ?, [t9] = ?, [t10] = ? WHERE syskey = ?";
		PreparedStatement stmt = conn.prepareStatement(sql);
		String currentDate = ServerUtil.getCurrentDate();
		int i = 1;
		
		stmt.setInt(i++, data.getpId());
		stmt.setInt(i++, data.getRgsNo());
		stmt.setString(i++, data.getUserid());
		stmt.setString(i++, data.getUsername());
		stmt.setString(i++, currentDate);
		stmt.setLong(i++, data.getDoctorSysKey());
		stmt.setString(i++, data.getDate());
		stmt.setString(i++, data.getDueDateChange());
		stmt.setString(i++, data.getDueDateRemove());
		stmt.setLong(i++, data.getProcedure());
		stmt.setLong(i++, data.getSite());
		stmt.setLong(i++, data.getSize());
		stmt.setLong(i++, data.getMarking());
		stmt.setLong(i++, data.getExternalLength());
		stmt.setString(i++, data.getSiteUnit());
		stmt.setString(i++, data.getSizeUnit());
		stmt.setString(i++, data.getMarkingUnit());
		stmt.setString(i++, data.getExternalLengthUnit());
		stmt.setLong(i++, syskey);
		
		stmt.executeUpdate();
		return syskey;
	}
	
	public int delete(long syskey, Connection conn) throws SQLException {
		String sql = "DELETE FROM [dbo].[tblNurseActivity] WHERE syskey = ?";
		PreparedStatement stmt = conn.prepareStatement(sql);
		stmt.setLong(1, syskey);
		
		return stmt.executeUpdate();
	}
	
	
}
