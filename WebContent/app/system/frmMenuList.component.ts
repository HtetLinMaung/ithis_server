import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { RpIntercomService } from '../framework/rp-intercom.service';
import { RpHttpService } from '../framework/rp-http.service';
import { RpBean } from '../framework/rp-bean';
import { RpReferences } from '../framework/rp-references';
import { ClientUtil } from '../util/rp-client.util';
declare var jQuery: any;
@Component({
    selector: 'v5-menuList',
    template: `
<div class="container col-md-12">
    <form class="form-horizontal" ngNoForm>
        <legend>Menu List</legend> 
        <div class="row col-md-12">  
            <div class="col-md-4">
                <div class="form-group ">
                    <label class=" control-label col-md-3" style="text-align: left;">Code</label>
                    <div class="col-md-9 ">
                        <div class="input-group">
                            <span class="input-group-btn">
                                <select [(ngModel)]="_search_param_menulist.codeType" class="select_control form-control">
                                      <option *ngFor="let ref of ref._lov1.string" value="{{ref.value}}">{{ref.caption}}</option>
                                </select>
                            </span> <span class="input-group-btn"> 
                                <input type="text"  [(ngModel)]="_search_param_menulist.code" name="code" class="select_control form-control" placeholder="Code"/>
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
                                <select [(ngModel)]="_search_param_menulist.descriptionType" class="select_control form-control">
                                       <option *ngFor="let ref of ref._lov1.string" value="{{ref.value}}">{{ref.caption}}</option>
                                </select>
                            </span> <span class="input-group-btn"> 
                                <input type="text"  [(ngModel)]="_search_param_menulist.description" name="description" class="select_control form-control" placeholder="Description"/>
                            </span>
                        </div>
                    </div>
                </div>
            </div> 
            <div class="col-md-4">
                <input type="button" class="btn btn-primary" (click)="_pagerData.currentPage=1;showAll()" value="Show All" />
                <input type="button" class="btn btn-primary" (click)="_pagerData.currentPage=1;searchMenuList()" value="Refresh" />
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
                    <th>Link</th> 
                    <th>Main Menu</th>                       
                </tr>
            </thead>
            <tbody>
                <tr *ngFor="let data of _menulistdata;">
                    <td class="clickable" (click)="readData(data.syskey)"><a>{{data.syskey}}</a></td>
                    <td>{{data.t2}}</td>
                    <td>{{data.t1}}</td>
                    <td>{{data.t4}}</td>                        
                </tr>
            </tbody>
        </table>        
    </form>
</div>
  `
})
export class FrmMenuListComponent {
    subscription: Subscription;

    _search_param_menulist = this.getDefaultSearchObject();
    _menulistdata = this.getDefaultMenuList();
    _pagerData = { currentPage: 1, totalCount: 0 };

    constructor(private ics: RpIntercomService, private _router: Router, private route: ActivatedRoute, private http: RpHttpService, private ref: RpReferences) {
        this.subscription = ics.rpbean$.subscribe(x => { })
        if (!ics.getRole() || ics.getRole() == 0) {
            this._router.navigate(['/login']);
        } else {
            this.searchMenuList();
            this._pagerData = { currentPage: 1, totalCount: 0 };
        }
    }

    ngAfterViewInit() {
        jQuery(".dt-sm div div input").addClass("input-sm");
    }

    getDefaultSearchObject() {
        return { "codeType": "bw", "descriptionType": "bw", "code": "", "description": "" };
    }

    getDefaultMenuList() {
        return [{ "syskey": "0", "t1": "", "t2": "", "t3": "", "t4": "" }];
    }

    goNew() {
        this._router.navigate(['/menu']);
    }

    readData(p) {
        this._router.navigate(['/menu', p]);
    }

    changePage(e) {
        this._pagerData.currentPage = e.currentPage;
        this.searchMenuList();
    }
    showAll() {
        this._search_param_menulist = this.getDefaultSearchObject();
        this.searchMenuList();
    }

    searchMenuList() {
        let data: any = { "codeType": this._search_param_menulist.codeType, "code": this._search_param_menulist.code, "descriptionType": this._search_param_menulist.descriptionType, "description": this._search_param_menulist.description, "currentPage": this._pagerData.currentPage, "pageSize": this.ics._profile.n1 };
        let url: string = this.ics._apiurl + 'menu/searchMenuList/';
        this.http.doPost(url, data).subscribe(
            data => {
                this._menulistdata = data.menulistdata;
                this._pagerData.totalCount = data.totalCount;
            },
            error => {
                this._pagerData.totalCount = 0;
                this._pagerData.currentPage = 0;
                this._menulistdata = this.getDefaultMenuList();
                this.ics.sendBean({ t1: "rp-error", t2: "Item Not Found!" });
            },
            () => { }
        );
    }
}