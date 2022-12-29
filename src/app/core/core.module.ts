import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeService } from './services/theme.service';
import { ThemeComponent } from './components/theme/theme.component';

@NgModule({
  declarations: [ThemeComponent],
  imports: [CommonModule],
  providers: [ThemeService],
  exports: [ThemeComponent],
})
export class CoreModule {}
