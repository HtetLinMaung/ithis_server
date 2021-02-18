package com.nirvasoft.web.pos.dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;

import org.springframework.stereotype.Repository;

import com.nirvasoft.web.pos.model.CommonData;
import com.nirvasoft.web.pos.model.PreFixData;
import com.nirvasoft.web.pos.model.StockData;
import com.nirvasoft.web.pos.model.StockHoldingData;
import com.nirvasoft.web.pos.model.StockWHData;
import com.nirvasoft.web.pos.util.CommonEnum;
import com.nirvasoft.web.pos.util.ServerUtil;
import com.nirvasoft.web.pos.util.SyskeyUtil;
@Repository
public class StockDao {
	public CommonData loadCompanyInformation(Connection conn) throws SQLException {
		CommonData companyInfo = new CommonData();
		String sql = " SELECT SystemSetup.n15 AS IsStockCodeAuto " + " FROM UVM013 SystemSetup";

		PreparedStatement stat = conn.prepareStatement(sql);
		ResultSet rs = stat.executeQuery();
		if (rs.next()) {
			companyInfo.setT1(rs.getString("IsStockCodeAuto"));
		}
		return companyInfo;
	}
	public String getStockCodeCatGroup(StockData data, Connection conn) {
		String ref = "";
		String catcode = "";
		String groupcode = "";
		try {
			ref = getmaxCodeByStockGroupCategory(data.getN17(), data.getN33(), conn);

			if (ref.equals("")) {
				if (data.getCategorycode().equals("")) {
					catcode = "00";
				}
				if (data.getGroupcode().equals("")) {
					groupcode = "00";
				}
				ref = catcode + groupcode + "0001";
			} else {
				String catgrpCode = catcode + groupcode;
				String fix = ref.substring(catgrpCode.length());
				String postfix = ServerUtil.nextID(fix);
				ref = catgrpCode + postfix;
			}
		} catch (SQLException e) {
			e.printStackTrace();
		}
		return ref;
	}
	public String getmaxCodeByStockGroupCategory(String groupSK, String categorySK, Connection conn)
			throws SQLException {
		String ref = "";
		String sql = " SELECT ISNULL(MAX(t2),'') AS t2 FROM STK001 Stock WHERE n17=? AND n33=?";

		PreparedStatement stat = conn.prepareStatement(sql);
		stat.setString(1, groupSK);
		stat.setString(2, categorySK);
		ResultSet rs = stat.executeQuery();

		if (rs.next()) {
			ref = rs.getString("t2");
		}
		return ref;
	}
	public String getStockCode(Connection conn) {
		String ref = "";
		PreFixDao prefixdao = new PreFixDao();
		PreFixData prefixData = new PreFixData();
		try {
			ref = prefixdao.getStockMaxNumber(conn);
			if (ref.equals("")) {
				prefixData = prefixdao.findPrefix(CommonEnum.StockTransactionType.Stock.getCode(), 0, "0", conn);
				ref = prefixData.getT2() + prefixData.getT3();

				if (ref.equals("")) {
					ref = "000001";
				} else {
					ref = ref + 1;
				}
			} else {
				ref = ServerUtil.nextID(ref);
			}
		} catch (SQLException e) {
			e.printStackTrace();
		}
		return ref;
	}
	public int getstockCodeExist(String stkCode, String stksk, Connection conn) throws SQLException {
		int isexist = 0;
		String sql = "SELECT COUNT(t2) AS count FROM STK001 WHERE t2=? AND recordstatus<> 4 And syskey<> ?";

		PreparedStatement stat = conn.prepareStatement(sql);
		stat.setString(1, stkCode);
		stat.setString(2, stksk);
		ResultSet rs = stat.executeQuery();

		if (rs.next()) {
			isexist = rs.getInt("count");
		}
		return isexist;
	}
	public int getstockOtherCodeExist(String stkOtherCode, Connection conn) throws SQLException {
		int isexist = 0;
		String sql = "SELECT COUNT(t1) AS count FROM STK001 WHERE t1=? AND recordstatus<> 4 ";

		PreparedStatement stat = conn.prepareStatement(sql);
		stat.setString(1, stkOtherCode);
		ResultSet rs = stat.executeQuery();

		if (rs.next()) {
			isexist = rs.getInt("count");
		}
		return isexist;
	}
	public HashMap<String, Object> saveStock(StockData data, Connection conn) throws SQLException {
		int effectedRow = 0;
		ArrayList<String> syskeyList = new ArrayList<>();
		HashMap<String, Object> result = new HashMap<>();
		String sql = " INSERT INTO STK001 (" + "syskey,createddate,modifieddate,userid,username,"
				+ "territorycode,salescode,projectcode,ref1,ref2," + "ref3,ref4,ref5,ref6,"
				+ "RecordStatus,SyncStatus,SyncBatch,t1,t2," + "t3,t4,t5,t6,t7," + "t8,t9,t10,n1,n2,"
				+ "n3,n4,n5,n6,n7," + "n8,n9,n10,n11,n12," + "n13,n14,n15,n16,n17," + "n18,n19,n20,n21,n22, "
				+ "n23,n24,n25,n26,n27," + "n28,n29,n30,n31,n32," + "n33,n34,n35,n36,UserSysKey,"
				+ "n37,n38,n39,t11,n40," + "n41,n42,n43,n44,n45," + "n46,n47,n48,t12,t13," + "n49,n50,n51,n52,n53,"
				+ "n54,n55,n56,t14,n57," + "n58,t15,n59,n60,n61," + "n62,n63,n64,n65,n66," + "t16,t17,t18,t19,n67,"
				+ "n68,n69,n70,n71,n72) " + "VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?,"
				+ "?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?,"
				+ "?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?,"
				+ "?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?,"
				+ "?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?," + "?, ?, ?, ?, ?,?, ?, ?, ?  )";

		PreparedStatement stat = conn.prepareStatement(sql);
		String currentDate = ServerUtil.getCurrentDate();
		int i = 1;
		stat.setString(i++, data.getSyskey());
		stat.setString(i++, currentDate);// createddate
		stat.setString(i++, currentDate);// modifieddate
		stat.setString(i++, data.getUserid());//
		stat.setString(i++, data.getUsername());

		stat.setLong(i++, Long.parseLong(data.getTerritorycode())); // territorycode
		stat.setLong(i++, Long.parseLong(data.getSalescode())); // salescode
		stat.setLong(i++, Long.parseLong(data.getProjectcode())); // projectcode
		stat.setLong(i++, Long.parseLong(data.getRef1())); // ref1
		stat.setLong(i++, Long.parseLong(data.getRef2())); // ref2

		stat.setLong(i++, Long.parseLong(data.getRef3())); // ref3
		stat.setLong(i++, Long.parseLong(data.getRef4())); // ref4
		stat.setLong(i++, Long.parseLong(data.getRef5())); // ref5
		stat.setLong(i++, Long.parseLong(data.getRef6())); // ref6

		stat.setInt(i++, data.getRecordStatus()); // RecordStatus
		stat.setInt(i++, data.getSyncStatus());
		stat.setString(i++, data.getSyncBatch());
		stat.setString(i++, data.getT1()); // OtherCode
		stat.setString(i++, data.getT2()); // Stock Code

		stat.setString(i++, data.getT3()); // Description
		stat.setString(i++, data.getT4()); // Short Description
		stat.setString(i++, data.getT5()); // UOM
		stat.setString(i++, data.getT6()); // CurrCode
		stat.setString(i++, data.getT7()); // PriceCurrCode

		stat.setString(i++, data.getT8()); // Remark
		stat.setString(i++, data.getT9()); // LastPurDate
		stat.setString(i++, currentDate); // LastSaleDate
		stat.setInt(i++, data.getN1()); // Costtype
		stat.setInt(i++, data.getN2()); // InActive

		stat.setInt(i++, data.getN3()); // IsMultiLevel
		stat.setString(i++, data.getN4()); // CCSK
		stat.setString(i++, data.getN5()); // DeptSK
		stat.setString(i++, data.getN6()); // LastVendorSK
		stat.setString(i++, data.getN7()); // DiscountSK

		stat.setString(i++, data.getN8()); // StkAccSK
		stat.setString(i++, data.getN9()); // PurchaseAccSK
		stat.setString(i++, data.getN10()); // PurReturnAccSK
		stat.setString(i++, data.getN11()); // SalesAccSK
		stat.setString(i++, data.getN12()); // SaleReturnAccSK

		stat.setString(i++, data.getN13()); // COSAccSK
		stat.setString(i++, data.getN14()); // DMGAccSK
		stat.setString(i++, data.getN15()); // ClassificationSK
		stat.setString(i++, data.getN16()); // BrandSK
		stat.setString(i++, data.getN17()); // StkGroupSK

		stat.setString(i++, data.getN18()); // PackingSK
		stat.setDouble(i++, data.getN19()); // AvgCost
		stat.setDouble(i++, data.getN20()); // StandardCost
		stat.setDouble(i++, data.getN21()); // LastCost
		stat.setDouble(i++, data.getN22()); // Price

		stat.setDouble(i++, data.getN23()); // CurrRate
		stat.setDouble(i++, data.getN24()); // Minimum
		stat.setDouble(i++, data.getN25()); // Maximum
		stat.setDouble(i++, data.getN26()); // EOQ
		stat.setDouble(i++, data.getN27()); // ReOrderQty

		stat.setDouble(i++, data.getN28()); // ReOrderLevel
		stat.setDouble(i++, data.getN29()); // SaleOrderQty
		stat.setDouble(i++, data.getN30()); // PurOrderQty
		stat.setInt(i++, data.getN31()); // CostingMethod
		stat.setInt(i++, data.getN32()); // R2

		stat.setString(i++, data.getN33()); // StockCategory
		stat.setString(i++, data.getN34()); // HierarchySysKey
		stat.setDouble(i++, data.getN35()); // AllocateQty
		stat.setString(i++, data.getN36()); // UOMSK
		stat.setString(i++, data.getUserSysKey());

		stat.setInt(i++, data.getN37()); // Itemtype
		stat.setString(i++, data.getN38()); // BaseUOMSK
		stat.setDouble(i++, data.getN39()); // BaseStockRatio
		stat.setString(i++, "*"); // Operator
		stat.setInt(i++, data.getN40()); // IsUseBatchSerialNo

		stat.setInt(i++, data.getN41()); // BatchOrSerial
		stat.setInt(i++, data.getN42()); // IsAllowDuplicateForBatchOrSerial
		stat.setInt(i++, data.getN43()); // IsSaleFromSingleBatch
		stat.setInt(i++, data.getN44()); // IsAlternativeReference
		stat.setInt(i++, data.getN45()); // IsSalesByDate

		stat.setInt(i++, data.getN46()); // IsUseByDate
		stat.setDouble(i++, data.getN47()); // ShelfLife
		stat.setInt(i++, data.getN48()); // BatchSerialRunningNoType
		stat.setString(i++, data.getT12()); // BatchSerialSperator
		stat.setString(i++, data.getT13()); // BatchSerialPrefix

		stat.setInt(i++, data.getN49()); // IsGenerateBatchSerialNoWhenGoodReceive
		stat.setInt(i++, data.getN50()); // IsSellingQtyUseMultiUnits
		stat.setInt(i++, data.getN51()); // IsSellingPriceUseMultiUnits
		stat.setInt(i++, data.getN52()); // IsBuyingQtyUseMultiUnits
		stat.setInt(i++, data.getN53()); // IsBuyingPriceUseMultiUnits

		stat.setInt(i++, data.getN54()); // ShelfLifeType
		stat.setInt(i++, data.getN55()); // IsDimension
		stat.setInt(i++, data.getN56()); // IsAutoConversion
		stat.setString(i++, data.getT14()); // ModelNo
		stat.setString(i++, data.getN57()); // MetrixCodeJunSK

		stat.setInt(i++, data.getN58()); // FNBItemType
		stat.setString(i++, data.getT15()); // Description3
		stat.setInt(i++, data.getN59()); // OpenPrice
		stat.setInt(i++, data.getN60()); // Taxable
		stat.setInt(i++, data.getN61()); // Scalable

		stat.setInt(i++, data.getN62()); // PriceInclusiveTaxAndServiceCharges
		stat.setInt(i++, data.getN63()); // PrintSequence
		stat.setInt(i++, data.getN64()); // OpenDescritpion
		stat.setInt(i++, data.getN65()); // MultiDiscountItem
		stat.setInt(i++, data.getN66()); // FixedPriceItem

		stat.setString(i++, data.getT16()); // JobSKRef
		stat.setString(i++, data.getT17()); // TReference1
		stat.setString(i++, data.getT18()); // TReference2
		stat.setString(i++, data.getT19()); // TReference3
		stat.setString(i++, data.getN67()); // NReference1

		stat.setString(i++, data.getN68()); // NReference2
		stat.setString(i++, data.getN69()); // NReference3
		stat.setInt(i++, data.getN70()); // NReference4 (for priceBand)
		stat.setInt(i++, data.getN71()); // NReference5 (for priceBand)
		stat.setInt(i++, data.getN72()); // NReference6 (for priceBand)

		effectedRow = stat.executeUpdate();
		syskeyList.add(data.getSyskey());
		result.put("stocksyskey", data.getSyskey());
		result.put("stockcode", data.getT2());
		result.put("effectedRow", effectedRow);
		return result;
	}
	public HashMap<String, Object> saveStockHolding(StockData data, Connection conn) throws Exception {
		ArrayList<String> syskeyList = new ArrayList<>();
		HashMap<String, Object> result = new HashMap<>();
		int effectedRow = 0;
		for (StockHoldingData detail : data.getStockholding()) {
			if (detail.getSyskey().isEmpty() || detail.getSyskey().equals("0")) {
				detail.setSyskey(SyskeyUtil.getSyskey() + "");
				detail.setParentid(data.getSyskey());
				effectedRow = saveStockHoldingData(detail, data.getUserid(), data.getUsername(), conn);
			}
			if (effectedRow < 1)
				throw new Exception("Saving failed!!");

			syskeyList.add(detail.getSyskey());
		}
		result.put("stockHolingsyskeyList", syskeyList);
		result.put("effectedRow", effectedRow);
		return result;
	}
	private int saveStockHoldingData(StockHoldingData data, String userId, String userName, Connection conn)
			throws SQLException {
		int effectedRow = 0;
		String currentDate = ServerUtil.getCurrentDate();

		String sql = " INSERT INTO STK002 (" + "syskey,createddate,modifieddate,userid,username,"
				+ "parentid,RecordStatus,SyncStatus,SyncBatch,n1," + "n2,n3,n4,n5,n6," + "n7,UserSysKey)"
				+ "VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";

		PreparedStatement stat = conn.prepareStatement(sql);
		int i = 1;
		stat.setString(i++, data.getSyskey());
		stat.setString(i++, currentDate);
		stat.setString(i++, currentDate);
		stat.setString(i++, userId);
		stat.setString(i++, userName);

		stat.setString(i++, data.getParentid());
		stat.setInt(i++, data.getRecordStatus());
		stat.setInt(i++, data.getSyncStatus());
		stat.setString(i++, data.getSyncBatch());
		stat.setString(i++, data.getN1());// WarehousSK

		stat.setString(i++, data.getN2());// BinSK
		stat.setDouble(i++, data.getN3());// Qty
		stat.setInt(i++, data.getN4());// Marked
		stat.setInt(i++, data.getN5());// R1
		stat.setInt(i++, data.getN6());// R2

		stat.setString(i++, data.getN7());// R3
		stat.setString(i++, data.getUserSysKey());// R3

		effectedRow = stat.executeUpdate();
		return effectedRow;
	}

