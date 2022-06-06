import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guard/auth.guard';
import { AddMovieComponent } from './movieinfo/add-movie/add-movie.component';
import { MovieListComponent } from './movieinfo/movie-list/movie-list.component';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';

const routes: Routes = [
  {path:'', redirectTo:'login', pathMatch:'full'},
  {path:'login', component: LoginComponent},
  {path:'register', component: RegisterComponent},
  {path:'movieinfo/add', component: AddMovieComponent, canActivate: [AuthGuard]},
  {path:'movieinfo/list', component: MovieListComponent, canActivate: [AuthGuard]},
  {path:'**', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
