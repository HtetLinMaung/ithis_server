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
enableProdMode(); 
@Component({
  selector: 'frm-roleSetup',
  template: `
  <div class="container">
    <div class="row clearfix"> 
      <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12  column col-sm-offset-0 col-md-offset-0 col-lg-offset-0"> 
      <form class="form-horizontal">
      <legend>Role</legend>

        <div class="form-group">
            <div class="row  col-md-12">              
              <button class="btn btn-primary" type="button" (click)="goList()">List</button> 
              <button class="btn btn-primary"  id="new" type="button" (click)="goNew()">New</button>      
              <button class="btn btn-primary"  id="save" type="button" (click)="goPost()" >Save</button> 
              <button class="btn btn-danger"  id="delete" type="button" [disabled]="_obj.syskey=== 0 " (click)="goDelete();" >Delete</button> 
            </div>           
        </div>

          <div class="form-group">
                    <div>
                        <label class="col-md-2">Code</label>
                    </div>
                    <div class="col-md-3">
                        <input type="text"   [(ngModel)]="_obj.t1"  class="form-control" [ngModelOptions]="{standalone: true}" />
                    </div>
                </div> 

          <div class="form-group">
                    <div>
                        <label class="col-md-2">Description</label>
                    </div>
                    <div class="col-md-3">
                        <input type="text"  [(ngModel)]="_obj.t2" class="form-control" [ngModelOptions]="{standalone: true}" />
                    </div>
                </div> 

        <!-- nav bar -->
        <ul class="nav nav-tabs">
            <li class="active"><a data-toggle="tab" href="#tab1"><b>Menu</b></a></li>      
        </ul>

        <div class="tab-content">
            <div id="tab1" class="tab-pane fade in active">            
            <div class="form-group">

            <ul style="list-style:none;">
                <li *ngFor="let parentmenu of _obj.menu, let i=index">
                <div class="form-group">
                    <div *ngIf="parentmenu.syskey!=0">
                        <span (click)="showRoleMenus(parentmenu)" [hidden]="parentmenu.show"><img src="image/plus-sign.png" alt="plus-sign.png" height="15" width="15" style="margin-bottom:8px" /></span>
                        <span (click)="showRoleMenus(parentmenu)" [hidden]="!parentmenu.show"><img src="image/minus-sign.png" alt="minus-sign.png" height="15" width="15" style="margin-bottom:8px" /></span>   
                        <label><input type="checkbox" [(ngModel)]="parentmenu.result" (change)="getParentValue(i,parentmenu.syskey,$event)" [ngModelOptions]="{standalone: true}">{{parentmenu.t2}}</label>   
                    </div>
                </div>
                <div *ngIf="parentmenu.show">
                    <ul style="list-style:none;">         
                        <li *ngFor="let childmenu of parentmenu.childmenus,let c=index">
                            <div class="form-group"> 
                                <input type="checkbox"  [(ngModel)]="childmenu.result" (change)="getChildValue(i,c,$event)" [ngModelOptions]="{standalone: true}">{{childmenu.t2}}                   
                            </div>
                            <div class="form-group"> 
                                &emsp;Button->
                                <span *ngFor="let btnmenu of childmenu.btns,let b=index">
                                <input type="checkbox"  [(ngModel)]="btnmenu.flag" (change)="getButtonValue(i,c,b,$event)"  [ngModelOptions]="{standalone: true}">{{btnmenu.t2}}
                                </span> 
                            </div>               
                        </li> 
                    </ul>
                </div>
                </li>  
            </ul>
            </div>
            </div>           
        </div>
      </form>
      </div>
    </div>
   </div>   
   ` 
})
export class FrmRoleComponent {

    subscription: Subscription;
    sub: any;
    _util: ClientUtil = new ClientUtil();
    _roleMenuList = [];
    _obj = this.getDefaultObj();
    _cloneNewMenuList = [];