	public HashMap<String, Object> saveStockWH(StockData data, Connection conn) throws Exception {
		ArrayList<String> syskeyList = new ArrayList<>();
		HashMap<String, Object> result = new HashMap<>();
		int effectedRow = 0;
		for (StockWHData detail : data.getStockWH()) {
			if (detail.getSyskey().isEmpty() || detail.getSyskey().equals("0")) {
				detail.setSyskey(SyskeyUtil.getSyskey() + "");
				detail.setParentid(data.getSyskey());
				effectedRow = saveStockWHData(detail, data.getUserid(), data.getUsername(), conn);
			}
			if (effectedRow < 1)
				throw new Exception("Saving failed!!");

			syskeyList.add(detail.getSyskey());
		}
		result.put("stockWHsyskeyList", syskeyList);
		result.put("effectedRow", effectedRow);
		return result;
	}

	private int saveStockWHData(StockWHData data, String userId, String userName, Connection conn) throws SQLException {
		int effectedRow = 0;
		String currentDate = ServerUtil.getCurrentDate();

		String sql = " INSERT INTO STK003 (" + "syskey,createddate,modifieddate,userid,username,"
				+ "parentid,RecordStatus,SyncStatus,SyncBatch,n1," + "n2,n3,n4,n5,n6," + "n7,n8,n9,n10,n11,"
				+ "n12,n13,n14,n15,n16," + "n17,n18,n19,n20,n21," + "n22,UserSysKey)"
				+ "VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?,?,?,?," + "?,?,?,?,?,?,?,?,?,?,?,?)";

		PreparedStatement stat = conn.prepareStatement(sql);
		int i = 1;
		stat.setString(i++, data.getSyskey());
		stat.setString(i++, currentDate);
		stat.setString(i++, currentDate);
		stat.setString(i++, userId);
		stat.setString(i++, userName);

		stat.setString(i++, data.getParentid());
		stat.setInt(i++, data.getRecordStatus());
		stat.setInt(i++, data.getSyncStatus());
		stat.setString(i++, data.getSyncBatch());
		stat.setString(i++, data.getN1());// WarehousSK

		stat.setString(i++, data.getN2());// BinSK
		stat.setString(i++, data.getN3());// Stock Account
		stat.setString(i++, data.getN4());// Purchase Account
		stat.setString(i++, data.getN5());// Purchase Return Account
		stat.setString(i++, data.getN6());// Sales Account

		stat.setString(i++, data.getN7());// Sales Return Account
		stat.setString(i++, data.getN8());// COS Account
		stat.setString(i++, data.getN9());// Damage Account
		stat.setDouble(i++, data.getN10());// AvgCost
		stat.setDouble(i++, data.getN11());// StandarCost

		stat.setDouble(i++, data.getN12());// LastCost
		stat.setDouble(i++, data.getN13());// Minimum
		stat.setDouble(i++, data.getN14());// Maximum
		stat.setDouble(i++, data.getN15());// EOQ
		stat.setDouble(i++, data.getN16());// ReOrderQty

		stat.setDouble(i++, data.getN17());// ReOrderLevel
		stat.setDouble(i++, data.getN18());// SaleOrderQty
		stat.setDouble(i++, data.getN19());// PurOrderQty
		stat.setInt(i++, data.getN20());// EOQ
		stat.setInt(i++, data.getN21());// ReOrderQty

		stat.setString(i++, data.getN22());// R3
		stat.setString(i++, data.getUserSysKey());// UserSK

		effectedRow = stat.executeUpdate();
		return effectedRow;
	}
	public CommonData selectoldCatandgroup(String stocksk, Connection conn) throws SQLException {
		CommonData result = new CommonData();
		String sql = " SELECT n17 AS StkGroupSK,n33 AS StockCategory FROM STK001 Stock WHERE syskey=? ";

		PreparedStatement stat = conn.prepareStatement(sql);
		stat.setString(1, stocksk);
		ResultSet rs = stat.executeQuery();

		if (rs.next()) {
			result.setT1(rs.getString("StkGroupSK"));
			result.setT2(rs.getString("StockCategory"));
		}
		return result;
	}

