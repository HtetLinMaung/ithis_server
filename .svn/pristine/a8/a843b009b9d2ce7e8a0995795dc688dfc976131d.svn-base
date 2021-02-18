package com.nirvasoft.web.pos.dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.text.DecimalFormat;


import org.springframework.stereotype.Repository;

import com.nirvasoft.web.pos.model.PreFixData;
import com.nirvasoft.web.pos.util.CommonEnum;
import com.nirvasoft.web.pos.util.ServerUtil;

@Repository
public class PreFixDao {

	public PreFixData findPrefix(int transType, int subtransType, String locSyskey, Connection conn)
			throws SQLException {
		PreFixData preFixData = new PreFixData();
		String sql = "SELECT t2,t3 FROM UVM006  WHERE n1 = ? AND n2 = ? AND n4 = ? AND RecordStatus = 1";
		PreparedStatement stat = conn.prepareStatement(sql);
		stat.setInt(1, transType);
		stat.setInt(2, subtransType);
		stat.setString(3, locSyskey);
		ResultSet rs = stat.executeQuery();
		if (rs.next()) {
			preFixData.setT2(rs.getString("t2"));
			preFixData.setT3(rs.getString("t3"));
		} else {
			sql = "SELECT t2,t3 FROM UVM006  WHERE n1 = ? AND n2 = ? AND n4 = 0 AND RecordStatus = 1";
			stat = conn.prepareStatement(sql);
			stat.setInt(1, transType);
			stat.setInt(2, subtransType);
			rs = stat.executeQuery();
			while (rs.next()) {
				preFixData.setT2(rs.getString("t2"));
				preFixData.setT3(rs.getString("t3"));
			}
		}
		return preFixData;
	}

