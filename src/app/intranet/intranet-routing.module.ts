import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IntranetLayoutComponent } from './intranet-layout/intranet-layout.component';
import { IndexComponent } from './pages/index/index.component';
import { AboutComponent } from './pages/about/about.component';


const routes: Routes = [
  {
    path: '',
    component: IntranetLayoutComponent,
    children: [
      { path: '', component: IndexComponent },
      { path: 'about', component: AboutComponent },
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class IntranetRoutingModule { }
