import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { MessagesService } from '../../services/messages.service';
import { CsvService } from '../../services/csv.service';
import { TodoComponent } from './todo.component';
import { HtmlParser } from '@angular/compiler';
import { By } from '@angular/platform-browser';

describe('TodoComponent', () => {
  let component: TodoComponent;
  let fixture: ComponentFixture<TodoComponent>;
  let createButton : HTMLButtonElement

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFormsModule],
      declarations: [TodoComponent],
      providers: [MessagesService, CsvService],
    }).compileComponents();

    fixture = TestBed.createComponent(TodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    createButton = fixture.debugElement.query(By.css('#sendButton')).nativeElement;
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

  it('should check create todo button is disabled initially',(async() => {
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      debugger;
      fixture.detectChanges();
      expect(createButton.disabled).toBe(true);
     });
  }));
    
});
