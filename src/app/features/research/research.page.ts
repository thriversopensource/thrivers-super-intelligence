import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RESEARCH_PILLARS } from '../../data/research.data';
import { CtaComponent } from '../../shared/components/cta/cta.component';
import { HeroComponent } from '../../shared/components/hero/hero.component';
import { ResearchPillarComponent } from '../../shared/components/research-pillar/research-pillar.component';

@Component({
  selector: 'app-research-page',
  imports: [RouterLink, HeroComponent, ResearchPillarComponent, CtaComponent],
  template: `
    <app-hero
      eyebrow="Research agenda"
      heading="Five pillars of foundation-model research."
      lead="Our research spans the life of a language model — how it is designed, what it learns from, how it is trained, how it is measured and how it is applied. Transformer architecture and pretraining are our initial priorities."
    />

    <section class="section priorities-section" aria-labelledby="priorities-title">
      <div class="container priorities">
        <div>
          <p class="eyebrow">Initial priorities</p>
          <h2 id="priorities-title" class="priorities__title">Transformers and pretraining first.</h2>
        </div>
        <p class="priorities__body">
          Everything else depends on deep familiarity with the transformer and with the mechanics of
          pretraining. Our first year concentrates on implementing a decoder-only transformer from scratch
          and running controlled pretraining experiments — the foundation for architecture research, data
          work and, eventually, TSI-Base.
        </p>
        <ul class="priorities__list">
          @for (p of priorities; track p.id) {
            <li>
              <a routerLink="/research" [fragment]="p.id" class="priorities__link">
                <span class="mono">{{ p.index }}</span>{{ p.title }} <span aria-hidden="true">↓</span>
              </a>
            </li>
          }
        </ul>
      </div>
    </section>

    <div class="container layout">
      <nav class="toc" aria-label="Research pillars">
        <p class="toc__label mono">Pillars</p>
        <ol>
          @for (p of pillars; track p.id) {
            <li>
              <a routerLink="/research" [fragment]="p.id"><span class="mono">{{ p.index }}</span>{{ p.title }}</a>
            </li>
          }
        </ol>
      </nav>
      <div class="pillars">
        @for (p of pillars; track p.id) {
          <app-research-pillar [pillar]="p" variant="full" />
        }
      </div>
    </div>

    <app-cta
      heading="From questions to projects."
      body="Each pillar feeds one or more flagship projects with concrete deliverables."
      [primary]="{ label: 'View flagship projects', path: '/projects' }"
      [secondary]="{ label: 'See the roadmap', path: '/roadmap' }"
    />
  `,
  styleUrl: './research.page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ResearchPage {
  protected readonly pillars = RESEARCH_PILLARS;
  protected readonly priorities = RESEARCH_PILLARS.filter((p) => p.initialPriority);
}
