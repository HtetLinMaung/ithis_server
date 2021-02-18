import { Component } from "@angular/core";
import { RpIntercomService } from "../framework/rp-intercom.service";
import { RpHttpService } from "../framework/rp-http.service";

@Component({
    selector :'frm-stockgroupList',
    template :
    `
        <div class="container col-md-12">
    <form class="form-horizontal" ngNoForm>
    <legend>Stock Group List</legend> 
    <div class="col-md-4">
                <div class="form-group ">
                    <label class=" control-label col-md-3" style="text-align: left;">Code.</label>
                    <div class="col-md-9 ">
                        <div class="input-group">
                            <span class="input-group-btn"> 
                                <input type="text"  [(ngModel)]="_search_param_stockgrouplist.t1" name="userid" class="select_control form-control" placeholder="Code"/>
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
                                <input type="text"  [(ngModel)]="_search_param_stockgrouplist.t2" name="username" class="select_control form-control" placeholder="Description"/>
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
                        <th style="width:40%">Code</th>    
                        <th style="width:300px;">Description</th>
                    </tr>
                </thead>
                <tbody>
                    <tr *ngFor="let obj of _array; let i=index">
                        <td><a>{{obj.t1}}</a></td>
                        <td style="">{{obj.t2}}</td>
                    </tr> 
                </tbody>
            </table>
        </div>
        </form>
    </div>
    `
})
export class FrmStockGroupListComponent{
    _search_param_stockgrouplist: any = this.getDefaultSearchObject();
    _pagerData = {currentPage : 1, totalCount : 0};    
    _array: any = [];
    constructor(private ics: RpIntercomService,private http: RpHttpService){}
    showAll() {
        this._search_param_stockgrouplist = this.getDefaultSearchObject();
        this.search();
    }
    getDefaultSearchObject() {
        return { "code": "", "description": "","prefix":"","currentPage": 1, "totalCount": this.ics._profile.n1 };
    }
    search() { 
        this._search_param_stockgrouplist.currentPage = this._pagerData.currentPage;
        this._search_param_stockgrouplist.totalCount = this.ics._profile.n1;       
        let data: any = {"code": this._search_param_stockgrouplist.code, "description": this._search_param_stockgrouplist.description,"prefix":this._search_param_stockgrouplist.prefix , "currentPage": this._pagerData.currentPage, "pageSize": 10,"totalCount":this._search_param_stockgrouplist.totalCount };      
        let url: string = this.ics._apiurl + 'stockgroup/searchStockGroupList';
        this.http.doPost(url,data).subscribe(
            data => {
                console.log(data);
                if (data.stockGroupData.length>0) {
                    this._array = data.stockGroupData;
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