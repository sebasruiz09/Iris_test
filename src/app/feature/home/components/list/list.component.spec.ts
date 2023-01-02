import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListComponent } from './list.component';
import { MessagesService } from '../../services/messages.service';
import { CsvService } from '../../services/csv.service';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('ListComponent', () => {
  let component: ListComponent;
  let fixture: ComponentFixture<ListComponent>;
  let compiled: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListComponent],
      providers: [MessagesService, CsvService],
    }).compileComponents();

    fixture = TestBed.createComponent(ListComponent);
    compiled = fixture.debugElement;
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('create List Component', () => {
    expect(component).toBeTruthy();
  });

  
});
