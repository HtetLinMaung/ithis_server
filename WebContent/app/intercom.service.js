System.register(['@angular/core', 'rxjs/Subject'], function(exports_1, context_1) {
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
    var core_1, Subject_1;
    var IntercomService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (Subject_1_1) {
                Subject_1 = Subject_1_1;
            }],
        execute: function() {
            IntercomService = (function () {
                function IntercomService() {
                    this._orgId = "";
                    this._domain = "mit";
                    this._apiurl = "";
                    this._wsurl = "";
                    this._rpturl = "";
                    this._title = "";
                    this._app = "";
                    this._appname = "";
                    this._version = "";
                    this._invEditCur = true;
                    this._isDownloadAllStock = true;
                    this._profile = {
                        "userName": "",
                        "bid": "",
                        "role": 0,
                        "userSk": "0",
                        "u12Sk": "0",
                        "logoText": "NG",
                        "logoLink": "Menu00",
                        "commandCenter": "true",
                        "btndata": [],
                        "menus": [],
                        "rightMenus": [],
                        "userId": "",
                        "t1": "",
                        "t2": "",
                        "t3": "",
                        "t4": "",
                        "n1": 10
                    };
                    // Observable string sources 
                    this._channel001Source = new Subject_1.Subject();
                    this._channel002Source = new Subject_1.Subject();
                    this._channel003Source = new Subject_1.Subject();
                    this._rpbeanSource = new Subject_1.Subject();
                    this.subject = new Subject_1.Subject();
                    //Observable string streams
                    this.channel001$ = this._channel001Source.asObservable();
                    this.channel002$ = this._channel002Source.asObservable();
                    this.channel003$ = this._channel003Source.asObservable();
                    this.rpbean$ = this._rpbeanSource.asObservable();
                }
                // Service message commands
                IntercomService.prototype.send001 = function (x) {
                    this._channel001Source.next(x);
                };
                IntercomService.prototype.send002 = function (x) {
                    this._channel002Source.next(x);
                };
                IntercomService.prototype.send003 = function (x) {
                    this._channel003Source.next(x);
                };
                IntercomService.prototype.sendBean = function (x) {
                    this._mybean = x;
                    this._rpbeanSource.next(x);
                };
                IntercomService.prototype.getBean = function () {
                    return this._mybean;
                };
                IntercomService.prototype.getRole = function () {
                    return this._profile.role;
                };
                IntercomService.prototype.getApiUrl = function () {
                    return this._apiurl;
                };
                IntercomService.prototype.isMenuBar = function () {
                    return this._profile.role > 0;
                };
                IntercomService.prototype.confirmUpload = function (p) {
                    if (p) {
                        jQuery(window).on('beforeunload', function () { return "Exit Application"; });
                    }
                    else {
                        jQuery(window).unbind('beforeunload');
                    }
                };
                IntercomService.prototype.getBtns = function (link) {
                    var arr = this._profile.btndata;
                    for (var i = 0; i < arr.length; i++) {
                        if (link == arr[i].link) {
                            return arr[i].desc;
                        }
                    }
                };
                IntercomService.prototype.chkBtnRight = function (val, data) {
                    var res = true;
                    data.forEach(function (e) {
                        if (val == e) {
                            res = false;
                            return res;
                        }
                    });
                    return res;
                };
                IntercomService.prototype.isLoginUser = function () {
                    return this.getRole() && this.getRole() > 0;
                };
                IntercomService.prototype.getMessage = function () {
                    return this.subject.asObservable();
                };
                IntercomService.prototype.sendMessage = function (x) {
                    this.subject.next(x);
                };
                IntercomService = __decorate([
                    core_1.Injectable({
                        providedIn: 'root'
                    }), 
                    __metadata('design:paramtypes', [])
                ], IntercomService);
                return IntercomService;
            }());
            exports_1("IntercomService", IntercomService);
        }
    }
});
//# sourceMappingURL=intercom.service.js.map