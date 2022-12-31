import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MessagesService } from '../../services/messages.service';
import { CsvService } from '../../services/csv.service';
import { TodoComponent } from './todo.component';
import { ReactiveFormsModule } from '@angular/forms';

describe('TodoComponent', () => {
  let component: TodoComponent;
  let fixture: ComponentFixture<TodoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports :[ReactiveFormsModule],
      declarations: [TodoComponent],
      providers: [MessagesService , CsvService],
    }).compileComponents();

    fixture = TestBed.createComponent(TodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
