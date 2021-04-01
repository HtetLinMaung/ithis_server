package com.nirvasoft.web.pos.service;

import java.sql.Connection;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nirvasoft.web.pos.dao.PatientDao;
import com.nirvasoft.web.pos.model.FilterRequest;
import com.nirvasoft.web.pos.model.PatientData;
import com.nirvasoft.web.pos.model.PatientTypeResponse;
import com.nirvasoft.web.pos.model.ResponseData;
import com.nirvasoft.web.pos.model.UserData;
import com.nirvasoft.web.pos.util.ConnectionUtil;

@Service
public class PatientService {
	@Autowired
	PatientDao patientDao;
	
	public ArrayList<HashMap<String, Object>> fetchAdNosByPatient(long pId, UserData user) {
		try (Connection conn = ConnectionUtil.getConnection(user.getOrgId());) {
			return patientDao.getAdNosByPatient(pId, conn);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return new ArrayList<HashMap<String, Object>>();
	}
	
	public ResponseData fetchAllPatients(FilterRequest req, UserData user) {
		ResponseData res = new ResponseData();
		try (Connection conn = ConnectionUtil.getConnection(user.getOrgId());) {
			res = patientDao.getAllPatients(req, conn);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return res;
	}
	
	public PatientData fetchPatientByRgsNo(long rgsNo, UserData user) {
		try (Connection conn = ConnectionUtil.getConnection(user.getOrgId());) {
			return patientDao.getPatientByRgsNo(rgsNo, conn);
		} catch (Exception e) {
			e.printStackTrace();
		} 
		return new PatientData();
	}
	
	public PatientTypeResponse fetchAllPatientTypes(UserData user) {
		try (Connection conn = ConnectionUtil.getConnection(user.getOrgId());) {
			return patientDao.getAllPatientTypes(conn);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return null;
	}
	
	public Optional<Boolean> getRole(String pId, UserData user) {
		try (Connection conn = ConnectionUtil.getConnection(user.getOrgId());) {
			return patientDao.getRole(pId, conn);
		} catch (Exception e) {
			e.printStackTrace();
			return null;
		}
		
	}
}
