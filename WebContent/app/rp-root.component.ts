import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router'
import { enableProdMode } from '@angular/core';
import { RpHttpService } from './framework/rp-http.service';
import { RpIntercomService } from './framework/rp-intercom.service';
import { RpReferences } from './framework/rp-references';
import { RendererCallback } from './util/interfaces';
import { ClientUtil } from './util/rp-client.util';
declare var jQuery: any;
enableProdMode();
@Component({
  selector: 'rp-root',
  template: `
    <rp-menu *ngIf="_showmenu"></rp-menu>
    <div id="snackbar" [class.snack-success]='_snack.type!="Success"' [class.snack-info]='_snack.type!="Warning"' [class.snack-warn]='_snack.type=="Warning"'>{{_snack.msg}}</div>
    <div class="container col-md-12">
      <div id="alert" class={{_alert.type}} [hidden]="_alert.flag">{{_alert.msg}}</div>
    </div>
    
    <router-outlet></router-outlet>
  
    <div id="rootpopup" class="modal fade" role="dialog">
      <div id="rootpopupsize" class="modal-dialog modal-lg">  
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal">&times;</button>
            <h4 id="rootpopuptitle" class="modal-title">RP Report ***</h4>
          </div>
          <div id="rootpopupbody" class="modal-body">
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>
  
    <div id="confirm_popup" class="modal fade" role="dialog">
      <div id="confirm_popup_size" class="modal-dialog modal-lg">  
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal">&times;</button>
            <h4 id="confirm_popup_title" class="modal-title">RP Report ***</h4>
          </div>
          <div id="confirm_popup_body" class="modal-body">
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-danger" data-dismiss="modal" (click)="clickConfirm()">Confirm</button>
            <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>

    <div class="modal fade" id="locmodel" role="dialog">
		  <div class="modal-dialog modal-sm">
			  <div class="modal-content">
				  <div class="modal-header" style="background-color: #e8ebf1;border-radius: 4px;">
					  <h4 class="modal-title" >Local Setting</h4>
					</div>
        <div class="modal-body">
          <label>Location</label> 
          <select [(ngModel)]="local_setting.location" class="form-control"	[ngModelOptions]="{standalone: true}">
            <option *ngFor="let item of ref._lov3.locdatas" value="{{item.code}}">{{item.description}}</option>
          </select>
          <div>&nbsp;</div>
          <label>Bin</label> 
          <select [(ngModel)]="local_setting.bin" class="form-control"	[ngModelOptions]="{standalone: true}">
            <option *ngFor="let item of ref._lov3.bin_datas" value="{{item.code}}">{{item.description}}</option>
          </select>
          <div>&nbsp;</div>
          <label>Counter</label> 
          <select [(ngModel)]="local_setting.counter" class="form-control" id="sel1" [ngModelOptions]="{standalone: true}">
            <option *ngFor="let item of  ref._lov3.counterdatas" value="{{item.code}}">{{item.description}}</option>
          </select>
        </div>
        <div class="modal-footer">
          <button type="button" id="savloc" (click)="saveLocation()" data-dismiss="modal"  class="btn btn-primary ">Save</button>
          <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
        </div>
        <br>
        <span  *ngIf="_saveStatus !=null && _saveStatus!=='' "  class="label {{_savestatus_class}} center-block" style="font-size:small;">{{_saveStatus}} </span> 
			</div>
		</div>
	</div>
`
})
export class RpRootComponent {
  _showmenu: boolean;
  _snack = { 'flag': true, 'msg': '', type: '' };
  _alert = { 'flag': true, 'msg': '', type: '' };
  array = [{ "value": "", "caption": "" }];
  local_setting = { "counter": "", "counterdescription": "", "location": "","locationDescription":"","counterCode": "", "locationCode": "","bin": "","binCode": "","binDescription": "" }
  _confirm = this.getDefaultConfirm();
  _setting: RendererCallback = { execute() { } };
  _saveStatus = "";
  _savestatus_class = "";
  _util: ClientUtil = new ClientUtil();
  _old_counterSk = "0";

