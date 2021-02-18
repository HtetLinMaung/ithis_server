package com.nirvasoft.web.pos.service;

import java.sql.Connection;
import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nirvasoft.web.pos.dao.NursingCareRecordDao;
import com.nirvasoft.web.pos.dao.UserDao;
import com.nirvasoft.web.pos.model.NursingCareRecordData;
import com.nirvasoft.web.pos.model.Relationship;
import com.nirvasoft.web.pos.model.UserData;
import com.nirvasoft.web.pos.util.ConnectionUtil;
import com.nirvasoft.web.pos.util.SyskeyUtil;

@Service
public class NursingCareRecordService {
	@Autowired
	NursingCareRecordDao nursingCareRecordDao;
	@Autowired
	UserDao userDao;

	public Map<String, String> save(NursingCareRecordData data, UserData user) {
		Map<String, String> result = new HashMap<>();
		int effectedRow = 0;
		try (Connection cnn = ConnectionUtil.getConnection(user.getOrgId());) {
			cnn.setAutoCommit(false);
			if (data.getSyskey().equals("")) {
				if (!nursingCareRecordDao.isCodeExist(data.getSyskey(), cnn)) {
					if (data.getSyskey().equals("0") || data.getSyskey().equals("")) {
						data.setSyskey(SyskeyUtil.getSyskey() + "");
						effectedRow = nursingCareRecordDao.insert(data, cnn);
					}
				} else {
					result.put("message", "EXIT");
					return result;
				}
			} else {
				effectedRow = nursingCareRecordDao.update(data, cnn);
			}

			if (effectedRow > 0) {
				result.put("message", "SUCCESS");
				cnn.commit();
				return result;
			} else {
				result.put("message", "FAIL");
				cnn.rollback();
				return result;
			}
		} catch (Exception e) {
			e.printStackTrace();

		}

		return result;
	}

	public HashMap<String, Object> getNursingCareRecord(NursingCareRecordData data, UserData user) {
		Map<String, Object> result = new HashMap<>();
		try {
			Connection conn = ConnectionUtil.getConnection(user.getOrgId());
			result = nursingCareRecordDao.getNursingCareRecord(data, conn);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return (HashMap<String, Object>) result;
	}

	public HashMap<String, Object> getNursingCareRecord1(NursingCareRecordData data, UserData user) {
		Map<String, Object> result = new HashMap<>();
		try {
			Connection conn = ConnectionUtil.getConnection(user.getOrgId());
			result = nursingCareRecordDao.getNurseShiftSummary1(data, conn);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return (HashMap<String, Object>) result;
	}

	public HashMap<String, Object> getRelationship(Relationship data, UserData user) {
		Map<String, Object> result = new HashMap<>();
		try {
			Connection conn = ConnectionUtil.getConnection(user.getOrgId());
			result = nursingCareRecordDao.getRelationship(data, conn);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return (HashMap<String, Object>) result;
	}

	public HashMap<String, Object> delete(NursingCareRecordData data, UserData user) {
		HashMap<String, Object> result = new HashMap<>();

		int effectedRow = 0;
		try {
			Connection con = ConnectionUtil.getConnection(user.getOrgId());
			effectedRow = nursingCareRecordDao.delete(data.getSyskey(), con);

			if (effectedRow > 0) {
				result.put("message", "Success");
			} else {
				result.put("message", "deleteFail");
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
		return result;
	}

}
