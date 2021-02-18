import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { RpIntercomService } from '../framework/rp-intercom.service';
import { RpHttpService } from '../framework/rp-http.service';
import { RpBean } from '../framework/rp-bean';
import { RpReferences } from '../framework/rp-references';
import { ClientUtil } from '../util/rp-client.util';
import { RendererCallback } from '../util/interfaces';
declare var jQuery: any;
@Component({
    selector: 'frm-menuordersetup',
    template: `
<div class="container col-xs-12 col-sm-12 col-md-12" style="padding: 0px 5%;">
    <div class="row clearfix" >
        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12  column col-sm-offset-0 col-md-offset-0 col-lg-offset-0"> 
            <form class= "form-horizontal" ngNoForm> 
                <legend>Menu Order</legend>
                <div class="row  col-md-12"> 
                    <button class="btn btn-primary" type="button" (click)="goBack()">Back</button>                      
                    <button class="btn btn-primary" type="button" (click)="goSave()">Update Changes</button> 
                </div>
                <div class="row col-md-12 col-sm-12 col-xs-12">&nbsp;</div>
                <div class="col-md-4" style="overflow-y:auto;height:450px;width:500px;padding:15px;border:1px solid #08c; border-radius:5px !important;">
                <div class="form-group">

                    <ul style="list-style:none;">
                        <li *ngFor="let parentmenu of _obj, let i=index">
                            <div class="form-group" style="width:200px;">
                                <div *ngIf="parentmenu.syskey!=0">
                                    <span (click)="showRoleMenus(parentmenu)" [hidden]="parentmenu.show"><img src="image/plus-sign.png" alt="plus-sign.png" height="20" width="20" style="margin-bottom:5px" /></span>
                                    <span (click)="showRoleMenus(parentmenu)" [hidden]="!parentmenu.show"><img src="image/minus-sign.png" alt="minus-sign.png" height="20" width="20" style="margin-bottom:5px" /></span>   
                                    <label id="lvlParent{{i}}"  (click)="goSelect($event,'-1')">{{parentmenu.t2}}</label>   
                                </div>
                            </div>
                            <div *ngIf="parentmenu.show">
                                <ul style="list-style:none;">         
                                    <li *ngFor="let childmenu of parentmenu.child,let c=index">
                                        <div class="form-group" style="width:200px;"> 
                                            <label id="lvlChild{{c}}"  (click)="goSelect($event,i)">-{{childmenu.t2}}</label>                    
                                        </div>                                          
                                    </li> 
                                </ul>
                            </div>
                        </li>  
                    </ul>
                </div> 
                </div> 
                <div class="col-md-3" style="margin-left:20px;">
                    <div class="form-group">
                        <button class="btn btn-sm btn-primary" type="button" style="width: 130px;" (click)="goTop();">TOP</button> 
                    </div>
                    <div class="form-group">
                        <button class="btn btn-sm btn-primary" type="button" style="width: 130px;" (click)="goUp()">UP</button> 
                    </div>
                    <div class="form-group">
                        <button class="btn btn-sm btn-primary" type="button" style="width: 130px;" (click)="goDown()">DOWN</button>
                    </div>
                    <div class="form-group">                 
                        <button class="btn btn-sm btn-primary" type="button" style="width: 130px;" (click)="goBottom()">BOTTOM</button>
                    </div>
                </div>             
            </form>
        </div>
    </div>
</div>
  `
})
export class FrmMenuOrderComponent {

    subscription: Subscription;
    sub: any;
    _util: ClientUtil = new ClientUtil();
    _obj = this.getDefaultObj();
    temp: any;
    index: any;

    constructor(private ics: RpIntercomService, private _router: Router, private route: ActivatedRoute, private http: RpHttpService, private ref: RpReferences) {
        this.subscription = ics.rpbean$.subscribe(x => { })
        if (!ics.getRole() || ics.getRole() == 0) {
            this._router.navigate(['/login']);
        } else {
            this._obj = this.getDefaultObj();
        }
    }
    ngOnInit() {
        this.goMenuOrderdatas();
    }

    goMenuOrderdatas() {
        this.http.doGet(this.ics._apiurl + 'menu/getMenuOrderList').subscribe(
            data => {
                this._obj = data.menudatas;
            }, () => { }
        );
    }

    showRoleMenus(obj) {
        let indexx = this._obj.indexOf(obj);
        if (this._obj[indexx].show) { this._obj[indexx].show = false; }
        else { this._obj[indexx].show = true; }
    }

    goSelect(event, indexxx) {

        if ((event.target.id).indexOf("lvlParent") !== -1) {
            this.temp = (event.target.id).replace("lvlParent", "");
        }
        else {
            this.temp = (event.target.id).replace("lvlChild", "");
        }
        this.index = indexxx;

        for (let i = 0; i < this._obj.length; i++) {
            jQuery("#lvlParent" + i).css({ 'background-color': 'white', 'color': 'black' });
            for (let j = 0; j < this._obj[i].child.length; j++) {
                jQuery("#lvlChild" + j).css({ 'background-color': 'white', 'color': 'black' });
            }
        }
        jQuery("#" + event.target.id).css({ 'background-color': '#00BCD4', 'color': 'black', 'border-radius': '3px' });

    }