    constructor(private ics: RpIntercomService, private _router: Router, private route: ActivatedRoute, private http: RpHttpService) {
        this.subscription = ics.rpbean$.subscribe(x => { })
        if (!ics.getRole() || ics.getRole() == 0) this._router.navigate(['/login']);
        this.getRoleMenus();
    }

    getRoleMenus() {
        this.http.doGet(this.ics._apiurl + 'role/getAllRole').subscribe(
            data => {
                this._obj.menu = data.dataList;
                this._cloneNewMenuList = this._util.deepCloneArray(data.dataList);

            },
            error => { },
            () => { }
        );
    }

    goList() {
        this._router.navigate(['/rolelist']);
    }

    goNew() {
        this._obj = this.getDefaultObj();
        this._obj.menu = [];
        this._obj.menu = this._cloneNewMenuList;
    }
    goDelete() {

        this.http.doGet(this.ics._apiurl + 'role/deleteRole/' + this._obj.syskey).subscribe(
            data => {

                if (data.message == "SUCCESS") {
                    this.showMessage(this._util.MSG_TYPE.INFO, 'Delete SuccessFully');
                    this.goNew();
                }else if(data.message == "CANNOTDELETE") {
                     this.showMessage(this._util.MSG_TYPE.WARN, 'Role In Use');
                 }
                else {
                    this.showMessage(this._util.MSG_TYPE.WARN, 'Delete Fail');
                }
            },
            error => { },
            () => { }
        );
    }

