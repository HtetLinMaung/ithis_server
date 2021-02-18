System.register(['@angular/core', '@angular/common', '@angular/platform-browser', '@angular/router', '@angular/forms', '@angular/http', './rp-root.component', './system/system.module', './rp-login.component', './framework/rp-http.service', './framework/rp-intercom.service', './framework/rp-menu.component', './framework/rp-references', './util/rp-client.util'], function(exports_1, context_1) {
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
    var core_1, common_1, platform_browser_1, router_1, forms_1, http_1, common_2, rp_root_component_1, system_module_1, rp_login_component_1, rp_http_service_1, rp_intercom_service_1, rp_menu_component_1, rp_references_1, rp_client_util_1;
    var AppModule;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
                common_2 = common_1_1;
            },
            function (platform_browser_1_1) {
                platform_browser_1 = platform_browser_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (forms_1_1) {
                forms_1 = forms_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (rp_root_component_1_1) {
                rp_root_component_1 = rp_root_component_1_1;
            },
            function (system_module_1_1) {
                system_module_1 = system_module_1_1;
            },
            function (rp_login_component_1_1) {
                rp_login_component_1 = rp_login_component_1_1;
            },
            function (rp_http_service_1_1) {
                rp_http_service_1 = rp_http_service_1_1;
            },
            function (rp_intercom_service_1_1) {
                rp_intercom_service_1 = rp_intercom_service_1_1;
            },
            function (rp_menu_component_1_1) {
                rp_menu_component_1 = rp_menu_component_1_1;
            },
            function (rp_references_1_1) {
                rp_references_1 = rp_references_1_1;
            },
            function (rp_client_util_1_1) {
                rp_client_util_1 = rp_client_util_1_1;
            }],
        execute: function() {
            AppModule = (function () {
                function AppModule() {
                }
                AppModule = __decorate([
                    core_1.NgModule({
                        imports: [
                            platform_browser_1.BrowserModule,
                            forms_1.FormsModule,
                            http_1.HttpModule,
                            system_module_1.SystemModule,
                            router_1.RouterModule.forRoot([
                                { path: '', redirectTo: '/login', pathMatch: 'full' },
                                { path: 'login', component: rp_login_component_1.RpLoginComponent }
                            ])
                        ],
                        declarations: [
                            rp_root_component_1.RpRootComponent,
                            rp_login_component_1.RpLoginComponent,
                            rp_menu_component_1.RpMenuComponent
                        ],
                        providers: [
                            rp_http_service_1.RpHttpService,
                            rp_intercom_service_1.RpIntercomService,
                            rp_references_1.RpReferences,
                            rp_client_util_1.ClientUtil,
                            { provide: common_1.APP_BASE_HREF, useValue: '/' },
                            { provide: common_2.LocationStrategy, useClass: common_2.HashLocationStrategy }
                        ],
                        schemas: [
                            core_1.CUSTOM_ELEMENTS_SCHEMA
                        ],
                        bootstrap: [rp_root_component_1.RpRootComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppModule);
                return AppModule;
            }());
            exports_1("AppModule", AppModule);
        }
    }
});
//# sourceMappingURL=app.module.js.map