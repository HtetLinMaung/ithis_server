package com.nirvasoft.web.pos.model;

import java.util.HashMap;

public class PatientData {
	private long pId;
	private long rgsNo;
	private String adNo;
	private String id;
	private String name;
	private String fatherName;
	private String address;
	private String mCardNo;
	private String doctor;
	private String speciality;
	private String roomNo;
	private String adDate;
	private String dptDate;
	private int patientType;
	private int rgsStatus;
	
	public HashMap<String, Object> toHashMap() {
		HashMap<String, Object> map = new HashMap<>();
		map.put("pId", pId);
		map.put("rgsNo", rgsNo);
		map.put("adNo", adNo);
		map.put("id", id);
		map.put("name", name);
		map.put("fatherName", fatherName);
		map.put("address", address);
		map.put("mCardNo", mCardNo);
		map.put("doctor", doctor);
		map.put("speciality", speciality);
		map.put("roomNo", roomNo);
		map.put("adDate", adDate);
		map.put("dptDate", dptDate);
		map.put("patientType", patientType);
		map.put("rgsStatus", rgsStatus);
		return map;
	}
	
	public long getpId() {
		return pId;
	}
	public void setpId(long pId) {
		this.pId = pId;
	}
	public long getRgsNo() {
		return rgsNo;
	}
	public void setRgsNo(long rgsNo) {
		this.rgsNo = rgsNo;
	}
	public String getAdNo() {
		return adNo;
	}
	public void setAdNo(String adNo) {
		this.adNo = adNo;
	}
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getFatherName() {
		return fatherName;
	}
	public void setFatherName(String fatherName) {
		this.fatherName = fatherName;
	}
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	public String getmCardNo() {
		return mCardNo;
	}
	public void setmCardNo(String mCardNo) {
		this.mCardNo = mCardNo;
	}
	public String getDoctor() {
		return doctor;
	}
	public void setDoctor(String doctor) {
		this.doctor = doctor;
	}
	public String getSpeciality() {
		return speciality;
	}
	public void setSpeciality(String speciality) {
		this.speciality = speciality;
	}
	
	public String getAdDate() {
		return adDate;
	}
	public void setAdDate(String adDate) {
		this.adDate = adDate;
	}
	public String getDptDate() {
		return dptDate;
	}
	public void setDptDate(String dptDate) {
		this.dptDate = dptDate;
	}
	

	public String getRoomNo() {
		return roomNo;
	}

	public void setRoomNo(String roomNo) {
		this.roomNo = roomNo;
	}

	public int getPatientType() {
		return patientType;
	}

	public void setPatientType(int patientType) {
		this.patientType = patientType;
	}

	public int getRgsStatus() {
		return rgsStatus;
	}

	public void setRgsStatus(int rgsStatus) {
		this.rgsStatus = rgsStatus;
	}
}
