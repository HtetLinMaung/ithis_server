package com.nirvasoft.web.pos.util;

public class CommonEnum {

	public enum CVType {
		NA(0, "NA"), CUSTOMER(1, "Customer"), VENDOR(2, "Vendor"), MEMBER(3, "Member");

		private final int code;
		private final String description;

		public int getCode() {
			return code;
		}

		public String getDescription() {
			return description;
		}

		CVType(int code, String description) {
			this.code = code;
			this.description = description;
		}
	}

	public enum tblType {
		TERRITORY("1", "UVM066"), INDUSTRYTYPE("2", "UVM069"), TITLE("3", "UVM017"), POSITION("4",
				"UVM026"), MARRITALSTATUS("5", "UVM020"), PACKING("6",
						"STK039"), PURCHASETYPE("7", "UVM090"), SALETYPE("8", "UVM090"), BUTTON("9", "WJUN006"), COLUMN("10", "WJUN012");

		private final String code;
		private final String description;

		public String getCode() {
			return code;
		}

		public String getDescription() {
			return description;
		}

		tblType(String code, String description) {
			this.code = code;
			this.description = description;
		}
	}
	
	public enum tblCvoType {
		STATE("1", "UVM119"), CITY("2", "UVM120"), ZONE("3", "UVM121");

		private final String code;
		private final String description;

		public String getCode() {
			return code;
		}

		public String getDescription() {
			return description;
		}

		tblCvoType(String code, String description) {
			this.code = code;
			this.description = description;
		}
	}

	public enum AddressType {
		MAILING(1, "Mailing"), BILLING(2, "Billing"), DELIVERY(4, "Delivery");
		private final int code;
		private final String description;

		public int getCode() {
			return code;
		}

		public String getDescription() {
			return description;
		}

		AddressType(int code, String description) {
			this.code = code;
			this.description = description;
		}
	}

	public enum periodAccount {
		B0000001("GLC", "General Ledger"), B0000002("CBP", "Payment"), B0000003("CBR", "Receipts"), B0000004("SOP",
				"Sales A/R"), B0000005("POP", "Purchase A/P"), B0000006("STK", "Stock"), B0000007("M01",
						"M01"), B0000008("M02", "M02"), B0000009("M03",
								"M03"), B0000010("M04", "M04"), B0000011("M05", "M05"), B0000012("M06", "M06");
		private final String code;
		private final String description;

		public String getCode() {
			return code;
		}

		public String getDescription() {
			return description;
		}

		periodAccount(String code, String description) {
			this.code = code;
			this.description = description;
		}
	}

	public enum CommonConstantModule {
		GeneralLedger("GLC", "General Ledger"), Payment("CBP", "Payment"), Receipts("CBR", "Receipts"), SalesAR("SOP",
				"Sales A/R"), PurchaseAP("POP", "Purchase A/P"), Stock("STK", "Stock"), M01("M01", "M01"), M02("M02",
						"M02"), M03("M03", "M03"), M04("M04", "M04"), M05("M05", "M05"), M06("M06", "M06");
		private final String code;
		private final String description;

		public String getCode() {
			return code;
		}

		public String getDescription() {
			return description;
		}

		CommonConstantModule(String code, String description) {
			this.code = code;
			this.description = description;
		}
	}

	public enum TransType {
		DeliveryOrder(421, "DeliveryOrder"), SalesReturn(451, "SalesReturn"), SalesRetunRec(452,
				"SalesReturnRec"), SalesOrder(211, "SalesOrder"), SalesQuotation(201,
						"SalesQuotation"), SaleInvoice(231, "SaleInvoice"), GoodsReceivedNote(441,
								"GoodsReceivedNote"), PurchaseRequisition(301, "PurchaseRequisition"), DOReturn(505,
										"DOReturn"), GRNReturn(506, "GRNReturn"), StockReceive(402,
												"StockReceive"), StockIssue(403, "StockIssue"), TransferOut(404,
														"TransferOut"), TransferIn(405, "TransferIn"), PurchaseOrder(
																311, "PurchaseOrder"), PurchaseInvoice(331,
																		"PurchaseInvoice"), Damage(410,
																				"Damage"), Adjustment(401,
																						"Adjustment"), PurchaseReturn(
																								431,
																								"PurchaseReturn"), PurchaseReturnIssue(
																										432, "");
		private final int code;
		private final String description;

