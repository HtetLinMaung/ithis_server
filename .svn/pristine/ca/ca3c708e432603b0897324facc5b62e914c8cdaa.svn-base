package com.nirvasoft.web.pos.controller.rest;

import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.nirvasoft.web.pos.model.ComboData;
import com.nirvasoft.web.pos.model.UserData;
import com.nirvasoft.web.pos.service.ElementaryService;
import com.nirvasoft.web.pos.util.EncryptionUtil;
import com.nirvasoft.web.pos.util.ServerUtil;

@RestController
@RequestMapping("/main")
public class ElementaryController extends IController {

	@Autowired
	ElementaryService elementaryService;
	
	@PostMapping(value = "/login")
	public UserData login(@RequestBody UserData loginData, HttpServletRequest request) {
		String key = ServerUtil.getConnectionKey("user");
		loginData.setOrgId(key);
		loginData = elementaryService.getLoginUser(loginData);
		if (!loginData.getSyskey().equals("0"))
			loginData.setOrgId(EncryptionUtil.encrypt(key));

		return loginData;
	}
	
	@GetMapping(value = "/locations/{syskey}")
	public List<ComboData> getLocation(@PathVariable("syskey") String syskey, HttpServletRequest request) {
		return elementaryService.getLocation(syskey, getUser(request));
	}
}
