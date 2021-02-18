System.register(['@angular/core', '@angular/router', '../framework/rp-references', '../framework/rp-intercom.service', '../framework/rp-http.service', '../util/rp-client.util'], function(exports_1, context_1) {
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
    var core_1, router_1, rp_references_1, rp_intercom_service_1, rp_http_service_1, rp_client_util_1;
    var FrmMenuComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (rp_references_1_1) {
                rp_references_1 = rp_references_1_1;
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
            FrmMenuComponent = (function () {
                function FrmMenuComponent(ics, _router, route, http, ref) {
                    this.ics = ics;
                    this._router = _router;
                    this.route = route;
                    this.http = http;
                    this.ref = ref;
                    // Application Specific
                    this._util = new rp_client_util_1.ClientUtil();
                    this._buttonArray = [];
                    this._comboObj = [{ "syskey": "0", "t2": "" }];
                    this._syskey = "TBA";
                    this._obj = this.getDefaultObj();
                    this.exec = { callback: function () { } };
                    // RP Framework
                    this.subscription = ics.rpbean$.subscribe(function (x) { });
                    if (!ics.getRole() || ics.getRole() == 0) {
                        this._router.navigate(['/login']);
                    }
                    else {
                        this._obj = this.getDefaultObj();
                    }
                    this._rd = true; //Combo BUtton Control    
                    this.parentcheck = true; //Radio Box Control
                    this.childcheck = false;
                }
                FrmMenuComponent.prototype.getDefaultObj = function () {
                    return { "syskey": "0", "usersyskey": "", "userId": "", "userName": "", "t1": "", "t2": "", "t3": "", "t4": "", "t5": "", "t6": "", "n2": "0", "n5": "0" };
                };
                FrmMenuComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    var self = this;
                    this.sub = this.route.params.subscribe(function (params) {
                        var id = params['id'];
                        if (id != null && id != "") {
                            self.exec = { callback: function () {
                                    self.goReadBySyskey(id);
                                } };
                        }
                        else {
                            self.exec = { callback: function () { } };
                        }
                        _this.getButtonlist();
                        _this.getMainMenulist();
                    });
                };
                FrmMenuComponent.prototype.goReadBySyskey = function (p) {
                    var _this = this;
                    this.http.doGet(this.ics._apiurl + 'menu/readMenu/' + p + "").subscribe(function (data) {
                        _this._obj = data;
                        _this._syskey = _this._obj.syskey;
                        _this.setButtonData(_this._obj.t3);
                        if (_this._obj.n2 == "0") {
                            _this.parentcheck = true;
                            _this.childcheck = false;
                        }
                        else {
                            _this.parentcheck = false;
                            _this.childcheck = true;
                            _this._rd = false;
                        }
                    }, function () { });
                };
                FrmMenuComponent.prototype.ngOnDestroy = function () { if (this.ics.getRole() > 0) {
                    this.sub.unsubscribe();
                } };
                FrmMenuComponent.prototype.checkChild = function () { this._rd = false; };
                FrmMenuComponent.prototype.checkParents = function () { this._rd = true; this._obj.n2 = "0"; };
                FrmMenuComponent.prototype.goMenuOrder = function () { this._router.navigate(['/menuorder']); };
                FrmMenuComponent.prototype.goDelete = function () {
                    if (this._obj.syskey != "0") {
                        var _self_1 = this;
                        var callback = {
                            execute: function () {
                                var url = _self_1.ics._apiurl + 'menu/deleteMenu/' + _self_1._obj.syskey + '/' + _self_1._obj.n2;
                                _self_1.http.doGet(url).subscribe(function (data) {
                                    if (data.message === "SUCCESS") {
                                        _self_1.showMessage(_self_1._util.MSG_TYPE.INFO, 'Deleted Successfully.');
                                        _self_1.goNew();
                                    }
                                    else if (data.message === "DPARENT") {
                                        _self_1.showMessage(_self_1._util.MSG_TYPE.WARN, 'Child Menu Already Exist.');
                                    }
                                    else {
                                        _self_1.showMessage(_self_1._util.MSG_TYPE.WARN, 'Deleting Fail.');
                                    }
                                }, function () { });
                            }
                        };
                        this.ics.sendBean({ t1: "rp-confirm", t2: "Confirmation", t3: 'Are you sure to delete?', t4: callback });
                    }
                    else {
                        this.showMessage(this._util.MSG_TYPE.INFO, 'No record to delete!');
                    }
                };
                FrmMenuComponent.prototype.goPost = function () {
                    var _this = this;
                    this._obj.usersyskey = this.ics._profile.userSk;
                    this._obj.userId = this.ics._profile.userid;
                    this._obj.userName = this.ics._profile.userName;
                    this._obj.n5 = "1";
                    this._obj.t4 = "51";
                    this._obj.t5 = "100%";
                    this._obj.t6 = "800";
                    this._obj.t3 = this.getButtonData();
                    var url = this.ics._apiurl + 'menu/saveMenu';
                    var json = this._obj;
                    if (this.isValid()) {
                        this.http.doPost(url, json).subscribe(function (data) {
                            if (data.message === "SUCCESS") {
                                _this.showMessage(_this._util.MSG_TYPE.INFO, 'Saved Successfully.');
                                _this._obj.syskey = data.syskey;
                                _this._syskey = data.syskey;
                            }
                            else if (data.message === "CODEEXISTS") {
                                _this.showMessage(_this._util.MSG_TYPE.WARN, 'Menu Already Exists.');
                            }
                            else if (data.message === "DPARENT") {
                                _this.showMessage(_this._util.MSG_TYPE.WARN, 'Child Menu Already Exist.');
                            }
                            else {
                                _this.showMessage(_this._util.MSG_TYPE.WARN, 'Saving Fail.');
                            }
                        }, function (error) {
                            _this.showMessage(_this._util.MSG_TYPE.WARN, 'Saving Fail.');
                        }, function () { });
                    }
                };
                FrmMenuComponent.prototype.goList = function () { this._router.navigate(['/menuList']); };
                FrmMenuComponent.prototype.goNew = function () {
                    this._syskey = "TBA";
                    this._rd = true;
                    jQuery('#parentradio').prop('checked', 'checked');
                    jQuery('#childradio').prop('checked', false);
                    this._obj = this.getDefaultObj();
                    this.clearButtonData();
                    this.getMainMenulist();
                };
                FrmMenuComponent.prototype.getMainMenulist = function () {
                    var _this = this;
                    this.http.doGet(this.ics._apiurl + 'menu/getMainList').subscribe(function (response) {
                        if (response != null || response != undefined) {
                            _this._comboObj = response.mainmenudatas;
                        }
                    }, function () { });
                };
                FrmMenuComponent.prototype.isValid = function () {
                    if (!this._rd && this._obj.n2 === "0") {
                        this.showMessage(this._util.MSG_TYPE.WARN, 'Invalid Main Menu Code.');
                        return false;
                    }
                    else if (this._obj.t2.trim().length === 0) {
                        this.showMessage(this._util.MSG_TYPE.WARN, 'Invalid Description.');
                        return false;
                    }
                    else if (!this._rd && this._obj.t1.trim().length === 0) {
                        this.showMessage(this._util.MSG_TYPE.WARN, 'Invalid Link.');
                        return false;
                    }
                    else if (!this._rd && this._obj.t3.trim().length === 0) {
                        this.showMessage(this._util.MSG_TYPE.WARN, 'Invalid Button Right.');
                        return false;
                    }
                    return true;
                };
                FrmMenuComponent.prototype.getButtonlist = function () {
                    var _this = this;
                    this.http.doGet(this.ics._apiurl + 'menu/getButtonList').subscribe(function (response) {
                        _this._buttonArray = response.buttonlistdata;
                        _this.exec.callback();
                    }, function () { _this.exec.callback(); });
                };
                FrmMenuComponent.prototype.clearButtonData = function () {
                    for (var i = 0; i < this._buttonArray.length; i++) {
                        this._buttonArray[i].flag = false;
                    }
                };
                FrmMenuComponent.prototype.getButtonData = function () {
                    var _self = this;
                    var k = "";
                    for (var i = 0; i < _self._buttonArray.length; i++) {
                        if (_self._buttonArray[i].flag) {
                            if (k != "") {
                                k += ",";
                            }
                            k += _self._buttonArray[i].syskey;
                        }
                    }
                    return k;
                };
                FrmMenuComponent.prototype.setButtonData = function (t3) {
                    var _self = this;
                    var btns = t3.split(',');
                    for (var i = 0; i < _self._buttonArray.length; i++) {
                        for (var j = 0; j < btns.length; j++) {
                            if (_self._buttonArray[i].syskey == btns[j]) {
                                _self._buttonArray[i].flag = true;
                            }
                        }
                    }
                };
                FrmMenuComponent.prototype.showMessage = function (t, m) { this.ics.sendBean({ t1: "rp-snack", t2: t.type, t3: m }); };
                FrmMenuComponent = __decorate([
                    core_1.Component({
                        selector: 'frmmenu',
                        template: " \n    <div class=\"container col-md-12 col-sm-12 col-xs-12\" style=\"padding: 0px 5%;\">\n          <form class= \"form-horizontal\" ngNoForm >    \n              <legend>Menu</legend>              \n                  <div class=\"row col-md-12 col-sm-12\"> \n                    <button class=\"btn btn-primary\" type=\"button\" (click)=\"goList()\" >List</button>                     \n                    <button class=\"btn btn-primary\"  id=\"new\" type=\"button\" (click)=\"goNew()\">New</button>      \n                    <button class=\"btn btn-primary\"  id=\"save\" type=\"button\" (click)=\"goPost()\">Save</button> \n                    <button class=\"btn btn-danger\"  id=\"delete\" type=\"button\" [disabled]=\"_obj.syskey === '' || _obj.syskey === '0'\" (click)=\"goDelete();\" >Delete</button> \n                    <input type=\"button\" class=\"btn btn-primary\" (click)=\"goMenuOrder()\" value=\"Menu Order\" />\n                  </div>                            \n               \n                  <div class=\"row col-md-12 col-sm-12 col-xs-12\">&nbsp;</div>\n\n                  <div class=\"form-group\"> \n                          <label class=\"checkbox-inline\">    \n                              <input type=\"radio\" [checked]=\"parentcheck\" id=\"parentradio\"  (click)=\"checkParents()\" name=\"optionsRadiosinline\"   value=\"option1\" checked> \n                              Main Menu \n                          </label>  \n                          \n                          <label class=\"checkbox-inline\">      \n                              <input type=\"radio\" [checked]=\"childcheck\" id=\"childradio\" (click)=\"checkChild()\"   name=\"optionsRadiosinline\"   value=\"option2\"> \n                              Sub Menu    \n                          </label>\n                  </div>\n              \n                  <div class=\"form-group\" [hidden]=\"_rd\"> \n                    <label class=\"col-md-2\">Main Menu</label>\n                    <div class=\"col-md-3\">\n                      <select class=\"form-control\" [(ngModel)]=\"_obj.n2\">\n                         <option *ngFor=\"let item of _comboObj \"  [value]=\"item.syskey\">{{item.t2}}</option>\t\t\t\t\t\t\n                      </select>\n                    </div>\n                  </div>\n\n                   <div class=\"form-group\">\n                      <label class=\"col-md-2\">Code</label>\n                      <div class=\"col-md-3\">\n                        <input type=\"text\" [(ngModel)]=\"_syskey\" class=\"form-control\" readonly>\n                      </div>                        \n                  </div>\n\n                  <div class=\"form-group\">\n                      <label class=\"col-md-2\">Description</label>\n                      <div class=\"col-md-4\">\n                        <input type=\"text\" [(ngModel)]=\"_obj.t2\" class=\"form-control\">\n                      </div>        \n                  </div>                 \n\n                  <div class=\"form-group\">  \n                      <label class=\"col-md-2\">Link</label>\n                      <div class=\"col-md-4\">\n                        <input type=\"text\" [(ngModel)]=\"_obj.t1\" class=\"form-control\">\n                      </div>                    \n                  </div> \n                         \n                  <div class=\"col-md-6\" style=\"overflow-y:auto;height:330px;width:600px;padding:15px;border:1px solid #e5e5e5; border-radius:10px !important;\">\n                    <legend><span style=\"font-size:16px;font-weight:600;\">Button Right</span></legend>                        \n                    <table class=\"table table-striped table-condensed table-hover\" style=\"font-size:14px;\">   \n                      <thead>\n                        <tr>\n                          <th style='width: 7%;' align=\"center\">&nbsp;</th>\n                          <th style='width: 93%;' align=\"center\">Name</th>    \n                        </tr>\n                      </thead>\n                      <tbody>\n                        <tr *ngFor=\"let obj of _buttonArray\">\n                          <td><label><input type=\"checkbox\" [(ngModel)]=\"obj.flag\"></label></td>\n                          <td>{{obj.t2}}</td>   \n                        </tr> \n                      </tbody>\n                    </table>                    \n                  </div>\n\n           </form>      \n  </div>   \n   ",
                    }), 
                    __metadata('design:paramtypes', [rp_intercom_service_1.RpIntercomService, router_1.Router, router_1.ActivatedRoute, rp_http_service_1.RpHttpService, rp_references_1.RpReferences])
                ], FrmMenuComponent);
                return FrmMenuComponent;
            }());
            exports_1("FrmMenuComponent", FrmMenuComponent);
        }
    }
});
//# sourceMappingURL=frmMenu.component.js.map