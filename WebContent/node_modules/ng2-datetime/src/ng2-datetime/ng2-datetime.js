"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var NKDatetime = (function () {
    function NKDatetime(ngControl) {
        this.dateChange = new core_1.EventEmitter();
        this.datepickerOptions = {};
        this.hasClearButton = false;
        this.readonly = null;
        this.required = null;
        this.idDatePicker = uniqueId('q-datepicker_');
        this.onChange = function (_) {
        };
        this.onTouched = function () {
        };
        ngControl.valueAccessor = this; // override valueAccessor
    }
    NKDatetime.prototype.ngAfterViewInit = function () {
        this.init();
    };
    NKDatetime.prototype.ngOnDestroy = function () {
        if (this.datepicker) {
            this.datepicker.datepicker('destroy');
        }
    };
    NKDatetime.prototype.ngOnChanges = function (changes) {
        if (changes) {
            if (changes['datepickerOptions'] && this.datepicker) {
                this.datepicker.datepicker('destroy');
                if (changes['datepickerOptions'].currentValue) {
                    this.datepicker = null;
                    this.init();
                }
                else if (changes['datepickerOptions'].currentValue === false) {
                    this.datepicker.remove();
                }
            }
        }
    };
    NKDatetime.prototype.writeValue = function (value) {
        var _this = this;
        this.date = value;
        if (isDate(this.date)) {
            setTimeout(function () {
                _this.updateModel(_this.date);
            }, 0);
        }
        else {
            this.clearModels();
        }
    };
    NKDatetime.prototype.registerOnChange = function (fn) {
        this.onChange = fn;
    };
    NKDatetime.prototype.registerOnTouched = function (fn) {
        this.onTouched = fn;
    };
    NKDatetime.prototype.checkEmptyValue = function (e) {
        var value = e.target.value;
        if (value === '' && (this.datepickerOptions === false ||
            (this.dateModel === ''))) {
            this.dateChange.emit(null);
        }
    };
    NKDatetime.prototype.clearModels = function () {
        this.dateChange.emit(null);
        this.updateDatepicker(null);
    };
    //////////////////////////////////
    NKDatetime.prototype.init = function () {
        var _this = this;
        if (!this.datepicker && this.datepickerOptions !== false) {
            var options = jQuery.extend({ enableOnReadonly: !this.readonly }, this.datepickerOptions);
            this.datepicker = jQuery('#' + this.idDatePicker).datepicker(options);
            this.datepicker
                .on('changeDate', function (e) {
                var newDate = e.date;
                if (isDate(_this.date) && isDate(newDate)) {
                    // get hours/minutes
                    newDate.setHours(_this.date.getHours());
                    newDate.setMinutes(_this.date.getMinutes());
                }
                _this.date = newDate;
                _this.dateChange.emit(newDate);
            });
        }
        else if (this.datepickerOptions === false) {
            jQuery('#' + this.idDatePicker).remove();
        }
        this.updateModel(this.date);
    };
    NKDatetime.prototype.updateModel = function (date) {
        this.updateDatepicker(date);
    };
    NKDatetime.prototype.updateDatepicker = function (date) {
        if (this.datepicker !== undefined) {
            this.datepicker.datepicker('update', date);
        }
    };
    NKDatetime.prototype.pad = function (value) {
        return value.toString().length < 2 ? '0' + value : value.toString();
    };
    return NKDatetime;
}());
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], NKDatetime.prototype, "dateChange", void 0);
__decorate([
    core_1.Input('datepicker'),
    __metadata("design:type", Object)
], NKDatetime.prototype, "datepickerOptions", void 0);
__decorate([
    core_1.Input('hasClearButton'),
    __metadata("design:type", Boolean)
], NKDatetime.prototype, "hasClearButton", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], NKDatetime.prototype, "readonly", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], NKDatetime.prototype, "required", void 0);
__decorate([
    core_1.HostListener('dateChange', ['$event']),
    __metadata("design:type", Object)
], NKDatetime.prototype, "onChange", void 0);
NKDatetime = __decorate([
    core_1.Component({
        selector: 'datetime',
        template: "\n    <div class=\"form-inline\">\n        <div id=\"{{idDatePicker}}\" class=\"input-group date\">\n            <input type=\"text\" class=\"form-control\"\n                   [attr.readonly]=\"readonly\"\n                   [attr.required]=\"required\"\n                   [attr.placeholder]=\"datepickerOptions.placeholder || 'Choose date'\"\n                   [(ngModel)]=\"dateModel\"\n                   (keyup)=\"checkEmptyValue($event)\"/>\n            <div class=\"input-group-addon\" >\n                <span [ngClass]=\"datepickerOptions.icon || 'glyphicon glyphicon-th'\" ></span>\n            </div>\n        </div>\n       </div>\n   "
    }),
    __metadata("design:paramtypes", [forms_1.NgControl])
], NKDatetime);
exports.NKDatetime = NKDatetime;
var id = 0;
function uniqueId(prefix) {
    return prefix + ++id;
}
function isDate(obj) {
    return Object.prototype.toString.call(obj) === '[object Date]';
}
//# sourceMappingURL=ng2-datetime.js.map