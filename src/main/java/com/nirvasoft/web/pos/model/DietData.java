package com.nirvasoft.web.pos.model;

import java.util.HashMap;

public class DietData {
	private long syskey;
	private int pId;
	private int RgsNo;
	private String userid;
	private String username;
	private long parentId;
	private long doctorId;
	private boolean isDoctor;
	private String date;
	private String time;
	private String no;
	private String dietEnteralFeed;
	private String notedBy;
	private String remark;
	
	public HashMap<String, Object> toHashMap() {
		HashMap<String, Object> map = new HashMap<>();
		map.put("syskey", syskey);
		map.put("pId", pId);
		map.put("RgsNo", RgsNo);
		map.put("userid", userid);
		map.put("username", username);
		map.put("parentId", parentId);
		map.put("doctorId", doctorId);
		map.put("isDoctor", isDoctor);
		map.put("date", date);
		map.put("time", time);
		map.put("no", no);
		map.put("dietEnteralFeed", dietEnteralFeed);
		map.put("notedBy", notedBy);
		map.put("remark", remark);
		return map;
	}
	
	public long getSyskey() {
		return syskey;
	}
	public void setSyskey(long syskey) {
		this.syskey = syskey;
	}
	public int getpId() {
		return pId;
	}
	public void setpId(int pId) {
		this.pId = pId;
	}
	public int getRgsNo() {
		return RgsNo;
	}
	public void setRgsNo(int rgsNo) {
		RgsNo = rgsNo;
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
	public long getParentId() {
		return parentId;
	}
	public void setParentId(long parentId) {
		this.parentId = parentId;
	}
	public long getDoctorId() {
		return doctorId;
	}
	public void setDoctorId(long doctorId) {
		this.doctorId = doctorId;
	}
	public boolean isDoctor() {
		return isDoctor;
	}
	public void setDoctor(boolean isDoctor) {
		this.isDoctor = isDoctor;
	}
	
	public String getNo() {
		return no;
	}
	public void setNo(String no) {
		this.no = no;
	}
	public String getDietEnteralFeed() {
		return dietEnteralFeed;
	}
	public void setDietEnteralFeed(String dietEnteralFeed) {
		this.dietEnteralFeed = dietEnteralFeed;
	}
	public String getNotedBy() {
		return notedBy;
	}
	public void setNotedBy(String notedBy) {
		this.notedBy = notedBy;
	}
	public String getRemark() {
		return remark;
	}
	public void setRemark(String remark) {
		this.remark = remark;
	}

	public String getDate() {
		return date;
	}

	public void setDate(String date) {
		this.date = date;
	}

	public String getTime() {
		return time;
	}

	public void setTime(String time) {
		this.time = time;
	}
}
