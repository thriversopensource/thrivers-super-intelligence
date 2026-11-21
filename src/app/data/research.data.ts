import { ResearchPillar } from '../core/models/content.models';

export const RESEARCH_PILLARS: readonly ResearchPillar[] = [
  {
    id: 'architecture',
    index: '01',
    title: 'Model Architecture Research',
    summary:
      'Understanding the transformer from the inside — attention, normalisation, positional encoding and the design choices that determine how models learn.',
    initialPriority: true,
    objectives: [
      'Implement a decoder-only transformer from first principles',
      'Characterise how depth, width and attention configuration affect learning',
      'Build a controlled framework for comparing architectural variants',
    ],
    questions: [
      'Which architectural choices matter most at small and medium scale?',
      'How do attention variants (multi-head, grouped-query, sliding-window) trade quality for efficiency?',
      'How do positional encoding schemes affect length generalisation?',
    ],
    technologies: ['PyTorch', 'NumPy', 'Transformers', 'MLflow'],
    outcomes: [
      'Reference GPT-style implementation with documented design decisions',
      'Comparative architecture study with reproducible configurations',
      'A selected architecture specification for TSI-Base',
    ],
  },
  {
    id: 'data',
    index: '02',
    title: 'Data & Tokenisation Research',
    summary:
      'Studying how corpus composition, cleaning and tokenisation shape what a language model can learn.',
    initialPriority: false,
    objectives: [
      'Build a reproducible dataset processing and curation pipeline',
      'Train and evaluate custom tokenisers',
      'Develop quality filtering and deduplication methods',
    ],
    questions: [
      'How does vocabulary size and tokeniser design affect downstream quality?',
      'Which filtering heuristics most improve data quality per compute spent?',
      'How should data mixtures be balanced across domains?',
    ],
    technologies: ['Hugging Face Datasets', 'Tokenizers', 'Python', 'NumPy'],
    outcomes: [
      'TSI-Data pipeline with documented processing stages',
      'Custom tokeniser trained on curated corpora',
      'Dataset cards describing provenance, composition and known limitations',
    ],
  },
  {
    id: 'training',
    index: '03',
    title: 'Model Training & Infrastructure',
    summary:
      'Pretraining as an engineering discipline — stable optimisation, efficient compute use and scaling across GPUs.',
    initialPriority: true,
    objectives: [
      'Run initial single-GPU pretraining experiments on small models',
      'Scale training to multi-GPU with PyTorch Distributed and FSDP',
      'Establish training stability, checkpointing and monitoring practices',
    ],
    questions: [
      'What learning-rate schedules and batch sizes are stable at our scale?',
      'How efficiently can limited compute be used for meaningful pretraining?',
      'Where do distributed training bottlenecks appear first?',
    ],
    technologies: ['PyTorch', 'CUDA', 'PyTorch Distributed', 'FSDP', 'Docker', 'Linux'],
    outcomes: [
      'Reproducible pretraining recipes for small and medium models',
      'Distributed training setup with documented throughput measurements',
      'Training infrastructure ready for independent TSI-Base pretraining',
    ],
  },
  {
    id: 'evaluation',
    index: '04',
    title: 'Model Evaluation & Research Methodology',
    summary:
      'Measuring what matters — rigorous evaluation, experiment tracking and the methodology that makes results trustworthy.',
    initialPriority: false,
    objectives: [
      'Define an evaluation suite covering language modelling and reasoning tasks',
      'Standardise experiment tracking and configuration management',
      'Document a research methodology for comparing models fairly',
    ],
    questions: [
      'Which evaluations are informative for small models?',
      'How do we control for variance across training runs?',
      'How should negative results be recorded and shared?',
    ],
    technologies: ['MLflow', 'Git', 'GitHub', 'Python'],
    outcomes: [
      'TSI-Lab experiment tracking and reproducibility framework',
      'Evaluation harness with versioned benchmark configurations',
      'Published methodology notes and experiment reports',
    ],
  },
  {
    id: 'applied',
    index: '05',
    title: 'Applied Intelligence Engineering',
    summary:
      'Connecting research to practice — building systems that apply language models responsibly and expose their real behaviour.',
    initialPriority: false,
    objectives: [
      'Apply existing models to concrete engineering problems',
      'Develop tooling that surfaces model behaviour and failure modes',
      'Feed practical findings back into the research agenda',
    ],
    questions: [
      'Where do current models fail in real applications, and why?',
      'Which capabilities matter most for practical intelligent systems?',
      'How can applied work inform architecture and data decisions?',
    ],
    technologies: ['Python', 'TypeScript', 'Transformers', 'Docker'],
    outcomes: [
      'Applied prototypes with documented observations',
      'Internal tools supporting research workflows',
      'A practical requirements view informing TSI-Base design',
    ],
  },
];
