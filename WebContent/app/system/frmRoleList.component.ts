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
declare var jQuery:any;
@Component({
  selector: 'frm-roleList',
  template: `
<div class="container col-md-12">
    <form class="form-horizontal" ngNoForm>
        <legend>Role List</legend> 
        <div class="row col-md-12">  
            <div class="col-md-4">
                <div class="form-group ">
                    <label class=" control-label col-md-3" style="text-align: left;">Code</label>
                    <div class="col-md-9 ">
                        <div class="input-group">
                            <span class="input-group-btn">
                                <select [(ngModel)]="_search_param_rolelist.codeType" class="select_control form-control">
                                      <option *ngFor="let ref of ref._lov1.string" value="{{ref.value}}">{{ref.caption}}</option>
                                </select>
                            </span> <span class="input-group-btn"> 
                                <input type="text"  [(ngModel)]="_search_param_rolelist.code" name="code" class="select_control form-control" placeholder="Code"/>
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
                                <select [(ngModel)]="_search_param_rolelist.descriptionType" class="select_control form-control">
                                       <option *ngFor="let ref of ref._lov1.string" value="{{ref.value}}">{{ref.caption}}</option>
                                </select>
                            </span> <span class="input-group-btn"> 
                                <input type="text"  [(ngModel)]="_search_param_rolelist.description" name="description" class="select_control form-control" placeholder="Description"/>
                            </span>
                        </div>
                    </div>
                </div>
            </div> 
            <div class="col-md-4">
                <input type="button" class="btn btn-primary" (click)="_pagerData.currentPage=1;showAll()" value="Show All" />
                <input type="button" class="btn btn-primary" (click)="_pagerData.currentPage=1;searchRoleList()" value="Refresh" />
                <input type="button" class="btn btn-primary" (click)="goNew()" value="New" />
            </div> 
        </div>   
        <rp-pager (rpChanged)="changePage($event)" [rpTotalCount]="_pagerData.totalCount" [rpCurrent]="_pagerData.currentPage"></rp-pager>
        <table
            class="table table-striped table-condensed table-hover tblborder" style="font-size: 14px;">
            <thead>
                <tr>
                    <th>Code</th>
                    <th>Description</th>                        
                </tr>
            </thead>
            <tbody>
                <tr *ngFor="let data of _rolelistdata;">
                    <td class="clickable" (click)="readData(data.syskey)"><a>{{data.t1}}</a></td>
                    <td>{{data.t2}}</td>                        
                </tr>
            </tbody>
        </table>        
    </form>
</div>
  `
})
export class FrmRoleListComponent {
    subscription: Subscription;

    _search_param_rolelist = this.getDefaultSearchObject();
    _rolelistdata = this.getDefaultRoleList();
    _pagerData = { currentPage: 1, totalCount: 0 };

    constructor(private ics: RpIntercomService, private _router: Router, private route: ActivatedRoute, private http: RpHttpService, private ref: RpReferences) {
        this.subscription = ics.rpbean$.subscribe(x => { })
        if (!ics.getRole() || ics.getRole() == 0) {
            this._router.navigate(['/login']);
        } else {
            this.searchRoleList();
            this._pagerData = { currentPage: 1, totalCount: 0 };
        }
    }

    ngAfterViewInit() {
        jQuery(".dt-sm div div input").addClass("input-sm");
    }

    getDefaultSearchObject() {
        return { "codeType": "bw", "descriptionType": "bw", "code": "", "description": "" };
    }

    getDefaultRoleList() {
        return [{ "syskey": "0", "t1": "", "t2": "" }];
    }

    goNew() {
        this._router.navigate(['/role']);
    }

    readData(p) {
        this._router.navigate(['/role', p]);
    }

    changePage(e) {
        this._pagerData.currentPage = e.currentPage;
        this.searchRoleList();
    }
    showAll() {
        this._search_param_rolelist = this.getDefaultSearchObject();
        this.searchRoleList();
    }

    searchRoleList() {
        let data: any = { "codeType": this._search_param_rolelist.codeType, "code": this._search_param_rolelist.code, "descriptionType": this._search_param_rolelist.descriptionType, "description": this._search_param_rolelist.description, "currentPage": this._pagerData.currentPage, "pageSize": this.ics._profile.n1 };
        let url: string = this.ics._apiurl + 'role/searchRoleList/';
        this.http.doPost(url, data).subscribe(
            data => {
                this._rolelistdata = data.rolelistdata;
                this._pagerData.totalCount = data.totalCount;
            },
            error => {
                this._pagerData.totalCount = 0;
                this._pagerData.currentPage = 0;
                this._rolelistdata = this.getDefaultRoleList();
                this.ics.sendBean({ t1: "rp-error", t2: "Item Not Found!" });
            },
            () => { }
        );
    }
}