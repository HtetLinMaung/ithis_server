System.register(['@angular/core', '@angular/router', './rp-intercom.service', '../util/rp-client.util'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, rp_intercom_service_1, core_2, rp_client_util_1;
    var RpMenuComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
                core_2 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (rp_intercom_service_1_1) {
                rp_intercom_service_1 = rp_intercom_service_1_1;
            },
            function (rp_client_util_1_1) {
                rp_client_util_1 = rp_client_util_1_1;
            }],
        execute: function() {
            core_2.enableProdMode();
            RpMenuComponent = (function () {
                function RpMenuComponent(ics, _router) {
                    var _this = this;
                    this.ics = ics;
                    this._router = _router;
                    this._right = true;
                    this._cmd = "";
                    this._util = new rp_client_util_1.ClientUtil();
                    this._profile = {
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
                                "menuItems": [
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
                                "menuItems": [{ "menuItem": "Menu01", "caption": "Menu 001" },
                                    { "menuItem": "Menu02", "caption": "Menu 002" },
                                    { "menuItem": "Menu03", "caption": "Menu 003" }]
                            }
                        ]
                    };
                    this._profile = ics._profile;
                    this.subscription = ics.rpbean$.subscribe(function (x) { _this._profile = ics._profile; });
                }
                RpMenuComponent.prototype.ngOnInit = function () {
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
                };
                RpMenuComponent.prototype.cmd = function () {
                    this._router.navigate(['/command', this._cmd]);
                };
                RpMenuComponent.prototype.clk = function () {
                    jQuery('.collapse').collapse('hide');
                };
                RpMenuComponent.prototype.localSetting = function () {
                    var _self = this;
                    var callback = { execute: function () { } };
                    this.ics.sendBean({ t1: "rp-setting", t4: callback });
                };
                RpMenuComponent = __decorate([
                    core_1.Component({
                        selector: 'rp-menu',
                        template: "\n   <nav class=\"navbar-fixed-top\" style=\"background-color: #3b5998;\">\n      <div class=\"container col-md-12\">\n      \n            <div class=\"navbar-header\">\n              <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#navbar\" aria-expanded=\"false\" aria-controls=\"navbar\">\n                <span class=\"icon-bar\"></span>\n                <span class=\"icon-bar\"></span>\n                <span class=\"icon-bar\"></span>\n              </button>\n            <a class=\"navbar-brand\" style=\"color:#ffffff\" [routerLink]=\"[ics._profile.logoLink]\">{{ics._appname}}</a> \n          </div>\n      \n          <div id=\"navbar\" class=\"navbar-collapse collapse\">\n              <ul *ngIf=\"_profile.menus!=null\" class=\"nav navbar-nav\">\n                <li *ngFor=\"let item of _profile.menus;\" [class]=\"item!=null&&item.menuItem==''?'dropdown':''\">\n                  <a (click)=\"clk()\"  *ngIf=\"item!=null && item.menuItem!='' && item.menuItem!=null\"  [routerLink]=\"[item.menuItem]\">{{item.caption}}</a> \n                  <a  *ngIf=\"item!=null && item.menuItem=='' && item.menuItem!=null\"  href=\"#\" class=\"\" data-toggle=\"dropdown\" >{{item.caption}}<span class=\"caret\"></span></a> \n        \n                  <ul *ngIf=\"item!=null && item.menuItems!=null\" class=\"dropdown-menu\">\n                      <li *ngFor=\"let subitem of item.menuItems;\"  [class]=\"subitem!=null && subitem.menuItem==='' ?'dropdown dropdown-submenu':''\">\n                          <a (click)=\"clk()\" *ngIf=\"subitem!=null && subitem.menuItem!='' && subitem.menuItem!=null && subitem.menuItem !== '/localsetting'\" [routerLink]=\"[subitem.menuItem]\" class =\"ex1\">{{subitem.caption}}</a>\n                          <a (click)=\"clk();localSetting()\" *ngIf=\"subitem!=null && subitem.menuItem!='' && subitem.menuItem!=null && subitem.menuItem == '/localsetting'\" class =\"ex1\">{{subitem.caption}}</a>\n                          <a  *ngIf=\"subitem!=null && subitem.menuItem=='' && subitem.menuItem!=null && subitem.menuItems!=null \"  href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" >{{subitem.caption}}</a> \n                          <ul *ngIf=\"subitem!=null && subitem.menuItems!=null\" id=\"sub-class\" class=\"dropdown-menu\">\n                              <li *ngFor=\"let subsubitem of subitem.menuItems;\" >\n                                  <a (click)=\"clk()\" *ngIf=\"subsubitem!=null && subsubitem.menuItem!='' && subsubitem.menuItem!=null\" [routerLink]=\"[subsubitem.menuItem]\" class =\"ex1\">{{subsubitem.caption}}</a>\n                              </li> \n                          </ul>\n                      </li> \n                  </ul>\n                </li>  \n              </ul>\n              \n              <div  *ngIf=\"_right\" class=\" navbar-right\">\n                <!--<input (keyup.enter)=\"cmd();clk();\" [(ngModel)]=\"_cmd\" *ngIf=\"_profile.commandCenter!='false'\" placeholder=\" Search\"  type=\"text\" class=\"nav navbar-nav \" style=\"margin-top: 15px;margin-left: 0px;margin-right: 5px; width:180px;\">-->\n                <ul *ngIf=\"_profile.rightMenus!=null\" class=\"nav navbar-nav\">\n                  <li *ngFor=\"let item of _profile.rightMenus;\" [class]=\"item!=null&&item.menuItem==''?'dropdown':''\">\n                      <a *ngIf=\"item!=null && item.menuItem=='' \" style=\"cursor:default;\">{{item.caption}}</a>\n                      <a (click)=\"clk()\"  *ngIf=\"item!=null && item.menuItem!='' && item.menuItem!=null\"  [routerLink]=\"[item.menuItem]\">{{item.caption}}</a>\n                      <a *ngIf=\"item!=null && item.menuItem=='' && item.menuItem==null && item.caption!='System'\"  href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"true\">{{item.caption}} <span class=\"caret\"></span></a>                     \n                      <a *ngIf=\"item!=null && item.menuItem=='' && item.menuItem!=null && item.caption=='System'\"  href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"true\"><span class=\"glyphicon glyphicon-cog\"></span><span class=\"caret\"></span></a>\n                      <ul *ngIf=\"item!=null && item.menuItems!=null\" class=\"dropdown-menu\">\n                          <li *ngFor=\"let subitem of item.menuItems;\" ><a (click)=\"clk()\" *ngIf=\"subitem!=null && subitem.menuItem!='' && subitem.menuItem!=undefined && subitem.menuItem!=null\" [routerLink]=\"[subitem.menuItem]\">{{subitem.caption}}</a></li> \n                      </ul>\n                   </li>  \n                 </ul>\n               </div>\n             </div>\n      </div>\n    </nav>    \n  ",
                        styleUrls: ['css/menu.css']
                    }), 
                    __metadata('design:paramtypes', [rp_intercom_service_1.RpIntercomService, router_1.Router])
                ], RpMenuComponent);
                return RpMenuComponent;
            }());
            exports_1("RpMenuComponent", RpMenuComponent);
        }
    }
});
//# sourceMappingURL=rp-menu.component.js.map