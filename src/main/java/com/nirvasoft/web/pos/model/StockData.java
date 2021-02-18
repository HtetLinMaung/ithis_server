package com.nirvasoft.web.pos.model;

import java.util.ArrayList;
import java.util.List;

public class StockData {
	private String syskey;
	private String createddate;
	private String modifieddate;
	private String userid;
	private String username;
	private String territorycode;
	private String salescode;
	private String projectcode;
	private String ref1;
	private String ref2;
	private String ref3;
	private String ref4;
	private String ref5;
	private String ref6;
	private int recordStatus;
	private int syncStatus;
	private String syncBatch;
	private String t1;// OtherCode
	private String t2;// StockCode
	private String t3;// Description
	private String t4;// ShortDescription
	private String t5;// UOM
	private String t6;// CurrCode
	private String t7;// PriceCurrCode
	private String t8;// Remark
	private String t9;// LastPurDate
	private String t10;// LastSaleDate
	private int n1;// Costtype
	private int n2;// InActive
	private int n3;// IsMultiLevel
	private String n4;// CCSK
	private String n5;// DeptSK
	private String n6;// LastVendorSK
	private String n7;// DiscountSK
	private String n8;// StkAccSK
	private String n9;// PurchaseAccSK
	private String n10;// PurReturnAccSK
	private String n11;// SalesAccSK
	private String n12;// SaleReturnAccSK
	private String n13;// COSAccSK
	private String n14;// DMGAccSK
	private String n15;// ClassificationSK
	private String n16;// BrandSK
	private String n17;// StkGroupSK
	private String n18;// PackingSK
	private Double n19;// AvgCost
	private Double n20;// StandardCost
	private Double n21;// LastCost
	private Double n22;// Price
	private Double n23;// CurrRate
	private Double n24;// Minimum
	private Double n25;// Maximum
	private Double n26;// EOQ
	private Double n27;// ReOrderQty
	private Double n28;// ReOrderLevel
	private Double n29;// SaleOrderQty
	private Double n30;// PurOrderQty
	private int n31;// CostingMethod
	private int n32;// R2
	private String n33;// StockCategory
	private String n34;// HierarchySysKey
	private Double n35;// AllocateQty
	private String n36;// UOMSK
	private String userSysKey;
	private int n37;// Itemtype
	private String n38;// BaseUOMSK
	private Double n39;// BaseUOMSK
	private String t11;// Operator
	private int n40;// IsUseBatchSerialNo
	private int n41;// BatchOrSerial
	private int n42;// IsAllowDuplicateForBatchOrSerial
	private int n43;// IsSaleFromSingleBatch
	private int n44;// IsAlternativeReference
	private int n45;// IsSalesByDate
	private int n46;// IsUseByDate
	private Double n47;// ShelfLife
	private int n48;// BatchSerialRunningNoType
	private String t12;// BatchSerialSperator
	private String t13;// BatchSerialPrefix
	private int n49;// IsGenerateBatchSerialNoWhenGoodReceive
	private int n50;// IsSellingQtyUseMultiUnits
	private int n51;// IsSellingPriceUseMultiUnits
	private int n52;// IsBuyingQtyUseMultiUnits
	private int n53;// IsBuyingPriceUseMultiUnits
	private int n54;// ShelfLifeType
	private int n55;// IsDimension
	private int n56;// IsAutoConversion
	private String t14;// ModelNo
	private String n57;// MetrixCodeJunSK
	private int n58;// FNBItemType
	private String t15;// Description3
	private int n59;// OpenPrice
	private int n60;// Taxable
	private int n61;// Scalable
	private int n62;// PriceInclusiveTaxAndServiceCharges
	private int n63;// PrintSequence
	private int n64;// OpenDescritpion
	private int n65;// MultiDiscountItem
	private int n66;// FixedPriceItem
	private String t16;// JobSKRef
	private String t17;// TReference1
	private String t18;// TReference2
	private String t19;// TReference3
	private String n67;// NReference1
	private String n68;// NReference2
	private String n69;// NReference3
	private int n70;// NReference4
	private int n71;// NReference5
	private int n72;// NReference6
	private String categorycode;
	private String groupcode;
	private Boolean isusetransaction;
	List<StockHoldingData> stockholding;
	List<StockWHData> stockWH;
	List<StockUOMJunctionData> stockuomjun;
	List<StockBarCodeData> stockbarcode;
	List<StockMemoData> stockMemo;
	
