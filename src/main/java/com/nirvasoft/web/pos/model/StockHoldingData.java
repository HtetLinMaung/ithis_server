package com.nirvasoft.web.pos.model;

public class StockHoldingData {

	private String syskey;
	private String createddate;
	private String modifieddate;
	private String userid;
	private String username;
	private String parentid;
	private int recordStatus;
	private int syncStatus;
	private String syncBatch;
	private String n1;//WarehouseSK
	private String n2;//BinSK
	private Double n3;//Qty
	private int n4;//Marked
	private int n5;//R1
	private int n6;//R2
	private String n7;//R3
	private String userSysKey;
	
	public StockHoldingData() {
		clearProperties();
	}

	private void clearProperties() {
		this.syskey = "0";
		this.createddate = "";
		this.modifieddate = "";
		this.userid = "";
		this.username = "";
		this.parentid = "";
		this.recordStatus = 1;
		this.syncStatus =0;
		this.syncBatch = "";
		this.n1 = "0";
		this.n2 = "0";
		this.n3 = 0.0d;
		this.n4 = 0;
		this.n5 = 0;
		this.n6 = 0;
		this.n7 = "";
		this.userSysKey="0";
	}

	public String getSyskey() {
		return syskey;
	}

	public void setSyskey(String syskey) {
		this.syskey = syskey;
	}

	public String getCreateddate() {
		return createddate;
	}

	public void setCreateddate(String createddate) {
		this.createddate = createddate;
	}

	public String getModifieddate() {
		return modifieddate;
	}

	public void setModifieddate(String modifieddate) {
		this.modifieddate = modifieddate;
	}

	public String getUserid() {
		return userid;
	}

	public void setUserid(String userid) {
		this.userid = userid;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getParentid() {
		return parentid;
	}

	public void setParentid(String parentid) {
		this.parentid = parentid;
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

	public String getN1() {
		return n1;
	}

	public void setN1(String n1) {
		this.n1 = n1;
	}

	public String getN2() {
		return n2;
	}

	public void setN2(String n2) {
		this.n2 = n2;
	}

	public Double getN3() {
		return n3;
	}

	public void setN3(Double n3) {
		this.n3 = n3;
	}

	public int getN4() {
		return n4;
	}

	public void setN4(int n4) {
		this.n4 = n4;
	}

	public int getN5() {
		return n5;
	}

	public void setN5(int n5) {
		this.n5 = n5;
	}

	public int getN6() {
		return n6;
	}

	public void setN6(int n6) {
		this.n6 = n6;
	}

	public String getN7() {
		return n7;
	}

	public void setN7(String n7) {
		this.n7 = n7;
	}

	public String getUserSysKey() {
		return userSysKey;
	}

	public void setUserSysKey(String userSysKey) {
		this.userSysKey = userSysKey;
	}
}
