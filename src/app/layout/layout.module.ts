import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { TopnavComponent } from '../components/topnav/topnav.component';
import { SidenavComponent } from '../components/sidenav/sidenav.component';
import { ScreenComponent } from '../components/screen/screen.component';
import { CardComponent } from '../components/card/card.component';
import { ComponentsModule } from '../components/component.module';
import { UserlistComponent } from './admin/userlist/userlist.component';
import { AdminprofileComponent } from './admin/adminprofile/adminprofile.component';
import { UserviewComponent } from './users/userview/userview.component';


@NgModule({
  declarations: [
    LayoutComponent,
    TopnavComponent,
    SidenavComponent,
    ScreenComponent,
    
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    ComponentsModule
  ]
})
export class LayoutModule { }
