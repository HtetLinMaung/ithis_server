package com.nirvasoft.web.pos.dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.SQLException;
import org.springframework.stereotype.Repository;
import com.nirvasoft.web.pos.model.PersonData;
import com.nirvasoft.web.pos.util.ServerUtil;


@Repository
public class PersonDao {

	public int savePerson(PersonData data, Connection conn) throws SQLException {
		int effectedRow = 0;
		String sql = " INSERT INTO UVM012 (syskey, CreatedDate, ModifiedDate, UserId, UserName, RecordStatus, SyncStatus, SyncBatch,usersyskey,t1,t2,t3,t4,t5,t6,t7,t8,t9,t10,t11,t12,t13,t14,t15,t16,t17,t18,t19,t20,t21,t22,n1,n2,n3,n4,n5,n6,n7,n8,n9,n10) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?) ";
		
		int i = 1;
		PreparedStatement stat = conn.prepareStatement(sql);
		stat.setString(i++, data.getSyskey());
		stat.setString(i++, ServerUtil.getCurrentDate());
	    stat.setString(i++, ServerUtil.getCurrentDate());
	    stat.setString(i++, data.getUserId());
	    stat.setString(i++, data.getUserName());
	    stat.setLong(i++, data.getRecordStatus());
	    stat.setLong(i++, data.getSyncStatus());
	    stat.setLong(i++, data.getSyncBatch());
	    stat.setLong(i++, data.getUsersyskey());
	    stat.setString(i++, data.getT1());
	    stat.setString(i++, data.getT2());
	    stat.setString(i++, data.getT3());
	    stat.setString(i++, data.getT4());
	    stat.setString(i++, data.getT5());
	    stat.setString(i++, data.getT6());
	    stat.setString(i++, data.getT7());
	    stat.setString(i++, data.getT8());
	    stat.setString(i++, data.getT9());
	    stat.setString(i++, data.getT10());
	    stat.setString(i++, data.getT11());
	    stat.setString(i++, data.getT12());
	    stat.setString(i++, data.getT13());
	    stat.setString(i++, data.getT14());
	    stat.setString(i++, data.getT15());
	    stat.setString(i++, data.getT16());
	    stat.setString(i++, data.getT17());
	    stat.setString(i++, data.getT18());
	    stat.setString(i++, data.getT19());
	    stat.setString(i++, data.getT20());
	    stat.setString(i++, data.getT21());
	    stat.setString(i++, data.getT22());
	    stat.setLong(i++, data.getN1());
	    stat.setLong(i++, data.getN2());
	    stat.setLong(i++, data.getN3());
	    stat.setLong(i++, data.getN4());
	    stat.setLong(i++, data.getN5());
	    stat.setLong(i++, data.getN6());
	    stat.setLong(i++, data.getN7());
	    stat.setLong(i++, data.getN8());
	    stat.setLong(i++, data.getN9());
	    stat.setLong(i++, data.getN10());
		effectedRow = stat.executeUpdate();
		
		return effectedRow;
	}

}
