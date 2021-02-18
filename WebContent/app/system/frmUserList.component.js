System.register(['@angular/core', '@angular/router', '../framework/rp-intercom.service', '../framework/rp-http.service', '../framework/rp-references', '../util/rp-client.util'], function(exports_1, context_1) {
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
    var core_1, router_1, rp_intercom_service_1, rp_http_service_1, rp_references_1, rp_client_util_1;
    var FrmUserListComponent;
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
            },
            function (rp_client_util_1_1) {
                rp_client_util_1 = rp_client_util_1_1;
            }],
        execute: function() {
            FrmUserListComponent = (function () {
                function FrmUserListComponent(ics, _router, route, http, ref) {
                    this.ics = ics;
                    this._router = _router;
                    this.route = route;
                    this.http = http;
                    this.ref = ref;
                    this._util = new rp_client_util_1.ClientUtil();
                    this._array = [];
                    this._search_param_userlist = this.getDefaultSearchObject();
                    this._pagerData = { currentPage: 1, totalCount: 0 };
                    this.subscription = ics.rpbean$.subscribe(function (x) { });
                    if (!ics.getRole() || ics.getRole() == 0) {
                        this._router.navigate(['/login']);
                    }
                    else {
                        this.search();
                    }
                }
                FrmUserListComponent.prototype.readData = function (p) {
                    this._router.navigate(['/user', p]);
                };
                FrmUserListComponent.prototype.goNew = function () {
                    this._router.navigate(['/user']);
                };
                FrmUserListComponent.prototype.getDefaultSearchObject = function () {
                    return { "userId": "", "idOptr": "", "userName": "", "nameOptr": "", "currentPage": 1, "totalCount": this.ics._profile.n1 };
                };
                FrmUserListComponent.prototype.showAll = function () {
                    this._search_param_userlist = this.getDefaultSearchObject();
                    this.search();
                };
                FrmUserListComponent.prototype.search = function () {
                    var _this = this;
                    this._search_param_userlist.currentPage = this._pagerData.currentPage;
                    this._search_param_userlist.totalCount = this.ics._profile.n1;
                    var url = this.ics._apiurl + 'user/getUserList';
                    this.http.doPost(url, this._search_param_userlist).subscribe(function (data) {
                        console.log(data);
                        if (data.userdatalist.length > 0) {
                            _this._array = data.userdatalist;
                            _this._pagerData.totalCount = data.totalCount;
                        }
                        else {
                            _this._array = [];
                            _this._pagerData.totalCount = 0;
                            _this._pagerData.currentPage = 0;
                            _this.showMessage(_this._util.MSG_TYPE.INFO, 'User Not Found!');
                        }
                    }, function () { });
                };
                FrmUserListComponent.prototype.changePage = function (e) {
                    this._pagerData.currentPage = e.currentPage;
                    this.search();
                };
                FrmUserListComponent.prototype.showMessage = function (t, m) {
                    this.ics.sendBean({ t1: "rp-snack", t2: t.type, t3: m });
                };
                FrmUserListComponent = __decorate([
                    core_1.Component({
                        selector: 'frm-user-list',
                        template: "\n    <div class=\"container col-md-12\">\n    <form class=\"form-horizontal\" ngNoForm>\n    <legend>User List</legend> \n        <div class=\"row col-md-12\">  \n            <div class=\"col-md-4\">\n                <div class=\"form-group \">\n                    <label class=\" control-label col-md-3\" style=\"text-align: left;\">User ID.</label>\n                    <div class=\"col-md-9 \">\n                        <div class=\"input-group\">\n                            <span class=\"input-group-btn\">\n                                <select [(ngModel)]=\"_search_param_userlist.idOptr\" class=\"select_control form-control\">\n                                      <option *ngFor=\"let ref of ref._lov1.string\" value=\"{{ref.value}}\">{{ref.caption}}</option>\n                                </select>\n                            </span> <span class=\"input-group-btn\"> \n                                <input type=\"text\"  [(ngModel)]=\"_search_param_userlist.userId\" name=\"userid\" class=\"select_control form-control\" placeholder=\"User ID\"/>\n                            </span>\n                        </div>\n                    </div>\n                </div>                \n            </div>\n\n             <div class=\"col-md-4\">\n                <div class=\"form-group \">\n                    <label class=\" control-label col-md-3\" style=\"text-align: left;\">User Name</label>\n                    <div class=\"col-md-9 \">\n                        <div class=\"input-group\">\n                            <span class=\"input-group-btn\">\n                                <select [(ngModel)]=\"_search_param_userlist.nameOptr\" class=\"select_control form-control\">\n                                       <option *ngFor=\"let ref of ref._lov1.string\" value=\"{{ref.value}}\">{{ref.caption}}</option>\n                                </select>\n                            </span> <span class=\"input-group-btn\"> \n                                <input type=\"text\"  [(ngModel)]=\"_search_param_userlist.userName\" name=\"username\" class=\"select_control form-control\" placeholder=\"User Name\"/>\n                            </span>\n                        </div>\n                    </div>\n                </div>\n            </div> \n\n            <div class=\"col-md-4\">\n                <input type=\"button\" class=\"btn btn-primary\" (click)=\"_pagerData.currentPage=1;showAll()\" value=\"Show All\" />\n                <input type=\"button\" class=\"btn btn-primary\" (click)=\"_pagerData.currentPage=1;search()\" value=\"Refresh\" />\n                <input type=\"button\" class=\"btn btn-primary\" (click)=\"goNew()\" value=\"New\" />\n            </div>\n        </div>\n\n        <rp-pager (rpChanged)=\"changePage($event)\" [rpTotalCount]=\"_pagerData.totalCount\" [rpCurrent]=\"_pagerData.currentPage\"></rp-pager>\n\n        <div class=\"table_container\">  \n           <table class=\"table table-striped table-condensed table-hover tblborder\" style=\"font-size:14px;\">\n                <thead>\n                    <tr>\n                        <th style=\"width:40%\">User ID.</th>    \n                        <th style=\"width:300px;\">User Name</th>\n                    </tr>\n                </thead>\n                <tbody>\n                    <tr *ngFor=\"let obj of _array; let i=index\">\n                        <td><a (click)=\"readData(obj.syskey)\">{{obj.userId}}</a></td>\n                        <td style=\"\">{{obj.userName}}</td>\n                    </tr> \n                </tbody>\n            </table>\n        </div>\n        </form>\n    </div>\n  "
                    }), 
                    __metadata('design:paramtypes', [rp_intercom_service_1.RpIntercomService, router_1.Router, router_1.ActivatedRoute, rp_http_service_1.RpHttpService, rp_references_1.RpReferences])
                ], FrmUserListComponent);
                return FrmUserListComponent;
            }());
            exports_1("FrmUserListComponent", FrmUserListComponent);
        }
    }
});
//# sourceMappingURL=frmUserList.component.js.map