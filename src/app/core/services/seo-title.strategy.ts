import { Injectable, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRouteSnapshot, RouterStateSnapshot, TitleStrategy } from '@angular/router';
import { BRAND } from '../../data/site.data';

/**
 * Sets the document title and description/Open Graph metadata from route config.
 * Routes declare `title` and `data: { description }`.
 */
@Injectable({ providedIn: 'root' })
export class SeoTitleStrategy extends TitleStrategy {
  private readonly title = inject(Title);
  private readonly meta = inject(Meta);

  override updateTitle(snapshot: RouterStateSnapshot): void {
    const pageTitle = this.buildTitle(snapshot);
    const fullTitle = pageTitle ? `${pageTitle} · ${BRAND.name}` : `${BRAND.name} — ${BRAND.positioning}`;
    const description = this.deepestDescription(snapshot.root) ?? BRAND.tagline;

    this.title.setTitle(fullTitle);
    this.meta.updateTag({ name: 'description', content: description });
    this.meta.updateTag({ property: 'og:title', content: fullTitle });
    this.meta.updateTag({ property: 'og:description', content: description });
    this.meta.updateTag({ name: 'twitter:title', content: fullTitle });
    this.meta.updateTag({ name: 'twitter:description', content: description });
  }

  private deepestDescription(route: ActivatedRouteSnapshot): string | undefined {
    let current: ActivatedRouteSnapshot | null = route;
    let description: string | undefined;
    while (current) {
      const value: unknown = current.data['description'];
      if (typeof value === 'string') description = value;
      current = current.firstChild;
    }
    return description;
  }
}
