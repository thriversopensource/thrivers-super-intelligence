import { RoadmapPhase } from '../core/models/content.models';

/** Proposed targets for the 2026–2029 programme. Not completed achievements. */
export const ROADMAP: readonly RoadmapPhase[] = [
  {
    id: 'year-1',
    year: 1,
    period: '2026–2027',
    title: 'Foundations',
    summary:
      'Build the mathematical and engineering foundations, implement a GPT-style transformer from scratch and run first pretraining experiments.',
    objectives: [
      'Establish strong foundations in the mathematics of deep learning',
      'Develop fluency with Python and PyTorch for research engineering',
      'Implement and train a decoder-only transformer end to end',
    ],
    learningAreas: [
      'Mathematics for AI',
      'Python and PyTorch',
      'Deep learning',
      'Transformer architecture',
      'GPT implementation',
      'Initial pretraining experiments',
    ],
    milestones: [
      {
        id: 'y1-m1',
        title: 'Mathematical foundations',
        detail: 'Linear algebra, probability, calculus and optimisation applied to neural networks.',
        window: 'Q1',
      },
      {
        id: 'y1-m2',
        title: 'Deep learning in PyTorch',
        detail: 'Build and train core architectures; establish engineering and testing practices.',
        window: 'Q2',
      },
      {
        id: 'y1-m3',
        title: 'Transformer from scratch',
        detail: 'Implement attention, transformer blocks and a full TSI-GPT reference model.',
        window: 'Q3',
      },
      {
        id: 'y1-m4',
        title: 'First pretraining runs',
        detail: 'Train small models on curated corpora; track experiments with TSI-Lab.',
        window: 'Q4',
      },
    ],
    deliverables: [
      'TSI-GPT reference implementation',
      'TSI-Lab experiment tracking conventions',
      'Technical notes on transformer internals',
      'Initial pretraining experiment reports',
    ],
    successCriteria: [
      'A small GPT-style model trained end to end from our own code',
      'Experiments reproducible from versioned configuration',
      'Each core component explained in written documentation',
    ],
  },
  {
    id: 'year-2',
    year: 2,
    period: '2027–2028',
    title: 'Research & Engineering',
    summary:
      'Move from implementation to research: compare architectures, optimise attention, engineer datasets and scale training across GPUs.',
    objectives: [
      'Run controlled comparisons of transformer architecture variants',
      'Build a production-quality dataset engineering pipeline',
      'Scale training to distributed, multi-GPU environments',
    ],
    learningAreas: [
      'Advanced transformer architectures',
      'Attention optimisation',
      'Architecture comparisons',
      'Dataset engineering',
      'Distributed training',
      'Multi-GPU experimentation',
    ],
    milestones: [
      {
        id: 'y2-m1',
        title: 'Architecture comparison framework',
        detail: 'TSI-Architect supports like-for-like evaluation of transformer variants.',
        window: 'Q1',
      },
      {
        id: 'y2-m2',
        title: 'Attention optimisation studies',
        detail: 'Evaluate efficient attention mechanisms for quality and throughput.',
        window: 'Q2',
      },
      {
        id: 'y2-m3',
        title: 'Dataset pipeline',
        detail: 'TSI-Data processes, filters, deduplicates and tokenises corpora reproducibly.',
        window: 'Q3',
      },
      {
        id: 'y2-m4',
        title: 'Multi-GPU training',
        detail: 'Distributed training with PyTorch Distributed and FSDP, with measured throughput.',
        window: 'Q4',
      },
    ],
    deliverables: [
      'TSI-Architect comparison framework and studies',
      'TSI-Data processing and tokenisation pipeline',
      'Distributed training configuration and benchmarks',
      'Research notes on architecture trade-offs',
    ],
    successCriteria: [
      'Architecture decisions backed by documented comparative evidence',
      'Datasets produced reproducibly with recorded provenance',
      'Stable multi-GPU training runs with measured efficiency',
    ],
  },
  {
    id: 'year-3',
    year: 3,
    period: '2028–2029',
    title: 'Independent Model Development',
    summary:
      'Bring the work together: finalise the architecture, build the training corpus, pretrain and evaluate TSI-Base, and document the process openly.',
    objectives: [
      'Select and finalise the TSI-Base architecture',
      'Assemble the pretraining corpus and conduct independent pretraining',
      'Evaluate the model transparently and publish technical documentation',
    ],
    learningAreas: [
      'Finalise model architecture',
      'Build training datasets',
      'Conduct independent pretraining',
      'Evaluate model performance',
      'Publish technical documentation',
      'Develop TSI-Base',
    ],
    milestones: [
      {
        id: 'y3-m1',
        title: 'Architecture freeze',
        detail: 'Final TSI-Base specification selected from Year 2 evidence.',
        window: 'Q1',
      },
      {
        id: 'y3-m2',
        title: 'Training corpus complete',
        detail: 'Pretraining dataset assembled, documented and tokenised.',
        window: 'Q2',
      },
      {
        id: 'y3-m3',
        title: 'Independent pretraining',
        detail: 'TSI-Base pretraining run executed on distributed infrastructure.',
        window: 'Q3',
      },
      {
        id: 'y3-m4',
        title: 'Evaluation & publication',
        detail: 'Model evaluated against a transparent suite; technical report published.',
        window: 'Q4',
      },
    ],
    deliverables: [
      'TSI-Base architecture specification',
      'Documented pretraining corpus',
      'Independently pretrained TSI-Base model',
      'Evaluation report and technical documentation',
    ],
    successCriteria: [
      'A base model pretrained end to end by TSI',
      'Evaluation methodology published alongside results',
      'Full process documented well enough to be reproduced',
    ],
  },
];
