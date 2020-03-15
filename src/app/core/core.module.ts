import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectLayoutComponent } from './layouts/project-layout/project-layout.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    ProjectLayoutComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class CoreModule { }
