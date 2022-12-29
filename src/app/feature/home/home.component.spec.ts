import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeaderComponent } from 'src/app/shared/components/header/header.component';
import { HomeComponent } from './home.component';
import { TodoComponent } from './components/todo/todo.component';
import { ThemeComponent } from '../../core/components/theme/theme.component';

describe('TodoComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeComponent, HeaderComponent, TodoComponent, ThemeComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
