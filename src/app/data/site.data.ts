import { NavLink, ProgressionStage } from '../core/models/content.models';

export const BRAND = {
  name: 'Thrivers Super Intelligence',
  short: 'TSI',
  positioning: 'Independent AI Research & Engineering',
  tagline:
    'Building the foundations of intelligent systems through research, experimentation and engineering.',
  vision: 'Building the foundations of intelligent systems.',
  programme: '2026–2029',
} as const;

/**
 * Public contact channel. Intentionally empty until an official address exists.
 * When `email` is set, the Join page renders a direct mail link automatically.
 */
export const CONTACT: { readonly email: string | null } = {
  email: null,
};

export const NAV_LINKS: readonly NavLink[] = [
  { label: 'About', path: '/about' },
  { label: 'Research', path: '/research' },
  { label: 'Roadmap', path: '/roadmap' },
  { label: 'Projects', path: '/projects' },
  { label: 'Technology', path: '/technology' },
];

export const PROGRESSION: readonly ProgressionStage[] = [
  {
    index: '01',
    title: 'Applied AI Engineering',
    description: 'Build fluency with existing models, tooling and evaluation in real systems.',
    horizon: 'Foundation',
  },
  {
    index: '02',
    title: 'Model Engineering',
    description: 'Implement transformers from first principles and train small models end to end.',
    horizon: 'Year 1',
  },
  {
    index: '03',
    title: 'Architecture Research',
    description: 'Compare attention variants and architectural choices under controlled experiments.',
    horizon: 'Year 2',
  },
  {
    index: '04',
    title: 'Independent Pretraining',
    description: 'Curate datasets and pretrain models on distributed GPU infrastructure.',
    horizon: 'Year 3',
  },
  {
    index: '05',
    title: 'Foundation Models',
    description: 'The long-term aim: research-grade foundation models designed and trained in-house.',
    horizon: 'Beyond 2029',
  },
];

export const MISSION = {
  statement:
    'To develop — openly, rigorously and from first principles — the scientific, technical and organisational capability to research, architect and train our own language models.',
  why: 'Most teams consume foundation models as black boxes. TSI exists to understand them from the inside: how architectures behave, how data shapes capability, and how training decisions compound. Independent capability starts with that understanding.',
} as const;

export interface Principle {
  readonly title: string;
  readonly body: string;
}

export const PRINCIPLES: readonly Principle[] = [
  {
    title: 'First principles before scale',
    body: 'We implement before we abstract. Every component of the stack should be understood well enough to rebuild it.',
  },
  {
    title: 'Reproducibility by default',
    body: 'Experiments are versioned, configured and logged so that results can be reproduced and challenged.',
  },
  {
    title: 'Honest reporting',
    body: 'We publish what we tried, what failed and what we measured — and we do not claim results we have not produced.',
  },
  {
    title: 'Open documentation',
    body: 'Technical notes, design decisions and lessons learned are written down and shared as part of the work.',
  },
  {
    title: 'Measured ambition',
    body: 'Long-term goals are ambitious; near-term milestones are concrete, sized and testable.',
  },
  {
    title: 'Collaborative rigour',
    body: 'Ideas are strengthened by review. Contributors are expected to question assumptions, including our own.',
  },
];
