package com.nirvasoft.web.pos.model;

import java.util.ArrayList;

import javax.xml.bind.annotation.XmlRootElement;

@XmlRootElement
public class RoleData {
	private String syskey;
	private String createdDate;
	private String modifiedDate;
	private String userId;
	private String userName;
	private int recordStatus;
	private int syncStatus;
	private String syncBatch;
	private String usersyskey;
	private String t1;
	private String t2;
	private String t3;
	private int n1;
	private int n2;
	private String n3;
	private ArrayList<ButtonCarryData> btnarr;
	private ArrayList<RoleMenuData> menu;

	public RoleData() {
		clearProperties();
	}

	
	public String getSyskey() {
		return syskey;
	}

	public void setSyskey(String syskey) {
		this.syskey = syskey;
	}

	public String getCreatedDate() {
		return createdDate;
	}

	public void setCreatedDate(String createdDate) {
		this.createdDate = createdDate;
	}

	public String getModifiedDate() {
		return modifiedDate;
	}

	public void setModifiedDate(String modifiedDate) {
		this.modifiedDate = modifiedDate;
	}

	public String getUserId() {
		return userId;
	}

	public void setUserId(String userId) {
		this.userId = userId;
	}

	public String getUserName() {
		return userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}

	public int getRecordStatus() {
		return recordStatus;
	}

	public void setRecordStatus(int recordStatus) {
		this.recordStatus = recordStatus;
	}

	public int getSyncStatus() {
		return syncStatus;
	}

	public void setSyncStatus(int syncStatus) {
		this.syncStatus = syncStatus;
	}

	public String getSyncBatch() {
		return syncBatch;
	}

	public void setSyncBatch(String syncBatch) {
		this.syncBatch = syncBatch;
	}

	public String getUsersyskey() {
		return usersyskey;
	}

	public void setUsersyskey(String usersyskey) {
		this.usersyskey = usersyskey;
	}

	public String getT1() {
		return t1;
	}

	public void setT1(String t1) {
		this.t1 = t1;
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

	
	

	public int getN1() {
		return n1;
	}

	public void setN1(int n1) {
		this.n1 = n1;
	}

	public int getN2() {
		return n2;
	}

	public void setN2(int n2) {
		this.n2 = n2;
	}

	public String getN3() {
		return n3;
	}

	public void setN3(String n3) {
		this.n3 = n3;
	}

	public ArrayList<ButtonCarryData> getBtnarr() {
		return btnarr;
	}

	public void setBtnarr(ArrayList<ButtonCarryData> btnarr) {
		this.btnarr = btnarr;
	}

	public ArrayList<RoleMenuData> getMenu() {
		return menu;
	}

	public void setMenu(ArrayList<RoleMenuData> menu) {
		this.menu = menu;
	}
	
	private void clearProperties() {
		this.syskey = "0";
		this.createdDate = "";
		this.modifiedDate = "";
		this.userId = "";
		this.userName = "";
		this.recordStatus = 0;
		this.syncStatus = 0;
		this.syncBatch = "0";
		this.usersyskey = "0";
		this.t1 = "";
		this.t2 = "";
		this.t3 = "";
		this.n1 = 0;
		this.n2 = 0;
		this.n3 = "0";
		this.btnarr = new ArrayList<ButtonCarryData>();
		this.menu = new ArrayList<RoleMenuData>();
	}

}
