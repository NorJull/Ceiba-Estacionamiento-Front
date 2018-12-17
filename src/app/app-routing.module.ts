import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { RegisterComponent } from './components/register/register.component';
import { CheckOutComponent } from './components/check-out/check-out.component';

const routes: Routes = [
{ path: 'home', component: HomeComponent },
{ path: 'register', component: RegisterComponent },
{ path: 'checkout', component: CheckOutComponent },
{ path: '**', pathMatch: 'full', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
