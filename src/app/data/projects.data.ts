import { ProjectStatus, ResearchProject } from '../core/models/content.models';

export const PROJECT_STATUS_LABEL: Record<ProjectStatus, string> = {
  planned: 'Planned',
  'in-progress': 'In Progress',
  completed: 'Completed',
};

/**
 * Flagship projects.
 *
 * IMPORTANT: `status` must reflect actual progress. All projects are marked
 * `planned` until work is verifiably underway — update them here as it happens.
 */
export const PROJECTS: readonly ResearchProject[] = [
  {
    id: 'tsi-gpt',
    name: 'TSI-GPT',
    tagline: 'Decoder-only transformer, implemented from scratch',
    description:
      'A GPT-style decoder-only transformer written from first principles in PyTorch — tokenisation, embeddings, causal self-attention, feed-forward blocks, training loop and sampling — with every component documented.',
    objective:
      'Develop a complete, readable reference implementation that serves as the foundation for TSI architecture and training research.',
    stack: ['Python', 'PyTorch', 'NumPy', 'CUDA'],
    status: 'planned',
    phase: 'year-1',
    deliverables: [
      'Reference implementation of a decoder-only transformer',
      'Training and sampling scripts for small-scale models',
      'Technical write-up explaining each component',
      'Initial pretraining experiment results on small corpora',
    ],
    relatedPillars: ['architecture', 'training'],
  },
  {
    id: 'tsi-lab',
    name: 'TSI-Lab',
    tagline: 'Experiment tracking and reproducibility framework',
    description:
      'A lightweight framework for configuring, running, tracking and reproducing experiments — so every result produced at TSI can be traced back to its code, data and configuration.',
    objective:
      'Make reproducibility the default by standardising experiment configuration, logging and reporting across all research work.',
    stack: ['Python', 'MLflow', 'Git', 'GitHub'],
    status: 'planned',
    phase: 'year-1',
    deliverables: [
      'Configuration and experiment-tracking conventions',
      'Run comparison and reporting utilities',
      'Reproducibility checklist for published results',
    ],
    relatedPillars: ['evaluation'],
  },
  {
    id: 'tsi-architect',
    name: 'TSI-Architect',
    tagline: 'Evaluating transformer architecture variations',
    description:
      'A modular framework for swapping and comparing transformer components — attention mechanisms, normalisation, positional encodings and feed-forward variants — under controlled conditions.',
    objective:
      'Produce evidence-based architecture decisions through systematic, like-for-like comparisons.',
    stack: ['Python', 'PyTorch', 'MLflow', 'PyTorch Distributed'],
    status: 'planned',
    phase: 'year-2',
    deliverables: [
      'Pluggable component library for transformer variants',
      'Architecture comparison studies with published configurations',
      'Recommended architecture specification for TSI-Base',
    ],
    relatedPillars: ['architecture', 'evaluation'],
  },
  {
    id: 'tsi-data',
    name: 'TSI-Data',
    tagline: 'Dataset processing, curation and tokenisation',
    description:
      'A pipeline for sourcing, cleaning, deduplicating, filtering and tokenising text corpora, with provenance recorded at every stage.',
    objective:
      'Build the data foundation for independent pretraining — high-quality, well-documented and reproducible.',
    stack: ['Python', 'Hugging Face Datasets', 'Tokenizers', 'NumPy'],
    status: 'planned',
    phase: 'year-2',
    deliverables: [
      'Modular processing pipeline with documented stages',
      'Custom tokeniser training workflow',
      'Dataset cards describing composition and limitations',
    ],
    relatedPillars: ['data'],
  },
  {
    id: 'tsi-base',
    name: 'TSI-Base',
    tagline: 'Proposed independently pretrained language model',
    description:
      'The culmination of the 2026–2029 programme: a base language model whose architecture, data pipeline and training run are designed and executed by TSI.',
    objective:
      'Demonstrate independent end-to-end capability — from architecture selection and data curation to pretraining and evaluation.',
    stack: ['PyTorch', 'FSDP', 'CUDA', 'Hugging Face Datasets', 'MLflow', 'Docker'],
    status: 'planned',
    phase: 'year-3',
    deliverables: [
      'Final architecture and training configuration',
      'Independently pretrained base model',
      'Evaluation report with transparent methodology',
      'Technical documentation of the full training process',
    ],
    relatedPillars: ['architecture', 'data', 'training', 'evaluation'],
  },
];
