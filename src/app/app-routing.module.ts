import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserLayoutComponent } from './layouts/user-layout/user-layout.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AuthentificationAdminComponent } from './layouts/authentification-admin/authentification-admin.component';
import { UserAuthentificationComponent } from './layouts/user-authentification/user-authentification.component';
import { RegisterUserComponent } from './layouts/register-user/register-user.component';

const routes: Routes = [
  {
    path: '',
    component: UserLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./views/user/homepage/homepage.module').then(
            (m) => m.HomepageModule
          ),
      },

      {
        path: 'profileuser',
        loadChildren: () =>
          import('./views/user/profileuser/profileuser.module').then(
            (m) => m.ProfileuserModule
          ),
      },
      {
        path: 'contact',
        loadChildren: () =>
          import('./views/user/contact/contact.module').then(
            (m) => m.ContactModule
          ),
      },
    ],
  },
  {
    path: 'admin',
    component: AdminLayoutComponent,
    children: [
      {
        path: 'dashbord',
        loadChildren: () =>
          import('./views/admin/dashbord/dashbord.module').then(
            (m) => m.DashbordModule
          ),
      },
      {
        path: 'contrat',
        loadChildren: () =>
          import('./views/admin/contrat/contrat.module').then(
            (m) => m.ContratModule
          ),
      },
      {
        path: 'profileadmin',
        loadChildren: () =>
          import('./views/admin/profile-admin/profile-admin.module').then(
            (m) => m.ProfileAdminModule
          ),
      },
    ],
  },
  { path: 'admin/authentification', component: AuthentificationAdminComponent },
  { path: 'authentification', component: UserAuthentificationComponent },
  { path: 'insecription', component: RegisterUserComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
