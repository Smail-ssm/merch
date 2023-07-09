import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { UserLayoutComponent } from './user-layout/user-layout.component';
import { RouterModule } from '@angular/router';
import { AuthentificationAdminComponent } from './authentification-admin/authentification-admin.component';
import { UserAuthentificationComponent } from './user-authentification/user-authentification.component';
import { RegisterUserComponent } from './register-user/register-user.component';

@NgModule({
  declarations: [AdminLayoutComponent, UserLayoutComponent, AuthentificationAdminComponent, UserAuthentificationComponent, RegisterUserComponent],
  imports: [CommonModule, RouterModule],
})
export class LayoutsModule {}
