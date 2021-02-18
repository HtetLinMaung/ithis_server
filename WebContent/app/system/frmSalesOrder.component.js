System.register(['./../util/rp-client.util', './../framework/rp-intercom.service', "@angular/core", '@angular/router', '../framework/rp-references', '../framework/rp-http.service'], function(exports_1, context_1) {
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
    var rp_client_util_1, rp_intercom_service_1, core_1, router_1, rp_references_1, rp_http_service_1;
    var FrmSalesOrderComponent;
    return {
        setters:[
            function (rp_client_util_1_1) {
                rp_client_util_1 = rp_client_util_1_1;
            },
            function (rp_intercom_service_1_1) {
                rp_intercom_service_1 = rp_intercom_service_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (rp_references_1_1) {
                rp_references_1 = rp_references_1_1;
            },
            function (rp_http_service_1_1) {
                rp_http_service_1 = rp_http_service_1_1;
            }],
        execute: function() {
            FrmSalesOrderComponent = (function () {
                function FrmSalesOrderComponent(ics, ref, http, route) {
                    this.ics = ics;
                    this.ref = ref;
                    this.http = http;
                    this.route = route;
                    //  @Output() ev: any = new EventEmitter();
                    this._obj = this.getHeaderObj();
                    this._tmpHdrObj = this.getDefaultTmpHdr();
                    this._objDtl = [];
                    this._saveflag = "New";
                    this._flag = false;
                    this._util = new rp_client_util_1.ClientUtil();
                    this.salebodyHeight = this.ics._minGridHeight;
                    this._datepickerOpts = this._util.getDatePicker();
                    this._dates = { "docDate": this._util.getCurrentDate(), "requestedDate": this._util.getCurrentDate(), "promisedDate": this._util.getCurrentDate(), "popupDocDate": this._util.getCurrentDate() };
                }
                FrmSalesOrderComponent.prototype.goNewLine = function () {
                    console.log("length is " + this._obj.soDetailList.length);
                    for (var i = 0; i < this._obj.soDetailList.length; i++) {
                        console.log("detail code is [" + i + "] " + this._obj.soDetailList[i].t2 + " detail name is [" + i + "] " + this._obj.soDetailList[i].t3);
                    }
                    var obj = this.getDefaultDetailsObj();
                    obj.n17 = this._obj.n4;
                    this._objDtl.push(obj);
                    this._obj.soDetailList.push(obj);
                    console.log("length is " + this._obj.soDetailList.length);
                    for (var i = 0; i < this._obj.soDetailList.length; i++) {
                        console.log("detail code is [" + i + "] " + this._obj.soDetailList[i].t2 + " detail name is [" + i + "] " + this._obj.soDetailList[i].t3);
                    }
                    //this.checkSingleRate(this._objDtl.length - 1);
                    // this.prepareDefAccountDatas(this._objDtl.length - 1);
                    // this._util.scrollDown('salebody');
                };
                FrmSalesOrderComponent.prototype.getHeaderObj = function () {
                    return {
                        "syskey": "0", "autokey": "0", "createddate": "", "modifieddate": "", "userid": "0", "username": "", "territorycode": "", "salescode": "", "projectcode": "", "ref1": "", "ref2": "", "ref3": "", "ref4": "", "ref5": "", "ref6": "", "saveStatus": 0, "recordStatus": 1, "syncStatus": 0, "syncBatch": "", "transType": 0, "t1": "TBA", "t2": "", "t3": "", "t4": "", "t5": "", "t6": "", "t7": "", "t8": "", "t9": "", "t10": "", "t11": "", "n1": 0, "n2": 0, "n3": 0, "n4": 0.0, "n5": 0.0, "n6": 0.0, "n7": 0.0, "n8": 0.0, "n9": 0.0, "n10": 0.0, "n11": 0, "n12": 0.0, "n13": 0,
                        "n14": 0.0, "n15": 0.0, "n16": "0", "n17": 0, "n18": 0, "n19": 0, "n20": 0, "n21": 0, "n22": 0, "n23": 0, "n24": 0, "n25": 0, "n26": 1, "n27": 0, "n28": 0, "n29": 0, "t12": "", "t13": "", "t14": "", "t15": "", "t16": "", "t17": "", "t18": "", "n30": 0, "userSysKey": "", "n31": 0.0, "n32": 0.0, "n33": 0.0, "n34": 0.0, "n35": 0.0, "n36": 0.0, "n37": 0.0, "n38": 0.0, "n39": 0.0, "n40": 0.0, "n41": 0.0, "n42": 0.0, "n43": 0.0, "n44": 0.0, "n45": 0.0, "n46": 0.0, "n47": 0.0, "t19": "", "t20": "", "t21": "", "t22": "", "t23": "", "t24": "", "t25": "", "t26": "", "t27": "", "t28": "",
                        "t29": "", "t30": "", "t31": "", "t32": "", "t33": "", "n48": 0, "n49": 1, "n50": 0, "n51": 0, "n52": 0, "n53": 0, "n54": 0, "n55": 0, "n56": 0, "n57": 0, "t34": "", "t35": "", "t36": "", "t37": "", "t38": "", "t39": "", "t40": "", "t41": "", "t42": "", "t43": "", "t44": "", "t45": "", "customerCode": "", "customerName": "", "createdtime": "", "modifiedtime": "", "transactionID": "0", "glTransID": "0", "crossJunParent": "", "crossJunChild": "", "soDetailList": [], "transAddrData": { "syskey": 0, "createddate": "", "modifieddate": "", "userid": "", "username": "", "recordStatus": 0, "syncStatus": 0, "syncBatch": "", "t1": "", "t2": "", "t3": "", "t4": "", "t5": "", "t6": "", "t7": "", "t8": "", "t9": "", "t10": "", "t11": "", "t12": "", "t13": "", "t14": "", "t15": "", "t16": "", "n1": "0", "n2": 0, "n3": 0, "n4": "", "userSysKey": 0, "n5": 0, "n6": 0, "n7": 0 }
                    };
                };
                FrmSalesOrderComponent.prototype.getDefaultTmpHdr = function () {
                    return { "currSK": "-1", "subTotal": 0.00, "disPercent": 0, "crossJunChild": "", "crossJunParent": "", "chargetTotal": 0.00 };
                };
                FrmSalesOrderComponent.prototype.getDefaultDetailsObj = function () {
                    return {
                        "syskey": "0", "createddate": "", "modifieddate": "", "userid": "", "username": "", "projectcode": "0", "parentid": "0", "recordStatus": 1, "t1": 0, "t2": "", "t3": "", "t4": "", "t5": "", "t6": "", "n1": "0", "n2": this._obj.n26, "n3": "0", "n5": 0, "n6": 0.0, "n7": "0", "n8": 1, "n11": 0.0, "n12": 0.0, "n13": 0.0, "n14": 0.0, "n15": 1, "n16": 0.0, "n17": 0.0, "n19": 0.0, "n20": 0.0, "n21": 0.0, "n22": 0.0, "n23": 0.0, "n24": "0", "n26": "0", "n27": "0", "n28": "0", "n29": "0", "n30": "0", "n34": 0.0, "n35": "0", "n36": 0, "n37": 0.0, "n38": 0.0, "n40": 0, "n44": 1, "t7": "", "n45": "0", "n46": 1, "t8": "", "n47": 1, "t9": "", "n48": 0.0, "n49": 0.0, "t10": "", "t11": "", "n53": 0.0, "n62": "0", "uomsk": "0", "parenthdrsk": "0", "parenttype": 0, "parentdtlsk": "0", "parentrefno": "",
                        "v6outQty": 0, "retrievedItem": false
                    };
                };
                FrmSalesOrderComponent.prototype.goSave = function (status, type) {
                    var _this = this;
                    var prevStatus = status;
                    this.updateHeaderData();
                    this.updateDetailData();
                    for (var i = 0; i < this._obj.soDetailList.length; i++) {
                        console.log("detail code is [" + i + "] " + this._obj.soDetailList[i].t2 + " detail name is [" + i + "] " + this._obj.soDetailList[i].t3);
                    }
                    // let url: string = this.ics.getApiUrl() + 'saleorder/save';
                    //if (this.isValid()) {
                    var _self = this;
                    var url = this.ics._apiurl + 'saleorder/save';
                    this.http.doPost(url, this._obj).subscribe(function (data) {
                        if (data.message === "SUCCESS") {
                            _this._saveflag = "Pending";
                        }
                        else if (data.message === "EXIST") {
                        }
                        else {
                        }
                    }, function (error) {
                        //this.showMessage(this._util.MSG_TYPE.WARN, 'Saving Fail.');
                    }, function () { });
                    //             execute() {
                    //                // (type == "save") ? _self._obj.saveStatus = 4 : _self._obj.saveStatus = 20;
                    //                // _self._flag = true;
                    //                 _self.http.doPost(url, _self._obj).subscribe(
                    //                     data => {
                    //                         if (data.message == "SUCCESS") {
                    //                             //_self.showMessage(_self._util.MSG_TYPE.INFO, _self._obj.saveStatus == 4 ? 'Saved Successfully' : 'Expired Successfully.');
                    //                             //_self._oldObj.oldLength = data.detailSks.length;
                    //                            // _self._oldObj.oldNetAmt = _self._obj.n5;
                    //                             //_self.updateData(data);
                    //                         } else if (data.message == "ManualRefExist") {
                    //                            // _self._obj.saveStatus = prevStatus;
                    //                            // _self._flag = false;
                    //                             //_self._convertFlag = false;
                    //                             //_self._retrieveQuoDtl = false;
                    //                             //_self.showMessage(_self._util.MSG_TYPE.WARN, 'Manual Ref. Already Exists.');
                    //                         } else {
                    //                            // _self.showMessage(_self._util.MSG_TYPE.WARN, 'Saving Fail.');
                    //                            // _self._obj.saveStatus = prevStatus;
                    //                            // _self._flag = false;
                    //                             //_self._convertFlag = false;
                    //                             //_self._retrieveQuoDtl = false;
                    //                         }
                    //                    },
                    //                     error => {
                    //                         //_self.showMessage(_self._util.MSG_TYPE.WARN, 'Saving Fail.');
                    //                         //_self._obj.saveStatus = prevStatus;
                    //                        // _self._flag = false;
                    //                        // _self._convertFlag = false;
                    //                         //_self._retrieveQuoDtl = false;
                    //                     }
                    //                 );
                    //             }
                    //         };
                    //         // if ((this._obj.n56 == "0" || this._obj.n57 == "0") && this.ref._lov3.sysconfig.ccdeptConfig == 4) {
                    //         //     this._flag = false;
                    //         //     this.ics.sendBean({ t1: "rp-confirm", t2: "Confirmation", t3: this.ref._lov4.requireDeptCC, t4: callback });
                    //         // } else { callback.execute(); }
                    //    // } else {
                    //        // this._flag = false;
                    //        // this._convertFlag = false;
                    //        // this._retrieveQuoDtl = false;
                };
                FrmSalesOrderComponent.prototype.updateHeaderData = function () {
                    this._obj.userid = this.ics._profile.userid;
                    this._obj.username = this.ics._profile.userName;
                    this._obj.userSysKey = this.ics._profile.u12Sk;
                    //this._obj.transType = this._tranType;
                    this._obj.n2 = 0; //cbsk
                    this._obj.t3 = this._util.getDatePickerDate(this._util.getCurrentDate()); //deliver date
                    this._obj.t4 = this._util.getDatePickerDate(this._dates.docDate);
                    this._obj.t5 = this._util.getDatePickerDate(this._dates.requestedDate);
                    this._obj.t6 = this._util.getDatePickerDate(this._dates.promisedDate);
                    //this._obj.t8 = this._util.getCurrencyCode(this.ref._lov3.currencydatas, this._tmpHdrObj.currSK); //curcode
                    this._obj.n49 = +this._obj.n49; //single rate
                    // if (this._obj.n49) {
                    //     this._obj.n11 = this._tax.SK;
                    //     this._obj.n12 = this._tax.taxPercent;
                    //     this._obj.n54 = this._tax.outAccSK;
                    // }
                };
                FrmSalesOrderComponent.prototype.updateDetailData = function () {
                    var _this = this;
                    this._obj.n10 = 0;
                    // this._obj.transDetailsData = [];
                    var _loop_1 = function(i) {
                        if (this_1._objDtl[i].t3.trim() == "" && this_1._objDtl[i].n5 != 2 && this_1._objDtl[i].n5 != 1) {
                            this_1._objDtl.splice(i, 1);
                            i--;
                        }
                        else {
                            //if (this._objDtl[i].retrievedItem) this._objDtl[i].syskey = 0; 
                            this_1._objDtl[i].userid = this_1.ics._profile.userid;
                            this_1._objDtl[i].username = this_1.ics._profile.userName;
                            this_1._objDtl[i].t1 = 1000000 + i;
                            this_1._objDtl[i].t5 = this_1._obj.t8;
                            this_1._objDtl[i].t6 = this_1._obj.t8; //curcode
                            this_1._objDtl[i].n6 = this_1._objDtl[i].n8 * this_1._objDtl[i].n44; //qty
                            this_1._objDtl[i].n16 = this_1._obj.n4;
                            this_1._objDtl[i].n17 = this_1._obj.n4; //currate
                            //this._objDtl[i].n36 = +this._isinc;
                            this_1._objDtl[i].n48 = this_1._objDtl[i].n11 * this_1._objDtl[i].n44; //levelcost=average code*selling unit ratio
                            if (this_1._objDtl[i].n44 != 0) {
                                this_1._objDtl[i].n14 = this_1._objDtl[i].n49 / this_1._objDtl[i].n44;
                                this_1._objDtl[i].n13 = this_1._objDtl[i].n48 / this_1._objDtl[i].n44; //purprice = levelcost/selling unit ratio
                            }
                            this_1._objDtl[i].n40 = this_1._obj.transType;
                            if (!this_1._obj.n49) {
                                this_1._obj.n11 = this_1._objDtl[i].n35;
                                this_1._obj.n12 = this_1._objDtl[i].n37;
                            }
                            if (this_1._objDtl[i].n5 == 2 || this_1._objDtl[i].n5 == 1) {
                                this_1._objDtl[i].t4 = this_1._objDtl[i].t5;
                            }
                            //this._objDtl[i].n38 = ((this._objDtl[i].n34 - this._objDtl[i].n22) - (+(this._isinc) ? this._objDtl[i].n23 : 0)).toFixed(this.ics._decimalPlace);
                            if (this_1._objDtl[i].n1 == 0 && this_1._objDtl[i].n5 == 0) {
                                this_1._objDtl[i].t7 = "*";
                                this_1._objDtl[i].t8 = "*";
                                this_1._objDtl[i].t9 = "*";
                                this_1.ref._lov3.uomdatas.filter(function (x) { return x.syskey == _this._objDtl[i].uomsk; }).map(function (x) { return _this._objDtl[i].t10 = x.t1; });
                            }
                        }
                        out_i_1 = i;
                    };
                    var out_i_1;
                    var this_1 = this;
                    for (var i = 0; i < this._objDtl.length; i++) {
                        _loop_1(i);
                        i = out_i_1;
                    }
                    this._obj.n10 = this._obj.n5 - this._obj.n14;
                    // this._obj.transDetailsData = this._objDtl;
                };
                FrmSalesOrderComponent.prototype.deleteItem = function (i) {
                    this._obj.soDetailList.splice(i, 1);
                    // this._objDtl.splice(i, 1);
                    // if (this._objDtl.length == 0) {
                    //     //this._isinc = 0;
                    //     //this._tmpHdrObj.disPercent = 0.00;
                    // }
                    //this._oldObj.oldLength = this._objDtl.length - 1;
                    //this.calculateTotalDis();
                };
                FrmSalesOrderComponent.prototype.goNew = function () {
                    this._obj = this.getHeaderObj();
                    this._saveflag = "New";
                };
                FrmSalesOrderComponent.prototype.changeUnitDis = function (e) {
                    this._objDtl[e.i].n19 = +e.val; //unitdisc
                    if (this._objDtl[e.i].n49 != 0)
                        this._objDtl[e.i].n53 = +((100 / this._objDtl[e.i].n49) * this._objDtl[e.i].n19).toFixed(this.ics._decimalPlace); //saleprice * unitdis
                    if (this._objDtl[e.i].n53 > 100)
                        this.changeDisPercent({ val: 100, i: e.i }); //disperc
                    this.calculateAmt(this._objDtl, e.i);
                };
                FrmSalesOrderComponent.prototype.changeDisPercent = function (e) {
                    this._objDtl[e.i].n53 = +e.val;
                    if (this._objDtl[e.i].n53 > 100)
                        this._objDtl[e.i].n53 = 100;
                    this._objDtl[e.i].n19 = +(this._objDtl[e.i].n49 * this._objDtl[e.i].n53 / 100).toFixed(this.ics._decimalPlace);
                    this.calculateAmt(this._objDtl, e.i);
                };
                FrmSalesOrderComponent.prototype.calculateTotalAmt = function (detail) {
                    this._tmpHdrObj.subTotal = 0.00;
                    this._tmpHdrObj.chargetTotal = 0.00;
                    this._obj.n14 = 0.00; //taxamt
                    this._obj.n7 = 0.00; //disamt(sum up detail dis)
                    for (var i = 0; i < detail.length; i++) {
                        if (detail[i].n5 != 2)
                            this._tmpHdrObj.subTotal = +((detail[i].n34 + (+this._tmpHdrObj.subTotal)).toFixed(this.ics._decimalPlace));
                        else
                            this._tmpHdrObj.chargetTotal += +(detail[i].n34).toFixed(this.ics._decimalPlace);
                        this._obj.n14 = +(detail[i].n23 + (+this._obj.n14)).toFixed(this.ics._decimalPlace); //taxamt
                    }
                    for (var j = 0; j < detail.length; j++) {
                        detail[j].n21 = (detail[j].n8 * detail[j].n19);
                        if (this._tmpHdrObj.subTotal != 0)
                            detail[j].n22 = detail[j].n5 != 2 ? ((+detail[j].n34 / this._tmpHdrObj.subTotal) * this._obj.n9).toFixed(this.ics._decimalPlace) : 0;
                        detail[j].n20 = (+detail[j].n21) + (+detail[j].n22);
                        this._obj.n7 = (+detail[j].n20) + (+this._obj.n7);
                    }
                    if (this._tmpHdrObj.subTotal != 0)
                        this._tmpHdrObj.disPercent = +((100 / this._tmpHdrObj.subTotal) * this._obj.n9).toFixed(this.ics._decimalPlace); //disamt
                    //this._obj.n9 = +((this._tmpHdrObj.subTotal * this._tmpHdrObj.disPercent) / 100).toFixed(this.ics._decimalPlace);
                    if (this._obj.n49 || (detail[0].n36 == 0 && !this._obj.n49))
                        this._obj.n5 = +((this._tmpHdrObj.subTotal - this._obj.n9) + (+this._obj.n14) + (this._tmpHdrObj.chargetTotal)).toFixed(this.ics._decimalPlace); //n5 is netamt
                    else if (!this._obj.n49 && detail[0].n36 == 1)
                        this._obj.n5 = +((this._tmpHdrObj.subTotal - this._obj.n9) + (this._tmpHdrObj.chargetTotal)).toFixed(this.ics._decimalPlace);
                    //if (!this._retrieveQuoDtl && this._convertFlag) this._objConvertDtl = detail;
                    // else if (this._convertDO && !this._retrieveQuoDtl) this._objConvertDO.stkDetailsData = detail;
                    // else 
                    this._objDtl = detail;
                };
                FrmSalesOrderComponent.prototype.calculateAmt = function (detail, index) {
                    detail[index].n23 = 0.00; //taxamt
                    detail[index].n34 = +((detail[index].n49 * detail[index].n8) - (detail[index].n19 * detail[index].n8)).toFixed(this.ics._decimalPlace);
                    // detail[index].n38 = +((detail[index].n34 - detail[index].n22) - (+(this._isinc) ? detail[index].n23 : 0)).toFixed(this.ics._decimalPlace);
                    if (this._obj.n49)
                        detail[index].n36 = 0;
                    if (+this._obj.n9 > 0) {
                        this.calculateTotalAmt(detail);
                        for (var j = 0; j < detail.length; j++) {
                            var amt = (detail[j].n34 * (+this._tmpHdrObj.disPercent)) / 100;
                            if (+detail[j].n36) {
                                detail[j].n23 = +(((detail[j].n34 - (+amt)) * (+detail[j].n37)) / (100 + detail[j].n37)).toFixed(this.ics._decimalPlace);
                            }
                            else {
                                detail[j].n23 = +(((detail[j].n34 - (+amt)) * (+detail[j].n37)) / 100).toFixed(this.ics._decimalPlace);
                            }
                        }
                    }
                    else {
                        if (+detail[index].n36) {
                            detail[index].n23 = +((detail[index].n34 * (+detail[index].n37)) / (100 + detail[index].n37)).toFixed(this.ics._decimalPlace);
                        }
                        else {
                            detail[index].n23 = +((detail[index].n34 * (+detail[index].n37)) / 100).toFixed(this.ics._decimalPlace);
                        }
                    }
                    detail[index].n23 = +(detail[index].n23).toFixed(this.ics._decimalPlace);
                    this.calculateTotalAmt(detail);
                };
                FrmSalesOrderComponent.prototype.changeTotalDisAmt = function (e) {
                    this._obj.n9 = +e.val.toFixed(this.ics._decimalPlace);
                    if (this._tmpHdrObj.subTotal != 0)
                        this._tmpHdrObj.disPercent = +((100 / this._tmpHdrObj.subTotal) * this._obj.n9).toFixed(this.ics._decimalPlace);
                    if (this._tmpHdrObj.disPercent > 100)
                        this.changeTotalDisPercent({ val: 100 });
                    this.calculateTotalDis();
                };
                FrmSalesOrderComponent.prototype.calculateTotalDis = function () {
                    for (var i = 0; i < this._objDtl.length; i++) {
                        this.calculateAmt(this._objDtl, i);
                    }
                };
                FrmSalesOrderComponent.prototype.changeTotalDisPercent = function (e) {
                    this._tmpHdrObj.disPercent = +e.val.toFixed(this.ics._decimalPlace);
                    if (this._tmpHdrObj.disPercent > 100)
                        this._tmpHdrObj.disPercent = 100;
                    this._obj.n9 = +((this._tmpHdrObj.subTotal * this._tmpHdrObj.disPercent) / 100).toFixed(this.ics._decimalPlace);
                    this.calculateTotalDis();
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Number)
                ], FrmSalesOrderComponent.prototype, "index", void 0);
                FrmSalesOrderComponent = __decorate([
                    core_1.Component({
                        selector: 'frm-salesummary',
                        template: "\n              <div class=\"container col-md-12\" id=\"salesorder\"  >\n    <form class= \"form-horizontal\" >\n        <legend>\n            <div class=\"row\">\n                <div class=\"col-md-12\">\n                    <label>Sale Order</label>\n                   \n                </div>\n            </div>\n        </legend>  \n        <div class=\"cardview\" style=\"margin-bottom:10px;\">\n            <div class=\"row\">  \n                <div class=\"col-md-12 col-sm-12 header-btn\">\n                    <button class=\"btn btn-primary btn-sm wsm\" type=\"button\" >List</button>  \n                    <button class=\"btn btn-primary btn-sm wsm\" id=\"new\" type=\"button\" (click)= \"goNew();\">New</button>      \n                    <button class=\"btn btn-primary btn-sm wsm\" id=\"save\" type=\"button\" (click) = \"goSave(_obj.saveStatus,'save');\">Save</button> \n                     <!--<button class=\"btn btn-primary btn-sm\" type=\"button\"  >Preview</button>\n                    <span>&nbsp;</span>\n                    <button class=\"btn btn-primary btn-sm wsm\" id=\"expire\" type=\"button\" >Expire</button>\n                    <span>&nbsp;</span>\n                    <button class=\"btn btn-primary btn-sm wsm\" id=\"convert\" type=\"button\" >Convert</button> \n                    <button class=\"btn btn-primary btn-sm wsm\" id=\"convertDO\" type=\"button\" >Convert</button>\n                    <button class=\"btn btn-primary btn-sm wsm\" id=\"retrieve\" type=\"button\" >Retrieve</button> \n                    <button class=\"btn btn-primary btn-sm wsm\" type=\"button\" id=\"#recover\" >Recurring</button>                    \n                    <button class=\"btn btn-primary btn-sm wsm\" type=\"button\"  >Void</button>  -->\n                    <span><b style=\"color: blue\">{{_saveflag}}</b></span>                     \n                </div>           \n            </div>\n            <br><br>\n      \n\n            \n                    <div class=\"row\">\n                        <div class=\"col-md-4\">                \n                            <div class=\"form-group\">                        \n                                <label class=\"col-md-5\">Customer Code</label>\n                                <div class=\"col-md-7\">\n                                    <input type=\"text\" name= \"CustomerCode\" class=\"form-control input-sm\" [(ngModel)]=\"_obj.customerCode\" autofocus/>\n                                </div>\n                            </div>\n                            <div class=\"form-group\">\n                                <label class=\"col-md-5\">Second Ref</label> \n                                <div class=\"col-md-7\">\n                                    <input type=\"text\" name= \"SecondRef\" class=\"form-control input-sm\" [(ngModel)]=\"_obj.t2\" autofocus/>\n                                </div>\n                            </div>\n                            \n                        </div>    \n                        <div class=\"col-md-4\">\n                            <div class=\"form-group\">\n                                <label class=\"col-md-5\">Document Date</label>                         \n                                <div class=\"col-md-7\">\n                                <datetime [(ngModel)] = \"_dates.docDate\" [datepicker]=\"_datepickerOpts\" [ngModelOptions]=\"{standalone: true}\"></datetime>\n                                \n                                </div>\n                            </div> \n                            <div class=\"form-group\">\n                                <label class=\"col-md-5\" ><span >Payment</span></label>\n                                <div class=\"col-md-7\">\n                                    <input type = \"text\" class = \"form-control input-sm\" readonly>\n                                </div>\n                            </div>   \n                                                                                                                    \n                        </div>\n                    \n                        <div class=\"col-md-4\">\n                        <div class=\"form-group\">\n                            <label class=\"col-md-5\">Requested Date</label>                         \n                            <div class=\"col-md-7\">\n                            <datetime [(ngModel)] = \"_dates.requestedDate\"  [datepicker]=\"_datepickerOpts\" [ngModelOptions]=\"{standalone: true}\"> </datetime>\n                            </div>\n                        </div> \n                        <div class=\"form-group\">\n                            <label class=\"col-md-5\" >Promised Date</label>\n                            <div class=\"col-md-7\">\n                            <datetime [(ngModel)] = \"_dates.promisedDate\"  [datepicker]=\"_datepickerOpts\" [ngModelOptions]=\"{standalone: true}\"> </datetime>\n                            </div>\n                        </div>   \n                                                                                                                \n                    </div>\n                \n               \n            </div> \n\n            <hr>\n            \n            <div  class=\"salecard salecard-container col-md-12\" style=\"min-width: 400px;\">                    \n                <div class=\"form-group\" style=\"overflow-x:auto;\">\n                    <table class=\"table table-striped table-condensed table-hover tblborder\" style=\"margin-bottom:0px !important;\">\n                        <thead class=\"salehead\">\n                         <tr>\n                                <th><div style=\"width: 25px;\"><span><i class=\"glyphicon glyphicon-plus-sign clickable\" style=\"font-size:17px;\" (click)=\"goNewLine()\"></i></span></div></th> \n                                \n                                <th ><div style = \"width: 110px;\"></div>Code</th>\n                                <th ><div style=\"width: 210px;\">Description</div></th>\n                                <th><div style=\"width: 100px;\">Location</div></th>\n                                <th ><div  style=\"width: 100px;\">Bin</div></th>                                \n                                <th ><div style=\"width: 100px;\">Qty.</div></th>\n                                <th >UOM</th>\n                                <th ><div style=\"width: 100px;\">Price</div></th>\n                                <!--<th ><div style=\"width: 100px;\">Job</div></th>-->\n                                <th ><div style=\"width: 100px;\">Unit Disc.</div></th>\n                                <th><div style=\"width: 100px;\">Disc%</div></th>\n                                <!--<th ><div style=\"width: 100px;\">Tax</div></th> -->\n                               <!-- <th><div style=\"width: 30px;\">Inc.</div></th> -->\n                                <th ><div style=\"width: 100px;\">Tax Amt.</div></th>\n                                <th ><div style=\"width: 90px;\">Amount</div></th>\n                                <th><div style=\"width:40px;\"></div></th>\n                            </tr>\n                        </thead>\n                    </table>\n\n                    <table\tclass=\"table table-striped table-condensed table-hover tblborder\" style=\"margin-bottom: 0px !important;\">\n                        <tbody id=\"salebody\" style=\"overflow-x:hidden;\" [style.height]=\"salebodyHeight\" >  \n                           \n                            <tr *ngFor=\"let stockItem of _obj.soDetailList;let i =index\"> \n                                <td  >\n                                    <div style=\"width: 25px;\"> \n                                        \n                                    </div>\n                                </td>                            \n                                <td >\n                                        <div class=\"input-group\" style=\"width: 110px;\">\n                                        <input type='text'  class=\"form-control input-sm \" [(ngModel)]=\"stockItem.t2\" name= \"code\"/>\n                                        <span class=\"input-group-btn\"><button class=\"btn btn-primary igrid-btn\" type=\"button\"   ><i class=\"glyphicon glyphicon-search\" style=\"top:0px;\"></i></button></span>\n                                    </div>\n                                </td>\n                                <td >\n                                <div style=\"width: 210px;\">\n                                    <input type='text'  class=\"form-control input-sm \"  [(ngModel)]=\"stockItem.t3\" name = \"descirption\"/>\n                                </div>\n                                </td>\n                                \n                                <td >\n                                <div style = \"width: 100px\"> \n                                <input type='text'  class=\"form-control input-sm \" [(ngModel)]=\"stockItem.n2\" name = \"location\"/>\n                                </div>\n                               \n                                <td >\n                                <div style = \"width: 100px\">\n                                <input type='text'  class=\"form-control input-sm \" [(ngModel)]=\"stockItem.n3\" name = \"bin\"/>\n                                </div>\n                                <td >\n                                <div style = \"width: 100px\">\n                                <input type='text'  class=\"form-control input-sm \" name= \"Qty\" [(ngModel)]=\"stockItem.n8\"/>\n                                </div>                                \n                                </td> \n                                <td>\n                                <div style = \"width: 50px\">\n                                <input type='text'  class=\"form-control input-sm \" [(ngModel)]=\"stockItem.uomsk\" name= \"UOM\"/>\n                                </div>\n                                </td>                              \n                                <td >\n                                <div style = \"width: 100px\">\n                                <input type='text'  class=\"form-control input-sm \" [(ngModel)]=\"stockItem.n49\" name=\"Price\"/>\n                                </div>                                \n                                </td>                                \n                                <td >\n                                <div style = \"width: 100px\">\n                                <input type='text'  class=\"form-control input-sm \" [(ngModel)]=\"stockItem.n19\" name=\"UnitDis\" />\n                                </div>\n                                </td>\n                                <td >\n                                <div style = \"width: 100px\">\n                                <input type='text'  class=\"form-control input-sm \" [(ngModel)]=\"stockItem.n53\" name= \"DisPercent\"/>\n                                </div>\n                                </td>\n                                 <td >\n                                    <div style = \"width: 100px\">\n                                    <input type='text'  class=\"form-control input-sm \" [(ngModel)]=\"stockItem.n35\" name= \"TaxAmt\"/>\n                                    </div>\n                                </td>\n                                    <td >\n                                    <div style = \"width: 100px\">\n                                <input type='text'  class=\"form-control input-sm \" name= \"Amount\" [(ngModel)]=\"stockItem.n23\"/>\n                                </div>\n                                </td>\n                                <td style=\"padding-right:0px !important\"><div style=\"width:40px;\"><span class='glyphicon glyphicon-remove-circle clickable'  style=\"font-size: 20px;color: #3b5998;\" (click)=\"deleteItem(i)\"></span></div></td>\n                            </tr> \n                        </tbody>\n                    </table>\n                    \n                </div>\n            </div>\n            <div class=\"row\" >\n                <div class=\"col-md-12 col-sm-12\" style=\"height: 25px;\"> \n                    \n                    &nbsp;<span class=\"pull-right clickable footer-fold\" style=\"margin-bottom:5px;\" ><i style=\"font-size:11px;color:white;\" class=\"glyphicon\" ></i></span>\n                </div>\n                <div class=\"col-md-6 col-sm-6\" >\n                   <div class=\"form-group\"  style=\"margin:0px;\">\n                        <label class=\"col-md-3 col-sm-4\" style=\"padding-left: 0px;\">Discount</label> \n                        <div class=\"col-md-1 col-sm-2\" style=\"padding: 0px;\">\n                            <input type = \"text\" class = \"form-control\" name = \"TotalDiscount\"[(ngModel)]=\"_tmpHdrObj.disPercent\" (ev)=\"changeTotalDisPercent($event)\">\n                        </div>\n                        <div class=\"col-md-1 col-sm-2\">\n                            <label>%</label>\n                        </div>\n                          <div class=\"col-md-5 col-sm-4\" style=\"padding: 0px;\">\n                        <input type = \"text\" class = \"form-control\" [(ngModel)]=\"_obj.n9\" (ev)=\"changeTotalDisAmt($event)\" name =\"dsicountTotal\">\n                        </div>\n                    </div>\n                    <div class=\"form-group\"  style=\"margin:0px;\">\n                        <label class=\"col-md-3 col-sm-4\" style=\"padding-left: 0px;\">Tax</label>  \n                        <div class=\"col-md-7 col-sm-8\" style=\"padding: 0px;\">\n                        <input type = \"text\" class = \"form-control\"  [ngModel]=\"_obj.n14\" name = \"TotalTax\"readonly >\n                        </div>\n                    </div>                    \n                </div>\n                <div class=\"col-md-6 col-sm-6\" >\n                    <div class=\"form-group\"  style=\"margin:0px;\">\n                        <label class=\"col-md-4 col-sm-4\" style=\"padding-left: 0px;\">Sub Total</label>  \n                        <div class=\"col-md-8 col-sm-8\" style=\"padding: 0px;\">\n                        <input type = \"text\" class = \"form-control\" [ngModel]=\"_tmpHdrObj.subTotal\" name = \"subTotal\"readonly>\n                        </div>\n                    </div>\n                    <div class=\"form-group\"  style=\"margin:0px;\">\n                        <label class=\"col-md-4 col-sm-4\" style=\"padding-left: 0px;\">Net Amount</label>  \n                        <div class=\"col-md-8 col-sm-8\" style=\"padding: 0px;\">\n                        <input type = \"text\" class = \"form-control\" [ngModel]=\"_obj.n5\" name = \"NetAmount\" readonly>\n                        </div>\n                    </div>\n                </div>\n            </div>            \n        </div>\n    </form>\n</div>\n              "
                    }), 
                    __metadata('design:paramtypes', [rp_intercom_service_1.RpIntercomService, rp_references_1.RpReferences, rp_http_service_1.RpHttpService, router_1.ActivatedRoute])
                ], FrmSalesOrderComponent);
                return FrmSalesOrderComponent;
            }());
            exports_1("FrmSalesOrderComponent", FrmSalesOrderComponent);
        }
    }
});
//# sourceMappingURL=frmSalesOrder.component.js.map