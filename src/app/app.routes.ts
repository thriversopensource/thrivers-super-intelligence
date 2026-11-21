import { Routes } from '@angular/router';
import { PROJECTS } from './data/projects.data';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadComponent: () => import('./features/home/home.page').then((m) => m.HomePage),
    data: {
      description:
        'Thrivers Super Intelligence (TSI) is an independent AI research and engineering initiative exploring language models, transformer architectures and the foundations of intelligent systems.',
    },
  },
  {
    path: 'about',
    title: 'About',
    loadComponent: () => import('./features/about/about.page').then((m) => m.AboutPage),
    data: {
      description:
        'Mission, vision, research philosophy and principles of Thrivers Super Intelligence — and an honest view of current capability versus long-term ambition.',
    },
  },
  {
    path: 'research',
    title: 'Research',
    loadComponent: () => import('./features/research/research.page').then((m) => m.ResearchPage),
    data: {
      description:
        'Five research pillars: model architecture, data and tokenisation, training and infrastructure, evaluation methodology and applied intelligence engineering.',
    },
  },
  {
    path: 'roadmap',
    title: 'Three-Year Roadmap',
    loadComponent: () => import('./features/roadmap/roadmap.page').then((m) => m.RoadmapPage),
    data: {
      description:
        'The proposed 2026–2029 TSI research roadmap: foundations, research and engineering, and independent model development.',
    },
  },
  {
    path: 'projects',
    title: 'Projects',
    loadComponent: () => import('./features/projects/projects.page').then((m) => m.ProjectsPage),
    data: {
      description:
        'TSI flagship projects: TSI-GPT, TSI-Lab, TSI-Architect, TSI-Data and the proposed TSI-Base language model.',
    },
  },
  {
    path: 'projects/:id',
    title: (route) =>
      PROJECTS.find((p) => p.id === route.paramMap.get('id'))?.name ?? 'Project not found',
    loadComponent: () =>
      import('./features/projects/project-detail.page').then((m) => m.ProjectDetailPage),
    data: { description: 'Details of a Thrivers Super Intelligence research project.' },
  },
  {
    path: 'technology',
    title: 'Technology',
    loadComponent: () =>
      import('./features/technology/technology.page').then((m) => m.TechnologyPage),
    data: {
      description:
        'The research technology ecosystem behind TSI — from Python and PyTorch to distributed training, data tooling and experiment tracking.',
    },
  },
  {
    path: 'join',
    title: 'Join Us',
    loadComponent: () => import('./features/join/join.page').then((m) => m.JoinPage),
    data: {
      description:
        'How engineers, researchers and enthusiasts can contribute to Thrivers Super Intelligence through research-oriented, reproducible, open collaboration.',
    },
  },
  {
    path: '**',
    title: 'Page not found',
    loadComponent: () => import('./features/not-found/not-found.page').then((m) => m.NotFoundPage),
  },
];
