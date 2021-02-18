import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { enableProdMode } from '@angular/core';
import { Subscription }   from 'rxjs/Subscription'; 
import {RpIntercomService} from '../framework/rp-intercom.service';
import {RpHttpService} from '../framework/rp-http.service';
import {RpBean} from '../framework/rp-bean';
import {RpReferences} from '../framework/rp-references';
import { ClientUtil } from '../util/rp-client.util';  
import { RendererCallback } from '../util/interfaces'; 
declare var jQuery: any; 
@Component({
  selector: 'frm-user-list',
  template: `
    <div class="container col-md-12">
    <form class="form-horizontal" ngNoForm>
    <legend>User List</legend> 
        <div class="row col-md-12">  
            <div class="col-md-4">
                <div class="form-group ">
                    <label class=" control-label col-md-3" style="text-align: left;">User ID.</label>
                    <div class="col-md-9 ">
                        <div class="input-group">
                            <span class="input-group-btn">
                                <select [(ngModel)]="_search_param_userlist.idOptr" class="select_control form-control">
                                      <option *ngFor="let ref of ref._lov1.string" value="{{ref.value}}">{{ref.caption}}</option>
                                </select>
                            </span> <span class="input-group-btn"> 
                                <input type="text"  [(ngModel)]="_search_param_userlist.userId" name="userid" class="select_control form-control" placeholder="User ID"/>
                            </span>
                        </div>
                    </div>
                </div>                
            </div>

             <div class="col-md-4">
                <div class="form-group ">
                    <label class=" control-label col-md-3" style="text-align: left;">User Name</label>
                    <div class="col-md-9 ">
                        <div class="input-group">
                            <span class="input-group-btn">
                                <select [(ngModel)]="_search_param_userlist.nameOptr" class="select_control form-control">
                                       <option *ngFor="let ref of ref._lov1.string" value="{{ref.value}}">{{ref.caption}}</option>
                                </select>
                            </span> <span class="input-group-btn"> 
                                <input type="text"  [(ngModel)]="_search_param_userlist.userName" name="username" class="select_control form-control" placeholder="User Name"/>
                            </span>
                        </div>
                    </div>
                </div>
            </div> 

            <div class="col-md-4">
                <input type="button" class="btn btn-primary" (click)="_pagerData.currentPage=1;showAll()" value="Show All" />
                <input type="button" class="btn btn-primary" (click)="_pagerData.currentPage=1;search()" value="Refresh" />
                <input type="button" class="btn btn-primary" (click)="goNew()" value="New" />
            </div>
        </div>

        <rp-pager (rpChanged)="changePage($event)" [rpTotalCount]="_pagerData.totalCount" [rpCurrent]="_pagerData.currentPage"></rp-pager>

        <div class="table_container">  
           <table class="table table-striped table-condensed table-hover tblborder" style="font-size:14px;">
                <thead>
                    <tr>
                        <th style="width:40%">User ID.</th>    
                        <th style="width:300px;">User Name</th>
                    </tr>
                </thead>
                <tbody>
                    <tr *ngFor="let obj of _array; let i=index">
                        <td><a (click)="readData(obj.syskey)">{{obj.userId}}</a></td>
                        <td style="">{{obj.userName}}</td>
                    </tr> 
                </tbody>
            </table>
        </div>
        </form>
    </div>
  `
})
export class FrmUserListComponent {
    subscription: Subscription;
     _util: ClientUtil = new ClientUtil();
    _array: any = [];
    _search_param_userlist: any = this.getDefaultSearchObject();
    _pagerData = {currentPage : 1, totalCount : 0};
    
    constructor(private ics: RpIntercomService, private _router: Router, private route: ActivatedRoute, private http: RpHttpService, private ref: RpReferences) {
        this.subscription = ics.rpbean$.subscribe(x => { })
        if (!ics.getRole() || ics.getRole() == 0) {
            this._router.navigate(['/login']);
        } else {
            this.search();           
        }
    }

    readData(p) {
        this._router.navigate(['/user', p]);
    }

    goNew() {
        this._router.navigate(['/user']);
    }

     getDefaultSearchObject() {
        return { "userId": "", "idOptr": "", "userName": "", "nameOptr": "", "currentPage": 1, "totalCount": this.ics._profile.n1};
    }

    showAll() {
        this._search_param_userlist = this.getDefaultSearchObject();
        this.search();
    }

    search() { 
        this._search_param_userlist.currentPage = this._pagerData.currentPage;
        this._search_param_userlist.totalCount = this.ics._profile.n1;       
        let url: string = this.ics._apiurl + 'user/getUserList';
        this.http.doPost(url,this._search_param_userlist).subscribe(
            data => {
                console.log(data);
                if (data.userdatalist.length>0) {
                    this._array = data.userdatalist;
                    this._pagerData.totalCount = data.totalCount; 
                } else {
                    this._array = [];
                    this._pagerData.totalCount = 0;
                    this._pagerData.currentPage = 0;
                    this.showMessage(this._util.MSG_TYPE.INFO, 'User Not Found!');
                }
            },
            () => { }
        );
    }

    changePage(e){
        this._pagerData.currentPage = e.currentPage;
        this.search();
    }

     showMessage(t, m) {
        this.ics.sendBean({ t1: "rp-snack", t2: t.type, t3: m });
    }
}
