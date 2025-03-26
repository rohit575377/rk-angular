import { Routes } from '@angular/router';
import { LayoutComponent } from './main/layouts/layout.component';
import { LayoutComponent as AdminLayoutComponent } from './admin/layouts/layout.component';
import { HomeComponent } from './main/pages/home/home.component';
import { DashboardComponent } from './admin/pages/dashboard/dashboard.component';
import { AboutComponent } from './main/pages/about/about.component';
import { ContactComponent } from './main/pages/contact/contact.component';
import { UserAddComponent } from './admin/pages/user-add/user-add.component';
import { UserListComponent } from './admin/pages/users-list/user-list.component';
import { LoginComponent } from './main/pages/login/login.component';
import { RegisterComponent } from './main/pages/register/register.component';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      { path: 'about', component: AboutComponent },
      { path: 'contact', component: ContactComponent },
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent },
    ]
  },
  {
    path: 'admin',
    component: AdminLayoutComponent,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'user-add', component: UserAddComponent },
      { path: 'users-list', component: UserListComponent },
    ]
  },
];

