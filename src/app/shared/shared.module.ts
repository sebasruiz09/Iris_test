import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { CoreModule } from '../core/core.module';

@NgModule({
  declarations: [FooterComponent, HeaderComponent],
  imports: [CommonModule, CoreModule],
  exports: [FooterComponent, HeaderComponent],
})
export class SharedModule {}
