import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Component, Input, Output, EventEmitter } from '@angular/core'; 
import { RpIntercomService} from '../framework/rp-intercom.service';
import { Subscription}   from 'rxjs/Subscription';

@Component({
    selector: 'rp-pager',
    template:`  
  <div id="{{rpId}}">
    <table><tr>
      <td>
        <nav>
          <ul class="pagination pagination-sm">
            <li class="page-item"><a class="page-link" (click)="goFirst()">First</a></li>
            <li class="page-item"><a class="page-link" (click)="goPrev()">Prev</a></li>
            <li class="page-item"><a class="page-link" (click)="goNext()">Next</a></li>
            <li class="page-item"><a class="page-link" (click)="goLast()">Last</a></li>        
          </ul>
        </nav>
      </td>
      <td> &nbsp;<span>{{_idata.start}} - {{_idata.end}} of {{rpTotalCount}}</span></td>
    </tr></table>
  </div>
    `,
})
export class Pager {
  subscription: Subscription;
  @Input() rpId: string = "";
  @Input() rpTotalCount: number = 0;
  @Input() rpCurrent: number = 0;
  @Output() rpChanged: any = new EventEmitter();

  _idata = {totalPage : 0, start : 0, end : 0 };

  constructor(private ics: RpIntercomService) {
    this.subscription = ics.rpbean$.subscribe(x => { });
    if (this.rpId == null || this.rpId == "") this.rpId = "myid";
    if (this.rpTotalCount == null || this.rpTotalCount < 0) this.rpTotalCount = 1;
    if (this.rpCurrent == null || this.rpCurrent < 0) this.rpCurrent = 1;
  }

  ngOnInit(){ this.calculatePaginate(); }

  ngOnChanges(changes){ this.calculatePaginate(); }

  calculatePaginate(){
    this._idata.totalPage = Math.ceil(this.rpTotalCount / this.ics._profile.n1);
    this._idata.start = (((this.rpCurrent - 1) * this.ics._profile.n1) + 1);
		this._idata.start = (this.rpTotalCount==0 ? 0 : this._idata.start);
		this._idata.end = (this._idata.start - 1) +  this.ics._profile.n1;
		this._idata.end = this._idata.start == 0 ? 0 : 	this._idata.end > this.rpTotalCount? this.rpTotalCount : 	this._idata.end;
  }

  goFirst(){
    if(this.rpCurrent != 1){ this.changePage(1); }
  }

  goPrev(){
    if(this.rpCurrent > 1) { this.changePage((this.rpCurrent - 1 )); }
  }

  goNext(){
    if(this.rpCurrent < this._idata.totalPage) { this.changePage(this.rpCurrent + 1); }
  }

  goLast(){
    if(this.rpCurrent != this._idata.totalPage && this._idata.totalPage != 0){ this.changePage(this._idata.totalPage); } 
  }
  
  changePage(p:number) {
    this.rpCurrent = p;
    this.calculatePaginate()
    var _json = {currentPage : this.rpCurrent};
    this.rpChanged.emit(_json);
  }
}

@NgModule({
  imports: [CommonModule, FormsModule],
  declarations: [Pager],
  exports: [Pager],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class PagerModule { }


