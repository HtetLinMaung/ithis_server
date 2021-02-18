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

import com.nirvasoft.web.pos.SalesOrderDetailData;
import com.nirvasoft.web.pos.model.SaleOrderListData;
import com.nirvasoft.web.pos.model.SalesOrderData;
import com.nirvasoft.web.pos.util.CommonEnum;
import com.nirvasoft.web.pos.util.ServerUtil;
import com.nirvasoft.web.pos.util.SyskeyUtil;
@Repository
public class SalesOrderDao {

	public int saveSOPHeader(SalesOrderData data, Connection conn) throws SQLException {
		int effectedRow = 0;	
		String sql = "INSERT INTO SOP001 (SYSKEY,CREATEDDATE,MODIFIEDDATE,USERID,USERNAME,PROJECTCODE,SAVESTATUS,RECORDSTATUS,TRANSTYPE,ref1,ref2,ref3,ref4,ref5,ref6,T1,T2,T3,T4,T5,T6,T7,T8,T9,T10,T11,T38,N1,N2,N3,N4,N5,N6,N7,N8,N9,N10,N11,N12,N13,N14,N21,N22,N25,N26, N30,N24,N45,USERSYSKEY,N49,N50,N53,N54,N56,N57,T43,T44,N18,N19,T24,T45,T46,T35,T28) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?,?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?,?,?)";
		PreparedStatement stat = conn.prepareStatement(sql);
		int i = 1;
		stat.setString(i++, data.getSyskey());
		stat.setString(i++, data.getCreateddate());
		stat.setString(i++, data.getModifieddate());
		stat.setString(i++, data.getUserid());
		stat.setString(i++, data.getUsername());
		stat.setString(i++, data.getProjectcode());
		stat.setInt(i++, data.getSaveStatus());
		stat.setInt(i++, data.getRecordStatus());
		stat.setInt(i++, data.getTransType());
		stat.setString(i++, data.getRef1());
		stat.setString(i++, data.getRef2());
		stat.setString(i++, data.getRef3());
		stat.setString(i++, data.getRef4());
		stat.setString(i++, data.getRef5());
		stat.setString(i++, data.getRef6());
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
		stat.setString(i++, data.getT38());
		stat.setString(i++, data.getN1());
		stat.setString(i++, data.getN2());
		stat.setString(i++, data.getN3());
        stat.setDouble(i++, data.getN4());		
		stat.setDouble(i++, data.getN5());
		stat.setDouble(i++, data.getN6());
		stat.setDouble(i++, data.getN7());
		stat.setDouble(i++, data.getN8());
		stat.setDouble(i++, data.getN9());
		stat.setDouble(i++, data.getN10());
		stat.setString(i++, data.getN11());
		stat.setDouble(i++, data.getN12());
		stat.setInt(i++, data.getN13());
		stat.setDouble(i++, data.getN14());
		stat.setString(i++, data.getN21());
		stat.setString(i++, data.getN22());
		stat.setString(i++, data.getN25());
		stat.setString(i++, data.getN26());
		stat.setInt(i++, data.getN30());
		stat.setLong(i++, Long.parseLong(data.getN24()));
		stat.setDouble(i++, data.getRef20());
		stat.setString(i++, data.getUserSysKey());
		stat.setInt(i++, data.getN49());
		stat.setInt(i++, data.getN50());
		stat.setString(i++, data.getN53());
		stat.setString(i++, data.getN54());
		stat.setString(i++, data.getN56());
		stat.setString(i++, data.getN57());
		stat.setString(i++, data.getT43());
		stat.setString(i++, data.getT44());
		stat.setInt(i++, 0);
		stat.setInt(i++, 0);
		stat.setString(i++, data.getT24());
		stat.setString(i++, "");
		stat.setString(i++, "");
		stat.setString(i++, data.getT35());
		stat.setString(i++, data.getT28());
		effectedRow = stat.executeUpdate();
		return effectedRow;
	}