	public String getMaxRefNumber(int transType, int subtransType, PreFixData preFixData, Connection conn)
			throws SQLException {
		String manualRefNo = "";
		String sql = "";
		if (transType == CommonEnum.TransType.SaleInvoice.getCode()
				|| transType == CommonEnum.TransType.SalesReturn.getCode()
				|| transType == CommonEnum.TransType.SalesOrder.getCode()
				|| transType == CommonEnum.TransType.SalesQuotation.getCode()) {
			sql = " SELECT TOP 1 t1 as MaxRef FROM SOP001 WHERE TransType = ? AND RecordStatus = 1 AND t1 LIKE ? "
					+ "  AND n30 = ? ORDER BY LEN(t1) DESC,t1 DESC ";
		} else if (transType == CommonEnum.TransType.DeliveryOrder.getCode()
				|| transType == CommonEnum.TransType.SalesRetunRec.getCode()
				|| transType == CommonEnum.TransType.StockReceive.getCode()
				|| transType == CommonEnum.TransType.StockIssue.getCode()
				|| transType == CommonEnum.TransType.TransferOut.getCode()
				|| transType == CommonEnum.TransType.Adjustment.getCode()
				|| transType == CommonEnum.TransType.GoodsReceivedNote.getCode()
				|| transType == CommonEnum.TransType.GRNReturn.getCode()
				|| transType == CommonEnum.TransType.Damage.getCode()
				|| transType == CommonEnum.TransType.PurchaseReturnIssue.getCode()
				|| transType == CommonEnum.StockTransactionType.Assembly.getCode()
				|| transType == CommonEnum.StockTransactionType.Dissembly.getCode()) {
			sql = " SELECT TOP 1 t1 as MaxRef FROM STK019 WHERE TransType = ? AND RecordStatus = 1 AND t1 LIKE ? "
					+ "  ORDER BY LEN(t1) DESC,t1 DESC ";
		} else if (transType == CommonEnum.TransType.PurchaseRequisition.getCode()
				|| transType == CommonEnum.TransType.PurchaseOrder.getCode()
				|| transType == CommonEnum.TransType.PurchaseInvoice.getCode()
				|| transType == CommonEnum.TransType.PurchaseReturn.getCode()) {
			sql = " SELECT TOP 1 t1 as MaxRef FROM POP001 WHERE TransType = ? AND RecordStatus = 1 AND t1 LIKE ? "
					+ " AND n50=0 ORDER BY LEN(t1) DESC,t1 DESC ";
		} else if (transType == CommonEnum.CashBookMainTransactionType.CashBook.getCode()) {
			sql = " SELECT TOP 1 t1 as MaxRef FROM CBM003 WHERE RecordStatus = 1 AND t1 LIKE ? "
					+ "ORDER BY LEN(t1) DESC,t1 DESC ";
		} else if (transType == CommonEnum.CashBookMainTransactionType.Receive.getCode()
				|| transType == CommonEnum.CashBookMainTransactionType.Payment.getCode()
				|| transType == CommonEnum.CashBookMainTransactionType.KnockOff.getCode()) {
			sql = " SELECT TOP 1 t1 as MaxRef FROM CBM001 WHERE n14 = ? AND RecordStatus = 1 AND t1 LIKE ? "
					+ "ORDER BY LEN(t1) DESC,t1 DESC ";
		} else if (transType == CommonEnum.StockTransactionType.Template.getCode()) {
			sql = " SELECT TOP 1 t1 as MaxRef FROM STK099 WHERE TransType = ? AND RecordStatus = 1 AND t1 LIKE ? "
					+ "ORDER BY LEN(t1) DESC,t1 DESC ";
		}
		PreparedStatement stat = conn.prepareStatement(sql);
		if (transType == CommonEnum.TransType.SaleInvoice.getCode()
				|| transType == CommonEnum.TransType.SalesReturn.getCode()
				|| transType == CommonEnum.TransType.SalesOrder.getCode()
				|| transType == CommonEnum.TransType.SalesQuotation.getCode()) {
			stat.setInt(1, transType);
			stat.setString(2, preFixData.getT2() + "%");
			stat.setInt(3, subtransType);
		}
		else if (transType == CommonEnum.CashBookMainTransactionType.CashBook.getCode()) {
			stat.setString(1, preFixData.getT2() + "%");
		} else {
			stat.setInt(1, transType);
			stat.setString(2, preFixData.getT2() + "%");
		}
		ResultSet rs = stat.executeQuery();
		if (rs.next()) {
			manualRefNo = rs.getString("MaxRef");
		}
		if (manualRefNo == "") {
			manualRefNo = preFixData.getT2() + preFixData.getT3() + 1;
		} else {
			int startPosition = 0;
			if (!preFixData.getT2().equals("")) {
				startPosition = preFixData.getT2().length();
			}
			if (manualRefNo.trim().length() >= startPosition + 1) {
				String nextValue = "";
				nextValue = manualRefNo.substring(startPosition);
				int proFixValue = Integer.parseInt(nextValue) + 1;
				String preFxiDigit = preFixData.getT3();
				if (nextValue.length() > preFxiDigit.length()) {
					preFxiDigit = "";
					for (int i = 0; i < nextValue.length(); i++) {
						preFxiDigit += "0";
					}
				}
				manualRefNo = new DecimalFormat(preFxiDigit).format(proFixValue);
				manualRefNo = preFixData.getT2() + manualRefNo;
				return manualRefNo;
			}
		}
		return manualRefNo;
	}

