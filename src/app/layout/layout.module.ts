import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { TopnavComponent } from '../components/topnav/topnav.component';
import { UserDashboardComponent } from './user/user-dashboard/user-dashboard.component';
import { FooterComponent } from '../components/footer/footer.component';
import { ScreenComponent } from '../components/screen/screen.component';
import { WriterDashboardComponent } from './user/writer-dashboard/writer-dashboard.component';


@NgModule({
  declarations: [
    LayoutComponent,
    TopnavComponent,
    ScreenComponent

  ],
  imports: [
    CommonModule,
    LayoutRoutingModule
  ]
})
export class LayoutModule { }
