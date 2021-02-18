System.register(["@angular/core", "../framework/rp-intercom.service", "../framework/rp-http.service"], function(exports_1, context_1) {
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
    var core_1, rp_intercom_service_1, rp_http_service_1;
    var FrmDailySalesReport;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (rp_intercom_service_1_1) {
                rp_intercom_service_1 = rp_intercom_service_1_1;
            },
            function (rp_http_service_1_1) {
                rp_http_service_1 = rp_http_service_1_1;
            }],
        execute: function() {
            FrmDailySalesReport = (function () {
                function FrmDailySalesReport(ics, http) {
                    this.ics = ics;
                    this.http = http;
                    this._totalAmount = 0;
                    this._totalNetAmount = 0;
                    this._totalTaxAmount = 0;
                    this._totalDisAmount = 0;
                    this._pagerData = { currentPage: 1, totalCount: 0 };
                    this._search_param = this.getDefaultSearchObject();
                    this._array = [];
                }
                FrmDailySalesReport.prototype.ngOnInit = function () {
                    this.showAll();
                };
                FrmDailySalesReport.prototype.showAll = function () {
                    this._search_param = this.getDefaultSearchObject();
                    this.search();
                };
                FrmDailySalesReport.prototype.getDefaultSearchObject = function () {
                    return { "fromdate": "", "todate": "", "salesptype": "0", "salesperson": "",
                        "currentPage": 1, "totalCount": this.ics._profile.n1
                    };
                };
                FrmDailySalesReport.prototype.search = function () {
                    var _this = this;
                    this._search_param.currentPage = this._pagerData.currentPage;
                    this._search_param.totalCount = this.ics._profile.n1;
                    var data = { "fromdate": this._search_param.fromdate, "todate": this._search_param.todate, "salesptype": this._search_param.salesptype,
                        "salesperson": this._search_param.salesperson, "currentPage": this._pagerData.currentPage, "pageSize": 10, "totalCount": this._search_param.totalCount };
                    var url = this.ics._apiurl + 'dailysale/dailysaleList';
                    this.http.doPost(url, data).subscribe(function (data) {
                        console.log(data);
                        if (data.dailysaleData.length > 0) {
                            _this._array = data.dailysaleData;
                            _this._pagerData.totalCount = data.totalCount;
                            _this._totalAmount = data.totalAmount;
                            _this._totalNetAmount = data.totalNetAmt;
                            _this._totalTaxAmount = data.totalTaxAmt;
                            _this._totalDisAmount = data.totalDiscountAmt;
                        }
                        else {
                            _this._array = [];
                            _this._pagerData.totalCount = 0;
                            _this._pagerData.currentPage = 0;
                            _this._totalAmount = 0;
                            _this._totalNetAmount = 0;
                            _this._totalTaxAmount = 0;
                            _this._totalDisAmount = 0;
                        }
                    }, function () { });
                };
                FrmDailySalesReport = __decorate([
                    core_1.Component({
                        selector: 'frm-dailysalesreport',
                        template: " \n    <div class=\"container col-md-12\" *ngIf = '!_divexport'>\n        <form class=\"form-horizontal\" ngNoForm>\n            <legend style=\"font-size:19px;margin: 8px 1px\"><span>Daily Sales</span></legend>\n                <div class=\"row\">\n                    <div class=\"col-md-4\">\n                        <input type=\"button\" class=\"btn btn-primary\" (click)=\"_pagerData.currentPage=1;showAll()\" value=\"Show All\" />\n                        <input type=\"button\" class=\"btn btn-primary\" (click)=\"_pagerData.currentPage=1;refersh()\" value=\"Refresh\" />\n                        <input type=\"button\" class=\"btn btn-primary\" (click)=\"goPrint()\" value=\"Print\" />\n                    </div> \n                </div>\n                <hr>\n                <div class=\"row col-md-12\">  \n                    <div class=\"col-md-4\">\n                        <div class=\"form-group\">\n                            <label class=\"control-label col-md-3 col-sm-3\" style=\"text-align: left;\">Sales Person</label>\n                            <div class=\"col-md-9 \">\n                                <div class=\"input-group\">\n                                    <span class=\"input-group-btn\">\n                                        <select (change)=\"changeSPersonOption($event.target.value)\" class=\"form-control input-sm\">\n                                            <option [value]= \"0\">All</option>\n                                            <option [value]= \"1\">contain</option>\n                                            <option [value]= \"2\">equal</option>\n                                            <option [value]= \"3\">begin with</option>\n                                        </select>\n                                    </span> \n                                    <span class=\"input-group-btn\"> \n                                        <input class=\"select_control form-control input-sm\" type=\"text\">\n                                    </span>\n                                </div>\n                            </div>\n                        </div>                \n                    </div>\n\n                <div class=\"col-md-4\">\n                    <div class=\"form-group \">\n                        <label class=\" control-label col-md-3\" style=\"text-align: left;\">Date.</label>\n                        <div class=\"col-md-9 \">\n                            <div class=\"input-group\">\n                                <span class=\"input-group-btn\">\n                                   <div class='date'>                                                                         \n                                        <input type=\"date\" [(ngModel)]=\"fromdate\" (dateTimeChange)=\"changeDateValue($event)\" class=\"form-control input-sm\">                                                                        \n                                    </div>\n                                </span> \n                                <span>\n                                    <div class=\"control-label\" style=\"text-align:center;width: 2%;padding: 0px\">-</div>\n                                </span>\n                                <span class=\"input-group-btn\"> \n                                    <div class='date'>                                                                         \n                                        <input type=\"date\" [(ngModel)]=\"todate\" class=\"form-control input-sm\" >                                                                       \n                                    </div>\n                                </span>\n                                <span class=\"input-group-btn\"> \n                                    <label class=\"control-label\" style=\"margin-bottom:4px\">\n                                        <input type=\"checkbox\" (change)=\"checkDateValue()\">\n                                        &nbsp;All\n                                    </label>\n                                </span>                                \n                            </div>\n                        </div>\n                    </div>\n                </div> \n\n            </div>                \n\n            <div class=\"col-md-12\" style=\"padding: 0px\">\n                <rp-pager [rpTotalCount]=\"_pagerData.totalCount\" [rpCurrent]=\"_pagerData.currentPage\"></rp-pager>\n            </div>\n                \n            <div class=\"col-md-12\" style=\"padding: 2px 0px 2px\">\n                <div class=\"table_container\">\n                    <table class=\"table table-striped table-condensed table-hover tblborder\" style=\"width:100%;height:98%\">\n                        <caption></caption>\n                        <thead>\n                            <tr>\n                                <th style=\"width:12%\">Date</th>\n                                <th style=\"width:24%\">Amount</th>\n                                <th style=\"width:20%\">Discount</th>\n                                <th style=\"width:20%\">Tax</th>\n                                <th style=\"width:24%\">Net Amount</th>\n                            </tr>\n                        </thead>\n\n                        <tbody>                            \n                            <tr *ngFor=\"let item of _array\">\n                                <td>{{item.t1}}</td>\n                                <td style=\"text-align:right\">{{item.t2 | number:'1.2-2'}}</td>\n                                <td style=\"text-align:right\">{{item.t3 | number:'1.2-2'}}</td>\n                                <td style=\"text-align:right\">{{item.t4 | number:'1.2-2'}}</td>\n                                <td style=\"text-align:right\">{{item.t5 | number:'1.2-2'}}</td>\n                            </tr>\n                            <tr class=\"border-row\">\n                                <td>Total Amount</td>\n                                <td style=\"text-align:right\">{{_totalAmount | number:'1.2-2'}}</td>\n                                <td style=\"text-align:right\">{{_totalDisAmount | number:'1.2-2'}}</td>\n                                <td style=\"text-align:right\">{{_totalTaxAmount | number:'1.2-2'}}</td>\n                                <td style=\"text-align:right\">{{_totalNetAmount | number:'1.2-2'}}</td>\n                            </tr>\n                        </tbody>\n                    </table>  \n                </div>      \n            </div>           \n        </form>\n  </div>\n  <div style=\"width:100%;height:100%\" *ngIf=\"_divexport\">\n    <app-report-viewer [url]=\"_printUrl\" [params]=\"_rptparams\" (close)=goClose($event)></app-report-viewer>\n  </div>    \n",
                        styles: ["\nlabel {\n    font-weight: 400!important;\n    font-size: 13px;\n}\n"],
                    }), 
                    __metadata('design:paramtypes', [rp_intercom_service_1.RpIntercomService, rp_http_service_1.RpHttpService])
                ], FrmDailySalesReport);
                return FrmDailySalesReport;
            }());
            exports_1("FrmDailySalesReport", FrmDailySalesReport);
        }
    }
});
//# sourceMappingURL=frmDailySales.component.js.map