package com.nirvasoft.web.pos.model;

import java.util.HashMap;

public class NurseActivity {
	private long syskey;
	private long procedure;
	private String date;
	private String dueDateChange;
	private String dueDateRemove;
	private long size;
	private long site;
	private long marking;
	private long externalLength;
	private String doctorName;
	private long doctorId;
	private String sizeUnit;
	private String siteUnit;
	private String markingUnit;
	private String externalLengthUnit;
	
	public HashMap<String, Object> toHashMap() {
		HashMap<String, Object> map = new HashMap<>();
		map.put("procedure", procedure);
		map.put("date", date);
		map.put("dueDateChange", dueDateChange);
		map.put("dueDateRemove", dueDateRemove);
		map.put("size", size);
		map.put("site", site);
		map.put("marking", marking);
		map.put("externalLength", externalLength);
		map.put("doctorName", doctorName);
		map.put("syskey", syskey);
		map.put("doctorId", doctorId);
		map.put("sizeUnit", sizeUnit);
		map.put("siteUnit", siteUnit);
		map.put("markingUnit", markingUnit);
		map.put("externalLengthUnit", externalLengthUnit);
		return map;
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

	public String getDoctorName() {
		return doctorName;
	}

	public void setDoctorName(String doctorName) {
		this.doctorName = doctorName;
	}

	public long getSyskey() {
		return syskey;
	}

	public void setSyskey(long syskey) {
		this.syskey = syskey;
	}

	public long getDoctorId() {
		return doctorId;
	}
	
	public void setDoctorId(long doctorId) {
		this.doctorId = doctorId;
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
}
