import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PROJECTS } from '../../data/projects.data';
import { RESEARCH_PILLARS } from '../../data/research.data';
import { ROADMAP } from '../../data/roadmap.data';
import { BRAND, MISSION, PROGRESSION } from '../../data/site.data';
import { CtaComponent } from '../../shared/components/cta/cta.component';
import { HeroComponent } from '../../shared/components/hero/hero.component';
import { ProgressionComponent } from '../../shared/components/progression/progression.component';
import { ProjectCardComponent } from '../../shared/components/project-card/project-card.component';
import { ResearchPillarComponent } from '../../shared/components/research-pillar/research-pillar.component';
import { TransformerDiagramComponent } from '../../shared/components/transformer-diagram/transformer-diagram.component';

@Component({
  selector: 'app-home-page',
  imports: [
    RouterLink,
    HeroComponent,
    TransformerDiagramComponent,
    ResearchPillarComponent,
    ProgressionComponent,
    ProjectCardComponent,
    CtaComponent,
  ],
  templateUrl: './home.page.html',
  styleUrl: './home.page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePage {
  protected readonly brand = BRAND;
  protected readonly mission = MISSION;
  protected readonly pillars = RESEARCH_PILLARS;
  protected readonly progression = PROGRESSION;
  protected readonly roadmap = ROADMAP;
  protected readonly projects = PROJECTS;

  protected readonly facts = [
    { label: 'Programme', value: BRAND.programme },
    { label: 'Research pillars', value: String(RESEARCH_PILLARS.length) },
    { label: 'Flagship projects', value: String(PROJECTS.length) },
    { label: 'Initial focus', value: 'Transformers & pretraining' },
  ] as const;
}