  constructor(private ics: RpIntercomService, private http: RpHttpService, private ref: RpReferences, private _router: Router, private title: Title) {
    this._showmenu = false;
    this.setKeyDown();
    ics.rpbean$.subscribe(x => {
      this._showmenu = ics.isMenuBar();
      this._confirm.isConfirmBox = false;
      if (x.t1 !== null && x.t1 == "rp-popup") {
        jQuery("#rootpopupsize").attr('class', 'modal-dialog modal-lg');
        jQuery("#rootpopuptitle").text(x.t2);
        jQuery("#rootpopupbody").load(x.t3);
        jQuery("#rootpopup").modal();
      } else if (x.t1 !== null && x.t1 == "rp-wait") {
        jQuery("#rootpopupsize").attr('class', 'modal-dialog modal-sm');
        jQuery("#rootpopuptitle").text("Please Wait");
        jQuery("#rootpopupbody").text(x.t2);
        jQuery("#rootpopup").modal();
      } else if (x.t1 !== null && x.t1 == "rp-error") {
        jQuery("#rootpopupsize").attr('class', 'modal-dialog modal-sm');
        jQuery("#rootpopuptitle").text("System Exception");
        jQuery("#rootpopupbody").text(x.t2);
        jQuery("#rootpopup").modal();
      } else if (x.t1 !== null && x.t1 == "rp-msg") {
        jQuery("#rootpopupsize").attr('class', 'modal-dialog modal-sm');
        jQuery("#rootpopuptitle").text(x.t2);
        jQuery("#rootpopupbody").text(x.t3);
        jQuery("#rootpopup").modal();
      } else if (x.t1 !== null && x.t1 == "rp-msg-off") {
        jQuery("#rootpopuptitle").text("");
        jQuery("#rootpopupbody").text("");
        jQuery("#rootpopup").modal('hide');
      } else if (x.t1 !== null && x.t1 == "rp-alert") {
        this._alert = { 'flag': false, 'msg': x.t3, 'type': "alert alert-" + x.t2 + " fade in" };
        setTimeout(() => this._alert.flag = true, 3000);
      } else if (x.t1 !== null && x.t1 == "rp-confirm") {
        this._confirm.isConfirmBox = true;
        this._confirm.callback = x.t4;
        jQuery("#confirm_popup_size").attr('class', 'modal-dialog modal-sm');
        jQuery("#confirm_popup_title").text(x.t2);
        jQuery("#confirm_popup_body").text(x.t3);
        jQuery("#confirm_popup").modal();
      } else if (x.t1 !== null && x.t1 == "rp-setting") {
        this._setting = x.t4;
        this._saveStatus = "";
        jQuery('#locmodel').modal('show');
        jQuery(document).ready(function () {
        jQuery("#locmodel").on('shown.bs.modal', function () {
            jQuery(this).find('#savloc').focus();
          });
        });             
    } else if (x.t1 != null && x.t1 == "rp-snack") {
        this._snack = { 'flag': false, 'msg': x.t3, 'type': x.t2 };
        this.callSnack();
      }
    });
    this.init();
  }
  init() {
    this.http.doGet('json/config.json?random=' + Math.random()).subscribe(
      data => {
        this.ics._title = data.title;
        this.ics._app = data.app;
        this.ics._appname = data.appname;
        this.ics._apiurl = data.apiurl;
        this.title.setTitle(this.ics._title);
      }, () => { }
    );
  }

  setKeyDown(){
    var _self = this;
    	jQuery(window).bind('keydown', function (event) {
				if (event.altKey && _self.ics.isMenuBar()) {
					if (String.fromCharCode(event.which).toLowerCase() == 'v') {
            _self._router.navigate(['/sale']);
          }
        }
      });
  }

  clickConfirm() {
    jQuery("#confirm_popup").modal("hide");
    this._confirm.callback.execute();
    this._confirm = this.getDefaultConfirm();
  }

  getDefaultConfirm() {
    let callback: RendererCallback = { execute() { } };
    return { 'isConfirmBox': false, 'callback': callback };
  }

  saveLocation() {
    if (this.local_setting.location != null && this.local_setting.counter != null && this.local_setting.bin != null) {
        
      let url: string = this.ics._apiurl + 'main/usecounter/';
      let json: any = { 'counterSK': this.local_setting.counter, 'status': '1','oldCounterSk':this._old_counterSk };
      if (this.local_setting !== null) {
        this.http.doPost(url, json).subscribe(
          data => {
            if (data.message === 'SUCCESS') {
                this._snack.msg= "Saved Local Setting Successfully.";
                this._snack.type="Success";
                this._old_counterSk = "0";
                this.callSnack();
            } else {   
                this._snack.msg= "Saving Fail.";
                this._snack.type="Warning";
                this.callSnack();
            }
          },
          () => { }
        );
      }
      this._setting.execute();
    } else {
       this._snack.msg= "Saving Fail.";
       this._snack.type="Warning";
       this.callSnack();
    }
  }

  callSnack(){
        jQuery("#snackbar").addClass("show");
        setTimeout(function () { jQuery("#snackbar").removeClass("show"); }, 3000);
  }
}
