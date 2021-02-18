package com.nirvasoft.web.pos.controller.rest;

import java.util.ArrayList;
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

import com.nirvasoft.web.pos.model.MenuData;
import com.nirvasoft.web.pos.model.MenuOrderData;
import com.nirvasoft.web.pos.service.MenuService;

@RestController
@RequestMapping("/menu")
public class MenuController extends IController {

	@Autowired
	MenuService menuService;

	@PostMapping(value = "/saveMenu")
	public HashMap<String, String> savemenu(@RequestBody MenuData data, HttpServletRequest request) {
		return menuService.saveMenu(data, getUser(request));
	}

	@GetMapping(value = "/getButtonList")
	public HashMap<String, Object> getButtonList(HttpServletRequest request) {
		return menuService.getButtonList(getUser(request));
	}

	@GetMapping(value = "/getMainList")
	public HashMap<String, Object> getMainList(HttpServletRequest request) {
		return menuService.getMainList(getUser(request));
	}

	@PostMapping(value = "/searchMenuList")
	public Map<String, Object> searchMenuList(@RequestBody HashMap<String, Object> data, HttpServletRequest request) {
		return menuService.searchMenuList(data, getUser(request));
	}

	@GetMapping(value = "/deleteMenu/{id}/{isParent}")
	public HashMap<String, String> deleteMenu(@PathVariable("id") String id, @PathVariable("isParent") String isParent,
			HttpServletRequest request) {
		return menuService.deleteMenu(id, isParent, getUser(request));
	}

	@GetMapping(value = "/readMenu/{id}")
	public MenuData readMenu(@PathVariable("id") String id, HttpServletRequest request) {
		return menuService.readMenu(id, getUser(request));
	}

	@GetMapping(value = "/getMenusRight/{syskey}")
	public HashMap<String, Object> getMenusRight(@PathVariable("syskey") String syskey, HttpServletRequest request) {
		return menuService.getMenusRightAllDatas(getUser(request), syskey);
	}
	
	@GetMapping(value = "/getMenuOrderList")
	public HashMap<String, Object> getMenuOrderList(HttpServletRequest request) {
		return menuService.getMenuOrderList(getUser(request));
	}
	
	@PostMapping(value = "/saveMenuOrder")
	public HashMap<String, String> saveMenuOrder(@RequestBody ArrayList<MenuOrderData> data, HttpServletRequest request) {
		return menuService.saveMenuOrder(data, getUser(request));
	}

}
