import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  afterRenderEffect,
  signal,
  viewChild,
} from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { BRAND, NAV_LINKS } from '../../../data/site.data';
import { BrandMarkComponent } from '../../../shared/components/brand-mark/brand-mark.component';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive, BrandMarkComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[class.is-scrolled]': 'scrolled()',
    '[class.is-open]': 'menuOpen()',
    '(window:scroll)': 'onScroll()',
    '(document:keydown.escape)': 'closeMenu(true)',
  },
})
export class NavbarComponent {
  protected readonly brand = BRAND;
  protected readonly links = NAV_LINKS;

  protected readonly menuOpen = signal(false);
  protected readonly scrolled = signal(false);

  private readonly toggleButton = viewChild.required<ElementRef<HTMLButtonElement>>('toggle');
  private readonly firstDrawerLink = viewChild<ElementRef<HTMLAnchorElement>>('firstLink');

  constructor() {
    // Move focus into the drawer when it opens.
    afterRenderEffect(() => {
      if (this.menuOpen()) this.firstDrawerLink()?.nativeElement.focus();
    });
  }

  protected onScroll(): void {
    this.scrolled.set(window.scrollY > 8);
  }

  protected toggleMenu(): void {
    this.menuOpen.update((open) => !open);
  }

  protected closeMenu(restoreFocus = false): void {
    if (!this.menuOpen()) return;
    this.menuOpen.set(false);
    if (restoreFocus) this.toggleButton().nativeElement.focus();
  }
}
