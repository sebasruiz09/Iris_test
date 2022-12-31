import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { MessagesService } from '../../services/messages.service';
import { CsvService } from '../../services/csv.service';
import { TodoComponent } from './todo.component';

describe('TodoComponent', () => {
  let component: TodoComponent;
  let fixture: ComponentFixture<TodoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFormsModule],
      declarations: [TodoComponent],
      providers: [MessagesService, CsvService],
    }).compileComponents();

    fixture = TestBed.createComponent(TodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create Todo Component', () => {
    expect(component).toBeTruthy();
  });

  it('invalid form', () => {
    const { todo } = component.todoForm.controls;
    const word: string = '';
    todo.setValue(word.trim());
    expect(component.todoForm.invalid).toBeTrue();
  });

  it('valid form', () => {
    const { todo } = component.todoForm.controls;
    todo.setValue('test');
    expect(component.todoForm.valid).toBeTrue();
  });
});
