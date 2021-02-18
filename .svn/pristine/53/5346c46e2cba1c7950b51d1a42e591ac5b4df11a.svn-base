import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { enableProdMode } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { RpIntercomService } from '../framework/rp-intercom.service';
import { RpHttpService } from '../framework/rp-http.service';
import { RpBean } from '../framework/rp-bean';
import { RpReferences } from '../framework/rp-references';
import { ClientUtil } from '../util/rp-client.util';
import { RendererCallback } from '../util/interfaces';
declare var jQuery: any;

@Component({
  selector: 'frm-user',
  template: ` 
    <div class="container col-xs-12 col-sm-12 col-md-12" style="padding: 0px 5%;">
      <div class="row clearfix"> 
        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12  column col-sm-offset-0 col-md-offset-0 col-lg-offset-0"> 
        <form class="form-horizontal" ngNoForm>
        <legend>User</legend>   
        <div class="form-group"> 
              <div class="row  col-md-12"> 
                <button class="btn btn-primary" type="button" (click)="goList()" >List</button>  
                <button class="btn btn-primary" [disabled]="flagnew" id="new" type="button" (click)="goNew()" >New</button>      
                <button class="btn btn-primary" [disabled]="flagsave" id="save" type="button" (click)="goSave()">Save</button> 
                <button class="btn btn-danger" [disabled]="flagdelete" id="delete" type="button" (click)="goDelete();" >Delete</button>
              </div>           
        </div>
        <div class="row col-md-12">&nbsp;</div>
        <div class="form-group">
                      <div>
                            <label class="col-md-2">Login ID.</label>
                      </div>
                      <div class="col-md-4">
                            <input type="text"  [(ngModel)]="_obj.t1" class="form-control"   autofocus>
                      </div>
          </div>
          <div class="form-group">
                      <div>
                            <label class="col-md-2">Name</label>
                      </div>
                      <div class="col-md-4">
                            <input type="text"  [(ngModel)]="_obj.person.t2" class="form-control" autofocus >
                      </div>
                      <div>
                            <label class="col-md-2">Password</label>
                      </div>
                      <div class="col-md-4">
                            <input type="password" [(ngModel)]="_obj.t2"  class="form-control" autofocus >
                      </div>
            </div> 
            <div class="form-group">
                        <div>
                              <label class="col-md-2">Email</label>
                        </div>
                        <div class="col-md-4">
                              <input type="text"  [(ngModel)]="_obj.t3" class="form-control" autofocus >
                        </div> 
                        <div>
                              <label class="col-md-2">Confirm Password</label>
                        </div>
                        <div class="col-md-4">
                              <input class="form-control" [(ngModel)]="_confirmPassword"  type="password" style="float:left;"  autofocus>
                        </div>
            </div>
            <ul class="nav nav-tabs">
                      <li class="active"><a data-toggle="tab" href="#tab1"><b>Role</b></a></li>      
            </ul>
            <div class="tab-content" id="myTabContent"> 
                   <div id="contentrole" class="tab-pane"> 
                         <div style="padding: 20px; overflow-x:auto" class=""> 
                            <div class="col-md-6">
                                <div class="table_container">  
                                    <table class="table table-striped table-condensed table-hover tblborder" style="font-size:14px;">
                                        <thead>
                                            <tr>
                                                <th style="width:5%;"><input type="checkbox" [(ngModel)]="_checkStatus"   (click)="checkAll($event)" /></th>
                                                <th style="width:30%">Code</th>    
                                                <th style="width:65%;">Description</th>
                                                
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr *ngFor="let obj of _obj.roleData; let i=index">
                                                <td><input type="checkbox" [(ngModel)]="obj.flag" /></td>
                                                <td>{{obj.t1}}</td>
                                                <td>{{obj.t2}}</td>
                                            </tr> 
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                   </div>
               </div>
           </form>
        </div>
    </div>
  </div>
    
   ` ,
})

export class FrmUserComponent {

  subscription: Subscription;
  _util: ClientUtil = new ClientUtil();
  _objRoleArray = [];
  _obj = this.getDefaultObj();
  sub: any;

