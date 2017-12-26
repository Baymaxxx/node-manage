import { ProjectMonitorService } from './project-monitor.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ProjectMonitorComponent } from './project-monitor.component';
import { SharedModule } from '../../../shared/shared.module';

const routes: Routes = [
  { path: '', component: ProjectMonitorComponent }
];
@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes),
  ],
  declarations: [
    ProjectMonitorComponent
  ],
  providers: [ProjectMonitorService],
  exports: [
    RouterModule
  ]
})
export class ProjectMonitorModule { }
