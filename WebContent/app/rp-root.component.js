System.register(['@angular/core', '@angular/platform-browser', '@angular/router', './framework/rp-http.service', './framework/rp-intercom.service', './framework/rp-references', './util/rp-client.util'], function(exports_1, context_1) {
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
    var core_1, platform_browser_1, router_1, core_2, rp_http_service_1, rp_intercom_service_1, rp_references_1, rp_client_util_1;
    var RpRootComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
                core_2 = core_1_1;
            },
            function (platform_browser_1_1) {
                platform_browser_1 = platform_browser_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (rp_http_service_1_1) {
                rp_http_service_1 = rp_http_service_1_1;
            },
            function (rp_intercom_service_1_1) {
                rp_intercom_service_1 = rp_intercom_service_1_1;
            },
            function (rp_references_1_1) {
                rp_references_1 = rp_references_1_1;
            },
            function (rp_client_util_1_1) {
                rp_client_util_1 = rp_client_util_1_1;
            }],
        execute: function() {
            core_2.enableProdMode();
            RpRootComponent = (function () {
                function RpRootComponent(ics, http, ref, _router, title) {
                    var _this = this;
                    this.ics = ics;
                    this.http = http;
                    this.ref = ref;
                    this._router = _router;
                    this.title = title;
                    this._snack = { 'flag': true, 'msg': '', type: '' };
                    this._alert = { 'flag': true, 'msg': '', type: '' };
                    this.array = [{ "value": "", "caption": "" }];
                    this.local_setting = { "counter": "", "counterdescription": "", "location": "", "locationDescription": "", "counterCode": "", "locationCode": "", "bin": "", "binCode": "", "binDescription": "" };
                    this._confirm = this.getDefaultConfirm();
                    this._setting = { execute: function () { } };
                    this._saveStatus = "";
                    this._savestatus_class = "";
                    this._util = new rp_client_util_1.ClientUtil();
                    this._old_counterSk = "0";
                    this._showmenu = false;
                    this.setKeyDown();
                    ics.rpbean$.subscribe(function (x) {
                        _this._showmenu = ics.isMenuBar();
                        _this._confirm.isConfirmBox = false;
                        if (x.t1 !== null && x.t1 == "rp-popup") {
                            jQuery("#rootpopupsize").attr('class', 'modal-dialog modal-lg');
                            jQuery("#rootpopuptitle").text(x.t2);
                            jQuery("#rootpopupbody").load(x.t3);
                            jQuery("#rootpopup").modal();
                        }
                        else if (x.t1 !== null && x.t1 == "rp-wait") {
                            jQuery("#rootpopupsize").attr('class', 'modal-dialog modal-sm');
                            jQuery("#rootpopuptitle").text("Please Wait");
                            jQuery("#rootpopupbody").text(x.t2);
                            jQuery("#rootpopup").modal();
                        }
                        else if (x.t1 !== null && x.t1 == "rp-error") {
                            jQuery("#rootpopupsize").attr('class', 'modal-dialog modal-sm');
                            jQuery("#rootpopuptitle").text("System Exception");
                            jQuery("#rootpopupbody").text(x.t2);
                            jQuery("#rootpopup").modal();
                        }
                        else if (x.t1 !== null && x.t1 == "rp-msg") {
                            jQuery("#rootpopupsize").attr('class', 'modal-dialog modal-sm');
                            jQuery("#rootpopuptitle").text(x.t2);
                            jQuery("#rootpopupbody").text(x.t3);
                            jQuery("#rootpopup").modal();
                        }
                        else if (x.t1 !== null && x.t1 == "rp-msg-off") {
                            jQuery("#rootpopuptitle").text("");
                            jQuery("#rootpopupbody").text("");
                            jQuery("#rootpopup").modal('hide');
                        }
                        else if (x.t1 !== null && x.t1 == "rp-alert") {
                            _this._alert = { 'flag': false, 'msg': x.t3, 'type': "alert alert-" + x.t2 + " fade in" };
                            setTimeout(function () { return _this._alert.flag = true; }, 3000);
                        }
                        else if (x.t1 !== null && x.t1 == "rp-confirm") {
                            _this._confirm.isConfirmBox = true;
                            _this._confirm.callback = x.t4;
                            jQuery("#confirm_popup_size").attr('class', 'modal-dialog modal-sm');
                            jQuery("#confirm_popup_title").text(x.t2);
                            jQuery("#confirm_popup_body").text(x.t3);
                            jQuery("#confirm_popup").modal();
                        }
                        else if (x.t1 !== null && x.t1 == "rp-setting") {
                            _this._setting = x.t4;
                            _this._saveStatus = "";
                            jQuery('#locmodel').modal('show');
                            jQuery(document).ready(function () {
                                jQuery("#locmodel").on('shown.bs.modal', function () {
                                    jQuery(this).find('#savloc').focus();
                                });
                            });
                        }
                        else if (x.t1 != null && x.t1 == "rp-snack") {
                            _this._snack = { 'flag': false, 'msg': x.t3, 'type': x.t2 };
                            _this.callSnack();
                        }
                    });
                    this.init();
                }
                RpRootComponent.prototype.init = function () {
                    var _this = this;
                    this.http.doGet('json/config.json?random=' + Math.random()).subscribe(function (data) {
                        _this.ics._title = data.title;
                        _this.ics._app = data.app;
                        _this.ics._appname = data.appname;
                        _this.ics._apiurl = data.apiurl;
                        _this.title.setTitle(_this.ics._title);
                    }, function () { });
                };
                RpRootComponent.prototype.setKeyDown = function () {
                    var _self = this;
                    jQuery(window).bind('keydown', function (event) {
                        if (event.altKey && _self.ics.isMenuBar()) {
                            if (String.fromCharCode(event.which).toLowerCase() == 'v') {
                                _self._router.navigate(['/sale']);
                            }
                        }
                    });
                };
                RpRootComponent.prototype.clickConfirm = function () {
                    jQuery("#confirm_popup").modal("hide");
                    this._confirm.callback.execute();
                    this._confirm = this.getDefaultConfirm();
                };
                RpRootComponent.prototype.getDefaultConfirm = function () {
                    var callback = { execute: function () { } };
                    return { 'isConfirmBox': false, 'callback': callback };
                };
                RpRootComponent.prototype.saveLocation = function () {
                    var _this = this;
                    if (this.local_setting.location != null && this.local_setting.counter != null && this.local_setting.bin != null) {
                        var url = this.ics._apiurl + 'main/usecounter/';
                        var json = { 'counterSK': this.local_setting.counter, 'status': '1', 'oldCounterSk': this._old_counterSk };
                        if (this.local_setting !== null) {
                            this.http.doPost(url, json).subscribe(function (data) {
                                if (data.message === 'SUCCESS') {
                                    _this._snack.msg = "Saved Local Setting Successfully.";
                                    _this._snack.type = "Success";
                                    _this._old_counterSk = "0";
                                    _this.callSnack();
                                }
                                else {
                                    _this._snack.msg = "Saving Fail.";
                                    _this._snack.type = "Warning";
                                    _this.callSnack();
                                }
                            }, function () { });
                        }
                        this._setting.execute();
                    }
                    else {
                        this._snack.msg = "Saving Fail.";
                        this._snack.type = "Warning";
                        this.callSnack();
                    }
                };
                RpRootComponent.prototype.callSnack = function () {
                    jQuery("#snackbar").addClass("show");
                    setTimeout(function () { jQuery("#snackbar").removeClass("show"); }, 3000);
                };
                RpRootComponent = __decorate([
                    core_1.Component({
                        selector: 'rp-root',
                        template: "\n    <rp-menu *ngIf=\"_showmenu\"></rp-menu>\n    <div id=\"snackbar\" [class.snack-success]='_snack.type!=\"Success\"' [class.snack-info]='_snack.type!=\"Warning\"' [class.snack-warn]='_snack.type==\"Warning\"'>{{_snack.msg}}</div>\n    <div class=\"container col-md-12\">\n      <div id=\"alert\" class={{_alert.type}} [hidden]=\"_alert.flag\">{{_alert.msg}}</div>\n    </div>\n    \n    <router-outlet></router-outlet>\n  \n    <div id=\"rootpopup\" class=\"modal fade\" role=\"dialog\">\n      <div id=\"rootpopupsize\" class=\"modal-dialog modal-lg\">  \n        <div class=\"modal-content\">\n          <div class=\"modal-header\">\n            <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n            <h4 id=\"rootpopuptitle\" class=\"modal-title\">RP Report ***</h4>\n          </div>\n          <div id=\"rootpopupbody\" class=\"modal-body\">\n          </div>\n          <div class=\"modal-footer\">\n            <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\n          </div>\n        </div>\n      </div>\n    </div>\n  \n    <div id=\"confirm_popup\" class=\"modal fade\" role=\"dialog\">\n      <div id=\"confirm_popup_size\" class=\"modal-dialog modal-lg\">  \n        <div class=\"modal-content\">\n          <div class=\"modal-header\">\n            <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n            <h4 id=\"confirm_popup_title\" class=\"modal-title\">RP Report ***</h4>\n          </div>\n          <div id=\"confirm_popup_body\" class=\"modal-body\">\n          </div>\n          <div class=\"modal-footer\">\n            <button type=\"button\" class=\"btn btn-danger\" data-dismiss=\"modal\" (click)=\"clickConfirm()\">Confirm</button>\n            <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"modal fade\" id=\"locmodel\" role=\"dialog\">\n\t\t  <div class=\"modal-dialog modal-sm\">\n\t\t\t  <div class=\"modal-content\">\n\t\t\t\t  <div class=\"modal-header\" style=\"background-color: #e8ebf1;border-radius: 4px;\">\n\t\t\t\t\t  <h4 class=\"modal-title\" >Local Setting</h4>\n\t\t\t\t\t</div>\n        <div class=\"modal-body\">\n          <label>Location</label> \n          <select [(ngModel)]=\"local_setting.location\" class=\"form-control\"\t[ngModelOptions]=\"{standalone: true}\">\n            <option *ngFor=\"let item of ref._lov3.locdatas\" value=\"{{item.code}}\">{{item.description}}</option>\n          </select>\n          <div>&nbsp;</div>\n          <label>Bin</label> \n          <select [(ngModel)]=\"local_setting.bin\" class=\"form-control\"\t[ngModelOptions]=\"{standalone: true}\">\n            <option *ngFor=\"let item of ref._lov3.bin_datas\" value=\"{{item.code}}\">{{item.description}}</option>\n          </select>\n          <div>&nbsp;</div>\n          <label>Counter</label> \n          <select [(ngModel)]=\"local_setting.counter\" class=\"form-control\" id=\"sel1\" [ngModelOptions]=\"{standalone: true}\">\n            <option *ngFor=\"let item of  ref._lov3.counterdatas\" value=\"{{item.code}}\">{{item.description}}</option>\n          </select>\n        </div>\n        <div class=\"modal-footer\">\n          <button type=\"button\" id=\"savloc\" (click)=\"saveLocation()\" data-dismiss=\"modal\"  class=\"btn btn-primary \">Save</button>\n          <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\n        </div>\n        <br>\n        <span  *ngIf=\"_saveStatus !=null && _saveStatus!=='' \"  class=\"label {{_savestatus_class}} center-block\" style=\"font-size:small;\">{{_saveStatus}} </span> \n\t\t\t</div>\n\t\t</div>\n\t</div>\n"
                    }), 
                    __metadata('design:paramtypes', [rp_intercom_service_1.RpIntercomService, rp_http_service_1.RpHttpService, rp_references_1.RpReferences, router_1.Router, platform_browser_1.Title])
                ], RpRootComponent);
                return RpRootComponent;
            }());
            exports_1("RpRootComponent", RpRootComponent);
        }
    }
});
//# sourceMappingURL=rp-root.component.js.map