  flagnew = false;
  flagsave = false;
  flagdelete = true;
  _checkStatus = false;
  _confirmPassword = "";
  constructor(private ics: RpIntercomService, private _router: Router, private route: ActivatedRoute, private http: RpHttpService) {
    this.subscription = ics.rpbean$.subscribe(x => { })
    if (!ics.getRole() || ics.getRole() == 0) this._router.navigate(['/login']);
    this.ics.confirmUpload(false);
    this.getDefaultObj();
    this.getRoleData();
    this.flagdelete = true;

  }
  ngOnInit() {
    if (this.ics.getRole() > 0) {
    this.sub = this.route.params.subscribe(params => {
      let id = params['syskey'];
      console.log(id);
      if (id != null && id != "") {
        this.getDefaultRoleData(id);
      } else {
        this.goNew();
      }
    });
    }
  }
  ngOnDestroy() {
    this.sub.unsubscribe();
  }
  ngAfterViewInit() {
    jQuery(document).ready(function () {
      jQuery("input[type='password']").keypress(function (e) {
        if (e.which === 32)
          return false;
      });
      jQuery("[id='contentrole']").fadeIn(500);
    });
  }

  checkAll(e) {
    this._checkStatus = !this._checkStatus;
    this._obj.roleData.forEach(data => {
      if (this._checkStatus == true)
        data.flag = true;
      else
        data.flag = false;
    });
  }

  updateRoleData() {
    let data = this._obj.roleData.filter(f => f.flag == true);
    if (data.length != 0) {
      this._obj.roleData = [];
      this._obj.roleData = data;
    }
    for (let i = 0; i < this._obj.roleData.length; i++) {
      if (this._obj.roleData[i].flag == true)
        this._obj.roleData[i].flag = true;
    }
  }


  getDefaultObj() {
    return { "syskey": "0", "createdDate": "", "modifiedDate": "", "userId": "", "userName": "", "orgId": "0", "recordStatus": 0, "syncStatus": 0, "syncBatch": 0, "usersyskey": "0", "t1": "", "t2": "", "t3": "", "t4": "", "t5": "", "t6": "", "t7": "", "n1": 0, "n2": 0, "n3": 0, "n4": 0, "n5": 0, "n6": 0, "n7": 0, "n8": 0, "roleData": [{ "syskey": 0, "t2": "", "flag": false }], "person": { "syskey": "0", "autokey": 0, "createdDate": "", "modifiedDate": "", "userId": "", "userName":"", "recordStatus": 0, "syncStatus": 0, "syncBatch": 0, "usersyskey": 0, "t1": "", "t2": "", "t3": "", "t4": "", "t5": "", "t6": "", "t7": "", "t8": "", "t9": "", "t10": "", "t11": "", "t12": "", "t13": "", "t14": "", "t15": "", "t16": "", "t17": "", "t18": "", "t19": "", "t20": "", "t21": "", "t22": "", "t23": "", "t24": "", "n1": 0, "n2": 0, "n3": 0, "n4": 0, "n5": 0, "n6": 0, "n7": 0, "n8": 0, "n9": 0, "n10": 0 }, "name": "", "u12Syskey": "0" };
  }



  goList() {
    this._router.navigate(['/userList']);
  }

  goNew() {
    this._confirmPassword = "";
    this._checkStatus = false;
    this.flagdelete = true;
    this._obj = this.getDefaultObj();
    this._obj.roleData = this._objRoleArray;
    this._obj.roleData.forEach(e => { e.flag = false; });
  }
  goReadBySyskey(p) {
    this.http.doGet(this.ics._apiurl + "user/read/" + p).subscribe(
      data => {
        this._obj = data;
        console.log(this._obj);
        this.updateData();
        this._confirmPassword = this._obj.t2;
        this.flagdelete = false;
      },
      error => { },
      () => { }
    );
  }


  getDefaultRoleData(id) {
    let url: string = this.ics._apiurl + 'user/getRoleData';
    this.http.doPost(url, {}).subscribe(
      data => {
        if (data.length > 0) {
          this._objRoleArray = data;
          this.goReadBySyskey(id);
        } else {
          this.showMessage(this._util.MSG_TYPE.WARN, 'Invalid Role Data.');
        }
      },
      error => { },
      () => { }
    );
  }

