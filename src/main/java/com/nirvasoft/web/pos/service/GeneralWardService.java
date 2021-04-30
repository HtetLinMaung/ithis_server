package com.nirvasoft.web.pos.service;

import java.sql.Connection;
import java.sql.SQLException;
import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nirvasoft.web.pos.dao.GeneralWardDao;
import com.nirvasoft.web.pos.model.FilterRequest;
import com.nirvasoft.web.pos.model.GeneralWardData;
import com.nirvasoft.web.pos.model.GeneralWardDetailData;
import com.nirvasoft.web.pos.model.GoalData;
import com.nirvasoft.web.pos.model.GwData;
import com.nirvasoft.web.pos.model.InjectionData;
import com.nirvasoft.web.pos.model.ResponseData;
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
	
	public ArrayList<GwData> fetchGwsByRgsNo(FilterRequest req, UserData user) {
		ArrayList<GwData> list = new ArrayList<>();
		try (Connection conn = ConnectionUtil.getConnection(user.getOrgId());) {
			list = generalWardDao.getGwsByRgsNo(req, conn);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return list;
	}
	

	public ArrayList<GoalData> fetchAllGoals(UserData user) {
		ArrayList<GoalData> list = new ArrayList<>();
		try (Connection conn = ConnectionUtil.getConnection(user.getOrgId());) {
			list = generalWardDao.getAllGoals(conn);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return list;
	}
	
	public ResponseData fetchAllGeneralWards(FilterRequest req, UserData user) {
		try (Connection conn = ConnectionUtil.getConnection(user.getOrgId());) {
			return generalWardDao.getAllGws(req, conn);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return new ResponseData();
	}
	
	public ArrayList<GeneralWardDetailData> fetchShiftsByParent(long parentId, UserData user) {
		try (Connection conn = ConnectionUtil.getConnection(user.getOrgId());) {
			return generalWardDao.getShiftsByParent(parentId, conn);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return new ArrayList<GeneralWardDetailData>();
	}
	
	public ArrayList<GwData> fetchPateintADL(FilterRequest req, UserData user) {
		try (Connection conn = ConnectionUtil.getConnection(user.getOrgId());) {
			return generalWardDao.getPateintADL(req, conn);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return new ArrayList<GwData>();
	}
	
//	public ArrayList<GeneralWardData> fetchGeneralWards(FilterRequest filteredReq, UserData user) {
//		ArrayList<GeneralWardData> list = new ArrayList<>();
//		try (Connection conn = ConnectionUtil.getConnection(user.getOrgId());) {
//			list = generalWardDao.getGeneralWards(filteredReq, conn);
//		} catch (Exception e) {
//			e.printStackTrace();
//		}
//		return list;
//	}
//	
//	public GwData fetchGwByIntervention(GwData data, UserData user) {
//		GwData gw = new GwData();
//		try (Connection conn = ConnectionUtil.getConnection(user.getOrgId());) {
//			gw = generalWardDao.getGwByIntervention(data, conn);
//		} catch (Exception e) {
//			e.printStackTrace();
//		}
//		return gw;
//	}
	
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
	
	public ArrayList<Long> saveGeneralWards(ArrayList<GwData> data, UserData user) {	
		ArrayList<Long> list = new ArrayList<>(); 
		try (Connection conn = ConnectionUtil.getConnection(user.getOrgId());) {
			list = generalWardDao.saveGeneralWards(data, conn);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return list;
	}
}
