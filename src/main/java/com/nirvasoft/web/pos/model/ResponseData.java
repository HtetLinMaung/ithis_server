package com.nirvasoft.web.pos.model;

import java.util.ArrayList;
import java.util.HashMap;

public class ResponseData {
	private int total;
	private int perPage;
	private int currentPage;
	private int lastPage;
	private int from;
	private int to;
	private ArrayList<HashMap<String, Object>> data = new ArrayList<>();
	
	public HashMap<String, Object> toHashMap() {
		HashMap<String, Object> map = new HashMap<>();
		map.put("total", total);
		map.put("perPage", perPage);
		map.put("currentPage", currentPage);
		map.put("lastPage", lastPage);
		map.put("from", from);
		map.put("to", to);
		map.put("data", data);
		return map;
	}
	
	public int getTotal() {
		return total;
	}
	public void setTotal(int total) {
		this.total = total;
	}
	public int getPerPage() {
		return perPage;
	}
	public void setPerPage(int perPage) {
		this.perPage = perPage;
	}
	public int getCurrentPage() {
		return currentPage;
	}
	public void setCurrentPage(int currentPage) {
		this.currentPage = currentPage;
	}
	public int getLastPage() {
		return lastPage;
	}
	public void setLastPage(int lastPage) {
		this.lastPage = lastPage;
	}
	public int getFrom() {
		return from;
	}
	public void setFrom(int from) {
		this.from = from;
	}
	public int getTo() {
		return to;
	}
	public void setTo(int to) {
		this.to = to;
	}
	public ArrayList<HashMap<String, Object>> getData() {
		return data;
	}
	public void setData(ArrayList<HashMap<String, Object>> data) {
		this.data = data;
	}
}