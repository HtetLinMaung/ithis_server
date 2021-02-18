package com.nirvasoft.web.pos.service;

import java.sql.Connection;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nirvasoft.web.pos.dao.PersonDao;
import com.nirvasoft.web.pos.dao.RoleDao;
import com.nirvasoft.web.pos.dao.UserDao;
import com.nirvasoft.web.pos.model.RoleData;
import com.nirvasoft.web.pos.model.UserData;
import com.nirvasoft.web.pos.util.ConnectionUtil;
import com.nirvasoft.web.pos.util.SyskeyUtil;

@Service
public class UserService {
	final static Logger logger = Logger.getLogger(UserService.class);
	@Autowired
	UserDao userDao;

	@Autowired
	PersonDao personDao;

	@Autowired
	RoleDao roleDao;

	public HashMap<String, String> save(UserData userData, UserData user) {
		HashMap<String, String> result = new HashMap<>();
		int effectedRow = 0;
		try (Connection conn = ConnectionUtil.getUserConnection(user.getOrgId())) {
			conn.setAutoCommit(false);
			if (!userDao.isUserIdExist(userData.getT1(), userData.getSyskey(), conn)) {
				if (userData.getSyskey().equals("") || userData.getSyskey().equals("0")) {
					userData.getPerson().setSyskey(SyskeyUtil.getSyskey() + "");
					userData.getPerson().setT1(userData.getT1());
					userData.setSyskey(SyskeyUtil.getSyskey() + "");
					userData.setN4(userData.getPerson().getSyskey());

					effectedRow = userDao.insert(userData, userData.getPerson(), conn);
					if (effectedRow > 0) {
						for (int i = 0; i < userData.getRoleData().size(); i++)
							effectedRow = userDao.insertUserRole(userData.getSyskey(),
									userData.getRoleData().get(i).getSyskey(), conn);
					}

				} else {
					effectedRow = userDao.update(userData, userData.getPerson(), conn);
					if (effectedRow > 0) {
						effectedRow = userDao.deleteUserRole(userData.getSyskey(), conn);
						for (int i = 0; i < userData.getRoleData().size(); i++)
							effectedRow = userDao.insertUserRole(userData.getSyskey(),
									userData.getRoleData().get(i).getSyskey(), conn);
					}
				}

			} else {
				result.put("message", "EXIST");
				return result;
			}
			if (effectedRow > 0) {
				conn.commit();
				result.put("message", "SUCCESS");
			} else {
				conn.rollback();
				result.put("message", "FAIL");
			}
		} catch (Exception e) {
			e.printStackTrace();
			result.put("message", "FAIL");
		}

		return result;
	}

	public Map<String, Object> getUserList(HashMap<String, Object> data, UserData userData) {
		Map<String, Object> result = new HashMap<>();
		try (Connection conn = ConnectionUtil.getUserConnection(userData.getOrgId());) {
			result = userDao.searchUserList(data, conn);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return result;
	}

	public List<RoleData> getRoleData(UserData userData) {
		List<RoleData> result = new ArrayList<>();
		try (Connection conn = ConnectionUtil.getUserConnection(userData.getOrgId());) {
			result = roleDao.getAllData(conn);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return result;
	}

	public UserData read(String id, UserData userData) {
		UserData result = new UserData();
		try (Connection conn = ConnectionUtil.getUserConnection(userData.getOrgId());) {
			result = userDao.read(id, conn);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return result;
	}

	public Map<String, String> delete(String id, String u12id, UserData userData) {
		Map<String, String> result = new HashMap<>();
		int effectedRow = 0;
		try (Connection conn = ConnectionUtil.getConnection(userData.getOrgId())) {
			conn.setAutoCommit(false);
			effectedRow = userDao.delete(id, u12id, conn);
			if (effectedRow > 0) {
				conn.commit();
				result.put("message", "SUCCESS");
			} else {
				result.put("message", "FAIL");
				conn.rollback();
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
		return result;
	}

}
