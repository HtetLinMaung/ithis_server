package com.nirvasoft.web.pos.controller.rest;

import java.util.HashMap;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.nirvasoft.web.pos.model.RoleData;
import com.nirvasoft.web.pos.model.StockGroupData;
import com.nirvasoft.web.pos.service.StockGroupService;
import com.nirvasoft.web.pos.service.UserService;

@RestController
@RequestMapping("/stockgroup")
public class StockGroupController extends IController {

	@Autowired
	StockGroupService stockGroupService;
	
	@Autowired
    UserService userService;
	
	
	@PostMapping(value = "/save")
	public HashMap<String, String> save(@RequestBody StockGroupData data, HttpServletRequest request) {
		return stockGroupService.saveStockGroup(data, getUser(request));
	}
	
	@PostMapping(value = "/searchStockGroupList")
	public Map<String, Object> searchStockGroupList(@RequestBody HashMap<String, Object> data, HttpServletRequest request) {
		return stockGroupService.searchStockGroupList(data, getUser(request));
	}
	@PostMapping(value = "/getUserList")
	public Map<String, Object> getUserList(@RequestBody HashMap<String, Object> data, HttpServletRequest request) {
		return userService.getUserList(data, getUser(request));
	}
	
	
}
