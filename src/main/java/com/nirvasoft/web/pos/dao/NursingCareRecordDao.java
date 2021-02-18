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

import com.nirvasoft.web.pos.model.NursingCareRecordData;
import com.nirvasoft.web.pos.model.Relationship;
import com.nirvasoft.web.pos.util.ServerUtil;

@Repository
public class NursingCareRecordDao {

	public boolean isCodeExist(String NursingCareRecordData, Connection cnn) throws SQLException {
		String sql = "SELECT * FROM JunPatientContact WHERE RECORDSTATUS <> 4 and Syskey =?";
		PreparedStatement stat = cnn.prepareStatement(sql);
		stat.setString(1, NursingCareRecordData);
		ResultSet rs = stat.executeQuery();
		if (rs.next()) {
			return true;
		}
		return false;
	}

	public int insert(NursingCareRecordData data, Connection cnn) throws SQLException {
		int i = 1;
		int effectedRow = 0;
		String currentDate = ServerUtil.getCurrentDate();
		String sql = "INSERT INTO JunPatientContact(syskey,createddate,modifieddate,userid,username,RecordStatus,SyncStatus,SyncBatch,usersyskey,pId,eMRType,refNo,rgsNo,hsId,t1,t2,t3,t4,t5,t6,t7,t8,t9,t10,phone1,phone2,phone3,phone4,phone5,phone6,phone7,phone8,phone9,phone10,phone11,phone12,phone13,phone14,phone15,phone16,n1,n2,n3,n4,n5,n6,n7,n8,n9,n10)"
				+ "VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)";
		PreparedStatement stat = cnn.prepareStatement(sql);
		stat.setLong(i++, Long.parseLong(data.getSyskey()));
		stat.setString(i++, currentDate);
		stat.setString(i++, currentDate);
		stat.setString(i++, "");
		stat.setString(i++, "");
		stat.setInt(i++, 1);
		stat.setInt(i++, 0);
		stat.setLong(i++, 0);
		stat.setLong(i++, 0);
		stat.setLong(i++, 0);
		stat.setString(i++, "");
		stat.setString(i++, "");
		stat.setInt(i++, 0);
		stat.setInt(i++, 0);
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
		stat.setString(i++, data.getPhone1());
		stat.setString(i++, data.getPhone2());
		stat.setString(i++, data.getPhone3());
		stat.setString(i++, data.getPhone4());
		stat.setString(i++, data.getPhone5());
		stat.setString(i++, data.getPhone6());
		stat.setString(i++, data.getPhone7());
		stat.setString(i++, data.getPhone8());
		stat.setString(i++, data.getPhone9());
		stat.setString(i++, data.getPhone10());
		stat.setString(i++, data.getPhone11());
		stat.setString(i++, data.getPhone12());
		stat.setString(i++, data.getPhone13());
		stat.setString(i++, data.getPhone14());
		stat.setString(i++, data.getPhone15());
		stat.setString(i++, data.getPhone16());
		stat.setLong(i++, data.getN1());
		stat.setLong(i++, data.getN2());
		stat.setLong(i++, data.getN3());
		stat.setLong(i++, data.getN4());
		stat.setLong(i++, data.getN5());
		stat.setLong(i++, data.getN6());
		stat.setLong(i++, 0);
		stat.setLong(i++, 0);
		stat.setLong(i++, 0);
		stat.setLong(i++, 0);
		effectedRow = stat.executeUpdate();
		return effectedRow;
	}

