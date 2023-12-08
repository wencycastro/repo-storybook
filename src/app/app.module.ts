import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from './layout/layout.module';
import { LoginModule } from './auth/login/login.module';
import { RegistrationModule } from './auth/registration/registration.module';
import { DashboardModule } from './layout/dashboard/dashboard.module';
import { ApprovedbooksModule } from './layout/admin/approvedbooks/approvedbooks.module';
import { PendingbooksModule } from './layout/admin/pendingbooks/pendingbooks.module';
import { UserviewModule } from './layout/users/userview/userview.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    LoginModule,
    RegistrationModule,
    DashboardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