	public int updateSOPHeader(SalesOrderData data, Connection conn) throws SQLException {
		int effectedRow = 0;
		String sql = "UPDATE SOP001 SET MODIFIEDDATE=?,USERID=?,USERNAME=?,PROJECTCODE=?,SAVESTATUS=?,RECORDSTATUS=?,TRANSTYPE=?,ref1=?,ref2=?,ref3=?,ref4=?,ref5=?,ref6=?,T1=?,T2=?,T3=?,T4=?,T5=?,T6=?,T7=?,T8=?,T9=?,T10=?,T11=?,t38=?,N1=?,N2=?,N3=?,N4=?,N5=?,N6=?,N7=?,N8=?,N9=?,N10=?,N11=?,N12=?,N13=?,N14=?,N21=?,N22=?,N25=?,N26=?, N30=?,N24=?,N45=?,USERSYSKEY=?,N49=?,N50=?,N53=?,N54=?,N56=?,N57=?,T24=?,T45=?,T46=?,T35=?,T28=? WHERE SYSKEY=?";
		PreparedStatement stat = conn.prepareStatement(sql);
		int i = 1;
		stat.setString(i++, data.getModifieddate());
		stat.setString(i++, data.getUserid());
		stat.setString(i++, data.getUsername());
		stat.setString(i++, data.getProjectcode());
		stat.setInt(i++, data.getSaveStatus());
		stat.setInt(i++, data.getRecordStatus());
		stat.setInt(i++, data.getTransType());
		stat.setString(i++, data.getRef1());
		stat.setString(i++, data.getRef2());
		stat.setString(i++, data.getRef3());
		stat.setString(i++, data.getRef4());
		stat.setString(i++, data.getRef5());
		stat.setString(i++, data.getRef6());
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
		stat.setString(i++, data.getT38());
		stat.setString(i++, data.getN1());
		stat.setString(i++, data.getN2());
		stat.setString(i++, data.getN3());
		stat.setDouble(i++, data.getN4());
		stat.setDouble(i++, data.getN5());
		stat.setDouble(i++, data.getN6());
		stat.setDouble(i++, data.getN7());
		stat.setDouble(i++, data.getN8());
		stat.setDouble(i++, data.getN9());
		stat.setDouble(i++, data.getN10());
		stat.setString(i++, data.getN11());
		stat.setDouble(i++, data.getN12());
		stat.setInt(i++, data.getN13());
		stat.setDouble(i++, data.getN14());
		stat.setString(i++, data.getN21());
		stat.setString(i++, data.getN22());
		stat.setString(i++, data.getN25());
		stat.setString(i++, data.getN26());
		stat.setInt(i++, data.getN30());
		stat.setLong(i++, Long.parseLong(data.getN24()));
		stat.setDouble(i++, data.getRef20());
		stat.setString(i++, data.getUserSysKey());
		stat.setInt(i++, data.getN49());
		stat.setInt(i++, data.getN50());
		stat.setLong(i++, Long.parseLong(data.getN53())); // n53
		stat.setString(i++, data.getN54());
		stat.setString(i++, data.getN56());
		stat.setString(i++, data.getN57());
		stat.setString(i++, data.getT24());
		stat.setString(i++, "");
		stat.setString(i++, "");
		stat.setString(i++, data.getT35());
		stat.setString(i++, data.getT28());
		stat.setString(i++, data.getSyskey());
		effectedRow = stat.executeUpdate();
		return effectedRow;
	}

	public int deleteSOPDetail(SalesOrderData soData, Connection conn) throws SQLException {
		int effectedRow = 0;
		String sql = "DELETE SOP002 WHERE parentid=?";
		PreparedStatement stat = conn.prepareStatement(sql);
		stat.setLong(1, Long.parseLong(soData.getSyskey()));
		effectedRow = stat.executeUpdate();
		return effectedRow;
	}

