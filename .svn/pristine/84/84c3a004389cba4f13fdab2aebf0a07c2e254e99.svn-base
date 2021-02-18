package com.nirvasoft.web.pos.controller.rest;

import java.util.HashMap;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.nirvasoft.web.pos.service.SalesDetailsService;

@RestController
@RequestMapping("/saledetail")
public class SalesDetailsController extends IController {

	@Autowired
	SalesDetailsService salesDetailsService;
	
	@PostMapping(value = "/searchSalesDetialsList")
	public Map<String, Object> searchSalesDetialsList(@RequestBody HashMap<String, Object> data, HttpServletRequest request) {
		return salesDetailsService.searchSalesDetialsList(data, getUser(request));
	}

}
