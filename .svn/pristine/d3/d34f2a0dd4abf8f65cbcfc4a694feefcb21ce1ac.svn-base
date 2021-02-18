System.register(["@angular/core", "../framework/rp-intercom.service", "../framework/rp-http.service", "@angular/router"], function(exports_1, context_1) {
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
    var core_1, rp_intercom_service_1, rp_http_service_1, router_1;
    var FrmStockGroupComponent;
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
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            FrmStockGroupComponent = (function () {
                function FrmStockGroupComponent(ics, http, router) {
                    this.ics = ics;
                    this.http = http;
                    this.router = router;
                    this._obj = this.getDefaultObj();
                }
                FrmStockGroupComponent.prototype.onSave = function () {
                    var url = this.ics._apiurl + 'stockgroup/save';
                    var json = this._obj;
                    this._obj.userSyskey = this.ics._profile.userSk;
                    this._obj.userId = this.ics._profile.userid;
                    this._obj.userName = this.ics._profile.userName;
                    this._obj.isParentGroup = +this._obj.isParentGroup;
                    this.http.doPost(url, this._obj).subscribe(function (data) {
                        if (data.message === "SUCCESS") {
                        }
                        else if (data.message === "EXIST") {
                        }
                        else {
                        }
                    }, function (error) {
                        //this.showMessage(this._util.MSG_TYPE.WARN, 'Saving Fail.');
                    }, function () { });
                };
                FrmStockGroupComponent.prototype.getDefaultObj = function () {
                    return { "syskey": "0", "userId": "", "userName": "", "t1": "", "t2": "", "t3": "", "t4": "", "stockSyskey": "0", "cogsSyskey": "0", "saleSyskey": "0", "purchaseSyskey": "0", "srSyskey": "0", "prSyskey": "0", "userSyskey": "0", "costingMethod": 0, "bath": 0, "itemtype": "0", "dimension": "0", "isParentGroup": 0 };
                };
                FrmStockGroupComponent.prototype.onList = function () {
                    this.router.navigate(['/stockgrouplist']);
                };
                FrmStockGroupComponent = __decorate([
                    core_1.Component({
                        selector: 'frm-stockgroup',
                        template: " \n           <div class=\"container col-xs-12 col-sm-12 col-md-12\" style=\"padding: 0px 5%;\">\n      <div class=\"row clearfix\"> \n        <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12  column col-sm-offset-0 col-md-offset-0 col-lg-offset-0\"> \n        <form class=\"form-horizontal\" ngNoForm>\n        <legend>Stock Group</legend>\n           <div class=\"form-group\"> \n              <div class=\"row  col-md-12\"> \n                <button class=\"btn btn-primary\" type=\"button\" (click)=\"onList()\" >List</button>  \n                <button class=\"btn btn-primary\"  id=\"new\" type=\"button\"  >New</button>      \n                <button class=\"btn btn-primary\"  id=\"save\" type=\"button\" (click)=\"onSave()\">Save</button> \n                <button class=\"btn btn-danger\"  id=\"delete\" type=\"button\">Delete</button>\n             \n           </div> \n           </div> \n           <div class=\"form-group\">\n                      <div>\n                            <label class=\"col-md-2\">Code</label>\n                      </div>\n                      <div class=\"col-md-4\">\n                            <input type=\"text\"  [(ngModel)]=\"_obj.t1\" class=\"form-control\"   autofocus>\n                      </div>\n          </div>\n          <div class=\"form-group\">\n                      <div>\n                            <label class=\"col-md-2\">Description</label>\n                      </div>\n                      <div class=\"col-md-4\">\n                            <input type=\"text\" [(ngModel)]=\"_obj.t2\" class=\"form-control\" autofocus >\n                      </div>                      \n            </div>   \n            </form>\n            </div>\n            </div>\n            </div>      \n           "
                    }), 
                    __metadata('design:paramtypes', [rp_intercom_service_1.RpIntercomService, rp_http_service_1.RpHttpService, router_1.Router])
                ], FrmStockGroupComponent);
                return FrmStockGroupComponent;
            }());
            exports_1("FrmStockGroupComponent", FrmStockGroupComponent);
        }
    }
});
//# sourceMappingURL=frmStockGroup.component.js.map