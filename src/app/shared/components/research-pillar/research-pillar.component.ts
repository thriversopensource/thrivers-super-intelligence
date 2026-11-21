import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ResearchPillar } from '../../../core/models/content.models';

/**
 * A research pillar. `compact` renders a summary card linking to the full
 * pillar on /research; `full` renders objectives, questions, tools and outcomes.
 */
@Component({
  selector: 'app-research-pillar',
  imports: [RouterLink],
  templateUrl: './research-pillar.component.html',
  styleUrl: './research-pillar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { '[class.is-full]': "variant() === 'full'" },
})
export class ResearchPillarComponent {
  readonly pillar = input.required<ResearchPillar>();
  readonly variant = input<'compact' | 'full'>('compact');
}
