package com.nirvasoft.web.pos.model;

import java.util.HashMap;

public class NurseDoseActivityData {
	private long syskey;
	private long nurseId;
	private boolean done;
	private String doneAt;
	private long parentId;
	
	public HashMap<String, Object> toHashMap() {
		HashMap<String, Object> map = new HashMap<>();
		map.put("syskey", syskey);
		map.put("nurseId", nurseId);
		map.put("done", done);
		map.put("doneAt", doneAt);
		map.put("parentId", parentId);
		return map;
	}
	
	public long getSyskey() {
		return syskey;
	}
	public void setSyskey(long syskey) {
		this.syskey = syskey;
	}
	public long getNurseId() {
		return nurseId;
	}
	public void setNurseId(long nurseId) {
		this.nurseId = nurseId;
	}
	public boolean isDone() {
		return done;
	}
	public void setDone(boolean done) {
		this.done = done;
	}
	public String getDoneAt() {
		return doneAt;
	}
	public void setDoneAt(String doneAt) {
		this.doneAt = doneAt;
	}
	public long getParentId() {
		return parentId;
	}
	public void setParentId(long parentId) {
		this.parentId = parentId;
	}
}
