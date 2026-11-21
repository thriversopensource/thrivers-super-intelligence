import { ChangeDetectionStrategy, Component, input } from '@angular/core';

/** The TSI mark: three offset layers — a stack being built from the ground up. */
@Component({
  selector: 'app-brand-mark',
  template: `
    <svg [attr.width]="size()" [attr.height]="size()" viewBox="0 0 32 32" aria-hidden="true" focusable="false">
      <rect x="0.5" y="0.5" width="31" height="31" rx="5" fill="none" stroke="currentColor" stroke-opacity="0.35" />
      <path d="M8 22.5h16" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" />
      <path d="M10.5 16h11" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-opacity="0.8" />
      <path d="M13 9.5h6" stroke="var(--c-accent)" stroke-width="1.6" stroke-linecap="round" />
      <circle cx="16" cy="9.5" r="1.6" fill="var(--c-accent)" />
    </svg>
  `,
  styles: `
    :host {
      display: inline-flex;
      color: var(--c-text);
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BrandMarkComponent {
  readonly size = input(28);
}