		public int getCode() {
			return code;
		}

		public String getDescription() {
			return description;
		}

		TransType(int code, String description) {
			this.code = code;
			this.description = description;
		}
	}

	public enum ControlAccountType {
		Sales(1, "Sales"), Opening(14, "Opening"), Closing(15, "Closing"), Charges(13, "Charges"), Debtor(51,
				"Debtor"), Creditor(52, "Creditor"), Bank(53, "Bank"), Stock(59, "Stock"), TaxInput(54,
						"TaxInput"), PrePayment(58, "PrePayment"), TaxOutPut(55, "TaxOutPut"), Accruals(57,
								"Accruals"), RetainedEarnings(56, "RetainedEarnings"), SalesReturn(10,
										"SalesReturn"), Purchase(2, "Purchase"), PurchaseReturn(11,
												"PurchaseReturn"), StockReceived(12, "StockReceived"), CostOfSales(8,
														"CostOfSales"), StockIssue(9, "StockIssue"), PurchaseDiscount(4,
																"PurchaseDiscount"), BadDebts(5,
																		"BadDebts"), SalesDiscount(3,
																				"SalesDiscount"), ExchangeRateVariance(
																						7,
																						"ExchangeRateVariance"), DecimalAdjustment(
																								61,
																								"DecimalAdjustment"), LandedCosts(62,"LandedCosts"),
																					            Variance(63,"Variance");

		private final int code;
		private final String description;

		public int getCode() {
			return code;
		}

		public String getDescription() {
			return description;
		}

		ControlAccountType(int code, String description) {
			this.code = code;
			this.description = description;
		}
	}

	public enum SOPLineType {
		Transaction(0, "Transaction"), ServiceItem(10, "ServiceItem"), Charges(2, "Charges"), Remark(1,
				"Remark"), StkMemo(3, "StkMemo");

		private final int code;
		private final String description;

		public int getCode() {
			return code;
		}

		public String getDescription() {
			return description;
		}

		SOPLineType(int code, String description) {
			this.code = code;
			this.description = description;
		}
	}

	public enum TaxType {
		MultiRated(0, "MultiRated"), SingleRated(1, "SingleRated");

		private final int code;
		private final String description;

		public int getCode() {
			return code;
		}

		public String getDescription() {
			return description;
		}

		TaxType(int code, String description) {
			this.code = code;
			this.description = description;
		}
	}// SalesInvloiceStatus

	public enum Status {
		Completed(128, "Completed"), Live(4, "Live"), PartialConverted(15, "PartialConverted"), Void(6,
				"Void"), Posted(8, "Posted"), Draft(1, "Draft"), Converted(16, "Converted");

		private final int code;
		private final String description;

		public int getCode() {
			return code;
		}

		public String getDescription() {
			return description;
		}

		Status(int code, String description) {
			this.code = code;
			this.description = description;
		}
	}

	public enum SalesInvloiceStatus {
		Completed(128, "Completed"), Live(4, "Live"), Posted(8, "Posted"), Draft(1, "Draft"), Converted(16,
				"Converted"), Void(6, "Void");

		private final int code;
		private final String description;

		public int getCode() {
			return code;
		}

		public String getDescription() {
			return description;
		}

		SalesInvloiceStatus(int code, String description) {
			this.code = code;
			this.description = description;
		}
	}

	public enum AccountType {
		Posting(0, "Posting"), Header(1, "Header"), Memo(2, "Memo");
		private final int code;
		private final String description;

		public int getCode() {
			return code;
		}

		public String getDescription() {
			return description;
		}

		AccountType(int code, String description) {
			this.code = code;
			this.description = description;
		}
	}

	public enum UOMPriceType {
		ByRatio(1, "ByRatio"), BySpecific(2, "BySpecific");

		private final int code;
		private final String description;

		public int getCode() {
			return code;
		}

		public String getDescription() {
			return description;
		}

