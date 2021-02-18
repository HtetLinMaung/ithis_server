System.register(["@angular/core", "@angular/router", "../util/rp-client.util", "../framework/rp-intercom.service", "../framework/rp-http.service", "../framework/rp-references"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, rp_client_util_1, rp_intercom_service_1, rp_http_service_1, rp_references_1;
    var FrmSalesDetailsReportComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (rp_client_util_1_1) {
                rp_client_util_1 = rp_client_util_1_1;
            },
            function (rp_intercom_service_1_1) {
                rp_intercom_service_1 = rp_intercom_service_1_1;
            },
            function (rp_http_service_1_1) {
                rp_http_service_1 = rp_http_service_1_1;
            },
            function (rp_references_1_1) {
                rp_references_1 = rp_references_1_1;
            }],
        execute: function() {
            FrmSalesDetailsReportComponent = (function () {
                function FrmSalesDetailsReportComponent(ics, _router, route, http, ref) {
                    this.ics = ics;
                    this._router = _router;
                    this.route = route;
                    this.http = http;
                    this.ref = ref;
                    this._util = new rp_client_util_1.ClientUtil();
                    this._array = [];
                    this._search_param_saledetaillist = this.getDefaultSearchObject();
                    this._pagerData = { currentPage: 1, totalCount: 0 };
                    this._datepickerOpts = this._util.getDatePicker();
                    this._dates = { "fromDate": this._util.getCurrentDate(), "toDate": this._util.getCurrentDate() };
                    this.subscription = ics.rpbean$.subscribe(function (x) { });
                    if (!ics.getRole() || ics.getRole() == 0) {
                        this._router.navigate(['/login']);
                    }
                    else {
                        this.search(true);
                    }
                }
                FrmSalesDetailsReportComponent.prototype.getDefaultSearchObject = function () {
                    return { "fromDate": "", "toDate": "", "STKCODE": "", "STKDESC": "", "PRICE": "", "QTY": "", "UOM": "", "DISAMT": "", "DISPERCENT": "", "AMT": "", "NETAMT": "", "currentPage": 1, "totalCount": 0, "pageSize": 10 };
                };
                FrmSalesDetailsReportComponent.prototype.showAll = function () {
                    this._search_param_saledetaillist = this.getDefaultSearchObject();
                    this.search(false);
                };
                FrmSalesDetailsReportComponent.prototype.search = function (status) {
                    var _this = this;
                    if (status == true) {
                        this._search_param_saledetaillist = this.prepareSearchObject(status);
                    }
                    this._search_param_saledetaillist.currentPage = this._pagerData.currentPage;
                    console.log(this._search_param_saledetaillist);
                    var url = this.ics._apiurl + 'saledetail/searchSalesDetialsList';
                    this.http.doPost(url, this._search_param_saledetaillist).subscribe(function (data) {
                        console.log(data);
                        if (data.SalesDetailsData != null) {
                            if (data.SalesDetailsData.length > 0) {
                                _this._array = data.SalesDetailsData;
                                _this._pagerData.totalCount = data.totalCount;
                            }
                            else {
                                _this._array = [];
                                _this._pagerData.totalCount = 0;
                                _this._pagerData.currentPage = 0;
                                _this._dates = { "fromDate": _this._util.getCurrentDate(), "toDate": _this._util.getCurrentDate() };
                                _this.showMessage(_this._util.MSG_TYPE.INFO, 'Data Not Found!');
                            }
                        }
                    }, function () { });
                };
                FrmSalesDetailsReportComponent.prototype.prepareSearchObject = function (status) {
                    if (status == true) {
                        this._search_param_saledetaillist.fromDate = this._util.getDatePickerDate(this._dates.fromDate);
                        this._search_param_saledetaillist.toDate = this._util.getDatePickerDate(this._dates.toDate);
                    }
                    this._search_param_saledetaillist.currentPage = this._pagerData.currentPage;
                    this._search_param_saledetaillist.pageSize = this.ics._profile.n1;
                    return this._search_param_saledetaillist;
                };
                FrmSalesDetailsReportComponent.prototype.goNew = function () {
                    this._array = [];
                    this._dates = { "fromDate": this._util.getCurrentDate(), "toDate": this._util.getCurrentDate() };
                };
                FrmSalesDetailsReportComponent.prototype.changePage = function (e) {
                    this._pagerData.currentPage = e.currentPage;
                    this.search(false);
                };
                FrmSalesDetailsReportComponent.prototype.showMessage = function (t, m) {
                    this.ics.sendBean({ t1: "rp-snack", t2: t.type, t3: m });
                };
                FrmSalesDetailsReportComponent = __decorate([
                    core_1.Component({
                        selector: 'frm-saledetailrp-list',
                        template: "\n    <div class=\"container col-md-12\">\n    <form class=\"form-horizontal\" ngNoForm>\n    <legend>Sales Details Report</legend> \n  \n        <div class=\"row col-md-12\"> \n\n            <div class=\"col-md-4\">\n                <div class=\"form-group\">\n                    <label class=\"col-md-5\">From Date</label>                         \n                    <div class=\"col-md-7\">\n                        <datetime [(ngModel)] = \"_dates.fromDate\" [datepicker]=\"_datepickerOpts\"></datetime>\n                \n                    </div>\n                </div> \n            </div>\n            <div class=\"col-md-4\">\n                <div class=\"form-group\">\n                    <label class=\"col-md-5\">To Date</label>                         \n                    <div class=\"col-md-7\">\n                        <datetime [(ngModel)] = \"_dates.toDate\" [datepicker]=\"_datepickerOpts\"></datetime>\n                \n                    </div>\n                </div>\n            </div>\n            \n            <div class=\"col-md-4\">\n                <input type=\"button\" class=\"btn btn-primary\" (click)=\"_pagerData.currentPage=1;showAll()\" value=\"Show All\" />\n                <input type=\"button\" class=\"btn btn-primary\" (click)=\"_pagerData.currentPage=1;search(true)\" value=\"Refresh\" />\n                <input type=\"button\" class=\"btn btn-primary\" (click)=\"goNew()\" value=\"New\" />\n            </div>\n        </div>\n\n        <rp-pager (rpChanged)=\"changePage($event)\" [rpTotalCount]=\"_pagerData.totalCount\" [rpCurrent]=\"_pagerData.currentPage\"></rp-pager>\n\n        <div class=\"table_container\">  \n           <table class=\"table table-striped table-condensed table-hover tblborder\" style=\"font-size:14px;\">\n                <thead>\n                    <tr>\n                        <th style=\"width:10%\">Stock Code</th>    \n                        <th style=\"width:20%;\">Description</th>\n                        <th style=\"width:10%;\">Qty</th>\n                        <th style=\"width:10%;\">Price</th>\n                        <th style=\"width:10%;\">UOM</th>                        \n                        <th style=\"width:10%;\">Discount Amount</th>\n                        <th style=\"width:10%;\">Discount%</th>\n                        <th style=\"width:10%;\">Amount</th>\n                        <th style=\"width:10%;\">Net Amount</th>\n                    </tr>\n                </thead>\n                <tbody>\n                    <tr *ngFor=\"let obj of _array; let i=index\">\n                        <td  style=\"\">{{obj.stkCode}}</td>\n                        <td style=\"\">{{obj.stkDesc}}</td>\n                        <td style=\"\" align=\"right\">{{obj.price}}</td>\n                        <td style=\"\" align=\"right\">{{obj.qty}}</td>\n                        <td style=\"\">{{obj.uom}}</td>\n                        <td style=\"\" align=\"right\">{{obj.discAmt}}</td>\n                        <td style=\"\" align=\"right\">{{obj.discPer}}</td>\n                        <td style=\"\" align=\"right\">{{obj.amt}}</td>\n                        <td style=\"\" align=\"right\">{{obj.netAmt}}</td>\n                    </tr> \n                </tbody>\n            </table>\n        </div>\n        </form>\n    </div>\n  "
                    }), 
                    __metadata('design:paramtypes', [rp_intercom_service_1.RpIntercomService, router_1.Router, router_1.ActivatedRoute, rp_http_service_1.RpHttpService, rp_references_1.RpReferences])
                ], FrmSalesDetailsReportComponent);
                return FrmSalesDetailsReportComponent;
            }());
            exports_1("FrmSalesDetailsReportComponent", FrmSalesDetailsReportComponent);
        }
    }
});
//# sourceMappingURL=frmSalesDetailsReport.component.js.map