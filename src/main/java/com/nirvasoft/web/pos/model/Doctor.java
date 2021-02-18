package com.nirvasoft.web.pos.model;

import java.util.HashMap;

public class Doctor {
	private long syskey;
	private String doctorID;
	private String doctorName;
	private String speciality;
	private String rank;
	private String degree;
	private String phone;
	private String clinic;
	
	public Doctor(long syskey, 
			String doctorID, 
			String doctorName, 
			String speciality, 
			String rank, 
			String degree, 
			String phone, 
			String clinic) {
		this.syskey = syskey;
		this.doctorID = doctorID;
		this.doctorName = doctorName;
		this.speciality = speciality;
		this.rank = rank;
		this.degree = degree;
		this.phone = phone;
		this.clinic = clinic;
	}
	
	public String getDoctorID() {
		return doctorID;
	}
	public void setDoctorID(String doctorID) {
		this.doctorID = doctorID;
	}
	public String getDoctorName() {
		return doctorName;
	}
	public void setDoctorName(String doctorName) {
		this.doctorName = doctorName;
	}
	public String getSpeciality() {
		return speciality;
	}
	public void setSpeciality(String speciality) {
		this.speciality = speciality;
	}
	public String getDegree() {
		return degree;
	}
	public void setDegree(String degree) {
		this.degree = degree;
	}
	public String getRank() {
		return rank;
	}
	public void setRank(String rank) {
		this.rank = rank;
	}
	public String getClinic() {
		return clinic;
	}
	public void setClinic(String clinic) {
		this.clinic = clinic;
	}
	public String getPhone() {
		return phone;
	}
	public void setPhone(String phone) {
		this.phone = phone;
	}
	
	public HashMap<String, Object> toHashMap() {
		HashMap<String, Object> map = new HashMap<>();
		map.put("syskey", syskey);
		map.put("doctorID", doctorID);
		map.put("doctorName", doctorName);
		map.put("speciality", speciality);
		map.put("rank", rank);
		map.put("degree", degree);
		map.put("phone", phone);
		map.put("clinic", clinic);
		return map;
	}

	public long getSyskey() {
		return syskey;
	}

	public void setSyskey(long syskey) {
		this.syskey = syskey;
	}
}
