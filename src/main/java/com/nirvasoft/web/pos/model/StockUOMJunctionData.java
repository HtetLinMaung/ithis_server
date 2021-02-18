package com.nirvasoft.web.pos.model;

public class StockUOMJunctionData {
	private String syskey;
	private String n1;// StockSK
	private String n2;// UOMSK
	private Double n3;// Ratio
	private String t1;// Operator
	private int n4;// UOMType
	private int n5;// PriceType
	private Double n6;// SpecificPrice
	private String t2;// UseModule
	private int n7;// ManualLineNo
	private String t3;// IsDefault
	private Double n8;// ProfitPercent
	private Double n9;// MarkupPercent
	private String t4;// LvlDescription
	private String t5;// TReference1
	private Double n10;// Length
	private Double n11;// Width
	private Double n12;// Heigh

	public StockUOMJunctionData() {
		clearProperties();
	}

	private void clearProperties() {
		this.syskey = "0";
		this.n1 = "0";
		this.n2 = "0";
		this.n3 = 0.0d;
		this.t1 = "";
		this.n4 = 0;
		this.n5 = 0;
		this.n6 = 0.0d;
		this.t2 = "";
		this.n7 = 0;
		this.t3 = "";
		this.n8 = 0.0d;
		this.n9 = 0.0d;
		this.t4 = "";
		this.t5 = "";
		this.n10 = 0.0d;
		this.n11 = 0.0d;
		this.n12 = 0.0d;
	}

	public String getSyskey() {
		return syskey;
	}

	public void setSyskey(String syskey) {
		this.syskey = syskey;
	}

	public String getN1() {
		return n1;
	}

	public void setN1(String n1) {
		this.n1 = n1;
	}

	public String getN2() {
		return n2;
	}

	public void setN2(String n2) {
		this.n2 = n2;
	}

	public Double getN3() {
		return n3;
	}

	public void setN3(Double n3) {
		this.n3 = n3;
	}

	public String getT1() {
		return t1;
	}

	public void setT1(String t1) {
		this.t1 = t1;
	}

	public int getN4() {
		return n4;
	}

	public void setN4(int n4) {
		this.n4 = n4;
	}

	public int getN5() {
		return n5;
	}

	public void setN5(int n5) {
		this.n5 = n5;
	}

	public Double getN6() {
		return n6;
	}

	public void setN6(Double n6) {
		this.n6 = n6;
	}

	public String getT2() {
		return t2;
	}

	public void setT2(String t2) {
		this.t2 = t2;
	}

	public int getN7() {
		return n7;
	}

	public void setN7(int n7) {
		this.n7 = n7;
	}

	public String getT3() {
		return t3;
	}

	public void setT3(String t3) {
		this.t3 = t3;
	}

	public Double getN8() {
		return n8;
	}

	public void setN8(Double n8) {
		this.n8 = n8;
	}

	public Double getN9() {
		return n9;
	}

	public void setN9(Double n9) {
		this.n9 = n9;
	}

	public String getT4() {
		return t4;
	}

	public void setT4(String t4) {
		this.t4 = t4;
	}

	public String getT5() {
		return t5;
	}

	public void setT5(String t5) {
		this.t5 = t5;
	}

	public Double getN10() {
		return n10;
	}

	public void setN10(Double n10) {
		this.n10 = n10;
	}

	public Double getN11() {
		return n11;
	}

	public void setN11(Double n11) {
		this.n11 = n11;
	}

	public Double getN12() {
		return n12;
	}

	public void setN12(Double n12) {
		this.n12 = n12;
	}
}
