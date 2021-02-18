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
    var FrmMenuOrderComponent;
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
            FrmMenuOrderComponent = (function () {
                function FrmMenuOrderComponent(ics, _router, route, http, ref) {
                    this.ics = ics;
                    this._router = _router;
                    this.route = route;
                    this.http = http;
                    this.ref = ref;
                    this._util = new rp_client_util_1.ClientUtil();
                    this._obj = this.getDefaultObj();
                    this.subscription = ics.rpbean$.subscribe(function (x) { });
                    if (!ics.getRole() || ics.getRole() == 0) {
                        this._router.navigate(['/login']);
                    }
                    else {
                        this._obj = this.getDefaultObj();
                    }
                }
                FrmMenuOrderComponent.prototype.ngOnInit = function () {
                    this.goMenuOrderdatas();
                };
                FrmMenuOrderComponent.prototype.goMenuOrderdatas = function () {
                    var _this = this;
                    this.http.doGet(this.ics._apiurl + 'menu/getMenuOrderList').subscribe(function (data) {
                        _this._obj = data.menudatas;
                    }, function () { });
                };
                FrmMenuOrderComponent.prototype.showRoleMenus = function (obj) {
                    var indexx = this._obj.indexOf(obj);
                    if (this._obj[indexx].show) {
                        this._obj[indexx].show = false;
                    }
                    else {
                        this._obj[indexx].show = true;
                    }
                };
                FrmMenuOrderComponent.prototype.goSelect = function (event, indexxx) {
                    if ((event.target.id).indexOf("lvlParent") !== -1) {
                        this.temp = (event.target.id).replace("lvlParent", "");
                    }
                    else {
                        this.temp = (event.target.id).replace("lvlChild", "");
                    }
                    this.index = indexxx;
                    for (var i = 0; i < this._obj.length; i++) {
                        jQuery("#lvlParent" + i).css({ 'background-color': 'white', 'color': 'black' });
                        for (var j = 0; j < this._obj[i].child.length; j++) {
                            jQuery("#lvlChild" + j).css({ 'background-color': 'white', 'color': 'black' });
                        }
                    }
                    jQuery("#" + event.target.id).css({ 'background-color': '#00BCD4', 'color': 'black', 'border-radius': '3px' });
                };
                FrmMenuOrderComponent.prototype.goTop = function () {
                    if (this.index == '-1') {
                        for (var i = 0; i < this._obj.length; i++) {
                            if (this.temp == i) {
                                var a = this._obj[i];
                                for (var k = i; k > 0; k--) {
                                    this._obj[k] = this._obj[k - 1];
                                    this._obj[k].n4 = k + 1;
                                }
                                this._obj[0] = a;
                                this._obj[0].n4 = 1;
                            }
                        }
                        this.temp = 0;
                    }
                    else {
                        for (var i = 0; i < this._obj[this.index].child.length; i++) {
                            if (this.temp == i) {
                                var a = this._obj[this.index].child[i];
                                for (var k = i; k > 0; k--) {
                                    this._obj[this.index].child[k] = this._obj[this.index].child[k - 1];
                                    this._obj[this.index].child[k].n4 = k + 1;
                                }
                                this._obj[this.index].child[0] = a;
                                this._obj[this.index].child[0].n4 = 1;
                            }
                        }
                        this.temp = 0;
                    }
                };
                FrmMenuOrderComponent.prototype.goUp = function () {
                    if (this.index == '-1') {
                        for (var i = this._obj.length; i > 0; i--) {
                            if (this.temp == i) {
                                var a = this._obj[i];
                                this._obj[i] = this._obj[i - 1];
                                this._obj[i].n4 = i + 1;
                                this._obj[i - 1] = a;
                                this._obj[i - 1].n4 = i;
                            }
                        }
                        if (this.temp > 0) {
                            this.temp -= 1;
                        }
                    }
                    else {
                        for (var i = this._obj[this.index].child.length; i > 0; i--) {
                            if (this.temp == i) {
                                var a = this._obj[this.index].child[i];
                                this._obj[this.index].child[i] = this._obj[this.index].child[i - 1];
                                this._obj[this.index].child[i].n4 = i + 1;
                                this._obj[this.index].child[i - 1] = a;
                                this._obj[this.index].child[i - 1].n4 = i;
                            }
                        }
                        if (this.temp > 0) {
                            this.temp -= 1;
                        }
                    }
                };
                FrmMenuOrderComponent.prototype.goDown = function () {
                    if (this.index == '-1') {
                        for (var i = 0; i < this._obj.length - 1; i++) {
                            if (this.temp == i) {
                                var a = this._obj[i];
                                this._obj[i] = this._obj[i + 1];
                                this._obj[i].n4 = i + 1;
                                this._obj[i + 1] = a;
                                this._obj[i + 1].n4 = i + 2;
                            }
                        }
                        if (this.temp < this._obj.length - 1) {
                            this.temp = Number(this.temp) + 1;
                        }
                    }
                    else {
                        for (var i = 0; i < this._obj[this.index].child.length - 1; i++) {
                            if (this.temp == i) {
                                var a = this._obj[this.index].child[i];
                                this._obj[this.index].child[i] = this._obj[this.index].child[i + 1];
                                this._obj[this.index].child[i].n4 = i + 1;
                                this._obj[this.index].child[i + 1] = a;
                                this._obj[this.index].child[i + 1].n4 = i + 2;
                            }
                        }
                        if (this.temp < this._obj[this.index].child.length - 1) {
                            this.temp = Number(this.temp) + 1;
                        }
                    }
                };
                FrmMenuOrderComponent.prototype.goBottom = function () {
                    if (this.index == '-1') {
                        for (var i = 0; i < this._obj.length; i++) {
                            if (this.temp == i) {
                                var a = this._obj[i];
                                var k = void 0;
                                for (k = i; k < this._obj.length - 1; k++) {
                                    this._obj[k] = this._obj[k + 1];
                                    this._obj[k].n4 = k + 1;
                                }
                                this._obj[this._obj.length - 1] = a;
                                this._obj[this._obj.length - 1].n4 = k + 1;
                            }
                        }
                        this.temp = this._obj.length - 1;
                    }
                    else {
                        for (var i = 0; i < this._obj[this.index].child.length; i++) {
                            if (this.temp == i) {
                                var a = this._obj[this.index].child[i];
                                var k = void 0;
                                for (k = i; k < this._obj[this.index].child.length - 1; k++) {
                                    this._obj[this.index].child[k] = this._obj[this.index].child[k + 1];
                                    this._obj[this.index].child[k].n4 = k + 1;
                                }
                                this._obj[this.index].child[this._obj[this.index].child.length - 1] = a;
                                this._obj[this.index].child[this._obj[this.index].child.length - 1].n4 = k + 1;
                            }
                        }
                        this.temp = this._obj[this.index].child.length - 1;
                    }
                };
                FrmMenuOrderComponent.prototype.goBack = function () { this._router.navigate(['/menu']); };
                FrmMenuOrderComponent.prototype.goSave = function () {
                    var _this = this;
                    var url = this.ics._apiurl + 'menu/saveMenuOrder';
                    this.http.doPost(url, this._obj).subscribe(function (data) {
                        if (data.message === "SUCCESS") {
                            _this.showMessage(_this._util.MSG_TYPE.INFO, 'Saved Successfully.');
                        }
                        else {
                            _this.showMessage(_this._util.MSG_TYPE.WARN, 'Saving Fail.');
                        }
                    }, function (error) {
                        _this.showMessage(_this._util.MSG_TYPE.WARN, 'Saving Fail.');
                    }, function () { });
                };
                FrmMenuOrderComponent.prototype.getDefaultObj = function () {
                    return [{ "syskey": "", "t1": "", "t2": "", "n4": 0, "show": false, "child": [] }];
                };
                FrmMenuOrderComponent.prototype.showMessage = function (t, m) {
                    this.ics.sendBean({ t1: "rp-snack", t2: t.type, t3: m });
                };
                FrmMenuOrderComponent = __decorate([
                    core_1.Component({
                        selector: 'frm-menuordersetup',
                        template: "\n<div class=\"container col-xs-12 col-sm-12 col-md-12\" style=\"padding: 0px 5%;\">\n    <div class=\"row clearfix\" >\n        <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12  column col-sm-offset-0 col-md-offset-0 col-lg-offset-0\"> \n            <form class= \"form-horizontal\" ngNoForm> \n                <legend>Menu Order</legend>\n                <div class=\"row  col-md-12\"> \n                    <button class=\"btn btn-primary\" type=\"button\" (click)=\"goBack()\">Back</button>                      \n                    <button class=\"btn btn-primary\" type=\"button\" (click)=\"goSave()\">Update Changes</button> \n                </div>\n                <div class=\"row col-md-12 col-sm-12 col-xs-12\">&nbsp;</div>\n                <div class=\"col-md-4\" style=\"overflow-y:auto;height:450px;width:500px;padding:15px;border:1px solid #08c; border-radius:5px !important;\">\n                <div class=\"form-group\">\n\n                    <ul style=\"list-style:none;\">\n                        <li *ngFor=\"let parentmenu of _obj, let i=index\">\n                            <div class=\"form-group\" style=\"width:200px;\">\n                                <div *ngIf=\"parentmenu.syskey!=0\">\n                                    <span (click)=\"showRoleMenus(parentmenu)\" [hidden]=\"parentmenu.show\"><img src=\"image/plus-sign.png\" alt=\"plus-sign.png\" height=\"20\" width=\"20\" style=\"margin-bottom:5px\" /></span>\n                                    <span (click)=\"showRoleMenus(parentmenu)\" [hidden]=\"!parentmenu.show\"><img src=\"image/minus-sign.png\" alt=\"minus-sign.png\" height=\"20\" width=\"20\" style=\"margin-bottom:5px\" /></span>   \n                                    <label id=\"lvlParent{{i}}\"  (click)=\"goSelect($event,'-1')\">{{parentmenu.t2}}</label>   \n                                </div>\n                            </div>\n                            <div *ngIf=\"parentmenu.show\">\n                                <ul style=\"list-style:none;\">         \n                                    <li *ngFor=\"let childmenu of parentmenu.child,let c=index\">\n                                        <div class=\"form-group\" style=\"width:200px;\"> \n                                            <label id=\"lvlChild{{c}}\"  (click)=\"goSelect($event,i)\">-{{childmenu.t2}}</label>                    \n                                        </div>                                          \n                                    </li> \n                                </ul>\n                            </div>\n                        </li>  \n                    </ul>\n                </div> \n                </div> \n                <div class=\"col-md-3\" style=\"margin-left:20px;\">\n                    <div class=\"form-group\">\n                        <button class=\"btn btn-sm btn-primary\" type=\"button\" style=\"width: 130px;\" (click)=\"goTop();\">TOP</button> \n                    </div>\n                    <div class=\"form-group\">\n                        <button class=\"btn btn-sm btn-primary\" type=\"button\" style=\"width: 130px;\" (click)=\"goUp()\">UP</button> \n                    </div>\n                    <div class=\"form-group\">\n                        <button class=\"btn btn-sm btn-primary\" type=\"button\" style=\"width: 130px;\" (click)=\"goDown()\">DOWN</button>\n                    </div>\n                    <div class=\"form-group\">                 \n                        <button class=\"btn btn-sm btn-primary\" type=\"button\" style=\"width: 130px;\" (click)=\"goBottom()\">BOTTOM</button>\n                    </div>\n                </div>             \n            </form>\n        </div>\n    </div>\n</div>\n  "
                    }), 
                    __metadata('design:paramtypes', [rp_intercom_service_1.RpIntercomService, router_1.Router, router_1.ActivatedRoute, rp_http_service_1.RpHttpService, rp_references_1.RpReferences])
                ], FrmMenuOrderComponent);
                return FrmMenuOrderComponent;
            }());
            exports_1("FrmMenuOrderComponent", FrmMenuOrderComponent);
        }
    }
});
//# sourceMappingURL=frmMenuOrder.component.js.map