  updateData() {
    let result = this._objRoleArray;
    for (let i = 0; i < result.length; i++) {
      let data = this._obj.roleData.forEach(e => {
        if (result[i].syskey == e.syskey) {
          result[i].flag = true;
        }
      });
    }
    this._obj.roleData = [];
    this._obj.roleData = result;

  }

  goSave() {

    let url: string = this.ics._apiurl + 'user/save';
    let json: any = this._obj;
    this._obj.usersyskey = this.ics._profile.userSk;
    this._obj.userId = this.ics._profile.userid;
    this._obj.userName = this.ics._profile.userName;
    this._obj.person.userId = this.ics._profile.userid;
    this._obj.person.userName = this.ics._profile.userName;
    this._obj.person.t1 = this._obj.t1;
    this.updateRoleData();

    if (this.isValid()) {
      this.http.doPost(url, this._obj).subscribe(
        data => {
          if (data.message === "SUCCESS") {
            this.showMessage(this._util.MSG_TYPE.INFO, 'Saved Successfully.');
            this.goNew();
          } else if (data.message === "EXIST") {
            this.showMessage(this._util.MSG_TYPE.WARN, 'Code Already Exists.');
          } else {
            this.showMessage(this._util.MSG_TYPE.WARN, 'Saving Fail.');
          }
        },
        error => {
          this.showMessage(this._util.MSG_TYPE.WARN, 'Saving Fail.');
        },
        () => { }
      );
    }
  }

  isValid() {
    if (this._obj.t1.trim().length === 0) {
      this.showMessage(this._util.MSG_TYPE.WARN, 'Invalid User ID.');
      return false;
    } else if (this._obj.person.t2.trim().length === 0) {
      this.showMessage(this._util.MSG_TYPE.WARN, 'Invalid UserName.');
      return false;
    }else if(this._util.validateEmail(this._obj.t3)==false){
          this.showMessage(this._util.MSG_TYPE.WARN, 'Invalid Email.');
      return false;
    } else if (this._confirmPassword != this._obj.t2) {
      this.showMessage(this._util.MSG_TYPE.WARN, "Password don't match");
      return false;
    } else if (this._obj.roleData.filter(f => f.flag == true).length === 0) {
      this.showMessage(this._util.MSG_TYPE.WARN, "Invalid Role");
      return false;
    }
    return true;
  }

  getRoleData() {

    this.http.doPost(this.ics._apiurl + 'user/getRoleData', {}).subscribe(
      data => {
        this._obj.roleData = data;
        this._objRoleArray = data;
        for (let i = 0; i < this._obj.roleData.length; i++) {
          this._obj.roleData[i].flag = false;
        }
      },
      error =>
        () => { }
    );
  }


  goDelete() {
    if (this._obj.syskey != "0") {
      let _self = this;
      let callback: RendererCallback = {
        execute() {
          let url: string = _self.ics._apiurl + 'user/delete/' + _self._obj.syskey + '/' + _self._obj.n4;
          _self.http.doGet(url).subscribe(
            data => {
              if (data.message === "SUCCESS") {
                _self.showMessage(_self._util.MSG_TYPE.INFO, 'Deleted Successfully.');
                _self.goNew();
              } else if (data.message === "FAIL")
                _self.showMessage(_self._util.MSG_TYPE.INFO, 'Deleting Fail.');
              else {
                _self.showMessage(_self._util.MSG_TYPE.WARN, 'Deleting Fail.');
              }
            },
            error => { },
            () => { }
          );
        }
      };
      _self.ics.sendBean({ t1: "rp-confirm", t2: "Confirmation", t3: 'Are you sure to delete?', t4: callback });
    } else {
      this.showMessage(this._util.MSG_TYPE.INFO, 'No record to delete!');
    }
  }

  validateEmail(mail) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
      return (true);
    }
    return (false);
  }

  showMessage(t, m) {
    this.ics.sendBean({ t1: "rp-snack", t2: t.type, t3: m });
  }
}

