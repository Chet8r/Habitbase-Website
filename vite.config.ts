import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { imagetools } from 'vite-imagetools'

// Image presets, used as a suffix on image imports (types are in src/images.d.ts).
// The source PNGs stay untouched; the build serves resized WebP copies.
const imagePresets: Record<string, string> = {
  // Phone screenshots: 480px for the page, 960px for the lightbox.
  screenshot: 'w=480;960&format=webp&as=img',
  // The 56px app icon, at 3x.
  icon: 'w=168&format=webp',
}

// https://vite.dev/config/
export default defineConfig({
  base: '/',
  plugins: [
    react(),
    imagetools({
      defaultDirectives: (url) => {
        const preset = Object.keys(imagePresets).find((name) => url.searchParams.has(name))
        return new URLSearchParams(preset ? imagePresets[preset] : '')
      },
    }),
  ],
})
