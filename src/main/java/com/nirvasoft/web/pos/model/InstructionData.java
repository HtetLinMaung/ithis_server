package com.nirvasoft.web.pos.model;

import java.util.HashMap;

public class InstructionData {
	private long syskey;
	private String date;
	private String dateTaken;
	private String drugAllergyTo;
	private String instruction;
	private String remarks;
	private long pId;
	private int RgsNo;
	private String userid;
	private String username;
	
	public HashMap<String, Object> toHashMap() {
		HashMap<String, Object> map = new HashMap<>();
		map.put("syskey", syskey);
		map.put("date", date);
		map.put("dateTaken", dateTaken);
		map.put("drugAllergyTo", drugAllergyTo);
		map.put("instruction", instruction);
		map.put("remarks", remarks);
		map.put("pId", pId);
		map.put("RgsNo", RgsNo);
		map.put("userid", userid);
		map.put("username", username);
		return map;
	}
	
	public String getDate() {
		return date;
	}
	public void setDate(String date) {
		this.date = date;
	}
	public String getDateTaken() {
		return dateTaken;
	}
	public void setDateTaken(String dateTaken) {
		this.dateTaken = dateTaken;
	}
	public String getDrugAllergyTo() {
		return drugAllergyTo;
	}
	public void setDrugAllergyTo(String drugAllergyTo) {
		this.drugAllergyTo = drugAllergyTo;
	}
	public String getInstruction() {
		return instruction;
	}
	public void setInstruction(String instruction) {
		this.instruction = instruction;
	}
	public String getRemarks() {
		return remarks;
	}
	public void setRemarks(String remarks) {
		this.remarks = remarks;
	}
	public long getpId() {
		return pId;
	}
	public void setpId(long pId) {
		this.pId = pId;
	}
	public int getRgsNo() {
		return RgsNo;
	}
	public void setRgsNo(int rgsNo) {
		this.RgsNo = rgsNo;
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

	public long getSyskey() {
		return syskey;
	}

	public void setSyskey(long syskey) {
		this.syskey = syskey;
	}
	
	
}