	public String getMaxRefManualNumber(int transType, int subtransType, PreFixData preFixData, Connection conn) throws SQLException {
		String manualRefNo = "";
		String sql = "";	
		if (transType == CommonEnum.TransType.SaleInvoice.getCode()
				|| transType == CommonEnum.TransType.SalesReturn.getCode()
				|| transType == CommonEnum.TransType.SalesOrder.getCode()
				|| transType == CommonEnum.TransType.SalesQuotation.getCode()) {
			sql = " SELECT TOP 1 t1 as MaxRef FROM SOP001 WHERE TransType = ? AND RecordStatus = 1 "
					+ "AND n30 = ? ORDER BY autokey DESC ";
		} else if (transType == CommonEnum.TransType.DeliveryOrder.getCode()
				|| transType == CommonEnum.TransType.SalesRetunRec.getCode()
				|| transType == CommonEnum.TransType.StockReceive.getCode()
				|| transType == CommonEnum.TransType.StockIssue.getCode()
				|| transType == CommonEnum.TransType.TransferOut.getCode()
				|| transType == CommonEnum.TransType.Adjustment.getCode()
				|| transType == CommonEnum.TransType.GoodsReceivedNote.getCode()
				|| transType == CommonEnum.TransType.GRNReturn.getCode()
				|| transType == CommonEnum.TransType.Damage.getCode()
				|| transType == CommonEnum.TransType.PurchaseReturnIssue.getCode()
				|| transType == CommonEnum.StockTransactionType.Assembly.getCode()
				|| transType == CommonEnum.StockTransactionType.Dissembly.getCode()) {
			sql = " SELECT TOP 1 t1 as MaxRef FROM STK019 WHERE TransType = ? AND RecordStatus = 1 "
					+ "ORDER BY autokey DESC ";
		} else if (transType == CommonEnum.TransType.PurchaseRequisition.getCode()
				|| transType == CommonEnum.TransType.PurchaseOrder.getCode()
				|| transType == CommonEnum.TransType.PurchaseInvoice.getCode()
				|| transType == CommonEnum.TransType.PurchaseReturn.getCode()) {
			sql = " SELECT TOP 1 t1 as MaxRef FROM POP001 WHERE TransType = ? AND RecordStatus = 1 "
					+ "AND n50=0 ORDER BY autokey DESC ";
		} else if (transType == CommonEnum.CashBookMainTransactionType.CashBook.getCode()) {
			sql = " SELECT TOP 1 t1 as MaxRef FROM CBM003 WHERE RecordStatus = 1 "
					+ "ORDER BY autokey DESC ";
		} else if (transType == CommonEnum.CashBookMainTransactionType.Receive.getCode()
				|| transType == CommonEnum.CashBookMainTransactionType.Payment.getCode()
				|| transType == CommonEnum.CashBookMainTransactionType.KnockOff.getCode()) {
			sql = " SELECT TOP 1 t1 as MaxRef FROM CBM001 WHERE n14 = ? AND RecordStatus = 1 "
					+ "ORDER BY autokey DESC ";
		} else if (transType == CommonEnum.StockTransactionType.Template.getCode()) {
			sql = " SELECT TOP 1 t1 as MaxRef FROM STK099 WHERE TransType = ? AND RecordStatus = 1 "
					+ "ORDER BY autokey DESC ";
		}
		PreparedStatement stat = conn.prepareStatement(sql);
		if (transType == CommonEnum.TransType.SaleInvoice.getCode()
				|| transType == CommonEnum.TransType.SalesReturn.getCode()
				|| transType == CommonEnum.TransType.SalesOrder.getCode()
				|| transType == CommonEnum.TransType.SalesQuotation.getCode()) {
			stat.setInt(1, transType);
			stat.setInt(2, subtransType);
		} else {
			stat.setInt(1, transType);
		}
		ResultSet rs = stat.executeQuery();
		while (rs.next()) {
			manualRefNo = rs.getString("MaxRef");
		}
		if (manualRefNo == "") {
			manualRefNo = preFixData.getT2() + preFixData.getT3() + 1;
		} else {
			manualRefNo = getNextManualRefNo(manualRefNo, preFixData);
		}
		return manualRefNo;
	}

