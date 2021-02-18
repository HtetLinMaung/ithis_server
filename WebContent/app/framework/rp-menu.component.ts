import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { RpIntercomService } from './rp-intercom.service';
import { Subscription } from 'rxjs/Subscription';
import { enableProdMode } from '@angular/core';
import { RendererCallback } from '../util/interfaces';
import { ClientUtil } from '../util/rp-client.util';
declare var jQuery: any;
enableProdMode();
@Component({
  selector: 'rp-menu',
  template: `
   <nav class="navbar-fixed-top" style="background-color: #3b5998;">
      <div class="container col-md-12">
      
            <div class="navbar-header">
              <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
              </button>
            <a class="navbar-brand" style="color:#ffffff" [routerLink]="[ics._profile.logoLink]">{{ics._appname}}</a> 
          </div>
      
          <div id="navbar" class="navbar-collapse collapse">
              <ul *ngIf="_profile.menus!=null" class="nav navbar-nav">
                <li *ngFor="let item of _profile.menus;" [class]="item!=null&&item.menuItem==''?'dropdown':''">
                  <a (click)="clk()"  *ngIf="item!=null && item.menuItem!='' && item.menuItem!=null"  [routerLink]="[item.menuItem]">{{item.caption}}</a> 
                  <a  *ngIf="item!=null && item.menuItem=='' && item.menuItem!=null"  href="#" class="" data-toggle="dropdown" >{{item.caption}}<span class="caret"></span></a> 
        
                  <ul *ngIf="item!=null && item.menuItems!=null" class="dropdown-menu">
                      <li *ngFor="let subitem of item.menuItems;"  [class]="subitem!=null && subitem.menuItem==='' ?'dropdown dropdown-submenu':''">
                          <a (click)="clk()" *ngIf="subitem!=null && subitem.menuItem!='' && subitem.menuItem!=null && subitem.menuItem !== '/localsetting'" [routerLink]="[subitem.menuItem]" class ="ex1">{{subitem.caption}}</a>
                          <a (click)="clk();localSetting()" *ngIf="subitem!=null && subitem.menuItem!='' && subitem.menuItem!=null && subitem.menuItem == '/localsetting'" class ="ex1">{{subitem.caption}}</a>
                          <a  *ngIf="subitem!=null && subitem.menuItem=='' && subitem.menuItem!=null && subitem.menuItems!=null "  href="#" class="dropdown-toggle" data-toggle="dropdown" >{{subitem.caption}}</a> 
                          <ul *ngIf="subitem!=null && subitem.menuItems!=null" id="sub-class" class="dropdown-menu">
                              <li *ngFor="let subsubitem of subitem.menuItems;" >
                                  <a (click)="clk()" *ngIf="subsubitem!=null && subsubitem.menuItem!='' && subsubitem.menuItem!=null" [routerLink]="[subsubitem.menuItem]" class ="ex1">{{subsubitem.caption}}</a>
                              </li> 
                          </ul>
                      </li> 
                  </ul>
                </li>  
              </ul>
              
              <div  *ngIf="_right" class=" navbar-right">
                <!--<input (keyup.enter)="cmd();clk();" [(ngModel)]="_cmd" *ngIf="_profile.commandCenter!='false'" placeholder=" Search"  type="text" class="nav navbar-nav " style="margin-top: 15px;margin-left: 0px;margin-right: 5px; width:180px;">-->
                <ul *ngIf="_profile.rightMenus!=null" class="nav navbar-nav">
                  <li *ngFor="let item of _profile.rightMenus;" [class]="item!=null&&item.menuItem==''?'dropdown':''">
                      <a *ngIf="item!=null && item.menuItem=='' " style="cursor:default;">{{item.caption}}</a>
                      <a (click)="clk()"  *ngIf="item!=null && item.menuItem!='' && item.menuItem!=null"  [routerLink]="[item.menuItem]">{{item.caption}}</a>
                      <a *ngIf="item!=null && item.menuItem=='' && item.menuItem==null && item.caption!='System'"  href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="true">{{item.caption}} <span class="caret"></span></a>                     
                      <a *ngIf="item!=null && item.menuItem=='' && item.menuItem!=null && item.caption=='System'"  href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="true"><span class="glyphicon glyphicon-cog"></span><span class="caret"></span></a>
                      <ul *ngIf="item!=null && item.menuItems!=null" class="dropdown-menu">
                          <li *ngFor="let subitem of item.menuItems;" ><a (click)="clk()" *ngIf="subitem!=null && subitem.menuItem!='' && subitem.menuItem!=undefined && subitem.menuItem!=null" [routerLink]="[subitem.menuItem]">{{subitem.caption}}</a></li> 
                      </ul>
                   </li>  
                 </ul>
               </div>
             </div>
      </div>
    </nav>    
  `,
  styleUrls: ['css/menu.css']
})
export class RpMenuComponent {
  subscription: Subscription;
  _right = true;
  _cmd = "";
  _util: ClientUtil = new ClientUtil();
  _profile = {
    "userName": "?",
    "logoText": "AG2",
    "logoLink": "/frm000",
    "role": 100,
    "commandCenter": "false",
    "menus": [{ "menuItem": "Menu01", "caption": "Menu 01" },
    { "menuItem": "Menu02", "caption": "Menu 02" },
    { "menuItem": "Menu03", "caption": "Menu 03" },
    {
      "menuItem": "", "caption": "Menu Group",
      "menuItems":
      [
        { "menuItem": "Menu01", "caption": "Menu 001" },
        { "menuItem": "Menu02", "caption": "Menu 002" },
        { "menuItem": "Menu03", "caption": "Menu 003" },
        { "menuItem": "Menu04", "caption": "Menu 004" },
        { "menuItem": "Menu05", "caption": "Menu 005" },
        { "menuItem": "Menu06", "caption": "Menu 006" },
        { "menuItem": "Menu07", "caption": "Menu 007" }
      ]
    }
    ],
    "rightMenus": [{ "menuItem": "Menu01", "caption": "Menu 01" },
    { "menuItem": "Menu02", "caption": "Menu 02" },
    { "menuItem": "Menu03", "caption": "Menu 03" },
    {
      "menuItem": "", "caption": "Menu Group",
      "menuItems":
      [{ "menuItem": "Menu01", "caption": "Menu 001" },
      { "menuItem": "Menu02", "caption": "Menu 002" },
      { "menuItem": "Menu03", "caption": "Menu 003" }]
    }
    ]
  };

  constructor(private ics: RpIntercomService, private _router: Router) {
    this._profile = ics._profile;
    this.subscription = ics.rpbean$.subscribe(x => { this._profile = ics._profile; });
  }

  ngOnInit() {
    jQuery(document).ready(function () {
      jQuery('ul.dropdown-menu [data-toggle=dropdown]').on('click', function (event) {
        event.preventDefault();
        event.stopPropagation();
        jQuery(this).parent().siblings().removeClass('open');
        jQuery(this).parent().toggleClass('open');
      });
    });

    jQuery(document).click(function (e) {
      if (!jQuery(e.target).is('a')) {
        jQuery('.collapse').collapse('hide');
      }
    });
  }

  cmd() {
    this._router.navigate(['/command', this._cmd]);
  }

  clk() {
    jQuery('.collapse').collapse('hide');
  }

  localSetting() {
    var _self = this;
    let callback: RendererCallback = { execute() { } };
    this.ics.sendBean({ t1: "rp-setting", t4: callback });
  }
}