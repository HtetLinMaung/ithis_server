package com.nirvasoft.web.pos.service;

import java.sql.Connection;
import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nirvasoft.web.pos.dao.CommonTypeDao;
import com.nirvasoft.web.pos.dao.UserDao;
import com.nirvasoft.web.pos.model.CommonTypeData;
import com.nirvasoft.web.pos.model.UserData;
import com.nirvasoft.web.pos.util.ConnectionUtil;
import com.nirvasoft.web.pos.util.SyskeyUtil;

@Service
public class CommonTypeService {
	@Autowired
		CommonTypeDao commonTypeDao;
	@Autowired
	UserDao userDao;
	public Map<String, String> save(CommonTypeData data, UserData user) {
		Map<String, String> result = new HashMap<>();
		int effectedRow = 0;
		try (Connection cnn = ConnectionUtil.getConnection(user.getOrgId());) {
			cnn.setAutoCommit(false);
			if (data.getSyskey().equals("")) {
				if (!commonTypeDao.isCodeExist(data.getSyskey(), cnn)) {
					if (data.getSyskey().equals("0") || data.getSyskey().equals("")) {
						data.setSyskey(SyskeyUtil.getSyskey() + "");
						effectedRow = commonTypeDao.insert(data, cnn);
					}
				} else {
					result.put("message", "EXIT");
					return result;
				}
			} else {
				effectedRow = commonTypeDao.update(data, cnn);
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

	public HashMap<String, Object> get(CommonTypeData data, UserData user) {
		Map<String, Object> result = new HashMap<>();
		try {
			Connection conn = ConnectionUtil.getConnection(user.getOrgId());
			result = commonTypeDao.get(data, conn);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return (HashMap<String, Object>) result;
	}
	public HashMap<String, Object> delete(CommonTypeData data, UserData user) {
		HashMap<String, Object> result = new HashMap<>();

		int effectedRow = 0;
		try {
			Connection con = ConnectionUtil.getConnection(user.getOrgId());
			effectedRow = commonTypeDao.delete(data.getSyskey(), con);

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