	public HashMap<String, Object> saveSOPDetail(SalesOrderData soData, Connection conn) throws Exception {
		HashMap<String, Object> result = new HashMap<>();
		ArrayList<String> syskeyList = new ArrayList<>();
		int effectedRow = 0;
		for (SalesOrderDetailData detail : soData.getSoDetailList()) {
			if (detail.getSyskey().isEmpty() || detail.getSyskey().equals("0")) {
				detail.setSyskey(SyskeyUtil.getSyskey() + "");
			}
			if (soData.getCreateddate().equals(""))
				detail.setCreateddate(soData.getModifieddate());
			else
				detail.setCreateddate(soData.getCreateddate());
			detail.setModifieddate(soData.getModifieddate());
			effectedRow = saveDetail(detail, soData.getUserid(), soData.getUsername(), soData.getSyskey(), conn);
			if (effectedRow < 1)
				throw new Exception("Saving Failed!!");
			syskeyList.add(detail.getSyskey());
		}		
		result.put("syskeyList", syskeyList);
		result.put("effectedRow", effectedRow);
		return result;
	}

	private int saveDetail(SalesOrderDetailData detail, String userId, String userName, String parentId,
			Connection conn) throws SQLException {
		int effectedRow = 0;
		String sql = "INSERT INTO SOP002 (SYSKEY,CREATEDDATE,MODIFIEDDATE,USERID,USERNAME,PROJECTCODE,PARENTID,RECORDSTATUS,T1,T2,T3,T4,T5,T6,N1,N2,N3,N5,N6,N7,N8,N11,N12,N13,N14,N15,N16,N17,N19,N20,N21,N22,N23,N24,N26,N27,N28,N29,N30,N34,N35,N36,N37,N38,N40,N44,T7,N45,N46,T8,N47,T9,N48,N49,T10,T11,N51,N53,N62,N56,N57,T14,T16,T17) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
		PreparedStatement stat = conn.prepareStatement(sql);
		int i = 1;
		stat.setString(i++, detail.getSyskey());
		stat.setString(i++, detail.getCreateddate());
		stat.setString(i++, detail.getModifieddate());
		stat.setString(i++, userId);
		stat.setString(i++, userName);
		stat.setString(i++, detail.getProjectcode());
		stat.setLong(i++, Long.parseLong(parentId));
		stat.setInt(i++, 1);
		stat.setString(i++, detail.getT1());
		stat.setString(i++, detail.getT2());
		stat.setString(i++, detail.getT3());
		stat.setString(i++, detail.getT4());
		stat.setString(i++, detail.getT5());
		stat.setString(i++, detail.getT6());
		stat.setString(i++, detail.getN1());
		stat.setString(i++, detail.getN2());
		stat.setString(i++, detail.getN3());
		stat.setInt(i++, detail.getN5());
		stat.setDouble(i++, detail.getN6());
		stat.setString(i++, detail.getN7());// lvl need bind
		stat.setDouble(i++, detail.getN8());
		stat.setDouble(i++, detail.getN11());
		stat.setDouble(i++, detail.getN12());
		stat.setDouble(i++, detail.getN13());
		stat.setDouble(i++, detail.getN14());
		stat.setDouble(i++, detail.getN15());
		stat.setDouble(i++, detail.getN16());
		stat.setDouble(i++, detail.getN17());
		stat.setDouble(i++, detail.getN19());
		stat.setDouble(i++, detail.getN20());
		stat.setDouble(i++, detail.getN21());
		stat.setDouble(i++, detail.getN22());
		stat.setDouble(i++, detail.getN23());
		stat.setString(i++, detail.getN24());// Purchase/saleAccsk
		stat.setString(i++, detail.getN26());// StkAccSK
		stat.setString(i++, detail.getN27());// AccuralAccsk
		stat.setString(i++, detail.getN28());
		stat.setString(i++, detail.getN29());// discountAccSK
		stat.setString(i++, detail.getN30());// taxsk
		stat.setDouble(i++, detail.getN34());// amt
		stat.setString(i++, detail.getN35());// taxCodesk
		stat.setInt(i++, detail.getN36());
		stat.setDouble(i++, detail.getN37());// taxPercent
		stat.setDouble(i++, detail.getN38());
		stat.setInt(i++, detail.getN40());
		stat.setDouble(i++, detail.getN44());
		stat.setString(i++, detail.getT7());
		stat.setString(i++, detail.getN45());
		stat.setDouble(i++, detail.getN46());
		stat.setString(i++, detail.getT8());
		stat.setDouble(i++, detail.getN47());
		stat.setString(i++, detail.getT9());
		stat.setDouble(i++, detail.getN48());
		stat.setDouble(i++, detail.getN49());
		stat.setString(i++, detail.getT10());
		stat.setString(i++, detail.getT11());
		stat.setDouble(i++, detail.getN51());
		stat.setDouble(i++, detail.getN53());
		stat.setString(i++, detail.getN62());
		stat.setInt(i++, detail.getN56());
		stat.setDouble(i++, detail.getN57());
		stat.setString(i++, detail.getT14());
		stat.setString(i++, detail.getT16());
		stat.setString(i++, detail.getT17());
		effectedRow = stat.executeUpdate();
		return effectedRow;
	}

