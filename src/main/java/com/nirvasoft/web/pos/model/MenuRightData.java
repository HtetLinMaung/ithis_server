package com.nirvasoft.web.pos.model;

import java.util.ArrayList;
import java.util.List;

public class MenuRightData {
	private String syskey;
	private String menuItem;
	private String caption;
	private String buttonRight;
	private List<MenuRightData> menuItems;

	public MenuRightData() {
		clearProperties();
	}

	public List<MenuRightData> getMenuItems() {
		return menuItems;
	}

	public void setMenuItems(List<MenuRightData> menuItems) {
		this.menuItems = menuItems;
	}

	private void clearProperties() {
		this.syskey = "";
		this.menuItem = "";
		this.caption = "";
		this.buttonRight = "";
		this.menuItems = new ArrayList<MenuRightData>();
	}

	public String getButtonRight() {
		return buttonRight;
	}

	public void setButtonRight(String buttonRight) {
		this.buttonRight = buttonRight;
	}

	public String getSyskey() {
		return syskey;
	}

	public void setSyskey(String syskey) {
		this.syskey = syskey;
	}

	public String getMenuItem() {
		return menuItem;
	}

	public void setMenuItem(String menuItem) {
		this.menuItem = menuItem;
	}

	public String getCaption() {
		return caption;
	}

	public void setCaption(String caption) {
		this.caption = caption;
	}

}