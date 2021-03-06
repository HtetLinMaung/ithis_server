
import { Component, EventEmitter, Output, Input } from '@angular/core';
import { RpIntercomService } from '../framework/rp-intercom.service';
import { Router, ActivatedRoute } from '@angular/router';
import { RpHttpService } from '../framework/rp-http.service';
import { RpReferences } from '../framework/rp-references';
import { ClientUtil } from '../util/rp-client.util';
import { Subscription } from 'rxjs/Subscription';
declare var jQuery: any;
declare var pms: any;
@Component({
    selector: 'frm-stock',
    template: 
    `
    <div class="container col-md-12 col-sm-12 col-xs-12" style="padding: 0px 5%;">
        <div class="row clearfix">
            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12  column col-sm-offset-0 col-md-offset-0 col-lg-offset-0"> 
                <form class= "form-horizontal" ngNoForm> 
                    <legend>
                        <div class="row">
                            <div class="col-md-12">
                                Stock
                                <span class='glyphicon glyphicon-remove-circle clickable pull-right'  style="font-size: 19px;color: #3b5998;padding-right: 10px;"></span>
                            </div>    
                        </div>        
                    </legend>
                    <div class="cardview" style="min-height:830;margin-bottom:5px;" >
                    <div>
                        <div>
                            <div class="row  col-md-12"> 
                                <button class="btn btn-primary btn-sm" type="button" (click)="onList()" >List</button>  
                                <button class="btn btn-primary btn-sm" id="new" type="button"  (click)="goNew()">New</button>      
                                <button class="btn btn-primary btn-sm"    id="save" type="button" (click) = "goSave();">Save</button> 
                                <button class="btn btn-danger btn-sm"  id="delete" type="button" >Delete</button> 
                            </div>
                            <div class="row col-md-12 col-sm-12 col-xs-12">&nbsp;</div>
                                <ul class="nav nav-tabs" id="myTab">         
                                    <li *ngFor="let data of _headerMenus;let i = index" [ngClass]="{'active': i == 0}"  ><a data-toggle="tab" href="" id="{{data.id}}" (click)="tabchange($event,i)">{{data.description}}</a></li>          
                                </ul> 
                            <div class="tab-content" id="myTabContent" style="margin-left:auto;margin-bottom:30px;margin-top:5px;"> 
                                 <div id="contentdetails" class="tab-pane"> 
                                    <div class="col-md-12" style="padding: 0px!important;">
                                      <div class="salecard salecard-container fs-card" style="background: white;">
                                        <legend class="legendCaption">Stock Item</legend> 
 
                                <div class="form-group">
                                    <div>
                                        <label class="col-md-2 control-label" style=" text-align: left;">Stock Code</label>
                                    </div>
                                    <div class="col-md-4">
                                        <input [(ngModel)]="_obj.t2" id="code" type="text" class="form-control input-sm" autofocus/>
                                    </div>
                                     <div>
                                        <label class="col-md-2 control-label" style=" text-align: left;">Other Code</label>
                                    </div> 
                                    <div class="col-md-2 col-sm-9">                  
                                       <input [(ngModel)]="_obj.t1" type="text" class="form-control input-sm" autofocus/>
                                    </div>
                                    <!--<div class="col-md-2 col-sm-2">
                                        <button class="btn btn-primary btn-sm" type="button" >Multi Bar Code</button> 
                                    </div>-->
                                </div>      
                                

                                <div class="form-group">
                                    <div>
                                        <label class="col-md-2 control-label" style=" text-align: left;">Description</label>
                                    </div>
                                    <div class="col-md-4">
                                        <input [(ngModel)]="_obj.t3" type="text" class="form-control input-sm" autofocus/>
                                    </div>
                                    <div>
                                        <label class="col-md-2 control-label" style=" text-align: left;">Short Description</label>
                                    </div>
                                    <div class="col-md-4">
                                        <input [(ngModel)]="_obj.t4" type="text"  class="form-control input-sm" autofocus/>
                                    </div>
                                </div>

                               
                               
                                <div class="form-group">
                                    <div>
                                        <label class="col-md-2 control-label" style=" text-align: left;">Model No.</label>
                                    </div>
                                    <div class="col-md-4">
                                        <input [(ngModel)]="_obj.t14" type="text" class="form-control input-sm" autofocus/>
                                    </div>
                                    <!--
                                    <div>
                                        <label class="col-md-2 control-label" style=" text-align: left;">Packing</label>
                                    </div>
                                    <div class="col-md-4">
                                       <select  class="form-control input-sm clickable" >	
                                            <option *ngFor="let data of ref._lov3.packing_datas" [value]="data.code">{{data.description}}</option>	
                                        </select>
                                    </div>-->
                                </div>
                                <!--
                                <div class="form-group">
                                  <div class="col-md-3">
                                        <label><input type="checkbox"  >&nbsp;Use Batch Serial</label>
                                  </div>
                                  <div class="col-md-3">
                                        <label><input type="checkbox" >&nbsp;Use Dimension</label>
                                  </div>                                  
                                </div>
                                -->
                                
                               
                            </div>                        
                      </div>
                        </div>
                        <div id="contentlocation" class="tab-pane"> 
                           <div class="row  col-md-6">    
                                <table  class="table table-striped table-condensed table-hover tblborder">
                                    <thead>
                                        <tr>
                                            <th style="width: 3%;"><span><i class="glyphicon glyphicon-plus-sign clickable"  (click)="goAdd()"  style="font-size:17px;"></i></span></th>
                                            <th style="width:10%;">Code</th>
                                            <th style="width:20%;">Description</th>
                                            <th style="width:10%;">Average Cost</th>
                                            <th style="width:4%;"></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr *ngFor="let obj of _obj.stockWH;let i=index">
                                            <td style="width: 3%;text-align:center;" *ngIf="obj.recordStatus==1">{{i+1}}</td>
                                            <td class="clickable" style="padding-left: 10px;width:10%;" *ngIf="obj.recordStatus==1"><a (click)="readData(obj.n1)">{{getLocationCode(obj.n1)}}</a></td>
                                            <td  style="padding-left: 10px;width:20%;" *ngIf="obj.recordStatus==1">{{getLocationName(obj.n1)}}</td>
                                            <td  style="text-align:right;width:10%;" *ngIf="obj.recordStatus==1">{{_util.formatMoney(obj.n10)}}</td>
                                            <td style="width:4%;" *ngIf="obj.recordStatus==1"><span class='glyphicon glyphicon-remove-circle clickable' (click)="deleteLocation(i)" style="font-size: 20px;color: #3b5998;"></span></td>
                                        </tr>                                            
                                    </tbody>
                                </table>  
                            </div>        
                        </div>
                        </div>
                        </div>
                    </div>
                  </div>
                </form>
            </div>
        </div>
    </div>
    <div id="stocksetup" class="modal fade">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
				    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
				    <h4 class="modal-title">Location/Bin</h4>
			    </div>
            
                <div class="modal-body">
                    <div class="row form-group col-md-12 col-sm-12" >
                        <label class="col-md-2  control-label" style=" text-align: left;" >Location</label> 
                        <div class="col-md-4 col-sm-4">
                            <select [(ngModel)]="_location" class="form-control input-sm clickable">
                                <option value="-1" *ngIf="getWHLength()">All</option>
                                <option *ngFor="let item of (ref._lov3.locdatas)" value="{{item.code}}">{{item.description}}</option><!--| locationfilter: _obj.stockWH:_status-->
                            </select>
                        </div> 
                    </div>
                    <div class="salecard salecard-container" style="background: white;margin-top: 50px;height: 300px;">                    
                        <legend style="margin-top: -5px;font-size: medium;">Bin</legend>                    
                        <table  class="table table-striped table-condensed table-hover tblborder" style="overflow-y: auto;display: inline-block;height: 250px;">
                            <thead>
                                <tr>
                                    <th></th>
                                    <th style="width:40%;">Code</th>
                                    <th style="width:50%;">Description</th>
                                </tr>
                            </thead>
                            <tbody>
                            <tr *ngFor="let obj of _bin_datas; let i = index">
                                <td><input type="checkbox" #i [(ngModel)]="obj.checked"></td>
                                <td class="clickable" style="padding-left: 10px;">{{obj.t1}}</td>
                                <td style="width:300px;">{{obj.description}}</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div class="modal-footer">
                     <button class="btn btn-primary btn-sm" type="button" (click)="goDone()">Done</button>
                </div>
            </div>
        </div>
    </div>
    `,
})