	public int update(NursingCareRecordData data, Connection conn) throws SQLException {
		int effectedRow = 0;
		System.out.println(data.toString());
		String sql = "UPDATE JunPatientContact SET  t1='" + data.getT1() + "',t2='" + data.getT2() + "',t3='"
				+ data.getT3() + "',t4='" + data.getT4() + "',t5='" + data.getT5() + "',t6='" + data.getT6() + "',t7='"
				+ data.getT7() + "',t8='" + data.getT8() + "',t9='" + data.getT9() + "',t10='" + data.getT10()
				+ "',phone1='" + data.getPhone1() + "',phone2='" + data.getPhone2() + "',phone3='" + data.getPhone3()
				+ "',phone4='" + data.getPhone4() + "',phone5='" + data.getPhone5() + "',phone6='" + data.getPhone6()
				+ "',phone7='" + data.getPhone7() + "',phone8='" + data.getPhone8() + "',phone9='" + data.getPhone9()
				+ "',phone10='" + data.getPhone10() + "',phone11='" + data.getPhone11() + "',phone12='"
				+ data.getPhone12() + "',phone13='" + data.getPhone13() + "',phone14='" + data.getPhone14()
				+ "',phone15='" + data.getPhone15() + "',phone16='" + data.getPhone16() + "',n1='" + data.getN1()
				+ "',n2='" + data.getN2() + "',n3='" + data.getN3() + "',n4='" + data.getN4() + "',n5='" + data.getN5()
				+ "',n6='" + data.getN6() + "',n7='" + data.getN7() + "',n8='" + data.getN8() + "',n9='" + data.getN9()
				+ "',n10='" + data.getN10() + "' WHERE syskey=" + data.getSyskey();
		PreparedStatement stmt = conn.prepareStatement(sql);
		System.out.println(sql);
		effectedRow += stmt.executeUpdate();
		return effectedRow;
	}

	public HashMap<String, Object> getNursingCareRecord(NursingCareRecordData data, Connection conn)
			throws SQLException {

		Map<String, Object> result = new HashMap<>();
		List<NursingCareRecordData> NurseList = new ArrayList<NursingCareRecordData>();
		NursingCareRecordData nursedata = null;
		String sql = "SELECT JunPatientContact.syskey,JunPatientContact.t1,JunPatientContact.n1,JunPatientContact.phone1,JunPatientContact.phone2,JunPatientContact.phone3,JunPatientContact.phone4,JunPatientContact.t5 FROM JunPatientContact WHERE JunPatientContact.RECORDSTATUS<>4 ";

		if (!data.getSyskey().equals("") && !data.getSyskey().equals("0")) {

			sql += " and JunPatientContact.syskey = '" + data.getSyskey() + "'";
		}
		if (!data.getT1().equals("") && !data.getT1().equals(null)) {
			sql += "AND JunPatientContact.t1 like '%" + data.getT1() + "%'";

		}
		if (!data.getT2().equals("") && !data.getT2().equals(null)) {
			sql += "AND JunPatientContact.t2 like '%" + data.getT2() + "%'";

		}
		sql += "Order by JunPatientContact.t1 asc";
		PreparedStatement stmt = conn.prepareStatement(sql);
		ResultSet rs = stmt.executeQuery();

		while (rs.next()) {
			nursedata = new NursingCareRecordData();
			nursedata.setSyskey(rs.getString("syskey"));
			nursedata.setT1(rs.getString("t1"));
			nursedata.setN1(rs.getLong("n1"));
			nursedata.setPhone1(rs.getString("phone1"));
			nursedata.setPhone2(rs.getString("phone2"));
			nursedata.setPhone3(rs.getString("phone3"));
			nursedata.setPhone4(rs.getString("phone4"));
			nursedata.setT5(rs.getString("t5"));
			NurseList.add(nursedata);
		}
		System.out.print(NurseList);
		result.put("NurseList", NurseList);
		return (HashMap<String, Object>) result;
	}