	public HashMap<String, Object> updateStock(StockData data, Connection conn) throws SQLException {
		int effectedRow = 0;
		ArrayList<String> syskeyList = new ArrayList<>();
		HashMap<String, Object> result = new HashMap<>();
		String sql = " UPDATE STK001 SET modifieddate=?,userid=?,username=?,"
				+ "territorycode=?,salescode=?,projectcode=?,ref1=?,ref2=?," + "ref3=?,ref4=?,ref5=?,ref6=?,"
				+ "RecordStatus=?,SyncStatus=?,SyncBatch=?,t1=?,t2=?," + "t3=?,t4=?,t5=?,t6=?,t7=?,"
				+ "t8=?,t9=?,t10=?,n1=?,n2=?," + "n3=?,n4=?,n5=?,n6=?,n7=?," + "n8=?,n9=?,n10=?,n11=?,n12=?,"
				+ "n13=?,n14=?,n15=?,n16=?,n17=?," + "n18=?,n19=?,n20=?,n21=?,n22=?, "
				+ "n23=?,n24=?,n25=?,n26=?,n27=?," + "n28=?,n29=?,n30=?,n31=?,n32=?,"
				+ "n33=?,n34=?,n35=?,n36=?,UserSysKey=?," + "n37=?,n38=?,n39=?,t11=?,n40=?,"
				+ "n41=?,n42=?,n43=?,n44=?,n45=?," + "n46=?,n47=?,n48=?,t12=?,t13=?," + "n49=?,n50=?,n51=?,n52=?,n53=?,"
				+ "n54=?,n55=?,n56=?,t14=?,n57=?," + "n58=?,t15=?,n59=?,n60=?,n61=?," + "n62=?,n63=?,n64=?,n65=?,n66=?,"
				+ "t16=?,t17=?,t18=?,t19=?,n67=?," + "n68=?,n69=?,n70=?,n71=?,n72=? " + " WHERE syskey=? ";

		PreparedStatement stat = conn.prepareStatement(sql);
		String currentDate = ServerUtil.getCurrentDate();
		int i = 1;

		// stat.setString(i++, currentDate);//createddate
		stat.setString(i++, currentDate);// modifieddate
		stat.setString(i++, data.getUserid());//
		stat.setString(i++, data.getUsername());

		stat.setLong(i++, Long.parseLong(data.getTerritorycode())); // territorycode
		stat.setLong(i++, Long.parseLong(data.getSalescode())); // salescode
		stat.setLong(i++, Long.parseLong(data.getProjectcode())); // projectcode
		stat.setLong(i++, Long.parseLong(data.getRef1())); // ref1
		stat.setLong(i++, Long.parseLong(data.getRef2())); // ref2

		stat.setLong(i++, Long.parseLong(data.getRef3())); // ref3
		stat.setLong(i++, Long.parseLong(data.getRef4())); // ref4
		stat.setLong(i++, Long.parseLong(data.getRef5())); // ref5
		stat.setLong(i++, Long.parseLong(data.getRef6())); // ref6

		stat.setInt(i++, data.getRecordStatus()); // RecordStatus
		stat.setInt(i++, data.getSyncStatus());
		stat.setString(i++, data.getSyncBatch());
		stat.setString(i++, data.getT1()); // OtherCode
		stat.setString(i++, data.getT2()); // Stock Code

		stat.setString(i++, data.getT3()); // Description
		stat.setString(i++, data.getT4()); // Short Description
		stat.setString(i++, data.getT5()); // UOM
		stat.setString(i++, data.getT6()); // CurrCode
		stat.setString(i++, data.getT7()); // PriceCurrCode

		stat.setString(i++, data.getT8()); // Remark
		stat.setString(i++, data.getT9()); // LastPurDate
		stat.setString(i++, data.getT10()); // LastSaleDate
		stat.setInt(i++, data.getN1()); // Costtype
		stat.setInt(i++, data.getN2()); // InActive

		stat.setInt(i++, data.getN3()); // IsMultiLevel
		stat.setString(i++, data.getN4()); // CCSK
		stat.setString(i++, data.getN5()); // DeptSK
		stat.setString(i++, data.getN6()); // LastVendorSK
		stat.setString(i++, data.getN7()); // DiscountSK

		stat.setString(i++, data.getN8()); // StkAccSK
		stat.setString(i++, data.getN9()); // PurchaseAccSK
		stat.setString(i++, data.getN10()); // PurReturnAccSK
		stat.setString(i++, data.getN11()); // SalesAccSK
		stat.setString(i++, data.getN12()); // SaleReturnAccSK

		stat.setString(i++, data.getN13()); // COSAccSK
		stat.setString(i++, data.getN14()); // DMGAccSK
		stat.setString(i++, data.getN15()); // ClassificationSK
		stat.setString(i++, data.getN16()); // BrandSK
		stat.setString(i++, data.getN17()); // StkGroupSK

		stat.setString(i++, data.getN18()); // PackingSK
		stat.setDouble(i++, data.getN19()); // AvgCost
		stat.setDouble(i++, data.getN20()); // StandardCost
		stat.setDouble(i++, data.getN21()); // LastCost
		stat.setDouble(i++, data.getN22()); // Price

		stat.setDouble(i++, data.getN23()); // CurrRate
		stat.setDouble(i++, data.getN24()); // Minimum
		stat.setDouble(i++, data.getN25()); // Maximum
		stat.setDouble(i++, data.getN26()); // EOQ
		stat.setDouble(i++, data.getN27()); // ReOrderQty

		stat.setDouble(i++, data.getN28()); // ReOrderLevel
		stat.setDouble(i++, data.getN29()); // SaleOrderQty
		stat.setDouble(i++, data.getN30()); // PurOrderQty
		stat.setInt(i++, data.getN31()); // CostingMethod
		stat.setInt(i++, data.getN32()); // R2

		stat.setString(i++, data.getN33()); // StockCategory
		stat.setString(i++, data.getN34()); // HierarchySysKey
		stat.setDouble(i++, data.getN35()); // AllocateQty
		stat.setString(i++, data.getN36()); // UOMSK
		stat.setString(i++, data.getUserSysKey());

		stat.setInt(i++, data.getN37()); // Itemtype
		stat.setString(i++, data.getN38()); // BaseUOMSK
		stat.setDouble(i++, data.getN39()); // BaseStockRatio
		stat.setString(i++, data.getT11()); // Operator
		stat.setInt(i++, data.getN40()); // IsUseBatchSerialNo

		stat.setInt(i++, data.getN41()); // BatchOrSerial
		stat.setInt(i++, data.getN42()); // IsAllowDuplicateForBatchOrSerial
		stat.setInt(i++, data.getN43()); // IsSaleFromSingleBatch
		stat.setInt(i++, data.getN44()); // IsAlternativeReference
		stat.setInt(i++, data.getN45()); // IsSalesByDate

		stat.setInt(i++, data.getN46()); // IsUseByDate
		stat.setDouble(i++, data.getN47()); // ShelfLife
		stat.setInt(i++, data.getN48()); // BatchSerialRunningNoType
		stat.setString(i++, data.getT12()); // BatchSerialSperator
		stat.setString(i++, data.getT13()); // BatchSerialPrefix

		stat.setInt(i++, data.getN49()); // IsGenerateBatchSerialNoWhenGoodReceive
		stat.setInt(i++, data.getN50()); // IsSellingQtyUseMultiUnits
		stat.setInt(i++, data.getN51()); // IsSellingPriceUseMultiUnits
		stat.setInt(i++, data.getN52()); // IsBuyingQtyUseMultiUnits
		stat.setInt(i++, data.getN53()); // IsBuyingPriceUseMultiUnits

		stat.setInt(i++, data.getN54()); // ShelfLifeType
		stat.setInt(i++, data.getN55()); // IsDimension
		stat.setInt(i++, data.getN56()); // IsAutoConversion
		stat.setString(i++, data.getT14()); // ModelNo
		stat.setString(i++, data.getN57()); // MetrixCodeJunSK

		stat.setInt(i++, data.getN58()); // FNBItemType
		stat.setString(i++, data.getT15()); // Description3
		stat.setInt(i++, data.getN59()); // OpenPrice
		stat.setInt(i++, data.getN60()); // Taxable
		stat.setInt(i++, data.getN61()); // Scalable

		stat.setInt(i++, data.getN62()); // PriceInclusiveTaxAndServiceCharges
		stat.setInt(i++, data.getN63()); // PrintSequence
		stat.setInt(i++, data.getN64()); // OpenDescritpion
		stat.setInt(i++, data.getN65()); // MultiDiscountItem
		stat.setInt(i++, data.getN66()); // FixedPriceItem

		stat.setString(i++, data.getT16()); // JobSKRef
		stat.setString(i++, data.getT17()); // TReference1
		stat.setString(i++, data.getT18()); // TReference2
		stat.setString(i++, data.getT19()); // TReference3
		stat.setString(i++, data.getN67()); // NReference1

		stat.setString(i++, data.getN68()); // NReference2
		stat.setString(i++, data.getN69()); // NReference3
		stat.setInt(i++, data.getN70()); // NReference4 (for priceBand)
		stat.setInt(i++, data.getN71()); // NReference5 (for priceBand)
		stat.setInt(i++, data.getN72()); // NReference6 (for priceBand)

		stat.setString(i++, data.getSyskey());

		effectedRow = stat.executeUpdate();
		syskeyList.add(data.getSyskey());
		result.put("stocksyskey", data.getSyskey());
		result.put("stockcode", data.getT2());
		result.put("effectedRow", effectedRow);
		return result;
	}

