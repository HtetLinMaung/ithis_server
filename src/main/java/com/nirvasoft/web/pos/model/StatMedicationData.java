package com.nirvasoft.web.pos.model;

import java.util.HashMap;

import javax.xml.bind.annotation.XmlRootElement;

@XmlRootElement
public class StatMedicationData extends PatientInfoData {
	private long syskey;
	private String route;
	private String medication;
	private double dose;
	private String engdesc;
	private String remark;
	private int pId;
	private int RgsNo;
	private String userid;
	private String username;
	private long parentId;
	private long doctorId;
	private String stockId;
	private String stockDescription;
	private String timeAdmin;
	private String givenBy;
	private String drRemark;
	private boolean isDoctor;
	private String nurseConfirmDate;
	private String moConfirmDate;
	private int routeSyskey;
	private int doseTypeSyskey;
	private int doseRemarkSyskey;	
	private String prescriptionRemark;
	
	public HashMap<String, Object> toHashMap() {
		HashMap<String, Object> map = new HashMap<>();
		map.put("syskey", syskey);
		map.put("route", route);
		map.put("medication", medication);
		map.put("dose", dose);
		map.put("engdesc", engdesc);
		map.put("remark", remark);
		map.put("pId", pId);
		map.put("RgsNo", RgsNo);
		map.put("userid", userid);
		map.put("username", username);
		map.put("parentId", parentId);
		map.put("doctorId", doctorId);
		map.put("stockId", stockId);
		map.put("stockDescription", stockDescription);
		map.put("timeAdmin", timeAdmin);
		map.put("givenBy", givenBy);
		map.put("drRemark", drRemark);
		map.put("isDoctor", isDoctor);
		map.put("moConfirmDate", moConfirmDate);
		map.put("nurseConfirmDate", nurseConfirmDate);
		map.put("routeSyskey", routeSyskey);
		map.put("doseTypeSyskey", doseTypeSyskey);
		map.put("doseRemarkSyskey", doseRemarkSyskey);
		map.put("prescriptionRemark", prescriptionRemark);
		map.put("patientId", patientId);
		map.put("patientName", patientName);
		map.put("adNo", adNo);
		return map;
	}
	
	public String getRoute() {
		return route;
	}
	public void setRoute(String route) {
		this.route = route;
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
	public String getEngdesc() {
		return engdesc;
	}
	public void setEngdesc(String engdesc) {
		this.engdesc = engdesc;
	}
	public String getRemark() {
		return remark;
	}
	public void setRemark(String remark) {
		this.remark = remark;
	}

	public int getpId() {
		return pId;
	}

	public void setpId(int pId) {
		this.pId = pId;
	}

	public long getSyskey() {
		return syskey;
	}

	public void setSyskey(long syskey) {
		this.syskey = syskey;
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

	public String getStockDescription() {
		return stockDescription;
	}

	public void setStockDescription(String stockDescription) {
		this.stockDescription = stockDescription;
	}

	public String getTimeAdmin() {
		return timeAdmin;
	}

	public void setTimeAdmin(String timeAdmin) {
		this.timeAdmin = timeAdmin;
	}

	public String getGivenBy() {
		return givenBy;
	}

	public void setGivenBy(String givenBy) {
		this.givenBy = givenBy;
	}

	public String getDrRemark() {
		return drRemark;
	}

	public void setDrRemark(String drRemark) {
		this.drRemark = drRemark;
	}

	public boolean isDoctor() {
		return isDoctor;
	}

	public void setDoctor(boolean isDoctor) {
		this.isDoctor = isDoctor;
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

	public int getDoseRemarkSyskey() {
		return doseRemarkSyskey;
	}

	public void setDoseRemarkSyskey(int doseRemarkSyskey) {
		this.doseRemarkSyskey = doseRemarkSyskey;
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

	public String getPrescriptionRemark() {
		return prescriptionRemark;
	}

	public void setPrescriptionRemark(String prescriptionRemark) {
		this.prescriptionRemark = prescriptionRemark;
	}
}
