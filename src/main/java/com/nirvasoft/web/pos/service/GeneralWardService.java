package com.nirvasoft.web.pos.service;

import java.sql.Connection;
import java.sql.SQLException;
import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nirvasoft.web.pos.dao.GeneralWardDao;
import com.nirvasoft.web.pos.model.FilterRequest;
import com.nirvasoft.web.pos.model.GeneralWardData;
import com.nirvasoft.web.pos.model.InjectionData;
import com.nirvasoft.web.pos.model.UserData;
import com.nirvasoft.web.pos.util.ConnectionUtil;

@Service
public class GeneralWardService {
	@Autowired
	private GeneralWardDao generalWardDao;
	
	public ArrayList<GeneralWardData> fetchAllGeneralWardsInitial(FilterRequest filteredReq, UserData user) {
		ArrayList<GeneralWardData> list = new ArrayList<>();
		try (Connection conn = ConnectionUtil.getConnection(user.getOrgId());) {
			list = generalWardDao.getAllGeneralWardsInitial(filteredReq, conn);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return list;
	}
	
	public ArrayList<GeneralWardData> fetchAllGeneralWards(UserData user) {
		ArrayList<GeneralWardData> list = new ArrayList<>();
		try (Connection conn = ConnectionUtil.getConnection(user.getOrgId());) {
			list = generalWardDao.getAllGeneralWards(conn);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return list;
	}
	
	public ArrayList<GeneralWardData> fetchGeneralWards(FilterRequest filteredReq, UserData user) {
		ArrayList<GeneralWardData> list = new ArrayList<>();
		try (Connection conn = ConnectionUtil.getConnection(user.getOrgId());) {
			list = generalWardDao.getGeneralWards(filteredReq, conn);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return list;
	}
	
	public long updateGeneralWard(long syskey, GeneralWardData data, UserData user) {
		try (Connection conn = ConnectionUtil.getConnection(user.getOrgId());) {
			generalWardDao.updateGeneralWard(syskey, data, conn);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return syskey;
	}
	
	public int deleteGeneralWard(long syskey, long detailSyskey, UserData user) {
		int status = 0;
		try (Connection conn = ConnectionUtil.getConnection(user.getOrgId());) {
			status = generalWardDao.deleteGeneralWard(syskey, detailSyskey, conn);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return status;
	}
	
	public ArrayList<Long> saveGeneralWards(ArrayList<GeneralWardData> data, String date, UserData user) {	
		ArrayList<Long> list = new ArrayList<>(); 
		try (Connection conn = ConnectionUtil.getConnection(user.getOrgId());) {
			list = generalWardDao.saveGeneralWards(data, date, conn);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return list;
	}
}
