package com.nirvasoft.web.pos.model;

import java.util.HashMap;

public class GeneralWardDetailData {
	private long syskey;
	private long parentId;
	private boolean day;
	private boolean night;
	private String dayAt;
	private String dayId;
	private String dayName;
	private String nightAt;
	private String nightId;
	private String nightName;
	private String date;
	
	public HashMap<String, Object> toHashMap() {
		HashMap<String, Object> map = new HashMap<>();
		map.put("syskey", syskey);
		map.put("parentId", parentId);
		map.put("day", day);
		map.put("night", night);
		map.put("dayAt", dayAt);
		map.put("nightAt", nightAt);
		map.put("dayId", dayId);
		map.put("dayName", dayName);
		map.put("nightId", nightId);
		map.put("nightName", nightName);
		map.put("date", date);
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

	public boolean isDay() {
		return day;
	}

	public void setDay(boolean day) {
		this.day = day;
	}

	public boolean isNight() {
		return night;
	}

	public void setNight(boolean night) {
		this.night = night;
	}

	public String getDayAt() {
		return dayAt;
	}

	public void setDayAt(String dayAt) {
		this.dayAt = dayAt;
	}

	public String getDayId() {
		return dayId;
	}

	public void setDayId(String dayId) {
		this.dayId = dayId;
	}

	public String getDayName() {
		return dayName;
	}

	public void setDayName(String dayName) {
		this.dayName = dayName;
	}

	public String getNightAt() {
		return nightAt;
	}

	public void setNightAt(String nightAt) {
		this.nightAt = nightAt;
	}

	public String getNightId() {
		return nightId;
	}

	public void setNightId(String nightId) {
		this.nightId = nightId;
	}

	public String getNightName() {
		return nightName;
	}

	public void setNightName(String nightName) {
		this.nightName = nightName;
	}

	public String getDate() {
		return date;
	}

	public void setDate(String date) {
		this.date = date;
	}
	

	
}
