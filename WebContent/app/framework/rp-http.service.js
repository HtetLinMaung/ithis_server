System.register(['@angular/core', '@angular/http', './rp-intercom.service', 'rxjs/add/operator/map'], function(exports_1, context_1) {
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
    var core_1, http_1, rp_intercom_service_1;
    var RpHttpService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (rp_intercom_service_1_1) {
                rp_intercom_service_1 = rp_intercom_service_1_1;
            },
            function (_1) {}],
        execute: function() {
            RpHttpService = (function () {
                function RpHttpService(http, ics) {
                    this.http = http;
                    this.ics = ics;
                }
                RpHttpService.prototype.doGet = function (url) {
                    var headers = new http_1.Headers();
                    headers.append('Content-Over', this.ics._orgId);
                    return this.http.get(url, { headers: headers }).map(function (res) { return res.json(); });
                };
                RpHttpService.prototype.doPost = function (url, j) {
                    var params = JSON.stringify(j);
                    var headers = new http_1.Headers();
                    headers.append('Content-Type', 'application/json');
                    headers.append('Content-Over', this.ics._orgId);
                    return this.http.post(url, params, { headers: headers }).map(function (res) { return res.json(); });
                };
                RpHttpService.prototype.doPostNormal = function (url, j) {
                    var params = JSON.stringify(j);
                    var headers = new http_1.Headers();
                    headers.append('Content-Type', 'application/json');
                    headers.append('Content-Over', this.ics._orgId);
                    return this.http.post(url, params, { headers: headers }).map(function (res) { return res; });
                };
                RpHttpService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http, rp_intercom_service_1.RpIntercomService])
                ], RpHttpService);
                return RpHttpService;
            }());
            exports_1("RpHttpService", RpHttpService);
        }
    }
});
//# sourceMappingURL=rp-http.service.js.map