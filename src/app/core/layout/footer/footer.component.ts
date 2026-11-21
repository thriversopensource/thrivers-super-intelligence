import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PROJECTS } from '../../../data/projects.data';
import { BRAND, NAV_LINKS } from '../../../data/site.data';
import { BrandMarkComponent } from '../../../shared/components/brand-mark/brand-mark.component';

@Component({
  selector: 'app-footer',
  imports: [RouterLink, BrandMarkComponent],
  template: `
    <footer class="footer">
      <div class="container footer__grid">
        <div class="footer__brand">
          <a routerLink="/" class="footer__logo" [attr.aria-label]="brand.name + ' — home'">
            <app-brand-mark [size]="32" />
            <span>{{ brand.name }}</span>
          </a>
          <p class="footer__tagline">{{ brand.tagline }}</p>
          <p class="footer__programme mono">Research programme {{ brand.programme }}</p>
        </div>

        <nav class="footer__col" aria-label="Site">
          <h2 class="footer__heading mono">Institute</h2>
          <ul>
            @for (link of links; track link.path) {
              <li><a [routerLink]="link.path">{{ link.label }}</a></li>
            }
            <li><a routerLink="/join">Join Us</a></li>
          </ul>
        </nav>

        <nav class="footer__col" aria-label="Projects">
          <h2 class="footer__heading mono">Projects</h2>
          <ul>
            @for (project of projects; track project.id) {
              <li><a [routerLink]="['/projects', project.id]">{{ project.name }}</a></li>
            }
          </ul>
        </nav>
      </div>

      <div class="container footer__base">
        <p>© {{ year }} {{ brand.name }}. {{ brand.positioning }}.</p>
        <p class="mono">Roadmap targets are proposals, not completed outcomes.</p>
      </div>
    </footer>
  `,
  styleUrl: './footer.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent {
  protected readonly brand = BRAND;
  protected readonly links = NAV_LINKS;
  protected readonly projects = PROJECTS;
  protected readonly year = new Date().getFullYear();
}
