import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';

const ANT_DESIGN_MODULES = [
  NzInputModule,
  NzButtonModule,
  NzIconModule,
  NzModalModule,
  NzToolTipModule,
];

@NgModule({
  imports: [CommonModule, ...ANT_DESIGN_MODULES],
  exports: [ANT_DESIGN_MODULES],
  declarations: [],
})
export class AntDesignModule {}