		UOMPriceType(int code, String description) {
			this.code = code;
			this.description = description;
		}
	}

	public enum BatchEntryStatus {
		Open(0, "Open"), Close(1, "Close");
		private final int code;
		private final String description;

		public int getCode() {
			return code;
		}

		public String getDescription() {
			return description;
		}

		BatchEntryStatus(int code, String description) {
			this.code = code;
			this.description = description;
		}
	}

	public enum BooleanValue {
		False_Value(0, "False_Value"), True_Value(1, "True_Value");
		private final int code;
		private final String description;

		public int getCode() {
			return code;
		}

		public String getDescription() {
			return description;
		}

		BooleanValue(int code, String description) {
			this.code = code;
			this.description = description;
		}
	}

	public enum StockItemType {
		StockItem(0, "StockItem"), ServiceItem(1, "ServiceItem"), BuiltItem(20, "BuiltItem"), ConsignmentItem(60, "Consignment"), WeighingItem(50,
				"WeighingItem");
		private final int code;
		private final String description;

		public int getCode() {
			return code;
		}

		public String getDescription() {
			return description;
		}

		StockItemType(int code, String description) {
			this.code = code;
			this.description = description;
		}
	}

	public enum ControlAccountReadMethod {
		Default(0, "Default"), Customer(1, "Customer"), CustomerCostCenter(2,
				"CustomerCostCenter"), CustomerDepartmentCostCenter(3,
						"CustomerDepartmentCostCenter"), TransactionDepartmentCostCentre(4,
								"TransactionDepartmentCostCentre");
		private final int code;
		private final String description;

		public int getCode() {
			return code;
		}

		public String getDescription() {
			return description;
		}

		ControlAccountReadMethod(int code, String description) {
			this.code = code;
			this.description = description;
		}
	}

	public enum SalesReturnSubTransType {
		Normal(0, "Normal"), CreditNote(1, "CreditNote"), POSSalesReturn(3, "POSSalesReturn"), SalesReturnExchange(5,
				"SalesReturnExchange");
		private final int code;
		private final String description;

		public int getCode() {
			return code;
		}

		public String getDescription() {
			return description;
		}

		SalesReturnSubTransType(int code, String description) {
			this.code = code;
			this.description = description;
		}
	}

	public enum CashBookSubTransactionType {
		None(0, "None"), Receive(111, "Receive"), Payment(112, "Payment"), Expense(113, "Expense"), Income(114,
				"Income"), KnockOffAR(115, "KnockOffAR"), KnockOffAP(116,
						"KnockOffAP"), ReceiveAP(117, "ReceiveAP"), PaymentAR(118, "PaymentAR");
		private final int code;
		private final String description;

		public int getCode() {
			return code;
		}

		public String getDescription() {
			return description;
		}

		CashBookSubTransactionType(int code, String description) {
			this.code = code;
			this.description = description;
		}
	}

	public enum TaxSetupType {
		CommonModuleBase(0, "CommonModuleBase"), Purchase(1, "Purchase"), Supply(2, "Supply");
		private final int code;
		private final String description;

		public int getCode() {
			return code;
		}

		public String getDescription() {
			return description;
		}

		TaxSetupType(int code, String description) {
			this.code = code;
			this.description = description;
		}
	}

	public enum CashBookTransactionStatus {
		Completed(8, "Completed"), Live(4, "Live"), Void(6, "Void");

		private final int code;
		private final String description;

		public int getCode() {
			return code;
		}

		public String getDescription() {
			return description;
		}

		CashBookTransactionStatus(int code, String description) {
			this.code = code;
			this.description = description;
		}
	}

	public enum CashBookMainTransactionType {
		Receive(101, "Receive"), Payment(102, "Payment"), KnockOff(103, "KnockOff"), Transfer(190,
				"Transfer"), CashBook(200, "CashBook");
		private final int code;
		private final String description;

		public int getCode() {
			return code;
		}

		public String getDescription() {
			return description;
		}

		CashBookMainTransactionType(int code, String description) {
			this.code = code;
			this.description = description;
		}
	}

