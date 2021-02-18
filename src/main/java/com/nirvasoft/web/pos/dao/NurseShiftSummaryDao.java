package com.nirvasoft.web.pos.dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Repository;


import com.nirvasoft.web.pos.model.NurseShiftSummaryData;
import com.nirvasoft.web.pos.util.ServerUtil;

@Repository
public class NurseShiftSummaryDao {
	public boolean isCodeExist(String NurseShiftSummaryData, Connection cnn)throws SQLException {
		String sql = "SELECT * FROM tblNurseShiftSummary WHERE RECORDSTATUS <> 4 and Syskey =?";
		PreparedStatement stat = cnn.prepareStatement(sql);
		stat.setString(1, NurseShiftSummaryData);
		ResultSet rs = stat.executeQuery();
		if (rs.next()) {
			return true; 
		}
		return false; 
	}
	
	public int insert(NurseShiftSummaryData data, Connection cnn) throws SQLException{
		int i=1;
		int effectedRow=0;
		String currentDate = ServerUtil.getCurrentDate();
		String sql="INSERT INTO tblNurseShiftSummary(syskey,createddate,modifieddate,userid,username,RecordStatus,SyncStatus,SyncBatch,usersyskey,parentid,eMRType,refNo,rgsNo,pId,hsId,doctorId,dayNight,t1,t2,t3,t4,t5,t6,t7,t8,t9,t10,n1,n2,n3,n4,n5,n6,n7,n8,n9,n10,remark1,remark2)"
				+ "VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)";
		PreparedStatement stat=cnn.prepareStatement(sql);
		stat.setLong(i++,Long.parseLong(data.getSyskey()));
		stat.setString(i++, currentDate);
		stat.setString(i++, currentDate);
		stat.setString(i++, "");
		stat.setString(i++, "");
		stat.setInt(i++,1);
		stat.setInt(i++,0);
		stat.setLong(i++,0);
		stat.setLong(i++,0);
		stat.setLong(i++,0);
		stat.setString(i++, "");
		stat.setString(i++, "");
		stat.setInt(i++,0);
		stat.setInt(i++,0);
		stat.setInt(i++,0);
		stat.setString(i++, "");
		stat.setInt(i++,data.getDayNight());
		stat.setString(i++, data.getT1());
		stat.setString(i++, data.getT2());
		stat.setString(i++, data.getT3());
		stat.setString(i++, data.getT4());
		stat.setString(i++, data.getT5());
		stat.setString(i++, data.getT6());
		stat.setString(i++, data.getT7());
		stat.setString(i++, data.getT8());
		stat.setString(i++, data.getT9());
		stat.setString(i++, "");
		stat.setLong(i++,0);
		stat.setLong(i++,0);
		stat.setLong(i++,0);
		stat.setLong(i++,0);
		stat.setLong(i++,0);
		stat.setLong(i++,data.getN6());
		stat.setLong(i++,data.getN7());
		stat.setLong(i++,0);
		stat.setLong(i++,0);
		stat.setLong(i++,0);
		stat.setString(i++, "");
		stat.setString(i++, "");
		effectedRow=stat.executeUpdate();
		return effectedRow;
	}
	public int update(NurseShiftSummaryData data, Connection conn) throws SQLException {
		int effectedRow = 0;
		System.out.println(data.toString());
		String sql = "UPDATE tblNurseShiftSummary SET  t1='"
				+data.getT1()+"',t2='"
			    +data.getT2()+"',t3='"
				+data.getT3()+"',t4='"
			    +data.getT4()+"',t5='"
				+data.getT5()+"',t6='"
			    +data.getT6()+"',t7='"
			    +data.getT6()+"',t8='"
				+data.getT7()+"',t9='"
			    +data.getT9()+"',n6='"
				+data.getN6()+"',n7='"
			    +data.getN7()+"',daynight='"
				+data.getDayNight()+"' WHERE syskey="+ data.getSyskey();
		PreparedStatement stmt = conn.prepareStatement(sql);
		System.out.println(sql);
		effectedRow += stmt.executeUpdate();
		return effectedRow;
	}
	
