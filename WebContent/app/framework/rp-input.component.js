System.register(['@angular/core', '@angular/router', './rp-references', './rp-intercom.service'], function(exports_1, context_1) {
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
    var core_1, router_1, rp_references_1, rp_intercom_service_1, core_2;
    var RpInputComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
                core_2 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (rp_references_1_1) {
                rp_references_1 = rp_references_1_1;
            },
            function (rp_intercom_service_1_1) {
                rp_intercom_service_1 = rp_intercom_service_1_1;
            }],
        execute: function() {
            core_2.enableProdMode();
            RpInputComponent = (function () {
                function RpInputComponent(ref, ics, _router) {
                    this.ref = ref;
                    this.ics = ics;
                    this._router = _router;
                    this.rpModelChange = new core_1.EventEmitter();
                    this.rpTest = new core_1.EventEmitter();
                    this.subscription = ics.rpbean$.subscribe(function (x) { });
                    if (this.rpId == null || this.rpId == "")
                        this.rpId = "myid";
                    if (this.rpLabelClass == null || this.rpLabelClass == "")
                        this.rpLabelClass = "col-md-2";
                    if (this.rpClass == null || this.rpClass == "")
                        this.rpClass = "col-md-4";
                    if (this.rpAutoComplete == null || this.rpAutoComplete == "")
                        this.rpAutoComplete = "off";
                }
                RpInputComponent.prototype.updateData = function (event) {
                    this.rpModel = event;
                    this.rpModelChange.emit(event);
                    if (this.rpModel == "123")
                        this.rpTest.emit();
                };
                RpInputComponent.prototype.hello = function () {
                    return "?";
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String)
                ], RpInputComponent.prototype, "rpId", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String)
                ], RpInputComponent.prototype, "rpLabel", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String)
                ], RpInputComponent.prototype, "rpClass", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String)
                ], RpInputComponent.prototype, "rpLabelClass", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String)
                ], RpInputComponent.prototype, "rpLabelStyle", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String)
                ], RpInputComponent.prototype, "rpType", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String)
                ], RpInputComponent.prototype, "rpRequired", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String)
                ], RpInputComponent.prototype, "rpReadonly", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String)
                ], RpInputComponent.prototype, "rpAutoComplete", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], RpInputComponent.prototype, "rpModel", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String)
                ], RpInputComponent.prototype, "rpLabelRequired", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', Object)
                ], RpInputComponent.prototype, "rpModelChange", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', Object)
                ], RpInputComponent.prototype, "rpTest", void 0);
                RpInputComponent = __decorate([
                    core_1.Component({
                        selector: 'rp-input',
                        template: "\n  <div>\n    <label *ngIf=\"rpLabelRequired!='true'\" class=\"{{rpLabelClass}} control-label\" for=\"rpId\" style=\"text-align: left;\">{{rpLabel}}</label>\n    <label *ngIf=\"rpLabelRequired=='true'\" class=\"{{rpLabelClass}} control-label\" for=\"rpId\" style=\"text-align: left;\">{{rpLabel}} <span style=\"color:red\">*</span></label>\n    \n    <div class=\"{{rpClass}}\">\n        <input id=\"{{rpId}}\"  *ngIf=\"rpReadonly!='true'&&rpRequired=='true'&&(rpType=='text'||rpType=='number'||rpType=='email'||rpType=='tel'||rpType=='url' ||rpType=='password')\" class=\"form-control\" type=\"{{rpType}}\" [ngModel]=\"rpModel\" (ngModelChange)=\"updateData($event)\" required autocomplete=\"{{rpAutoComplete}}\"  [ngModelOptions]=\"{standalone: true}\">\n        <input id=\"{{rpId}}\"  *ngIf=\"rpReadonly!='true'&&rpRequired!='true'&&(rpType=='text'||rpType=='number'||rpType=='email'||rpType=='tel'||rpType=='url' ||rpType=='password')\" class=\"form-control\" type=\"{{rpType}}\" [ngModel]=\"rpModel\" (ngModelChange)=\"updateData($event)\"   autocomplete=\"{{rpAutoComplete}}\" [ngModelOptions]=\"{standalone: true}\">\n        <input id=\"{{rpId}}\"  *ngIf=\"rpReadonly=='true'&&(rpType=='text'||rpType=='number'||rpType=='email'||rpType=='tel'||rpType=='url' ||rpType=='password')\" class=\"form-control\" type=\"{{rpType}}\" [ngModel]=\"rpModel\" (ngModelChange)=\"updateData($event)\" readonly  autocomplete=\"{{rpAutoComplete}}\" [ngModelOptions]=\"{standalone: true}\">\n\n        <input id=\"{{rpId}}\"  *ngIf=\"rpReadonly!='true'&&rpRequired=='true'&&(rpType=='date')\" class=\"form-control\" type=\"{{rpType}}\" [ngModel]=\"rpModel\" (ngModelChange)=\"updateData($event)\" required autocomplete=\"{{rpAutoComplete}}\" pattern=\"dd/MM/YYYY\" [ngModelOptions]=\"{standalone: true}\">\n        <input id=\"{{rpId}}\"  *ngIf=\"rpReadonly!='true'&&rpRequired!='true'&&(rpType=='date')\" class=\"form-control\" type=\"{{rpType}}\" [ngModel]=\"rpModel\" (ngModelChange)=\"updateData($event)\"   autocomplete=\"{{rpAutoComplete}}\" pattern=\"dd/MM/YYYY\"  [ngModelOptions]=\"{standalone: true}\">\n        <input id=\"{{rpId}}\"  *ngIf=\"rpReadonly=='true'&&(rpType=='date')\" class=\"form-control\" type=\"{{rpType}}\" [ngModel]=\"rpModel\" (ngModelChange)=\"updateData($event)\" readonly  autocomplete=\"{{rpAutoComplete}}\" pattern=\"dd/MM/YYYY\"  [ngModelOptions]=\"{standalone: true}\">\n\n        <input id=\"{{rpId}}\" *ngIf=\"(rpType=='boolean'||rpType=='checkbox')&& rpReadonly!='true'\" class=\"{{rpClass}}\" type=\"checkbox\" [ngModel]=\"rpModel\" (ngModelChange)=\"updateData($event)\" [ngModelOptions]=\"{standalone: true}\" >\n        <input id=\"{{rpId}}\" *ngIf=\"(rpType=='boolean'||rpType=='checkbox')&& rpReadonly=='true'\" class=\"{{rpClass}}\" type=\"checkbox\" [ngModel]=\"rpModel\" (ngModelChange)=\"updateData($event)\" [ngModelOptions]=\"{standalone: true}\" >\n\n        <select id=\"{{rpId}}\"  *ngIf=\"rpType=='gender'&& rpReadonly!='true'\"  [ngModel]=\"rpModel\" (ngModelChange)=\"updateData($event)\" class=\"form-control\">\n            <option *ngFor=\"let item of ref._lov1.gender\" value=\"{{item.value}}\" >{{item.caption}}</option>\n        </select>  \n        <select id=\"{{rpId}}\"  *ngIf=\"rpType=='gender'&& rpReadonly=='true'\"  [ngModel]=\"rpModel\" (ngModelChange)=\"updateData($event)\" class=\"form-control\"  disabled=\"true\">\n            <option *ngFor=\"let item of ref._lov1.gender\" value=\"{{item.value}}\" >{{item.caption}}</option>\n        </select>  \n        \n        <select id=\"{{rpId}}\"  *ngIf=\"rpType=='mainmenu' && rpReadonly!='true'\"  [(ngModel)]=\"rpModel\" (ngModelChange)=\"updateData($event)\" class=\"form-control\">\n            <option *ngFor=\"let item of ref._lov3.mainmenu\" value=\"{{item.value}}\" >{{item.caption}}</option>\n        </select>  \n        <select id=\"{{rpId}}\"  *ngIf=\"rpType=='mainmenu'&& rpReadonly=='true'\"  [ngModel]=\"rpModel\" (ngModelChange)=\"updateData($event)\" class=\"form-control\"  disabled=\"true\">\n            <option *ngFor=\"let item of ref._lov3.mainmenu\" value=\"{{item.value}}\" >{{item.caption}}</option>\n        </select>  \n      \n        <select id=\"{{rpId}}\"  *ngIf=\"rpType=='status'&& rpReadonly!='true'\"  [ngModel]=\"rpModel\" (ngModelChange)=\"updateData($event)\" class=\"form-control\">\n            <option *ngFor=\"let item of ref._lov1.status\" value=\"{{item.value}}\" >{{item.caption}}</option>\n        </select>  \n        <select id=\"{{rpId}}\"  *ngIf=\"rpType=='status'&& rpReadonly=='true'\"  [ngModel]=\"rpModel\" (ngModelChange)=\"updateData($event)\" class=\"form-control\"  disabled=\"true\">\n            <option *ngFor=\"let item of ref._lov3.status\" value=\"{{item.value}}\" >{{item.caption}}</option>\n        </select>  \n         <select id=\"{{rpId}}\"  *ngIf=\"rpType=='type'&& rpReadonly!='true'\"  [ngModel]=\"rpModel\" (ngModelChange)=\"updateData($event)\" class=\"form-control\">\n            <option *ngFor=\"let item of ref._lov1.type\" value=\"{{item.value}}\" >{{item.caption}}</option>\n        </select>  \n        <select id=\"{{rpId}}\"  *ngIf=\"rpType=='type'&& rpReadonly=='true'\"  [ngModel]=\"rpModel\" (ngModelChange)=\"updateData($event)\" class=\"form-control\"  disabled=\"true\">\n            <option *ngFor=\"let item of ref._lov1.type\" value=\"{{item.value}}\" >{{item.caption}}</option>\n        </select>  \n         \n        <select id=\"{{rpId}}\"  *ngIf=\"rpType=='ref002'&& rpReadonly!='true'\"  [ngModel]=\"rpModel\" (ngModelChange)=\"updateData($event)\" class=\"form-control\">\n            <option *ngFor=\"let item of ref._lov3.ref002\" value=\"{{item.value}}\" >{{item.caption}}</option>\n        </select>  \n        <select id=\"{{rpId}}\"  *ngIf=\"rpType=='ref002'&& rpReadonly=='true'\"  [ngModel]=\"rpModel\" (ngModelChange)=\"updateData($event)\" class=\"form-control\" disabled=\"true\">\n            <option *ngFor=\"let item of ref._lov3.ref002\" value=\"{{item.value}}\" >{{item.caption}}</option>\n        </select>          \n        \n        <select id=\"{{rpId}}\"  *ngIf=\"rpType=='ref003'&& rpReadonly!='true'\"  [ngModel]=\"rpModel\" (ngModelChange)=\"updateData($event)\" class=\"form-control\">\n            <option *ngFor=\"let item of ref._lov3.ref003\" value=\"{{item.value}}\" >{{item.caption}}</option>\n        </select>\n        <select id=\"{{rpId}}\"  *ngIf=\"rpType=='ref003'&& rpReadonly=='true'\"  [ngModel]=\"rpModel\" (ngModelChange)=\"updateData($event)\" class=\"form-control\"  disabled=\"true\">\n            <option *ngFor=\"let item of ref._lov3.ref003\" value=\"{{item.value}}\" >{{item.caption}}</option>\n        </select>        \n        \n        <select id=\"{{rpId}}\"  *ngIf=\"rpType=='ref004'&& rpReadonly!='true'\"  [ngModel]=\"rpModel\" (ngModelChange)=\"updateData($event)\" class=\"form-control\">\n            <option *ngFor=\"let item of ref._lov3.ref004\" value=\"{{item.value}}\" >{{item.caption}}</option>\n        </select>\n        <select id=\"{{rpId}}\"  *ngIf=\"rpType=='ref004'&& rpReadonly=='true'\"  [ngModel]=\"rpModel\" (ngModelChange)=\"updateData($event)\" class=\"form-control\" disabled=\"true\">\n            <option *ngFor=\"let item of ref._lov3.ref004\" value=\"{{item.value}}\" >{{item.caption}}</option>\n        </select>\n          \n        <select id=\"{{rpId}}\"  *ngIf=\"rpType=='ref005'&& rpReadonly!='true'\"  [ngModel]=\"rpModel\" (ngModelChange)=\"updateData($event)\" class=\"form-control\">\n            <option *ngFor=\"let item of ref._lov3.ref005\" value=\"{{item.value}}\" >{{item.caption}}</option>\n        </select>\n        <select id=\"{{rpId}}\"  *ngIf=\"rpType=='ref005'&& rpReadonly=='true'\"  [ngModel]=\"rpModel\" (ngModelChange)=\"updateData($event)\" class=\"form-control\" disabled=\"true\">\n            <option *ngFor=\"let item of ref._lov3.ref005\" value=\"{{item.value}}\" >{{item.caption}}</option>\n        </select>\n                  \n        <select id=\"{{rpId}}\"  *ngIf=\"rpType=='ref006'&& rpReadonly!='true'\"  [ngModel]=\"rpModel\" (ngModelChange)=\"updateData($event)\" class=\"form-control\">\n            <option *ngFor=\"let item of ref._lov3.ref006\" value=\"{{item.value}}\" >{{item.caption}}</option>\n        </select>\n        <select id=\"{{rpId}}\"  *ngIf=\"rpType=='ref006'&& rpReadonly=='true'\"  [ngModel]=\"rpModel\" (ngModelChange)=\"updateData($event)\" class=\"form-control\" disabled=\"true\">\n            <option *ngFor=\"let item of ref._lov3.ref006\" value=\"{{item.value}}\" >{{item.caption}}</option>\n        </select>\n        \n        <select id=\"{{rpId}}\"  *ngIf=\"rpType=='ref007'&& rpReadonly!='true'\"  [ngModel]=\"rpModel\" (ngModelChange)=\"updateData($event)\" class=\"form-control\">\n            <option *ngFor=\"let item of ref._lov3.ref007\" value=\"{{item.value}}\" >{{item.caption}}</option>\n        </select>  \n        <select id=\"{{rpId}}\"  *ngIf=\"rpType=='ref007'&& rpReadonly=='true'\"  [ngModel]=\"rpModel\" (ngModelChange)=\"updateData($event)\" class=\"form-control\" disabled=\"true\">\n            <option *ngFor=\"let item of ref._lov3.ref007\" value=\"{{item.value}}\" >{{item.caption}}</option>\n        </select>  \n                \n        <select id=\"{{rpId}}\"  *ngIf=\"rpType=='ref008'&& rpReadonly!='true'\"  [ngModel]=\"rpModel\" (ngModelChange)=\"updateData($event)\" class=\"form-control\">\n            <option *ngFor=\"let item of ref._lov3.ref008\" value=\"{{item.value}}\" >{{item.caption}}</option>\n        </select>\n        <select id=\"{{rpId}}\"  *ngIf=\"rpType=='ref008'&& rpReadonly=='true'\"  [ngModel]=\"rpModel\" (ngModelChange)=\"updateData($event)\" class=\"form-control\" disabled=\"true\">\n            <option *ngFor=\"let item of ref._lov3.ref008\" value=\"{{item.value}}\" >{{item.caption}}</option>\n        </select>\n          \n        <select id=\"{{rpId}}\"  *ngIf=\"rpType=='ref009'&& rpReadonly!='true'\"  [ngModel]=\"rpModel\" (ngModelChange)=\"updateData($event)\" class=\"form-control\">\n            <option *ngFor=\"let item of ref._lov3.ref009\" value=\"{{item.value}}\" >{{item.caption}}</option>\n        </select>             \n        <select id=\"{{rpId}}\"  *ngIf=\"rpType=='ref009'&& rpReadonly=='true'\"  [ngModel]=\"rpModel\" (ngModelChange)=\"updateData($event)\" class=\"form-control\" disabled=\"true\">\n            <option *ngFor=\"let item of ref._lov3.ref009\" value=\"{{item.value}}\" >{{item.caption}}</option>\n        </select>\n    </div>\n  </div>\n   "
                    }), 
                    __metadata('design:paramtypes', [rp_references_1.RpReferences, rp_intercom_service_1.RpIntercomService, router_1.Router])
                ], RpInputComponent);
                return RpInputComponent;
            }());
            exports_1("RpInputComponent", RpInputComponent);
        }
    }
});
//# sourceMappingURL=rp-input.component.js.map