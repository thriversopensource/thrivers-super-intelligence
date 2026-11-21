import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-not-found-page',
  imports: [RouterLink],
  template: `
    <section class="section grid-bg nf">
      <div class="container">
        <p class="eyebrow">404</p>
        <h1>This page has not been built yet.</h1>
        <p class="lead">The address you followed does not exist. It may have moved, or it may still be on the roadmap.</p>
        <div class="nf__actions">
          <a routerLink="/" class="btn btn--primary">Return home <span class="arrow" aria-hidden="true">→</span></a>
          <a routerLink="/roadmap" class="btn">View the roadmap</a>
        </div>
      </div>
    </section>
  `,
  styles: `
    .nf {
      min-height: 60vh;
      display: grid;
      align-items: center;
    }
    .nf .container {
      display: grid;
      gap: var(--s-5);
      justify-items: start;
    }
    h1 {
      font-size: var(--fs-2xl);
    }
    .nf__actions {
      display: flex;
      flex-wrap: wrap;
      gap: var(--s-3);
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NotFoundPage {}
