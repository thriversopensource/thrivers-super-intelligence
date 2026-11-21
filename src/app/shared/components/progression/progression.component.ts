import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { ProgressionStage } from '../../../core/models/content.models';

/** Capability progression: Applied AI Engineering → … → Foundation Models. */
@Component({
  selector: 'app-progression',
  template: `
    <ol class="progression" aria-label="Research capability progression">
      @for (stage of stages(); track stage.index; let last = $last) {
        <li class="stage" [class.stage--horizon]="last">
          <div class="stage__rail" aria-hidden="true">
            <span class="stage__node"></span>
          </div>
          <p class="stage__meta mono"><span>{{ stage.index }}</span>{{ stage.horizon }}</p>
          <h3 class="stage__title">{{ stage.title }}</h3>
          <p class="stage__desc">{{ stage.description }}</p>
        </li>
      }
    </ol>
  `,
  styleUrl: './progression.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProgressionComponent {
  readonly stages = input.required<readonly ProgressionStage[]>();
}
