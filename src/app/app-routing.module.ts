import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';



const routes: Routes = [

  // general
  {
    
    path: 'employee',
   loadChildren: './modules/general/persons-info/persons-info.module#PersonsInfoModule'
  },
  
  // {
  //   path: 'selection',
  //   loadChildren: './modules/trainee/traineeManagement/profile/add-profile-info/add-profile-info.module#AddProfileInfoModule'
  // },
  {
path:'previleges',
loadChildren: './modules/previleges/previleges.module#PrevilegesModule'
  },


  {
    path: 'leaveManagement',
    loadChildren: './modules/employee/leave-management/leave-management.module#LeaveManagementModule'
  },
  

]
@NgModule({
  imports: [
    RouterModule.forRoot(routes)
    
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