	public StockData() {
		clearProperties();
	}

	private void clearProperties() {
		this.syskey = "0";
		this.createddate = "";
		this.modifieddate = "";
		this.userid = "";
		this.username = "";
		this.territorycode = "0";
		this.salescode = "0";
		this.projectcode = "0";
		this.ref1 = "0";
		this.ref2 = "0";
		this.ref3 = "0";
		this.ref4 = "0";
		this.ref5 = "0";
		this.ref6 = "0";
		this.recordStatus = 0;
		this.syncStatus = 0;
		this.syncBatch = "";
		this.t1 = "";
		this.t2 = "";
		this.t3 = "";
		this.t4 = "";
		this.t5 = "";
		this.t6 = "";
		this.t7 = "";
		this.t8 = "";
		this.t9 = "";
		this.t10 = "";
		this.n1 = 0;
		this.n2 = 0;
		this.n3 = 0;
		this.n4 = "0";
		this.n5 = "0";
		this.n6 = "0";
		this.n7 = "0";
		this.n8 = "0";
		this.n9 = "0";
		this.n10 = "0";
		this.n11 = "0";
		this.n12 = "0";
		this.n13 = "0";
		this.n14 = "0";
		this.n15 = "0";
		this.n16 = "0";
		this.n17 = "0";
		this.n18 = "0";
		this.n19 = 0.0d;
		this.n20 = 0.0d;
		this.n21 = 0.0d;
		this.n22 = 0.0d;
		this.n23 = 0.0d;
		this.n24 = 0.0d;
		this.n25 = 0.0d;
		this.n26 = 0.0d;
		this.n27 = 0.0d;
		this.n28 = 0.0d;
		this.n29 = 0.0d;
		this.n30 = 0.0d;
		this.n31 = 0;
		this.n32 = 0;
		this.n33 = "0";
		this.n34 = "0";
		this.n35 = 0.0d;
		this.n36 = "0";
		this.userSysKey = "0";
		this.n37 = 0;
		this.n38 = "0";
		this.n39 = 0.0d;
		this.t11 = "";
		this.n40 = 0;
		this.n41 = 0;
		this.n42 = 0;
		this.n43 = 0;
		this.n44 = 0;
		this.n45 = 0;
		this.n46 = 0;
		this.n47 = 0.0d;
		this.n48 = 0;
		this.t12 = "";
		this.t13 = "";
		this.n49 = 0;
		this.n50 = 0;
		this.n51 = 0;
		this.n52 = 0;
		this.n53 = 0;
		this.n54 = 0;
		this.n55 = 0;
		this.n56 = 0;
		this.t14 = "";
		this.n57 = "0";
		this.n58 = 0;
		this.t15 = "";
		this.n59 = 0;
		this.n60 = 0;
		this.n61 = 0;
		this.n62 = 0;
		this.n63 = 0;
		this.n64 = 0;
		this.n65 = 0;
		this.n66 = 0;
		this.t16 = "";
		this.t17 = "";
		this.t18 = "";
		this.t19 = "";
		this.n67 = "";
		this.n68 = "0";
		this.n69 = "0";
		this.n70 = 0;
		this.n71 = 0;
		this.n72 = 0;
		this.categorycode="";
		this.groupcode="";
		this.isusetransaction=false;
		this.stockholding = new ArrayList<>();
		this.stockuomjun = new ArrayList<>();
		this.stockWH = new ArrayList<>();
		this.stockbarcode=new ArrayList<>();
		this.stockMemo = new ArrayList<>();
	}

	public String getSyskey() {
		return syskey;
	}

	public void setSyskey(String syskey) {
		this.syskey = syskey;
	}

	public String getCreateddate() {
		return createddate;
	}

	public void setCreateddate(String createddate) {
		this.createddate = createddate;
	}

	public String getModifieddate() {
		return modifieddate;
	}

