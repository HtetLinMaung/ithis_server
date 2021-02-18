package com.nirvasoft.web.pos;

public class SalesOrderDetailData {
	private String syskey;// SysKey
	private String autokey;// AutoKey
	private String createddate;// CreatedDate
	private String modifieddate;// ModifiedDate
	private String userid;// UserID
	private String username;// UserName
	private String territorycode;// TerritoryCode
	private String salescode;// SalesCode
	private String projectcode;// ProjectCode
	private String ref1;// RefCode1
	private String ref2;// RefCode2
	private String ref3;// RefCode3
	private String ref4;// RefCode4
	private String ref5;// RefCode5
	private String ref6;// RefCode6
	private String parentid;// ParentID
	private int recordStatus;// RecordStatus
	private int syncStatus;// SyncStatus
	private String syncBatch;// SyncBatch
	private String t1;// ManualLine#
	private String t2;// StockCode
	private String t3;// Description
	private String t4;// CostCurrCode
	private String t5;// PurCurrCode
	private String t6;// SaleCurrCode
	private String n1;// StkSK
	private String n2;// WHSK
	private String n3;// BinSK
	private String n4;// R1
	private int n5;// SubGrp
	private double n6;// Qty
	private String n7;// lvl
	private double n8;// lvlQty
	private double n9;// CurrentQty
	private double n10;// FloorQty
	private double n11;// ACost
	private double n12;// SCost
	private double n13;// PurPrice
	private double n14;// SalePrice
	private double n15;// CostCurrRate
	private double n16;// PurCurrRate
	private double n17;// SaleCurrRate
	private double n18;// PriceVariance
	private double n19;// UnitDiscount
	private double n20;// TotalDiscountAmount
	private double n21;// LineDiscountAmount
	private double n22;// DistributedDiscountAmount
	private double n23;// TaxAmount
	private String n24;// Purchase/SaleAccSK
	private String n25;// PriceVarianceAccSK
	private String n26;// StkAccSK
	private String n27;// AccurualAccSK
	private String n28;// COSAccSK
	private String n29;// DiscountAccSK
	private String n30;// TaxAccSK
	private String n31;// R2
	private int n32;// IsCOGSPost
	private String n33;// R4
	private double n34;// TotalAmount
	private String n35;// TaxCodeSK
	private int n36;// IsTaxInclusice
	private double n37;// Tax%
	private double n38;// BeforeTaxAmount
	private int n39;// SkipPosting
	private int n40;// DetailsType
	private int n41;// R6
	private int n42;// R7
	private String n43;// R8
	private double n44;// SellingUnitRatio
	private String t7;// SellingUnitOperator
	private String n45;// SellingPriceUnitLevel
	private double n46;// SellingPriceUnitRatio
	private String t8;// SellingPriceOperator
	private double n47;// StockBaseRatio
	private String t9;// StockBaseOperator
	private double n48;// LevelCost
	private double n49;// LevelPrice
	private String t10;// LvlDescription
	private String t11;// OtherDescription
	private double n50;// RecommandPrice
	private double n51;// CurrentLvlQty
	private double n52;// FloorLvlQty
	private double n53;// DiscountPercent
	private int n54;// NReference1
	private int n55;// NReference2
	private int n56;// NReference3
	private double n57;// NReference4
	private double n58;// NReference5
	private double n59;// NReference6
	private String n60;// NReference7
	private String n61;// NReference8
	private String n62;// NReference9
	private String t12;// TReference1
	private String t13;// TReference2
	private String t14;// TReference3
	private String t15;// TReference4
	private String t16;// TReference5
	private String t17;// TReference6
	private String uomsk;// TReference6
	private String parenthdrsk;// TReference6
	private int parenttype;// TReference6
	private String parentdtlsk;// TReference6
	private String parentrefno;// TReference6
	private String parentterms;// TReference6
	private String parentpurtype;// TReference6
	private double parentamt;
	private String retrieveRefNo;
	private double goodOrderQty;//For Season
	private double soQty; //For Season
	private double minQty; //For Season
	private double onHandQty; //For Season
	private String specialDate;//For Season
	private double tobePostAmt; // For PI Posting
	private int grnTQty; // For PI Posting
	private double grnTAmt; // For PI Posting
	private int piTQty; // For PI Posting
	private double shelfLife; // For Season 2 day ShelfLife Item
	
	public SalesOrderDetailData() {
		clearProperties();
	}