	public String getNextManualRefNo(String manualRefNo, PreFixData preFixData) {
		int start = 0;
		String prefix = "";
		String body = "";
		String nextBody = "";
		String postfix = "";
		Boolean scanPrefix, scanPostfix, scanBody;
		scanPrefix = true;
		scanBody = false;
		scanPostfix = false;
		manualRefNo = manualRefNo.trim();
		if (!preFixData.getT2().equals("")) {
			start = preFixData.getT2().length();
		} else {
			start = manualRefNo.indexOf("-");
		}
		if (start > 0) {
			if (manualRefNo.length() >= start) {
				prefix = manualRefNo.substring(0, start);
			} else {
				prefix = manualRefNo;
			}
			scanPrefix = false;
			scanBody = true;
			scanPostfix = false;
		}
		if (start < manualRefNo.length()) {
			String str = manualRefNo.substring(start);
			for (char c : str.toCharArray()) {
				Boolean ispreflag = false;
				Boolean isbodyflag = false;
				if (scanPrefix) {
					if (Character.isDigit(c)) {
						body = String.valueOf(c);
						scanPrefix = false;
						scanBody = true;
						scanPostfix = false;
					} else {
						prefix = prefix + c;
					}
					ispreflag = true;
				}
				if (!ispreflag) {
					if (scanBody) {
						if (c == ' ') {
							c = (char) '0'; 
						}
						if (Character.isDigit(c)) {
							body = body + c;
						} else {
							postfix = Character.toString(c);
							scanPrefix = false;
							scanBody = false;
							scanPostfix = true;
						}
						isbodyflag = true;
					}
				}
				if (!ispreflag && !isbodyflag) {
					if (scanPostfix) {
						postfix = postfix + c;
					}
				}
			}
		}
		if (body.equals("")) {
			nextBody = "1";
		} else {
			int nextValue = Integer.parseInt(body) + 1;
			nextBody = Integer.toString(nextValue);
		}
		for (int i = nextBody.length(); i < body.length(); i++) {
			nextBody = "0" + nextBody;
		}
		if (!postfix.equals("") && postfix.length() > 0 && postfix.substring(0, 1).equals("/")) {
			return prefix + nextBody + postfix;
		} else {
			return prefix + nextBody;
		}
	}

	public PreFixData findTransCode(int transType, int subtransType, Connection conn) throws SQLException {
		PreFixData data = new PreFixData();
		String sql = "SELECT t2 AS Prefix,t3 AS Digit " + "FROM UVM006 " + "WHERE n1 = ? AND n2 = 0 AND n4 = 0";
		PreparedStatement stat = conn.prepareStatement(sql);
		stat.setInt(1, transType);
		ResultSet rs = stat.executeQuery();
		while (rs.next()) {
			data.setT2(rs.getString("Prefix"));
			data.setT3(rs.getString("Digit"));
		}
		return data;
	}
	
