package com.nirvasoft.web.pos.model;

import java.util.ArrayList;

public class GeneralWardRequest {
	private ArrayList<GwData> generalWards;
	private String date;

	public ArrayList<GwData> getGeneralWards() {
		return generalWards;
	}

	public void setGeneralWards(ArrayList<GwData> generalWards) {
		this.generalWards = generalWards;
	}

	public String getDate() {
		return date;
	}

	public void setDate(String date) {
		this.date = date;
	}
	
}