export class FrmStockComponent{
    constructor(private ics: RpIntercomService,private ref: RpReferences, private http: RpHttpService,private route: ActivatedRoute,private router: Router){}
    _obj = this.getDefaultObj();
    _btn_flag = { "_delete": false, "_save": false };
    _headerMenus = [{ 'id': 'details', 'description': 'Details' }, { 'id': 'location', 'description': 'Location' }];
    _util: ClientUtil = new ClientUtil();
    _usemultipleUnit = this.resetUnit();
    _bin_datas = this.ref._lov3.bin_datas;
    _status: string = '-2';
    _location: string;
    sub: any;
    _array = [];
    ngAfterViewInit() {
        jQuery(document).ready(function () {
            jQuery("[id='contentdetails']").fadeIn(500);
        });
    }
    tabchange(event) {
        var id = event.target.id;
        this.menuShowHide(id);
    }

    menuShowHide(id) {
        var self = this;
        var size = this._headerMenus.length;
        jQuery(document).ready(function () {
            for (var i = 0; i < size; i++) {
                if (self._headerMenus[i].id == id) {
                    jQuery("[id='content" + self._headerMenus[i].id + "']").fadeIn(500);
                } else {
                    jQuery("[id='content" + self._headerMenus[i].id + "']").hide();
                }
            }
        });
    }
    goSave() {
        this.prepareObj();
        console.log(this._obj.t1);
        let url: string = this.ics.getApiUrl() + 'StockSetup/save';
        //if (this.isValid()) {
            this.http.doPost(url, this._obj).subscribe(
                data => {
                    if (data.message == "SUCCESS") {
                        this._obj.syskey = data.stocksyskey;
                        this._obj.t2 = data.stockcode;
                        this.updateLocation(data.stockHoldingsyskeyList,data.stockWHsyskeyList);
                        //this.prepareUOM(data.stockUOMJunsyskeyList);
                        this._obj.stockbarcode = data.stockBarcodeList;
                        this._btn_flag._save = false;
                        this._btn_flag._delete = false;    
                        this.showMessage(this._util.MSG_TYPE.INFO, 'Saved Successfully.');
                    } else if (data.message == "ManualRefExist") {
                        this._btn_flag._save = false;
                        this.showMessage(this._util.MSG_TYPE.WARN, 'Manual Ref. Already Exists.');
                    } else if (data.message == "OtherCodeExist") {
                        this._btn_flag._save = false;
                        this.showMessage(this._util.MSG_TYPE.WARN, 'Other Code Already Exists.');
                    } else if(data.message == "duplicateList"){
                        this.showMessage(this._util.MSG_TYPE.WARN, 'Bar Code Already Exists.');
                        this._btn_flag._save = false;
                    } else if(data.message == "FAIL"){
                        this.showMessage(this._util.MSG_TYPE.WARN, 'Saving Fail.');
                        this._btn_flag._save = false;
                    } else {
                        this.showMessage(this._util.MSG_TYPE.WARN, data.message );
                        this._btn_flag._save = false;
                    }
                },
                error => {
                    this._btn_flag._save = false;
                    this.showMessage(this._util.MSG_TYPE.WARN, 'Saving Fail.');
                }
            );
        //}

    }
    prepareObj() {
        this._obj.t7 = this._obj.t6;
        //this._obj.t5 = this._util.getUOMCode(this.ref._lov3.uomdatas, this._obj.n36);
        //this._obj.stockuomjun[0].n2 = this._obj.n36;
        //this._obj.stockuomjun[1].n2 = this._obj.n36;
        this._obj.n40 = +this._obj.n40;
        this._obj.n55 = +this._obj.n55;
        this.ref._lov3.uomdatas.filter((x) => x.syskey == this._obj.n36).map((x) => { this._obj.t11 = x.t4; }); //uom operator
        this._obj.username = this.ics._profile.userName;
        this._obj.userid = this.ics._profile.userid;
        this._obj.userSysKey = this.ics._profile.userSk;
        this._obj.n50 = +this._usemultipleUnit.sellUnit;
        this._obj.n52 = +this._usemultipleUnit.buyUnit;
        this._obj.n42 = +this._obj.n42;
        //this.prepareUOMObj();
        this.prepareLocation();
        this._obj.stockMemo = this._obj.stockMemo.filter((x) => x.t1 != "");
    }
    // isValid() {
    //     this._btn_flag._save = true;
    //     if(this.ref._lov3.sysconfig.isAutoStockCode == "0"){
    //         if (this._obj.t2.trim().length === 0 && this._obj.syskey == "0") {
    //             this._obj.t2 = "TBA";
    //         }
    //         if (this._obj.t2.trim().length === 0 || (this._obj.t2.trim() == "TBA" && this._obj.syskey != "0")) {
    //             this.showMessage(this._util.MSG_TYPE.WARN, 'Invalid Ref.');
    //             return false;
    //         }  
    //     } 
    //     if (this._obj.t3.trim().length == 0) {
    //         this._btn_flag._save = false;
    //         this.showMessage(this._util.MSG_TYPE.WARN, 'Invalid Description.');
    //         return false;
    //     }
    //     return true;
    // }
    getDefaultObj() {
        return { "syskey": "0", "createddate": "", "modifieddate": "", "userid": "", "username": "", "territorycode": "0", "salescode": "0", "projectcode": "0", "ref1": "0", "ref2": "0", "ref3": "0", "ref4": "0", "ref5": "0", "ref6": "0", "recordStatus": 1, "syncStatus": 0, "syncBatch": "", "t1": "", "t2": "TBA", "t3": "", "t4": "", "t5": "", "t6": "", "t7": "", "t8":"","t9":"","t10":"","n1":0,"n2":0,"n3":0,"n4":"0","n5":"0","n6":"0","n7":"0","n8":"0","n9":"0","n10":"0","n11":"0","n12":"0","n13":"0","n14":"0","n15":"0","n16":"0","n17":"0","n18":"0","n19":0.0,"n20":0.0,"n21":0.0,"n22":0.0,"n23":0.0,"n24":0.0,"n25":0.0,"n26":0.0,"n27":0.0,"n28":0.0,"n29":0.0,"n30":0.0,"n31":0,"n32":0,"n33":"0","n34":"0","n35":0.0,"n36":"0","userSysKey":"0","n37":0,"n38":"0","n39":0.0,"t11":"","n40":0,"n41":0,"n42":0,"n43":0,"n44":0,"n45":0,"n46":0,"n47":0.0,"n48":0,"t12":"","t13":"","n49":0,"n50":0,"n51":0,"n52":0,"n53":0,"n54":0,"n55":0,"n56":0,"t14":"","n57":"0","n58":0,"t15":"","n59":0,"n60":0,"n61":0,"n62":0,"n63":0,"n64":0,"n65":0,"n66":0,"t16":"","t17":"","t18":"","t19":"","n67":"","n68":"0","n69":"0","n70":0,"n71":0,"n72":0,"categorycode":"","groupcode":"","stockholding":[],"stockWH":[],"stockuomjun":[],"stockbarcode":[],"stockMemo":[]}
    }
    updateLocation(h,w){
        this._obj.stockholding = this._obj.stockholding.filter(function(e){return (e.recordStatus != 4);});
        this._obj.stockWH = this._obj.stockWH.filter(function(e){return (e.recordStatus != 4);});
        h.forEach((d,i) => { this._obj.stockholding[i].syskey = d; this._obj.stockholding[i].parentid = this._obj.syskey});
        w.forEach((d,i) => { this._obj.stockWH[i].syskey = d; this._obj.stockWH[i].parentid = this._obj.syskey });
    }
    showMessage(t, m) {
        this.ics.sendBean({ t1: "rp-snack", t2: t.type, t3: m });
    }
    resetUnit() {
        return { "sellUnit": 0, "buyUnit": 0 };
    }
    prepareLocation(){
        var _self = this;
        if(this._obj.stockholding.length == 0 && this._obj.stockWH.length == 0){
            this._obj.stockholding.push(this.getDefaultStockHolding());
            this._obj.stockWH.push(this.getDefaultStockWH());
        } 
    }
    
