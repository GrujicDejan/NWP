import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddSkillComponent } from './skills/add-skill/add-skill.component';
import { SkillListComponent } from './skills/skill-list/skill-list.component';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';

const routes: Routes = [{ path: '', redirectTo: '/login', pathMatch: 'full' },
{ path: 'login', component: LoginComponent },
{ path: 'register', component: RegisterComponent },
{ path: 'product/list', component: SkillListComponent},
{ path: 'product/create', component: AddSkillComponent},
{ path: '**', component: RegisterComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }