package com.nirvasoft.web.pos.service;

import java.sql.Connection;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nirvasoft.web.pos.dao.RoleDao;
import com.nirvasoft.web.pos.model.RoleData;
import com.nirvasoft.web.pos.model.RoleMenuData;
import com.nirvasoft.web.pos.model.UserData;
import com.nirvasoft.web.pos.util.ConnectionUtil;
import com.nirvasoft.web.pos.util.SyskeyUtil;

@Service
public class RoleService {

	@Autowired
	RoleDao roleDao;

	@SuppressWarnings("static-access")
	public HashMap<String, Object> getAllRole(UserData user) {
		ArrayList<RoleMenuData> roleMenuList = new ArrayList<RoleMenuData>();
		HashMap<String, Object> result = new HashMap<>();
		try (Connection conn = ConnectionUtil.getConnection(user.getOrgId());) {
			roleMenuList = roleDao.getAllRole(conn);
			result.put("dataList", roleMenuList);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return result;
	}

	public HashMap<String, String> saveRole(RoleData data, UserData user) {
		int effectedRow = 0;
		HashMap<String, String> result = new HashMap<>();
		try (Connection conn = ConnectionUtil.getConnection(user.getOrgId());) {
			conn.setAutoCommit(false);
			if (data.getSyskey().equals("0")) {
				data.setSyskey(SyskeyUtil.getSyskey() + "");
				if (!roleDao.isCodeExist(data, conn)) {
					effectedRow = roleDao.saveRoleHeader(data, conn);
					if (effectedRow > 0) {
						effectedRow = saveRoleMenu(data, conn);
					}
				} else {
					result.put("message", "CODEEXISTS");
					return result;
				}
			} else {
				if (!roleDao.isCodeExist(data, conn)) {
					effectedRow = roleDao.updateRoleHeader(data, conn);
					if (effectedRow > 0) {
						effectedRow = roleDao.clearRoleMenu(data, conn);
						if (effectedRow > 0) {
							effectedRow = saveRoleMenu(data, conn);
						}
					}
				} else {
					result.put("message", "CODEEXISTS");
					return result;
				}
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
		}

		return result;
	}

	public Map<String, Object> searchRoleList(HashMap<String, Object> data, UserData userData) {
		Map<String, Object> result = new HashMap<>();
		try (Connection conn = ConnectionUtil.getConnection(userData.getOrgId());) {
			result = roleDao.searchRoleList(data, conn);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return result;
	}

	public HashMap<String, Object> readDataById(String roleSyskey, UserData userData) {
		HashMap<String, Object> result = new HashMap<>();
		RoleData data = new RoleData();
		try (Connection conn = ConnectionUtil.getConnection(userData.getOrgId());) {
			data = RoleDao.readRole(roleSyskey, conn);
			result.put("roleData", data);
		} catch (SQLException e) {
			e.printStackTrace();
		}
		return result;
	}

	public int saveRoleMenu(RoleData data, Connection conn) throws SQLException {
		int effectedRow = 0;
		for (int i = 0; i < data.getMenu().size(); i++) {
			if (data.getMenu().get(i).isResult()) {
				effectedRow = roleDao.saveRoleMenu(data.getMenu().get(i), data.getSyskey(), data.getUserId(),
						data.getUserName(), data.getUsersyskey(), data.getBtnarr(), conn);
			}
		}
		return effectedRow;
	}

	public HashMap<String, String> deleteRole(String syskey, UserData userData) {
		int effectedRow = 0;
		HashMap<String, String> result = new HashMap<>();
		try (Connection conn = ConnectionUtil.getConnection(userData.getOrgId());) {
			conn.setAutoCommit(false);
			if (!roleDao.canDelete(syskey, conn)) {
				effectedRow = roleDao.deleteRoleHeader(syskey, conn);
				if (effectedRow > 0) {
					effectedRow = roleDao.deleteRoleMenu(syskey, conn);
				}
			} else {
				result.put("message", "CANNOTDELETE");
				return result;
			}

			if (effectedRow > 0) {
				conn.commit();
				result.put("message", "SUCCESS");
			} else {
				conn.rollback();
				result.put("message", "FAIL");
			}

			return result;

		} catch (SQLException e) {
			e.printStackTrace();
		}
		return result;
	}

}
