import { Component } from "@angular/core";
import { RpIntercomService } from "../framework/rp-intercom.service";
import { RpHttpService } from "../framework/rp-http.service";
import { Router } from "@angular/router";

@Component({
 selector:'frm-stockgroup',
 template :
           ` 
           <div class="container col-xs-12 col-sm-12 col-md-12" style="padding: 0px 5%;">
      <div class="row clearfix"> 
        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12  column col-sm-offset-0 col-md-offset-0 col-lg-offset-0"> 
        <form class="form-horizontal" ngNoForm>
        <legend>Stock Group</legend>
           <div class="form-group"> 
              <div class="row  col-md-12"> 
                <button class="btn btn-primary" type="button" (click)="onList()" >List</button>  
                <button class="btn btn-primary"  id="new" type="button"  >New</button>      
                <button class="btn btn-primary"  id="save" type="button" (click)="onSave()">Save</button> 
                <button class="btn btn-danger"  id="delete" type="button">Delete</button>
             
           </div> 
           </div> 
           <div class="form-group">
                      <div>
                            <label class="col-md-2">Code</label>
                      </div>
                      <div class="col-md-4">
                            <input type="text"  [(ngModel)]="_obj.t1" class="form-control"   autofocus>
                      </div>
          </div>
          <div class="form-group">
                      <div>
                            <label class="col-md-2">Description</label>
                      </div>
                      <div class="col-md-4">
                            <input type="text" [(ngModel)]="_obj.t2" class="form-control" autofocus >
                      </div>                      
            </div>   
            </form>
            </div>
            </div>
            </div>      
           `
})
export class FrmStockGroupComponent{
    _obj = this.getDefaultObj();
    constructor(private ics: RpIntercomService,private http: RpHttpService,private router:Router){

    }
    onSave(){
        let url: string = this.ics._apiurl + 'stockgroup/save';
        let json: any = this._obj;      
       
        this._obj.userSyskey = this.ics._profile.userSk; 
        this._obj.userId = this.ics._profile.userid;
        this._obj.userName = this.ics._profile.userName;
        this._obj.isParentGroup = +this._obj.isParentGroup;
  
        
          this.http.doPost(url, this._obj).subscribe(
            data => {
              if (data.message === "SUCCESS") {
                //this.showMessage(this._util.MSG_TYPE.INFO, 'Saved Successfully.');
                //this.goNew();
              } else if (data.message === "EXIST") {
                //this.showMessage(this._util.MSG_TYPE.WARN, 'Code Already Exists.');
              } else {
                //this.showMessage(this._util.MSG_TYPE.WARN, 'Saving Fail.');
              }
            },
            error => {
              //this.showMessage(this._util.MSG_TYPE.WARN, 'Saving Fail.');
            },
            () => { }
          );       
    }

    getDefaultObj() {
        return { "syskey": "0", "userId": "", "userName": "", "t1": "", "t2": "", "t3": "", "t4": "", "stockSyskey": "0", "cogsSyskey": "0", "saleSyskey": "0", "purchaseSyskey": "0", "srSyskey": "0", "prSyskey": "0", "userSyskey": "0", "costingMethod": 0, "bath": 0, "itemtype": "0", "dimension": "0","isParentGroup":0 };
        }

        onList(){
            this.router.navigate(['/stockgrouplist']);

        }
}