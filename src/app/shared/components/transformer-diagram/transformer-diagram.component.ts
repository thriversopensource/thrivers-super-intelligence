import { ChangeDetectionStrategy, Component } from '@angular/core';

interface DiagramToken {
  readonly label: string;
  readonly x: number;
}

/**
 * Schematic of a decoder-only transformer (the architecture behind TSI-GPT).
 * Purely illustrative — no metrics or configuration values are implied.
 */
@Component({
  selector: 'app-transformer-diagram',
  templateUrl: './transformer-diagram.component.html',
  styleUrl: './transformer-diagram.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TransformerDiagramComponent {
  protected readonly tokens: readonly DiagramToken[] = [
    { label: 'build', x: 44 },
    { label: 'ing', x: 116 },
    { label: '·the', x: 188 },
    { label: '·found', x: 260 },
    { label: 'ations', x: 332 },
  ];

  /** Causal attention arcs: each token attends to itself and earlier tokens. */
  protected readonly arcs = this.buildArcs();

  private buildArcs(): readonly { readonly id: string; readonly d: string; readonly delay: string }[] {
    const centre = (i: number) => this.tokens[i].x + 32;
    const last = this.tokens.length - 1;
    return this.tokens.slice(0, last).map((_, i) => {
      const x1 = centre(last);
      const x2 = centre(i);
      const depth = 10 + (last - i) * 7;
      return {
        id: `arc-${i}`,
        d: `M ${x1} 474 C ${x1} ${474 + depth}, ${x2} ${474 + depth}, ${x2} 474`,
        delay: `${i * 0.35}s`,
      };
    });
  }
}
