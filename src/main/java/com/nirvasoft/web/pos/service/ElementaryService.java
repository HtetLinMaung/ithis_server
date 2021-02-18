package com.nirvasoft.web.pos.service;

import java.sql.Connection;
import java.util.ArrayList;
import java.util.List;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nirvasoft.web.pos.dao.ElementaryDao;
import com.nirvasoft.web.pos.model.ComboData;
import com.nirvasoft.web.pos.model.UserData;
import com.nirvasoft.web.pos.util.ConnectionUtil;
import com.nirvasoft.web.pos.util.ServerUtil;

@Service
public class ElementaryService {
	final static Logger logger = Logger.getLogger(ElementaryService.class);
	@Autowired
	ElementaryDao elementaryDao;

	public UserData getLoginUser(UserData loginData) {
		UserData userData = new UserData();

		try (Connection conn = ConnectionUtil.getUserConnection(loginData.getOrgId());) {
			userData = elementaryDao.getLoginUser(loginData, conn);
		} catch (Exception e) {
			e.printStackTrace();
		}

		return userData;
	}
	public List<ComboData> getLocation(String syskey, UserData userData) {
		List<ComboData> locationData = new ArrayList<ComboData>();
		try (Connection conn = ConnectionUtil.getConnection(userData.getOrgId());) {
			/*if (!ServerUtil.isShowAllLocation(userData.getOrgId())) {
				UserData data = elementaryDao.getUserData(conn, syskey);
				locationData = elementaryDao.getLocations(conn, data);
			} else {*/
				locationData = elementaryDao.getLocation(conn);
			//}
		} catch (Exception e) {
			e.printStackTrace();
		}

		return locationData;
	}
}