    goPost() {
        let url: string = this.ics._apiurl + 'role/save';
        let btns = [];
        if (this.isvalie()) {
            for (let i = 0; i < this._obj.menu.length; i++) {
                for (let j = 0; j < this._obj.menu[i].childmenus.length; j++) {
                    let str = this.getButtonData(this._obj.menu[i].childmenus[j].btns);
                    let bdata = { "syskey": 0, "desc": "", "link": "", "flag": false };
                    bdata.desc = str;
                    bdata.syskey = this._obj.menu[i].childmenus[j].syskey;
                    btns.push(bdata);
                }
            }
            this._obj.btnarr = btns;
            let json: any = this._obj;
            this.http.doPost(url, json).subscribe(
                data => {
                    if (data.message == "SUCCESS") {
                        this.showMessage(this._util.MSG_TYPE.INFO, 'Save SuccessFully');
                        this.goNew();
                    } else if (data.message == "CODEEXISTS") {
                        this.showMessage(this._util.MSG_TYPE.WARN, 'Code Already Exists');
                    } else {
                        this.showMessage(this._util.MSG_TYPE.WARN, 'Saving Fail');
                    }
                },
                error => { },
                () => { }
            );
        }
    }

    ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
            let syskey = params['syskey'];
            if (syskey !== undefined && syskey !== null) {
                this.http.doGet(this.ics._apiurl + 'role/readRoleBySyskey/' + syskey).subscribe(
                    data => {
                        this._obj = data.roleData;
                    },
                    error => { },
                    () => { }
                );
            }
        });
    }

    ngOnDestroy() {
        if (this.ics.getRole() > 0) {
            this.sub.unsubscribe();
        }
    }

    showRoleMenus(obj) {
        let indexx = this._obj.menu.indexOf(obj);
        if (this._obj.menu[indexx].show) { this._obj.menu[indexx].show = false; }
        else { this._obj.menu[indexx].show = true; }
    }

    getButtonData(array) {
        let k = "";
        for (let i = 0; i < array.length; i++) {
            if (array[i].flag) {
                if (k != "") {
                    k += ",";
                }
                k += array[i].syskey;
            }
        }
        return k;
    }

    getParentValue(indexno, value, event) {
        if (event.target.checked) {
            //if parentmenu is checked,check all childmenu
            this.checkAllMenu(indexno, true);
        }
        else {
            //if parentmenu is not check, uncheck all childmenu
            this.checkAllMenu(indexno, false);
        }
    }

    getButtonValue(indexno, menuindex, btnindex, event) {
        if (event.target.checked) {
            this._obj.menu[indexno].childmenus[menuindex].result = true;
             this._obj.menu[indexno].result = true;
        } else {
            let hasButtonCheck = false;
            this._obj.menu[indexno].childmenus[menuindex].btns[btnindex].flag = false;
            if (this._obj.menu[indexno].childmenus[menuindex].btns != undefined) {
                for (let i = 0; i < this._obj.menu[indexno].childmenus[menuindex].btns.length; i++) {
                    if (this._obj.menu[indexno].childmenus[menuindex].btns[i].flag == true) {
                        hasButtonCheck = true;
                        break;
                    }
                }
            }
            if (hasButtonCheck == false) {
                this._obj.menu[indexno].childmenus[menuindex].result = false;
                  // when uncheck all btn then uncheck childmenunu.when child menu uncheck all then main menu uncheck. this is checking is there check childmenu if not uncheck mainmenu, Thz for reading.
                 this.checkALLChildMenu(indexno, menuindex, false);
            }

        }
    }


    getChildValue(indexno, childindexno, event) {
        let i = 0;
        if (event.target.checked) {
            //if one childmenu is checked, check its parentmenu
            this._obj.menu[indexno].result = true;
            //if MenuCheck Under Menubutton ALl Check
            this.checkAllBtn(indexno, childindexno, true)
        } else {
            //if there is no check in childmenu uncheck parentmunu ==>Start
            this.checkALLChildMenu(indexno, childindexno, true);

            // == END 
            //if childMenu UnCheck Under Menubutton All UnCheck
            this.checkAllBtn(indexno, childindexno, false)
        }
    }

    checkALLChildMenu(indexno, childindexno, frommenu) {
        let i = 0;
        if (frommenu) {
            this._obj.menu[indexno].childmenus[childindexno].result = false;
        }
        for (let j = 0; j < this._obj.menu[indexno].childmenus.length; j++) {
            if (this._obj.menu[indexno].childmenus[j].result === true) {
                i = 1;
                break;
            }
        }
        if (i == 0) {
            this._obj.menu[indexno].result = false;
        }



    }

    checkAllBtn(mainIndex, ChildIndex, param) {
        if (this._obj.menu[mainIndex].childmenus[ChildIndex].btns != undefined) {
            for (let i = 0; i < this._obj.menu[mainIndex].childmenus[ChildIndex].btns.length; i++) {
                this._obj.menu[mainIndex].childmenus[ChildIndex].btns[i].flag = param;
            }
        }
    }

    checkAllMenu(mainIndex, param) {
        if (this._obj.menu[mainIndex].childmenus != undefined) {
            for (let i = 0; i < this._obj.menu[mainIndex].childmenus.length; i++) {
                this._obj.menu[mainIndex].childmenus[i].result = param;
                this.checkAllBtn(mainIndex, i, param);
            }
        }
    }


    getDefaultObj() {

        return { "syskey": 0, "autokey": 0, "createdDate": "", "modifiedDate": "", "userId": this.ics._profile.userid, "userName": this.ics._profile.userName, "recordStatus": 0, "syncStatus": 0, "syncBatch": 0, "usersyskey": this.ics._profile.userSk, "t1": "", "t2": "", "t3": "", "n1": 0, "n2": 0, "n3": 0, "btnarr": [], "menu": [] };
    }

    showMessage(t, m) {
        this.ics.sendBean({ t1: "rp-snack", t2: t.type, t3: m });
    }


    isvalie() {
        if (this._obj.t1 == "") {
            this.showMessage(this._util.MSG_TYPE.WARN, 'Invalid Code');
            return false;
        }

        if (!this.checkHasMenu()) {
            this.showMessage(this._util.MSG_TYPE.WARN, 'Invalid Menu');
            return false;
        }

        return true;
    }


    checkHasMenu() {
        let i = false;
        for (var index = 0; index < this._obj.menu.length; index++) {

            if (this._obj.menu[index].result == true) {
                i = true;
                break;
            }
        }
        return i;
    }
}