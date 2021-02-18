import { ClientUtil } from './../util/rp-client.util';
import { RpIntercomService } from './../framework/rp-intercom.service';


import { Component, Input, Output } from "@angular/core";
import { Route, ActivatedRoute } from '@angular/router';
import { RpReferences } from '../framework/rp-references';
import { RpHttpService } from '../framework/rp-http.service';
import { RendererCallback } from '../util/interfaces';
import { EventEmitter } from 'events';

@Component({
    selector:'frm-salesummary',
    template :
              `
              <div class="container col-md-12" id="salesorder"  >
    <form class= "form-horizontal" >
        <legend>
            <div class="row">
                <div class="col-md-12">
                    <label>Sale Order</label>
                   
                </div>
            </div>
        </legend>  
        <div class="cardview" style="margin-bottom:10px;">
            <div class="row">  
                <div class="col-md-12 col-sm-12 header-btn">
                    <button class="btn btn-primary btn-sm wsm" type="button" >List</button>  
                    <button class="btn btn-primary btn-sm wsm" id="new" type="button" (click)= "goNew();">New</button>      
                    <button class="btn btn-primary btn-sm wsm" id="save" type="button" (click) = "goSave(_obj.saveStatus,'save');">Save</button> 
                     <!--<button class="btn btn-primary btn-sm" type="button"  >Preview</button>
                    <span>&nbsp;</span>
                    <button class="btn btn-primary btn-sm wsm" id="expire" type="button" >Expire</button>
                    <span>&nbsp;</span>
                    <button class="btn btn-primary btn-sm wsm" id="convert" type="button" >Convert</button> 
                    <button class="btn btn-primary btn-sm wsm" id="convertDO" type="button" >Convert</button>
                    <button class="btn btn-primary btn-sm wsm" id="retrieve" type="button" >Retrieve</button> 
                    <button class="btn btn-primary btn-sm wsm" type="button" id="#recover" >Recurring</button>                    
                    <button class="btn btn-primary btn-sm wsm" type="button"  >Void</button>  -->
                    <span><b style="color: blue">{{_saveflag}}</b></span>                     
                </div>           
            </div>
            <br><br>
      

            
                    <div class="row">
                        <div class="col-md-4">                
                            <div class="form-group">                        
                                <label class="col-md-5">Customer Code</label>
                                <div class="col-md-7">
                                    <input type="text" name= "CustomerCode" class="form-control input-sm" [(ngModel)]="_obj.customerCode" autofocus/>
                                </div>
                            </div>
                            <div class="form-group">
                                <label class="col-md-5">Second Ref</label> 
                                <div class="col-md-7">
                                    <input type="text" name= "SecondRef" class="form-control input-sm" [(ngModel)]="_obj.t2" autofocus/>
                                </div>
                            </div>
                            
                        </div>    
                        <div class="col-md-4">
                            <div class="form-group">
                                <label class="col-md-5">Document Date</label>                         
                                <div class="col-md-7">
                                <datetime [(ngModel)] = "_dates.docDate" [datepicker]="_datepickerOpts" [ngModelOptions]="{standalone: true}"></datetime>
                                
                                </div>
                            </div> 
                            <div class="form-group">
                                <label class="col-md-5" ><span >Payment</span></label>
                                <div class="col-md-7">
                                    <input type = "text" class = "form-control input-sm" readonly>
                                </div>
                            </div>   
                                                                                                                    
                        </div>
                    
                        <div class="col-md-4">
                        <div class="form-group">
                            <label class="col-md-5">Requested Date</label>                         
                            <div class="col-md-7">
                            <datetime [(ngModel)] = "_dates.requestedDate"  [datepicker]="_datepickerOpts" [ngModelOptions]="{standalone: true}"> </datetime>
                            </div>
                        </div> 
                        <div class="form-group">
                            <label class="col-md-5" >Promised Date</label>
                            <div class="col-md-7">
                            <datetime [(ngModel)] = "_dates.promisedDate"  [datepicker]="_datepickerOpts" [ngModelOptions]="{standalone: true}"> </datetime>
                            </div>
                        </div>   
                                                                                                                
                    </div>
                
               
            </div> 

            <hr>
            
            <div  class="salecard salecard-container col-md-12" style="min-width: 400px;">                    
                <div class="form-group" style="overflow-x:auto;">
                    <table class="table table-striped table-condensed table-hover tblborder" style="margin-bottom:0px !important;">
                        <thead class="salehead">
                         <tr>
                                <th><div style="width: 25px;"><span><i class="glyphicon glyphicon-plus-sign clickable" style="font-size:17px;" (click)="goNewLine()"></i></span></div></th> 
                                
                                <th ><div style = "width: 110px;"></div>Code</th>
                                <th ><div style="width: 210px;">Description</div></th>
                                <th><div style="width: 100px;">Location</div></th>
                                <th ><div  style="width: 100px;">Bin</div></th>                                
                                <th ><div style="width: 100px;">Qty.</div></th>
                                <th >UOM</th>
                                <th ><div style="width: 100px;">Price</div></th>
                                <!--<th ><div style="width: 100px;">Job</div></th>-->
                                <th ><div style="width: 100px;">Unit Disc.</div></th>
                                <th><div style="width: 100px;">Disc%</div></th>
                                <!--<th ><div style="width: 100px;">Tax</div></th> -->
                               <!-- <th><div style="width: 30px;">Inc.</div></th> -->
                                <th ><div style="width: 100px;">Tax Amt.</div></th>
                                <th ><div style="width: 90px;">Amount</div></th>
                                <th><div style="width:40px;"></div></th>
                            </tr>
                        </thead>
                    </table>

                    <table	class="table table-striped table-condensed table-hover tblborder" style="margin-bottom: 0px !important;">
                        <tbody id="salebody" style="overflow-x:hidden;" [style.height]="salebodyHeight" >  
                           
                            <tr *ngFor="let stockItem of _obj.soDetailList;let i =index"> 
                                <td  >
                                    <div style="width: 25px;"> 
                                        
                                    </div>
                                </td>                            
                                <td >
                                        <div class="input-group" style="width: 110px;">
                                        <input type='text'  class="form-control input-sm " [(ngModel)]="stockItem.t2" name= "code"/>
                                        <span class="input-group-btn"><button class="btn btn-primary igrid-btn" type="button"   ><i class="glyphicon glyphicon-search" style="top:0px;"></i></button></span>
                                    </div>
                                </td>
                                <td >
                                <div style="width: 210px;">
                                    <input type='text'  class="form-control input-sm "  [(ngModel)]="stockItem.t3" name = "descirption"/>
                                </div>
                                </td>
                                
                                <td >
                                <div style = "width: 100px"> 
                                <input type='text'  class="form-control input-sm " [(ngModel)]="stockItem.n2" name = "location"/>
                                </div>
                               
                                <td >
                                <div style = "width: 100px">
                                <input type='text'  class="form-control input-sm " [(ngModel)]="stockItem.n3" name = "bin"/>
                                </div>
                                <td >
                                <div style = "width: 100px">
                                <input type='text'  class="form-control input-sm " name= "Qty" [(ngModel)]="stockItem.n8"/>
                                </div>                                
                                </td> 
                                <td>
                                <div style = "width: 50px">
                                <input type='text'  class="form-control input-sm " [(ngModel)]="stockItem.uomsk" name= "UOM"/>
                                </div>
                                </td>                              
                                <td >
                                <div style = "width: 100px">
                                <input type='text'  class="form-control input-sm " [(ngModel)]="stockItem.n49" name="Price"/>
                                </div>                                
                                </td>                                
                                <td >
                                <div style = "width: 100px">
                                <input type='text'  class="form-control input-sm " [(ngModel)]="stockItem.n19" name="UnitDis" />
                                </div>
                                </td>
                                <td >
                                <div style = "width: 100px">
                                <input type='text'  class="form-control input-sm " [(ngModel)]="stockItem.n53" name= "DisPercent"/>
                                </div>
                                </td>
                                 <td >
                                    <div style = "width: 100px">
                                    <input type='text'  class="form-control input-sm " [(ngModel)]="stockItem.n35" name= "TaxAmt"/>
                                    </div>
                                </td>
                                    <td >
                                    <div style = "width: 100px">
                                <input type='text'  class="form-control input-sm " name= "Amount" [(ngModel)]="stockItem.n23"/>
                                </div>
                                </td>
                                <td style="padding-right:0px !important"><div style="width:40px;"><span class='glyphicon glyphicon-remove-circle clickable'  style="font-size: 20px;color: #3b5998;" (click)="deleteItem(i)"></span></div></td>
                            </tr> 
                        </tbody>
                    </table>
                    
                </div>
            </div>
            <div class="row" >
                <div class="col-md-12 col-sm-12" style="height: 25px;"> 
                    
                    &nbsp;<span class="pull-right clickable footer-fold" style="margin-bottom:5px;" ><i style="font-size:11px;color:white;" class="glyphicon" ></i></span>
                </div>
                <div class="col-md-6 col-sm-6" >
                   <div class="form-group"  style="margin:0px;">
                        <label class="col-md-3 col-sm-4" style="padding-left: 0px;">Discount</label> 
                        <div class="col-md-1 col-sm-2" style="padding: 0px;">
                            <input type = "text" class = "form-control" name = "TotalDiscount"[(ngModel)]="_tmpHdrObj.disPercent" (ev)="changeTotalDisPercent($event)">
                        </div>
                        <div class="col-md-1 col-sm-2">
                            <label>%</label>
                        </div>
                          <div class="col-md-5 col-sm-4" style="padding: 0px;">
                        <input type = "text" class = "form-control" [(ngModel)]="_obj.n9" (ev)="changeTotalDisAmt($event)" name ="dsicountTotal">
                        </div>
                    </div>
                    <div class="form-group"  style="margin:0px;">
                        <label class="col-md-3 col-sm-4" style="padding-left: 0px;">Tax</label>  
                        <div class="col-md-7 col-sm-8" style="padding: 0px;">
                        <input type = "text" class = "form-control"  [ngModel]="_obj.n14" name = "TotalTax"readonly >
                        </div>
                    </div>                    
                </div>
                <div class="col-md-6 col-sm-6" >
                    <div class="form-group"  style="margin:0px;">
                        <label class="col-md-4 col-sm-4" style="padding-left: 0px;">Sub Total</label>  
                        <div class="col-md-8 col-sm-8" style="padding: 0px;">
                        <input type = "text" class = "form-control" [ngModel]="_tmpHdrObj.subTotal" name = "subTotal"readonly>
                        </div>
                    </div>
                    <div class="form-group"  style="margin:0px;">
                        <label class="col-md-4 col-sm-4" style="padding-left: 0px;">Net Amount</label>  
                        <div class="col-md-8 col-sm-8" style="padding: 0px;">
                        <input type = "text" class = "form-control" [ngModel]="_obj.n5" name = "NetAmount" readonly>
                        </div>
                    </div>
                </div>
            </div>            
        </div>
    </form>
</div>
              `
   })
   export class FrmSalesOrderComponent {
    @Input() index : number;
  //  @Output() ev: any = new EventEmitter();
    _obj = this.getHeaderObj();
    _tmpHdrObj = this.getDefaultTmpHdr();
    _objDtl = [];
    _saveflag = "New";
    _flag = false;
    _util: ClientUtil = new ClientUtil();
    salebodyHeight = this.ics._minGridHeight;
    _datepickerOpts: any = this._util.getDatePicker();
    _dates = { "docDate": this._util.getCurrentDate(), "requestedDate": this._util.getCurrentDate(), "promisedDate": this._util.getCurrentDate(), "popupDocDate": this._util.getCurrentDate() };
        
    constructor(private ics: RpIntercomService, private ref: RpReferences, private http: RpHttpService,private route: ActivatedRoute) {}
    
    goNewLine() {
        console.log("length is "+this._obj.soDetailList.length);
        for(let i = 0 ; i < this._obj.soDetailList.length; i++){
            console.log("detail code is ["+i+"] "+this._obj.soDetailList[i].t2+" detail name is ["+i+"] "+this._obj.soDetailList[i].t3);
        }

            let obj = this.getDefaultDetailsObj();
            obj.n17 = this._obj.n4;
           this._objDtl.push(obj);
            this._obj.soDetailList.push(obj);
            console.log("length is "+this._obj.soDetailList.length);
            for(let i = 0 ; i < this._obj.soDetailList.length; i++){
                console.log("detail code is ["+i+"] "+this._obj.soDetailList[i].t2+" detail name is ["+i+"] "+this._obj.soDetailList[i].t3);
            }
            //this.checkSingleRate(this._objDtl.length - 1);
           // this.prepareDefAccountDatas(this._objDtl.length - 1);
           // this._util.scrollDown('salebody');
        
    }
    

    getHeaderObj() {
        return {
            "syskey": "0", "autokey": "0", "createddate": "", "modifieddate": "", "userid": "0", "username": "", "territorycode": "", "salescode": "", "projectcode": "", "ref1": "", "ref2": "", "ref3": "", "ref4": "", "ref5": "", "ref6": "", "saveStatus": 0, "recordStatus": 1, "syncStatus": 0, "syncBatch": "", "transType": 0, "t1": "TBA", "t2": "", "t3": "", "t4": "", "t5": "", "t6": "", "t7": "", "t8": "", "t9": "", "t10": "", "t11": "", "n1": 0, "n2": 0, "n3": 0, "n4": 0.0, "n5": 0.0, "n6": 0.0, "n7": 0.0, "n8": 0.0, "n9": 0.0, "n10": 0.0, "n11": 0, "n12": 0.0, "n13": 0,
            "n14": 0.0, "n15": 0.0, "n16": "0", "n17": 0, "n18": 0, "n19": 0, "n20": 0, "n21":0, "n22": 0, "n23": 0, "n24": 0, "n25": 0 ,"n26": 1, "n27":0, "n28": 0, "n29": 0, "t12": "", "t13": "", "t14": "", "t15": "", "t16": "", "t17": "", "t18": "", "n30": 0, "userSysKey": "", "n31": 0.0, "n32": 0.0, "n33": 0.0, "n34": 0.0, "n35": 0.0, "n36": 0.0, "n37": 0.0, "n38": 0.0, "n39": 0.0, "n40": 0.0, "n41": 0.0, "n42": 0.0, "n43": 0.0, "n44": 0.0, "n45": 0.0, "n46": 0.0, "n47": 0.0, "t19": "", "t20": "", "t21": "", "t22": "", "t23": "", "t24": "", "t25": "", "t26": "", "t27": "", "t28": "",
            "t29": "", "t30": "", "t31": "", "t32": "", "t33": "", "n48": 0, "n49": 1, "n50": 0, "n51": 0, "n52": 0, "n53": 0, "n54": 0, "n55": 0, "n56": 0, "n57": 0, "t34": "", "t35": "", "t36": "", "t37": "", "t38": "", "t39": "", "t40": "", "t41": "", "t42": "", "t43": "", "t44": "", "t45": "", "customerCode": "", "customerName": "", "createdtime": "", "modifiedtime": "", "transactionID": "0", "glTransID": "0", "crossJunParent": "", "crossJunChild": "", "soDetailList":[],"transAddrData": { "syskey": 0, "createddate": "", "modifieddate": "", "userid": "", "username": "", "recordStatus": 0, "syncStatus": 0, "syncBatch": "", "t1": "", "t2": "", "t3": "", "t4": "", "t5": "", "t6": "", "t7": "", "t8": "", "t9": "", "t10": "", "t11": "", "t12": "", "t13": "", "t14": "", "t15": "", "t16": "", "n1": "0", "n2": 0, "n3": 0, "n4": "", "userSysKey": 0, "n5": 0, "n6": 0, "n7": 0 }
        }
    }

    getDefaultTmpHdr() {
        return { "currSK": "-1", "subTotal": 0.00, "disPercent": 0, "crossJunChild": "", "crossJunParent": "", "chargetTotal": 0.00 };
    }

    getDefaultDetailsObj() {
        return {
            "syskey": "0", "createddate": "", "modifieddate": "", "userid": "", "username": "", "projectcode": "0", "parentid": "0", "recordStatus": 1, "t1": 0, "t2": "", "t3": "", "t4": "", "t5": "", "t6": "", "n1": "0", "n2": this._obj.n26 , "n3": "0", "n5": 0, "n6": 0.0, "n7": "0", "n8": 1, "n11": 0.0, "n12": 0.0, "n13": 0.0, "n14": 0.0, "n15": 1, "n16": 0.0, "n17": 0.0, "n19": 0.0, "n20": 0.0, "n21": 0.0, "n22": 0.0, "n23": 0.0, "n24": "0", "n26": "0", "n27": "0", "n28": "0", "n29": "0", "n30": "0", "n34": 0.0, "n35": "0", "n36": 0, "n37": 0.0, "n38": 0.0, "n40": 0, "n44": 1, "t7": "", "n45": "0", "n46": 1, "t8": "", "n47": 1, "t9": "", "n48": 0.0, "n49": 0.0, "t10": "", "t11": "", "n53": 0.0, "n62": "0", "uomsk": "0", "parenthdrsk": "0", "parenttype": 0, "parentdtlsk": "0", "parentrefno": "",
            "v6outQty": 0, "retrievedItem": false
        };
    }

    goSave(status, type) {
        let prevStatus = status;
        this.updateHeaderData();
        this.updateDetailData();
        for(let i = 0 ; i < this._obj.soDetailList.length; i++){
            console.log("detail code is ["+i+"] "+this._obj.soDetailList[i].t2+" detail name is ["+i+"] "+this._obj.soDetailList[i].t3);
        }
      // let url: string = this.ics.getApiUrl() + 'saleorder/save';
        //if (this.isValid()) {
            let _self = this;
            let url: string = this.ics._apiurl + 'saleorder/save';
            
            this.http.doPost(url, this._obj).subscribe(
                data => {
                  if (data.message === "SUCCESS") {
                      this._saveflag = "Pending";

                    //this.showMessage(this._util.MSG_TYPE.INFO, 'Saved Successfully.');
                    //this.goNew();
                  } else if (data.message === "EXIST") {
                    //this.showMessage(this._util.MSG_TYPE.WARN, 'Code Already Exists.');
                  } else {
                    //this.showMessage(this._util.MSG_TYPE.WARN, 'Saving Fail.');
                  }
                },
                error => {
                  //this.showMessage(this._util.MSG_TYPE.WARN, 'Saving Fail.');
                },
                () => { }
              );       
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
        
    }

    updateHeaderData() {
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
    }

    updateDetailData() {
        this._obj.n10 = 0;
       // this._obj.transDetailsData = [];
        for (let i = 0; i < this._objDtl.length; i++) {
            if (this._objDtl[i].t3.trim() == "" && this._objDtl[i].n5 != 2 && this._objDtl[i].n5 != 1) { this._objDtl.splice(i, 1); i--; }
            else {
                //if (this._objDtl[i].retrievedItem) this._objDtl[i].syskey = 0; 
                this._objDtl[i].userid = this.ics._profile.userid;
                this._objDtl[i].username = this.ics._profile.userName;
                this._objDtl[i].t1 = 1000000 + i;
                this._objDtl[i].t5 = this._obj.t8;
                this._objDtl[i].t6 = this._obj.t8; //curcode
                this._objDtl[i].n6 = this._objDtl[i].n8 * this._objDtl[i].n44; //qty
                this._objDtl[i].n16 = this._obj.n4;
                this._objDtl[i].n17 = this._obj.n4;  //currate
                //this._objDtl[i].n36 = +this._isinc;
                this._objDtl[i].n48 = this._objDtl[i].n11 * this._objDtl[i].n44; //levelcost=average code*selling unit ratio
                if (this._objDtl[i].n44 != 0) {
                    this._objDtl[i].n14 = this._objDtl[i].n49 / this._objDtl[i].n44;
                    this._objDtl[i].n13 = this._objDtl[i].n48 / this._objDtl[i].n44;//purprice = levelcost/selling unit ratio
                }
                this._objDtl[i].n40 = this._obj.transType;
                if (!this._obj.n49) {
                    this._obj.n11 = this._objDtl[i].n35;
                    this._obj.n12 = this._objDtl[i].n37;
                   // this.getTaxData(this._obj.n11);
                   // this._obj.n54 = this._tax.outAccSK;
                }
                if (this._objDtl[i].n5 == 2 || this._objDtl[i].n5 == 1) {
                    this._objDtl[i].t4 = this._objDtl[i].t5;
                }
                //this._objDtl[i].n38 = ((this._objDtl[i].n34 - this._objDtl[i].n22) - (+(this._isinc) ? this._objDtl[i].n23 : 0)).toFixed(this.ics._decimalPlace);
                if (this._objDtl[i].n1 == 0 && this._objDtl[i].n5 == 0) {
                    this._objDtl[i].t7 = "*";
                    this._objDtl[i].t8 = "*";
                    this._objDtl[i].t9 = "*";
                    this.ref._lov3.uomdatas.filter((x) => x.syskey == this._objDtl[i].uomsk).map((x) => this._objDtl[i].t10 = x.t1);
                }
            }
        }
        this._obj.n10 = this._obj.n5 - this._obj.n14;
       // this._obj.transDetailsData = this._objDtl;
    }

    deleteItem(i) {
        this._obj.soDetailList.splice(i,1);
        
        
        // this._objDtl.splice(i, 1);
        // if (this._objDtl.length == 0) {
        //     //this._isinc = 0;
        //     //this._tmpHdrObj.disPercent = 0.00;
        // }
        //this._oldObj.oldLength = this._objDtl.length - 1;
       //this.calculateTotalDis();
    }

    goNew(){
        this._obj = this.getHeaderObj();
        this._saveflag = "New";
    }

    changeUnitDis(e) {
        this._objDtl[e.i].n19 = +e.val;//unitdisc
        if (this._objDtl[e.i].n49 != 0)
            this._objDtl[e.i].n53 = +((100 / this._objDtl[e.i].n49) * this._objDtl[e.i].n19).toFixed(this.ics._decimalPlace); //saleprice * unitdis
        if (this._objDtl[e.i].n53 > 100) this.changeDisPercent({ val: 100, i: e.i });  //disperc
        this.calculateAmt(this._objDtl, e.i);
    }

    changeDisPercent(e) {
        this._objDtl[e.i].n53 = +e.val;
        if (this._objDtl[e.i].n53 > 100) this._objDtl[e.i].n53 = 100;
        this._objDtl[e.i].n19 = +(this._objDtl[e.i].n49 * this._objDtl[e.i].n53 / 100).toFixed(this.ics._decimalPlace);
        this.calculateAmt(this._objDtl, e.i);
    }

    calculateTotalAmt(detail) {
        this._tmpHdrObj.subTotal = 0.00;
        this._tmpHdrObj.chargetTotal = 0.00;
        this._obj.n14 = 0.00; //taxamt
        this._obj.n7 = 0.00;  //disamt(sum up detail dis)
        for (let i = 0; i < detail.length; i++) {
            if (detail[i].n5 != 2)
                this._tmpHdrObj.subTotal = +((detail[i].n34 + (+this._tmpHdrObj.subTotal)).toFixed(this.ics._decimalPlace));
            else
                this._tmpHdrObj.chargetTotal += +(detail[i].n34).toFixed(this.ics._decimalPlace);

            this._obj.n14 = +(detail[i].n23 + (+this._obj.n14)).toFixed(this.ics._decimalPlace);  //taxamt
            // detail [i].n38 = detail [i].n34 - detail [i].n22;
        }
        for (let j = 0; j < detail.length; j++) {
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
            this._obj.n5 = +((this._tmpHdrObj.subTotal - this._obj.n9) + (+this._obj.n14) + (this._tmpHdrObj.chargetTotal)).toFixed(this.ics._decimalPlace);//n5 is netamt

        else if (!this._obj.n49 && detail[0].n36 == 1)
            this._obj.n5 = +((this._tmpHdrObj.subTotal - this._obj.n9) + (this._tmpHdrObj.chargetTotal)).toFixed(this.ics._decimalPlace);

        //if (!this._retrieveQuoDtl && this._convertFlag) this._objConvertDtl = detail;
       // else if (this._convertDO && !this._retrieveQuoDtl) this._objConvertDO.stkDetailsData = detail;
       // else 
        this._objDtl = detail;
    }


    calculateAmt(detail, index) {
        detail[index].n23 = 0.00; //taxamt
        detail[index].n34 = +((detail[index].n49 * detail[index].n8) - (detail[index].n19 * detail[index].n8)).toFixed(this.ics._decimalPlace);
       // detail[index].n38 = +((detail[index].n34 - detail[index].n22) - (+(this._isinc) ? detail[index].n23 : 0)).toFixed(this.ics._decimalPlace);
        if (this._obj.n49) detail[index].n36 = 0;
        if (+this._obj.n9 > 0) {  //disamt
            this.calculateTotalAmt(detail);
            for (let j = 0; j < detail.length; j++) {
                let amt = (detail[j].n34 * (+this._tmpHdrObj.disPercent)) / 100;

                if (+detail[j].n36) {
                    detail[j].n23 = +(((detail[j].n34 - (+amt)) * (+detail[j].n37)) / (100 + detail[j].n37)).toFixed(this.ics._decimalPlace);
                } else {
                    detail[j].n23 = +(((detail[j].n34 - (+amt)) * (+detail[j].n37)) / 100).toFixed(this.ics._decimalPlace);
                }

                // if (detail[j].n5 != 2)
                //     detail[j].n30 = this._tax.outAccSK;
            }

        } else {
            if (+detail[index].n36) {
                detail[index].n23 = +((detail[index].n34 * (+detail[index].n37)) / (100 + detail[index].n37)).toFixed(this.ics._decimalPlace);
            } else {
                detail[index].n23 = +((detail[index].n34 * (+detail[index].n37)) / 100).toFixed(this.ics._decimalPlace);
            }

            // if (detail[index].n5 != 2)
            //     detail[index].n30 = this._tax.outAccSK;
        }
        detail[index].n23 = +(detail[index].n23).toFixed(this.ics._decimalPlace);
        this.calculateTotalAmt(detail);
    }

    changeTotalDisAmt(e) {
        this._obj.n9 = +e.val.toFixed(this.ics._decimalPlace);
        if (this._tmpHdrObj.subTotal != 0)
            this._tmpHdrObj.disPercent = +((100 / this._tmpHdrObj.subTotal) * this._obj.n9).toFixed(this.ics._decimalPlace);
        if (this._tmpHdrObj.disPercent > 100) this.changeTotalDisPercent({ val: 100 });
        this.calculateTotalDis();
    }

    calculateTotalDis() {
        for (let i = 0; i < this._objDtl.length; i++) {
            this.calculateAmt(this._objDtl, i);
        }
    }

    changeTotalDisPercent(e) {
        this._tmpHdrObj.disPercent = +e.val.toFixed(this.ics._decimalPlace);
        if (this._tmpHdrObj.disPercent > 100) this._tmpHdrObj.disPercent = 100;
        this._obj.n9 = +((this._tmpHdrObj.subTotal * this._tmpHdrObj.disPercent) / 100).toFixed(this.ics._decimalPlace);
        this.calculateTotalDis();
    }
    
   }