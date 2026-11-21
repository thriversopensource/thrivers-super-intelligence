import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PROJECTS } from '../../data/projects.data';
import { CONTACT } from '../../data/site.data';
import { HeroComponent } from '../../shared/components/hero/hero.component';

interface Profile {
  readonly title: string;
  readonly focus: string;
  readonly areas: readonly string[];
}

@Component({
  selector: 'app-join-page',
  imports: [RouterLink, HeroComponent],
  templateUrl: './join.page.html',
  styleUrl: './join.page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class JoinPage {
  protected readonly contactEmail = CONTACT.email;
  protected readonly projects = PROJECTS;

  protected readonly profiles: readonly Profile[] = [
    {
      title: 'Machine Learning Engineers',
      focus: 'Implement models, training loops and evaluation tooling.',
      areas: ['TSI-GPT', 'TSI-Architect'],
    },
    {
      title: 'AI Researchers',
      focus: 'Design experiments, run ablations and interpret results.',
      areas: ['Architecture research', 'Methodology'],
    },
    {
      title: 'Python Developers',
      focus: 'Build reliable pipelines, utilities and research infrastructure.',
      areas: ['TSI-Lab', 'TSI-Data'],
    },
    {
      title: 'Mathematics & Statistics Enthusiasts',
      focus: 'Strengthen the theory behind optimisation, attention and evaluation.',
      areas: ['Foundations', 'Evaluation'],
    },
    {
      title: 'NLP Researchers',
      focus: 'Shape tokenisation, data composition and language evaluation.',
      areas: ['TSI-Data', 'Evaluation'],
    },
    {
      title: 'GPU & Infrastructure Engineers',
      focus: 'Enable efficient single- and multi-GPU training at scale.',
      areas: ['Distributed training', 'TSI-Base'],
    },
  ];

  protected readonly philosophy = [
    { title: 'Research-oriented learning', body: 'Contributors learn by doing real research — implementing, measuring and writing up.' },
    { title: 'Open-source contributions', body: 'Code is developed in the open, reviewed collaboratively and shared under clear licences.' },
    { title: 'Reproducible experiments', body: 'Every result comes with the configuration, code and data references to reproduce it.' },
    { title: 'Technical documentation', body: 'Documentation is a first-class deliverable, not an afterthought.' },
    { title: 'Collaborative development', body: 'Decisions are discussed, reviewed and recorded so that everyone can build on them.' },
  ] as const;

  // Introduction builder state
  protected readonly name = signal('');
  protected readonly profile = signal(this.profiles[0].title);
  protected readonly project = signal('Open to any project');
  protected readonly background = signal('');
  protected readonly copyState = signal<'idle' | 'copied' | 'failed'>('idle');

  protected readonly introduction = computed(() =>
    [
      'Introduction — Thrivers Super Intelligence',
      '',
      `Name: ${this.name().trim() || '(your name)'}`,
      `Profile: ${this.profile()}`,
      `Project interest: ${this.project()}`,
      '',
      'Background and what I would like to contribute:',
      this.background().trim() || '(a few sentences about your experience and interests)',
    ].join('\n'),
  );

  protected readonly canCopy = computed(() => this.background().trim().length >= 20);

  protected value(event: Event): string {
    return (event.target as HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement).value;
  }

  protected update(setter: (v: string) => void, event: Event): void {
    setter(this.value(event));
    this.copyState.set('idle');
  }

  protected async copy(): Promise<void> {
    try {
      await navigator.clipboard.writeText(this.introduction());
      this.copyState.set('copied');
    } catch {
      this.copyState.set('failed');
    }
  }
}
