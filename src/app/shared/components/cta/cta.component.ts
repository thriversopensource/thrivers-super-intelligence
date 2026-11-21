import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CtaLink } from '../../../core/models/content.models';

@Component({
  selector: 'app-cta',
  imports: [RouterLink],
  template: `
    <section class="cta" [attr.aria-labelledby]="headingId()">
      <div class="container cta__inner">
        <div class="cta__text">
          @if (eyebrow()) {
            <p class="eyebrow">{{ eyebrow() }}</p>
          }
          <h2 [id]="headingId()" class="cta__title">{{ heading() }}</h2>
          @if (body()) {
            <p class="cta__body">{{ body() }}</p>
          }
        </div>
        <div class="cta__actions">
          <a class="btn btn--primary" [routerLink]="primary().path" [queryParams]="primary().queryParams">
            {{ primary().label }} <span class="arrow" aria-hidden="true">→</span>
          </a>
          @if (secondary(); as s) {
            <a class="btn" [routerLink]="s.path" [queryParams]="s.queryParams">{{ s.label }}</a>
          }
        </div>
      </div>
    </section>
  `,
  styles: `
    .cta {
      position: relative;
      padding-block: clamp(4rem, 9vw, 7rem);
      border-top: 1px solid var(--c-line);
      background:
        radial-gradient(50rem 20rem at 50% 120%, rgba(76, 125, 255, 0.12), transparent 70%),
        var(--c-bg);
    }
    .cta__inner {
      display: grid;
      gap: var(--s-6);
      align-items: end;
    }
    @media (min-width: 64rem) {
      .cta__inner {
        grid-template-columns: 1.4fr auto;
      }
    }
    .cta__text {
      display: grid;
      gap: var(--s-4);
      max-width: 44rem;
    }
    .cta__title {
      font-size: var(--fs-2xl);
    }
    .cta__body {
      color: var(--c-text-muted);
      font-size: var(--fs-md);
    }
    .cta__actions {
      display: flex;
      flex-wrap: wrap;
      gap: var(--s-3);
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CtaComponent {
  readonly heading = input.required<string>();
  readonly eyebrow = input<string>();
  readonly body = input<string>();
  readonly primary = input.required<CtaLink>();
  readonly secondary = input<CtaLink>();
  readonly headingId = input('cta-title');
}
