System.register(["@angular/core", "@angular/router", "../framework/rp-intercom.service", "../framework/rp-http.service", "../util/rp-client.util"], function(exports_1, context_1) {
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
    var core_1, router_1, core_2, rp_intercom_service_1, rp_http_service_1, rp_client_util_1;
    var FrmNursingActivityWorklist;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
                core_2 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (rp_intercom_service_1_1) {
                rp_intercom_service_1 = rp_intercom_service_1_1;
            },
            function (rp_http_service_1_1) {
                rp_http_service_1 = rp_http_service_1_1;
            },
            function (rp_client_util_1_1) {
                rp_client_util_1 = rp_client_util_1_1;
            }],
        execute: function() {
            core_2.enableProdMode();
            FrmNursingActivityWorklist = (function () {
                function FrmNursingActivityWorklist(ics, _router, route, http) {
                    this.ics = ics;
                    this._router = _router;
                    this.route = route;
                    this.http = http;
                    this.$moment = null;
                    this.dummyPatient = "HRN-0000002";
                    this.activities = [];
                    this.isUpdate = false;
                    this.currentSysKey = 0;
                    this.patientId = "R20-000017";
                    this.patientName = "Htet Lin Maung";
                    this.adNos = [{ value: 0, text: "20-A0010" }];
                    this.adNo = 0;
                    this.tabNo = 1;
                    this.perPage = 10;
                    this.perPages = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
                    this.procedures = [];
                    this.procedure = "1";
                    this.date = "";
                    this.dueDateChange = "";
                    this.dueDateRemove = "";
                    this.size = "";
                    this.sizeUnit = "mm";
                    this.site = "";
                    this.siteUnit = "mm";
                    this.marking = "";
                    this.markingUnit = "cm";
                    this.externalLength = "";
                    this.externalLengthUnit = "mm";
                    this.doctorDialog = false;
                    this.deleteDialog = false;
                    this.tableHeaders = [
                        "ID",
                        "Name",
                        "Speciality",
                        "Rank",
                        "Degree",
                        "Phone",
                        "Clinic",
                    ];
                    this.tableListHeaders = [
                        "Procedure",
                        "Date",
                        "Due Date For Change",
                        "Due Date For Remove",
                        "Size",
                        "Site",
                        "Marking",
                        "External Length",
                        "Doctor Name",
                    ];
                    this.start = 0;
                    this.end = this.perPage;
                    this.doctors = [];
                    this.doctorName = "";
                    this.doctorSysKey = 0;
                    this.original = {
                        activities: [],
                        doctors: [],
                    };
                    this.page = 1;
                    this.totalPage = 0;
                    this.filterdPrintData = [];
                    this.headerData = [];
                    this.infoDialog = false;
                    this.patientAge = 0;
                    this.ADDate = "";
                    this.room = "";
                    this.doctor = "";
                    this.speciality = "";
                    this.patientType = "";
                    this._util = new rp_client_util_1.ClientUtil();
                    this._datepickerOpts = this._util.getDatePicker();
                    this.subscription = ics.rpbean$.subscribe(function (x) { });
                    if (!ics.getRole() || ics.getRole() == 0)
                        this._router.navigate(["/login"]);
                }
                FrmNursingActivityWorklist.prototype.initPagination = function () {
                    this.page = 1;
                    this.start = 0;
                    if (this.tabNo === 1) {
                        this.totalPage = Math.ceil(this.original.activities.length / this.perPage);
                        this.end = this.perPage;
                        if (this.original.activities.length < this.perPage) {
                            this.end = this.original.activities.length;
                        }
                    }
                };
                FrmNursingActivityWorklist.prototype.onAdNoChanged = function (event) {
                    var data = this.headerData.find(function (v) { return v.refNo == event.target.value; });
                    this.patientId = data.patientid;
                    this.patientName = data.persontitle + " " + data.personname;
                    this.patientAge = data.age;
                    this.ADDate = data.arriveDate;
                    this.room = data.roomNo;
                    this.doctor = data.doctorName;
                    this.speciality = data.speciality;
                    this.patientType = data.patientType;
                };
                FrmNursingActivityWorklist.prototype.onPerPageChanged = function (event, ref) {
                    this.start = 0;
                    this.page = 1;
                    this.totalPage = Math.ceil(this.original[ref].length / event.target.value);
                    this.end = event.target.value;
                    if (this.original[ref].length < this.perPage) {
                        this.end = this.original[ref].length;
                    }
                    this[ref] = this.original[ref].slice(this.start, this.end);
                };
                FrmNursingActivityWorklist.prototype.getProcedure = function (_a) {
                    var procedure = _a.procedure;
                    var item = this.procedures.find(function (v) { return v.value == procedure.toString(); });
                    if (item) {
                        return item.text;
                    }
                    return "";
                };
                FrmNursingActivityWorklist.prototype.fetchProcedures = function () {
                    var _this = this;
                    this.http
                        .doGet(this.ics._apiurl + "nurse-activity-worklist/procedures")
                        .subscribe(function (data) {
                        _this.procedures = data;
                        console.log(_this.procedures);
                        _this.fetchActivities();
                    }, function (error) { }, function () { });
                };
                FrmNursingActivityWorklist.prototype.fetchActivities = function () {
                    var _this = this;
                    this.http
                        .doGet(this.ics._apiurl + "nurse-activity-worklist/activities")
                        .subscribe(function (data) {
                        _this.original.activities = data.slice();
                        _this.totalPage = Math.ceil(data.length / _this.perPage);
                        _this.end = _this.perPage;
                        if (data.length < _this.perPage) {
                            _this.end = data.length;
                        }
                        _this.activities = data.slice(_this.start, _this.end);
                        console.log(data);
                        console.log(_this.start, _this.end);
                    }, function (error) { }, function () { });
                };
                FrmNursingActivityWorklist.prototype.fetchDoctors = function () {
                    var _this = this;
                    this.initPagination();
                    this.http
                        .doGet(this.ics._apiurl + "nurse-activity-worklist/doctors")
                        .subscribe(function (data) {
                        _this.original.doctors = data.slice();
                        console.log(data);
                    }, function (error) { }, function () { });
                };
                FrmNursingActivityWorklist.prototype.selectDoctor = function (_a) {
                    var syskey = _a.syskey, doctorName = _a.doctorName;
                    this.doctorSysKey = syskey;
                    this.doctorName = doctorName;
                    this.doctorDialog = false;
                };
                FrmNursingActivityWorklist.prototype.previewActivity = function (activity) {
                    this.tabNo = 2;
                    this.procedure = activity.procedure.toString();
                    this.date = new Date(activity.date);
                    this.dueDateChange = new Date(activity.dueDateChange);
                    this.dueDateRemove = new Date(activity.dueDateRemove);
                    this.size = activity.size;
                    this.site = activity.site;
                    this.marking = activity.marking;
                    this.externalLength = activity.externalLength;
                    this.doctorName = activity.doctorName;
                    this.doctorSysKey = activity.doctorId;
                    this.isUpdate = true;
                    this.currentSysKey = activity.syskey;
                    this.siteUnit = activity.siteUnit;
                    this.sizeUnit = activity.sizeUnit;
                    this.markingUnit = activity.markingUnit;
                    this.externalLengthUnit = activity.externalLengthUnit;
                };
                FrmNursingActivityWorklist.prototype.tabClickHandler = function (n) {
                    var tabEle1 = document.getElementById("tab1");
                    var tabEle2 = document.getElementById("tab2");
                    switch (n) {
                        case 1:
                            this.initPagination();
                            tabEle1.style.background = "#3b5998";
                            tabEle2.style.background = "#8C9899";
                            break;
                        default:
                            tabEle2.style.background = "#3b5998";
                            tabEle1.style.background = "#8C9899";
                    }
                    this.tabNo = n;
                    console.log(n);
                };
                FrmNursingActivityWorklist.prototype.browseDoctor = function (flag) {
                    if (flag === void 0) { flag = true; }
                    this.initPagination();
                    var data = this.original.doctors;
                    this.totalPage = Math.ceil(data.length / this.perPage);
                    this.end = this.perPage;
                    if (data.length < this.perPage) {
                        this.end = data.length;
                    }
                    this.doctors = data.slice(this.start, this.end);
                    this.doctorDialog = flag;
                };
                FrmNursingActivityWorklist.prototype.clickNewHandler = function () {
                    this.doctorName = "";
                    this.doctorSysKey = 0;
                    this.procedure = "1";
                    this.date = "";
                    this.dueDateChange = "";
                    this.dueDateRemove = "";
                    this.size = "";
                    this.sizeUnit = "mm";
                    this.site = "";
                    this.siteUnit = "mm";
                    this.marking = "";
                    this.markingUnit = "cm";
                    this.externalLength = "";
                    this.externalLengthUnit = "mm";
                    this.isUpdate = false;
                };
                FrmNursingActivityWorklist.prototype.clickSaveHandler = function () {
                    var _this = this;
                    this.http
                        .doPost(this.ics._apiurl +
                        ("nurse-activity-worklist/" + (!this.isUpdate ? "save" : "update/" + this.currentSysKey)), {
                        pId: 1,
                        RgsNo: 1,
                        userid: "",
                        username: "",
                        doctorSysKey: this.doctorSysKey,
                        procedure: parseInt(this.procedure),
                        date: this.date.toISOString(),
                        dueDateChange: this.dueDateChange.toISOString(),
                        dueDateRemove: this.dueDateRemove.toISOString(),
                        size: parseFloat(this.size || "0"),
                        site: parseFloat(this.site || "0"),
                        marking: parseFloat(this.marking || "0"),
                        externalLength: parseFloat(this.externalLength || "0"),
                        siteUnit: this.siteUnit,
                        sizeUnit: this.sizeUnit,
                        markingUnit: this.markingUnit,
                        externalLengthUnit: this.externalLengthUnit,
                    })
                        .subscribe(function (data) {
                        console.log(data);
                        if (!_this.isUpdate) {
                            _this.currentSysKey = data.syskey;
                        }
                        _this.isUpdate = true;
                        _this.fetchActivities();
                    }, function (error) { }, function () { });
                };
                FrmNursingActivityWorklist.prototype.deleteActivity = function () {
                    var _this = this;
                    if (!this.isUpdate)
                        return;
                    this.deleteDialog = false;
                    this.http
                        .doPost(this.ics._apiurl +
                        ("nurse-activity-worklist/delete/" + this.currentSysKey), { syskey: this.currentSysKey })
                        .subscribe(function (data) {
                        console.log(data);
                        _this.fetchActivities();
                        _this.clickNewHandler();
                    }, function (error) { }, function () { });
                };
                FrmNursingActivityWorklist.prototype.clickDeleteHandler = function () {
                    this.deleteDialog = true;
                };
                FrmNursingActivityWorklist.prototype.clickPrintHandler = function () {
                    var _this = this;
                    this.http
                        .doGet(this.ics._apiurl + "nurse-activity-worklist/get-by-patient/1")
                        .subscribe(function (printData) {
                        console.log(printData);
                        var query1 = [5, 11, 16, 21, 25, 29, 33, 37, 41, 45]
                            .map(function (n) { return ("#export_table tr:nth-child(" + n + ") td:nth-child(1)"); })
                            .join(", ");
                        var query2 = [6, 12, 17, 22, 26, 30, 34, 38, 42, 46]
                            .map(function (n) { return ("#export_table tr:nth-child(" + n + ") td:nth-child(1)"); })
                            .join(", ");
                        var elems = document.querySelectorAll(query2);
                        var proEles = document.querySelectorAll(query1);
                        proEles.forEach(function (p, i) {
                            var tubeName = p.innerHTML.trim();
                            var proRef = _this.procedures.find(function (v) {
                                return v.text.match(new RegExp(tubeName));
                            });
                            if (proRef) {
                                _this.filterdPrintData = printData.filter(function (p) { return p.procedure == proRef.value; });
                                if (_this.filterdPrintData.length) {
                                    elems[i].innerHTML = _this.$moment(_this.filterdPrintData[0].dueDateChange).format("DD/MM/yyyy");
                                }
                            }
                        });
                        console.log(proEles);
                        var jsPDF = window.jspdf.jsPDF;
                        console.log(window);
                        var doc = new jsPDF();
                        doc.autoTable({
                            html: "#export_table",
                            startY: 10,
                            theme: "grid",
                            didDrawCell: function (data) {
                                switch (data.row.index) {
                                    case 4:
                                    case 10:
                                    case 15:
                                    case 20:
                                    case 24:
                                    case 28:
                                    case 32:
                                    case 36:
                                    case 40:
                                    case 44:
                                        var tubeName_1 = data.row.cells[0].text.join(" ");
                                        var proRef_1 = _this.procedures.find(function (v) {
                                            return v.text.match(new RegExp(tubeName_1));
                                        });
                                        if (proRef_1) {
                                            _this.filterdPrintData = printData.filter(function (p) { return p.procedure == proRef_1.value; });
                                        }
                                        _this.filterdPrintData.forEach(function (p, i) {
                                            if (i < 7) {
                                                data.row.cells[i + 1].text[0] = _this.$moment(p.date).format("DD/MM/yyyy");
                                            }
                                        });
                                        break;
                                    case 5:
                                    case 11:
                                    case 16:
                                    case 21:
                                    case 25:
                                    case 29:
                                    case 33:
                                    case 37:
                                    case 41:
                                    case 45:
                                        // Due Date
                                        _this.filterdPrintData.forEach(function (p, i) {
                                            if (i < 7) {
                                                data.row.cells[i + 1].text[0] = _this.$moment(p.dueDateChange).format("DD/MM/yyyy");
                                            }
                                        });
                                        break;
                                    case 34:
                                        _this.filterdPrintData.forEach(function (p, i) {
                                            if (i < 7) {
                                                data.row.cells[i + 1].text[0] =
                                                    p.site + p.siteUnit + " & " + p.size + p.sizeUnit;
                                            }
                                        });
                                        break;
                                    case 17:
                                    case 22:
                                    case 26:
                                    case 30:
                                    case 38:
                                        _this.filterdPrintData.forEach(function (p, i) {
                                            if (i < 7) {
                                                data.row.cells[i + 1].text[0] = p.site + p.siteUnit;
                                            }
                                        });
                                        break;
                                    case 6:
                                    case 12:
                                    case 18:
                                    case 42:
                                    case 46:
                                        _this.filterdPrintData.forEach(function (p, i) {
                                            if (i < 7) {
                                                data.row.cells[i + 1].text[0] = p.size + p.sizeUnit;
                                            }
                                        });
                                        break;
                                    case 47:
                                    case 8:
                                        _this.filterdPrintData.forEach(function (p, i) {
                                            if (i < 7) {
                                                data.row.cells[i + 1].text[0] =
                                                    p.externalLength + p.externalLengthUnit;
                                            }
                                        });
                                        break;
                                    case 7:
                                    case 13:
                                        _this.filterdPrintData.forEach(function (p, i) {
                                            if (i < 7) {
                                                data.row.cells[i + 1].text[0] = p.marking + p.markingUnit;
                                            }
                                        });
                                        break;
                                }
                            },
                            willDrawCell: function (data) {
                                // console.log(data);
                                switch (data.row.index) {
                                    case 0:
                                        doc.setFillColor("#CDC8C8");
                                        doc.setTextColor("#fff");
                                        break;
                                    case 3:
                                    case 9:
                                    case 14:
                                    case 19:
                                    case 23:
                                    case 27:
                                    case 31:
                                    case 35:
                                    case 39:
                                    case 43:
                                    case 48:
                                    case 50:
                                        data.row.height = 1;
                                        doc.setFillColor("#CDC8C8");
                                }
                            },
                            styles: {
                                fontSize: 9,
                                minCellHeight: 1,
                                cellPadding: 1,
                                valign: "middle",
                            },
                        });
                        doc.save("a4.pdf");
                    }, function (error) { }, function () { });
                };
                FrmNursingActivityWorklist.prototype.skipLast = function (ref) {
                    this.page = this.totalPage;
                    this.start = (this.page - 1) * this.perPage;
                    if (this.original[ref].length % this.perPage === 0) {
                        this.end = this.page * this.perPage;
                    }
                    else {
                        this.end = this.start + (this.original[ref].length % this.perPage);
                    }
                    this[ref] = this.original[ref].slice(this.start, this.end);
                    if (this.start === this.end) {
                        this[ref] = this.original[ref].slice(this.start, this.end + 1);
                    }
                };
                FrmNursingActivityWorklist.prototype.skipStart = function (ref) {
                    this.page = 1;
                    this.start = (this.page - 1) * this.perPage;
                    this.end = this.perPage;
                    if (this.original[ref].length < this.perPage) {
                        this.end = this.original[ref].length.length;
                    }
                    this[ref] = this.original[ref].slice(this.start, this.end);
                };
                FrmNursingActivityWorklist.prototype.nextHandler = function (ref) {
                    if (this.page !== this.totalPage) {
                        this.page++;
                        this.end = this.page * this.perPage;
                        this.start = (this.page - 1) * this.perPage;
                    }
                    else {
                        this.start = (this.page - 1) * this.perPage;
                        if (this.original[ref].length % this.perPage === 0) {
                            this.end = this.page * this.perPage;
                        }
                        else {
                            this.end = this.start + (this.original[ref].length % this.perPage);
                        }
                    }
                    this[ref] = this.original[ref].slice(this.start, this.end);
                };
                FrmNursingActivityWorklist.prototype.prevHandler = function (ref) {
                    if (this.page !== 1) {
                        this.page--;
                        this.end = this.page * this.perPage;
                        this.start = (this.page - 1) * this.perPage;
                    }
                    else {
                        this.start = (this.page - 1) * this.perPage;
                        this.end = this.perPage;
                        if (this.original[ref].length < this.perPage) {
                            this.end = this.original[ref].length.length;
                        }
                    }
                    this[ref] = this.original[ref].slice(this.start, this.end);
                };
                FrmNursingActivityWorklist.prototype.fetchPatientInfoById = function (patientId) {
                    var _this = this;
                    this.http
                        .doGet(this.ics._apiurl + "nurse-activity-worklist/patient-info/" + patientId)
                        .subscribe(function (data) {
                        _this.headerData = data;
                        if (data.length) {
                            _this.patientId = data[0].patientid;
                            _this.patientName = data[0].persontitle + " " + data[0].personname;
                            _this.patientAge = data[0].age;
                            _this.ADDate = data[0].arriveDate;
                            _this.room = data[0].roomNo;
                            _this.doctor = data[0].doctorName;
                            _this.speciality = data[0].speciality;
                            _this.patientType = data[0].patientType;
                            _this.adNos = data.map(function (v) { return ({
                                value: v.refNo,
                                text: v.refNo,
                            }); });
                            _this.adNo = data[0].refNo;
                        }
                    }, function (error) { }, function () { });
                };
                FrmNursingActivityWorklist.prototype.viewInfo = function (e) {
                    var dialogEle = document.getElementById("info-dialog");
                    dialogEle.style.left = e.clientX;
                    dialogEle.style.top = e.clientY;
                    dialogEle.style.display = "block";
                };
                FrmNursingActivityWorklist.prototype.closeInfoDialog = function () {
                    var dialogEle = document.getElementById("info-dialog");
                    dialogEle.style.display = "none";
                };
                FrmNursingActivityWorklist.prototype.ngOnInit = function () {
                    this.fetchPatientInfoById(this.dummyPatient);
                    this.$moment = moment;
                    this.fetchProcedures();
                    this.fetchDoctors();
                };
                FrmNursingActivityWorklist.prototype.ngOnDestroy = function () { };
                FrmNursingActivityWorklist = __decorate([
                    core_1.Component({
                        selector: "frm-nursing-activity-worklist",
                        template: "\n    <table id=\"export_table\" style=\"display: none;\">\n      <tr>\n        <td colspan=\"8\">Nurse Activity WorkList</td>\n      </tr>\n      <tr>\n        <th rowspan=\"2\">PROCEDURE</th>\n        <th>Date</th>\n        <th>Date</th>\n        <th>Date</th>\n        <th>Date</th>\n        <th>Date</th>\n        <th>Date</th>\n        <th>Date</th>\n      </tr>\n      <tr>\n        <th>Due Date For Change Remove</th>\n        <th>Due Date For Change Remove</th>\n        <th>Due Date For Change Remove</th>\n        <th>Due Date For Change Remove</th>\n        <th>Due Date For Change Remove</th>\n        <th>Due Date For Change Remove</th>\n        <th>Due Date For Change Remove</th>\n      </tr>\n      <tr>\n        <td colspan=\"8\"></td>\n      </tr>\n\n      <tr>\n        <td rowspan=\"2\">Endotracheal Tube</td>\n        <td></td>\n        <td></td>\n        <td></td>\n        <td></td>\n        <td></td>\n        <td></td>\n        <td></td>\n      </tr>\n      <tr>\n        <td>asd</td>\n        <td></td>\n        <td></td>\n        <td></td>\n        <td></td>\n        <td></td>\n        <td></td>\n      </tr>\n      <tr>\n        <td>Size:</td>\n        <td></td>\n        <td></td>\n        <td></td>\n        <td></td>\n        <td></td>\n        <td></td>\n        <td></td>\n      </tr>\n      <tr>\n        <td>Marking:</td>\n        <td></td>\n        <td></td>\n        <td></td>\n        <td></td>\n        <td></td>\n        <td></td>\n        <td></td>\n      </tr>\n      <tr>\n        <td>External Length:</td>\n        <td></td>\n        <td></td>\n        <td></td>\n        <td></td>\n        <td></td>\n        <td></td>\n        <td></td>\n      </tr>\n      <tr>\n        <td colspan=\"8\"></td>\n      </tr>\n\n      <tr>\n        <td rowspan=\"2\">Tracheostomy Tube</td>\n        <td></td>\n        <td></td>\n        <td></td>\n        <td></td>\n        <td></td>\n        <td></td>\n        <td></td>\n      </tr>\n      <tr>\n        <td></td>\n        <td></td>\n        <td></td>\n        <td></td>\n        <td></td>\n        <td></td>\n        <td></td>\n      </tr>\n      <tr>\n        <td>Size:</td>\n        <td></td>\n        <td></td>\n        <td></td>\n        <td></td>\n        <td></td>\n        <td></td>\n        <td></td>\n      </tr>\n      <tr>\n        <td>Marking:</td>\n        <td></td>\n        <td></td>\n        <td></td>\n        <td></td>\n        <td></td>\n        <td></td>\n        <td></td>\n      </tr>\n      <tr>\n        <td colspan=\"8\"></td>\n      </tr>\n\n      <tr>\n        <td rowspan=\"2\">Chest Tube</td>\n        <td></td>\n        <td></td>\n        <td></td>\n        <td></td>\n        <td></td>\n        <td></td>\n        <td></td>\n      </tr>\n      <tr>\n        <td></td>\n        <td></td>\n        <td></td>\n        <td></td>\n        <td></td>\n        <td></td>\n        <td></td>\n      </tr>\n      <tr>\n        <td>Site:</td>\n        <td></td>\n        <td></td>\n        <td></td>\n        <td></td>\n        <td></td>\n        <td></td>\n        <td></td>\n      </tr>\n      <tr>\n        <td>Size:</td>\n        <td></td>\n        <td></td>\n        <td></td>\n        <td></td>\n        <td></td>\n        <td></td>\n        <td></td>\n      </tr>\n      <tr>\n        <td colspan=\"8\"></td>\n      </tr>\n\n      <tr>\n        <td rowspan=\"2\">Arterial Line</td>\n        <td></td>\n        <td></td>\n        <td></td>\n        <td></td>\n        <td></td>\n        <td></td>\n        <td></td>\n      </tr>\n      <tr>\n        <td></td>\n        <td></td>\n        <td></td>\n        <td></td>\n        <td></td>\n        <td></td>\n        <td></td>\n      </tr>\n      <tr>\n        <td>Site:</td>\n        <td></td>\n        <td></td>\n        <td></td>\n        <td></td>\n        <td></td>\n        <td></td>\n        <td></td>\n      </tr>\n      <tr>\n        <td colspan=\"8\"></td>\n      </tr>\n\n      <tr>\n        <td rowspan=\"2\">Pacing Wire</td>\n        <td></td>\n        <td></td>\n        <td></td>\n        <td></td>\n        <td></td>\n        <td></td>\n        <td></td>\n      </tr>\n      <tr>\n        <td></td>\n        <td></td>\n        <td></td>\n        <td></td>\n        <td></td>\n        <td></td>\n        <td></td>\n      </tr>\n      <tr>\n        <td>Site:</td>\n        <td></td>\n        <td></td>\n        <td></td>\n        <td></td>\n        <td></td>\n        <td></td>\n        <td></td>\n      </tr>\n      <tr>\n        <td colspan=\"8\"></td>\n      </tr>\n\n      <tr>\n        <td rowspan=\"2\">General Venous Catheter</td>\n        <td></td>\n        <td></td>\n        <td></td>\n        <td></td>\n        <td></td>\n        <td></td>\n        <td></td>\n      </tr>\n      <tr>\n        <td></td>\n        <td></td>\n        <td></td>\n        <td></td>\n        <td></td>\n        <td></td>\n        <td></td>\n      </tr>\n      <tr>\n        <td>Site:</td>\n        <td></td>\n        <td></td>\n        <td></td>\n        <td></td>\n        <td></td>\n        <td></td>\n        <td></td>\n      </tr>\n      <tr>\n        <td colspan=\"8\"></td>\n      </tr>\n\n      <tr>\n        <td rowspan=\"2\">Peripheral IV Cannula</td>\n        <td></td>\n        <td></td>\n        <td></td>\n        <td></td>\n        <td></td>\n        <td></td>\n        <td></td>\n      </tr>\n      <tr>\n        <td></td>\n        <td></td>\n        <td></td>\n        <td></td>\n        <td></td>\n        <td></td>\n        <td></td>\n      </tr>\n      <tr>\n        <td>Site & Size:</td>\n        <td></td>\n        <td></td>\n        <td></td>\n        <td></td>\n        <td></td>\n        <td></td>\n        <td></td>\n      </tr>\n      <tr>\n        <td colspan=\"8\"></td>\n      </tr>\n\n      <tr>\n        <td rowspan=\"2\">Vascular Catheter</td>\n        <td></td>\n        <td></td>\n        <td></td>\n        <td></td>\n        <td></td>\n        <td></td>\n        <td></td>\n      </tr>\n      <tr>\n        <td></td>\n        <td></td>\n        <td></td>\n        <td></td>\n        <td></td>\n        <td></td>\n        <td></td>\n      </tr>\n      <tr>\n        <td>Site:</td>\n        <td></td>\n        <td></td>\n        <td></td>\n        <td></td>\n        <td></td>\n        <td></td>\n        <td></td>\n      </tr>\n      <tr>\n        <td colspan=\"8\"></td>\n      </tr>\n\n      <tr>\n        <td rowspan=\"2\">Urinary Catheter</td>\n        <td></td>\n        <td></td>\n        <td></td>\n        <td></td>\n        <td></td>\n        <td></td>\n        <td></td>\n      </tr>\n      <tr>\n        <td></td>\n        <td></td>\n        <td></td>\n        <td></td>\n        <td></td>\n        <td></td>\n        <td></td>\n      </tr>\n      <tr>\n        <td>Size:</td>\n        <td></td>\n        <td></td>\n        <td></td>\n        <td></td>\n        <td></td>\n        <td></td>\n        <td></td>\n      </tr>\n      <tr>\n        <td colspan=\"8\"></td>\n      </tr>\n\n      <tr>\n        <td rowspan=\"2\">Nasogastric Tube</td>\n        <td></td>\n        <td></td>\n        <td></td>\n        <td></td>\n        <td></td>\n        <td></td>\n        <td></td>\n      </tr>\n      <tr>\n        <td></td>\n        <td></td>\n        <td></td>\n        <td></td>\n        <td></td>\n        <td></td>\n        <td></td>\n      </tr>\n      <tr>\n        <td>Size:</td>\n        <td></td>\n        <td></td>\n        <td></td>\n        <td></td>\n        <td></td>\n        <td></td>\n        <td></td>\n      </tr>\n      <tr>\n        <td>Length:</td>\n        <td></td>\n        <td></td>\n        <td></td>\n        <td></td>\n        <td></td>\n        <td></td>\n        <td></td>\n      </tr>\n      <tr>\n        <td colspan=\"8\"></td>\n      </tr>\n\n      <tr>\n        <td>Others:</td>\n        <td></td>\n        <td></td>\n        <td></td>\n        <td></td>\n        <td></td>\n        <td></td>\n        <td></td>\n      </tr>\n      <tr>\n        <td colspan=\"8\"></td>\n      </tr>\n\n      <tr>\n        <td></td>\n        <td></td>\n        <td></td>\n        <td></td>\n        <td></td>\n        <td></td>\n        <td></td>\n        <td></td>\n      </tr>\n      <tr>\n        <td></td>\n        <td></td>\n        <td></td>\n        <td></td>\n        <td></td>\n        <td></td>\n        <td></td>\n        <td></td>\n      </tr>\n      <tr>\n        <td></td>\n        <td></td>\n        <td></td>\n        <td></td>\n        <td></td>\n        <td></td>\n        <td></td>\n        <td></td>\n      </tr>\n    </table>\n\n    <div class=\"dialog__wrapper\" *ngIf=\"deleteDialog\">\n      <div\n        class=\"dialog__content\"\n        style=\"padding: 2rem 5rem; height: auto; border-radius: 10px\"\n      >\n        <h3 style=\"margin-bottom: 4rem;\">Are you sure you want to delete?</h3>\n        <div class=\"flex__row\" style=\"justify-content: flex-end\">\n          <div style=\"padding: 1rem\">\n            <button (click)=\"deleteDialog = false\" class=\"btn btn-primary\">\n              Cancel\n            </button>\n          </div>\n          <div style=\"padding: 1rem\">\n            <button class=\"btn btn-danger\" (click)=\"deleteActivity()\">\n              Delete\n            </button>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"__menu\" id=\"info-dialog\">\n      <div\n        class=\"flex__row\"\n        style=\"background: #446CB3; padding: 0.1rem 1rem; border-radius: 0.5rem 0.5rem 0 0;\"\n      >\n        <div style=\"flex: 1\"></div>\n        <div style=\"text-align: center; color: #fff;flex: 1;\">Information</div>\n        <div style=\"flex: 1\">\n          <div\n            style=\"margin-left: auto; background: #fff;\"\n            class=\"btn__close\"\n            (click)=\"closeInfoDialog()\"\n          >\n            x\n          </div>\n        </div>\n      </div>\n\n      <div class=\"flex__row\">\n        <div style=\"flex-basis: 25%\">Name</div>\n        <div style=\"flex-basis: 75%\">: {{ patientName }}</div>\n      </div>\n\n      <div class=\"flex__row\">\n        <div style=\"flex-basis: 25%\">Age</div>\n        <div style=\"flex-basis: 75%\">: {{ patientAge }} Yrs</div>\n      </div>\n\n      <div class=\"flex__row\">\n        <div style=\"flex-basis: 25%\">AD Date</div>\n        <div style=\"flex-basis: 75%\">: {{ ADDate }}</div>\n      </div>\n\n      <div class=\"flex__row\">\n        <div style=\"flex-basis: 25%\">Room</div>\n        <div style=\"flex-basis: 75%\">: {{ room }}</div>\n      </div>\n\n      <div class=\"flex__row\">\n        <div style=\"flex-basis: 25%\">Doctor</div>\n        <div style=\"flex-basis: 75%\">: {{ doctor }}</div>\n      </div>\n\n      <div class=\"flex__row\">\n        <div style=\"flex-basis: 25%\">Speciality</div>\n        <div style=\"flex-basis: 75%\">: {{ speciality }}</div>\n      </div>\n\n      <div class=\"flex__row\">\n        <div style=\"flex-basis: 25%\">Type</div>\n        <div style=\"flex-basis: 75%\">: {{ patientType }}</div>\n      </div>\n    </div>\n\n    <div class=\"dialog__wrapper\" *ngIf=\"doctorDialog\">\n      <div class=\"dialog__content\">\n        <div class=\"flex__row\">\n          <div\n            class=\"flex__row\"\n            style=\"padding: 1.15rem 0; align-items: center; background: #f8f9f9; flex: 2\"\n          >\n            <div style=\"display: flex; flex-basis: 278px;\">\n              <input type=\"text\" style=\"height: 25px; flex: 9; width: auto\" />\n              <img src=\"image/go.jpg\" style=\"flex: 1; height: 25px;\" />\n            </div>\n\n            <div\n              style=\"display: flex; flex-direction: column; align-items: center; flex-basis: 300px;\"\n            >\n              <img src=\"image/list.png\" style=\"width: 25px; height: 25px\" />\n              <span\n                style=\"color: darkblue; font-size: 12px; cursor: pointer; text-decoration: underline\"\n                >Show all</span\n              >\n            </div>\n\n            <div\n              style=\"display: flex; flex-direction: column; align-items: center; flex-basis: 300px;\"\n            >\n              <img src=\"image/clear.png\" style=\"width: 25px; height: 25px\" />\n              <span\n                style=\"color: darkblue; font-size: 12px; cursor: pointer; text-decoration: underline\"\n                >Clear</span\n              >\n            </div>\n\n            <div\n              style=\"display: flex; flex-direction: column; align-items: center; flex-basis: 300px;\"\n            >\n              <img\n                src=\"image/advSearch.png\"\n                style=\"width: 25px; height: 25px\"\n              />\n              <span\n                style=\"color: darkblue; font-size: 12px; cursor: pointer; text-decoration: underline\"\n                >Advanced Search</span\n              >\n            </div>\n\n            <div\n              style=\"display: flex; flex-direction: column; align-items: center; flex-basis: 300px;\"\n            >\n              <img src=\"image/export.png\" style=\"width: 25px; height: 25px\" />\n              <span\n                style=\"color: darkblue; font-size: 12px; cursor: pointer; text-decoration: underline\"\n                >Export</span\n              >\n            </div>\n          </div>\n          <div class=\"flex__item\">\n            <div\n              class=\"btn__close\"\n              style=\"margin-left: auto\"\n              (click)=\"browseDoctor(false)\"\n            >\n              x\n            </div>\n          </div>\n        </div>\n\n        <div style=\"display: flex; align-items: center\">\n          <div\n            style=\"height: 17px; border: 1px solid #bbb; border-bottom: 1px solid #a0a0a0; border-radius: 7px; padding-left: .7rem; width: 30px; margin: 0 0.5rem;\"\n            (click)=\"skipStart('doctors')\"\n          >\n            <img src=\"image/first.gif\" style=\"width: 20px; height: 15px;\" />\n          </div>\n\n          <div\n            style=\"height: 17px; border: 1px solid #bbb; border-bottom: 1px solid #a0a0a0; border-radius: 7px; padding-left: .7rem; width: 30px; margin: 0 0.5rem;\"\n            (click)=\"prevHandler('doctors')\"\n          >\n            <img src=\"image/prev.gif\" style=\"width: 20px; height: 15px;\" />\n          </div>\n\n          <select\n            style=\"height: 20px; flex-basis: 50px;\"\n            [(ngModel)]=\"perPage\"\n            (change)=\"onPerPageChanged($event, 'doctors')\"\n          >\n            <option *ngFor=\"let item of perPages\" [value]=\"item\">\n              {{ item }}\n            </option>\n          </select>\n\n          <div\n            style=\"height: 17px; border: 1px solid #bbb; border-bottom: 1px solid #a0a0a0; border-radius: 7px; padding-left: .7rem; width: 30px; margin: 0 0.5rem;\"\n            (click)=\"nextHandler('doctors')\"\n          >\n            <img src=\"image/next.gif\" style=\"width: 20px; height: 15px;\" />\n          </div>\n\n          <div\n            style=\"height: 17px; border: 1px solid #bbb; border-bottom: 1px solid #a0a0a0; border-radius: 7px; padding-left: .7rem; width: 30px; margin: 0 0.5rem;\"\n            (click)=\"skipLast('doctors')\"\n          >\n            <img src=\"image/last.gif\" style=\"width: 20px; height: 15px;\" />\n          </div>\n\n          <div class=\"patient__label\">\n            {{ start + 1 }} - {{ end }} of {{ original.doctors.length }}\n          </div>\n        </div>\n\n        <div class=\"flex__row\">\n          <table class=\"flex__item __table\">\n            <thead>\n              <tr>\n                <th *ngFor=\"let header of tableHeaders\">\n                  {{ header }}\n                </th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr *ngFor=\"let doctor of doctors\" (click)=\"selectDoctor(doctor)\">\n                <td style=\"text-decoration: underline\">\n                  {{ doctor.doctorID }}\n                </td>\n                <td style=\"text-decoration: underline\">\n                  {{ doctor.doctorName }}\n                </td>\n                <td>{{ doctor.speciality }}</td>\n                <td>{{ doctor.rank }}</td>\n                <td>{{ doctor.degree }}</td>\n                <td>{{ doctor.phone }}</td>\n                <td>{{ doctor.clinic }}</td>\n              </tr>\n            </tbody>\n          </table>\n        </div>\n      </div>\n    </div>\n\n    <div style=\"width: 100%; padding: 2rem 3rem;\">\n      <div style=\"display: flex; align-items: center; margin-bottom: 1rem;\">\n        <img src=\"image/find1.jpg\" style=\"width: 25px; height: 25px;\" />\n        <div\n          style=\"flex-basis: 100px; padding-left: 7px;\"\n          class=\"patient__label\"\n        >\n          {{ patientId }}\n        </div>\n        <div style=\"flex-basis: 250px;\" class=\"patient__label\">\n          {{ patientName }}\n        </div>\n        <div style=\"flex-basis: 100px; padding-right: 12px;\">AD No.</div>\n        <div style=\"flex-basis: 150px; \">\n          <select\n            class=\"form-control\"\n            style=\"width: 100%\"\n            [(ngModel)]=\"adNo\"\n            (change)=\"onAdNoChanged($event)\"\n          >\n            <option *ngFor=\"let item of adNos\" [value]=\"item.value\">\n              {{ item.text }}\n            </option>\n          </select>\n        </div>\n        <img\n          (click)=\"viewInfo($event)\"\n          src=\"image/info.jpg\"\n          style=\"width: 45px; height: 25px; padding: 0 10px;\"\n        />\n        <div class=\"menu__link\">Clear</div>\n        <div style=\"flex-basis: 135px;\"></div>\n        <div class=\"menu__link\">eMR</div>\n      </div>\n\n      <div style=\"display: flex\">\n        <div\n          class=\"tab__list-item\"\n          style=\"background: #3b5998\"\n          (click)=\"tabClickHandler(1)\"\n          id=\"tab1\"\n        >\n          List\n        </div>\n        <div class=\"tab__list-item\" (click)=\"tabClickHandler(2)\" id=\"tab2\">\n          Nurse Activity\n        </div>\n      </div>\n      <div style=\"display: flex\">\n        <div\n          style=\"flex-basis: 1080px; display: flex; border: 1px solid #92c1f0; padding-bottom: 4rem\"\n        >\n          <div *ngIf=\"tabNo == 2\" style=\"flex: 1;\">\n            <div style=\"display: flex; margin-top: 1rem; margin-bottom: 4rem;\">\n              <button\n                class=\"btn__crud btn btn-primary\"\n                (click)=\"clickNewHandler()\"\n              >\n                New\n              </button>\n              <button\n                class=\"btn__crud btn btn-primary\"\n                (click)=\"clickSaveHandler()\"\n              >\n                Save\n              </button>\n              <button\n                class=\"btn__crud btn btn-danger\"\n                (click)=\"clickDeleteHandler()\"\n              >\n                Delete\n              </button>\n              <button\n                class=\"btn__crud btn btn-primary\"\n                (click)=\"clickPrintHandler()\"\n              >\n                Print\n              </button>\n            </div>\n\n            <div class=\"flex__row\">\n              <div class=\"flex__item\">\n                <div class=\"flex__row\">\n                  <div class=\"flex__item\" style=\"flex: 0 0 30%\">Doctor</div>\n\n                  <div class=\"flex__item flex__row\" style=\"flex: 0 0 30%\">\n                    <input\n                      class=\"form-control\"\n                      [(ngModel)]=\"doctorName\"\n                      style=\"height: 25px; flex: 9; width: auto;\"\n                    />\n                    <img\n                      (click)=\"browseDoctor()\"\n                      src=\"image/advSearch.png\"\n                      style=\"width: 25px; height: 25px; flex: 1;\"\n                    />\n                  </div>\n                </div>\n\n                <div class=\"flex__row\" style=\"align-items: center\">\n                  <div class=\"flex__item\" style=\"flex: 0 0 30%\">Date</div>\n\n                  <div class=\"flex__item\" style=\"flex: 0 0 64.5%;\">\n                    <datetime\n                      class=\"__datepicker\"\n                      [(ngModel)]=\"date\"\n                      [datepicker]=\"_datepickerOpts\"\n                      [ngModelOptions]=\"{ standalone: true }\"\n                    ></datetime>\n                  </div>\n                </div>\n\n                <div class=\"flex__row\">\n                  <div class=\"flex__item\" style=\"flex: 0 0 30%\">Procedure</div>\n\n                  <div class=\"flex__item\" style=\"flex: 0 0 30%\">\n                    <select\n                      class=\"form-control\"\n                      style=\"width: 208.3;\"\n                      [(ngModel)]=\"procedure\"\n                    >\n                      <option\n                        *ngFor=\"let item of procedures\"\n                        [value]=\"item.value\"\n                      >\n                        {{ item.text }}\n                      </option>\n                    </select>\n                  </div>\n                </div>\n              </div>\n\n              <div style=\"flex: 2\">\n                <div class=\"flex__row\" style=\"align-items: center\">\n                  <div class=\"flex__item\">Due Date for Change</div>\n\n                  <div class=\"flex__item\">\n                    <datetime\n                      class=\"__datepicker\"\n                      style=\"width: 208.3;\"\n                      [(ngModel)]=\"dueDateChange\"\n                      [datepicker]=\"_datepickerOpts\"\n                      [ngModelOptions]=\"{ standalone: true }\"\n                    ></datetime>\n                  </div>\n\n                  <div class=\"flex__item\"></div>\n                </div>\n\n                <div class=\"flex__row\" style=\"align-items: center\">\n                  <div class=\"flex__item\">Due Date for Remove</div>\n\n                  <div class=\"flex__item\">\n                    <datetime\n                      class=\"__datepicker\"\n                      style=\"width: 208.3;\"\n                      [(ngModel)]=\"dueDateRemove\"\n                      [datepicker]=\"_datepickerOpts\"\n                      [ngModelOptions]=\"{ standalone: true }\"\n                    ></datetime>\n                  </div>\n\n                  <div class=\"flex__item\"></div>\n                </div>\n\n                <div class=\"flex__row\" style=\"align-items: center\">\n                  <div class=\"flex__item\">Size</div>\n\n                  <div class=\"flex__item\">\n                    <input\n                      class=\"form-control\"\n                      type=\"text\"\n                      style=\"width: 100%; height: 25px\"\n                      [(ngModel)]=\"size\"\n                    />\n                  </div>\n\n                  <div class=\"flex__item\">\n                    <input\n                      class=\"form-control\"\n                      type=\"text\"\n                      style=\"width: 100%;  height: 25px\"\n                      [(ngModel)]=\"sizeUnit\"\n                    />\n                  </div>\n                </div>\n\n                <div class=\"flex__row\" style=\"align-items: center\">\n                  <div class=\"flex__item\">Site</div>\n\n                  <div class=\"flex__item\">\n                    <input\n                      class=\"form-control\"\n                      type=\"text\"\n                      style=\"width: 100%; height: 25px\"\n                      [(ngModel)]=\"site\"\n                    />\n                  </div>\n\n                  <div class=\"flex__item\">\n                    <input\n                      class=\"form-control\"\n                      type=\"text\"\n                      style=\"width: 100%;  height: 25px\"\n                      [(ngModel)]=\"siteUnit\"\n                    />\n                  </div>\n                </div>\n\n                <div class=\"flex__row\" style=\"align-items: center\">\n                  <div class=\"flex__item\">Marking</div>\n\n                  <div class=\"flex__item\">\n                    <input\n                      class=\"form-control\"\n                      type=\"text\"\n                      style=\"width: 100%; height: 25px\"\n                      [(ngModel)]=\"marking\"\n                    />\n                  </div>\n\n                  <div class=\"flex__item\">\n                    <input\n                      class=\"form-control\"\n                      type=\"text\"\n                      style=\"width: 100%; height: 25px\"\n                      [(ngModel)]=\"markingUnit\"\n                    />\n                  </div>\n                </div>\n\n                <div class=\"flex__row\" style=\"align-items: center\">\n                  <div class=\"flex__item\">External Length</div>\n\n                  <div class=\"flex__item\">\n                    <input\n                      class=\"form-control\"\n                      type=\"text\"\n                      style=\"width: 100%; height: 25px\"\n                      [(ngModel)]=\"externalLength\"\n                    />\n                  </div>\n\n                  <div class=\"flex__item\">\n                    <input\n                      class=\"form-control\"\n                      type=\"text\"\n                      style=\"width: 100%;  height: 25px\"\n                      [(ngModel)]=\"externalLengthUnit\"\n                    />\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n\n          <div *ngIf=\"tabNo == 1\" style=\"flex: 1\">\n            <div class=\"flex__row\">\n              <div\n                class=\"flex__row\"\n                style=\"padding: 1.15rem 0; align-items: center; background: #f8f9f9; flex: 2\"\n              >\n                <div style=\"display: flex; flex-basis: 278px;\">\n                  <input type=\"text\" style=\"height: 25px; flex: 9\" />\n                  <img src=\"image/go.jpg\" style=\"flex: 1; height: 25px;\" />\n                </div>\n\n                <div\n                  style=\"display: flex; flex-direction: column; align-items: center; flex-basis: 300px;\"\n                >\n                  <img src=\"image/list.png\" style=\"width: 25px; height: 25px\" />\n                  <span\n                    style=\"color: darkblue; font-size: 12px; cursor: pointer; text-decoration: underline\"\n                    >Show all</span\n                  >\n                </div>\n\n                <div\n                  style=\"display: flex; flex-direction: column; align-items: center; flex-basis: 300px;\"\n                >\n                  <img\n                    src=\"image/clear.png\"\n                    style=\"width: 25px; height: 25px\"\n                  />\n                  <span\n                    style=\"color: darkblue; font-size: 12px; cursor: pointer; text-decoration: underline\"\n                    >Clear</span\n                  >\n                </div>\n\n                <div\n                  style=\"display: flex; flex-direction: column; align-items: center; flex-basis: 300px;\"\n                >\n                  <img\n                    src=\"image/advSearch.png\"\n                    style=\"width: 25px; height: 25px\"\n                  />\n                  <span\n                    style=\"color: darkblue; font-size: 12px; cursor: pointer; text-decoration: underline\"\n                    >Advanced Search</span\n                  >\n                </div>\n\n                <div\n                  style=\"display: flex; flex-direction: column; align-items: center; flex-basis: 300px;\"\n                >\n                  <img\n                    src=\"image/export.png\"\n                    style=\"width: 25px; height: 25px\"\n                  />\n                  <span\n                    style=\"color: darkblue; font-size: 12px; cursor: pointer; text-decoration: underline\"\n                    >Export</span\n                  >\n                </div>\n              </div>\n              <div class=\"flex__item\"></div>\n            </div>\n\n            <div style=\"display: flex; align-items: center\">\n              <div\n                style=\"height: 17px; border: 1px solid #bbb; border-bottom: 1px solid #a0a0a0; border-radius: 7px; padding-left: .7rem; width: 30px; margin: 0 0.5rem;\"\n                (click)=\"skipStart('activities')\"\n              >\n                <img src=\"image/first.gif\" style=\"width: 20px; height: 15px;\" />\n              </div>\n\n              <div\n                style=\"height: 17px; border: 1px solid #bbb; border-bottom: 1px solid #a0a0a0; border-radius: 7px; padding-left: .7rem; width: 30px; margin: 0 0.5rem;\"\n                (click)=\"prevHandler('activities')\"\n              >\n                <img src=\"image/prev.gif\" style=\"width: 20px; height: 15px;\" />\n              </div>\n\n              <select\n                style=\"height: 20px; flex-basis: 50px;\"\n                [(ngModel)]=\"perPage\"\n                (change)=\"onPerPageChanged($event, 'activities')\"\n              >\n                <option *ngFor=\"let item of perPages\" [value]=\"item\">\n                  {{ item }}\n                </option>\n              </select>\n\n              <div\n                style=\"height: 17px; border: 1px solid #bbb; border-bottom: 1px solid #a0a0a0; border-radius: 7px; padding-left: .7rem; width: 30px; margin: 0 0.5rem;\"\n                (click)=\"nextHandler('activities')\"\n              >\n                <img src=\"image/next.gif\" style=\"width: 20px; height: 15px;\" />\n              </div>\n\n              <div\n                style=\"height: 17px; border: 1px solid #bbb; border-bottom: 1px solid #a0a0a0; border-radius: 7px; padding-left: .7rem; width: 30px; margin: 0 0.5rem;\"\n                (click)=\"skipLast('activities')\"\n              >\n                <img src=\"image/last.gif\" style=\"width: 20px; height: 15px;\" />\n              </div>\n\n              <div class=\"patient__label\">\n                {{ start + 1 }} - {{ end }} of {{ original.activities.length }}\n              </div>\n            </div>\n\n            <div class=\"flex__row\">\n              <table class=\"flex__item __table\">\n                <thead>\n                  <tr>\n                    <th *ngFor=\"let header of tableListHeaders\">\n                      {{ header }}\n                    </th>\n                  </tr>\n                </thead>\n                <tbody *ngIf=\"$moment\">\n                  <tr\n                    *ngFor=\"let activity of activities\"\n                    (click)=\"previewActivity(activity)\"\n                  >\n                    <td>\n                      {{ getProcedure(activity) }}\n                    </td>\n                    <td>\n                      {{ $moment(activity.date).format(\"DD/MM/yyyy\") }}\n                    </td>\n                    <td>\n                      {{ $moment(activity.dueDateChange).format(\"DD/MM/yyyy\") }}\n                    </td>\n                    <td>\n                      {{ $moment(activity.dueDateRemove).format(\"DD/MM/yyyy\") }}\n                    </td>\n                    <td>{{ activity.size }}</td>\n                    <td>{{ activity.site }}</td>\n                    <td>{{ activity.marking }}</td>\n                    <td>{{ activity.externalLength }}</td>\n                    <td>{{ activity.doctorName }}</td>\n                  </tr>\n                </tbody>\n              </table>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  ",
                    }), 
                    __metadata('design:paramtypes', [rp_intercom_service_1.RpIntercomService, router_1.Router, router_1.ActivatedRoute, rp_http_service_1.RpHttpService])
                ], FrmNursingActivityWorklist);
                return FrmNursingActivityWorklist;
            }());
            exports_1("FrmNursingActivityWorklist", FrmNursingActivityWorklist);
        }
    }
});
//# sourceMappingURL=frmNursingActivityWorklist.component.js.map