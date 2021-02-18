package com.nirvasoft.web.pos.model;

import java.util.ArrayList;

public class StatMedicationRequest {
private ArrayList<StatMedicationData> statMedications;

public ArrayList<StatMedicationData> getStatMedications() {
	return statMedications;
}

public void setStatMedications(ArrayList<StatMedicationData> statMedications) {
	this.statMedications = statMedications;
}
}
