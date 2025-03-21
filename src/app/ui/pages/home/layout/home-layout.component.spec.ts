import { CommonModule } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeLayoutComponent } from './home-layout.component';
import { ThemeUiService } from '@core/services/theme/theme-ui.service';
import { ThemeMode } from '@interfaces/theme-ui.interface';
import { ButtonModule } from 'primeng/button';

describe('HomeLayoutComponent', () => {
  let component: HomeLayoutComponent;
  let fixture: ComponentFixture<HomeLayoutComponent>;
  let themeUiService: ThemeUiService;

  const themeUiServiceMock = {
    themeMode: jest.fn(),
    toggleTheme: jest.fn(),
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeLayoutComponent, CommonModule, ButtonModule],
      providers: [{ provide: ThemeUiService, useValue: themeUiServiceMock }],
    }).compileComponents();

    fixture = TestBed.createComponent(HomeLayoutComponent);
    component = fixture.componentInstance;
    themeUiService = TestBed.inject(ThemeUiService);
    fixture.detectChanges();
  });

  beforeEach(() => {
    jest.resetAllMocks();
  });

  test('should create', () => {
    expect(component).toBeTruthy();
  });
});
