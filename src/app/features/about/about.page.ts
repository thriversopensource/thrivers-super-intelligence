import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BRAND, MISSION, PRINCIPLES } from '../../data/site.data';
import { CtaComponent } from '../../shared/components/cta/cta.component';
import { HeroComponent } from '../../shared/components/hero/hero.component';

interface CapabilityRow {
  readonly area: string;
  readonly today: string;
  readonly ambition: string;
}

@Component({
  selector: 'app-about-page',
  imports: [HeroComponent, CtaComponent],
  templateUrl: './about.page.html',
  styleUrl: './about.page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutPage {
  protected readonly brand = BRAND;
  protected readonly mission = MISSION;
  protected readonly principles = PRINCIPLES;

  protected readonly philosophy = [
    {
      title: 'Understand, then build',
      body: 'We treat language models as objects of study, not products to wrap. Implementation is how we learn; experiments are how we know.',
    },
    {
      title: 'Small, controlled experiments',
      body: 'Insight at limited compute comes from careful design — ablations, fixed seeds, honest baselines and clearly stated limitations.',
    },
    {
      title: 'Compounding capability',
      body: 'Each project leaves behind reusable code, documentation and know-how. Over three years, those layers compound into independent capability.',
    },
  ] as const;

  protected readonly capabilities: readonly CapabilityRow[] = [
    {
      area: 'Architecture',
      today: 'Studying transformer internals and implementing core components',
      ambition: 'Evidence-based architecture design for TSI-Base',
    },
    {
      area: 'Training',
      today: 'Preparing single-GPU pretraining experiments on small models',
      ambition: 'Independent distributed pretraining of a base model',
    },
    {
      area: 'Data',
      today: 'Working with existing public datasets and tokenisers',
      ambition: 'Curated, documented pretraining corpora and custom tokenisers',
    },
    {
      area: 'Evaluation',
      today: 'Defining experiment tracking and reproducibility conventions',
      ambition: 'A transparent evaluation methodology published with results',
    },
    {
      area: 'Organisation',
      today: 'An emerging initiative forming its research practice',
      ambition: 'A research lab with a contributor community and published work',
    },
  ];
}