	public HashMap<String, Object> updateStockHolding(StockData data, Connection conn) throws Exception {
		int effectedRow = 0;
		int count = 0;
		ArrayList<String> syskeyList = new ArrayList<>();
		HashMap<String, Object> result = new HashMap<>();

		for (StockHoldingData stkHolding : data.getStockholding()) {

			// to delete all records with locSK and binSK and StkSK

			if (stkHolding.getRecordStatus() == 4) {
				// to check that stock has already transaction

				count = selectStockDetailDatawithBin(stkHolding.getParentid(), stkHolding.getN1(), stkHolding.getN2(),
						conn);

				if (count <= 0) {
					count += selectInvDetailDatawithBin(stkHolding.getParentid(), stkHolding.getN1(),
							stkHolding.getN2(), conn);
				}
				if (count <= 0) {
					count += selectpopDetailDatawithBin(stkHolding.getParentid(), stkHolding.getN1(),
							stkHolding.getN2(), conn);
				}
			}
			if (count > 0) {
				throw new Exception(
						"The bin of the location cannot be removed as it has already been used for this stock. ");
			}

		}

		for (StockHoldingData stkholding : data.getStockholding()) {
			stkholding.setParentid(data.getSyskey());
			if (stkholding.getSyskey().equals("0")) {
				stkholding.setSyskey(SyskeyUtil.getSyskey() + "");
				effectedRow = saveStockHoldingData(stkholding, data.getUserid(), data.getUsername(), conn);
			} else if (stkholding.getRecordStatus() == 4) {
				effectedRow = updateStockHoldingRecordStataus(stkholding.getSyskey(), stkholding.getRecordStatus(),
						conn);
			} else {
				effectedRow = updateStockHoldingData(stkholding, data.getUserid(), data.getUsername(), conn);
			}

			if (stkholding.getRecordStatus() != 4) {
				syskeyList.add(stkholding.getSyskey());
			}
		}
		result.put("stockholdingsyskey", syskeyList);
		result.put("effectedRow", effectedRow);
		return result;
	}

