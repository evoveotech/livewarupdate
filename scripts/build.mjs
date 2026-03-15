#!/usr/bin/env node
/**
 * Build script that skips the blog when Node < 22.12 (Astro requirement).
 * Run `nvm use 22` for a full build including the blog.
 */
import { execSync } from 'child_process';

const [major, minor] = process.version
  .slice(1)
  .split('.')
  .map(Number);
const hasBlogSupport = major > 22 || (major === 22 && minor >= 12);

if (hasBlogSupport) {
  execSync('npm run build:blog', { stdio: 'inherit' });
} else {
  console.log(
    'Skipping blog build (Astro requires Node >=22.12.0). Run "nvm use 22" for full build.'
  );
}

execSync('node scripts/copy-openapi.mjs', { stdio: 'inherit' });
execSync('npx tsc', { stdio: 'inherit' });
execSync('npx vite build', { stdio: 'inherit' });
