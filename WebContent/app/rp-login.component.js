System.register(['@angular/core', '@angular/router', './framework/rp-http.service', './framework/rp-intercom.service', './framework/rp-bean', './framework/rp-references', './util/rp-client.util'], function(exports_1, context_1) {
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
    var core_1, router_1, core_2, rp_http_service_1, rp_intercom_service_1, rp_bean_1, rp_references_1, rp_client_util_1;
    var RpLoginComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
                core_2 = core_1_1;
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
            function (rp_bean_1_1) {
                rp_bean_1 = rp_bean_1_1;
            },
            function (rp_references_1_1) {
                rp_references_1 = rp_references_1_1;
            },
            function (rp_client_util_1_1) {
                rp_client_util_1 = rp_client_util_1_1;
            }],
        execute: function() {
            core_2.enableProdMode();
            RpLoginComponent = (function () {
                function RpLoginComponent(ref, ics, _router, http) {
                    this.ref = ref;
                    this.ics = ics;
                    this._router = _router;
                    this.http = http;
                    this._user = { "syskey": 0, "userId": "", "userName": "", "password": "", "orgId": "" };
                    this._result = "";
                    this._util = new rp_client_util_1.ClientUtil();
                    this.subscription = ics.rpbean$.subscribe(function (x) { });
                    this.ics._profile.role = 0;
                    this.ics.sendBean(new rp_bean_1.RpBean());
                    ics.confirmUpload(false);
                }
                RpLoginComponent.prototype.goPost = function () {
                    var _this = this;
                    var url = this.ics._apiurl + 'main/login';
                    this.http.doPost(url, this._user).subscribe(function (data) {
                        if (data.syskey > 0) {
                            _this.ics._orgId = data.orgId;
                            _this.authorize(data);
                        }
                        else {
                            _this._result = "Invalid User ID or Password";
                        }
                    }, function () { });
                };
                RpLoginComponent.prototype.authorize = function (data) {
                    this.ics._profile.userSk = data.syskey;
                    this.ics._profile.u12Sk = data.u12Syskey;
                    this.ics._profile.userid = data.userId;
                    this.ics._profile.userName = data.userName;
                    this.ics._profile.role = 7;
                    this.getMenuRight(data.syskey);
                    this.ics._profile.rightMenus = [{ "menuItem": "", "caption": this.ics._profile.userName }, { "menuItem": "/login", "caption": "Sign Out" }];
                    this._router.navigate(['/user']);
                    this.ics.sendBean(new rp_bean_1.RpBean());
                };
                RpLoginComponent.prototype.ngOnDestroy = function () {
                    this.subscription.unsubscribe();
                };
                RpLoginComponent.prototype.ngAfterViewInit = function () {
                    this.queryFocus("#userid");
                };
                RpLoginComponent.prototype.getMenuRight = function (syskey) {
                    var _this = this;
                    this.http.doGet(this.ics._apiurl + 'menu/getMenusRight/' + syskey).subscribe(function (data) {
                        _this.ics._profile.menus = data.menuData;
                    }, function (error) { }, function () { });
                };
                RpLoginComponent.prototype.queryFocus = function (target) {
                    jQuery(document).ready(function () { jQuery(target).focus(); });
                };
                RpLoginComponent = __decorate([
                    core_1.Component({
                        selector: 'rp-login',
                        template: "\n  <div class=\"container\">\n            <form  class= \"form-horizontal\" > \n              <div class=\"card card-container\">\n                  <h1 style=\"color:#419641;text-align:center;font-family:serif;margin-bottom: 30px;\">{{ics._appname}}</h1>\n                  <div class=\"row col-md-12 col-sm-12 col-xs-12 col-lg-12\">&nbsp;</div>\n                  <input id=\"userid\"  class=\"form-control input-md\" type=\"text\" [(ngModel)]=\"_user.userId\" [ngModelOptions]=\"{standalone: true}\" placeholder=\"User ID\" >\n                  <div class=\"row col-md-12\">&nbsp;</div>\n                  <input id=\"password\"  class=\"form-control input-md\" type=\"password\" [(ngModel)]=\"_user.password\" [ngModelOptions]=\"{standalone: true}\" placeholder=\"Password\" >\n                    <div class=\"row col-md-12\">&nbsp;</div>\n                  <button class=\"btn btn-primary btn-md btn-block\" id=\"btnOk\" (keyup.enter)=\"goPost()\" (click)=\"goPost()\">OK</button>\n                  <br/>\n                  <span  *ngIf=\"_result !=null && _result!=='' \" class=\"label label-danger center-block\" style=\"font-size:small;\">{{_result}} </span> \n              </div>\n            </form> \n        </div>\n  "
                    }), 
                    __metadata('design:paramtypes', [rp_references_1.RpReferences, rp_intercom_service_1.RpIntercomService, router_1.Router, rp_http_service_1.RpHttpService])
                ], RpLoginComponent);
                return RpLoginComponent;
            }());
            exports_1("RpLoginComponent", RpLoginComponent);
        }
    }
});
//# sourceMappingURL=rp-login.component.js.map