	public HashMap<String, Object> updateStockWH(StockData data, Connection conn) throws Exception {
		int effectedRow = 0;
		int count = 0;
		ArrayList<String> syskeyList = new ArrayList<>();
		HashMap<String, Object> result = new HashMap<>();
		for (StockWHData stkWH : data.getStockWH()) {

			// to delete all records with locSK and StkSK

			if (stkWH.getRecordStatus() == 4) {
				// to check that stock has already transaction

				count = selectStockDetailDatawithLoc(stkWH.getParentid(), stkWH.getN1(), conn);

				if (count <= 0) {
					count += selectInvDetailDatawithLoc(stkWH.getParentid(), stkWH.getN1(), conn);
				}
				if (count <= 0) {
					count += selectpopDetailDatawithLoc(stkWH.getParentid(), stkWH.getN1(), conn);
				}
				if (count <= 0) {
					count += selectposDetailDatawithLoc(stkWH.getParentid(), stkWH.getN1(), conn);
				}
			}
			if (count > 0) {
				throw new Exception("The location cannot be removed as it has already been used for this stock. ");
			}

		}

		for (StockWHData stkWH : data.getStockWH()) {
			stkWH.setParentid(data.getSyskey());

			if (stkWH.getSyskey().equals("0")) {
				stkWH.setSyskey(SyskeyUtil.getSyskey() + "");
				effectedRow = saveStockWHData(stkWH, data.getUserid(), data.getUsername(), conn);
			} else if (stkWH.getRecordStatus() == 4) {
				effectedRow = updateStockWareHouseRecordStataus(stkWH.getSyskey(), conn);
			} else {
				effectedRow = updateStockWHData(stkWH, conn);
			}
			if (stkWH.getRecordStatus() != 4) {
				syskeyList.add(stkWH.getSyskey());
			}
		}
		result.put("stockWHsyskeyList", syskeyList);
		result.put("effectedRow", effectedRow);
		return result;
	}
	public int getExistOthercodeorNot(String stocksk, String othercode, Connection conn) throws SQLException {
		int isexist = 0;
		String sql = "SELECT COUNT(t1) AS count FROM STK001 WHERE syskey!=? AND t1=? AND recordstatus<> 4 ";

		PreparedStatement stat = conn.prepareStatement(sql);
		stat.setString(1, stocksk);
		stat.setString(2, othercode);
		ResultSet rs = stat.executeQuery();

		if (rs.next()) {
			isexist = rs.getInt("count");
		}
		return isexist;
	}
	public String getstockBarCodeExist(String id, String parentid, String lvlSyskey, Connection conn)
			throws SQLException {

		String code = "";
		String sql = "SELECT t1 AS code FROM STK005 WHERE t1=? AND parentid<>? AND n1<>? AND recordstatus<> 4 ";
		PreparedStatement stat = conn.prepareStatement(sql);
		stat.setString(1, id);
		stat.setString(2, parentid);
		stat.setString(3, lvlSyskey);
		ResultSet rs = stat.executeQuery();

		while (rs.next()) {
			code = rs.getString("code");
		}
		return code;
	}
	public int selectStockDetailDatawithBin(String id, String locsk, String binsk, Connection conn)
			throws SQLException {
		int effectedRow = 0;

		String sql = "SELECT COUNT(syskey) AS TCount FROM STK020 WHERE n1=? AND n2=? AND n3=? ";

		PreparedStatement stat = conn.prepareStatement(sql);
		stat.setLong(1, Long.parseLong(id));
		stat.setLong(2, Long.parseLong(locsk));
		stat.setLong(3, Long.parseLong(binsk));
		ResultSet rs = stat.executeQuery();

		if (rs.next()) {
			effectedRow = rs.getInt("TCount");
		}
		return effectedRow;
	}

