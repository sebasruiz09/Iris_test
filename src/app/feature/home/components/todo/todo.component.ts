import { Component } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { debounceTime } from 'rxjs';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
})
export class TodoComponent {
  constructor(library : FaIconLibrary) {
    library.addIcons(faPlus);
    this.buildForm();
  }

  public todoForm!: FormGroup;

  private buildForm() {
    this.todoForm = new FormGroup({
      todo: new FormControl('', [Validators.required]),
    });

    this.todoForm.valueChanges.pipe(debounceTime(1000)).subscribe((value) => {
      console.log(value);
    });
  }
}