    getDefaultStockHolding(){
        return { "syskey": "0", "createddate": "", "modifieddate": "", "userid":this.ics._profile.userid,  "username":this.ics._profile.userName,"parentid":"","recordStatus":1,"syncStatus":0,"syncBatch":"","n1":"0","n2":"0","n3":0.0,"n4":0,"n5":0,"n6":0,"n7":"","userSysKey":this.ics._profile.userSk};
    }

    getDefaultStockWH(){
        return {"syskey":"0","createddate":"","modifieddate":"","userid":this.ics._profile.userid,"username":this.ics._profile.userName,"parentid":"0","recordStatus":1,"syncStatus":0,"syncBatch":"","n1":"0","n2":"0","n3":"0","n4":"0","n5":"0","n6":"0","n7":"0","n8":"0","n9":"0","n10":0.0,"n11":0.0,"n12":0.0,"n13":0.0,"n14":0.0,"n15":0.0,"n16":0.0,"n17":0.0,"n18":0.0,"n19":0.0,"n20":0,"n21":0,"n22":"","userSysKey":this.ics._profile.userSk} ;
    }
    goAdd() {
        console.log('in add');
        jQuery("#stocksetup").modal('show');
        this.unchecked();
        this._status = '-1';
        this._location = '';
    }
    unchecked() {
        this._bin_datas.filter(function (c) { return c.checked = false });
    }
    goDone() {
        if (this._location != '' && this._status != '-2') {
            if (this._location == '-1') {
                for (let o of this.ref._lov3.locdatas) {
                    this.addLoc(o.code);
                }
            }
            else {
                this.addLoc(this._location);
            }
            jQuery("#stocksetup").modal('hide');
        }
        else {
            this.showMessage(this._util.MSG_TYPE.WARN, 'Select Location');
        }
    }
    addLoc(_location) {
        //add status -1 location ''
        var _self = this;
        var temp: any = [];
        var count = 0;
        var index: number = -1;
        for (var i = 0; i < this._bin_datas.length; i++) {
            if (!this._bin_datas[i].checked) {
                count++;
            }
            temp = this._obj.stockholding.filter(function (e) { return (e.n1 == _location && e.n2 == _self._bin_datas[i].code && e.recordStatus != 4); })
            if (temp.length > 0) { // old record
                if (!this._bin_datas[i].checked) {
                    for (let i = 0; i < this._obj.stockholding.length; i++) {
                        if (this._obj.stockholding[i].n1 == temp[0].n1 && this._obj.stockholding[i].n2 == temp[0].n2 && this._obj.stockholding[i].recordStatus != 4) {
                            index = i;
                            break;
                        }
                    }
                    if (index > -1)
                        this._obj.stockholding[index].recordStatus = 4;
                }
            } else {
                let obj = this.getDefaultStockHolding();
                if (this._bin_datas[i].checked) {
                    obj.n1 = _location;
                    obj.n2 = this._bin_datas[i].code;
                    this._obj.stockholding.push(obj);
                }
            }
        }
        if (count == this._bin_datas.length) {
            let obj = this.getDefaultStockHolding();
            obj.n1 = _location;
            this._obj.stockholding.push(obj);
        }
        let temp_arr: any = [];
        temp_arr = this._obj.stockWH.filter(function (e) { return e.n1 == _location && e.recordStatus != 4; });

        if (temp_arr.length == 0) {
            let temp_obj = this.getDefaultStockWH();
            temp_obj.n1 = _location;
            this._obj.stockWH.push(temp_obj);
        }
    }
    getWHLength() {
        return (this._obj.stockWH.filter((x) => x.recordStatus != 4).length == 0);
    }
    ngOnInit() {
        
        if (this.ics.getRole() > 0) {
            this.sub = this.route.params.subscribe(params => {
                var self = this;
                self.ref.getV6Location(function () {
                    self.ref.getV6BinData(function () {
                        self._bin_datas = self.ref._lov3.bin_datas;
                            /*let id = params['id'];
                                 if (id != null && id != "") {
                                    self.goReadBySyskey(id);
                                 } else {
                                     self.goNew();
                                       self.ref.hideLoading();
                                        }
                                });
                            });*/
                });                
            });
        });
    }
}
readData(p) {
    jQuery("#stocksetup").modal('show');
    this.unchecked();
    this._array = this._obj.stockholding.filter(function (f) { return f.n1 == p; });
    this._location = p;
    this._status = this._location;
    var _self = this;
    var temp_arr : any;
    for (let j = 0; j < this._array.length; j++) {
        temp_arr = _self._bin_datas.filter(function (f) {
            for (var i = j; i < _self._array.length; i++) {
                return (f.code == _self._array[i].n2 && _self._array[i].recordStatus != 4)
            }
        });
        if(temp_arr != undefined && temp_arr != "")
            temp_arr[0].checked = true;
    }
}
getLocationCode(SK) {
    if (SK != '') {
        let arr = this.ref._lov3.locdatas.filter(function (f) { return f.code === SK; })[0];
        return (arr != undefined) ? arr.t1 : "";
    }
}


getLocationName(SK) {
    if (SK != '') {
        let arr = this.ref._lov3.locdatas.filter(function (f) { return f.code === SK; })[0];
        return (arr != undefined) ? arr.description : "";
    }
}
deleteLocation(i) {
    var _self = this;
    var temp_arr: any = [];
    if (this._obj.stockWH[i].syskey != "0") {
        this._obj.stockWH[i].recordStatus = 4;
        temp_arr = this._obj.stockholding.filter(function (x) { return (x.n1 == _self._obj.stockWH[i].n1 && x.syskey != "0" && x.recordStatus != 4); });
        this._obj.stockholding.forEach(h => {
            temp_arr.forEach(element => {
                if (h.n1 == element.n1 && h.recordStatus != 4) {
                    h.recordStatus = 4;
                }
            });
        });
    } else {
        this._obj.stockholding = this._obj.stockholding.filter(function (e) { return (_self._obj.stockWH[i].n1 != e.n1 && e.syskey == "0" && e.recordStatus != "4"); });
        this._obj.stockWH.splice(i, 1);
    }
}
goNew() {
    this._btn_flag._save = false;
    this._btn_flag._delete = true;
    this._obj = this.getDefaultObj();    
}
onList() {
    this.router.navigate(['/stocklist']);
}
        
       
}