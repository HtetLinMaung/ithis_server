package com.nirvasoft.web.pos.model;

import java.util.ArrayList;

public class FilterRequest {
	private long patientId;
	private int rgsno;
	private long doctorId; 
	private boolean all = false;
	private boolean initial = true;
	private String date;
	private String from;
	private String to;
	private int patientType;
	private int rgsStatus;
	
	private int page = 0;
	private int perPage = 0;
	private String sortBy = "l.modifieddate";
	private boolean latestFirst = true;
	private String search;
	private ArrayList<AdvanceSearchData> advSearch = new ArrayList<>();
	
	
	public long getPatientId() {
		return patientId;
	}

	public void setPatientId(long patientId) {
		this.patientId = patientId;
	}

	public int getRgsno() {
		return rgsno;
	}

	public void setRgsno(int rgsno) {
		this.rgsno = rgsno;
	}

	public long getDoctorId() {
		return doctorId;
	}

	public void setDoctorId(long doctorId) {
		this.doctorId = doctorId;
	}

	public boolean isAll() {
		return all;
	}

	public void setAll(boolean all) {
		this.all = all;
	}

	public boolean isInitial() {
		return initial;
	}

	public void setInitial(boolean initial) {
		this.initial = initial;
	}

	public String getDate() {
		return date;
	}

	public void setDate(String date) {
		this.date = date;
	}

	public String getFrom() {
		return from;
	}

	public void setFrom(String from) {
		this.from = from;
	}

	public String getTo() {
		return to;
	}

	public void setTo(String to) {
		this.to = to;
	}

	public int getPatientType() {
		return patientType;
	}

	public void setPatientType(int patientType) {
		this.patientType = patientType;
	}

	public int getRgsStatus() {
		return rgsStatus;
	}

	public void setRgsStatus(int rgsStatus) {
		this.rgsStatus = rgsStatus;
	}

	public int getPage() {
		return page;
	}

	public void setPage(int page) {
		this.page = page;
	}

	public int getPerPage() {
		return perPage;
	}

	public void setPerPage(int perPage) {
		this.perPage = perPage;
	}

	public String getSearch() {
		return search;
	}

	public void setSearch(String search) {
		this.search = search;
	}

	public ArrayList<AdvanceSearchData> getAdvSearch() {
		return advSearch;
	}

	public void setAdvSearch(ArrayList<AdvanceSearchData> advSearch) {
		this.advSearch = advSearch;
	}

	public String getSortBy() {
		return sortBy;
	}

	public void setSortBy(String sortBy) {
		this.sortBy = sortBy;
	}

	public boolean isLatestFirst() {
		return latestFirst;
	}

	public void setLatestFirst(boolean latestFirst) {
		this.latestFirst = latestFirst;
	}
}
