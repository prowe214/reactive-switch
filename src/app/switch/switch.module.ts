import { SwitchComponent } from './switch.component';
import { NgModule, forwardRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [SwitchComponent],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SwitchComponent),
      multi: true
    }
  ],
  declarations: [SwitchComponent]
})
export class SwitchModule { }
