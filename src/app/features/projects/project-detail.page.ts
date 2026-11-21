import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PROJECTS } from '../../data/projects.data';
import { RESEARCH_PILLARS } from '../../data/research.data';
import { ROADMAP } from '../../data/roadmap.data';
import { CtaComponent } from '../../shared/components/cta/cta.component';
import { StatusBadgeComponent } from '../../shared/components/status-badge/status-badge.component';

@Component({
  selector: 'app-project-detail-page',
  imports: [RouterLink, StatusBadgeComponent, CtaComponent],
  templateUrl: './project-detail.page.html',
  styleUrl: './project-detail.page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectDetailPage {
  /** Route parameter `:id`, bound via component input binding. */
  readonly id = input.required<string>();

  protected readonly index = computed(() => PROJECTS.findIndex((p) => p.id === this.id()));
  protected readonly project = computed(() => PROJECTS[this.index()]);
  protected readonly previous = computed(() => PROJECTS[this.index() - 1]);
  protected readonly next = computed(() => PROJECTS[this.index() + 1]);

  protected readonly phase = computed(() => ROADMAP.find((p) => p.id === this.project()?.phase));
  protected readonly pillars = computed(() =>
    RESEARCH_PILLARS.filter((p) => this.project()?.relatedPillars.includes(p.id)),
  );
}