	public enum JournalTransactionsConstant {
		APALLOCATION("AP Allocation : "), APPAYMENT("AP Payment : "), APRECEIPT("AP Receipt : "), ARALLOCATION(
				"AR Allocation : "), ARPAYMENT("AR Payment : "), ARRECEIPT("AR Receipt : "), CREDITNOTE(
						"Credit Notes : "), DEBITNOTE("Debit Notes : "), DELIVERYORDER("Delivery Order : "), GLPAYMENT(
								"Cash Payment : "), GLRECEIPT("Cash Receipt : "), GRN(
										"Goods Received Note : "), POSSALES("POS Sales : "), POSSALESPAYMENT(
												"Cash Payment : "), POSSALESRECEIPT("Cash Receipt : "), POSSALESRETURN(
														"POS Sales Return : "), PURCHASEINVOICE(
																"Purchase Invoice : "), PURCHASERETURN(
																		"Purchase Return : "), SALESEXCHANGE(
																				"Sales Exchange Invoice : "), SALESINVOICE(
																						"Sales Invoice : "), SALESINVOICE_QUICKENTRY(
																								"Sales Invoice : "), SALESRETURN(
																										"Sales Return : "), STOCKBOM(
																												"BOM : "), STOCKDAMAGE(
																														"Stock Damage : "), STOCKISSUE(
																																"Stock Issue : "), STOCKRECEIVED(
																																		"Stock Received : "), STOCKTRANSFER(
																																				"Stock Transfer : ");
		private final String description;

		public String getDescription() {
			return description;
		}

		JournalTransactionsConstant(String description) {
			this.description = description;
		}
	}

	public enum DeliveryOrderStatus {
		Posted(8, "Posted"), Live(4, "Live"), Draft(1, "Draft"), Confirm(5, "Confirm"), Void(6,
				"Void"), PartialConverted(15,
						"PartialConverted"), Converted(16, "Converted"), Completed(128, "Completed");
		private final int code;
		private final String description;

		public int getCode() {
			return code;
		}

		public String getDescription() {
			return description;
		}

		DeliveryOrderStatus(int code, String description) {
			this.code = code;
			this.description = description;
		}
	}

	public enum JuctionFilterType {
		ByParent(0, "ByParent"), ByChild(1, "ByChild");
		private final int code;
		private final String description;

		public int getCode() {
			return code;
		}

		public String getDescription() {
			return description;
		}

		JuctionFilterType(int code, String description) {
			this.code = code;
			this.description = description;
		}
	}

	public enum RecordStatus {
		Normal(1, "Normal"), Delete(4, "Delete");
		private final int code;
		private final String description;

		public int getCode() {
			return code;
		}

		public String getDescription() {
			return description;
		}

		RecordStatus(int code, String description) {
			this.code = code;
			this.description = description;
		}
	}

	public enum SalesOrderStatus {
		Draft(1, "Draft"), Live(4, "Live"), Void(6, "Void"), Posted(8, "Posted"), PartialConverted(15,
				"PartialConverted"), Converted(16, "Converted"), Completed(128, "Completed");
		private final int code;
		private final String description;

		public int getCode() {
			return code;
		}

		public String getDescription() {
			return description;
		}

		SalesOrderStatus(int code, String description) {
			this.code = code;
			this.description = description;
		}

	}

	public enum ReconcileType {
		UnClear(0, "UnClear"), Clear(1, "Clear");
		private final int code;
		private final String description;

		public int getCode() {
			return code;
		}

		public String getDescription() {
			return description;
		}

		ReconcileType(int code, String description) {
			this.code = code;
			this.description = description;
		}
	}

	public enum AllocationType {
		PaymentNA(0, "PaymentNA"), Receive(1, "Receive"), Payment(2, "Payment"), Invoice(3, "Invoice"), SalesReturn(4,
				"SalesReturn");
		private final int code;
		private final String description;

		public int getCode() {
			return code;
		}

		public String getDescription() {
			return description;
		}

		AllocationType(int code, String description) {
			this.code = code;
			this.description = description;
		}
	}

	public enum BatchTransactionSaveStatus {
		New(0, "New"), Save(1, "Save"), Void(6, "Void"), Post(8, "Post");
		private final String description;
		private final int code;

