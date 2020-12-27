import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ListItemComponent } from './list-item.component';

@NgModule({
  imports: [CommonModule],
  declarations: [ListItemComponent],
  exports: [ListItemComponent],
})
export class DemoPostUiListItemModule {}
