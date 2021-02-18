System.register(['@angular/core', '@angular/router', '../framework/rp-intercom.service', '../framework/rp-http.service', '../framework/rp-references'], function(exports_1, context_1) {
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
    var core_1, router_1, rp_intercom_service_1, rp_http_service_1, rp_references_1;
    var FrmRoleListComponent;
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
            function (rp_references_1_1) {
                rp_references_1 = rp_references_1_1;
            }],
        execute: function() {
            FrmRoleListComponent = (function () {
                function FrmRoleListComponent(ics, _router, route, http, ref) {
                    this.ics = ics;
                    this._router = _router;
                    this.route = route;
                    this.http = http;
                    this.ref = ref;
                    this._search_param_rolelist = this.getDefaultSearchObject();
                    this._rolelistdata = this.getDefaultRoleList();
                    this._pagerData = { currentPage: 1, totalCount: 0 };
                    this.subscription = ics.rpbean$.subscribe(function (x) { });
                    if (!ics.getRole() || ics.getRole() == 0) {
                        this._router.navigate(['/login']);
                    }
                    else {
                        this.searchRoleList();
                        this._pagerData = { currentPage: 1, totalCount: 0 };
                    }
                }
                FrmRoleListComponent.prototype.ngAfterViewInit = function () {
                    jQuery(".dt-sm div div input").addClass("input-sm");
                };
                FrmRoleListComponent.prototype.getDefaultSearchObject = function () {
                    return { "codeType": "bw", "descriptionType": "bw", "code": "", "description": "" };
                };
                FrmRoleListComponent.prototype.getDefaultRoleList = function () {
                    return [{ "syskey": "0", "t1": "", "t2": "" }];
                };
                FrmRoleListComponent.prototype.goNew = function () {
                    this._router.navigate(['/role']);
                };
                FrmRoleListComponent.prototype.readData = function (p) {
                    this._router.navigate(['/role', p]);
                };
                FrmRoleListComponent.prototype.changePage = function (e) {
                    this._pagerData.currentPage = e.currentPage;
                    this.searchRoleList();
                };
                FrmRoleListComponent.prototype.showAll = function () {
                    this._search_param_rolelist = this.getDefaultSearchObject();
                    this.searchRoleList();
                };
                FrmRoleListComponent.prototype.searchRoleList = function () {
                    var _this = this;
                    var data = { "codeType": this._search_param_rolelist.codeType, "code": this._search_param_rolelist.code, "descriptionType": this._search_param_rolelist.descriptionType, "description": this._search_param_rolelist.description, "currentPage": this._pagerData.currentPage, "pageSize": this.ics._profile.n1 };
                    var url = this.ics._apiurl + 'role/searchRoleList/';
                    this.http.doPost(url, data).subscribe(function (data) {
                        _this._rolelistdata = data.rolelistdata;
                        _this._pagerData.totalCount = data.totalCount;
                    }, function (error) {
                        _this._pagerData.totalCount = 0;
                        _this._pagerData.currentPage = 0;
                        _this._rolelistdata = _this.getDefaultRoleList();
                        _this.ics.sendBean({ t1: "rp-error", t2: "Item Not Found!" });
                    }, function () { });
                };
                FrmRoleListComponent = __decorate([
                    core_1.Component({
                        selector: 'frm-roleList',
                        template: "\n<div class=\"container col-md-12\">\n    <form class=\"form-horizontal\" ngNoForm>\n        <legend>Role List</legend> \n        <div class=\"row col-md-12\">  \n            <div class=\"col-md-4\">\n                <div class=\"form-group \">\n                    <label class=\" control-label col-md-3\" style=\"text-align: left;\">Code</label>\n                    <div class=\"col-md-9 \">\n                        <div class=\"input-group\">\n                            <span class=\"input-group-btn\">\n                                <select [(ngModel)]=\"_search_param_rolelist.codeType\" class=\"select_control form-control\">\n                                      <option *ngFor=\"let ref of ref._lov1.string\" value=\"{{ref.value}}\">{{ref.caption}}</option>\n                                </select>\n                            </span> <span class=\"input-group-btn\"> \n                                <input type=\"text\"  [(ngModel)]=\"_search_param_rolelist.code\" name=\"code\" class=\"select_control form-control\" placeholder=\"Code\"/>\n                            </span>\n                        </div>\n                    </div>\n                </div>\n            </div> \n            <div class=\"col-md-4\">\n                <div class=\"form-group \">\n                    <label class=\" control-label col-md-3\" style=\"text-align: left;\">Description</label>\n                    <div class=\"col-md-9 \">\n                        <div class=\"input-group\">\n                            <span class=\"input-group-btn\">\n                                <select [(ngModel)]=\"_search_param_rolelist.descriptionType\" class=\"select_control form-control\">\n                                       <option *ngFor=\"let ref of ref._lov1.string\" value=\"{{ref.value}}\">{{ref.caption}}</option>\n                                </select>\n                            </span> <span class=\"input-group-btn\"> \n                                <input type=\"text\"  [(ngModel)]=\"_search_param_rolelist.description\" name=\"description\" class=\"select_control form-control\" placeholder=\"Description\"/>\n                            </span>\n                        </div>\n                    </div>\n                </div>\n            </div> \n            <div class=\"col-md-4\">\n                <input type=\"button\" class=\"btn btn-primary\" (click)=\"_pagerData.currentPage=1;showAll()\" value=\"Show All\" />\n                <input type=\"button\" class=\"btn btn-primary\" (click)=\"_pagerData.currentPage=1;searchRoleList()\" value=\"Refresh\" />\n                <input type=\"button\" class=\"btn btn-primary\" (click)=\"goNew()\" value=\"New\" />\n            </div> \n        </div>   \n        <rp-pager (rpChanged)=\"changePage($event)\" [rpTotalCount]=\"_pagerData.totalCount\" [rpCurrent]=\"_pagerData.currentPage\"></rp-pager>\n        <table\n            class=\"table table-striped table-condensed table-hover tblborder\" style=\"font-size: 14px;\">\n            <thead>\n                <tr>\n                    <th>Code</th>\n                    <th>Description</th>                        \n                </tr>\n            </thead>\n            <tbody>\n                <tr *ngFor=\"let data of _rolelistdata;\">\n                    <td class=\"clickable\" (click)=\"readData(data.syskey)\"><a>{{data.t1}}</a></td>\n                    <td>{{data.t2}}</td>                        \n                </tr>\n            </tbody>\n        </table>        \n    </form>\n</div>\n  "
                    }), 
                    __metadata('design:paramtypes', [rp_intercom_service_1.RpIntercomService, router_1.Router, router_1.ActivatedRoute, rp_http_service_1.RpHttpService, rp_references_1.RpReferences])
                ], FrmRoleListComponent);
                return FrmRoleListComponent;
            }());
            exports_1("FrmRoleListComponent", FrmRoleListComponent);
        }
    }
});
//# sourceMappingURL=frmRoleList.component.js.map