	public int selectInvDetailDatawithBin(String id, String locsk, String binsk, Connection conn) throws SQLException {
		int effectedRow = 0;

		String sql = "SELECT COUNT(syskey) AS TCount FROM SOP002 WHERE n1=? AND n2=? AND n3=? ";

		PreparedStatement stat = conn.prepareStatement(sql);
		stat.setLong(1, Long.parseLong(id));
		stat.setLong(2, Long.parseLong(locsk));
		stat.setLong(3, Long.parseLong(binsk));
		ResultSet rs = stat.executeQuery();

		if (rs.next()) {
			effectedRow = rs.getInt("TCount");
		}
		return effectedRow;
	}

	public int selectpopDetailDatawithBin(String id, String locsk, String binsk, Connection conn) throws SQLException {
		int effectedRow = 0;

		String sql = "SELECT COUNT(syskey) AS TCount FROM POP002 WHERE n1=? AND n2=? AND n3=? ";

		PreparedStatement stat = conn.prepareStatement(sql);
		stat.setLong(1, Long.parseLong(id));
		stat.setLong(2, Long.parseLong(locsk));
		stat.setLong(3, Long.parseLong(binsk));
		ResultSet rs = stat.executeQuery();

		if (rs.next()) {
			effectedRow = rs.getInt("TCount");
		}
		return effectedRow;
	}
	public int updateStockHoldingRecordStataus(String syskey, Integer recordstatus, Connection conn)
			throws SQLException {
		int effectedRow = 0;
		String sql = " DELETE FROM STK002 " + " WHERE syskey=? ";

		PreparedStatement stat = conn.prepareStatement(sql);

		// stat.setInt(1, recordstatus);
		stat.setString(1, syskey);
		effectedRow = stat.executeUpdate();
		return effectedRow;
	}

