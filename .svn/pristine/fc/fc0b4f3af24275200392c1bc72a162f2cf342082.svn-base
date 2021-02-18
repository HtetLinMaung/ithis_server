package com.nirvasoft.web.pos.service;

import java.sql.Connection;
import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nirvasoft.web.pos.dao.DailySaleDao;
import com.nirvasoft.web.pos.model.UserData;
import com.nirvasoft.web.pos.util.ConnectionUtil;

@Service
public class DailySaleService {
	
	@Autowired
	DailySaleDao dailysaleDao;
	
	public Map<String, Object> searchDailySaleList(HashMap<String, Object> data, UserData user) {
		Map<String, Object> result = new HashMap<>();
		try (Connection conn = ConnectionUtil.getConnection(user.getOrgId());) {
			result = dailysaleDao.searchDailySaleList(data, conn);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return result;
	}

}
