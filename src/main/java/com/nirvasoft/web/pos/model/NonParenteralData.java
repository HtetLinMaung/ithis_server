package com.nirvasoft.web.pos.model;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.stream.Collectors;

public class NonParenteralData extends PatientInfoData {
	private long syskey;
	private String medication;
	private double dose;
	private int pId;
	private long rgsNo;
	private String userid;
	private String username;
	private long parentId;
	private long doctorId;
	private String stockId;
	private boolean isDoctor;
	private String nurseConfirmDate;
	private String moConfirmDate;
	private long routeSyskey;
	private long doseTypeSyskey;
	private String dateStart;
	private String dateOff;
	private String diagnosis;
	private String drugAllergyTo;
	private String givenByType;
	private boolean tubeFeed;
	private boolean liquidMedication;
	private boolean chronicRenalFailure;
	private boolean pregnant;
	private double frequency;
	private String remark;
	private ArrayList<NurseDoseActivityData> checkList;
	
	
	public HashMap<String, Object> toHashMap() {
		HashMap<String, Object> map = new HashMap<>();
		map.put("syskey", syskey);
		map.put("medication", medication);
		map.put("dose", dose);
		map.put("pId", pId);
		map.put("rgsNo", rgsNo);
		map.put("userid", userid);
		map.put("username", username);
		map.put("parentId", parentId);
		map.put("doctorId", doctorId);
		map.put("stockId", stockId);
		map.put("isDoctor", isDoctor);
		map.put("nurseConfirmDate", nurseConfirmDate);
		map.put("moConfirmDate", moConfirmDate);
		map.put("routeSyskey", routeSyskey);
		map.put("dateStart", dateStart);
		map.put("dateOff", dateOff);
		map.put("diagnosis", diagnosis);
		map.put("drugAllergyTo", drugAllergyTo);
		map.put("givenByType", givenByType);
		map.put("tubeFeed", tubeFeed);
		map.put("liquidMedication", liquidMedication);
		map.put("chronicRenalFailure", chronicRenalFailure);
		map.put("pregnant", pregnant);
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
	
	public String getMedication() {
		return medication;
	}
	public void setMedication(String medication) {
		this.medication = medication;
	}
	public double getDose() {
		return dose;
	}
	public void setDose(double dose) {
		this.dose = dose;
	}

	public int getpId() {
		return pId;
	}

	public void setpId(int pId) {
		this.pId = pId;
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

	public String getStockId() {
		return stockId;
	}

	public void setStockId(String stockId) {
		this.stockId = stockId;
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

	public long getRouteSyskey() {
		return routeSyskey;
	}

	public void setRouteSyskey(long routeSyskey) {
		this.routeSyskey = routeSyskey;
	}

	public String getDateStart() {
		return dateStart;
	}

	public void setDateStart(String dateStart) {
		this.dateStart = dateStart;
	}

	public String getDateOff() {
		return dateOff;
	}

	public void setDateOff(String dateOff) {
		this.dateOff = dateOff;
	}

	public String getDiagnosis() {
		return diagnosis;
	}

	public void setDiagnosis(String diagnosis) {
		this.diagnosis = diagnosis;
	}

	public String getDrugAllergyTo() {
		return drugAllergyTo;
	}

	public void setDrugAllergyTo(String drugAllergyTo) {
		this.drugAllergyTo = drugAllergyTo;
	}

	public String getGivenByType() {
		return givenByType;
	}

	public void setGivenByType(String givenByType) {
		this.givenByType = givenByType;
	}

	public boolean isTubeFeed() {
		return tubeFeed;
	}

	public void setTubeFeed(boolean tubeFeed) {
		this.tubeFeed = tubeFeed;
	}

	public boolean isLiquidMedication() {
		return liquidMedication;
	}

	public void setLiquidMedication(boolean liquidMedication) {
		this.liquidMedication = liquidMedication;
	}

	public boolean isChronicRenalFailure() {
		return chronicRenalFailure;
	}

	public void setChronicRenalFailure(boolean chronicRenalFailure) {
		this.chronicRenalFailure = chronicRenalFailure;
	}

	public boolean isPregnant() {
		return pregnant;
	}

	public void setPregnant(boolean pregnant) {
		this.pregnant = pregnant;
	}

	public long getSyskey() {
		return syskey;
	}

	public void setSyskey(long syskey) {
		this.syskey = syskey;
	}

	public long getDoseTypeSyskey() {
		return doseTypeSyskey;
	}

	public void setDoseTypeSyskey(long doseTypeSyskey) {
		this.doseTypeSyskey = doseTypeSyskey;
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

	public double getFrequency() {
		return frequency;
	}

	public void setFrequency(double frequency) {
		this.frequency = frequency;
	}

	public long getRgsNo() {
		return rgsNo;
	}

	public void setRgsNo(long rgsNo) {
		this.rgsNo = rgsNo;
	}
}
