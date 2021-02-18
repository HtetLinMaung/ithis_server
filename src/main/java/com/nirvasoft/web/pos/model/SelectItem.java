package com.nirvasoft.web.pos.model;

public class SelectItem {
	private String value;
	private String text;
	
	public SelectItem(String value, String text) {
		this.value = value;
		this.text = text;
	}
	
	public String getValue() {
		return this.value;
	}
	
	public String getText() {
		return this.text;
	}
	
	public void setValue(String value) {
		this.value = value;
	}
	
	public void setText(String text) {
		this.text = text;
	}
}
