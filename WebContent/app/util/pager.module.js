System.register(['@angular/core', '@angular/common', '@angular/forms', '../framework/rp-intercom.service'], function(exports_1, context_1) {
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
    var core_1, common_1, forms_1, core_2, rp_intercom_service_1;
    var Pager, PagerModule;
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
            },
            function (rp_intercom_service_1_1) {
                rp_intercom_service_1 = rp_intercom_service_1_1;
            }],
        execute: function() {
            Pager = (function () {
                function Pager(ics) {
                    this.ics = ics;
                    this.rpId = "";
                    this.rpTotalCount = 0;
                    this.rpCurrent = 0;
                    this.rpChanged = new core_2.EventEmitter();
                    this._idata = { totalPage: 0, start: 0, end: 0 };
                    this.subscription = ics.rpbean$.subscribe(function (x) { });
                    if (this.rpId == null || this.rpId == "")
                        this.rpId = "myid";
                    if (this.rpTotalCount == null || this.rpTotalCount < 0)
                        this.rpTotalCount = 1;
                    if (this.rpCurrent == null || this.rpCurrent < 0)
                        this.rpCurrent = 1;
                }
                Pager.prototype.ngOnInit = function () { this.calculatePaginate(); };
                Pager.prototype.ngOnChanges = function (changes) { this.calculatePaginate(); };
                Pager.prototype.calculatePaginate = function () {
                    this._idata.totalPage = Math.ceil(this.rpTotalCount / this.ics._profile.n1);
                    this._idata.start = (((this.rpCurrent - 1) * this.ics._profile.n1) + 1);
                    this._idata.start = (this.rpTotalCount == 0 ? 0 : this._idata.start);
                    this._idata.end = (this._idata.start - 1) + this.ics._profile.n1;
                    this._idata.end = this._idata.start == 0 ? 0 : this._idata.end > this.rpTotalCount ? this.rpTotalCount : this._idata.end;
                };
                Pager.prototype.goFirst = function () {
                    if (this.rpCurrent != 1) {
                        this.changePage(1);
                    }
                };
                Pager.prototype.goPrev = function () {
                    if (this.rpCurrent > 1) {
                        this.changePage((this.rpCurrent - 1));
                    }
                };
                Pager.prototype.goNext = function () {
                    if (this.rpCurrent < this._idata.totalPage) {
                        this.changePage(this.rpCurrent + 1);
                    }
                };
                Pager.prototype.goLast = function () {
                    if (this.rpCurrent != this._idata.totalPage && this._idata.totalPage != 0) {
                        this.changePage(this._idata.totalPage);
                    }
                };
                Pager.prototype.changePage = function (p) {
                    this.rpCurrent = p;
                    this.calculatePaginate();
                    var _json = { currentPage: this.rpCurrent };
                    this.rpChanged.emit(_json);
                };
                __decorate([
                    core_2.Input(), 
                    __metadata('design:type', String)
                ], Pager.prototype, "rpId", void 0);
                __decorate([
                    core_2.Input(), 
                    __metadata('design:type', Number)
                ], Pager.prototype, "rpTotalCount", void 0);
                __decorate([
                    core_2.Input(), 
                    __metadata('design:type', Number)
                ], Pager.prototype, "rpCurrent", void 0);
                __decorate([
                    core_2.Output(), 
                    __metadata('design:type', Object)
                ], Pager.prototype, "rpChanged", void 0);
                Pager = __decorate([
                    core_2.Component({
                        selector: 'rp-pager',
                        template: "  \n  <div id=\"{{rpId}}\">\n    <table><tr>\n      <td>\n        <nav>\n          <ul class=\"pagination pagination-sm\">\n            <li class=\"page-item\"><a class=\"page-link\" (click)=\"goFirst()\">First</a></li>\n            <li class=\"page-item\"><a class=\"page-link\" (click)=\"goPrev()\">Prev</a></li>\n            <li class=\"page-item\"><a class=\"page-link\" (click)=\"goNext()\">Next</a></li>\n            <li class=\"page-item\"><a class=\"page-link\" (click)=\"goLast()\">Last</a></li>        \n          </ul>\n        </nav>\n      </td>\n      <td> &nbsp;<span>{{_idata.start}} - {{_idata.end}} of {{rpTotalCount}}</span></td>\n    </tr></table>\n  </div>\n    ",
                    }), 
                    __metadata('design:paramtypes', [rp_intercom_service_1.RpIntercomService])
                ], Pager);
                return Pager;
            }());
            exports_1("Pager", Pager);
            PagerModule = (function () {
                function PagerModule() {
                }
                PagerModule = __decorate([
                    core_1.NgModule({
                        imports: [common_1.CommonModule, forms_1.FormsModule],
                        declarations: [Pager],
                        exports: [Pager],
                        providers: [],
                        schemas: [core_1.CUSTOM_ELEMENTS_SCHEMA]
                    }), 
                    __metadata('design:paramtypes', [])
                ], PagerModule);
                return PagerModule;
            }());
            exports_1("PagerModule", PagerModule);
        }
    }
});
//# sourceMappingURL=pager.module.js.map