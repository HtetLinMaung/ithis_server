package com.nirvasoft.web.pos.service;

import java.sql.Connection;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nirvasoft.web.pos.dao.MenuDao;
import com.nirvasoft.web.pos.model.MenuData;
import com.nirvasoft.web.pos.model.MenuOrderData;
import com.nirvasoft.web.pos.model.MenuRightData;
import com.nirvasoft.web.pos.model.UserData;
import com.nirvasoft.web.pos.util.ConnectionUtil;

@Service
public class MenuService {

	@Autowired
	MenuDao menuDao;

	public Map<String, Object> searchMenuList(HashMap<String, Object> data, UserData userData) {
		Map<String, Object> result = new HashMap<>();
		try (Connection conn = ConnectionUtil.getUserConnection(userData.getOrgId());) {
			result = menuDao.searchMenuList(data, conn);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return result;
	}

	public HashMap<String, String> saveMenu(MenuData data, UserData userData) {
		HashMap<String, String> result = new HashMap<>();
		int effectedRow = 0;
		try (Connection conn = ConnectionUtil.getUserConnection(userData.getOrgId());) {
			conn.setAutoCommit(false);
			if (data.getSyskey().equals("") || data.getSyskey().equals("0")) {
				data.setSyskey(menuDao.getMaxCode(conn));
				if (!menuDao.isCodeExist(data, conn)) {
					effectedRow = menuDao.saveMenu(data, conn);
				} else {
					result.put("message", "CODEEXISTS");
					return result;
				}
			}

			else {
				if (!menuDao.isCodeExist(data, conn)) {
					if (menuDao.checkMenu(Long.parseLong(data.getSyskey()), conn)) {
						if (data.getN2().equals("0")) {
							effectedRow = menuDao.updateMenu(data, conn);
						} else {
							result.put("message", "DPARENT");
							return result;
						}
					} else {
						effectedRow = menuDao.updateMenu(data, conn);
					}
				} else {
					result.put("message", "CODEEXISTS");
					return result;
				}
			}

			if (effectedRow > 0) {
				conn.commit();
				result.put("message", "SUCCESS");
				result.put("syskey", data.getSyskey());
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

	public HashMap<String, Object> getButtonList(UserData userData) {
		HashMap<String, Object> result = new HashMap<>();
		try (Connection conn = ConnectionUtil.getUserConnection(userData.getOrgId());) {
			conn.setAutoCommit(false);
			result = menuDao.getButtonList(conn);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return result;
	}

	public HashMap<String, Object> getMainList(UserData userData) {
		HashMap<String, Object> result = new HashMap<>();
		try (Connection conn = ConnectionUtil.getUserConnection(userData.getOrgId());) {
			conn.setAutoCommit(false);
			result = menuDao.getMainList(conn);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return result;
	}

	public HashMap<String, String> deleteMenu(String data, String isParent, UserData userData) {
		HashMap<String, String> result = new HashMap<>();
		int effectedRow = 0;
		try (Connection conn = ConnectionUtil.getUserConnection(userData.getOrgId());) {
			conn.setAutoCommit(false);
			if (!menuDao.checkMenu(Long.parseLong(data), conn)) {
				effectedRow = menuDao.deleteMenu(Long.parseLong(data), Long.parseLong(isParent), conn);
			} else {
				result.put("message", "DPARENT");
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

	public MenuData readMenu(String id, UserData user) {
		MenuData data = new MenuData();
		try (Connection conn = ConnectionUtil.getUserConnection(user.getOrgId());) {
			data = menuDao.readMenu(id, conn);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return data;
	}

	public HashMap<String, Object> getMenusRightAllDatas(UserData user, String u12Syskey) {
		HashMap<String, Object> result = new HashMap<>();
		ArrayList<MenuRightData> mainMenuList = new ArrayList<>();
		
		try (Connection conn = ConnectionUtil.getUserConnection(user.getOrgId());) {
			mainMenuList = menuDao.getMenusRight(conn, u12Syskey, "");
			if (mainMenuList.size() > 0) {
				for (int i=0; i< mainMenuList.size();i++) {
					MenuRightData menuRightData = mainMenuList.get(i);
					menuRightData.setMenuItems(menuDao.getMenusRight(conn, u12Syskey, menuRightData.getSyskey()));
					
					if(menuRightData.getMenuItems().size()>0){
						menuRightData.setMenuItem("");
					}
				}
				result.put("menuData", mainMenuList);
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
		return result;
	}
	
	public HashMap<String, Object> getMenuOrderList(UserData userData) {
		HashMap<String, Object> result = new HashMap<>();
		try (Connection conn = ConnectionUtil.getUserConnection(userData.getOrgId());) {
			conn.setAutoCommit(false);
			result = menuDao.getMenuOrderList(conn);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return result;
	}

public HashMap<String, String> saveMenuOrder(ArrayList<MenuOrderData> data, UserData userData) {
		HashMap<String, String> result = new HashMap<>();
		int effectedRow = 0;
		try (Connection conn = ConnectionUtil.getUserConnection(userData.getOrgId());) {
			conn.setAutoCommit(false);			
			for(int i=0;i< data.size();i++){				
				effectedRow = menuDao.saveMenuOrder(data.get(i), conn);
				for(int j=0;j< data.get(i).getChild().size();j++){				
					effectedRow = menuDao.saveMenuOrder(data.get(i).getChild().get(j), conn);					
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
}
