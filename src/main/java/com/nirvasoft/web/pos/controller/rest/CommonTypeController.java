package com.nirvasoft.web.pos.controller.rest;

import java.util.HashMap;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.nirvasoft.web.pos.model.CommonTypeData;
import com.nirvasoft.web.pos.service.CommonTypeService;

@RestController
@RequestMapping("/commontype")
public class CommonTypeController extends IController{
	@Autowired
	CommonTypeService commonTypeService;	

	@PostMapping("/save")
	public Map<String, String> save(@RequestBody CommonTypeData data, HttpServletRequest request) {
		return commonTypeService.save(data, getUser(request));
	}
	@PostMapping("/get")
	public HashMap<String, Object> getNursingCareRecord(@RequestBody CommonTypeData data,
			HttpServletRequest request) {
		return commonTypeService.get(data, getUser(request));
	}

	@PostMapping("/delete")
	public HashMap<String, Object> delete(@RequestBody CommonTypeData data, HttpServletRequest request) {
		return commonTypeService.delete(data, getUser(request));
	}
}
