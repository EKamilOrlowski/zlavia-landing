// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

const repository = process.env.GITHUB_REPOSITORY?.split('/')[1] ?? 'zlavia-landing';
const owner = process.env.GITHUB_REPOSITORY_OWNER ?? 'your-username';

// https://astro.build/config
export default defineConfig({
  site: `https://${owner}.github.io`,
  base: `/${repository}`,
  vite: {
    plugins: [tailwindcss()]
  }
});