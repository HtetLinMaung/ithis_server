import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { APP_BASE_HREF } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { RpRootComponent } from './rp-root.component';
import { SystemModule } from './system/system.module';
import { PagerModule } from './util/pager.module';
import { RpLoginComponent } from './rp-login.component';
import { RpHttpService } from './framework/rp-http.service';
import { RpIntercomService } from './framework/rp-intercom.service';
import { RpMenuComponent } from './framework/rp-menu.component';
import { RpReferences } from './framework/rp-references';
import { ClientUtil} from './util/rp-client.util';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    SystemModule,
    RouterModule.forRoot([
      { path: '', redirectTo: '/login', pathMatch: 'full'}, 
      { path: 'login', component: RpLoginComponent }
    ])
  ],
  declarations: [
    RpRootComponent,
    RpLoginComponent,
    RpMenuComponent
  ],
  providers: [
    RpHttpService,
    RpIntercomService,
    RpReferences,
    ClientUtil,
    { provide: APP_BASE_HREF, useValue : '/' },
    { provide: LocationStrategy, useClass: HashLocationStrategy }
  ],
  schemas:[
    CUSTOM_ELEMENTS_SCHEMA
  ],
  bootstrap: [RpRootComponent]
})
export class AppModule {
}
