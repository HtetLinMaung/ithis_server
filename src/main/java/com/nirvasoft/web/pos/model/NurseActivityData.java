package com.nirvasoft.web.pos.model;

import javax.xml.bind.annotation.XmlRootElement;

@XmlRootElement
public class NurseActivityData {
	private int pId;
	private int rgsNo;
	private String userid;
	private String username;
	private long doctorSysKey;
	private long procedure;
	private String date;
	private String dueDateChange;
	private String dueDateRemove;
	private long size;
	private long site;
	private long marking;
	private long externalLength;
	private String sizeUnit;
	private String siteUnit;
	private String markingUnit;
	private String externalLengthUnit;
	
	
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
	public long getDoctorSysKey() {
		return doctorSysKey;
	}
	public void setDoctorSysKey(long doctorSysKey) {
		this.doctorSysKey = doctorSysKey;
	}
	public long getProcedure() {
		return procedure;
	}
	public void setProcedure(long procedure) {
		this.procedure = procedure;
	}
	public String getDate() {
		return date;
	}
	public void setDate(String date) {
		this.date = date;
	}
	public String getDueDateChange() {
		return dueDateChange;
	}
	public void setDueDateChange(String dueDateChange) {
		this.dueDateChange = dueDateChange;
	}
	public String getDueDateRemove() {
		return dueDateRemove;
	}
	public void setDueDateRemove(String dueDateRemove) {
		this.dueDateRemove = dueDateRemove;
	}
	public long getSize() {
		return size;
	}
	public void setSize(long size) {
		this.size = size;
	}
	public long getSite() {
		return site;
	}
	public void setSite(long site) {
		this.site = site;
	}
	public long getMarking() {
		return marking;
	}
	public void setMarking(long marking) {
		this.marking = marking;
	}
	public long getExternalLength() {
		return externalLength;
	}
	public void setExternalLength(long externalLength) {
		this.externalLength = externalLength;
	}
	public String getSizeUnit() {
		return sizeUnit;
	}
	public void setSizeUnit(String sizeUnit) {
		this.sizeUnit = sizeUnit;
	}
	public String getSiteUnit() {
		return siteUnit;
	}
	public void setSiteUnit(String siteUnit) {
		this.siteUnit = siteUnit;
	}
	public String getMarkingUnit() {
		return markingUnit;
	}
	public void setMarkingUnit(String markingUnit) {
		this.markingUnit = markingUnit;
	}
	public String getExternalLengthUnit() {
		return externalLengthUnit;
	}
	public void setExternalLengthUnit(String externalLengthUnit) {
		this.externalLengthUnit = externalLengthUnit;
	}
	public int getRgsNo() {
		return rgsNo;
	}
	public void setRgsNo(int rgsNo) {
		this.rgsNo = rgsNo;
	}
}
