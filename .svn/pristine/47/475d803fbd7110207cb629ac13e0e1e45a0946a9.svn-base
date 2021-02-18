System.register(['@angular/core', '@angular/router', '../framework/rp-intercom.service', '../framework/rp-http.service', '../util/rp-client.util'], function(exports_1, context_1) {
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
    var core_1, router_1, rp_intercom_service_1, rp_http_service_1, rp_client_util_1;
    var FrmStockListComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (rp_intercom_service_1_1) {
                rp_intercom_service_1 = rp_intercom_service_1_1;
            },
            function (rp_http_service_1_1) {
                rp_http_service_1 = rp_http_service_1_1;
            },
            function (rp_client_util_1_1) {
                rp_client_util_1 = rp_client_util_1_1;
            }],
        execute: function() {
            FrmStockListComponent = (function () {
                function FrmStockListComponent(ics, http, router) {
                    this.ics = ics;
                    this.http = http;
                    this.router = router;
                    this._util = new rp_client_util_1.ClientUtil();
                    this._array = [];
                    this._search_param_userlist = this.getDefaultObj();
                    this._pagerData = { currentPage: 1, totalCount: 0 };
                }
                FrmStockListComponent.prototype.getDefaultObj = function () {
                    return { "code": "", "description": "", "prefix": "", "currentPage": 1, "totalCount": this.ics._profile.n1 };
                };
                FrmStockListComponent.prototype.showAll = function () {
                    this._search_param_userlist = this.getDefaultObj();
                    this.search();
                };
                FrmStockListComponent.prototype.search = function () {
                    var _this = this;
                    this._search_param_userlist.currentPage = this._pagerData.currentPage;
                    this._search_param_userlist.totalCount = this.ics._profile.n1;
                    var data = { "code": this._search_param_userlist.code, "description": this._search_param_userlist.description, "prefix": this._search_param_userlist.prefix, "currentPage": this._pagerData.currentPage, "pageSize": 10, "totalCount": this._search_param_userlist.totalCount };
                    var url = this.ics._apiurl + 'StockSetup/FindStockList';
                    this.http.doPost(url, this._search_param_userlist).subscribe(function (data) {
                        console.log(data);
                        if (data.userdatalist.length > 0) {
                            _this._array = data.userdatalist;
                        }
                        else {
                            _this._array = [];
                            _this._pagerData.totalCount = 0;
                            _this._pagerData.currentPage = 0;
                        }
                    }, function () { });
                };
                FrmStockListComponent = __decorate([
                    core_1.Component({
                        selector: 'frm-stockgroup',
                        template: "       \n        <div class=\"container col-md-12\">\n    <form class=\"form-horizontal\" ngNoForm>\n    <legend>Stock List</legend> \n        <div class=\"row col-md-12\">  \n            <div class=\"col-md-4\">\n                <div class=\"form-group \">\n                    <label class=\" control-label col-md-3\" style=\"text-align: left;\">Stock ID.</label>\n                    <div class=\"col-md-9 \">\n                        <div class=\"input-group\">\n                          <span class=\"input-group-btn\"> \n                                <input type=\"text\"  [(ngModel)]=\"_search_param_userlist.code\" name=\"code\" class=\"select_control form-control\" placeholder=\"Stock ID\"/>\n                            </span>\n                        </div>\n                    </div>\n                </div>                \n            </div>\n\n             <div class=\"col-md-4\">\n                <div class=\"form-group \">\n                    <label class=\" control-label col-md-3\" style=\"text-align: left;\">Description</label>\n                    <div class=\"col-md-9 \">\n                        <div class=\"input-group\">\n                          <span class=\"input-group-btn\"> \n                                <input type=\"text\"  [(ngModel)]=\"_search_param_userlist.description\" name=\"description\" class=\"select_control form-control\" placeholder=\"Description\"/>\n                            </span>\n                        </div>\n                    </div>\n                </div>\n            </div> \n\n            <div class=\"col-md-4\">\n                <input type=\"button\" class=\"btn btn-primary\" (click)=\"_pagerData.currentPage=1;showAll()\" value=\"Show All\" />\n                <input type=\"button\" class=\"btn btn-primary\" (click)=\"_pagerData.currentPage=1;search()\" value=\"Refresh\" />\n                \n            </div>\n        </div>\n\n        <rp-pager (rpChanged)=\"changePage($event)\" [rpTotalCount]=\"_pagerData.totalCount\" [rpCurrent]=\"_pagerData.currentPage\"></rp-pager>\n\n        <div class=\"table_container\">  \n        <table class=\"table table-striped table-condensed table-hover tblborder\" style=\"font-size:14px;\">\n             <thead>\n                 <tr>\n                     <th style=\"width:40%\">Stock ID .</th>    \n                     <th style=\"width:300px;\">Description </th>\n                 </tr>\n             </thead>\n             <tbody>\n                 <tr *ngFor=\"let obj of _array; let i=index\">\n                     <td><a (click)=\"readData()\">{{obj.t2}}</a></td>\n                     <td style=\"\">{{obj.t3}}</td>\n                 </tr> \n             </tbody>\n         </table>\n     </div>\n        </form>\n    </div>\n      " }), 
                    __metadata('design:paramtypes', [rp_intercom_service_1.RpIntercomService, rp_http_service_1.RpHttpService, router_1.Router])
                ], FrmStockListComponent);
                return FrmStockListComponent;
            }());
            exports_1("FrmStockListComponent", FrmStockListComponent);
        }
    }
});
//# sourceMappingURL=frmStockList.component.js.map