package com.nirvasoft.web.pos.service;

import java.sql.Connection;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nirvasoft.web.pos.dao.NurseActivityWorklistDao;
import com.nirvasoft.web.pos.model.Doctor;
import com.nirvasoft.web.pos.model.FilterRequest;
import com.nirvasoft.web.pos.model.HeaderData;
import com.nirvasoft.web.pos.model.NurseActivity;
import com.nirvasoft.web.pos.model.NurseActivityData;
import com.nirvasoft.web.pos.model.PatientData;
import com.nirvasoft.web.pos.model.PatientTypeResponse;
import com.nirvasoft.web.pos.model.ResponseData;
import com.nirvasoft.web.pos.model.SelectItem;
import com.nirvasoft.web.pos.model.UserData;
import com.nirvasoft.web.pos.util.ConnectionUtil;

@Service
public class NurseActivityWorklistService {
	@Autowired
	NurseActivityWorklistDao nurseActivityWorklistDao;
	
	public ArrayList<NurseActivity> fetchAllActivities(UserData user) {
		ArrayList<NurseActivity> activities = new ArrayList<>();
		try (Connection conn = ConnectionUtil.getConnection(user.getOrgId());) {
			activities = nurseActivityWorklistDao.getAllActivities(conn);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return activities;
	}
	
	public ArrayList<SelectItem> fetchAllProcedures(UserData user) {
		ArrayList<SelectItem> selectItems = new ArrayList<>();
		try (Connection conn = ConnectionUtil.getConnection(user.getOrgId());) {
			selectItems = nurseActivityWorklistDao.getAllProcedures(conn);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return selectItems;
	}
	
	public ResponseData fetchAllDoctors(FilterRequest req, UserData user) {
		ResponseData res = new ResponseData();
		try (Connection conn = ConnectionUtil.getConnection(user.getOrgId());) {
			res = nurseActivityWorklistDao.getAllDoctors(req, conn);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return res;
	}
	
	public ArrayList<NurseActivity> fetchActivitiesByPatient(int pId, UserData user) {
		ArrayList<NurseActivity> activities = new ArrayList<>();
		try (Connection conn = ConnectionUtil.getConnection(user.getOrgId());) {
			activities = nurseActivityWorklistDao.getActivitiesByPatient(pId, conn);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return activities;
	}
	
	public int delete(long syskey, UserData user) {
		int status = 0;
		try (Connection conn = ConnectionUtil.getConnection(user.getOrgId());) {
			status = nurseActivityWorklistDao.delete(syskey, conn);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return status;
	}
	
	public Optional<Doctor> fetchDoctorById(long syskey, UserData user) {
		try (Connection conn = ConnectionUtil.getConnection(user.getOrgId());) {
			return Optional.ofNullable(nurseActivityWorklistDao.getDoctorById(syskey, conn));
		} catch (Exception e) {
			e.printStackTrace();
		}
		return null;
	}
	
	public long update(long syskey, NurseActivityData data, UserData user) {
		try (Connection conn = ConnectionUtil.getConnection(user.getOrgId());) {
			nurseActivityWorklistDao.update(syskey, data, conn);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return syskey;
	}
	
	public long save(NurseActivityData data, UserData user) {
		long syskey = 0;
		try (Connection conn = ConnectionUtil.getConnection(user.getOrgId());) {
			syskey = nurseActivityWorklistDao.save(data, conn);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return syskey;
	}
	
	
}
