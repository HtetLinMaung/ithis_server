System.register(['@angular/core', './rp-http.service', './rp-intercom.service'], function(exports_1, context_1) {
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
    var core_1, rp_http_service_1, rp_intercom_service_1;
    var RpReferences;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (rp_http_service_1_1) {
                rp_http_service_1 = rp_http_service_1_1;
            },
            function (rp_intercom_service_1_1) {
                rp_intercom_service_1 = rp_intercom_service_1_1;
            }],
        execute: function() {
            RpReferences = (function () {
                function RpReferences(ics, http) {
                    this.ics = ics;
                    this.http = http;
                    this._lov1 = {
                        "stock": [{ "value": "1", "caption": "STOCK" }],
                        "currency": [{ "value": "1", "caption": "USD" }],
                        "gender": [{ "value": "", "caption": "" }, { "value": "m", "caption": "male" }, { "value": "f", "caption": "female" }, { "value": "0", "caption": "others" }],
                        "prefix": [{ "value": "", "caption": "" }, { "value": "5", "caption": "Dr" }, { "value": "3", "caption": "Miss" }, { "value": "1", "caption": "Mr" }, { "value": "2", "caption": "Mrs" }, { "value": "4", "caption": "Ms" }],
                        "string": [{ "value": "eq", "caption": "Equals" }, { "value": "c", "caption": "Contains" }, { "value": "bw", "caption": "Begins with" }, { "value": "ew", "caption": "End with" }],
                        "v5ApiOptr": [{ "value": "0", "caption": "Equal" }, { "value": "1", "caption": "Contain" }, { "value": "2", "caption": "Begin with" }, { "value": "3", "caption": "End with" }],
                        "numeric": [{ "value": "eq", "caption": "Equals" }, { "value": "gt", "caption": "Greater than" }, { "value": "lt", "caption": "Less than" }, { "value": "geq", "caption": "Greater than or Equal" },
                            { "value": "leq", "caption": "Less than or Equal" }, { "value": "bt", "caption": "Between" }],
                        "date": [{ "value": "eq", "caption": "Equals" }, { "value": "gt", "caption": "Greater than" }, { "value": "lt", "caption": "Less than" }, { "value": "geq", "caption": "Greater than or Equal" },
                            { "value": "leq", "caption": "Less than or Equal" }, { "value": "bt", "caption": "Between" }],
                        "yesno": [{ "value": "1", "caption": "NO" }, { "value": "2", "caption": "YES" }],
                        "period_types": [{ "value": "1", "caption": "Day" }, { "value": "2", "caption": "Month" }, { "value": "3", "caption": "Year" }],
                        "cashbook_type": [{ "value": 0, "caption": "NA" }, { "value": 1, "caption": "Cash" }, { "value": 2, "caption": "Bank" }],
                        "gender_type": [{ "value": "0", "caption": "Male" }, { "value": "1", "caption": "Female" }],
                        "ptype": [{ "code": "1", "description": "Cash" }, { "code": "5", "description": "Card" }, { "code": "7", "description": "Credit Card" }, { "code": "3", "description": "GL" }, { "code": "4", "description": "Point" }, { "code": "6", "description": "Round" }],
                        "currency_operator": [{ "operator": "*" }, { "operator": "/" }],
                        "account_type_datas": [{ "code": "0", "description": "Posting" }, { "code": "1", "description": "Header" }, { "code": "2", "description": "Memo" }],
                        "saleStatus": [{ "code": "1", "description": "Saved" }, { "code": "128", "description": "Paid" }],
                        "saleType": [{ "code": "1", "description": "Sales" }, { "code": "2", "description": "Sales Return" }],
                        "use_type": [{ "value": 0, "description": "-" }, { "value": 1, "description": "Stripe Card" }, { "value": 2, "description": "Normal Card" }],
                        "tax_type": [{ "value": "0", "description": "Exclusive" }, { "value": "1", "description": "Inclusive" }, { "value": "2", "description": "None" }]
                    };
                    this._lov2 = {
                        "ref001": [{ "value": "", "caption": "Empty" }]
                    };
                    this._lov3 = {
                        "customerinfo": { "customerData": { "syskey": "", "userId": "", "userName": "", "t1": "", "t2": "", "t3": "", "t4": "", "n1": "", "n6": "", "n9": "", "n10": "" }, "priceBandListData": [{ "syskey": "", "userId": "", "userName": "", "t1": "", "t2": "", "t3": "", "n1": 0 }] },
                        "locdatas": [{ "code": "", "description": "", "t1": "", "t2": "", "t3": "" }],
                        "counterdatas": [{ "code": "", "description": "", "t1": "" }],
                        "currencydatas": [{ "syskey": "", "t1": "", "t2": "", "t3": "", "t4": "", "n2": "", "n3": "" }],
                        "saleperson": [{ "code": "", "description": "" }],
                        "payment_type_datas": [{ "syskey": "", "t2": "", "n9": "" }],
                        "uomdatas": [{ "syskey": "0", "t1": "", "t2": "", "t3": "", "t4": "", "n1": "", "n2": "", "n3": 0.0 }],
                        "item_type_datas": [{ "code": "0", "description": "" }],
                        "countrydatas": [{ "code": "0", "description": "" }],
                        "price_band_datas": [{ "syskey": "0", "t1": "", "t2": "", "t3": "", "t4": "", "n1": "", "n2": "", "n3": 0.0 }],
                        "bin_datas": [{ "code": "0", "description": "", "t1": "" }],
                        "customer_types": [{ "code": "0", "description": "" }],
                        "vendor_types": [{ "code": "0", "description": "" }],
                        "gllist_datas": [{ "syskey": "", "t1": "", "t2": "" }],
                        "cashbooks": [{ "syskey": "0", "t1": "", "t2": "", "t3": "", "t4": "", "n1": "", "n2": "", "n3": 0.0 }],
                        "costcenter_datas": [{ "code": "", "description": "" }],
                        "department_datas": [{ "code": "", "description": "" }],
                        "account_category_datas": [{ "syskey": "", "t1": "", "t2": "" }],
                        "stock_groups": [{ "syskey": "0", "t1": "", "t2": "", "t3": "", "t4": "", "n1": "", "n2": "", "n3": 0.0 }],
                        "stock_categories": [{ "syskey": "0", "t1": "", "t2": "", "t3": "", "t4": "", "n1": "", "n2": "", "n3": 0.0 }],
                        "mainmenu": [{ "syskey": "", "t2": "" }],
                        "packing_datas": [{ "code": "0", "description": "" }],
                    };
                    this._lov4 = {
                        "purchase_account_datas": [],
                        "ap_account_datas": [],
                        "sales_account_datas": [],
                        "ar_account_datas": []
                    };
                }
                RpReferences.prototype.getV6Location = function (cb) {
                    var _this = this;
                    var url = this.ics.getApiUrl() + 'main/locations/' + this.ics._profile.userSk;
                    this.http.doGet(url).subscribe(function (data) {
                        _this._lov3.locdatas = data;
                        var locations = '';
                        data.forEach(function (l, i) { if (i > 0)
                            locations += ','; locations += l.code; });
                        _this.ics._locationRight = locations;
                        if (cb)
                            cb.call();
                    }, function () { if (cb)
                        cb.call(); });
                };
                RpReferences.prototype.getV6BinData = function (cb) {
                    var _this = this;
                    var url = this.ics.getApiUrl() + 'common/get-bins';
                    this.http.doGet(url).subscribe(function (data) { _this._lov3.bin_datas = data; if (cb)
                        cb.call(); }, function () { if (cb)
                        cb.call(); });
                };
                RpReferences = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [rp_intercom_service_1.RpIntercomService, rp_http_service_1.RpHttpService])
                ], RpReferences);
                return RpReferences;
            }());
            exports_1("RpReferences", RpReferences);
        }
    }
});
//# sourceMappingURL=rp-references.js.map