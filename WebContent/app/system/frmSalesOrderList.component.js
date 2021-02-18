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
    var FrmSaleOrderLisComponent;
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
            FrmSaleOrderLisComponent = (function () {
                function FrmSaleOrderLisComponent(ics, http) {
                    this.ics = ics;
                    this.http = http;
                    this._search_param_saleorderlist = this.getDefaultSearchObject();
                    this._pagerData = { currentPage: 1, totalCount: 0 };
                    this._array = [];
                }
                FrmSaleOrderLisComponent.prototype.showAll = function () {
                    this._search_param_saleorderlist = this.getDefaultSearchObject();
                    this.search();
                };
                FrmSaleOrderLisComponent.prototype.getDefaultSearchObject = function () {
                    return { "code": "", "description": "", "prefix": "", "currentPage": 1, "totalCount": this.ics._profile.n1, "referenceno": "", "secondrefno": "", "locSyskey": "-1", "status": "0", "docdateoptr": "all", "pageSize": "", "tranType": "0" };
                };
                FrmSaleOrderLisComponent.prototype.search = function () {
                    var _this = this;
                    this._search_param_saleorderlist.currentPage = this._pagerData.currentPage;
                    this._search_param_saleorderlist.totalCount = this.ics._profile.n1;
                    var data = { "code": this._search_param_saleorderlist.code, "description": this._search_param_saleorderlist.description, "prefix": this._search_param_saleorderlist.prefix, "currentPage": this._pagerData.currentPage, "pageSize": 10, "totalCount": this._search_param_saleorderlist.totalCount, "referenceno": this._search_param_saleorderlist.referenceno, "secondrefno": this._search_param_saleorderlist.secondrefno, "locSyskey": this._search_param_saleorderlist.locSyskey, "status": this._search_param_saleorderlist.status, "docdateoptr": this._search_param_saleorderlist.docdateoptr, "tranType": this._search_param_saleorderlist.tranType };
                    var url = this.ics._apiurl + 'saleorder/searchList';
                    this.http.doPost(url, data).subscribe(function (data) {
                        console.log(data);
                        if (data.dtlList.length > 0) {
                            _this._array = data.dtlList;
                            _this._pagerData.totalCount = data.totalCount;
                        }
                        else {
                            _this._array = [];
                            _this._pagerData.totalCount = 0;
                            _this._pagerData.currentPage = 0;
                        }
                    }, function () { });
                };
                FrmSaleOrderLisComponent = __decorate([
                    core_1.Component({
                        selector: 'frm-saleorderList',
                        template: "\n        <div class=\"container col-md-12\">\n    <form class=\"form-horizontal\" ngNoForm>\n    <legend>Sale Order List</legend> \n    <div class=\"col-md-4\">\n                <div class=\"form-group \">\n                    <label class=\" control-label col-md-3\" style=\"text-align: left;\">Code.</label>\n                    <div class=\"col-md-9 \">\n                        <div class=\"input-group\">\n                            <span class=\"input-group-btn\"> \n                                <input type=\"text\"  [(ngModel)]=\"_search_param_saleorderlist.t1\" name=\"userid\" class=\"select_control form-control\" placeholder=\"Code\"/>\n                            </span>\n                        </div>\n                    </div>\n                </div>                \n            </div>\n\n             <div class=\"col-md-4\">\n                <div class=\"form-group \">\n                    <label class=\" control-label col-md-3\" style=\"text-align: left;\">Description</label>\n                    <div class=\"col-md-9 \">\n                        <div class=\"input-group\">\n                            <span class=\"input-group-btn\"> \n                                <input type=\"text\"  [(ngModel)]=\"_search_param_saleorderlist.t2\" name=\"username\" class=\"select_control form-control\" placeholder=\"Description\"/>\n                            </span>\n                        </div>\n                    </div>\n                </div>\n            </div> \n         \n            <div class=\"col-md-4\">\n                <input type=\"button\" class=\"btn btn-primary\" (click)=\"showAll()\" value=\"Show All\" />\n                <input type=\"button\" class=\"btn btn-primary\"  value=\"Refresh\" />\n                <input type=\"button\" class=\"btn btn-primary\"  value=\"New\" />\n            </div>\n     \n        <hr>\n        <div class=\"table_container\">  \n           <table class=\"table table-striped table-condensed table-hover tblborder\" style=\"font-size:14px;\">\n                <thead>\n                    <tr>\n                        <th style=\"width:60px;\">Code</th>    \n                        <th style=\"width:60px;\">Description</th>\n                         <th style=\"width:60px\">Location</th>    \n                        <th style=\"width:60px;\">Qty</th>\n                          <th style=\"width:60px\">UOM</th>    \n                        <th style=\"width:60px\">Price</th>\n                         <th style=\"width:60px\">UnitDiscount</th>    \n                        <th style=\"width:60px\">Disc%</th>\n                          <th style=\"width:60px\">Tax%</th>\n                         <th style=\"width:60px\">Tax Amount</th>    \n                        <th style=\"width:60px\">Amount</th>\n                       \n                    </tr>\n                </thead>\n                <tbody>\n                    <tr *ngFor=\"let obj of _array; let i=index\">\n                        <td style=\"width:60px\">{{obj.t2}}</td>\n                          <td style=\"width:60px\">{{obj.t3}}</td>\n                         <td style=\"width:60px\">{{obj.n26}}</td>\n                        <td style=\"width:60px\">{{obj.n6}}</td>\n                          <td style=\"width:60px\"></td>\n                        <td style=\"width:60px\">{{obj.n14}}</td>\n                         <td style=\"width:60px\">{{obj.n19}}</td>\n                        <td style=\"width:60px\">{{obj.n53}}</td>\n                        <td style=\"width:60px\">{{obj.n35}}</td>\n                        <td style=\"width:60px\">{{obj.taxAmt}}</td>\n                        <td style=\"width:60px\">{{obj.n23}}</td>\n                    </tr> \n                </tbody>\n            </table>\n        </div>\n        </form>\n    </div>\n    "
                    }), 
                    __metadata('design:paramtypes', [rp_intercom_service_1.RpIntercomService, rp_http_service_1.RpHttpService])
                ], FrmSaleOrderLisComponent);
                return FrmSaleOrderLisComponent;
            }());
            exports_1("FrmSaleOrderLisComponent", FrmSaleOrderLisComponent);
        }
    }
});
//# sourceMappingURL=frmSalesOrderList.component.js.map