package com.nirvasoft.web.pos.model;

import java.util.HashMap;
import java.util.stream.Collectors;
import java.util.ArrayList;

public class PatientTypeResponse {
	private int currentPatientType;
	private ArrayList<PatientTypeData> patientTypeList = new ArrayList<>();
	
	public HashMap<String, Object> toHashMap() {
		HashMap<String, Object> map = new HashMap<>();
		map.put("currentPatientType", currentPatientType);
		map.put("patientTypeList", patientTypeList.stream()
				.map(v -> v.toHashMap())
				.collect(Collectors.toList()));
		return map;
	}

	public int getCurrentPatientType() {
		return currentPatientType;
	}

	public void setCurrentPatientType(int currentPatientType) {
		this.currentPatientType = currentPatientType;
	}

	public ArrayList<PatientTypeData> getPatientTypeList() {
		return patientTypeList;
	}

	public void setPatientTypeList(ArrayList<PatientTypeData> patientTypeList) {
		this.patientTypeList = patientTypeList;
	}

	

	
}
