import { AuthleaveComponent } from './components/authleave/authleave.component';
import { RouterModule } from '@angular/router';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProjectStatusPipe } from './pipes/project-status.pipe';
import { SidebarComponent } from '../layout/sidebar/sidebar.component';
import { UserLogoutComponent } from '../routes/user/user-logout/user-logout.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { UserHeadComponent } from './components/user-head/user-head.component';

const APP_MODULE = [
  CommonModule,
  FormsModule,
  ReactiveFormsModule,
  RouterModule,
  HttpClientModule
];
const Componments = [
  SidebarComponent,
  UserLogoutComponent,
  ProjectStatusPipe,
  AuthleaveComponent,
  UserHeadComponent
];

@NgModule({
  imports: [
    ...APP_MODULE,
    NgZorroAntdModule.forRoot()
  ],
  declarations: [...Componments],
  exports: [
    NgZorroAntdModule,
    ...APP_MODULE,
    ...Componments
  ]
})
export class SharedModule { }