	public int IsManualRefExist(String syskey, String ref, int transType, int subtransType, Connection conn)
			throws SQLException {
		String sql = "";
		if (transType == CommonEnum.TransType.SaleInvoice.getCode()
				|| transType == CommonEnum.TransType.SalesReturn.getCode()
				|| transType == CommonEnum.TransType.SalesOrder.getCode()
				|| transType == CommonEnum.TransType.SalesQuotation.getCode()
				|| transType == CommonEnum.TransType.SalesQuotation.getCode()) {
			sql = "SELECT syskey,t1 FROM SOP001 WHERE syskey <> ? AND t1=? AND TransType=? AND RecordStatus<>4 AND n30=? and SaveStatus<> 6";
		} else if (transType == CommonEnum.TransType.DeliveryOrder.getCode()
				|| transType == CommonEnum.TransType.SalesRetunRec.getCode()
				|| transType == CommonEnum.TransType.StockReceive.getCode()
				|| transType == CommonEnum.TransType.StockIssue.getCode()
				|| transType == CommonEnum.TransType.TransferOut.getCode()
				|| transType == CommonEnum.TransType.Adjustment.getCode()
				|| transType == CommonEnum.TransType.GoodsReceivedNote.getCode()
				|| transType == CommonEnum.TransType.GRNReturn.getCode()
				|| transType == CommonEnum.TransType.Damage.getCode()
				|| transType == CommonEnum.TransType.PurchaseReturnIssue.getCode()
				|| transType == CommonEnum.StockTransactionType.Assembly.getCode()
				|| transType == CommonEnum.StockTransactionType.Dissembly.getCode()) {
			sql = "SELECT syskey,t1 FROM stk019 WHERE syskey <> ? AND t1=? AND TransType=? AND RecordStatus<>4 AND n30=? and SaveStatus<> 6";
		} else if (transType == CommonEnum.TransType.PurchaseRequisition.getCode()
				|| transType == CommonEnum.TransType.PurchaseOrder.getCode()
				|| transType == CommonEnum.TransType.PurchaseInvoice.getCode()
				|| transType == CommonEnum.TransType.PurchaseReturn.getCode()) {
			sql = "SELECT syskey,t1 FROM POP001 WHERE syskey <> ? AND t1=? AND TransType=? AND RecordStatus<>4 AND n30=? and SaveStatus<> 6";
		} else if (transType == CommonEnum.CashBookMainTransactionType.CashBook.getCode()) {
			sql = "SELECT syskey,t1 FROM CBM003 WHERE syskey <> ? AND t1=? AND n14=? AND n15=? AND RecordStatus<>4  and SaveStatus<> 6";
		} else if (transType == CommonEnum.CashBookMainTransactionType.Receive.getCode()
				|| transType == CommonEnum.CashBookMainTransactionType.Payment.getCode()) {
			sql = "SELECT syskey,t1 FROM CBM001 WHERE syskey <> ? AND t1=? AND n14=? AND n15=? AND RecordStatus<>4  and SaveStatus<> 6";
		} else if (transType == CommonEnum.StockTransactionType.Template.getCode()) {
			sql = "SELECT syskey,t1 FROM stk099 WHERE syskey <> ? AND t1=? AND TransType=? AND n30=? AND RecordStatus<>4 and SaveStatus<> 6";
		} else if (transType == CommonEnum.CashBookMainTransactionType.KnockOff.getCode()) {
			sql = "SELECT syskey,t1 FROM CBM001 WHERE syskey <> ? AND t1=? AND n14=? AND n15=? AND RecordStatus<>4 and SaveStatus<> 6";
		} else if (transType == CommonEnum.CashBookMainTransactionType.Transfer.getCode()) {
			sql = "SELECT syskey,t1 FROM CBM005 WHERE syskey <> ? AND t1=?  AND RecordStatus<>4 and SaveStatus<> 6";
		}
		PreparedStatement stat = conn.prepareStatement(sql);
		stat.setString(1, syskey);
		stat.setString(2, ref);
		if (transType != CommonEnum.CashBookMainTransactionType.Transfer.getCode()) {
			stat.setInt(3, transType);
			stat.setInt(4, subtransType);
		}
		ResultSet rs = stat.executeQuery();
		if (rs.next()) {
			return 0;
		}
		return 1;
	}
	

	public String getMaxRefNumber(int transType, PreFixData preFixData, Connection conn) throws SQLException {
		String maxRef = "";
		String sql = "SELECT TOP 1 t1 AS MaxRef FROM CBM001 " + "WHERE n14= ? AND recordstatus=1 And t1 Like '" + preFixData.getT2()
				+ "%' ORDER BY LEN(t1) DESC,t1 DESC ";
		PreparedStatement stat = conn.prepareStatement(sql);
		stat.setInt(1, transType);
		ResultSet rs = stat.executeQuery();
		while (rs.next()) {
			maxRef = rs.getString("MaxRef");
		}
		if (maxRef == "") {
			maxRef = preFixData.getT2() + preFixData.getT3() + 1;
		} else {
			int startPosition = 0;
			if (!preFixData.getT2().equals("")) {
				startPosition = preFixData.getT2().length();
			}
			if (maxRef.trim().length() >= startPosition + 1) {
				String nextValue = "";
				int endIndex = maxRef.trim().length();
				nextValue = maxRef.substring(startPosition, endIndex);
				int proFixValue = Integer.parseInt(nextValue) + 1;				
				String preFxiDigit = preFixData.getT3();
				if(nextValue.length() > preFxiDigit.length()) {
					preFxiDigit = "";
					for(int i=0;i<nextValue.length();i++ ) {
						preFxiDigit += "0";
					}
				}
				maxRef = new DecimalFormat(preFxiDigit).format(proFixValue);
				maxRef = preFixData.getT2() + maxRef;
			}
		}
		return maxRef;
	}

	public String getStockMaxNumber(Connection conn) throws SQLException {
		String ref = "";
		String sql = "SELECT Top 1 t2 FROM STK001 WHERE recordstatus= 1 Order By autokey Desc";

		PreparedStatement stat = conn.prepareStatement(sql);

		ResultSet rs = stat.executeQuery();
		if (rs.next()) {
			ref = rs.getString("t2");
		}
		return ref;

	}

	public int getAutoOrManual(int transType, int subTransType, Connection conn) throws SQLException {
		int isAuto = 0;
		String sql = "SELECT n11 AS Cust, n22 AS Q, n23 AS SO, n24 AS DO, n25 AS SI, n26 AS SR, n49 AS sDr, n50 AS sCr, n12 AS Ven, n83 AS PReq, n27 AS PO, n28 AS GRN, "
				+ " n29 AS PI, n30 AS PR, n53 AS pDr, n54 AS pCr, n31 AS StkAdjust, n32 AS StkTransfer, n33 AS StkRec, n34 AS StkIssue, "
				+" n35 AS StkDamage, n95 AS BOMProcessing, n96 AS BOM, n38 AS GL, n16 AS CB, n39 AS CBTrans, n86 AS CBTransfer FROM UVM013  ";
		PreparedStatement stat = conn.prepareStatement(sql);
		ResultSet rs = stat.executeQuery();
		if (rs.next()) {
			if (transType == CommonEnum.SOPTransactionType.Quotation.getCode()) {
				isAuto = rs.getInt("Q");
			} else if (transType == CommonEnum.SOPTransactionType.SalesOrder.getCode()) {
				isAuto = rs.getInt("SO");
			} else if (transType == CommonEnum.TransType.DeliveryOrder.getCode()) {
				isAuto = rs.getInt("DO");
			} else if (transType == CommonEnum.SOPTransactionType.Invoice.getCode()
					&& subTransType == CommonEnum.BooleanValue.False_Value.getCode()) {
				isAuto = rs.getInt("SI");
			} else if (transType == CommonEnum.SOPTransactionType.SalesReturn.getCode()
					&& subTransType == CommonEnum.BooleanValue.False_Value.getCode()) {
				isAuto = rs.getInt("SR");
			} else if (transType == CommonEnum.SOPTransactionType.Invoice.getCode()
					&& subTransType == CommonEnum.BooleanValue.True_Value.getCode()) {
				isAuto = rs.getInt("sDr");
			} else if (transType == CommonEnum.SOPTransactionType.SalesReturn.getCode()
					&& subTransType == CommonEnum.BooleanValue.True_Value.getCode()) {
				isAuto = rs.getInt("sCr");
			} else if (transType == CommonEnum.POPTransactionType.PurchaseRequisition.getCode()) {
				isAuto = rs.getInt("PReq");
			} else if (transType == CommonEnum.POPTransactionType.PurchaseOrder.getCode()) {
				isAuto = rs.getInt("PO");
			} else if (transType == CommonEnum.TransType.GoodsReceivedNote.getCode()) {
				isAuto = rs.getInt("GRN");
			} else if (transType == CommonEnum.TransType.GRNReturn.getCode()) {
				isAuto = rs.getInt("GRNReturn");
			} else if (transType == CommonEnum.POPTransactionType.PurchaseInvoice.getCode()
					&& subTransType == CommonEnum.BooleanValue.False_Value.getCode()) {
				isAuto = rs.getInt("PI");
			} else if (transType == CommonEnum.POPTransactionType.PurchaseReturn.getCode()) {
				isAuto = rs.getInt("PR");
			} else if (transType == CommonEnum.POPTransactionType.PurchaseInvoice.getCode()
					&& subTransType == CommonEnum.BooleanValue.True_Value.getCode()) {
				isAuto = rs.getInt("pDr");
			} else if (transType == CommonEnum.POPTransactionType.PurchaseReturn.getCode()
					&& subTransType == CommonEnum.BooleanValue.True_Value.getCode()) {
				isAuto = rs.getInt("pCr");
			} else if (transType == CommonEnum.CashBookMainTransactionType.Receive.getCode()
					|| transType == CommonEnum.CashBookMainTransactionType.Payment.getCode()
					|| transType == CommonEnum.CashBookMainTransactionType.KnockOff.getCode()) {
				isAuto = rs.getInt("CBTrans");
			} else if (transType == CommonEnum.CashBookMainTransactionType.Transfer.getCode()) {
				isAuto = rs.getInt("CBTransfer");
			} else if (transType == CommonEnum.CashBookMainTransactionType.CashBook.getCode()) {
				isAuto = rs.getInt("CB");
			} else if (transType == CommonEnum.StockTransactionType.Adjustment.getCode()) {
				isAuto = rs.getInt("StkAdjust");
			} else if (transType == CommonEnum.StockTransactionType.TransferOut.getCode()) {
				isAuto = rs.getInt("StkTransfer");
			} else if (transType == CommonEnum.StockTransactionType.Receive.getCode()) {
				isAuto = rs.getInt("StkRec");
			} else if (transType == CommonEnum.TransType.StockIssue.getCode()) { 
				isAuto = rs.getInt("StkIssue");
			} else if (transType == CommonEnum.TransType.Damage.getCode()) {
				isAuto = rs.getInt("StkDamage");
			} else if (transType == CommonEnum.StockTransactionType.Assembly.getCode() 
					|| transType == CommonEnum.StockTransactionType.Dissembly.getCode()) {
				isAuto = rs.getInt("BOMProcessing"); 
			} else if (transType == CommonEnum.StockTransactionType.Template.getCode()) {
				isAuto = rs.getInt("BOM");
			} else if (transType == CommonEnum.OtherTransactionType.Customer.getCode()) {
				isAuto = rs.getInt("Cust");
			} else if (transType == CommonEnum.OtherTransactionType.Vendor.getCode()) {
				isAuto = rs.getInt("Ven");
			} else if (transType == CommonEnum.BooleanValue.True_Value.getCode()) { // forJE
				isAuto = rs.getInt("GL");
			}
		}
		return isAuto;
	}

