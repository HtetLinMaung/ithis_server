package com.nirvasoft.web.pos.model;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.stream.Collectors;

public class GeneralWardData {
	private long syskey;
	private int pId;
	private int RgsNo;
	private String userid;
	private String username;
	private long parentId;
	private long doctorId;
	private int type;
	private String headerDesc;
	private String initialDate;
	private boolean outcomeMet;
	private boolean dayNurse;
	private boolean nightNurse;
	private String dayNurseAt;
	private String nightNurseAt;
	private int selectedInterventions;
	private int generalWardLength;
	private String nightNurseId;
	private String nightNurseName;
	private String dayNurseId;
	private String dayNurseName;
	private long detailSyskey;
	private String outcomeMetAt;
	private String outcomeMetId;
	private String outcomeMetName;
	private ArrayList<GeneralWardDetailData> detailList = new ArrayList<>();
	
	public HashMap<String, Object> toHashMap() {
		HashMap<String, Object> map = new HashMap<>();
		map.put("syskey", syskey);
		map.put("pId", pId);
		map.put("RgsNo", RgsNo);
		map.put("userid", userid);
		map.put("username", username);
		map.put("parentId", parentId);
		map.put("doctorId", doctorId);
		map.put("type", type);
		map.put("headerDesc", headerDesc);
		map.put("initialDate", initialDate);
		map.put("outcomeMet", outcomeMet);
		map.put("dayNurse", dayNurse);
		map.put("nightNurse", nightNurse);
		map.put("dayNurseAt", dayNurseAt);
		map.put("nightNurseAt", nightNurseAt);
		map.put("selectedInterventions", selectedInterventions);
		map.put("generalWardLength", generalWardLength);
		map.put("dayNurseId", dayNurseId);
		map.put("dayNurseName", dayNurseName);
		map.put("nightNurseId", nightNurseId);
		map.put("nightNurseName", nightNurseName);
		map.put("outcomeMetId", outcomeMetId);
		map.put("outcomeMetAt", outcomeMetAt);
		map.put("outcomeMetName", outcomeMetName);
		map.put("detailSyskey", detailSyskey);
		map.put("detailList", detailList.stream()
				.map((detail) -> detail.toHashMap())
				.collect(Collectors.toList()));
		return map;
	}
	
	public int getType() {
		return type;
	}
	public void setType(int type) {
		this.type = type;
	}
	public String getHeaderDesc() {
		return headerDesc;
	}
	public void setHeaderDesc(String headerDesc) {
		this.headerDesc = headerDesc;
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

	public String getInitialDate() {
		return initialDate;
	}

	public void setInitialDate(String initialDate) {
		this.initialDate = initialDate;
	}

	public boolean isOutcomeMet() {
		return outcomeMet;
	}

	public void setOutcomeMet(boolean outcomeMet) {
		this.outcomeMet = outcomeMet;
	}

	public boolean isDayNurse() {
		return dayNurse;
	}

	public void setDayNurse(boolean dayNurse) {
		this.dayNurse = dayNurse;
	}

	public boolean isNightNurse() {
		return nightNurse;
	}

	public void setNightNurse(boolean nightNurse) {
		this.nightNurse = nightNurse;
	}

	public String getDayNurseAt() {
		return dayNurseAt;
	}

	public void setDayNurseAt(String dayNurseAt) {
		this.dayNurseAt = dayNurseAt;
	}

	public String getNightNurseAt() {
		return nightNurseAt;
	}

	public void setNightNurseAt(String nightNurseAt) {
		this.nightNurseAt = nightNurseAt;
	}

	public int getSelectedInterventions() {
		return selectedInterventions;
	}

	public void setSelectedInterventions(int selectedInterventions) {
		this.selectedInterventions = selectedInterventions;
	}

	public int getGeneralWardLength() {
		return generalWardLength;
	}

	public void setGeneralWardLength(int generalWardLength) {
		this.generalWardLength = generalWardLength;
	}

	public ArrayList<GeneralWardDetailData> getDetailList() {
		return detailList;
	}

	public void setDetailList(ArrayList<GeneralWardDetailData> detailList) {
		this.detailList = detailList;
	}

	public String getNightNurseId() {
		return nightNurseId;
	}

	public void setNightNurseId(String nightNurseId) {
		this.nightNurseId = nightNurseId;
	}

	public String getNightNurseName() {
		return nightNurseName;
	}

	public void setNightNurseName(String nightNurseName) {
		this.nightNurseName = nightNurseName;
	}

	public String getDayNurseId() {
		return dayNurseId;
	}

	public void setDayNurseId(String dayNurseId) {
		this.dayNurseId = dayNurseId;
	}

	public String getDayNurseName() {
		return dayNurseName;
	}

	public void setDayNurseName(String dayNurseName) {
		this.dayNurseName = dayNurseName;
	}

	public long getDetailSyskey() {
		return detailSyskey;
	}

	public void setDetailSyskey(long detailSyskey) {
		this.detailSyskey = detailSyskey;
	}

	public String getOutcomeMetAt() {
		return outcomeMetAt;
	}

	public void setOutcomeMetAt(String outcomeMetAt) {
		this.outcomeMetAt = outcomeMetAt;
	}

	public String getOutcomeMetId() {
		return outcomeMetId;
	}

	public void setOutcomeMetId(String outcomeMetId) {
		this.outcomeMetId = outcomeMetId;
	}

	public String getOutcomeMetName() {
		return outcomeMetName;
	}

	public void setOutcomeMetName(String outcomeMetName) {
		this.outcomeMetName = outcomeMetName;
	}
}
