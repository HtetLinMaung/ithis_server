package com.nirvasoft.web.pos.dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;


import org.springframework.stereotype.Repository;

import com.nirvasoft.web.pos.model.FilterRequest;
import com.nirvasoft.web.pos.model.HeaderData;
import com.nirvasoft.web.pos.model.PatientData;
import com.nirvasoft.web.pos.model.PatientTypeData;
import com.nirvasoft.web.pos.model.PatientTypeResponse;
import com.nirvasoft.web.pos.model.ResponseData;
import com.nirvasoft.web.pos.util.QueryUtil;

@Repository
public class PatientDao extends QueryUtil {
	public ArrayList<String> getAdNosByPatient(long pId, Connection conn)
			throws SQLException {
		String sql = "SELECT RefNo FROM viewRegistration WHERE pId = ?";
		
		PreparedStatement stmt = conn.prepareStatement(sql);
		stmt.setLong(1, pId);
		ResultSet rs = stmt.executeQuery();
		
		ArrayList<String> adNos = new ArrayList<>();
		while(rs.next()) {
			adNos.add(rs.getString("RefNo"));
		}
		if (adNos.size() == 0) {
			adNos.add("-");
		}
		
		return adNos;
	}
	
	public ResponseData getAllPatients(FilterRequest req, Connection conn) throws SQLException {
		String sql = "select pId, patientid, RgsNo, RefNo, patientid, RgsName, FatherName, "
				+ "Address, MCardNo, docfname, speicality, roomNo, ArivDate, DptDate, "
				+ "PtType, RgsStatus, Age, DrID, Allergy, ward, BedId "
				+ "from viewRegistration WHERE PtType = ? AND RgsStatus = ?";
		
		String[] keys = { "RefNo", "pId", "RgsName", "FatherName", "Address", 
				"MCardNo", "docfname", "speicality", "roomNo", "ArivDate", "DptDate" };
		PreparedStatement stmt = preparePaginationQuery(sql, keys, req, "pId", conn);
		int i = 1;
		stmt.setInt(i++, req.getPatientType());
		stmt.setInt(i++, req.getRgsStatus());
		setPaginationParams(i, req, stmt);
		ResultSet rs = stmt.executeQuery();
		
		ArrayList<HashMap<String, Object>> list = new ArrayList<>();
		while(rs.next()) {
			PatientData data = new PatientData();
			data.setpId(rs.getLong("pId"));
			data.setRgsNo(rs.getLong("RgsNo"));
			data.setAdNo(rs.getString("RefNo"));
			data.setId(rs.getString("patientid"));
			data.setName(rs.getString("RgsName"));
			data.setFatherName(rs.getString("FatherName"));
			data.setAddress(rs.getString("Address"));
			data.setmCardNo(rs.getString("MCardNo"));
			data.setDoctor(rs.getString("docfname"));
			data.setSpeciality(rs.getString("speicality"));
			data.setRoomNo(rs.getString("roomNo"));
			data.setAdDate(rs.getString("ArivDate"));
			data.setDptDate(rs.getString("DptDate"));
			data.setPatientType(rs.getInt("PtType"));
			data.setRgsStatus(rs.getInt("RgsStatus"));
			data.setAge(rs.getInt("Age"));
			data.setDrID(rs.getString("DrID"));
			data.setAllergy(rs.getString("Allergy"));
			data.setWard(rs.getString("ward"));
			data.setBed(rs.getString("BedId"));
			list.add(data.toHashMap());
		}
		return createResponseData(req, list, getTotalOf("viewRegistration", 
				getWhereQuery(), new Object[] {req.getPatientType(), req.getRgsStatus()}, conn));
	}
	
	public PatientTypeResponse getAllPatientTypes(Connection conn) throws SQLException {
		String sql = "select syskey, t2 from PatientType WHERE RecordStatus != 4";
		
		PreparedStatement stmt = conn.prepareStatement(sql);
		ResultSet rs = stmt.executeQuery();
		ArrayList<PatientTypeData> list = new ArrayList<>();
		while(rs.next()) {
			PatientTypeData data = new PatientTypeData();
			data.setText(rs.getString("t2"));
			data.setValue(rs.getLong("syskey"));
			list.add(data);
		}
		
		sql = "select pttype from systemsetup";
		stmt = conn.prepareStatement(sql);
		rs = stmt.executeQuery();
		PatientTypeResponse res = new PatientTypeResponse();
		res.setPatientTypeList(list);
		while(rs.next()) {
			res.setCurrentPatientType(rs.getInt("pttype"));
		}
		return res;
	}
}
