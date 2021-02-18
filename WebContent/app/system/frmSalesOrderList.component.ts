import { Component } from "@angular/core";
import { RpIntercomService } from "../framework/rp-intercom.service";
import { RpHttpService } from "../framework/rp-http.service";

@Component({
    selector :'frm-saleorderList',
    template :
    `
        <div class="container col-md-12">
    <form class="form-horizontal" ngNoForm>
    <legend>Sale Order List</legend> 
    <div class="col-md-4">
                <div class="form-group ">
                    <label class=" control-label col-md-3" style="text-align: left;">Code.</label>
                    <div class="col-md-9 ">
                        <div class="input-group">
                            <span class="input-group-btn"> 
                                <input type="text"  [(ngModel)]="_search_param_saleorderlist.t1" name="userid" class="select_control form-control" placeholder="Code"/>
                            </span>
                        </div>
                    </div>
                </div>                
            </div>

             <div class="col-md-4">
                <div class="form-group ">
                    <label class=" control-label col-md-3" style="text-align: left;">Description</label>
                    <div class="col-md-9 ">
                        <div class="input-group">
                            <span class="input-group-btn"> 
                                <input type="text"  [(ngModel)]="_search_param_saleorderlist.t2" name="username" class="select_control form-control" placeholder="Description"/>
                            </span>
                        </div>
                    </div>
                </div>
            </div> 
         
            <div class="col-md-4">
                <input type="button" class="btn btn-primary" (click)="showAll()" value="Show All" />
                <input type="button" class="btn btn-primary"  value="Refresh" />
                <input type="button" class="btn btn-primary"  value="New" />
            </div>
     
        <hr>
        <div class="table_container">  
           <table class="table table-striped table-condensed table-hover tblborder" style="font-size:14px;">
                <thead>
                    <tr>
                        <th style="width:60px;">Code</th>    
                        <th style="width:60px;">Description</th>
                         <th style="width:60px">Location</th>    
                        <th style="width:60px;">Qty</th>
                          <th style="width:60px">UOM</th>    
                        <th style="width:60px">Price</th>
                         <th style="width:60px">UnitDiscount</th>    
                        <th style="width:60px">Disc%</th>
                          <th style="width:60px">Tax%</th>
                         <th style="width:60px">Tax Amount</th>    
                        <th style="width:60px">Amount</th>
                       
                    </tr>
                </thead>
                <tbody>
                    <tr *ngFor="let obj of _array; let i=index">
                        <td style="width:60px">{{obj.t2}}</td>
                          <td style="width:60px">{{obj.t3}}</td>
                         <td style="width:60px">{{obj.n26}}</td>
                        <td style="width:60px">{{obj.n6}}</td>
                          <td style="width:60px"></td>
                        <td style="width:60px">{{obj.n14}}</td>
                         <td style="width:60px">{{obj.n19}}</td>
                        <td style="width:60px">{{obj.n53}}</td>
                        <td style="width:60px">{{obj.n35}}</td>
                        <td style="width:60px">{{obj.taxAmt}}</td>
                        <td style="width:60px">{{obj.n23}}</td>
                    </tr> 
                </tbody>
            </table>
        </div>
        </form>
    </div>
    `
})
export class FrmSaleOrderLisComponent{
    _search_param_saleorderlist: any = this.getDefaultSearchObject();
    _pagerData = {currentPage : 1, totalCount : 0};    
    _array: any = [];
    constructor(private ics: RpIntercomService,private http: RpHttpService){}
    showAll() {
        this._search_param_saleorderlist = this.getDefaultSearchObject();
        this.search();
    }
    getDefaultSearchObject() {
        return { "code": "", "description": "","prefix":"","currentPage": 1, "totalCount": this.ics._profile.n1,"referenceno":"","secondrefno":"","locSyskey":"-1","status":"0","docdateoptr":"all","pageSize":"","tranType":"0" };
    }
    search() { 
        this._search_param_saleorderlist.currentPage = this._pagerData.currentPage;
        this._search_param_saleorderlist.totalCount = this.ics._profile.n1;       
        let data: any = {"code": this._search_param_saleorderlist.code, "description": this._search_param_saleorderlist.description,"prefix":this._search_param_saleorderlist.prefix , "currentPage": this._pagerData.currentPage, "pageSize": 10,"totalCount":this._search_param_saleorderlist.totalCount,"referenceno":this._search_param_saleorderlist.referenceno,"secondrefno": this._search_param_saleorderlist.secondrefno,"locSyskey":this._search_param_saleorderlist.locSyskey,"status":this._search_param_saleorderlist.status,"docdateoptr": this._search_param_saleorderlist.docdateoptr,"tranType": this._search_param_saleorderlist.tranType };      
        let url: string = this.ics._apiurl + 'saleorder/searchList';
        this.http.doPost(url,data).subscribe(
            data => {
                console.log(data);
                if (data.dtlList.length>0) {
                    this._array = data.dtlList;
                    this._pagerData.totalCount = data.totalCount; 
                } else {
                    this._array = [];
                    this._pagerData.totalCount = 0;
                    this._pagerData.currentPage = 0;
                    //this.showMessage(this._util.MSG_TYPE.INFO, 'User Not Found!');
                }
            },
            () => { }
        );
    } 
}