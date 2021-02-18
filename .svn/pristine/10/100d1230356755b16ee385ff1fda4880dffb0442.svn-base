package com.nirvasoft.web.pos.controller.rest;

import javax.servlet.http.HttpServletRequest;

import org.springframework.web.bind.annotation.CrossOrigin;

import com.nirvasoft.web.pos.model.UserData;
import com.nirvasoft.web.pos.util.ServerUtil;

@CrossOrigin
public class IController {
	public UserData getUser(HttpServletRequest request){
		return ServerUtil.getLoginUser(request, "co");
	}
	
	public UserData getRptUser(HttpServletRequest request){
		return ServerUtil.getLoginUser(request, "rp");
	}
}
