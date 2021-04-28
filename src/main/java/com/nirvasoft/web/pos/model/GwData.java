package com.nirvasoft.web.pos.model;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.stream.Collectors;

public class GwData extends PatientInfoData {
	private long syskey;
	private long pId;
	private long rgsNo;
	private String userid;
	private String username;
	private int goal;
	private String intervention;
	private String initDate;
	private boolean outcomeMet;
	private String outcomeMetAt;
	private ArrayList<GeneralWardDetailData> shifts = new ArrayList<>();
	private String interDesc;
	
	public HashMap<String, Object> toHashMap() {
		HashMap<String, Object> map = new HashMap<>();
		map.put("syskey", syskey);
		map.put("pId", pId);
		map.put("rgsNo", rgsNo);
		map.put("userid", userid);
		map.put("username", username);
		map.put("goal", goal);
		map.put("intervention", intervention);
		map.put("initDate", initDate);
		map.put("outcomeMet", outcomeMet);
		map.put("outcomeMetAt", outcomeMetAt);
		map.put("patientId", patientId);
		map.put("patientName", patientName);
		map.put("adNo", adNo);
		map.put("interDesc", interDesc);
		map.put("shifts", shifts
				.stream()
				.map(shift -> shift.toHashMap())
				.collect(Collectors.toList()));
		return map;
	}
	
	public long getParentId() {
		String[] arr = this.intervention.split(":");
		if (arr.length > 0) {
			return Long.parseLong(arr[0]);
		} else {
			return 0;
		}
	}
	
	public int getSelectedDesc() {
		String[] arr = this.intervention.split(":");
		if (arr.length > 0) {
			return Integer.parseInt(arr[1]);
		} else {
			return 0;
		}
	}
	
	public void setInterventionFrom(long parentId, int n) {
		this.intervention = parentId + ":" + n;
	}
	
	public long getSyskey() {
		return syskey;
	}
	public void setSyskey(long syskey) {
		this.syskey = syskey;
	}
	public int getGoal() {
		return goal;
	}
	public void setGoal(int goal) {
		this.goal = goal;
	}
	public String getIntervention() {
		return intervention;
	}
	public void setIntervention(String intervention) {
		this.intervention = intervention;
	}
	public String getInitDate() {
		return initDate;
	}
	public void setInitDate(String initDate) {
		this.initDate = initDate;
	}
	
	public boolean isOutcomeMet() {
		return outcomeMet;
	}
	public void setOutcomeMet(boolean outcomeMet) {
		this.outcomeMet = outcomeMet;
	}
	
	public String getOutcomeMetAt() {
		return outcomeMetAt;
	}
	public void setOutcomeMetAt(String outcomeMetAt) {
		this.outcomeMetAt = outcomeMetAt;
	}

	public long getpId() {
		return pId;
	}

	public void setpId(long pId) {
		this.pId = pId;
	}

	public long getRgsNo() {
		return rgsNo;
	}

	public void setRgsNo(long rgsNo) {
		this.rgsNo = rgsNo;
	}

	public String getUserid() {
		return userid;
	}

	public void setUserid(String userid) {
		this.userid = userid;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public ArrayList<GeneralWardDetailData> getShifts() {
		return shifts;
	}

	public void setShifts(ArrayList<GeneralWardDetailData> shifts) {
		this.shifts = shifts;
	}

	public String getInterDesc() {
		return interDesc;
	}

	public void setInterDesc(String interDesc) {
		this.interDesc = interDesc;
	}

	
}
