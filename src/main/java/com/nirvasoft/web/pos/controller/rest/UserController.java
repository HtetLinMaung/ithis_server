package com.nirvasoft.web.pos.controller.rest;

import java.util.HashMap;
import java.util.List;
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
import com.nirvasoft.web.pos.model.UserData;
import com.nirvasoft.web.pos.service.UserService;

@RestController
@RequestMapping("/user")
public class UserController extends IController {
	
	@Autowired
	UserService userService;
	
	@PostMapping(value = "/save")
	public HashMap<String, String> save(@RequestBody UserData data, HttpServletRequest request) {
		return userService.save(data, getUser(request));
	}
	
	@PostMapping(value = "/getRoleData")
	public List<RoleData> getRoleData(HttpServletRequest request){
		return userService.getRoleData(getUser(request));
	}
	
	@PostMapping(value = "/getUserList")
	public Map<String, Object> getUserList(@RequestBody HashMap<String, Object> data, HttpServletRequest request) {
		return userService.getUserList(data, getUser(request));
	}
	
	@GetMapping(value = "/read/{id}")
	public UserData read(@PathVariable("id") String id, HttpServletRequest request) {
		return userService.read(id, getUser(request));
	}
	
	@GetMapping(value = "/delete/{id}/{u12id}")
	public Map<String,String> delete(@PathVariable("id") String id,@PathVariable("u12id") String u12id, HttpServletRequest request) {
		return userService.delete(id, u12id, getUser(request));
	}

}