    goTop() {
        if (this.index == '-1') {
            for (let i = 0; i < this._obj.length; i++) {
                if (this.temp == i) {
                    let a = this._obj[i];
                    for (let k = i; k > 0; k--) {
                        this._obj[k] = this._obj[k - 1];
                        this._obj[k].n4 = k + 1;
                    }
                    this._obj[0] = a;
                    this._obj[0].n4 = 1;
                }
            }
            this.temp = 0;
        }
        else {
            for (let i = 0; i < this._obj[this.index].child.length; i++) {
                if (this.temp == i) {
                    let a = this._obj[this.index].child[i];
                    for (let k = i; k > 0; k--) {
                        this._obj[this.index].child[k] = this._obj[this.index].child[k - 1];
                        this._obj[this.index].child[k].n4 = k + 1;
                    }
                    this._obj[this.index].child[0] = a;
                    this._obj[this.index].child[0].n4 = 1;
                }
            }
            this.temp = 0;
        }
    }

    goUp() {
        if (this.index == '-1') {
            for (let i = this._obj.length; i > 0; i--) {
                if (this.temp == i) {
                    let a = this._obj[i];
                    this._obj[i] = this._obj[i - 1];
                    this._obj[i].n4 = i + 1;
                    this._obj[i - 1] = a;
                    this._obj[i - 1].n4 = i;
                }
            }
            if (this.temp > 0) {
                this.temp -= 1;
            }
        }
        else {
            for (let i = this._obj[this.index].child.length; i > 0; i--) {
                if (this.temp == i) {
                    let a = this._obj[this.index].child[i];
                    this._obj[this.index].child[i] = this._obj[this.index].child[i - 1];
                    this._obj[this.index].child[i].n4 = i + 1;
                    this._obj[this.index].child[i - 1] = a;
                    this._obj[this.index].child[i - 1].n4 = i;
                }
            }
            if (this.temp > 0) {
                this.temp -= 1;
            }
        }
    }

    goDown() {
        if (this.index == '-1') {
            for (let i = 0; i < this._obj.length - 1; i++) {
                if (this.temp == i) {
                    let a = this._obj[i];
                    this._obj[i] = this._obj[i + 1];
                    this._obj[i].n4 = i + 1;
                    this._obj[i + 1] = a;
                    this._obj[i + 1].n4 = i + 2;
                }
            }
            if (this.temp < this._obj.length - 1) {
                this.temp = Number(this.temp) + 1;
            }
        }
        else {
            for (let i = 0; i < this._obj[this.index].child.length - 1; i++) {
                if (this.temp == i) {
                    let a = this._obj[this.index].child[i];
                    this._obj[this.index].child[i] = this._obj[this.index].child[i + 1];
                    this._obj[this.index].child[i].n4 = i + 1;
                    this._obj[this.index].child[i + 1] = a;
                    this._obj[this.index].child[i + 1].n4 = i + 2;
                }
            }
            if (this.temp < this._obj[this.index].child.length - 1) {
                this.temp = Number(this.temp) + 1;
            }
        }
    }

    goBottom() {
        if (this.index == '-1') {
            for (let i = 0; i < this._obj.length; i++) {
                if (this.temp == i) {
                    let a = this._obj[i];
                    let k;
                    for (k = i; k < this._obj.length - 1; k++) {
                        this._obj[k] = this._obj[k + 1];
                        this._obj[k].n4 = k + 1;
                    }
                    this._obj[this._obj.length - 1] = a;
                    this._obj[this._obj.length - 1].n4 = k + 1;
                }
            }
            this.temp = this._obj.length - 1;
        }
        else {
            for (let i = 0; i < this._obj[this.index].child.length; i++) {
                if (this.temp == i) {
                    let a = this._obj[this.index].child[i];
                    let k;
                    for (k = i; k < this._obj[this.index].child.length - 1; k++) {
                        this._obj[this.index].child[k] = this._obj[this.index].child[k + 1];
                        this._obj[this.index].child[k].n4 = k + 1;
                    }
                    this._obj[this.index].child[this._obj[this.index].child.length - 1] = a;
                    this._obj[this.index].child[this._obj[this.index].child.length - 1].n4 = k + 1;
                }
            }
            this.temp = this._obj[this.index].child.length - 1;
        }
    }

    goBack() { this._router.navigate(['/menu']); }

    goSave() {
        let url: string = this.ics._apiurl + 'menu/saveMenuOrder';
        this.http.doPost(url, this._obj).subscribe(
            data => {
                if (data.message === "SUCCESS") {
                    this.showMessage(this._util.MSG_TYPE.INFO, 'Saved Successfully.');
                }
                else {
                    this.showMessage(this._util.MSG_TYPE.WARN, 'Saving Fail.');
                }
            },
            error => {
                this.showMessage(this._util.MSG_TYPE.WARN, 'Saving Fail.');
            },
            () => { }
        );

    }

    getDefaultObj() {
        return [{ "syskey": "", "t1": "", "t2": "", "n4": 0, "show": false, "child": [] }];
    }

    showMessage(t, m) {
        this.ics.sendBean({ t1: "rp-snack", t2: t.type, t3: m });
    }
}