		public int getCode() {
			return code;
		}

		public String getDescription() {
			return description;
		}

		BatchTransactionSaveStatus(int code, String description) {
			this.code = code;
			this.description = description;
		}
	}

	public enum GLTransactionReversal {
		Normal(0, "Normal"), ReversedRecord(254, "ReversedRecord"), ReversalRecord(255, "ReversalRecord");
		private final String description;
		private final int code;

		public int getCode() {
			return code;
		}

		public String getDescription() {
			return description;
		}

		GLTransactionReversal(int code, String description) {
			this.code = code;
			this.description = description;
		}
	}

	public enum POPTransactionType {
		PurchaseRequisition(301, "PurchaseRequisition"), PurchaseOrder(311, "PurchaseOrder"), PurchaseInvoice(331,
				"PurchaseInvoice"), PurchaseReturn(431, "PurchaseReturn");
		private final int code;
		private final String description;

		public int getCode() {
			return code;
		}

		public String getDescription() {
			return description;
		}

		POPTransactionType(int code, String description) {
			this.code = code;
			this.description = description;
		}
	}

	public enum SalesInvoiceSubTransType {
		Normal(0, "Normal"), POS(1, "POS"), SalesExchange(2, "SalesExchange"), DebitNote(3,
				"DebitNote"), POSSalesReturn(4, "POSSalesReturn"), SalesReturnExchange(5, "SalesReturnExchange");
		private final int code;
		private final String description;

		public int getCode() {
			return code;
		}

		public String getDescription() {
			return description;
		}

		SalesInvoiceSubTransType(int code, String description) {
			this.code = code;
			this.description = description;
		}
	}

	public enum StockRevaluation {
		Perpetual(0, "Perpetual"), Periodic(1, "Periodic");
		private final int code;
		private final String description;

		public int getCode() {
			return code;
		}

		public String getDescription() {
			return description;
		}

		StockRevaluation(int code, String description) {
			this.code = code;
			this.description = description;
		}
	}

	public enum SOPTransactionType {
		Quotation(201, "Quotation"), SalesOrder(211, "SalesOrder"), Invoice(231, "Invoice"), SalesReturn(451,
				"SalesReturn"), Converted(16,
						"Converted"), Completed(128, "Completed"), Void(6, "Void"), Post(8, "Post");
		private final int code;
		private final String description;

		public int getCode() {
			return code;
		}

		public String getDescription() {
			return description;
		}

		SOPTransactionType(int code, String description) {
			this.code = code;
			this.description = description;
		}
	}

	public enum StockTransactionType {
		Stock(500, "Stock"), Receive(402, "Receive"), GoodsReceivedNote(441, "GoodsReceivedNote"), Adjustment(401,
				"Adjustment"), Template(501, "Template"), Assembly(406, "Assembly"), TransferOut(404,
						"TransferOut"), TransferIn(405,
								"TransferIn"), Dissembly(407, "Dissembly"), DeliveryOrder(421, "DeliveryOrder");
		private final int code;
		private final String description;

		public int getCode() {
			return code;
		}

		public String getDescription() {
			return description;
		}

		StockTransactionType(int code, String description) {
			this.code = code;
			this.description = description;
		}
	}

	public enum StockCodeType {
		Manual(0, "Manual"), Auto(1, "Auto"), AutoByStockGroup(2, "AutoByStockGroup"), AutoByCategoryAndStkGrpCode(3,
				"AutoByCategoryAndStkGrpCode"), AutoByGroupCodeFromHierarchy(4,
						"AutoByGroupCodeFromHierarchy"), AutoByCaSuGroupCode(5, "AutoByCaSuGroupCode");

		private final int code;
		private final String description;

		public int getCode() {
			return code;
		}

		public String getDescription() {
			return description;
		}

		StockCodeType(int code, String description) {
			this.code = code;
			this.description = description;
		}
	}

	public enum TaxApplicationType {
		ERP(0, "ERP"), mPOS(1, "mPOS");

		private final int code;
		private final String description;

		public int getCode() {
			return code;
		}

		public String getDescription() {
			return description;
		}

