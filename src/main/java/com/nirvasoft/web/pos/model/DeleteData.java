package com.nirvasoft.web.pos.model;

import javax.xml.bind.annotation.XmlRootElement;

@XmlRootElement
public class DeleteData {
	private long syskey;
	
	public long getSyskey() {
		return syskey;
	}
	
	public void setSyskey(long syskey) {
		this.syskey = syskey;
	}
}