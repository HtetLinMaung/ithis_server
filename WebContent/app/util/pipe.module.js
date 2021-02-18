System.register(['@angular/core', '@angular/common', '@angular/forms'], function(exports_1, context_1) {
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
    var core_1, common_1, forms_1, core_2;
    var SearchPipe, JobSearchPipe, PTypePipe, AccountFilterPipe, GLListFilterPipe, ISOCurrencylistfilter, CVAccountFilterPipe, LocationFilter, ParentFilter, COAListFilter, COAHeaderFilter, TaxTypePipe, FromCashbookPipe, ToCashbookPipe, BatchSerialPipe, BatchSerialPaginatePipe, BatchSerialSearchPipe, BarCodePipe, DateFormatPipe, PriceFormatPipe, CurrencyFilterPipe, PIRecapFilter, CategoryFilter, PipeModule;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
                core_2 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (forms_1_1) {
                forms_1 = forms_1_1;
            }],
        execute: function() {
            SearchPipe = (function () {
                function SearchPipe() {
                }
                SearchPipe.prototype.transform = function (data, searchStr) {
                    if (searchStr.trim() === "") {
                        return data;
                    }
                    return data.filter(function (item) { return item.t1.toUpperCase().includes(searchStr.trim().toUpperCase()) || item.t2.toUpperCase().includes(searchStr.trim().toUpperCase()) || item.t4.toUpperCase().includes(searchStr.trim().toUpperCase()) || item.t5.toUpperCase().includes(searchStr.trim().toUpperCase()); });
                };
                SearchPipe = __decorate([
                    core_2.Pipe({ name: "search" }), 
                    __metadata('design:paramtypes', [])
                ], SearchPipe);
                return SearchPipe;
            }());
            exports_1("SearchPipe", SearchPipe);
            JobSearchPipe = (function () {
                function JobSearchPipe() {
                }
                JobSearchPipe.prototype.transform = function (data, searchStr) {
                    if (searchStr.trim() === "") {
                        return data;
                    }
                    return data.filter(function (item) { return item.t1.toUpperCase().includes(searchStr.trim().toUpperCase()) || item.t2.toUpperCase().includes(searchStr.trim().toUpperCase()); });
                };
                JobSearchPipe = __decorate([
                    core_2.Pipe({ name: "jobsearch" }), 
                    __metadata('design:paramtypes', [])
                ], JobSearchPipe);
                return JobSearchPipe;
            }());
            exports_1("JobSearchPipe", JobSearchPipe);
            PTypePipe = (function () {
                function PTypePipe() {
                }
                PTypePipe.prototype.transform = function (data, searchStr) {
                    if (!searchStr) {
                        return data;
                    }
                    return data.filter(function (item) {
                        if (searchStr == 1) {
                            return item.n1 == 1;
                        }
                        else {
                            return item.n1 == 2;
                        }
                    });
                };
                PTypePipe = __decorate([
                    core_2.Pipe({ name: "v6ptype" }), 
                    __metadata('design:paramtypes', [])
                ], PTypePipe);
                return PTypePipe;
            }());
            exports_1("PTypePipe", PTypePipe);
            AccountFilterPipe = (function () {
                function AccountFilterPipe() {
                }
                AccountFilterPipe.prototype.transform = function (data, filter_str, accountCategory) {
                    console.log(JSON.stringify(data));
                    return data.filter(function (item) { return item.t3 === filter_str && item.n1 === accountCategory; });
                };
                AccountFilterPipe = __decorate([
                    core_2.Pipe({ name: "accountfilter" }), 
                    __metadata('design:paramtypes', [])
                ], AccountFilterPipe);
                return AccountFilterPipe;
            }());
            exports_1("AccountFilterPipe", AccountFilterPipe);
            GLListFilterPipe = (function () {
                function GLListFilterPipe() {
                }
                GLListFilterPipe.prototype.transform = function (data, filterStr, cc, dept) {
                    return data.filter(function (item) { return item.t3 === filterStr && ((cc != "0") ? item.n2 === cc : true) && ((dept != "0") ? item.n4 === dept : true); });
                };
                GLListFilterPipe = __decorate([
                    core_2.Pipe({ name: "gllistfilter" }), 
                    __metadata('design:paramtypes', [])
                ], GLListFilterPipe);
                return GLListFilterPipe;
            }());
            exports_1("GLListFilterPipe", GLListFilterPipe);
            ISOCurrencylistfilter = (function () {
                function ISOCurrencylistfilter() {
                }
                ISOCurrencylistfilter.prototype.transform = function (data, filterStr) {
                    if (filterStr.trim() === "") {
                        return data;
                    }
                    else {
                        return data.filter(function (item) { return item.CurName.toUpperCase().includes(filterStr.trim().toUpperCase()) || item.CurCode.toUpperCase().includes(filterStr.trim().toUpperCase()) || item.Description.toUpperCase().includes(filterStr.trim().toUpperCase()) || item.Symbol.toUpperCase().includes(filterStr.trim().toUpperCase()); });
                    }
                };
                ISOCurrencylistfilter = __decorate([
                    core_2.Pipe({ name: "isoCurrencylistfilter" }), 
                    __metadata('design:paramtypes', [])
                ], ISOCurrencylistfilter);
                return ISOCurrencylistfilter;
            }());
            exports_1("ISOCurrencylistfilter", ISOCurrencylistfilter);
            CVAccountFilterPipe = (function () {
                function CVAccountFilterPipe() {
                }
                CVAccountFilterPipe.prototype.transform = function (data, filterStr1, filterStr2) {
                    if (filterStr1 != '0')
                        return data.filter(function (item) { return item.syskey === filterStr1; });
                    else
                        return data.filter(function (item) { return item.syskey !== filterStr2 && item.t3 === filterStr1; });
                };
                CVAccountFilterPipe = __decorate([
                    core_2.Pipe({ name: "cvaccountfilter" }), 
                    __metadata('design:paramtypes', [])
                ], CVAccountFilterPipe);
                return CVAccountFilterPipe;
            }());
            exports_1("CVAccountFilterPipe", CVAccountFilterPipe);
            LocationFilter = (function () {
                function LocationFilter() {
                }
                LocationFilter.prototype.transform = function (location, selectedLocation, status) {
                    var _this = this;
                    var result = [];
                    if (selectedLocation.length === 0) {
                        return location;
                    }
                    location.filter(function (item) {
                        if (status == item.code) {
                            result.push(item);
                        }
                        else if (_this.isSelected(selectedLocation, item.code).length == 0) {
                            result.push(item);
                        }
                    });
                    return result;
                };
                LocationFilter.prototype.isSelected = function (selectedLocation, code) {
                    return selectedLocation.filter(function (loc) { return loc.n1 === code && loc.recordStatus != 4; });
                };
                LocationFilter = __decorate([
                    core_2.Pipe({ name: "locationfilter", pure: false }), 
                    __metadata('design:paramtypes', [])
                ], LocationFilter);
                return LocationFilter;
            }());
            exports_1("LocationFilter", LocationFilter);
            ParentFilter = (function () {
                function ParentFilter() {
                }
                ParentFilter.prototype.transform = function (data, filter_str) {
                    return data.filter(function (item) { return item.code != filter_str; });
                };
                ParentFilter = __decorate([
                    core_2.Pipe({ name: "parentfilter", pure: false }), 
                    __metadata('design:paramtypes', [])
                ], ParentFilter);
                return ParentFilter;
            }());
            exports_1("ParentFilter", ParentFilter);
            COAListFilter = (function () {
                function COAListFilter() {
                }
                COAListFilter.prototype.transform = function (data, from_range, to_range, range) {
                    if (data != undefined || data != null) {
                        if (range == 0) {
                            return data.filter(function (item) { return item.syskey >= Number(from_range) && item.syskey <= Number(to_range); });
                        }
                        else {
                            return data.filter(function (item) { return (item.syskey >= Number(from_range) && item.syskey <= Number(to_range)) || item.syskey == range; });
                        }
                    }
                };
                COAListFilter = __decorate([
                    core_2.Pipe({ name: "coalistfilter", pure: false }), 
                    __metadata('design:paramtypes', [])
                ], COAListFilter);
                return COAListFilter;
            }());
            exports_1("COAListFilter", COAListFilter);
            COAHeaderFilter = (function () {
                function COAHeaderFilter() {
                }
                COAHeaderFilter.prototype.transform = function (obj) {
                    if (obj != undefined || obj != null) {
                        var darr = [];
                        var spaces = "";
                        var count = 0;
                        var childscount = 0;
                        for (var i = 0; i < obj.length; i++) {
                            count = i + childscount;
                            if (obj[i].n1 == "" || (obj[i].n1 != "" && obj[i].n3 == "1")) {
                                if (obj[i].n3 == "1") {
                                    obj[i].n1 = count;
                                    darr = this.getChildList(obj[i].syskey, obj);
                                    for (var j = 0; j < darr.length; j++) {
                                        darr[j].n1 = ++count;
                                        darr[j].t1 = darr[j].t1.trim();
                                        childscount += 1;
                                    }
                                }
                                else {
                                    obj[i].n1 = count;
                                }
                            }
                        }
                        return obj.sort(function (a, b) {
                            return a.n1 - b.n1;
                        });
                    }
                };
                COAHeaderFilter.prototype.getChildList = function (key, obj) {
                    return obj.filter(function (item) { return item.n10 == key; });
                };
                COAHeaderFilter = __decorate([
                    core_2.Pipe({ name: "coaheaderfilter", pure: false }), 
                    __metadata('design:paramtypes', [])
                ], COAHeaderFilter);
                return COAHeaderFilter;
            }());
            exports_1("COAHeaderFilter", COAHeaderFilter);
            TaxTypePipe = (function () {
                function TaxTypePipe() {
                }
                TaxTypePipe.prototype.transform = function (data, type) {
                    if (type.trim() == "") {
                        return data;
                    }
                    return data.filter(function (item) {
                        if (type == 'sale')
                            return (item.n8 == 0 || item.n8 == 2);
                        else if (type == 'purchase')
                            return (item.n8 == 0 || item.n8 == 1);
                    });
                };
                TaxTypePipe = __decorate([
                    core_2.Pipe({ name: "taxtype" }), 
                    __metadata('design:paramtypes', [])
                ], TaxTypePipe);
                return TaxTypePipe;
            }());
            exports_1("TaxTypePipe", TaxTypePipe);
            FromCashbookPipe = (function () {
                function FromCashbookPipe() {
                }
                FromCashbookPipe.prototype.transform = function (data, syskey) {
                    return data.filter(function (item) { return item.syskey != syskey; });
                };
                FromCashbookPipe = __decorate([
                    core_2.Pipe({ name: "fromcashbookfilter" }), 
                    __metadata('design:paramtypes', [])
                ], FromCashbookPipe);
                return FromCashbookPipe;
            }());
            exports_1("FromCashbookPipe", FromCashbookPipe);
            ToCashbookPipe = (function () {
                function ToCashbookPipe() {
                }
                ToCashbookPipe.prototype.transform = function (data, syskey) {
                    return data.filter(function (item) { return item.syskey != syskey; });
                };
                ToCashbookPipe = __decorate([
                    core_2.Pipe({ name: "tocashbookfilter" }), 
                    __metadata('design:paramtypes', [])
                ], ToCashbookPipe);
                return ToCashbookPipe;
            }());
            exports_1("ToCashbookPipe", ToCashbookPipe);
            BatchSerialPipe = (function () {
                function BatchSerialPipe() {
                }
                BatchSerialPipe.prototype.transform = function (data) {
                    return data.filter(function (item) { return item.recordstatus != 0; });
                };
                BatchSerialPipe = __decorate([
                    core_2.Pipe({ name: "batchserialfilter", pure: false }), 
                    __metadata('design:paramtypes', [])
                ], BatchSerialPipe);
                return BatchSerialPipe;
            }());
            exports_1("BatchSerialPipe", BatchSerialPipe);
            BatchSerialPaginatePipe = (function () {
                function BatchSerialPaginatePipe() {
                }
                BatchSerialPaginatePipe.prototype.transform = function (data, currentPage, recordsPerPage) {
                    var start = ((+currentPage - 1) * +recordsPerPage);
                    var end = (+start) + (+recordsPerPage);
                    return data.slice(start, end);
                };
                BatchSerialPaginatePipe = __decorate([
                    core_2.Pipe({ name: "bsPaginationFilter", pure: false }), 
                    __metadata('design:paramtypes', [])
                ], BatchSerialPaginatePipe);
                return BatchSerialPaginatePipe;
            }());
            exports_1("BatchSerialPaginatePipe", BatchSerialPaginatePipe);
            BatchSerialSearchPipe = (function () {
                function BatchSerialSearchPipe() {
                }
                BatchSerialSearchPipe.prototype.transform = function (data, searchStr) {
                    if (searchStr.trim().length > 0) {
                        return data.filter(function (d) { return d.recordstatus != 0 && (d.t1.toUpperCase().includes(searchStr.trim().toUpperCase()) || d.t2.toUpperCase().includes(searchStr.trim().toUpperCase())); });
                    }
                    else {
                        return data;
                    }
                };
                BatchSerialSearchPipe = __decorate([
                    core_2.Pipe({ name: "bsSearchfilter", pure: false }), 
                    __metadata('design:paramtypes', [])
                ], BatchSerialSearchPipe);
                return BatchSerialSearchPipe;
            }());
            exports_1("BatchSerialSearchPipe", BatchSerialSearchPipe);
            BarCodePipe = (function () {
                function BarCodePipe() {
                }
                BarCodePipe.prototype.transform = function (data, type, sk) {
                    return data.filter(function (item) { return item.recordStatus != 4 && item.uomType == type && item.uomsyskey == sk; });
                };
                BarCodePipe = __decorate([
                    core_2.Pipe({ name: "barcodefilter", pure: false }), 
                    __metadata('design:paramtypes', [])
                ], BarCodePipe);
                return BarCodePipe;
            }());
            exports_1("BarCodePipe", BarCodePipe);
            DateFormatPipe = (function () {
                function DateFormatPipe() {
                }
                DateFormatPipe.prototype.transform = function (dt) {
                    return dt && dt.trim().length == 8 ? dt.replace(/(\d{4})(\d{2})(\d{2})/, '$3/$2/$1') : "";
                };
                DateFormatPipe = __decorate([
                    core_2.Pipe({ name: 'df' }), 
                    __metadata('design:paramtypes', [])
                ], DateFormatPipe);
                return DateFormatPipe;
            }());
            exports_1("DateFormatPipe", DateFormatPipe);
            PriceFormatPipe = (function () {
                function PriceFormatPipe() {
                }
                PriceFormatPipe.prototype.transform = function (n) {
                    return n && !isNaN(+n) ? (+n).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,") : "0.00";
                };
                PriceFormatPipe = __decorate([
                    core_2.Pipe({ name: 'nf' }), 
                    __metadata('design:paramtypes', [])
                ], PriceFormatPipe);
                return PriceFormatPipe;
            }());
            exports_1("PriceFormatPipe", PriceFormatPipe);
            CurrencyFilterPipe = (function () {
                function CurrencyFilterPipe() {
                }
                CurrencyFilterPipe.prototype.transform = function (data, invEditCur) {
                    return !invEditCur ? data.filter(function (item) { return item.t3 === '/' && item.n2 == 1; }) : data;
                };
                CurrencyFilterPipe = __decorate([
                    core_2.Pipe({ name: "cf" }), 
                    __metadata('design:paramtypes', [])
                ], CurrencyFilterPipe);
                return CurrencyFilterPipe;
            }());
            exports_1("CurrencyFilterPipe", CurrencyFilterPipe);
            PIRecapFilter = (function () {
                function PIRecapFilter() {
                }
                PIRecapFilter.prototype.transform = function (data, str) {
                    return data.filter(function (item) { return item.n9 != str; });
                };
                PIRecapFilter = __decorate([
                    core_2.Pipe({ name: "pirecapfilter" }), 
                    __metadata('design:paramtypes', [])
                ], PIRecapFilter);
                return PIRecapFilter;
            }());
            exports_1("PIRecapFilter", PIRecapFilter);
            CategoryFilter = (function () {
                function CategoryFilter() {
                }
                CategoryFilter.prototype.transform = function (data, str) {
                    return data.filter(function (item) { return item.n4 == str || item.syskey == "0"; });
                };
                CategoryFilter = __decorate([
                    core_2.Pipe({ name: "categoryfilter" }), 
                    __metadata('design:paramtypes', [])
                ], CategoryFilter);
                return CategoryFilter;
            }());
            exports_1("CategoryFilter", CategoryFilter);
            PipeModule = (function () {
                function PipeModule() {
                }
                PipeModule = __decorate([
                    core_1.NgModule({
                        imports: [common_1.CommonModule, forms_1.FormsModule],
                        declarations: [SearchPipe, JobSearchPipe, PTypePipe, AccountFilterPipe, GLListFilterPipe, LocationFilter, ParentFilter, COAListFilter, COAHeaderFilter, CVAccountFilterPipe, TaxTypePipe, FromCashbookPipe, ToCashbookPipe, BatchSerialPipe, ISOCurrencylistfilter, DateFormatPipe, PriceFormatPipe, CurrencyFilterPipe, PIRecapFilter, BarCodePipe, BatchSerialPaginatePipe, BatchSerialSearchPipe, CategoryFilter],
                        exports: [SearchPipe, JobSearchPipe, PTypePipe, AccountFilterPipe, GLListFilterPipe, LocationFilter, ParentFilter, COAListFilter, COAHeaderFilter, CVAccountFilterPipe, TaxTypePipe, FromCashbookPipe, ToCashbookPipe, BatchSerialPipe, ISOCurrencylistfilter, DateFormatPipe, PriceFormatPipe, CurrencyFilterPipe, PIRecapFilter, BarCodePipe, BatchSerialPaginatePipe, BatchSerialSearchPipe, CategoryFilter],
                        schemas: [core_1.CUSTOM_ELEMENTS_SCHEMA]
                    }), 
                    __metadata('design:paramtypes', [])
                ], PipeModule);
                return PipeModule;
            }());
            exports_1("PipeModule", PipeModule);
        }
    }
});
//# sourceMappingURL=pipe.module.js.map