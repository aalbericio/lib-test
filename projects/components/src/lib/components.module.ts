import { NgModule } from '@angular/core';
import { ComponentsComponent } from './components.component';
import { SharedModule } from '@shared-components';

@NgModule({
  declarations: [ComponentsComponent],
  imports: [ SharedModule ],
  exports: [ComponentsComponent]
})
export class ComponentsModule { }
