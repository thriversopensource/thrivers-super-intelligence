import { ChangeDetectionStrategy, Component, input } from '@angular/core';

/**
 * Page hero. Projects `[heroActions]` beneath the lead and `[heroVisual]`
 * beside the text on wide screens.
 */
@Component({
  selector: 'app-hero',
  template: `
    <section class="hero grid-bg" [class.hero--home]="variant() === 'home'" [attr.aria-labelledby]="headingId()">
      <div class="hero__fade" aria-hidden="true"></div>
      <div class="container hero__inner">
        <div class="hero__text">
          @if (eyebrow()) {
            <p class="eyebrow">{{ eyebrow() }}</p>
          }
          <h1 [id]="headingId()" class="hero__title">{{ heading() }}</h1>
          @if (lead()) {
            <p class="hero__lead">{{ lead() }}</p>
          }
          <div class="hero__actions"><ng-content select="[heroActions]" /></div>
        </div>
        <div class="hero__visual"><ng-content select="[heroVisual]" /></div>
      </div>
    </section>
  `,
  styleUrl: './hero.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroComponent {
  readonly heading = input.required<string>();
  readonly eyebrow = input<string>();
  readonly lead = input<string>();
  readonly variant = input<'home' | 'page'>('page');
  readonly headingId = input('page-title');
}
