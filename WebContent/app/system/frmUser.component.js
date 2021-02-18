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
    var FrmUserComponent;
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
            FrmUserComponent = (function () {
                function FrmUserComponent(ics, _router, route, http) {
                    this.ics = ics;
                    this._router = _router;
                    this.route = route;
                    this.http = http;
                    this._util = new rp_client_util_1.ClientUtil();
                    this._objRoleArray = [];
                    this._obj = this.getDefaultObj();
                    this.flagnew = false;
                    this.flagsave = false;
                    this.flagdelete = true;
                    this._checkStatus = false;
                    this._confirmPassword = "";
                    this.subscription = ics.rpbean$.subscribe(function (x) { });
                    if (!ics.getRole() || ics.getRole() == 0)
                        this._router.navigate(['/login']);
                    this.ics.confirmUpload(false);
                    this.getDefaultObj();
                    this.getRoleData();
                    this.flagdelete = true;
                }
                FrmUserComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    if (this.ics.getRole() > 0) {
                        this.sub = this.route.params.subscribe(function (params) {
                            var id = params['syskey'];
                            console.log(id);
                            if (id != null && id != "") {
                                _this.getDefaultRoleData(id);
                            }
                            else {
                                _this.goNew();
                            }
                        });
                    }
                };
                FrmUserComponent.prototype.ngOnDestroy = function () {
                    this.sub.unsubscribe();
                };
                FrmUserComponent.prototype.ngAfterViewInit = function () {
                    jQuery(document).ready(function () {
                        jQuery("input[type='password']").keypress(function (e) {
                            if (e.which === 32)
                                return false;
                        });
                        jQuery("[id='contentrole']").fadeIn(500);
                    });
                };
                FrmUserComponent.prototype.checkAll = function (e) {
                    var _this = this;
                    this._checkStatus = !this._checkStatus;
                    this._obj.roleData.forEach(function (data) {
                        if (_this._checkStatus == true)
                            data.flag = true;
                        else
                            data.flag = false;
                    });
                };
                FrmUserComponent.prototype.updateRoleData = function () {
                    var data = this._obj.roleData.filter(function (f) { return f.flag == true; });
                    if (data.length != 0) {
                        this._obj.roleData = [];
                        this._obj.roleData = data;
                    }
                    for (var i = 0; i < this._obj.roleData.length; i++) {
                        if (this._obj.roleData[i].flag == true)
                            this._obj.roleData[i].flag = true;
                    }
                };
                FrmUserComponent.prototype.getDefaultObj = function () {
                    return { "syskey": "0", "createdDate": "", "modifiedDate": "", "userId": "", "userName": "", "orgId": "0", "recordStatus": 0, "syncStatus": 0, "syncBatch": 0, "usersyskey": "0", "t1": "", "t2": "", "t3": "", "t4": "", "t5": "", "t6": "", "t7": "", "n1": 0, "n2": 0, "n3": 0, "n4": 0, "n5": 0, "n6": 0, "n7": 0, "n8": 0, "roleData": [{ "syskey": 0, "t2": "", "flag": false }], "person": { "syskey": "0", "autokey": 0, "createdDate": "", "modifiedDate": "", "userId": "", "userName": "", "recordStatus": 0, "syncStatus": 0, "syncBatch": 0, "usersyskey": 0, "t1": "", "t2": "", "t3": "", "t4": "", "t5": "", "t6": "", "t7": "", "t8": "", "t9": "", "t10": "", "t11": "", "t12": "", "t13": "", "t14": "", "t15": "", "t16": "", "t17": "", "t18": "", "t19": "", "t20": "", "t21": "", "t22": "", "t23": "", "t24": "", "n1": 0, "n2": 0, "n3": 0, "n4": 0, "n5": 0, "n6": 0, "n7": 0, "n8": 0, "n9": 0, "n10": 0 }, "name": "", "u12Syskey": "0" };
                };
                FrmUserComponent.prototype.goList = function () {
                    this._router.navigate(['/userList']);
                };
                FrmUserComponent.prototype.goNew = function () {
                    this._confirmPassword = "";
                    this._checkStatus = false;
                    this.flagdelete = true;
                    this._obj = this.getDefaultObj();
                    this._obj.roleData = this._objRoleArray;
                    this._obj.roleData.forEach(function (e) { e.flag = false; });
                };
                FrmUserComponent.prototype.goReadBySyskey = function (p) {
                    var _this = this;
                    this.http.doGet(this.ics._apiurl + "user/read/" + p).subscribe(function (data) {
                        _this._obj = data;
                        console.log(_this._obj);
                        _this.updateData();
                        _this._confirmPassword = _this._obj.t2;
                        _this.flagdelete = false;
                    }, function (error) { }, function () { });
                };
                FrmUserComponent.prototype.getDefaultRoleData = function (id) {
                    var _this = this;
                    var url = this.ics._apiurl + 'user/getRoleData';
                    this.http.doPost(url, {}).subscribe(function (data) {
                        if (data.length > 0) {
                            _this._objRoleArray = data;
                            _this.goReadBySyskey(id);
                        }
                        else {
                            _this.showMessage(_this._util.MSG_TYPE.WARN, 'Invalid Role Data.');
                        }
                    }, function (error) { }, function () { });
                };
                FrmUserComponent.prototype.updateData = function () {
                    var result = this._objRoleArray;
                    var _loop_1 = function(i) {
                        var data = this_1._obj.roleData.forEach(function (e) {
                            if (result[i].syskey == e.syskey) {
                                result[i].flag = true;
                            }
                        });
                    };
                    var this_1 = this;
                    for (var i = 0; i < result.length; i++) {
                        _loop_1(i);
                    }
                    this._obj.roleData = [];
                    this._obj.roleData = result;
                };
                FrmUserComponent.prototype.goSave = function () {
                    var _this = this;
                    var url = this.ics._apiurl + 'user/save';
                    var json = this._obj;
                    this._obj.usersyskey = this.ics._profile.userSk;
                    this._obj.userId = this.ics._profile.userid;
                    this._obj.userName = this.ics._profile.userName;
                    this._obj.person.userId = this.ics._profile.userid;
                    this._obj.person.userName = this.ics._profile.userName;
                    this._obj.person.t1 = this._obj.t1;
                    this.updateRoleData();
                    if (this.isValid()) {
                        this.http.doPost(url, this._obj).subscribe(function (data) {
                            if (data.message === "SUCCESS") {
                                _this.showMessage(_this._util.MSG_TYPE.INFO, 'Saved Successfully.');
                                _this.goNew();
                            }
                            else if (data.message === "EXIST") {
                                _this.showMessage(_this._util.MSG_TYPE.WARN, 'Code Already Exists.');
                            }
                            else {
                                _this.showMessage(_this._util.MSG_TYPE.WARN, 'Saving Fail.');
                            }
                        }, function (error) {
                            _this.showMessage(_this._util.MSG_TYPE.WARN, 'Saving Fail.');
                        }, function () { });
                    }
                };
                FrmUserComponent.prototype.isValid = function () {
                    if (this._obj.t1.trim().length === 0) {
                        this.showMessage(this._util.MSG_TYPE.WARN, 'Invalid User ID.');
                        return false;
                    }
                    else if (this._obj.person.t2.trim().length === 0) {
                        this.showMessage(this._util.MSG_TYPE.WARN, 'Invalid UserName.');
                        return false;
                    }
                    else if (this._util.validateEmail(this._obj.t3) == false) {
                        this.showMessage(this._util.MSG_TYPE.WARN, 'Invalid Email.');
                        return false;
                    }
                    else if (this._confirmPassword != this._obj.t2) {
                        this.showMessage(this._util.MSG_TYPE.WARN, "Password don't match");
                        return false;
                    }
                    else if (this._obj.roleData.filter(function (f) { return f.flag == true; }).length === 0) {
                        this.showMessage(this._util.MSG_TYPE.WARN, "Invalid Role");
                        return false;
                    }
                    return true;
                };
                FrmUserComponent.prototype.getRoleData = function () {
                    var _this = this;
                    this.http.doPost(this.ics._apiurl + 'user/getRoleData', {}).subscribe(function (data) {
                        _this._obj.roleData = data;
                        _this._objRoleArray = data;
                        for (var i = 0; i < _this._obj.roleData.length; i++) {
                            _this._obj.roleData[i].flag = false;
                        }
                    }, function (error) {
                        return function () { };
                    });
                };
                FrmUserComponent.prototype.goDelete = function () {
                    if (this._obj.syskey != "0") {
                        var _self_1 = this;
                        var callback = {
                            execute: function () {
                                var url = _self_1.ics._apiurl + 'user/delete/' + _self_1._obj.syskey + '/' + _self_1._obj.n4;
                                _self_1.http.doGet(url).subscribe(function (data) {
                                    if (data.message === "SUCCESS") {
                                        _self_1.showMessage(_self_1._util.MSG_TYPE.INFO, 'Deleted Successfully.');
                                        _self_1.goNew();
                                    }
                                    else if (data.message === "FAIL")
                                        _self_1.showMessage(_self_1._util.MSG_TYPE.INFO, 'Deleting Fail.');
                                    else {
                                        _self_1.showMessage(_self_1._util.MSG_TYPE.WARN, 'Deleting Fail.');
                                    }
                                }, function (error) { }, function () { });
                            }
                        };
                        _self_1.ics.sendBean({ t1: "rp-confirm", t2: "Confirmation", t3: 'Are you sure to delete?', t4: callback });
                    }
                    else {
                        this.showMessage(this._util.MSG_TYPE.INFO, 'No record to delete!');
                    }
                };
                FrmUserComponent.prototype.validateEmail = function (mail) {
                    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
                        return (true);
                    }
                    return (false);
                };
                FrmUserComponent.prototype.showMessage = function (t, m) {
                    this.ics.sendBean({ t1: "rp-snack", t2: t.type, t3: m });
                };
                FrmUserComponent = __decorate([
                    core_1.Component({
                        selector: 'frm-user',
                        template: " \n    <div class=\"container col-xs-12 col-sm-12 col-md-12\" style=\"padding: 0px 5%;\">\n      <div class=\"row clearfix\"> \n        <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12  column col-sm-offset-0 col-md-offset-0 col-lg-offset-0\"> \n        <form class=\"form-horizontal\" ngNoForm>\n        <legend>User</legend>   \n        <div class=\"form-group\"> \n              <div class=\"row  col-md-12\"> \n                <button class=\"btn btn-primary\" type=\"button\" (click)=\"goList()\" >List</button>  \n                <button class=\"btn btn-primary\" [disabled]=\"flagnew\" id=\"new\" type=\"button\" (click)=\"goNew()\" >New</button>      \n                <button class=\"btn btn-primary\" [disabled]=\"flagsave\" id=\"save\" type=\"button\" (click)=\"goSave()\">Save</button> \n                <button class=\"btn btn-danger\" [disabled]=\"flagdelete\" id=\"delete\" type=\"button\" (click)=\"goDelete();\" >Delete</button>\n              </div>           \n        </div>\n        <div class=\"row col-md-12\">&nbsp;</div>\n        <div class=\"form-group\">\n                      <div>\n                            <label class=\"col-md-2\">Login ID.</label>\n                      </div>\n                      <div class=\"col-md-4\">\n                            <input type=\"text\"  [(ngModel)]=\"_obj.t1\" class=\"form-control\"   autofocus>\n                      </div>\n          </div>\n          <div class=\"form-group\">\n                      <div>\n                            <label class=\"col-md-2\">Name</label>\n                      </div>\n                      <div class=\"col-md-4\">\n                            <input type=\"text\"  [(ngModel)]=\"_obj.person.t2\" class=\"form-control\" autofocus >\n                      </div>\n                      <div>\n                            <label class=\"col-md-2\">Password</label>\n                      </div>\n                      <div class=\"col-md-4\">\n                            <input type=\"password\" [(ngModel)]=\"_obj.t2\"  class=\"form-control\" autofocus >\n                      </div>\n            </div> \n            <div class=\"form-group\">\n                        <div>\n                              <label class=\"col-md-2\">Email</label>\n                        </div>\n                        <div class=\"col-md-4\">\n                              <input type=\"text\"  [(ngModel)]=\"_obj.t3\" class=\"form-control\" autofocus >\n                        </div> \n                        <div>\n                              <label class=\"col-md-2\">Confirm Password</label>\n                        </div>\n                        <div class=\"col-md-4\">\n                              <input class=\"form-control\" [(ngModel)]=\"_confirmPassword\"  type=\"password\" style=\"float:left;\"  autofocus>\n                        </div>\n            </div>\n            <ul class=\"nav nav-tabs\">\n                      <li class=\"active\"><a data-toggle=\"tab\" href=\"#tab1\"><b>Role</b></a></li>      \n            </ul>\n            <div class=\"tab-content\" id=\"myTabContent\"> \n                   <div id=\"contentrole\" class=\"tab-pane\"> \n                         <div style=\"padding: 20px; overflow-x:auto\" class=\"\"> \n                            <div class=\"col-md-6\">\n                                <div class=\"table_container\">  \n                                    <table class=\"table table-striped table-condensed table-hover tblborder\" style=\"font-size:14px;\">\n                                        <thead>\n                                            <tr>\n                                                <th style=\"width:5%;\"><input type=\"checkbox\" [(ngModel)]=\"_checkStatus\"   (click)=\"checkAll($event)\" /></th>\n                                                <th style=\"width:30%\">Code</th>    \n                                                <th style=\"width:65%;\">Description</th>\n                                                \n                                            </tr>\n                                        </thead>\n                                        <tbody>\n                                            <tr *ngFor=\"let obj of _obj.roleData; let i=index\">\n                                                <td><input type=\"checkbox\" [(ngModel)]=\"obj.flag\" /></td>\n                                                <td>{{obj.t1}}</td>\n                                                <td>{{obj.t2}}</td>\n                                            </tr> \n                                        </tbody>\n                                    </table>\n                                </div>\n                            </div>\n                        </div>\n                   </div>\n               </div>\n           </form>\n        </div>\n    </div>\n  </div>\n    \n   ",
                    }), 
                    __metadata('design:paramtypes', [rp_intercom_service_1.RpIntercomService, router_1.Router, router_1.ActivatedRoute, rp_http_service_1.RpHttpService])
                ], FrmUserComponent);
                return FrmUserComponent;
            }());
            exports_1("FrmUserComponent", FrmUserComponent);
        }
    }
});
//# sourceMappingURL=frmUser.component.js.map