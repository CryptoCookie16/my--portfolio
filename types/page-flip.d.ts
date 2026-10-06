declare module "page-flip" {
  export type FlipCorner = "top" | "bottom"

  export interface PageFlipEvent<T = unknown> {
    data: T
    object: PageFlip
  }

  export class PageFlip {
    constructor(parent: HTMLElement, settings: Record<string, string | number | boolean>)
    loadFromImages(images: string[]): void
    loadFromHTML(pages: NodeListOf<HTMLElement> | HTMLElement[]): void
    on(event: "init", callback: (event: PageFlipEvent) => void): void
    on(event: "flip", callback: (event: PageFlipEvent<number>) => void): void
    flip(page: number, corner?: FlipCorner): void
    flipNext(corner?: FlipCorner): void
    flipPrev(corner?: FlipCorner): void
    destroy(): void
  }
}
