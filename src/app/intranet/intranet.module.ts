import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IntranetRoutingModule } from './intranet-routing.module';
import { IntranetLayoutComponent } from './intranet-layout/intranet-layout.component';
import { IndexComponent } from './pages/index/index.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { FooterComponent } from './components/footer/footer.component';
import { PageHeaderComponent } from './components/page-header/page-header.component';
import { AboutComponent } from './pages/about/about.component';


@NgModule({
  declarations: [IntranetLayoutComponent, IndexComponent, NavBarComponent, SideBarComponent, FooterComponent, PageHeaderComponent, AboutComponent],
  imports: [
    CommonModule,
    IntranetRoutingModule
  ]
})
export class IntranetModule { }
