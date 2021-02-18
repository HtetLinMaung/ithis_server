package com.nirvasoft.web.pos.service;

import java.sql.Connection;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nirvasoft.web.pos.dao.CommonDao;
import com.nirvasoft.web.pos.dao.ElementaryDao;
import com.nirvasoft.web.pos.model.ComboData;
import com.nirvasoft.web.pos.model.CommonData;
import com.nirvasoft.web.pos.model.UserData;
import com.nirvasoft.web.pos.util.ConnectionUtil;
import com.nirvasoft.web.pos.util.ServerUtil;

@Service
public class CommonService {
	final static Logger logger = Logger.getLogger(CommonService.class);
	@Autowired
	CommonDao commonDao;
	public List<ComboData> getBins(UserData user) {
		List<ComboData> bins = new ArrayList<>();
		try (Connection conn = ConnectionUtil.getConnection(user.getOrgId());) {
			bins = commonDao.getBins(conn);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return bins;
	}

	

}
