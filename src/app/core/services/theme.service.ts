import { DOCUMENT } from '@angular/common';
import {
  Inject, Injectable, Renderer2, RendererFactory2,
} from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  theme$: BehaviorSubject<boolean>;

  currentTheme: string = 'light';

  private isDark: boolean = false;

  private renderer2!: Renderer2;

  constructor(
    @Inject(DOCUMENT) private document: Document,
    rendererFactory: RendererFactory2,
  ) {
    this.renderer2 = rendererFactory.createRenderer(null, null);
    const isDark = localStorage.getItem('theme');
    this.theme$ = new BehaviorSubject<boolean>(isDark === 'false');
    this.subscribeToChanges();
  }

  switchTheme(): void {
    this.theme$.next(!this.isDark);
  }

  private subscribeToChanges(): void {
    this.theme$.subscribe((value) => {
      localStorage.setItem('theme', String(value));
      this.isDark = value;
      (this.currentTheme = this.isDark ? 'Dark' : 'Light');
      this.changeBodyClass();
    });
  }

  private changeBodyClass(): void {
    this.renderer2.setAttribute(
      this.document.body,
      'class',
      this.isDark ? 'dark' : 'light',
    );
  }
}
