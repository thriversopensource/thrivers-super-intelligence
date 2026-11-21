import { Location } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, inject, input, linkedSignal } from '@angular/core';
import { Router } from '@angular/router';
import { PhaseId } from '../../core/models/content.models';
import { PROJECTS } from '../../data/projects.data';
import { ROADMAP } from '../../data/roadmap.data';
import { CtaComponent } from '../../shared/components/cta/cta.component';
import { HeroComponent } from '../../shared/components/hero/hero.component';
import { ProjectCardComponent } from '../../shared/components/project-card/project-card.component';
import { TimelineComponent } from '../../shared/components/timeline/timeline.component';

@Component({
  selector: 'app-roadmap-page',
  imports: [HeroComponent, TimelineComponent, ProjectCardComponent, CtaComponent],
  templateUrl: './roadmap.page.html',
  styleUrl: './roadmap.page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RoadmapPage {
  private readonly router = inject(Router);
  private readonly location = inject(Location);

  /** `?year=1|2|3` — bound from the query string so phases are deep-linkable. */
  readonly year = input<string>();

  protected readonly phases = ROADMAP;

  protected readonly selected = linkedSignal<PhaseId>(
    () => ROADMAP.find((p) => String(p.year) === this.year())?.id ?? 'year-1',
  );

  protected readonly phaseProjects = computed(() =>
    PROJECTS.filter((p) => p.phase === this.selected()),
  );

  protected onSelect(id: PhaseId): void {
    this.selected.set(id);
    // Keep the URL shareable without triggering a router navigation (and its scroll reset).
    const year = ROADMAP.find((p) => p.id === id)?.year;
    const url = this.router.serializeUrl(this.router.createUrlTree(['/roadmap'], { queryParams: { year } }));
    this.location.replaceState(url);
  }
}
