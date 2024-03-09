import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { StudentComponent } from './student/student.component';

const routes: Routes = [
  {path: 'about-us', component:AboutUsComponent},
  {path: 'student', component:StudentComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PortfolioRoutingModule { }
