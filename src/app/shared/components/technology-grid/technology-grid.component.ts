import { ChangeDetectionStrategy, Component, computed, input, signal } from '@angular/core';
import { PhaseId, RoadmapPhase, TechnologyCategory } from '../../../core/models/content.models';

type PhaseFilter = PhaseId | 'all';

/**
 * Layered technology stack. Each tool is tagged with the roadmap phase in which
 * it becomes central; the filter highlights the tools a given year depends on.
 */
@Component({
  selector: 'app-technology-grid',
  templateUrl: './technology-grid.component.html',
  styleUrl: './technology-grid.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TechnologyGridComponent {
  readonly categories = input.required<readonly TechnologyCategory[]>();
  readonly phases = input.required<readonly RoadmapPhase[]>();

  protected readonly filter = signal<PhaseFilter>('all');

  protected readonly filters = computed(() => [
    { id: 'all' as PhaseFilter, label: 'Full stack' },
    ...this.phases().map((p) => ({ id: p.id as PhaseFilter, label: `By Year ${p.year}` })),
  ]);

  protected readonly phaseYear = computed(() => {
    const map = new Map<PhaseId, number>();
    for (const p of this.phases()) map.set(p.id, p.year);
    return map;
  });

  protected readonly activeCount = computed(() => {
    const f = this.filter();
    return this.categories()
      .flatMap((c) => c.technologies)
      .filter((t) => this.isActive(t.phase, f)).length;
  });

  protected isActive(phase: PhaseId, filter: PhaseFilter = this.filter()): boolean {
    if (filter === 'all') return true;
    // A tool introduced in an earlier year remains in use in later years.
    return (this.phaseYear().get(phase) ?? 0) <= (this.phaseYear().get(filter) ?? 0);
  }
}
