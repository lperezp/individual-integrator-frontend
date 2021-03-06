import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { UserLayoutComponent } from './layout/user-layout/user-layout.component';
import { UserHeaderComponent } from './components/user/user-header/user-header.component';
import { AdminLayoutComponent } from './layout/admin-layout/admin-layout.component';
import { AuthLayoutComponent } from './layout/auth-layout/auth-layout.component';
import { AdminHeaderComponent } from './components/admin/admin-header/admin-header.component';

@NgModule({
  declarations: [UserLayoutComponent, UserHeaderComponent, AdminLayoutComponent, AuthLayoutComponent, AdminHeaderComponent],
  imports: [CommonModule, RouterModule],
})
export class CoreModule {}
