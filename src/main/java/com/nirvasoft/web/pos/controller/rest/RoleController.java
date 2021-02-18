package com.nirvasoft.web.pos.controller.rest;

import java.util.HashMap;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.nirvasoft.web.pos.model.RoleData;
import com.nirvasoft.web.pos.service.RoleService;

@RestController
@RequestMapping("/role")

public class RoleController extends IController {

	@Autowired
	RoleService roleService;

	@GetMapping(value = "/getAllRole")
	public HashMap<String, Object> getAllRole(HttpServletRequest request) {
		return roleService.getAllRole(getUser(request));
	}

	@PostMapping(value = "/save")
	public HashMap<String, String> save(@RequestBody RoleData data, HttpServletRequest request) {
		return roleService.saveRole(data, getUser(request));
	}

	@PostMapping(value = "/searchRoleList")
	public Map<String, Object> searchRoleList(@RequestBody HashMap<String, Object> data, HttpServletRequest request) {
		return roleService.searchRoleList(data, getUser(request));
	}

	@GetMapping(value = "/readRoleBySyskey/{syskey}")
	public HashMap<String, Object> readDataById(@PathVariable("syskey") String syskey, HttpServletRequest request) {
		return roleService.readDataById(syskey, getUser(request));
	}
	
	@GetMapping(value = "/deleteRole/{syskey}")
	public HashMap<String, String> deleteRole(@PathVariable("syskey") String syskey, HttpServletRequest request) {
		return roleService.deleteRole(syskey, getUser(request));
	}

}
