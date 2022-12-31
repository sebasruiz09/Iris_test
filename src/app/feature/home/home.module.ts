import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ListComponent } from './components/list/list.component';
import { TodoComponent } from './components/todo/todo.component';
import { SharedModule } from '../../shared/shared.module';
import { CardComponent } from './components/card/card.component';
import { MessagesService } from './services/messages.service';
import { CsvService } from './services/csv.service';

@NgModule({
  declarations: [HomeComponent, ListComponent, TodoComponent, CardComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ReactiveFormsModule,
    SharedModule,
    FontAwesomeModule,
  ],
  providers: [MessagesService, CsvService],
})
export class HomeModule {}
