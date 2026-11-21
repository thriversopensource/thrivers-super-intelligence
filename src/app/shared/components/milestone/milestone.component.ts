import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { RoadmapMilestone } from '../../../core/models/content.models';

@Component({
  selector: 'app-milestone',
  template: `
    @let m = milestone();
    <div class="milestone">
      <span class="milestone__node" aria-hidden="true"></span>
      <p class="milestone__meta mono">
        <span class="milestone__code">M{{ year() }}.{{ index() + 1 }}</span>
        <span>{{ m.window }}</span>
        <span class="milestone__state">Proposed</span>
      </p>
      <h4 class="milestone__title">{{ m.title }}</h4>
      <p class="milestone__detail">{{ m.detail }}</p>
    </div>
  `,
  styles: `
    :host {
      display: block;
    }
    .milestone {
      position: relative;
      padding: 0 0 var(--s-6) var(--s-6);
    }
    :host(:last-child) .milestone {
      padding-bottom: 0;
    }
    .milestone::before {
      content: '';
      position: absolute;
      left: 0.32rem;
      top: 0.9rem;
      bottom: -0.2rem;
      width: 1px;
      background: var(--c-line-strong);
    }
    :host(:last-child) .milestone::before {
      display: none;
    }
    .milestone__node {
      position: absolute;
      left: 0;
      top: 0.35rem;
      width: 0.7rem;
      height: 0.7rem;
      border: 1px solid var(--c-accent);
      border-radius: 2px;
      transform: rotate(45deg);
      background: var(--c-bg);
      transition: background-color var(--t-med) var(--ease);
    }
    .milestone:hover .milestone__node {
      background: var(--c-accent);
    }
    .milestone__meta {
      display: flex;
      flex-wrap: wrap;
      gap: var(--s-3);
      font-size: 0.7rem;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      color: var(--c-text-dim);
    }
    .milestone__code {
      color: var(--c-accent);
    }
    .milestone__state {
      color: var(--c-amber);
    }
    .milestone__title {
      margin-top: var(--s-1);
      font-size: var(--fs-base);
    }
    .milestone__detail {
      margin-top: var(--s-1);
      font-size: var(--fs-sm);
      color: var(--c-text-muted);
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MilestoneComponent {
  readonly milestone = input.required<RoadmapMilestone>();
  readonly index = input.required<number>();
  readonly year = input.required<number>();
}
