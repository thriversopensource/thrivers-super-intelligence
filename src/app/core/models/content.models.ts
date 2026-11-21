/**
 * Typed content models for the TSI website.
 * All page content lives in `src/app/data` and conforms to these interfaces.
 */

export interface NavLink {
  readonly label: string;
  readonly path: string;
}

/** Roadmap year in which a capability, tool or milestone becomes central. */
export type PhaseId = 'year-1' | 'year-2' | 'year-3';

export interface ResearchPillar {
  readonly id: string;
  readonly index: string;
  readonly title: string;
  readonly summary: string;
  /** Initial research priorities are highlighted across the site. */
  readonly initialPriority: boolean;
  readonly objectives: readonly string[];
  readonly questions: readonly string[];
  readonly technologies: readonly string[];
  readonly outcomes: readonly string[];
}

/**
 * Status must reflect real progress. Update it in `data/projects.data.ts`
 * as work actually lands — never mark something completed in advance.
 */
export type ProjectStatus = 'planned' | 'in-progress' | 'completed';

export interface ResearchProject {
  readonly id: string;
  readonly name: string;
  readonly tagline: string;
  readonly description: string;
  readonly objective: string;
  readonly stack: readonly string[];
  readonly status: ProjectStatus;
  readonly phase: PhaseId;
  readonly deliverables: readonly string[];
  readonly relatedPillars: readonly string[];
}

export interface RoadmapMilestone {
  readonly id: string;
  readonly title: string;
  readonly detail: string;
  /** Indicative window within the phase, e.g. "Q1". */
  readonly window: string;
}

export interface RoadmapPhase {
  readonly id: PhaseId;
  readonly year: number;
  readonly period: string;
  readonly title: string;
  readonly summary: string;
  readonly objectives: readonly string[];
  readonly learningAreas: readonly string[];
  readonly milestones: readonly RoadmapMilestone[];
  readonly deliverables: readonly string[];
  readonly successCriteria: readonly string[];
}

export interface Technology {
  readonly name: string;
  readonly role: string;
  /** Roadmap phase in which the tool becomes central to the work. */
  readonly phase: PhaseId;
}

export interface TechnologyCategory {
  readonly id: string;
  readonly name: string;
  readonly description: string;
  readonly technologies: readonly Technology[];
}

export interface ProgressionStage {
  readonly index: string;
  readonly title: string;
  readonly description: string;
  readonly horizon: string;
}

export interface CtaLink {
  readonly label: string;
  readonly path: string;
  readonly queryParams?: Record<string, string>;
}