	public HashMap<String, Object> getNurseShiftSummary1(NursingCareRecordData data, Connection conn)
			throws SQLException {

		Map<String, Object> result = new HashMap<>();
		List<NursingCareRecordData> NurseList = new ArrayList<NursingCareRecordData>();
		NursingCareRecordData nursedata = null;
		String sql = "SELECT JunPatientContact.syskey," + "JunPatientContact.t1,JunPatientContact.t2,"
				+ "JunPatientContact.t3,JunPatientContact.t4," + "JunPatientContact.t5,JunPatientContact.t6,"
				+ "JunPatientContact.t7,JunPatientContact.t8," + "JunPatientContact.t9,JunPatientContact.t10,"
				+ "JunPatientContact.phone1,JunPatientContact.phone2,"
				+ "JunPatientContact.phone3,JunPatientContact.phone4,"
				+ "JunPatientContact.phone5,JunPatientContact.phone6,"
				+ "JunPatientContact.phone7,JunPatientContact.phone8,"
				+ "JunPatientContact.phone9,JunPatientContact.phone10,"
				+ "JunPatientContact.phone11,JunPatientContact.phone12,"
				+ "JunPatientContact.phone13,JunPatientContact.phone14,"
				+ "JunPatientContact.phone15,JunPatientContact.phone16," + "JunPatientContact.n1,JunPatientContact.n2,"
				+ "JunPatientContact.n3,JunPatientContact.n4," + "JunPatientContact.n5,JunPatientContact.n6,"
				+ "JunPatientContact.n7,JunPatientContact.n8," + "JunPatientContact.n9,JunPatientContact.n10 "
				+ "FROM JunPatientContact WHERE JunPatientContact.RECORDSTATUS<>4 ";

		if (!data.getSyskey().equals("") && !data.getSyskey().equals("0")) {

			sql += " and JunPatientContact.syskey = '" + data.getSyskey() + "'";
		}
		sql += "Order by JunPatientContact.t1 asc";
		System.out.println(sql);
		PreparedStatement stmt = conn.prepareStatement(sql);
		ResultSet rs = stmt.executeQuery();

		while (rs.next()) {
			nursedata = new NursingCareRecordData();
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
			nursedata.setT10(rs.getString("t10"));
			nursedata.setPhone1(rs.getString("phone1"));
			nursedata.setPhone2(rs.getString("phone2"));
			nursedata.setPhone3(rs.getString("phone3"));
			nursedata.setPhone4(rs.getString("phone4"));
			nursedata.setPhone5(rs.getString("phone5"));
			nursedata.setPhone6(rs.getString("phone6"));
			nursedata.setPhone7(rs.getString("phone7"));
			nursedata.setPhone8(rs.getString("phone8"));
			nursedata.setPhone9(rs.getString("phone9"));
			nursedata.setPhone10(rs.getString("phone10"));
			nursedata.setPhone11(rs.getString("phone11"));
			nursedata.setPhone12(rs.getString("phone12"));
			nursedata.setPhone13(rs.getString("phone13"));
			nursedata.setPhone14(rs.getString("phone14"));
			nursedata.setPhone15(rs.getString("phone15"));
			nursedata.setPhone16(rs.getString("phone16"));
			nursedata.setN1(rs.getLong("n1"));
			nursedata.setN2(rs.getLong("n2"));
			nursedata.setN3(rs.getLong("n3"));
			nursedata.setN4(rs.getLong("n4"));
			nursedata.setN5(rs.getLong("n5"));
			nursedata.setN6(rs.getInt("n6"));
			nursedata.setN7(rs.getInt("n7"));
			nursedata.setN8(rs.getLong("n8"));
			nursedata.setN9(rs.getLong("n9"));
			nursedata.setN10(rs.getLong("n10"));
			NurseList.add(nursedata);
		}
		System.out.print(NurseList);
		result.put("NurseList", NurseList);
		return (HashMap<String, Object>) result;
	}
	public HashMap<String, Object> getRelationship(Relationship data, Connection conn)
			throws SQLException {

		Map<String, Object> result = new HashMap<>();
		List<Relationship> NurseList = new ArrayList<Relationship>();
		Relationship nursedata = null;
		String sql = "SELECT relationship.syskey," + "relationship.t1,relationship.t2 "
				+ "FROM relationship WHERE relationship.RECORDSTATUS<>4 ";

		if (!data.getSyskey().equals("") && !data.getSyskey().equals("0")) {

			sql += " and relationship.syskey = '" + data.getSyskey() + "'";
		}
		sql += "Order by relationship.t1 asc";
		System.out.println(sql);
		PreparedStatement stmt = conn.prepareStatement(sql);
		ResultSet rs = stmt.executeQuery();

		while (rs.next()) {
			nursedata = new Relationship();
			nursedata.setSyskey(rs.getString("syskey"));
			nursedata.setT1(rs.getString("t1"));
			nursedata.setT2(rs.getString("t2"));
			NurseList.add(nursedata);
		}
		System.out.print(NurseList);
		result.put("NurseList", NurseList);
		return (HashMap<String, Object>) result;
	}


	public int delete(String id, Connection conn) throws SQLException {
		int effectedRow = 0;
		String sql = "UPDATE JunPatientContact SET RecordStatus = 4 WHERE syskey = '" + id + "'";
		PreparedStatement stat = conn.prepareStatement(sql);
		System.out.print(sql);
		effectedRow += stat.executeUpdate();
		return effectedRow;
	}
}