	public int updateStockWareHouseRecordStataus(String syskey, Connection conn) throws SQLException {
		int effectedRow = 0;
		String sql = " DELETE FROM STK003 " + " WHERE syskey=? ";

		PreparedStatement stat = conn.prepareStatement(sql);

		stat.setString(1, syskey);
		effectedRow = stat.executeUpdate();
		return effectedRow;
	}
	public int updateStockHoldingData(StockHoldingData data, String userId, String userName, Connection conn)
			throws SQLException {
		int effectedRow = 0;
		String currentDate = ServerUtil.getCurrentDate();

		String sql = " UPDATE STK002 SET " + "modifieddate=?,userid=?,username=?,"
				+ "parentid=?,RecordStatus=?,SyncStatus=?,SyncBatch=?,n1=?," + "n2=?,n3=?,n4=?,n5=?,n6=?,"
				+ "n7=?,UserSysKey=?" + " WHERE syskey=?";

		PreparedStatement stat = conn.prepareStatement(sql);
		int i = 1;

		stat.setString(i++, currentDate);
		stat.setString(i++, userId);
		stat.setString(i++, userName);

		stat.setString(i++, data.getParentid());
		stat.setInt(i++, data.getRecordStatus());
		stat.setInt(i++, data.getSyncStatus());
		stat.setString(i++, data.getSyncBatch());
		stat.setString(i++, data.getN1());// WarehousSK

		stat.setString(i++, data.getN2());// BinSK
		stat.setDouble(i++, data.getN3());// Qty
		stat.setInt(i++, data.getN4());// Marked
		stat.setInt(i++, data.getN5());// R1
		stat.setInt(i++, data.getN6());// R2

		stat.setString(i++, data.getN7());// R3
		stat.setString(i++, data.getUserSysKey());// R3

		stat.setString(i++, data.getSyskey());

		effectedRow = stat.executeUpdate();
		return effectedRow;
	}
	public int updateStockWHData(StockWHData data, Connection conn) throws SQLException {
		int effectedRow = 0;
		String currentDate = ServerUtil.getCurrentDate();
		String sql = " UPDATE STK003 SET " + " modifieddate=?,userid=?,username=?,parentid=?,"
				+ "RecordStatus=?,SyncStatus=?,SyncBatch=?" + ",n1=?,n2=?,n3=?,n4=?,n5=?,n6=?"
				+ ",n7=?,n8=?,n9=?,n10=?,n11=?," + "n12=?,n13=?,n14=?,n15=?,n16=?," + "n17=?,n18=?,n19=?,n20=?,n21=?,"
				+ "n22=?,UserSysKey=?" + " WHERE Syskey=? ";

		PreparedStatement stat = conn.prepareStatement(sql);
		int i = 1;

		stat.setString(i++, currentDate);
		stat.setString(i++, data.getUserid());
		stat.setString(i++, data.getUsername());
		stat.setString(i++, data.getParentid());
		stat.setInt(i++, data.getRecordStatus());
		stat.setInt(i++, data.getSyncStatus());
		stat.setString(i++, data.getSyncBatch());

		stat.setString(i++, data.getN1());// WarehousSK
		stat.setString(i++, data.getN2());// BinSK
		stat.setString(i++, data.getN3());// StkAccSK
		stat.setString(i++, data.getN4());// PurchaseAccSK
		stat.setString(i++, data.getN5());// PurReturnAccSK
		stat.setString(i++, data.getN6());// SalesAccSK

		stat.setString(i++, data.getN7());// SaleReturnAccSK
		stat.setString(i++, data.getN8());// COS Account
		stat.setString(i++, data.getN9());// Damage Account
		stat.setDouble(i++, data.getN10());// AvgCost
		stat.setDouble(i++, data.getN11());// StandarCost

		stat.setDouble(i++, data.getN12());// LastCost
		stat.setDouble(i++, data.getN13());// Minimum
		stat.setDouble(i++, data.getN14());// Maximum
		stat.setDouble(i++, data.getN15());// EOQ
		stat.setDouble(i++, data.getN16());// ReOrderQty

		stat.setDouble(i++, data.getN17());// ReOrderLevel
		stat.setDouble(i++, data.getN18());// SaleOrderQty
		stat.setDouble(i++, data.getN19());// PurOrderQty
		stat.setInt(i++, data.getN20());// EOQ
		stat.setInt(i++, data.getN21());// ReOrderQty

		stat.setString(i++, data.getN22());// R3
		stat.setString(i++, data.getUserSysKey());// UserSyskey

		stat.setString(i++, data.getSyskey());

		effectedRow = stat.executeUpdate();
		return effectedRow;

	}
	public int selectStockDetailDatawithLoc(String id, String locsk, Connection conn) throws SQLException {
		int effectedRow = 0;

		String sql = "SELECT COUNT(syskey) AS TCount FROM STK020 WHERE n1=? AND n2=? ";

		PreparedStatement stat = conn.prepareStatement(sql);
		stat.setLong(1, Long.parseLong(id));
		stat.setLong(2, Long.parseLong(locsk));
		ResultSet rs = stat.executeQuery();

		if (rs.next()) {
			effectedRow = rs.getInt("TCount");
		}
		return effectedRow;
	}

