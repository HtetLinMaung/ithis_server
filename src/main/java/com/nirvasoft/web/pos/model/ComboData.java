package com.nirvasoft.web.pos.model;

public class ComboData {
	private String code;
	private String description;
	private String t1;
	private String t2;
	private String t3;
	private double l3;

	public ComboData() {
		clearProperties();
	}

	private void clearProperties() {
		this.code = "0";
		this.description = "";
		this.t2 = "";
		this.t3 = "";
		this.t1 = "";
		this.l3 = 0.0d;
	}

	public String getCode() {
		return code;
	}

	public void setCode(String code) {
		this.code = code;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getT1() {
		return t1;
	}

	public void setT1(String t1) {
		this.t1 = t1;
	}

	public String getT2() {
		return t2;
	}

	public void setT2(String t2) {
		this.t2 = t2;
	}

	public String getT3() {
		return t3;
	}

	public void setT3(String t3) {
		this.t3 = t3;
	}

	public double getL3() {
		return l3;
	}

	public void setL3(double l3) {
		this.l3 = l3;
	}

}
