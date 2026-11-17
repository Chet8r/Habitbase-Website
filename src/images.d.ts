declare module '*.PNG' {
  const src: string
  export default src
}

/** A resized WebP image from the `?screenshot` preset in vite.config.ts. */
interface ResponsiveImage {
  /** The largest size, used by the lightbox. */
  src: string
  /** Every size, so the browser can pick the smallest that looks sharp. */
  srcset: string
  w: number
  h: number
}

declare module '*?screenshot' {
  const image: ResponsiveImage
  export default image
}

declare module '*?icon' {
  const src: string
  export default src
}