	public void setModifieddate(String modifieddate) {
		this.modifieddate = modifieddate;
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

	public String getTerritorycode() {
		return territorycode;
	}

	public void setTerritorycode(String territorycode) {
		this.territorycode = territorycode;
	}

	public String getSalescode() {
		return salescode;
	}

	public void setSalescode(String salescode) {
		this.salescode = salescode;
	}

	public String getProjectcode() {
		return projectcode;
	}

	public void setProjectcode(String projectcode) {
		this.projectcode = projectcode;
	}

	public String getRef1() {
		return ref1;
	}

	public void setRef1(String ref1) {
		this.ref1 = ref1;
	}

	public String getRef2() {
		return ref2;
	}

	public void setRef2(String ref2) {
		this.ref2 = ref2;
	}

	public String getRef3() {
		return ref3;
	}

	public void setRef3(String ref3) {
		this.ref3 = ref3;
	}

	public String getRef4() {
		return ref4;
	}

	public void setRef4(String ref4) {
		this.ref4 = ref4;
	}

	public String getRef5() {
		return ref5;
	}

	public void setRef5(String ref5) {
		this.ref5 = ref5;
	}

	public String getRef6() {
		return ref6;
	}

	public void setRef6(String ref6) {
		this.ref6 = ref6;
	}

	public int getRecordStatus() {
		return recordStatus;
	}

	public void setRecordStatus(int recordStatus) {
		this.recordStatus = recordStatus;
	}

	public int getSyncStatus() {
		return syncStatus;
	}

	public void setSyncStatus(int syncStatus) {
		this.syncStatus = syncStatus;
	}

	public String getSyncBatch() {
		return syncBatch;
	}

	public void setSyncBatch(String syncBatch) {
		this.syncBatch = syncBatch;
	}

	public String getT1() {
		return t1;
	}

	public void setT1(String t1) {
		this.t1 = t1;
	}

	public String getT2() {
		return t2;
	}

	public void setT2(String t2) {
		this.t2 = t2;
	}

	public String getT3() {
		return t3;
	}

	public void setT3(String t3) {
		this.t3 = t3;
	}

	public String getT4() {
		return t4;
	}

	public void setT4(String t4) {
		this.t4 = t4;
	}

	public String getT5() {
		return t5;
	}

	public void setT5(String t5) {
		this.t5 = t5;
	}

	public String getT6() {
		return t6;
	}

	public void setT6(String t6) {
		this.t6 = t6;
	}

	public String getT7() {
		return t7;
	}

	public void setT7(String t7) {
		this.t7 = t7;
	}

	public String getT8() {
		return t8;
	}

	public void setT8(String t8) {
		this.t8 = t8;
	}

	public String getT9() {
		return t9;
	}

	public void setT9(String t9) {
		this.t9 = t9;
	}

	public String getT10() {
		return t10;
	}

	public void setT10(String t10) {
		this.t10 = t10;
	}

	public int getN1() {
		return n1;
	}

	public void setN1(int n1) {
		this.n1 = n1;
	}

	public int getN2() {
		return n2;
	}

	public void setN2(int n2) {
		this.n2 = n2;
	}

	public int getN3() {
		return n3;
	}

	public void setN3(int n3) {
		this.n3 = n3;
	}

	public String getN4() {
		return n4;
	}

	public void setN4(String n4) {
		this.n4 = n4;
	}

	public String getN5() {
		return n5;
	}

	public void setN5(String n5) {
		this.n5 = n5;
	}

	public String getN6() {
		return n6;
	}

	public void setN6(String n6) {
		this.n6 = n6;
	}

	public String getN7() {
		return n7;
	}

	public void setN7(String n7) {
		this.n7 = n7;
	}

	public String getN8() {
		return n8;
	}

	public void setN8(String n8) {
		this.n8 = n8;
	}

	public String getN9() {
		return n9;
	}

	public void setN9(String n9) {
		this.n9 = n9;
	}

	public String getN10() {
		return n10;
	}

	public void setN10(String n10) {
		this.n10 = n10;
	}

	public String getN11() {
		return n11;
	}

	public void setN11(String n11) {
		this.n11 = n11;
	}

	public String getN12() {
		return n12;
	}

	public void setN12(String n12) {
		this.n12 = n12;
	}

	public String getN13() {
		return n13;
	}

	public void setN13(String n13) {
		this.n13 = n13;
	}

	public String getN14() {
		return n14;
	}

	public void setN14(String n14) {
		this.n14 = n14;
	}

	public String getN15() {
		return n15;
	}

	public void setN15(String n15) {
		this.n15 = n15;
	}

	public String getN16() {
		return n16;
	}

	public void setN16(String n16) {
		this.n16 = n16;
	}

	public String getN17() {
		return n17;
	}

	public void setN17(String n17) {
		this.n17 = n17;
	}

	public String getN18() {
		return n18;
	}

	public void setN18(String n18) {
		this.n18 = n18;
	}

	public Double getN19() {
		return n19;
	}

	public void setN19(Double n19) {
		this.n19 = n19;
	}

	public Double getN20() {
		return n20;
	}

	public void setN20(Double n20) {
		this.n20 = n20;
	}

	public Double getN21() {
		return n21;
	}

	public void setN21(Double n21) {
		this.n21 = n21;
	}

	public Double getN22() {
		return n22;
	}

	public void setN22(Double n22) {
		this.n22 = n22;
	}

	public Double getN23() {
		return n23;
	}

	public void setN23(Double n23) {
		this.n23 = n23;
	}

	public Double getN24() {
		return n24;
	}

	public void setN24(Double n24) {
		this.n24 = n24;
	}

	public Double getN25() {
		return n25;
	}

	public void setN25(Double n25) {
		this.n25 = n25;
	}

	public Double getN26() {
		return n26;
	}

	public void setN26(Double n26) {
		this.n26 = n26;
	}

	public Double getN27() {
		return n27;
	}

	public void setN27(Double n27) {
		this.n27 = n27;
	}

	public Double getN28() {
		return n28;
	}

	public void setN28(Double n28) {
		this.n28 = n28;
	}

	public Double getN29() {
		return n29;
	}

	public void setN29(Double n29) {
		this.n29 = n29;
	}

	public Double getN30() {
		return n30;
	}

	public void setN30(Double n30) {
		this.n30 = n30;
	}

	public int getN31() {
		return n31;
	}

	public void setN31(int n31) {
		this.n31 = n31;
	}

	public int getN32() {
		return n32;
	}

	public void setN32(int n32) {
		this.n32 = n32;
	}

	public String getN33() {
		return n33;
	}

	public void setN33(String n33) {
		this.n33 = n33;
	}

	public String getN34() {
		return n34;
	}

	public void setN34(String n34) {
		this.n34 = n34;
	}

	public Double getN35() {
		return n35;
	}

	public void setN35(Double n35) {
		this.n35 = n35;
	}

	public String getN36() {
		return n36;
	}

	public void setN36(String n36) {
		this.n36 = n36;
	}

	public String getUserSysKey() {
		return userSysKey;
	}

	public void setUserSysKey(String userSysKey) {
		this.userSysKey = userSysKey;
	}

	public int getN37() {
		return n37;
	}

	public void setN37(int n37) {
		this.n37 = n37;
	}

	public String getN38() {
		return n38;
	}

	public void setN38(String n38) {
		this.n38 = n38;
	}

	public Double getN39() {
		return n39;
	}

	public void setN39(Double n39) {
		this.n39 = n39;
	}

	public String getT11() {
		return t11;
	}

	public void setT11(String t11) {
		this.t11 = t11;
	}

	public int getN40() {
		return n40;
	}

	public void setN40(int n40) {
		this.n40 = n40;
	}

	public int getN41() {
		return n41;
	}

	public void setN41(int n41) {
		this.n41 = n41;
	}

	public int getN42() {
		return n42;
	}

	public void setN42(int n42) {
		this.n42 = n42;
	}

	public int getN43() {
		return n43;
	}

	public void setN43(int n43) {
		this.n43 = n43;
	}

	public int getN44() {
		return n44;
	}

	public void setN44(int n44) {
		this.n44 = n44;
	}

	public int getN45() {
		return n45;
	}

	public void setN45(int n45) {
		this.n45 = n45;
	}

	public int getN46() {
		return n46;
	}

	public void setN46(int n46) {
		this.n46 = n46;
	}

	public Double getN47() {
		return n47;
	}

	public void setN47(Double n47) {
		this.n47 = n47;
	}

	public int getN48() {
		return n48;
	}

	public void setN48(int n48) {
		this.n48 = n48;
	}

	public String getT12() {
		return t12;
	}

	public void setT12(String t12) {
		this.t12 = t12;
	}

	public String getT13() {
		return t13;
	}

	public void setT13(String t13) {
		this.t13 = t13;
	}

	public int getN49() {
		return n49;
	}

	public void setN49(int n49) {
		this.n49 = n49;
	}

	public int getN50() {
		return n50;
	}

	public void setN50(int n50) {
		this.n50 = n50;
	}

	public int getN51() {
		return n51;
	}

	public void setN51(int n51) {
		this.n51 = n51;
	}

	public int getN52() {
		return n52;
	}

	public void setN52(int n52) {
		this.n52 = n52;
	}

	public int getN53() {
		return n53;
	}

	public void setN53(int n53) {
		this.n53 = n53;
	}

	public int getN54() {
		return n54;
	}

	public void setN54(int n54) {
		this.n54 = n54;
	}

	public int getN55() {
		return n55;
	}

	public void setN55(int n55) {
		this.n55 = n55;
	}

	public int getN56() {
		return n56;
	}

	public void setN56(int n56) {
		this.n56 = n56;
	}

	public String getT14() {
		return t14;
	}

	public void setT14(String t14) {
		this.t14 = t14;
	}

	public String getN57() {
		return n57;
	}

	public void setN57(String n57) {
		this.n57 = n57;
	}

	public int getN58() {
		return n58;
	}

	public void setN58(int n58) {
		this.n58 = n58;
	}

	public String getT15() {
		return t15;
	}

	public void setT15(String t15) {
		this.t15 = t15;
	}

	public int getN59() {
		return n59;
	}

	public void setN59(int n59) {
		this.n59 = n59;
	}

	public int getN60() {
		return n60;
	}

	public void setN60(int n60) {
		this.n60 = n60;
	}

	public int getN61() {
		return n61;
	}

	public void setN61(int n61) {
		this.n61 = n61;
	}

	public int getN62() {
		return n62;
	}

	public void setN62(int n62) {
		this.n62 = n62;
	}

	public int getN63() {
		return n63;
	}

	public void setN63(int n63) {
		this.n63 = n63;
	}

	public int getN64() {
		return n64;
	}

	public void setN64(int n64) {
		this.n64 = n64;
	}

	public int getN65() {
		return n65;
	}

	public void setN65(int n65) {
		this.n65 = n65;
	}

	public int getN66() {
		return n66;
	}

	public void setN66(int n66) {
		this.n66 = n66;
	}

	public String getT16() {
		return t16;
	}

	public void setT16(String t16) {
		this.t16 = t16;
	}

	public String getT17() {
		return t17;
	}

	public void setT17(String t17) {
		this.t17 = t17;
	}

	public String getT18() {
		return t18;
	}

	public void setT18(String t18) {
		this.t18 = t18;
	}

	public String getT19() {
		return t19;
	}

	public void setT19(String t19) {
		this.t19 = t19;
	}

	public String getN67() {
		return n67;
	}

	public void setN67(String n67) {
		this.n67 = n67;
	}

	public String getN68() {
		return n68;
	}

	public void setN68(String n68) {
		this.n68 = n68;
	}

	public String getN69() {
		return n69;
	}

	public void setN69(String n69) {
		this.n69 = n69;
	}

	public int getN70() {
		return n70;
	}

	public void setN70(int n70) {
		this.n70 = n70;
	}

	public int getN71() {
		return n71;
	}

	public void setN71(int n71) {
		this.n71 = n71;
	}

	public int getN72() {
		return n72;
	}

	public void setN72(int n72) {
		this.n72 = n72;
	}

	public String getCategorycode() {
		return categorycode;
	}

	public void setCategorycode(String categorycode) {
		this.categorycode = categorycode;
	}

	public String getGroupcode() {
		return groupcode;
	}

	public void setGroupcode(String groupcode) {
		this.groupcode = groupcode;
	}

	public Boolean getIsusetransaction() {
		return isusetransaction;
	}

	public void setIsusetransaction(Boolean isusetransaction) {
		this.isusetransaction = isusetransaction;
	}

	public List<StockHoldingData> getStockholding() {
		return stockholding;
	}

	public void setStockholding(List<StockHoldingData> stockholding) {
		this.stockholding = stockholding;
	}

	public List<StockUOMJunctionData> getStockuomjun() {
		return stockuomjun;
	}

	public void setStockuomjun(List<StockUOMJunctionData> stockuomjun) {
		this.stockuomjun = stockuomjun;
	}

	public List<StockWHData> getStockWH() {
		return stockWH;
	}

	public void setStockWH(List<StockWHData> stockWH) {
		this.stockWH = stockWH;
	}

	public List<StockBarCodeData> getStockbarcode() {
		return stockbarcode;
	}

	public void setStockbarcode(List<StockBarCodeData> stockbarcode) {
		this.stockbarcode = stockbarcode;
	}

	public List<StockMemoData> getStockMemo() {
		return stockMemo;
	}

	public void setStockMemo(List<StockMemoData> stockMemo) {
		this.stockMemo = stockMemo;
	}
	
}

