import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileuserComponent } from './profileuser/profileuser.component';

const routes: Routes = [{ path: '', component: ProfileuserComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfileuserRoutingModule {}
