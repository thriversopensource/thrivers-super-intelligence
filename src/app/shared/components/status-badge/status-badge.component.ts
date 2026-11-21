import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { ProjectStatus } from '../../../core/models/content.models';
import { PROJECT_STATUS_LABEL } from '../../../data/projects.data';

@Component({
  selector: 'app-status-badge',
  template: `<span class="badge mono" [attr.data-status]="status()"><span class="dot" aria-hidden="true"></span>{{ label() }}</span>`,
  styles: `
    .badge {
      display: inline-flex;
      align-items: center;
      gap: 0.45rem;
      padding: 0.2rem 0.6rem;
      border: 1px solid var(--c-line-strong);
      border-radius: 999px;
      font-size: 0.68rem;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      color: var(--c-text-muted);
      white-space: nowrap;
    }
    .dot {
      width: 0.45rem;
      height: 0.45rem;
      border-radius: 50%;
      border: 1px solid currentColor;
    }
    [data-status='in-progress'] {
      color: var(--c-amber);
      border-color: rgba(242, 196, 109, 0.4);
    }
    [data-status='in-progress'] .dot {
      background: currentColor;
    }
    [data-status='completed'] {
      color: var(--c-green);
      border-color: rgba(111, 219, 168, 0.4);
    }
    [data-status='completed'] .dot {
      background: currentColor;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StatusBadgeComponent {
  readonly status = input.required<ProjectStatus>();
  protected readonly label = computed(() => PROJECT_STATUS_LABEL[this.status()]);
}
