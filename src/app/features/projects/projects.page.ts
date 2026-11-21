import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { ProjectStatus } from '../../core/models/content.models';
import { PROJECT_STATUS_LABEL, PROJECTS } from '../../data/projects.data';
import { CtaComponent } from '../../shared/components/cta/cta.component';
import { HeroComponent } from '../../shared/components/hero/hero.component';
import { ProjectCardComponent } from '../../shared/components/project-card/project-card.component';

type StatusFilter = ProjectStatus | 'all';

@Component({
  selector: 'app-projects-page',
  imports: [HeroComponent, ProjectCardComponent, CtaComponent],
  templateUrl: './projects.page.html',
  styleUrl: './projects.page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectsPage {
  protected readonly filter = signal<StatusFilter>('all');

  protected readonly statuses = (Object.keys(PROJECT_STATUS_LABEL) as ProjectStatus[]).map((id) => ({
    id,
    label: PROJECT_STATUS_LABEL[id],
    count: PROJECTS.filter((p) => p.status === id).length,
  }));

  protected readonly total = PROJECTS.length;

  protected readonly visible = computed(() => {
    const f = this.filter();
    return f === 'all' ? PROJECTS : PROJECTS.filter((p) => p.status === f);
  });

  protected readonly filterLabel = computed(() => {
    const f = this.filter();
    return f === 'all' ? 'All projects' : PROJECT_STATUS_LABEL[f];
  });
}