	public int selectInvDetailDatawithLoc(String id, String locsk, Connection conn) throws SQLException {
		int effectedRow = 0;

		String sql = "SELECT COUNT(syskey) AS TCount FROM SOP002 WHERE n1=? AND n2=? ";

		PreparedStatement stat = conn.prepareStatement(sql);
		stat.setLong(1, Long.parseLong(id));
		stat.setLong(2, Long.parseLong(locsk));
		ResultSet rs = stat.executeQuery();

		if (rs.next()) {
			effectedRow = rs.getInt("TCount");
		}
		return effectedRow;
	}

	public int selectpopDetailDatawithLoc(String id, String locsk, Connection conn) throws SQLException {
		int effectedRow = 0;

		String sql = "SELECT COUNT(syskey) AS TCount FROM POP002 WHERE n1=? AND n2=? ";

		PreparedStatement stat = conn.prepareStatement(sql);
		stat.setLong(1, Long.parseLong(id));
		stat.setLong(2, Long.parseLong(locsk));
		ResultSet rs = stat.executeQuery();

		if (rs.next()) {
			effectedRow = rs.getInt("TCount");
		}
		return effectedRow;
	}

	public int selectposDetailDatawithLoc(String id, String locsk, Connection conn) throws SQLException {
		int effectedRow = 0;

		String sql = "SELECT COUNT(syskey) AS TCount FROM POS002 WHERE n1=? AND n2=?  ";

		PreparedStatement stat = conn.prepareStatement(sql);
		stat.setLong(1, Long.parseLong(id));
		stat.setLong(2, Long.parseLong(locsk));
		ResultSet rs = stat.executeQuery();

		if (rs.next()) {
			effectedRow = rs.getInt("TCount");
		}
		return effectedRow;
	}
	
	public Map<String, Object> FindStockList(HashMap<String, Object> data, Connection conn)throws SQLException {
	Map<String, Object> result = new HashMap<String, Object>();
		ArrayList<StockData> transDtlList = new ArrayList<>();
		
		String code = (String) data.get("code");
		String description = (String) data.get("description");
		String prefix = (String) data.get("prefix");
		
		String sql = "select s.t2 code,s.t3 description ,d.n3 Qty ,l.t1 LocCode,l.t2 LocDescription from stk001 s inner join stk002  d on s.syskey = d.parentid inner join stk006 l  on l.syskey = d.n1"
				+ " where s.n2 = 0 and s.recordstatus = 1";
		String whereClause = " AND s.RECORDSTATUS<>4 AND s.SYSKEY<>0";
		if(!("".equals(code)&& code.isEmpty()) ){
			whereClause += " AND (s.T2 LIKE ?  ) ";
		}
		
		if( !("".equals(description) && description.isEmpty())){
			whereClause += " AND ( s.T3 LIKE ? ) ";
		}
		sql += whereClause;
		
		PreparedStatement stat = conn.prepareStatement(sql);
		//stat.setString(1, data.get("locSyskey").toString());
		
		if(!("".equals(code) && code.isEmpty())){
			stat.setString(1, "%"+code+"%");
			//stat.setString(2, "%"+description+"%");			
		}
		
		if( !("".equals(description) && description.isEmpty())){
			//stat.setString(1, "%"+code+"%");
			if(code.isEmpty()){
				//stat.setString(1, "%%");
				stat.setString(1, "%"+description+"%");	
			}
			else {
				stat.setString(2, "%"+description+"%");	
			}
					
		}
		
		ResultSet rs = stat.executeQuery();
		
		while (rs.next()) {
			StockData stockdata = new StockData();
//			stockdata.syskey(rs.getString("Syskey"));
			stockdata.setT2(rs.getString("code"));
			stockdata.setT3(rs.getString("description"));
			// Stock.t4 AS ShortDescription
			stockdata.setT10(rs.getString("Qty"));// test
			stockdata.setT11(rs.getString("LocCode"));
			stockdata.setT12(rs.getString("LocDescription"));
			
			transDtlList.add(stockdata);
		}
		result.put("userdatalist", transDtlList);
		return result;
	}

}