	public HashMap<String,Object> getNurseShiftSummary(NurseShiftSummaryData data, Connection conn)throws SQLException {
		
		
		Map<String,Object> result = new HashMap<>();
		List<NurseShiftSummaryData> NurseList = new ArrayList<NurseShiftSummaryData>();
		NurseShiftSummaryData nursedata=null;
		String sql = "SELECT tblNurseShiftSummary.syskey,"
				+"tblNurseShiftSummary.t1,tblNurseShiftSummary.t2,"
				+"tblNurseShiftSummary.t3,tblNurseShiftSummary.t4,"
				+"tblNurseShiftSummary.t5,tblNurseShiftSummary.t6,"
				+"tblNurseShiftSummary.t7,tblNurseShiftSummary.t8,tblNurseShiftSummary.t9,"
				+"tblNurseShiftSummary.n6,tblNurseShiftSummary.n7 "
				+"FROM tblNurseShiftSummary WHERE tblNurseShiftSummary.RECORDSTATUS<>4 ";
					
		if(!data.getSyskey().equals("") && !data.getSyskey().equals("0")){
			
			sql += " and tblNurseShiftSummary.syskey = '"+ data.getSyskey()+"'";
		}
		if(!data.getT1().equals("")&& !data.getT1().equals(null)){
			sql+="AND tblNurseShiftSummary.t1 like '%"+data.getT1()+"%'";
		
		}	
		if(!data.getT2().equals("")&& !data.getT2().equals(null)){
			sql+="AND tblNurseShiftSummary.t2 like '%"+data.getT2()+"%'";
			
		}
		sql += "Order by tblNurseShiftSummary.t1 asc";
		
		PreparedStatement stmt=conn.prepareStatement(sql);
		ResultSet rs = stmt.executeQuery();
		
	
		while (rs.next()) {
			nursedata = new NurseShiftSummaryData();
			nursedata.setSyskey(rs.getString("syskey"));
			nursedata.setT1(rs.getString("t1"));
			nursedata.setT2(rs.getString("t2"));
			nursedata.setT3(rs.getString("t3"));
			nursedata.setT4(rs.getString("t4"));
			nursedata.setT5(rs.getString("t5"));
			nursedata.setT6(rs.getString("t6"));
			nursedata.setT7(rs.getString("t7"));
			nursedata.setT8(rs.getString("t8"));
			nursedata.setT9(rs.getString("t9"));
			nursedata.setN6(rs.getInt("n6"));
			nursedata.setN7(rs.getInt("n7"));
			NurseList.add(nursedata);
		}
		System.out.print(NurseList);
		result.put("NurseList", NurseList);
		return (HashMap<String, Object>) result;
	}
public HashMap<String,Object> getNurseShiftSummary1(NurseShiftSummaryData data, Connection conn)throws SQLException {
		
		
		Map<String,Object> result = new HashMap<>();
		List<NurseShiftSummaryData> NurseList = new ArrayList<NurseShiftSummaryData>();
		NurseShiftSummaryData nursedata=null;
		String sql ="SELECT tblNurseShiftSummary.syskey,"
				+"tblNurseShiftSummary.t1,tblNurseShiftSummary.t2,"
				+"tblNurseShiftSummary.t3,tblNurseShiftSummary.t4,"
				+"tblNurseShiftSummary.t5,tblNurseShiftSummary.t6,"
				+"tblNurseShiftSummary.t7,tblNurseShiftSummary.t8,tblNurseShiftSummary.t9,"
				+"tblNurseShiftSummary.n6,tblNurseShiftSummary.n7,tblNurseShiftSummary.dayNight "
				+"FROM tblNurseShiftSummary WHERE tblNurseShiftSummary.RECORDSTATUS<>4 "; 
		if(!data.getSyskey().equals("") && !data.getSyskey().equals("0")){
			
			sql += " and tblNurseShiftSummary.syskey = '"+ data.getSyskey()+"'";
		}
		if(!data.getT1().equals("")&& !data.getT1().equals(null)){
			sql+="AND tblNurseShiftSummary.t1 like '%"+data.getT1()+"%'";
		
		}
		sql += "Order by tblNurseShiftSummary.t1 asc";
		
		PreparedStatement stmt=conn.prepareStatement(sql);
		ResultSet rs = stmt.executeQuery();
		
	
		while (rs.next()) {
			nursedata = new NurseShiftSummaryData();
			nursedata.setSyskey(rs.getString("syskey"));
			nursedata.setT1(rs.getString("t1"));
			nursedata.setT2(rs.getString("t2"));
			nursedata.setT3(rs.getString("t3"));
			nursedata.setT4(rs.getString("t4"));
			nursedata.setT5(rs.getString("t5"));
			nursedata.setT6(rs.getString("t6"));
			nursedata.setT7(rs.getString("t7"));
			nursedata.setT8(rs.getString("t8"));
			nursedata.setT9(rs.getString("t9"));
			nursedata.setN6(rs.getInt("n6"));
			nursedata.setN7(rs.getInt("n7"));
			nursedata.setDayNight(rs.getInt("dayNight"));
			NurseList.add(nursedata);
		}
		System.out.print(NurseList);
		result.put("NurseList", NurseList);
		return (HashMap<String, Object>) result;
	}
	public int delete(String id, Connection conn) throws SQLException {
		int effectedRow=0;
		String sql = "UPDATE tblNurseShiftSummary SET RecordStatus = 4 WHERE syskey = '"+ id+"'";
		PreparedStatement stat = conn.prepareStatement(sql);
		System.out.print(sql);
		effectedRow  += stat.executeUpdate();
		return effectedRow;
	}
}
