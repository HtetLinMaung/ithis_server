package com.nirvasoft.web.pos.model;

import java.util.ArrayList;

public class GeneralWardRequest {
	private ArrayList<GeneralWardData> generalWards;
	private String date;

	public ArrayList<GeneralWardData> getGeneralWards() {
		return generalWards;
	}

	public void setGeneralWards(ArrayList<GeneralWardData> generalWards) {
		this.generalWards = generalWards;
	}

	public String getDate() {
		return date;
	}

	public void setDate(String date) {
		this.date = date;
	}
	
}
