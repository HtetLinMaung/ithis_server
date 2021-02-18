import {Component} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription }   from 'rxjs/Subscription'; 
import {RpIntercomService} from '../framework/rp-intercom.service';
import {RpHttpService} from '../framework/rp-http.service';
import {RpReferences} from '../framework/rp-references';
import { ClientUtil } from '../util/rp-client.util';  

@Component(
    {
        selector: 'frm-stockgroup',
        template: `       
        <div class="container col-md-12">
    <form class="form-horizontal" ngNoForm>
    <legend>Stock List</legend> 
        <div class="row col-md-12">  
            <div class="col-md-4">
                <div class="form-group ">
                    <label class=" control-label col-md-3" style="text-align: left;">Stock ID.</label>
                    <div class="col-md-9 ">
                        <div class="input-group">
                          <span class="input-group-btn"> 
                                <input type="text"  [(ngModel)]="_search_param_userlist.code" name="code" class="select_control form-control" placeholder="Stock ID"/>
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
                                <input type="text"  [(ngModel)]="_search_param_userlist.description" name="description" class="select_control form-control" placeholder="Description"/>
                            </span>
                        </div>
                    </div>
                </div>
            </div> 

            <div class="col-md-4">
                <input type="button" class="btn btn-primary" (click)="_pagerData.currentPage=1;showAll()" value="Show All" />
                <input type="button" class="btn btn-primary" (click)="_pagerData.currentPage=1;search()" value="Refresh" />
                
            </div>
        </div>

        <rp-pager (rpChanged)="changePage($event)" [rpTotalCount]="_pagerData.totalCount" [rpCurrent]="_pagerData.currentPage"></rp-pager>

        <div class="table_container">  
        <table class="table table-striped table-condensed table-hover tblborder" style="font-size:14px;">
             <thead>
                 <tr>
                     <th style="width:40%">Stock ID .</th>    
                     <th style="width:300px;">Description </th>
                 </tr>
             </thead>
             <tbody>
                 <tr *ngFor="let obj of _array; let i=index">
                     <td><a (click)="readData()">{{obj.t2}}</a></td>
                     <td style="">{{obj.t3}}</td>
                 </tr> 
             </tbody>
         </table>
     </div>
        </form>
    </div>
      `}
 )

export class FrmStockListComponent{

    subscription: Subscription;
    _util: ClientUtil = new ClientUtil();
   _array: any = [];
   _search_param_userlist: any = this.getDefaultObj();
   _pagerData = {currentPage : 1, totalCount : 0};


   constructor(private ics: RpIntercomService,private http: RpHttpService,private router:Router){

}

getDefaultObj() {
    return { "code": "", "description": "","prefix":"","currentPage": 1, "totalCount": this.ics._profile.n1 };
    }

showAll() {
    this._search_param_userlist = this.getDefaultObj();
    this.search();
}

search() { 
    this._search_param_userlist.currentPage = this._pagerData.currentPage;
    this._search_param_userlist.totalCount = this.ics._profile.n1;   
    let data: any = {"code": this._search_param_userlist.code, "description": this._search_param_userlist.description,"prefix":this._search_param_userlist.prefix , "currentPage": this._pagerData.currentPage, "pageSize": 10,"totalCount":this._search_param_userlist.totalCount };          
    let url: string = this.ics._apiurl + 'StockSetup/FindStockList';
    this.http.doPost(url,this._search_param_userlist).subscribe(
        data => {
            console.log(data);
            if (data.userdatalist.length>0) {
                this._array = data.userdatalist;
               // this._pagerData.totalCount = data.totalCount; 
            } else {
                this._array = [];
                this._pagerData.totalCount = 0;
                this._pagerData.currentPage = 0;
               // this.showMessage(this._util.MSG_TYPE.INFO, 'User Not Found!');
            }
        },
        () => { }
    );
}
}