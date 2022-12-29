import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TodoComponent } from './todo.component';

describe('TodoComponent', () => {
  let component: TodoComponent;
  let fixture: ComponentFixture<TodoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  //! happy path
  it('valid Form', () => {
    const todo = component.todoForm.controls['todo'];
    todo.setValue('any value');
    expect(component.todoForm.valid).toBeTrue();
  })

  it('invalid Form'), () => {
    const todo = component.todoForm.controls['todo'];
    const word: string = '';
    todo.setValue(word.trim);
    expect(component.todoForm.invalid).toBeTrue();
  }


});