		TaxApplicationType(int code, String description) {
			this.code = code;
			this.description = description;
		}
	}

	public enum CustomerVendorType {
		NA(0, "NA"), Customer(1, "Customer"), Vendor(2, "Vendor"), UpdateBaseOnlyJournal(9, "UpdateBaseOnlyJournal"),;

		private final int code;
		private final String description;

		public int getCode() {
			return code;
		}

		public String getDescription() {
			return description;
		}

		CustomerVendorType(int code, String description) {
			this.code = code;
			this.description = description;
		}
	}

	public enum AllocationMatchType {
		AutoMatchWithoutBlank(1, "AutoMatchWithoutBlank"), AutoWithBlank(2, "AutoWithBlank"), ManunalWithBlank(3,
				"ManunalWithBlank");
		private final int code;
		private final String description;

		public int getCode() {
			return code;
		}

		public String getDescription() {
			return description;
		}

		AllocationMatchType(int code, String description) {
			this.code = code;
			this.description = description;
		}
	}

	public enum CashBookEntryType {
		MultiEntry(0, "MultiEntry"), SingleEntry(1, "SingleEntry"), Transfer(2, "Transfer");
		private final int code;
		private final String description;

		public int getCode() {
			return code;
		}

		public String getDescription() {
			return description;
		}

		CashBookEntryType(int code, String description) {
			this.code = code;
			this.description = description;
		}
	}

	public enum BizPartnerType {
		Company(0, "Company"), Individual(1, "Individual");

		private final int code;
		private final String description;

		public int getCode() {
			return code;
		}

		public String getDescription() {
			return description;
		}

		BizPartnerType(int code, String description) {
			this.code = code;
			this.description = description;
		}
	}

	public enum ParentType {
		BizPartner(0, "BizPartner"), Customer(1, "Customer"), Vendor(2, "Vendor"), Member(3, "Member");

		private final int code;
		private final String description;

		public int getCode() {
			return code;
		}

		public String getDescription() {
			return description;
		}

		ParentType(int code, String description) {
			this.code = code;
			this.description = description;
		}
	}

	public enum MemberLevelType {
		FamilyMember(0, "FamilyMember"), Member(1, "Member");

		private final int code;
		private final String description;

		public int getCode() {
			return code;
		}

		public String getDescription() {
			return description;
		}

		MemberLevelType(int code, String description) {
			this.code = code;
			this.description = description;
		}
	}

	public enum JunctionChildType {
		Contact(1, "FamilyMember");

		private final int code;
		private final String description;

		public int getCode() {
			return code;
		}

		public String getDescription() {
			return description;
		}

		JunctionChildType(int code, String description) {
			this.code = code;
			this.description = description;
		}
	}

	public enum AddresssType {
		Mailing(1, "Mailing"), Billing(2, "Billing"), Delivery(4, "Delivery");

		private final int code;
		private final String description;

		public int getCode() {
			return code;
		}

		public String getDescription() {
			return description;
		}

		AddresssType(int code, String description) {
			this.code = code;
			this.description = description;
		}
	}

	public enum StockTransferSaveStatus {
		Draft(1, "Draft"), Approve(2, "Approve"), Confirm(4, "Confirm"), Update(4, "Update"), Void(6, "Void"), Save(8,
				"Save");

		private final int code;
		private final String description;

		public int getCode() {
			return code;
		}

		public String getDescription() {
			return description;
		}

		StockTransferSaveStatus(int code, String description) {
			this.code = code;
			this.description = description;
		}
	}

	public enum TransferCaller {
		TransferInOut(0, "TransferInOut"), TransferOut(1, "TransferOut"), TransferIn(2, "TransferIn"), Conversion_Pack(
				3, "Conversion_Pack"), TransferInWH(4,
						"TransferInWH"), TransferPosting(5, "TransferPosting"), TransitTransfer(6, "TransitTransfer");

		private final int code;
		private final String description;

		public int getCode() {
			return code;
		}

		public String getDescription() {
			return description;
		}

		TransferCaller(int code, String description) {
			this.code = code;
			this.description = description;
		}
	}

	public enum UOMType {
		Base(1, "Approve"), Stock(2, "Confirm"), Additional(3, "Additional") ;
		private final int code;
		private final String description;

