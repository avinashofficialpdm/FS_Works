import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Component1Component } from './components/component1/component1.component';
import { Component2Component } from './components/component2/component2.component';
import { HomeComponent } from './components/home/home.component';
import { AuthGuard } from './guards/auth.guard';
import { RoleGuard } from './guards/role.guard';

const routes: Routes = [
  {
    path:'com1',
    component:Component1Component,
    canActivate:[AuthGuard,RoleGuard],
    data:{
      expectedRoles:["admin"]
    }
  },
  {
    path:'com2',
    component:Component2Component,
    canActivate:[AuthGuard,RoleGuard],
    data:{
      expectedRoles:['student']
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
