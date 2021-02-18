package com.nirvasoft.web.pos.controller.rest;
import java.util.HashMap;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.nirvasoft.web.pos.model.SalesOrderData;
import com.nirvasoft.web.pos.service.SalesOrderService;

@RestController
@RequestMapping("/saleorder")
public class SalesOrderController extends IController {
	@Autowired
	SalesOrderService soService;
	
	@PostMapping(value = "/save")
	public HashMap<String, Object> saveSOPHeader(@RequestBody SalesOrderData soData, HttpServletRequest request) {
		return soService.saveSOPHeader(soData, getUser(request));
	}
	
	@PostMapping(value = "/searchList")
	public Map<String, Object> searchSaleOrderList(@RequestBody HashMap<String, Object> data, HttpServletRequest request) {
		return soService.searchSaleOrderList(data, getUser(request));
	}


}