	private void clearProperties() {
		this.syskey = "0";
		this.autokey = "0";
		this.createddate = "";
		this.modifieddate = "";
		this.userid = "0";
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
		this.parentid = "0";
		this.recordStatus = 0;
		this.syncStatus = 0;
		this.syncBatch = "";
		this.t1 = "";
		this.t2 = "";
		this.t3 = "";
		this.t4 = "";
		this.t5 = "";
		this.t6 = "";
		this.n1 = "0";
		this.n2 = "0";
		this.n3 = "0";
		this.n4 = "0";
		this.n5 = 0;
		this.n6 = 0.0d;
		this.n7 = "0";
		this.n8 = 1d;
		this.n9 = 0.0d;
		this.n10 = 0.0d;
		this.n11 = 0.0d;
		this.n12 = 0.0d;
		this.n13 = 0.0d;
		this.n14 = 0.0d;
		this.n15 = 0.0d;
		this.n16 = 0.0d;
		this.n17 = 0.0d;
		this.n18 = 0.0d;
		this.n19 = 0.0d;
		this.n20 = 0.0d;
		this.n21 = 0.0d;
		this.n22 = 0.0d;
		this.n23 = 0.0d;
		this.n24 = "0";
		this.n25 = "0";
		this.n26 = "0";
		this.n27 = "0";
		this.n28 = "0";
		this.n29 = "0";
		this.n30 = "0";
		this.n31 = "0";
		this.n32 = 0;
		this.n33 = "0";
		this.n34 = 0.0d;
		this.n35 = "0";
		this.n36 = 0;
		this.n37 = 0.0d;
		this.n38 = 0.0d;
		this.n39 = 0;
		this.n40 = 0;
		this.n41 = 0;
		this.n42 = 0;
		this.n43 = "0";
		this.n44 = 0.0d;
		this.t7 = "";
		this.n45 = "0";
		this.n46 = 0.0d;
		this.t8 = "";
		this.n47 = 0.0d;
		this.t9 = "";
		this.n48 = 0.0d;
		this.n49 = 0.0d;
		this.t10 = "";
		this.t11 = "";
		this.n50 = 0.0d;
		this.n51 = 0.0d;
		this.n52 = 0.0d;
		this.n53 = 0.0d;
		this.n54 = 0;
		this.n55 = 0;
		this.n56 = 0;
		this.n57 = 0.0d;
		this.n58 = 0.0d;
		this.n59 = 0.0d;
		this.n60 = "0";
		this.n61 = "0";
		this.n62 = "0";
		this.t12 = "";
		this.t13 = "";
		this.t14 = "";
		this.t15 = "";
		this.t16 = "";
		this.t17 = "";
		this.uomsk = "0";
		this.parenthdrsk = "0";
		this.parenttype = 0;
		this.parentdtlsk = "0";
		this.parentrefno = "";
		this.parentpurtype= "0";
		this.parentterms="0";
		this.parentamt= 0.0d;
		this.retrieveRefNo = "";
		this.goodOrderQty = 0.0;
	//	this.weeklyQty = "";
		this.soQty = 0.0d;
		this.minQty = 0.0d;
		this.onHandQty = 0.0d;
		this.specialDate = "";
		this.tobePostAmt = 0.0d;
		this.grnTAmt = 0.0d;
		this.grnTQty = 0;
		this.piTQty = 0;
		this.shelfLife = 0;
	}

	public String getSyskey() {
		return syskey;
	}

	public void setSyskey(String syskey) {
		this.syskey = syskey;
	}

	public String getAutokey() {
		return autokey;
	}

