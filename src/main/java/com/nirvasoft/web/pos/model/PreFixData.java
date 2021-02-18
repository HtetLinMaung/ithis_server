package com.nirvasoft.web.pos.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@JsonIgnoreProperties(value = { "createddate", "modifieddate", "userid", "username", "recordstatus", "syncstatus", "syncbatch",
		"usersyskey" })
public class PreFixData {
	private String syskey;
	private String createddate;
	private String modifieddate;
	private String userid;
	private String username;
	private int recordstatus;
	private int syncstatus;
	private String syncbatch;
	private String t1;
	private String t2;
	private String t3;
	private int n1;
	private int n2;
	private String usersyskey;
	private int n3;
	private String n4;
	private String transType;

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

	public int getRecordstatus() {
		return recordstatus;
	}

	public void setRecordstatus(int recordstatus) {
		this.recordstatus = recordstatus;
	}

	public int getSyncstatus() {
		return syncstatus;
	}

	public void setSyncstatus(int syncstatus) {
		this.syncstatus = syncstatus;
	}

	public String getSyncbatch() {
		return syncbatch;
	}

	public void setSyncbatch(String syncbatch) {
		this.syncbatch = syncbatch;
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

	public String getUsersyskey() {
		return usersyskey;
	}

	public void setUsersyskey(String usersyskey) {
		this.usersyskey = usersyskey;
	}

	public int getN3() {
		return n3;
	}

	public void setN3(int n3) {
		this.n3 = n3;
	}

	public String getN4() {
		return n4;
	}

	public void setN4(String n4) {
		this.n4 = n4;
	}

	public PreFixData() {
		clearProperties();
	}

	public String getTransType() {
		return transType;
	}

	public void setTransType(String transType) {
		this.transType = transType;
	}

	private void clearProperties() {
		// TODO Auto-generated method stub
		syskey = "0";
		createddate = "";
		modifieddate = "";
		userid = "";
		username = "";
		recordstatus = 0;
		syncstatus = 0;
		syncbatch = "0";
		t1 = "";
		t2 = "";
		t3 = "";
		n1 = 0;
		n2 = 0;
		usersyskey = "0";
		n3 = 0;
		n4 = "0";
		transType = "";

	}

}
