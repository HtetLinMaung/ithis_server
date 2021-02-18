package com.nirvasoft.web.pos.model;
import java.util.ArrayList;

public class RoleMenuData {
	private String syskey;
	private String t2;
	private String t3;
	private boolean result;
	private boolean show;
	private String n2;
	private ArrayList<RoleMenuData> childmenus;
	private ArrayList<ButtonData> btns;

	public RoleMenuData() {
		clearProperties();
	}

	public String getSyskey() {
		return syskey;
	}

	public void setSyskey(String syskey) {
		this.syskey = syskey;
	}

	public String getN2() {
		return n2;
	}

	public void setN2(String n2) {
		this.n2 = n2;
	}

	public String getT2() {
		return t2;
	}

	public void setT2(String t2) {
		this.t2 = t2;
	}

	public String getT3() {
		return t3;
	}

	public void setT3(String t3) {
		this.t3 = t3;
	}

	public boolean isResult() {
		return result;
	}

	public void setResult(boolean result) {
		this.result = result;
	}

	public boolean isShow() {
		return show;
	}

	public void setShow(boolean show) {
		this.show = show;
	}

	public ArrayList<RoleMenuData> getChildmenus() {
		return childmenus;
	}

	public void setChildmenus(ArrayList<RoleMenuData> childmenus) {
		this.childmenus = childmenus;
	}

	public ArrayList<ButtonData> getBtns() {
		return btns;
	}

	public void setBtns(ArrayList<ButtonData> btns) {
		this.btns = btns;
	}

	protected void clearProperties() {
		this.syskey = "0";
		this.t2 = "";
		this.t3 = "";
		this.n2 = "0";
		this.result = false;
		this.show = false;
		this.btns = new ArrayList<>();
		this.childmenus = new ArrayList<>();
	}

}
