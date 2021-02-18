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
    var core_1, router_1, core_2, rp_intercom_service_1, rp_http_service_1, rp_client_util_1;
    var FrmRoleComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
                core_2 = core_1_1;
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
            core_2.enableProdMode();
            FrmRoleComponent = (function () {
                function FrmRoleComponent(ics, _router, route, http) {
                    this.ics = ics;
                    this._router = _router;
                    this.route = route;
                    this.http = http;
                    this._util = new rp_client_util_1.ClientUtil();
                    this._roleMenuList = [];
                    this._obj = this.getDefaultObj();
                    this._cloneNewMenuList = [];
                    this.subscription = ics.rpbean$.subscribe(function (x) { });
                    if (!ics.getRole() || ics.getRole() == 0)
                        this._router.navigate(['/login']);
                    this.getRoleMenus();
                }
                FrmRoleComponent.prototype.getRoleMenus = function () {
                    var _this = this;
                    this.http.doGet(this.ics._apiurl + 'role/getAllRole').subscribe(function (data) {
                        _this._obj.menu = data.dataList;
                        _this._cloneNewMenuList = _this._util.deepCloneArray(data.dataList);
                    }, function (error) { }, function () { });
                };
                FrmRoleComponent.prototype.goList = function () {
                    this._router.navigate(['/rolelist']);
                };
                FrmRoleComponent.prototype.goNew = function () {
                    this._obj = this.getDefaultObj();
                    this._obj.menu = [];
                    this._obj.menu = this._cloneNewMenuList;
                };
                FrmRoleComponent.prototype.goDelete = function () {
                    var _this = this;
                    this.http.doGet(this.ics._apiurl + 'role/deleteRole/' + this._obj.syskey).subscribe(function (data) {
                        if (data.message == "SUCCESS") {
                            _this.showMessage(_this._util.MSG_TYPE.INFO, 'Delete SuccessFully');
                            _this.goNew();
                        }
                        else if (data.message == "CANNOTDELETE") {
                            _this.showMessage(_this._util.MSG_TYPE.WARN, 'Role In Use');
                        }
                        else {
                            _this.showMessage(_this._util.MSG_TYPE.WARN, 'Delete Fail');
                        }
                    }, function (error) { }, function () { });
                };
                FrmRoleComponent.prototype.goPost = function () {
                    var _this = this;
                    var url = this.ics._apiurl + 'role/save';
                    var btns = [];
                    if (this.isvalie()) {
                        for (var i = 0; i < this._obj.menu.length; i++) {
                            for (var j = 0; j < this._obj.menu[i].childmenus.length; j++) {
                                var str = this.getButtonData(this._obj.menu[i].childmenus[j].btns);
                                var bdata = { "syskey": 0, "desc": "", "link": "", "flag": false };
                                bdata.desc = str;
                                bdata.syskey = this._obj.menu[i].childmenus[j].syskey;
                                btns.push(bdata);
                            }
                        }
                        this._obj.btnarr = btns;
                        var json = this._obj;
                        this.http.doPost(url, json).subscribe(function (data) {
                            if (data.message == "SUCCESS") {
                                _this.showMessage(_this._util.MSG_TYPE.INFO, 'Save SuccessFully');
                                _this.goNew();
                            }
                            else if (data.message == "CODEEXISTS") {
                                _this.showMessage(_this._util.MSG_TYPE.WARN, 'Code Already Exists');
                            }
                            else {
                                _this.showMessage(_this._util.MSG_TYPE.WARN, 'Saving Fail');
                            }
                        }, function (error) { }, function () { });
                    }
                };
                FrmRoleComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.sub = this.route.params.subscribe(function (params) {
                        var syskey = params['syskey'];
                        if (syskey !== undefined && syskey !== null) {
                            _this.http.doGet(_this.ics._apiurl + 'role/readRoleBySyskey/' + syskey).subscribe(function (data) {
                                _this._obj = data.roleData;
                            }, function (error) { }, function () { });
                        }
                    });
                };
                FrmRoleComponent.prototype.ngOnDestroy = function () {
                    if (this.ics.getRole() > 0) {
                        this.sub.unsubscribe();
                    }
                };
                FrmRoleComponent.prototype.showRoleMenus = function (obj) {
                    var indexx = this._obj.menu.indexOf(obj);
                    if (this._obj.menu[indexx].show) {
                        this._obj.menu[indexx].show = false;
                    }
                    else {
                        this._obj.menu[indexx].show = true;
                    }
                };
                FrmRoleComponent.prototype.getButtonData = function (array) {
                    var k = "";
                    for (var i = 0; i < array.length; i++) {
                        if (array[i].flag) {
                            if (k != "") {
                                k += ",";
                            }
                            k += array[i].syskey;
                        }
                    }
                    return k;
                };
                FrmRoleComponent.prototype.getParentValue = function (indexno, value, event) {
                    if (event.target.checked) {
                        //if parentmenu is checked,check all childmenu
                        this.checkAllMenu(indexno, true);
                    }
                    else {
                        //if parentmenu is not check, uncheck all childmenu
                        this.checkAllMenu(indexno, false);
                    }
                };
                FrmRoleComponent.prototype.getButtonValue = function (indexno, menuindex, btnindex, event) {
                    if (event.target.checked) {
                        this._obj.menu[indexno].childmenus[menuindex].result = true;
                        this._obj.menu[indexno].result = true;
                    }
                    else {
                        var hasButtonCheck = false;
                        this._obj.menu[indexno].childmenus[menuindex].btns[btnindex].flag = false;
                        if (this._obj.menu[indexno].childmenus[menuindex].btns != undefined) {
                            for (var i = 0; i < this._obj.menu[indexno].childmenus[menuindex].btns.length; i++) {
                                if (this._obj.menu[indexno].childmenus[menuindex].btns[i].flag == true) {
                                    hasButtonCheck = true;
                                    break;
                                }
                            }
                        }
                        if (hasButtonCheck == false) {
                            this._obj.menu[indexno].childmenus[menuindex].result = false;
                            // when uncheck all btn then uncheck childmenunu.when child menu uncheck all then main menu uncheck. this is checking is there check childmenu if not uncheck mainmenu, Thz for reading.
                            this.checkALLChildMenu(indexno, menuindex, false);
                        }
                    }
                };
                FrmRoleComponent.prototype.getChildValue = function (indexno, childindexno, event) {
                    var i = 0;
                    if (event.target.checked) {
                        //if one childmenu is checked, check its parentmenu
                        this._obj.menu[indexno].result = true;
                        //if MenuCheck Under Menubutton ALl Check
                        this.checkAllBtn(indexno, childindexno, true);
                    }
                    else {
                        //if there is no check in childmenu uncheck parentmunu ==>Start
                        this.checkALLChildMenu(indexno, childindexno, true);
                        // == END 
                        //if childMenu UnCheck Under Menubutton All UnCheck
                        this.checkAllBtn(indexno, childindexno, false);
                    }
                };
                FrmRoleComponent.prototype.checkALLChildMenu = function (indexno, childindexno, frommenu) {
                    var i = 0;
                    if (frommenu) {
                        this._obj.menu[indexno].childmenus[childindexno].result = false;
                    }
                    for (var j = 0; j < this._obj.menu[indexno].childmenus.length; j++) {
                        if (this._obj.menu[indexno].childmenus[j].result === true) {
                            i = 1;
                            break;
                        }
                    }
                    if (i == 0) {
                        this._obj.menu[indexno].result = false;
                    }
                };
                FrmRoleComponent.prototype.checkAllBtn = function (mainIndex, ChildIndex, param) {
                    if (this._obj.menu[mainIndex].childmenus[ChildIndex].btns != undefined) {
                        for (var i = 0; i < this._obj.menu[mainIndex].childmenus[ChildIndex].btns.length; i++) {
                            this._obj.menu[mainIndex].childmenus[ChildIndex].btns[i].flag = param;
                        }
                    }
                };
                FrmRoleComponent.prototype.checkAllMenu = function (mainIndex, param) {
                    if (this._obj.menu[mainIndex].childmenus != undefined) {
                        for (var i = 0; i < this._obj.menu[mainIndex].childmenus.length; i++) {
                            this._obj.menu[mainIndex].childmenus[i].result = param;
                            this.checkAllBtn(mainIndex, i, param);
                        }
                    }
                };
                FrmRoleComponent.prototype.getDefaultObj = function () {
                    return { "syskey": 0, "autokey": 0, "createdDate": "", "modifiedDate": "", "userId": this.ics._profile.userid, "userName": this.ics._profile.userName, "recordStatus": 0, "syncStatus": 0, "syncBatch": 0, "usersyskey": this.ics._profile.userSk, "t1": "", "t2": "", "t3": "", "n1": 0, "n2": 0, "n3": 0, "btnarr": [], "menu": [] };
                };
                FrmRoleComponent.prototype.showMessage = function (t, m) {
                    this.ics.sendBean({ t1: "rp-snack", t2: t.type, t3: m });
                };
                FrmRoleComponent.prototype.isvalie = function () {
                    if (this._obj.t1 == "") {
                        this.showMessage(this._util.MSG_TYPE.WARN, 'Invalid Code');
                        return false;
                    }
                    if (!this.checkHasMenu()) {
                        this.showMessage(this._util.MSG_TYPE.WARN, 'Invalid Menu');
                        return false;
                    }
                    return true;
                };
                FrmRoleComponent.prototype.checkHasMenu = function () {
                    var i = false;
                    for (var index = 0; index < this._obj.menu.length; index++) {
                        if (this._obj.menu[index].result == true) {
                            i = true;
                            break;
                        }
                    }
                    return i;
                };
                FrmRoleComponent = __decorate([
                    core_1.Component({
                        selector: 'frm-roleSetup',
                        template: "\n  <div class=\"container\">\n    <div class=\"row clearfix\"> \n      <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12  column col-sm-offset-0 col-md-offset-0 col-lg-offset-0\"> \n      <form class=\"form-horizontal\">\n      <legend>Role</legend>\n\n        <div class=\"form-group\">\n            <div class=\"row  col-md-12\">              \n              <button class=\"btn btn-primary\" type=\"button\" (click)=\"goList()\">List</button> \n              <button class=\"btn btn-primary\"  id=\"new\" type=\"button\" (click)=\"goNew()\">New</button>      \n              <button class=\"btn btn-primary\"  id=\"save\" type=\"button\" (click)=\"goPost()\" >Save</button> \n              <button class=\"btn btn-danger\"  id=\"delete\" type=\"button\" [disabled]=\"_obj.syskey=== 0 \" (click)=\"goDelete();\" >Delete</button> \n            </div>           \n        </div>\n\n          <div class=\"form-group\">\n                    <div>\n                        <label class=\"col-md-2\">Code</label>\n                    </div>\n                    <div class=\"col-md-3\">\n                        <input type=\"text\"   [(ngModel)]=\"_obj.t1\"  class=\"form-control\" [ngModelOptions]=\"{standalone: true}\" />\n                    </div>\n                </div> \n\n          <div class=\"form-group\">\n                    <div>\n                        <label class=\"col-md-2\">Description</label>\n                    </div>\n                    <div class=\"col-md-3\">\n                        <input type=\"text\"  [(ngModel)]=\"_obj.t2\" class=\"form-control\" [ngModelOptions]=\"{standalone: true}\" />\n                    </div>\n                </div> \n\n        <!-- nav bar -->\n        <ul class=\"nav nav-tabs\">\n            <li class=\"active\"><a data-toggle=\"tab\" href=\"#tab1\"><b>Menu</b></a></li>      \n        </ul>\n\n        <div class=\"tab-content\">\n            <div id=\"tab1\" class=\"tab-pane fade in active\">            \n            <div class=\"form-group\">\n\n            <ul style=\"list-style:none;\">\n                <li *ngFor=\"let parentmenu of _obj.menu, let i=index\">\n                <div class=\"form-group\">\n                    <div *ngIf=\"parentmenu.syskey!=0\">\n                        <span (click)=\"showRoleMenus(parentmenu)\" [hidden]=\"parentmenu.show\"><img src=\"image/plus-sign.png\" alt=\"plus-sign.png\" height=\"15\" width=\"15\" style=\"margin-bottom:8px\" /></span>\n                        <span (click)=\"showRoleMenus(parentmenu)\" [hidden]=\"!parentmenu.show\"><img src=\"image/minus-sign.png\" alt=\"minus-sign.png\" height=\"15\" width=\"15\" style=\"margin-bottom:8px\" /></span>   \n                        <label><input type=\"checkbox\" [(ngModel)]=\"parentmenu.result\" (change)=\"getParentValue(i,parentmenu.syskey,$event)\" [ngModelOptions]=\"{standalone: true}\">{{parentmenu.t2}}</label>   \n                    </div>\n                </div>\n                <div *ngIf=\"parentmenu.show\">\n                    <ul style=\"list-style:none;\">         \n                        <li *ngFor=\"let childmenu of parentmenu.childmenus,let c=index\">\n                            <div class=\"form-group\"> \n                                <input type=\"checkbox\"  [(ngModel)]=\"childmenu.result\" (change)=\"getChildValue(i,c,$event)\" [ngModelOptions]=\"{standalone: true}\">{{childmenu.t2}}                   \n                            </div>\n                            <div class=\"form-group\"> \n                                &emsp;Button->\n                                <span *ngFor=\"let btnmenu of childmenu.btns,let b=index\">\n                                <input type=\"checkbox\"  [(ngModel)]=\"btnmenu.flag\" (change)=\"getButtonValue(i,c,b,$event)\"  [ngModelOptions]=\"{standalone: true}\">{{btnmenu.t2}}\n                                </span> \n                            </div>               \n                        </li> \n                    </ul>\n                </div>\n                </li>  \n            </ul>\n            </div>\n            </div>           \n        </div>\n      </form>\n      </div>\n    </div>\n   </div>   \n   "
                    }), 
                    __metadata('design:paramtypes', [rp_intercom_service_1.RpIntercomService, router_1.Router, router_1.ActivatedRoute, rp_http_service_1.RpHttpService])
                ], FrmRoleComponent);
                return FrmRoleComponent;
            }());
            exports_1("FrmRoleComponent", FrmRoleComponent);
        }
    }
});
//# sourceMappingURL=frmRole.component.js.map