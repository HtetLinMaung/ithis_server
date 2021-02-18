import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { enableProdMode } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { RpHttpService } from './framework/rp-http.service';
import { RpIntercomService } from './framework/rp-intercom.service';
import { RpBean } from './framework/rp-bean';
import { RpReferences } from './framework/rp-references';
import { ClientUtil } from './util/rp-client.util';
import {Observable}    from 'rxjs/Observable';
declare var Aes: any;
declare var jQuery:any;
enableProdMode();
@Component({
  selector: 'rp-login',
  template: `
  <div class="container">
            <form  class= "form-horizontal" > 
              <div class="card card-container">
                  <h1 style="color:#419641;text-align:center;font-family:serif;margin-bottom: 30px;">{{ics._appname}}</h1>
                  <div class="row col-md-12 col-sm-12 col-xs-12 col-lg-12">&nbsp;</div>
                  <input id="userid"  class="form-control input-md" type="text" [(ngModel)]="_user.userId" [ngModelOptions]="{standalone: true}" placeholder="User ID" >
                  <div class="row col-md-12">&nbsp;</div>
                  <input id="password"  class="form-control input-md" type="password" [(ngModel)]="_user.password" [ngModelOptions]="{standalone: true}" placeholder="Password" >
                    <div class="row col-md-12">&nbsp;</div>
                  <button class="btn btn-primary btn-md btn-block" id="btnOk" (keyup.enter)="goPost()" (click)="goPost()">OK</button>
                  <br/>
                  <span  *ngIf="_result !=null && _result!=='' " class="label label-danger center-block" style="font-size:small;">{{_result}} </span> 
              </div>
            </form> 
        </div>
  `
})
export class RpLoginComponent implements OnDestroy {

  _user = { "syskey": 0, "userId": "", "userName": "", "password": "", "orgId": "" };
  _result = "";
  subscription: Subscription;
  _util: ClientUtil = new ClientUtil();

  constructor(private ref: RpReferences, private ics: RpIntercomService, private _router: Router, private http: RpHttpService) {
    this.subscription = ics.rpbean$.subscribe(x => { });
    this.ics._profile.role = 0;
    this.ics.sendBean(new RpBean());
    ics.confirmUpload(false);
   
  }

  goPost() {
    let url: string = this.ics._apiurl + 'main/login';
    this.http.doPost(url, this._user).subscribe(
      data => {
        if (data.syskey > 0) {
          this.ics._orgId = data.orgId;
          this.authorize(data);

        } else {
          this._result = "Invalid User ID or Password";
        }
      },
      () => { }
    );
  }


  authorize(data: any) {
    this.ics._profile.userSk = data.syskey;
    this.ics._profile.u12Sk = data.u12Syskey;
    this.ics._profile.userid = data.userId;
    this.ics._profile.userName = data.userName;
    this.ics._profile.role = 7;
    this.getMenuRight(data.syskey);
    this.ics._profile.rightMenus = [{ "menuItem": "", "caption": this.ics._profile.userName }, { "menuItem": "/login", "caption": "Sign Out" }];

    this._router.navigate(['/user']);
    this.ics.sendBean(new RpBean());
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  ngAfterViewInit() {
    this.queryFocus("#userid");
   
  }

  getMenuRight(syskey) {
    this.http.doGet(this.ics._apiurl + 'menu/getMenusRight/' + syskey).subscribe(
      data => {
        this.ics._profile.menus = data.menuData;
      },
      error => { },
      () => { }
    );
  }

  queryFocus(target) {
    jQuery(document).ready(function () { jQuery(target).focus(); });
  }

}