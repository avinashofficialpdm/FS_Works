import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { GetComponent } from './get/get.component';
import { GetDataService } from './getData.service';
import { MyComponentComponent } from './my-component/my-component.component';

const routes: Routes = [
  {
    path:"",
    component:MyComponentComponent
  },
  {
    path:'list',
    component:GetComponent,
    resolve:{studentList:GetDataService}
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
