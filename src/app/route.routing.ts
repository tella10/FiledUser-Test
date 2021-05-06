import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateUserComponent } from './user/create-user/create-user.component';
import { ListUserComponent } from './user/list-user/list-user.component';

export const routes: Routes = [
  { path : 'Create' , component : CreateUserComponent },
  { path : 'Users' , component : ListUserComponent },
  { path : '' , redirectTo : '/Users' , pathMatch : 'full' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