	public PreFixData findCusTypePrefix(String CusTypeSK, Connection conn) throws SQLException {
		
		PreFixData prefixdata = new PreFixData();
		String sql = "SELECT t3 FROM UVM024 WHERE syskey = ?";
		PreparedStatement stat = conn.prepareStatement(sql);
		stat.setString(1, CusTypeSK);
		ResultSet rs = stat.executeQuery();
		while (rs.next()) {
			prefixdata.setT2(rs.getString("t3"));
			prefixdata.setT3("00000");
		}
		return prefixdata;
	}

	public String getMaxRefNumberforFinishGoodProcessing(String currentDate, Connection conn) throws SQLException {
		String manualRef = "";
		String prefix = "";
		String sql = "SELECT IsNull(MAX(t1),'') AS t1 FROM STK101 "
				+ "WHERE RecordStatus = 1 AND createddate= '"+currentDate+"'";
		PreparedStatement stat = conn.prepareStatement(sql);
		ResultSet rs = stat.executeQuery();
		if(rs.next())
		{
			manualRef = rs.getString("t1");
		}
		prefix = ServerUtil.changeStringtoDateFormat(currentDate)+"-";
		if(manualRef.equals(""))
		{
			manualRef = prefix + "000001";
		}
		else{
	
			int startPosition = 0;
			if (!prefix.equals("")) {
				startPosition = prefix.length();
			}
			if (manualRef.trim().length() >= startPosition + 1) {
				String nextValue = "";
				nextValue = manualRef.substring(startPosition);
				int proFixValue = Integer.parseInt(nextValue) + 1;
				String preFxiDigit = prefix;
					preFxiDigit = "";
					for (int i = 0; i < nextValue.length(); i++) {
						preFxiDigit += "0";
					
				}
				manualRef = new DecimalFormat(preFxiDigit).format(proFixValue);
				manualRef = prefix + manualRef;
			}
		}
		return manualRef;
	}
}
