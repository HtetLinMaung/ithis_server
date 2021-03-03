package com.nirvasoft.web.pos.model;

import java.util.HashMap;

public class PatientTypeData {
	private long value;
	private String text;
	
	public HashMap<String, Object> toHashMap() {
		HashMap<String, Object> map = new HashMap<>();
		map.put("value", value);
		map.put("text", text);
		return map;
	}
	
	public long getValue() {
		return value;
	}
	public void setValue(long value) {
		this.value = value;
	}
	public String getText() {
		return text;
	}
	public void setText(String text) {
		this.text = text;
	}
	
}
