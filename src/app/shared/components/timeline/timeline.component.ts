import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  computed,
  input,
  model,
  viewChildren,
} from '@angular/core';
import { PhaseId, RoadmapPhase } from '../../../core/models/content.models';
import { MilestoneComponent } from '../milestone/milestone.component';

/**
 * Interactive three-year timeline. Phases are exposed as an ARIA tablist with
 * roving focus (Arrow keys, Home, End); the selected phase is a two-way `model`.
 */
@Component({
  selector: 'app-timeline',
  imports: [MilestoneComponent],
  templateUrl: './timeline.component.html',
  styleUrl: './timeline.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TimelineComponent {
  readonly phases = input.required<readonly RoadmapPhase[]>();
  readonly selected = model<PhaseId>('year-1');

  private readonly tabs = viewChildren<ElementRef<HTMLButtonElement>>('tab');

  protected readonly selectedIndex = computed(() =>
    Math.max(
      0,
      this.phases().findIndex((p) => p.id === this.selected()),
    ),
  );
  protected readonly current = computed(() => this.phases()[this.selectedIndex()]);
  protected readonly previous = computed(() => this.phases()[this.selectedIndex() - 1]);
  protected readonly next = computed(() => this.phases()[this.selectedIndex() + 1]);

  /** Fraction of the programme track covered up to the end of the selected phase. */
  protected readonly trackFill = computed(
    () => `${((this.selectedIndex() + 1) / this.phases().length) * 100}%`,
  );

  protected select(id: PhaseId): void {
    this.selected.set(id);
  }

  protected onTabKeydown(event: KeyboardEvent): void {
    const count = this.phases().length;
    const index = this.selectedIndex();
    const target: Record<string, number> = {
      ArrowRight: (index + 1) % count,
      ArrowDown: (index + 1) % count,
      ArrowLeft: (index - 1 + count) % count,
      ArrowUp: (index - 1 + count) % count,
      Home: 0,
      End: count - 1,
    };
    const nextIndex = target[event.key];
    if (nextIndex === undefined) return;
    event.preventDefault();
    this.selected.set(this.phases()[nextIndex].id);
    this.tabs()[nextIndex]?.nativeElement.focus();
  }

  protected step(phase: RoadmapPhase | undefined): void {
    if (!phase) return;
    this.selected.set(phase.id);
    this.tabs()[this.phases().indexOf(phase)]?.nativeElement.focus();
  }
}