		public int getCode() {
			return code;
		}

		public String getDescription() {
			return description;
		}

		UOMType(int code, String description) {
			this.code = code;
			this.description = description;
		}
	}

	public enum CostingMethod {
		OverAllAverage(0, "OverAllAverage"), IndividualAverage(1, "IndividualAverage"), Standard(2, "Standard");
		private final int code;
		private final String description;

		public int getCode() {
			return code;
		}

		public String getDescription() {
			return description;
		}

		CostingMethod(int code, String description) {
			this.code = code;
			this.description = description;
		}
	}

	public enum GoodsReceivedNoteStatus {
		Draft(1, "Draft"), Live(4, "Live"), Void(6, "Standard"), Posted(8, "Posted"), PartialConverted(15,
				"PartialConverted"), Converted(16, "Converted"), Completed(128, "Completed");

		private final int code;
		private final String description;

		public int getCode() {
			return code;
		}

		public String getDescription() {
			return description;
		}

		GoodsReceivedNoteStatus(int code, String description) {
			this.code = code;
			this.description = description;
		}
	}

	public enum StockReceiveSaveStatus {
		Draft(1, "Draft"), Update(4, "Update"), Void(6, "Void"), Save(8, "Save");
		private final int code;
		private final String description;

		public int getCode() {
			return code;
		}

		public String getDescription() {
			return description;
		}

		StockReceiveSaveStatus(int code, String description) {
			this.code = code;
			this.description = description;
		}
	}

	public enum PurchaseRequisitionStatus {
		Draft(1, "Draft"), Live(4, "Live"), Void(6, "Standard"), Posted(8, "Posted"), PartialConverted(15,
				"PartialConverted"), Converted(16, "Converted"), Completed(128, "Completed");

		private final int code;
		private final String description;

		public int getCode() {
			return code;
		}

		public String getDescription() {
			return description;
		}

		PurchaseRequisitionStatus(int code, String description) {
			this.code = code;
			this.description = description;
		}
	}
	
	public enum PurchaseOrderStatus {
		Draft(1, "Draft"), Live(4, "Live"), Void(6, "Standard"), Posted(8, "Posted"), PartialConverted(15,
				"PartialConverted"), Converted(16, "Converted"), Completed(128, "Completed");

		private final int code;
		private final String description;

		public int getCode() {
			return code;
		}

		public String getDescription() {
			return description;
		}

		PurchaseOrderStatus(int code, String description) {
			this.code = code;
			this.description = description;
		}
	}
	
	public enum PurchaseInvoiceStatus {
		Draft(1, "Draft"), Live(4, "Live"), Void(6, "Standard"), Posted(8, "Posted"), PartialConverted(15,
				"PartialConverted"), Converted(16, "Converted"), Completed(128, "Completed");

		private final int code;
		private final String description;

		public int getCode() {
			return code;
		}

		public String getDescription() {
			return description;
		}

		PurchaseInvoiceStatus(int code, String description) {
			this.code = code;
			this.description = description;
		}
	}

	public enum SalesReturnStatus {
		Draft(1, "Draft"), Live(4, "Live"), Void(6, "Standard"), Posted(8, "Posted"), PartialConverted(15,
				"PartialConverted"), Converted(16, "Converted"), Completed(128, "Completed");

		private final int code;
		private final String description;

		public int getCode() {
			return code;
		}

		public String getDescription() {
			return description;
		}

		SalesReturnStatus(int code, String description) {
			this.code = code;
			this.description = description;
		}
	}

	public enum JournalEntryTransType {
		JournalEntry(1, "JournalEntry");
		private final int code;
		private final String description;

		public int getCode() {
			return code;
		}

		public String getDescription() {
			return description;
		}

		JournalEntryTransType(int code, String description) {
			this.code = code;
			this.description = description;
		}
	}

	public enum ProductionType {
		Production(0, "Production"), Reference(1, "Reference"), Packaging(2, "Packaging");
		private final int code;
		private final String description;

		public int getCode() {
			return code;
		}

		public String getDescription() {
			return description;
		}

