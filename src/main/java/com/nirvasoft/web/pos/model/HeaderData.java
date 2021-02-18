package com.nirvasoft.web.pos.model;

import java.util.HashMap;
//ArivDate, RefNo
public class HeaderData {
	private final String patientid; 
	private final String personname;
	private final String persontitle;
	private final int age;
	private final String roomNo;
	private final String patientType;
	private final String doctorName;
	private final String speciality;
	private final String arriveDate;
	private final String refNo;
	private final String ward;
	private final String bed;
	private final String allergy;
	private final long rgsNo;
	private final long drID;
	
	public HeaderData(String patientid, 
			String personname, 
			String persontitle, 
			int age, 
			String roomNo, 
			String patientType, 
			String doctorName, 
			String speciality,
			String arriveDate,
			String refNo,
			String ward,
			String bed,
			String allergy,
			long rgsNo,
			long drID) {
		this.patientid = patientid;
		this.personname = personname;
		this.persontitle = persontitle;
		this.age = age;
		this.roomNo = roomNo;
		this.patientType = patientType;
		this.doctorName = doctorName;
		this.speciality = speciality;
		this.arriveDate = arriveDate;
		this.refNo = refNo;
		this.ward = ward;
		this.bed = bed;
		this.allergy = allergy;
		this.rgsNo = rgsNo;
		this.drID = drID;
	}
	
	public HashMap<String, Object> toHashMap() {
		HashMap<String, Object> map = new HashMap<>();
		map.put("patientid", patientid);
		map.put("personname", personname);
		map.put("persontitle", persontitle);
		map.put("age", age);
		map.put("roomNo", roomNo);
		map.put("patientType", patientType);
		map.put("doctorName", doctorName);
		map.put("speciality", speciality);
		map.put("arriveDate", arriveDate);
		map.put("refNo", refNo);
		map.put("ward", ward);
		map.put("bed", bed);
		map.put("allergy", allergy);
		map.put("rgsNo", rgsNo);
		map.put("drID", drID);
		return map;
	}

	public String getPatientid() {
		return patientid;
	}

	public String getPersonname() {
		return personname;
	}

	public String getPersontitle() {
		return persontitle;
	}

	public int getAge() {
		return age;
	}

	public String getRoomNo() {
		return roomNo;
	}

	public String getPatientType() {
		return patientType;
	}

	public String getDoctorName() {
		return doctorName;
	}

	public String getSpeciality() {
		return speciality;
	}

	public String getArriveDate() {
		return arriveDate;
	}

	public String getRefNo() {
		return refNo;
	}

	public String getWard() {
		return ward;
	}

	public String getBed() {
		return bed;
	}

	public String getAllergy() {
		return allergy;
	}

	public long getRgsNo() {
		return rgsNo;
	}

	public long getDrID() {
		return drID;
	}
}
