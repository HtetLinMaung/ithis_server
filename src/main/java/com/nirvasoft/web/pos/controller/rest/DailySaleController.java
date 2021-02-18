package com.nirvasoft.web.pos.controller.rest;

import java.util.HashMap;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.nirvasoft.web.pos.service.DailySaleService;

@RestController
@RequestMapping("/dailysale")

public class DailySaleController extends IController {
	
	@Autowired
	DailySaleService dailysaleService;
	
	@PostMapping(value = "/dailysaleList")
	public Map<String, Object> searchDailySaleList(@RequestBody HashMap<String, Object> data, HttpServletRequest request) {
		return dailysaleService.searchDailySaleList(data, getUser(request));
	}

}
