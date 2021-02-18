package com.nirvasoft.web.pos.model;

import java.util.HashMap;

public class GeneralWardDetailData {
	private long syskey;
	private long parentId;
	private boolean dayNurse;
	private boolean nightNurse;
	private String dayNurseAt;
	private String dayNurseId;
	private String dayNurseName;
	private String nightNurseAt;
	private String nightNurseId;
	private String nightNurseName;
	
	public HashMap<String, Object> toHashMap() {
		HashMap<String, Object> map = new HashMap<>();
		map.put("syskey", syskey);
		map.put("parentId", parentId);
		map.put("dayNurse", dayNurse);
		map.put("nightNurse", nightNurse);
		map.put("dayNurseAt", dayNurseAt);
		map.put("nightNurseAt", nightNurseAt);
		map.put("dayNurseId", dayNurseId);
		map.put("dayNurseName", dayNurseName);
		map.put("nightNurseId", nightNurseId);
		map.put("nightNurseName", nightNurseName);
		return map;
	}
	
	public long getSyskey() {
		return syskey;
	}
	public void setSyskey(long syskey) {
		this.syskey = syskey;
	}
	public long getParentId() {
		return parentId;
	}
	public void setParentId(long parentId) {
		this.parentId = parentId;
	}
	public boolean isDayNurse() {
		return dayNurse;
	}
	public void setDayNurse(boolean dayNurse) {
		this.dayNurse = dayNurse;
	}
	public String getDayNurseAt() {
		return dayNurseAt;
	}
	public void setDayNurseAt(String dayNurseAt) {
		this.dayNurseAt = dayNurseAt;
	}
	public boolean isNightNurse() {
		return nightNurse;
	}
	public void setNightNurse(boolean nightNurse) {
		this.nightNurse = nightNurse;
	}
	public String getNightNurseAt() {
		return nightNurseAt;
	}
	public void setNightNurseAt(String nightNurseAt) {
		this.nightNurseAt = nightNurseAt;
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
}
