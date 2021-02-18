package com.nirvasoft.web.pos.service;

import java.sql.Connection;
import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nirvasoft.web.pos.dao.SalesDetailsDao;
import com.nirvasoft.web.pos.model.UserData;
import com.nirvasoft.web.pos.util.ConnectionUtil;

@Service
public class SalesDetailsService {
	@Autowired
	SalesDetailsDao salesDetailsDao;
	
	public Map<String, Object> searchSalesDetialsList(HashMap<String, Object> data, UserData user) {
		Map<String, Object> result = new HashMap<>();
		try (Connection conn = ConnectionUtil.getConnection(user.getOrgId());) {
			result = salesDetailsDao.searchSalesDetialsList(data, conn);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return result;
	}
}
