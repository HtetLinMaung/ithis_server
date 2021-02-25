package com.nirvasoft.web.pos.model;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.stream.Collectors;

public class BloodData extends PatientInfoData {
	private long syskey;
	private String medication;
	private double dose;
	private int pId;
	private int RgsNo;
	private String userid;
	private String username;
	private long parentId;
	private long doctorId;
	private String stockId;
	private boolean isDoctor;
	private String nurseConfirmDate;
	private String moConfirmDate;
	private String nurseConfirmTime;
	private String moConfirmTime;
	private int routeSyskey;
	private int doseTypeSyskey;
	private String givenByType;
	private double frequency;
	private String remark;
	private ArrayList<NurseDoseActivityData> checkList;
	
	public HashMap<String, Object> toHashMap() {
		HashMap<String, Object> map = new HashMap<>();
		map.put("syskey", syskey);
		map.put("medication", medication);
		map.put("dose", dose);
		map.put("pId", pId);
		map.put("RgsNo", RgsNo);
		map.put("userid", userid);
		map.put("username", username);
		map.put("parentId", parentId);
		map.put("doctorId", doctorId);
		map.put("stockId", stockId);
		map.put("isDoctor", isDoctor);
		map.put("nurseConfirmDate", nurseConfirmDate);
		map.put("moConfirmDate", moConfirmDate);
		map.put("nurseConfirmTime", nurseConfirmTime);
		map.put("moConfirmTime", moConfirmTime);
		map.put("routeSyskey", routeSyskey);
		map.put("givenByType", givenByType);
		map.put("doseTypeSyskey", doseTypeSyskey);
		map.put("frequency", frequency);
		map.put("remark", remark);
		map.put("patientId", patientId);
		map.put("patientName", patientName);
		map.put("adNo", adNo);
		map.put("checkList", checkList
				.stream()
				.map((v) -> v.toHashMap())
				.collect(Collectors.toList()));
		return map;
	}

	public String getNurseConfirmTime() {
		return nurseConfirmTime;
	}

	public void setNurseConfirmTime(String nurseConfirmTime) {
		this.nurseConfirmTime = nurseConfirmTime;
	}

	public String getMoConfirmTime() {
		return moConfirmTime;
	}

	public void setMoConfirmTime(String moConfirmTime) {
		this.moConfirmTime = moConfirmTime;
	}

	public long getSyskey() {
		return syskey;
	}

	public void setSyskey(long syskey) {
		this.syskey = syskey;
	}

	public String getMedication() {
		return medication;
	}

	public void setMedication(String medication) {
		this.medication = medication;
	}

	public int getpId() {
		return pId;
	}

	public void setpId(int pId) {
		this.pId = pId;
	}

	public double getDose() {
		return dose;
	}

	public void setDose(double dose) {
		this.dose = dose;
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

	public String getStockId() {
		return stockId;
	}

	public void setStockId(String stockId) {
		this.stockId = stockId;
	}

	public boolean isDoctor() {
		return isDoctor;
	}

	public void setDoctor(boolean isDoctor) {
		this.isDoctor = isDoctor;
	}

	public String getNurseConfirmDate() {
		return nurseConfirmDate;
	}

	public void setNurseConfirmDate(String nurseConfirmDate) {
		this.nurseConfirmDate = nurseConfirmDate;
	}

	public String getMoConfirmDate() {
		return moConfirmDate;
	}

	public void setMoConfirmDate(String moConfirmDate) {
		this.moConfirmDate = moConfirmDate;
	}

	public int getRouteSyskey() {
		return routeSyskey;
	}

	public void setRouteSyskey(int routeSyskey) {
		this.routeSyskey = routeSyskey;
	}

	public int getDoseTypeSyskey() {
		return doseTypeSyskey;
	}

	public void setDoseTypeSyskey(int doseTypeSyskey) {
		this.doseTypeSyskey = doseTypeSyskey;
	}

	public String getGivenByType() {
		return givenByType;
	}

	public void setGivenByType(String givenByType) {
		this.givenByType = givenByType;
	}

	public double getFrequency() {
		return frequency;
	}

	public void setFrequency(double frequency) {
		this.frequency = frequency;
	}

	public String getRemark() {
		return remark;
	}

	public void setRemark(String remark) {
		this.remark = remark;
	}

	public ArrayList<NurseDoseActivityData> getCheckList() {
		return checkList;
	}

	public void setCheckList(ArrayList<NurseDoseActivityData> checkList) {
		this.checkList = checkList;
	}
}
