import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductComponent } from './product.component';
import { HomeComponent } from './components/home/home.component';
import { AddComponent } from './components/add/add.component';
import { EditComponent } from './components/edit/edit.component';
import { AuthGuardService } from '../shared/services/auth-guard.service';
import { UsersComponent } from './components/users/users.component';
import { RoleGuardService } from '../shared/services/role-guard.service';
import { UserComponent } from './components/user/user.component';

const routes: Routes = [{
  path: '', component: ProductComponent, children: [
    { path: 'home', component: HomeComponent, canActivate: [AuthGuardService] },
    { path: 'add', component: AddComponent, canActivate: [AuthGuardService] },
    { path: 'edit/:id', component: EditComponent, canActivate: [AuthGuardService] },
    { path: 'users', component: UsersComponent, canActivate: [RoleGuardService] },
    { path: 'user/:id', component: UserComponent, canActivate: [RoleGuardService] },
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: '**', component: HomeComponent }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
