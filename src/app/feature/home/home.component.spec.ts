import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home.component';
import { HeaderComponent } from '../../shared/components/header/header.component';
import { TodoComponent } from './components/todo/todo.component';
import { ListComponent } from './components/list/list.component';
import { MessagesService } from './services/messages.service';
import { CsvService } from './services/csv.service';
import { ThemeComponent } from '../../core/components/theme/theme.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFormsModule],
      declarations: [
        HomeComponent,
        HeaderComponent,
        TodoComponent,
        ListComponent,
        ThemeComponent,
      ],
      providers: [MessagesService, CsvService],
    }).compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create Home Component', () => {
    expect(component).toBeTruthy();
  });
});
