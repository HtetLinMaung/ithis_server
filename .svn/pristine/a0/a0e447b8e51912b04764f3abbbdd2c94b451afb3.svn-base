System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var ClientUtil;
    return {
        setters:[],
        execute: function() {
            ClientUtil = (function () {
                function ClientUtil() {
                    this.MSG_TYPE = { INFO: { type: "Information" }, WARN: { type: "Warning" } };
                    this._datepickerOpts = {
                        autoclose: true,
                        todayBtn: false,
                        todayHighlight: true,
                        placeholder: 'dd/mm/yyyy',
                        format: 'dd/mm/yyyy',
                        icon: 'glyphicon glyphicon-calendar',
                        showtime: false
                    };
                }
                ClientUtil.prototype.validateEmail = function (d) {
                    var pattern = /[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}/igm;
                    return pattern.test(d);
                };
                ;
                ClientUtil.prototype.deepCloneArray = function (oldArray) {
                    var renewArray = [];
                    oldArray.forEach(function (item) {
                        renewArray.push(Object.assign({}, item));
                    });
                    return renewArray;
                };
                ClientUtil.prototype.formatMoney = function (n) {
                    return (+n).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,");
                };
                ClientUtil.prototype.addZero = function (i) {
                    return i < 10 ? "0" + i : i + "";
                };
                ClientUtil.prototype.getDatePickerDate = function (dt) {
                    if (dt != null) {
                        var datestring = dt.getFullYear() + this.addZero(dt.getMonth() + 1) + this.addZero(dt.getDate());
                        return datestring;
                    }
                    else {
                        return "";
                    }
                };
                ClientUtil.prototype.getCurrentDate = function () {
                    var d = new Date();
                    return new Date(d.getFullYear(), d.getMonth(), d.getDate(), d.getHours(), d.getMinutes());
                };
                ClientUtil.prototype.getDatePicker = function () {
                    return this._datepickerOpts;
                };
                return ClientUtil;
            }());
            exports_1("ClientUtil", ClientUtil);
        }
    }
});
//# sourceMappingURL=rp-client.util.js.map