	public void setAutokey(String autokey) {
		this.autokey = autokey;
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

	public String getParentid() {
		return parentid;
	}

	public void setParentid(String parentid) {
		this.parentid = parentid;
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

	public String getN1() {
		return n1;
	}

	public void setN1(String n1) {
		this.n1 = n1;
	}

	public String getN2() {
		return n2;
	}

	public void setN2(String n2) {
		this.n2 = n2;
	}

	public String getN3() {
		return n3;
	}

	public void setN3(String n3) {
		this.n3 = n3;
	}

	public String getN4() {
		return n4;
	}

	public void setN4(String n4) {
		this.n4 = n4;
	}

	public int getN5() {
		return n5;
	}

	public void setN5(int n5) {
		this.n5 = n5;
	}

	public double getN6() {
		return n6;
	}

	public void setN6(double n6) {
		this.n6 = n6;
	}

	public String getN7() {
		return n7;
	}

	public void setN7(String n7) {
		this.n7 = n7;
	}

	public double getN8() {
		return n8;
	}

	public void setN8(double n8) {
		this.n8 = n8;
	}

	public double getN9() {
		return n9;
	}

	public void setN9(double n9) {
		this.n9 = n9;
	}

	public double getN10() {
		return n10;
	}

	public void setN10(double n10) {
		this.n10 = n10;
	}

	public double getN11() {
		return n11;
	}

	public void setN11(double n11) {
		this.n11 = n11;
	}

	public double getN12() {
		return n12;
	}

	public void setN12(double n12) {
		this.n12 = n12;
	}

	public double getN13() {
		return n13;
	}

	public void setN13(double n13) {
		this.n13 = n13;
	}

	public double getN14() {
		return n14;
	}

	public void setN14(double n14) {
		this.n14 = n14;
	}

	public double getN15() {
		return n15;
	}

	public void setN15(double n15) {
		this.n15 = n15;
	}

	public double getN16() {
		return n16;
	}

	public void setN16(double n16) {
		this.n16 = n16;
	}

	public double getN17() {
		return n17;
	}

	public void setN17(double n17) {
		this.n17 = n17;
	}

	public double getN18() {
		return n18;
	}

	public void setN18(double n18) {
		this.n18 = n18;
	}

	public double getN19() {
		return n19;
	}

	public void setN19(double n19) {
		this.n19 = n19;
	}

	public double getN20() {
		return n20;
	}

	public void setN20(double n20) {
		this.n20 = n20;
	}

	public double getN21() {
		return n21;
	}

	public void setN21(double n21) {
		this.n21 = n21;
	}

	public double getN22() {
		return n22;
	}

	public void setN22(double n22) {
		this.n22 = n22;
	}

	public double getN23() {
		return n23;
	}

	public void setN23(double n23) {
		this.n23 = n23;
	}

	public String getN24() {
		return n24;
	}

	public void setN24(String n24) {
		this.n24 = n24;
	}

	public String getN25() {
		return n25;
	}

	public void setN25(String n25) {
		this.n25 = n25;
	}

	public String getN26() {
		return n26;
	}

	public void setN26(String n26) {
		this.n26 = n26;
	}

	public String getN27() {
		return n27;
	}

	public void setN27(String n27) {
		this.n27 = n27;
	}

	public String getN28() {
		return n28;
	}

	public void setN28(String n28) {
		this.n28 = n28;
	}

	public String getN29() {
		return n29;
	}

	public void setN29(String n29) {
		this.n29 = n29;
	}

	public String getN30() {
		return n30;
	}

	public void setN30(String n30) {
		this.n30 = n30;
	}

	public String getN31() {
		return n31;
	}

	public void setN31(String n31) {
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

	public double getN34() {
		return n34;
	}

	public void setN34(double n34) {
		this.n34 = n34;
	}

	public String getN35() {
		return n35;
	}

	public void setN35(String n35) {
		this.n35 = n35;
	}

	public int getN36() {
		return n36;
	}

	public void setN36(int n36) {
		this.n36 = n36;
	}

	public double getN37() {
		return n37;
	}

	public void setN37(double n37) {
		this.n37 = n37;
	}

	public double getN38() {
		return n38;
	}

	public void setN38(double n38) {
		this.n38 = n38;
	}

	public int getN39() {
		return n39;
	}

	public void setN39(int n39) {
		this.n39 = n39;
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

	public String getN43() {
		return n43;
	}

	public void setN43(String n43) {
		this.n43 = n43;
	}

	public double getN44() {
		return n44;
	}

	public void setN44(double n44) {
		this.n44 = n44;
	}

	public String getT7() {
		return t7;
	}

	public void setT7(String t7) {
		this.t7 = t7;
	}

	public String getN45() {
		return n45;
	}

	public void setN45(String n45) {
		this.n45 = n45;
	}

	public double getN46() {
		return n46;
	}

	public void setN46(double n46) {
		this.n46 = n46;
	}

	public String getT8() {
		return t8;
	}

	public void setT8(String t8) {
		this.t8 = t8;
	}

	public double getN47() {
		return n47;
	}

	public void setN47(double n47) {
		this.n47 = n47;
	}

	public String getT9() {
		return t9;
	}

	public void setT9(String t9) {
		this.t9 = t9;
	}

	public double getN48() {
		return n48;
	}

	public void setN48(double n48) {
		this.n48 = n48;
	}

	public double getN49() {
		return n49;
	}

	public void setN49(double n49) {
		this.n49 = n49;
	}

	public String getT10() {
		return t10;
	}

	public void setT10(String t10) {
		this.t10 = t10;
	}

	public String getT11() {
		return t11;
	}

	public void setT11(String t11) {
		this.t11 = t11;
	}

	public double getN50() {
		return n50;
	}

	public void setN50(double n50) {
		this.n50 = n50;
	}

	public double getN51() {
		return n51;
	}

	public void setN51(double n51) {
		this.n51 = n51;
	}

	public double getN52() {
		return n52;
	}

	public void setN52(double n52) {
		this.n52 = n52;
	}

	public double getN53() {
		return n53;
	}

	public void setN53(double n53) {
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

	public double getN57() {
		return n57;
	}

	public void setN57(double n57) {
		this.n57 = n57;
	}

	public double getN58() {
		return n58;
	}

	public void setN58(double n58) {
		this.n58 = n58;
	}

	public double getN59() {
		return n59;
	}

	public void setN59(double n59) {
		this.n59 = n59;
	}

	public String getN60() {
		return n60;
	}

	public void setN60(String n60) {
		this.n60 = n60;
	}

	public String getN61() {
		return n61;
	}

	public void setN61(String n61) {
		this.n61 = n61;
	}

	public String getN62() {
		return n62;
	}

	public void setN62(String n62) {
		this.n62 = n62;
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

	public String getT14() {
		return t14;
	}

	public void setT14(String t14) {
		this.t14 = t14;
	}

	public String getT15() {
		return t15;
	}

	public void setT15(String t15) {
		this.t15 = t15;
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

	public String getUomsk() {
		return uomsk;
	}

	public void setUomsk(String uomsk) {
		this.uomsk = uomsk;
	}

	public String getParenthdrsk() {
		return parenthdrsk;
	}

	public void setParenthdrsk(String parenthdrsk) {
		this.parenthdrsk = parenthdrsk;
	}

	public int getParenttype() {
		return parenttype;
	}

	public void setParenttype(int parenttype) {
		this.parenttype = parenttype;
	}

	public String getParentdtlsk() {
		return parentdtlsk;
	}

	public void setParentdtlsk(String parentdtlsk) {
		this.parentdtlsk = parentdtlsk;
	}

	public String getParentrefno() {
		return parentrefno;
	}

	public void setParentrefno(String parentrefno) {
		this.parentrefno = parentrefno;
	}

	public String getParentterms() {
		return parentterms;
	}

	public void setParentterms(String parentterms) {
		this.parentterms = parentterms;
	}

	public String getParentpurtype() {
		return parentpurtype;
	}

	public void setParentpurtype(String parentpurtype) {
		this.parentpurtype = parentpurtype;
	}

	public double getParentamt() {
		return parentamt;
	}

	public void setParentamt(double parentamt) {
		this.parentamt = parentamt;
	}

	public String getRetrieveRefNo() {
		return retrieveRefNo;
	}

	public void setRetrieveRefNo(String retrieveRefNo) {
		this.retrieveRefNo = retrieveRefNo;
	}

	public double getGoodOrderQty() {
		return goodOrderQty;
	}

	public void setGoodOrderQty(double goodOrderQty) {
		this.goodOrderQty = goodOrderQty;
	}

	public double getSoQty() {
		return soQty;
	}

	public void setSoQty(double soQty) {
		this.soQty = soQty;
	}

	public double getMinQty() {
		return minQty;
	}

	public void setMinQty(double minQty) {
		this.minQty = minQty;
	}

	public double getOnHandQty() {
		return onHandQty;
	}

	public void setOnHandQty(double onHandQty) {
		this.onHandQty = onHandQty;
	}

	public String getSpecialDate() {
		return specialDate;
	}

	public void setSpecialDate(String specialDate) {
		this.specialDate = specialDate;
	}

	public double getTobePostAmt() {
		return tobePostAmt;
	}

	public void setTobePostAmt(double tobePostAmt) {
		this.tobePostAmt = tobePostAmt;
	}

	public int getGrnTQty() {
		return grnTQty;
	}

	public void setGrnTQty(int grnTQty) {
		this.grnTQty = grnTQty;
	}

	public double getGrnTAmt() {
		return grnTAmt;
	}

	public void setGrnTAmt(double grnTAmt) {
		this.grnTAmt = grnTAmt;
	}

	public int getPiTQty() {
		return piTQty;
	}

	public void setPiTQty(int piTQty) {
		this.piTQty = piTQty;
	}

	public double getShelfLife() {
		return shelfLife;
	}

	public void setShelfLife(double shelfLife) {
		this.shelfLife = shelfLife;
	}
	
}
