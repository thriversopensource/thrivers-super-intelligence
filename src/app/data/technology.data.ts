import { TechnologyCategory } from '../core/models/content.models';

/**
 * The research technology ecosystem, ordered from the top of the stack
 * (experimentation) down to infrastructure. Each tool is tagged with the
 * roadmap phase in which it becomes central — not a claim of production use.
 */
export const TECHNOLOGY: readonly TechnologyCategory[] = [
  {
    id: 'experimentation',
    name: 'Experimentation',
    description: 'Tracking, versioning and sharing research.',
    technologies: [
      { name: 'MLflow', role: 'Experiment tracking', phase: 'year-1' },
      { name: 'Git', role: 'Version control', phase: 'year-1' },
      { name: 'GitHub', role: 'Collaboration & review', phase: 'year-1' },
    ],
  },
  {
    id: 'llm',
    name: 'LLM Engineering',
    description: 'Language-model building blocks and baselines.',
    technologies: [
      { name: 'Transformers', role: 'Reference models & baselines', phase: 'year-1' },
      { name: 'Tokenizers', role: 'Tokeniser training', phase: 'year-2' },
    ],
  },
  {
    id: 'deep-learning',
    name: 'Deep Learning',
    description: 'Core numerical and modelling frameworks.',
    technologies: [
      { name: 'PyTorch', role: 'Model implementation', phase: 'year-1' },
      { name: 'NumPy', role: 'Numerical foundations', phase: 'year-1' },
    ],
  },
  {
    id: 'training',
    name: 'Training',
    description: 'Accelerated and distributed optimisation.',
    technologies: [
      { name: 'CUDA', role: 'GPU acceleration', phase: 'year-1' },
      { name: 'PyTorch Distributed', role: 'Multi-GPU training', phase: 'year-2' },
      { name: 'FSDP', role: 'Sharded data parallelism', phase: 'year-2' },
    ],
  },
  {
    id: 'data',
    name: 'Data',
    description: 'Corpus processing and curation.',
    technologies: [
      { name: 'Hugging Face Datasets', role: 'Dataset loading & processing', phase: 'year-1' },
      { name: 'Data-processing tools', role: 'Filtering & deduplication', phase: 'year-2' },
    ],
  },
  {
    id: 'programming',
    name: 'Programming',
    description: 'Languages for research and tooling.',
    technologies: [
      { name: 'Python', role: 'Research engineering', phase: 'year-1' },
      { name: 'TypeScript', role: 'Tooling & interfaces', phase: 'year-1' },
    ],
  },
  {
    id: 'infrastructure',
    name: 'Infrastructure',
    description: 'The compute environment beneath everything.',
    technologies: [
      { name: 'Linux', role: 'Research environment', phase: 'year-1' },
      { name: 'Docker', role: 'Reproducible environments', phase: 'year-1' },
      { name: 'GPU computing', role: 'Training compute', phase: 'year-2' },
    ],
  },
];
