import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ResearchProject } from '../../../core/models/content.models';
import { ROADMAP } from '../../../data/roadmap.data';
import { StatusBadgeComponent } from '../status-badge/status-badge.component';

@Component({
  selector: 'app-project-card',
  imports: [RouterLink, StatusBadgeComponent],
  template: `
    @let p = project();
    <article class="card" [class.card--flagship]="p.id === 'tsi-base'">
      <header class="card__head">
        <span class="card__phase mono">{{ phaseLabel() }}</span>
        <app-status-badge [status]="p.status" />
      </header>
      <h3 class="card__name">
        <a [routerLink]="['/projects', p.id]" class="card__link">{{ p.name }}</a>
      </h3>
      <p class="card__tagline">{{ p.tagline }}</p>
      @if (showDescription()) {
        <p class="card__desc">{{ p.description }}</p>
      }
      <ul class="chip-list card__stack" aria-label="Technical stack">
        @for (tech of p.stack; track tech) {
          <li class="chip">{{ tech }}</li>
        }
      </ul>
      <span class="card__more mono" aria-hidden="true">View project →</span>
    </article>
  `,
  styleUrl: './project-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectCardComponent {
  readonly project = input.required<ResearchProject>();
  readonly showDescription = input(false);

  protected readonly phaseLabel = computed(() => {
    const phase = ROADMAP.find((p) => p.id === this.project().phase);
    return phase ? `Year ${phase.year} · ${phase.period}` : '';
  });
}