		ProductionType(int code, String description) {
			this.code = code;
			this.description = description;
		}
	}

	public enum LocationBinViewType {
		All(0, "All"), Between(1, "Between"), Is(2, "Is"), BeginWith(3, "BeginWith");
		private final int code;
		private final String description;

		public int getCode() {
			return code;
		}

		public String getDescription() {
			return description;
		}

		LocationBinViewType(int code, String description) {
			this.code = code;
			this.description = description;
		}
	}

	public enum GLCode {
		INCOME_START(301, "INCOME_START"), EX_END(800, "EX_END"), NET_PROFIT(710, "NET_PROFIT");
		private final int code;
		private final String description;

		public int getCode() {
			return code;
		}

		public String getDescription() {
			return description;
		}

		GLCode(int code, String description) {
			this.code = code;
			this.description = description;
		}
	}

	public enum PriceChangeType {
		PriceChange(0, "PriceChange"), CostChange(1, "CostChange"), CostChangeV5Core(2,
				"CostChangeV5Core"), PriceChangeOnExRate(3, "PriceChangeOnExRate");
		private final int code;
		private final String description;

		public int getCode() {
			return code;
		}

		public String getDescription() {
			return description;
		}

		PriceChangeType(int code, String description) {
			this.code = code;
			this.description = description;
		}

	}

	public enum Module {
		GeneralLedger(1, "GLC"), CashbookPayment(2, "CBP"), CashbookReceipt(3, "CBR"), Sales(4, "SOP"), Purchase(5,
				"POP"), Stock(6, "STK"), Payroll(7, "M01");
		private final int code;
		private final String description;

		public int getCode() {
			return code;
		}

		public String getDescription() {
			return description;
		}

		Module(int code, String description) {
			this.code = code;
			this.description = description;
		}
	}

	public enum PurchaseInvoiceSubTransType {
		Normal(0, "Normal"), DebitNote(1, "DebitNote");
		private final int code;
		private final String description;

		public int getCode() {
			return code;
		}

		public String getDescription() {
			return description;
		}

		PurchaseInvoiceSubTransType(int code, String description) {
			this.code = code;
			this.description = description;
		}
	}

	public enum PurchaseReturnSubTransType {
		Normal(0, "Normal"), CreditNote(1, "CreditNote");
		private final int code;
		private final String description;

		public int getCode() {
			return code;
		}

		public String getDescription() {
			return description;
		}

		PurchaseReturnSubTransType(int code, String description) {
			this.code = code;
			this.description = description;
		}
	}

	public enum batchSerialConfigure {
		None(0, "None"), BSConfiguredInPIAndGRN(1, "BSConfiguredInIssue"), BSConfiguredInGRN(2,
				"BSConfiguredInIssue"), BSConfiguredInIssue(3, "BSConfiguredInIssue");

		private final int code;
		private final String description;

		public int getCode() {
			return code;
		}

		public String getDescription() {
			return description;
		}

		batchSerialConfigure(int code, String description) {
			this.code = code;
			this.description = description;
		}
	}
	
	 public enum OtherTransactionType
     {
        Customer(300, "Customer"), Vendor(400, "Vendor");
 		private final int code;
 		private final String description;

 		public int getCode() {
 			return code;
 		}

 		public String getDescription() {
 			return description;
 		}

 		OtherTransactionType(int code, String description) {
 			this.code = code;
 			this.description = description;
 		}
     }
	 
	public enum AccountingPeriodStatus {
		Open(0, "Open"), PeriodClosed(1, "PeriodClosed"), YearClosed(2, "YearClosed");
		private final int code;
		private final String description;

		public int getCode() {
			return code;
		}

		public String getDescription() {
			return description;
		}

		AccountingPeriodStatus(int code, String description) {
			this.code = code;
			this.description = description;
		}
	}
	
	public enum BatchStatementStatus {
		Open(0, "Open"), Close(1, "Close"), Future(2, "Future");
		private final int code;
		private final String description;

		public int getCode() {
			return code;
		}

		public String getDescription() {
			return description;
		}

		BatchStatementStatus(int code, String description) {
			this.code = code;
			this.description = description;
		}
	}
}
