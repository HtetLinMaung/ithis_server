package com.nirvasoft.web.pos.service;

import java.sql.Connection;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nirvasoft.web.pos.dao.SalesOrderDao;
import com.nirvasoft.web.pos.model.SalesOrderData;
import com.nirvasoft.web.pos.model.UserData;
import com.nirvasoft.web.pos.util.ConnectionUtil;
import com.nirvasoft.web.pos.util.ServerUtil;
import com.nirvasoft.web.pos.util.SyskeyUtil;
@Service
public class SalesOrderService {

	@Autowired
	SalesOrderDao soDao;
	
	public HashMap<String, Object> saveSOPHeader(SalesOrderData soData, UserData user) {
		HashMap<String, Object> result = new HashMap<>();
		ArrayList<String> syskeyList = new ArrayList<>();
		int effectedRow = 0;
		try (Connection conn = ConnectionUtil.getConnection(user.getOrgId());) {
			conn.setAutoCommit(false);
			String currentDate = ServerUtil.getCurrentDate();		
			if (soData.getSyskey().equals("") || soData.getSyskey().equals("0")) {		
				soData.setSyskey(SyskeyUtil.getSyskey() + "");		
				soData.setCreateddate(currentDate);
				soData.setModifieddate(currentDate);
				soData.setT43(currentDate);
				soData.setT44(currentDate);
                effectedRow = soDao.saveSOPHeader(soData, conn);
				
			} else {
				soData.setModifieddate(currentDate);
				soData.setT43(currentDate);
				soData.setT44(currentDate);
				effectedRow = soDao.updateSOPHeader(soData, conn);
				if (effectedRow > 0) {
					effectedRow = soDao.deleteSOPDetail(soData, conn);
				}
			}
			if (effectedRow > 0) {
				HashMap<String, Object> detailResult = soDao.saveSOPDetail(soData, conn);
				effectedRow = (int) detailResult.get("effectedRow");
				syskeyList = (ArrayList<String>) detailResult.get("syskeyList");
			}
			if (effectedRow > 0) {
				conn.commit();
				result.put("message", "SUCCESS");
				result.put("syskey", soData.getSyskey());
				result.put("refNo", soData.getT1());
				result.put("detailSks", syskeyList);
			} else {
				conn.rollback();
				result.put("message", "Fail");
			}
		} catch (Exception e) {
			e.printStackTrace();
			result.put("message", e.getMessage());
		}
		return result;
	}

	public Map<String, Object> searchSaleOrderList(HashMap<String, Object> data, UserData userData) {
		Map<String, Object> result = new HashMap<>();
		try (Connection conn = ConnectionUtil.getConnection(userData.getOrgId());) {
			result = soDao.searchSaleOrderList(data, conn);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return result;
	}

}
