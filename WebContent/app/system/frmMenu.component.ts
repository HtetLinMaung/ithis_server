import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {Subscription}   from 'rxjs/Subscription';
import {RpReferences} from '../framework/rp-references';
import {RpIntercomService} from '../framework/rp-intercom.service';
import {RpHttpService} from '../framework/rp-http.service';

import { ClientUtil } from '../util/rp-client.util';
import { RendererCallback } from '../util/interfaces';
declare var jQuery: any;
@Component({
  selector: 'frmmenu',
  template: ` 
    <div class="container col-md-12 col-sm-12 col-xs-12" style="padding: 0px 5%;">
          <form class= "form-horizontal" ngNoForm >    
              <legend>Menu</legend>              
                  <div class="row col-md-12 col-sm-12"> 
                    <button class="btn btn-primary" type="button" (click)="goList()" >List</button>                     
                    <button class="btn btn-primary"  id="new" type="button" (click)="goNew()">New</button>      
                    <button class="btn btn-primary"  id="save" type="button" (click)="goPost()">Save</button> 
                    <button class="btn btn-danger"  id="delete" type="button" [disabled]="_obj.syskey === '' || _obj.syskey === '0'" (click)="goDelete();" >Delete</button> 
                    <input type="button" class="btn btn-primary" (click)="goMenuOrder()" value="Menu Order" />
                  </div>                            
               
                  <div class="row col-md-12 col-sm-12 col-xs-12">&nbsp;</div>

                  <div class="form-group"> 
                          <label class="checkbox-inline">    
                              <input type="radio" [checked]="parentcheck" id="parentradio"  (click)="checkParents()" name="optionsRadiosinline"   value="option1" checked> 
                              Main Menu 
                          </label>  
                          
                          <label class="checkbox-inline">      
                              <input type="radio" [checked]="childcheck" id="childradio" (click)="checkChild()"   name="optionsRadiosinline"   value="option2"> 
                              Sub Menu    
                          </label>
                  </div>
              
                  <div class="form-group" [hidden]="_rd"> 
                    <label class="col-md-2">Main Menu</label>
                    <div class="col-md-3">
                      <select class="form-control" [(ngModel)]="_obj.n2">
                         <option *ngFor="let item of _comboObj "  [value]="item.syskey">{{item.t2}}</option>						
                      </select>
                    </div>
                  </div>

                   <div class="form-group">
                      <label class="col-md-2">Code</label>
                      <div class="col-md-3">
                        <input type="text" [(ngModel)]="_syskey" class="form-control" readonly>
                      </div>                        
                  </div>

                  <div class="form-group">
                      <label class="col-md-2">Description</label>
                      <div class="col-md-4">
                        <input type="text" [(ngModel)]="_obj.t2" class="form-control">
                      </div>        
                  </div>                 

                  <div class="form-group">  
                      <label class="col-md-2">Link</label>
                      <div class="col-md-4">
                        <input type="text" [(ngModel)]="_obj.t1" class="form-control">
                      </div>                    
                  </div> 
                         
                  <div class="col-md-6" style="overflow-y:auto;height:330px;width:600px;padding:15px;border:1px solid #e5e5e5; border-radius:10px !important;">
                    <legend><span style="font-size:16px;font-weight:600;">Button Right</span></legend>                        
                    <table class="table table-striped table-condensed table-hover" style="font-size:14px;">   
                      <thead>
                        <tr>
                          <th style='width: 7%;' align="center">&nbsp;</th>
                          <th style='width: 93%;' align="center">Name</th>    
                        </tr>
                      </thead>
                      <tbody>
                        <tr *ngFor="let obj of _buttonArray">
                          <td><label><input type="checkbox" [(ngModel)]="obj.flag"></label></td>
                          <td>{{obj.t2}}</td>   
                        </tr> 
                      </tbody>
                    </table>                    
                  </div>

           </form>      
  </div>   
   ` ,
})

export class FrmMenuComponent {
  // RP Framework 
  subscription: Subscription;
  // Application Specific
  _util: ClientUtil = new ClientUtil();

  _buttonArray = []; 
  _comboObj =[{ "syskey": "0", "t2": "" }];
  _syskey = "TBA"; 
  _obj = this.getDefaultObj();  
  sub: any;
  _rd: boolean;  
  parentcheck: boolean;
  childcheck: boolean; 

  constructor(private ics: RpIntercomService, private _router: Router, private route: ActivatedRoute, private http: RpHttpService, private ref: RpReferences) {
    // RP Framework
    this.subscription = ics.rpbean$.subscribe(x => { })
    if (!ics.getRole() || ics.getRole() == 0) {
      this._router.navigate(['/login']);
    } else {
      this._obj = this.getDefaultObj();
    }   

    this._rd = true;//Combo BUtton Control    
    this.parentcheck = true;//Radio Box Control
    this.childcheck = false;
  }

  getDefaultObj() {
    return { "syskey": "0", "usersyskey": "", "userId": "", "userName": "", "t1": "", "t2": "", "t3": "", "t4": "", "t5": "", "t6": "", "n2": "0", "n5": "0" };
  }

  exec = {callback:function(){ }};

  ngOnInit() {
    var self = this;
    this.sub = this.route.params.subscribe(params => {
      let id = params['id'];
      if (id != null && id != "") {
        self.exec = { callback:function(){
           self.goReadBySyskey(id);
        }};
      } else {
         self.exec = {callback:function(){ }};
      }
      this.getButtonlist();
      this.getMainMenulist();
    });
  }

  goReadBySyskey(p) {
    this.http.doGet(this.ics._apiurl + 'menu/readMenu/' + p + "").subscribe(
      data => {
        this._obj = data;
        this._syskey = this._obj.syskey;        
        this.setButtonData(this._obj.t3);              
        if (this._obj.n2 == "0") {
          this.parentcheck = true;
          this.childcheck = false;
        }
        else {
          this.parentcheck = false;
          this.childcheck = true;
          this._rd = false;
        }
      },() => { }
    );
  } 

  ngOnDestroy() { if (this.ics.getRole() > 0) { this.sub.unsubscribe(); } }

  checkChild() { this._rd = false; }

  checkParents() { this._rd = true; this._obj.n2 = "0";}

  goMenuOrder(){ this._router.navigate(['/menuorder']); }

  goDelete() {
        if (this._obj.syskey != "0") {
            let _self = this;
            let callback: RendererCallback = {
                execute() {
                    let url: string = _self.ics._apiurl + 'menu/deleteMenu/' +  _self._obj.syskey + '/' + _self._obj.n2;
                    _self.http.doGet(url).subscribe(
                        data => {
                            if (data.message === "SUCCESS") {
                                _self.showMessage(_self._util.MSG_TYPE.INFO, 'Deleted Successfully.');
                                _self.goNew();
                            }else if(data.message === "DPARENT"){
                                _self.showMessage(_self._util.MSG_TYPE.WARN, 'Child Menu Already Exist.');
                            }else {
                                _self.showMessage(_self._util.MSG_TYPE.WARN, 'Deleting Fail.');
                            }
                        },() => { }
                    );
                }
            };
            this.ics.sendBean({ t1: "rp-confirm", t2: "Confirmation", t3: 'Are you sure to delete?', t4: callback });
        } else {
            this.showMessage(this._util.MSG_TYPE.INFO, 'No record to delete!');
        }
    }
  
  goPost() {    
      this._obj.usersyskey = this.ics._profile.userSk;
      this._obj.userId = this.ics._profile.userid;
      this._obj.userName = this.ics._profile.userName;
      this._obj.n5 = "1";
      this._obj.t4 = "51";
      this._obj.t5 = "100%";
      this._obj.t6 = "800";      
      this._obj.t3 = this.getButtonData();
      let url: string = this.ics._apiurl + 'menu/saveMenu';
      let json: any = this._obj;
      if (this.isValid()) {
        this.http.doPost(url, json).subscribe(
          data => {
            if (data.message === "SUCCESS") {
              this.showMessage(this._util.MSG_TYPE.INFO, 'Saved Successfully.');
              this._obj.syskey = data.syskey;
              this._syskey = data.syskey;
            } else if (data.message === "CODEEXISTS") {
              this.showMessage(this._util.MSG_TYPE.WARN, 'Menu Already Exists.');
            } else if (data.message === "DPARENT") {
              this.showMessage(this._util.MSG_TYPE.WARN, 'Child Menu Already Exist.');
            }else {
              this.showMessage(this._util.MSG_TYPE.WARN, 'Saving Fail.');
            }
          },
          error => {
            this.showMessage(this._util.MSG_TYPE.WARN, 'Saving Fail.');
          }, () => { }
        );
      }    
  }

  goList() { this._router.navigate(['/menuList']); }

  goNew() {    
    this._syskey = "TBA";    
    this._rd = true;
    jQuery('#parentradio').prop('checked', 'checked');
    jQuery('#childradio').prop('checked', false);  
    this._obj = this.getDefaultObj();
    this.clearButtonData();
    this.getMainMenulist();
  }

  getMainMenulist() {
    this.http.doGet(this.ics._apiurl + 'menu/getMainList').subscribe(
      response => {
        if (response != null || response != undefined) {
          this._comboObj = response.mainmenudatas;
        }
      }, () => { }
    );
  }

  isValid() {
        if (!this._rd && this._obj.n2 === "0") {           
            this.showMessage(this._util.MSG_TYPE.WARN, 'Invalid Main Menu Code.');
            return false;            
        } else if (this._obj.t2.trim().length === 0) {
            this.showMessage(this._util.MSG_TYPE.WARN, 'Invalid Description.');
            return false;
        } else if (!this._rd && this._obj.t1.trim().length === 0) {
            this.showMessage(this._util.MSG_TYPE.WARN, 'Invalid Link.');
            return false;
        } else if (!this._rd && this._obj.t3.trim().length === 0) {
            this.showMessage(this._util.MSG_TYPE.WARN, 'Invalid Button Right.');
            return false;
        }
        return true;
    }

  getButtonlist() {
    this.http.doGet(this.ics._apiurl + 'menu/getButtonList').subscribe(
      response => {     
        this._buttonArray = response.buttonlistdata;
        this.exec.callback();
      },
      () => { this.exec.callback(); }
    );
  }

  clearButtonData() {
    for (let i = 0; i < this._buttonArray.length; i++) {
      this._buttonArray[i].flag = false;
    }
  }

  getButtonData() {
    let _self = this;
    let k = "";
    for (let i = 0; i < _self._buttonArray.length; i++) {
      if (_self._buttonArray[i].flag) {
        if (k != "") { k += ","; }
        k += _self._buttonArray[i].syskey;
      }
    }
    return k;
  }

  setButtonData(t3) {
    let  _self = this;
    let btns = t3.split(',');
    for (let i = 0; i < _self._buttonArray.length; i++) {
      for (let j = 0; j < btns.length; j++) {
        if (_self._buttonArray[i].syskey == btns[j]) {
          _self._buttonArray[i].flag = true;
        }
      }
    }
  }

  showMessage(t, m) { this.ics.sendBean({ t1: "rp-snack", t2: t.type, t3: m }); }

}
