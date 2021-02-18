System.register(['@angular/core', '@angular/common/http', './intercom.service'], function(exports_1, context_1) {
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
    var core_1, http_1, intercom_service_1;
    var DataService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (intercom_service_1_1) {
                intercom_service_1 = intercom_service_1_1;
            }],
        execute: function() {
            DataService = (function () {
                function DataService(http, ics) {
                    this.http = http;
                    this.ics = ics;
                    this.jsonPath = '';
                    //this.orgId = this.ics._orgId;
                    this.jsonPath = 'assets/config/config.json';
                    this.orgId = localStorage.getItem('orgId');
                }
                DataService.prototype.getConfig = function () {
                    if (this.jsonPath != '' && this.jsonPath != null) {
                        return this.http.get(this.jsonPath);
                    }
                    else {
                        return null;
                    }
                };
                DataService.prototype.getSalesReports = function (url, params) {
                    var headers = new http_1.HttpHeaders();
                    headers.set('Content-Type', 'application/json');
                    headers.append("Content-Over", this.orgId);
                    var options = { headers: headers };
                    var postparams = {
                        businessid: "BID-1"
                    };
                    // return this.http.post(url, params, options);
                };
                DataService.prototype.login = function (username, password) {
                    var headers = new http_1.HttpHeaders();
                    headers.set('Content-Type', 'application/json');
                    var options = { headers: headers };
                    var postparams = {
                        username: username,
                        password: password
                    };
                };
                DataService.prototype.logout = function () {
                    // remove user from local storage to log user out
                    localStorage.removeItem('currentUser');
                };
                DataService = __decorate([
                    core_1.Injectable({
                        providedIn: 'root'
                    }), 
                    __metadata('design:paramtypes', [(typeof (_a = typeof http_1.HttpClient !== 'undefined' && http_1.HttpClient) === 'function' && _a) || Object, intercom_service_1.IntercomService])
                ], DataService);
                return DataService;
                var _a;
            }());
            exports_1("DataService", DataService);
        }
    }
});
//# sourceMappingURL=data.service.js.map