	public Map<String, Object> searchSaleOrderList(HashMap<String, Object> data, Connection conn) throws SQLException {
		Map<String, Object> result = new HashMap<>();
		//List<SalesOrderData> sopList = new ArrayList<SalesOrderData>();
		SaleOrderListData dtlData = new SaleOrderListData();
		List<SaleOrderListData> dtlList = new ArrayList<SaleOrderListData>();
		SalesOrderData sopData = new SalesOrderData();
		int totalCount = 0;
		//SELECT SOP001.syskey,SOP001.ref2,SOP001.SaveStatus,SOP001.T1,SOP001.T2,SOP001.T4,SOP001.T8,SOP001.N5,UVM001.T1 AS CustCode,UVM001.T2 AS CustName ,vender.t2 As Vendor, SOP001.t11 As OrderTime, substring(SOP001.t3,7,2)+ '/' + substring(SOP001.t3,5,2) + '/' + substring(SOP001.t3,1,4) DeliveryDate FROM SOP001 INNER JOIN UVM002 ON SOP001.N1 = UVM002.syskey INNER JOIN UVM001 ON UVM001.syskey=UVM002.parentid Left JOIN UVM003 ON SOP001.t38 = UVM003.syskey Left JOIN UVM001 vender ON vender.syskey=UVM003.parentid 
		String sql = "select SOP001.t1,SOP001.n26,SOP002.t2,SOP002.t3,SOP002.n6,SOP002.n8,SOP002.n14,SOP002.n19,SOP002.n23,SOP002.n35,SOP002.n49,SOP002.n53 from SOP001 inner join SOP002 on SOP001.syskey= SOP002.parentid";

		String whereClause = " WHERE SOP001.RecordStatus<>4 AND SOP001.TransType = " + data.get("tranType") + " ";
		if (!(data.get("referenceno").equals(""))) {
			whereClause += " AND SOP001.T1='" + data.get("referenceno") + "'";
		}

		if (!(data.get("secondrefno").equals(""))) {
			whereClause += " AND SOP001.T2=N'" + data.get("secondrefno") + "'";
		}

		if (!(data.get("locSyskey").equals("-1"))) {
			whereClause += " AND SOP001.N26 in (" + data.get("locSyskey").toString() + ")";
		}
		if (!data.get("status").equals("0")) {
			if (data.get("status").equals("4"))
			{
				whereClause += " AND SOP001.SaveStatus>=" + CommonEnum.SalesOrderStatus.Draft.getCode()
						+ " AND SOP001.SaveStatus<=" + CommonEnum.SalesOrderStatus.Converted.getCode()
						+ " AND SOP001.SaveStatus<>6";
			}
			else {
				whereClause += " AND SOP001.SaveStatus=" + data.get("status");
			}
		}
//		if (!data.get("orderType").equals("-1")) {
//			if (data.get("orderType").equals("0")) {
//				whereClause += " AND SOP001.ref1=" + data.get("orderType");
//
//			} else {
//				whereClause += " AND SOP001.ref1=" + data.get("orderType");
//			}
//		}
//
//		if (data.get("userId") != "") {
//			whereClause += " AND SOP001.userId='" + data.get("userId") + "'";
//		}
//
//		if ((boolean) data.get("popupList") && !(boolean)data.get("rpttranstype")) {
//			whereClause += " AND SOP001.SAVESTATUS NOT IN (16,6,128,20) ";
//		}
		
		/*whereClause += ServerUtil.getFilter("" + data.get("customerCode"), "" + data.get("customerCodeOpt"),
				"UVM001.T1");
		whereClause += ServerUtil.getFilter("" + data.get("customerName"), "" + data.get("customerNameOpt"),
				"UVM001.T2");*/

		if (!data.get("docdateoptr").equals("all")) {
			if (data.get("fromDate") != "" && data.get("toDate") != "") {
				whereClause += ServerUtil.getDateFilter((String) data.get("fromDate"), (String) data.get("toDate"),
						(String) data.get("docdateoptr"), "SOP001.T4");
			}
		}
		sql += whereClause;
		int currentPage = (int) data.get("currentPage");
		int pageSize = (int) data.get("pageSize");
		int start = (currentPage - 1) * pageSize;
		sql += " ORDER BY SOP001.T4 DESC,SOP001.T1 DESC OFFSET " + start + " ROWS FETCH NEXT " + pageSize
				+ " ROWS ONLY ";
		PreparedStatement stmt = conn.prepareStatement(sql);
		ResultSet rs = stmt.executeQuery();

		while (rs.next()) {
			//sopData = new SalesOrderData();
			//sopData.setSyskey(rs.getString("SYSKEY"));
			//sopData.setSaveStatus(rs.getInt("SAVESTATUS"));
			dtlData.setT1(rs.getString("t1"));
			dtlData.setN26(rs.getInt("n26"));
			dtlData.setT2(rs.getString("t2"));
			dtlData.setT3(rs.getString("t3"));
			dtlData.setN6(rs.getDouble("n6"));
			dtlData.setN8(rs.getDouble("n8"));
			dtlData.setN14(rs.getDouble("n14"));
			dtlData.setN19(rs.getDouble("n19"));
			dtlData.setN23(rs.getDouble("n23"));
			dtlData.setN35(rs.getInt("n35"));
			double price= rs.getDouble("n14");
			int taxPercent = rs.getInt("n35");
			int taxAmt = (int) (price /taxPercent);
			dtlData.setTaxAmt(taxAmt);
			dtlData.setN53(rs.getDouble("n53"));
		/*	sopData.setCustomerCode(rs.getString("CustCode"));
			sopData.setCustomerName(rs.getString("CustName"));*/
			dtlList.add(dtlData);
		}
		//"SELECT COUNT(SOP001.syskey) AS totalCount FROM SOP001 inner join UVM002 ON SOP001.N1 = UVM002.syskey INNER JOIN UVM001 ON UVM001.syskey=UVM002.parentid "
		stmt = conn.prepareStatement(
				"select count(SOP001.syskey) as totalCount from SOP001 inner join SOP002 on SOP001.syskey = SOP002.parentid"
						+ whereClause);
		rs = stmt.executeQuery();
		if (rs.next())
			totalCount = rs.getInt("totalCount");

		result.put("dtlList", dtlList);
		result.put("totalCount", totalCount);
		return result;
	}
}
