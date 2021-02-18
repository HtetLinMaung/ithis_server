package com.nirvasoft.web.pos.controller.rest;
import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.nirvasoft.web.pos.model.ComboData;
import com.nirvasoft.web.pos.service.CommonService;

@RestController
@RequestMapping("/common")
public class CommonController extends IController {

	@Autowired
	CommonService commonService;

	

	@GetMapping(value = "get-bins")
	public List<ComboData> getBins(HttpServletRequest request) {
		return commonService.getBins(getUser(request));
	}

	
}
