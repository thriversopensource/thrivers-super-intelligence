import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ROADMAP } from '../../data/roadmap.data';
import { TECHNOLOGY } from '../../data/technology.data';
import { CtaComponent } from '../../shared/components/cta/cta.component';
import { HeroComponent } from '../../shared/components/hero/hero.component';
import { TechnologyGridComponent } from '../../shared/components/technology-grid/technology-grid.component';

@Component({
  selector: 'app-technology-page',
  imports: [HeroComponent, TechnologyGridComponent, CtaComponent],
  template: `
    <app-hero
      eyebrow="Technology"
      heading="The research technology ecosystem."
      lead="The tools TSI's research is built on, organised as a stack from infrastructure to experimentation. Each tool is mapped to the roadmap year in which it becomes central to the work."
    />

    <section class="section tech" aria-labelledby="stack-title">
      <div class="container">
        <header class="section-head">
          <p class="eyebrow">Layered stack</p>
          <h2 id="stack-title">From silicon to experiment.</h2>
          <p class="lead">
            Filter by year to see which tools each roadmap phase depends on. Tools introduced earlier remain
            in use in later phases.
          </p>
        </header>

        <app-technology-grid [categories]="categories" [phases]="phases" />

        <div class="notice tech__notice">
          <span class="notice__label">Scope</span>
          <p>
            This is the planned research toolchain, not a list of production deployments. Distributed
            training, FSDP and large-scale GPU computing become central in Year 2 and beyond.
          </p>
        </div>
      </div>
    </section>

    <app-cta
      heading="See the tools in context."
      body="Every tool maps to a project and a roadmap milestone."
      [primary]="{ label: 'View projects', path: '/projects' }"
      [secondary]="{ label: 'Open the roadmap', path: '/roadmap' }"
    />
  `,
  styles: `
    .tech {
      padding-top: var(--s-8);
    }
    .tech__notice {
      margin-top: var(--s-6);
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TechnologyPage {
  protected readonly categories = TECHNOLOGY;
  protected readonly phases = ROADMAP;
}
