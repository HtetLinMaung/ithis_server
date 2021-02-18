package com.nirvasoft.web.pos.service;

import java.sql.Connection;
import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nirvasoft.web.pos.dao.StockGroupDao;
import com.nirvasoft.web.pos.model.StockGroupData;
import com.nirvasoft.web.pos.model.UserData;
import com.nirvasoft.web.pos.util.ConnectionUtil;
import com.nirvasoft.web.pos.util.SyskeyUtil;

@Service
public class StockGroupService {
	
	@Autowired
	StockGroupDao stockGroupDao;

	public HashMap<String, String> saveStockGroup(StockGroupData data, UserData user) {
		HashMap<String, String> result = new HashMap<>();
		int effectedRow = 0;
		try (Connection conn = ConnectionUtil.getUserConnection(user.getOrgId())) {
			conn.setAutoCommit(false);
			effectedRow=stockGroupDao.saveStockGroup(data,conn);
			if(effectedRow>0){
				conn.commit();
			}
			
		} catch (Exception e) {
			e.printStackTrace();
			result.put("message", "FAIL");
		}

		return result;
	}

	public Map<String, Object> searchStockGroupList(HashMap<String, Object> data, UserData user) {
		Map<String, Object> result = new HashMap<>();
		try (Connection conn = ConnectionUtil.getConnection(user.getOrgId());) {
			result = stockGroupDao.searchStockGroupList(data, conn);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return result;
	}

}
