#!/usr/bin/env node
/**
 * Copies OpenAPI specs to public/openapi/ for the Swagger UI page.
 * Run before build so api-docs.html can load all specs.
 */
import { cpSync, mkdirSync, readdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');
const docsApi = join(root, 'docs', 'api');
const publicOpenapi = join(root, 'public', 'openapi');

mkdirSync(publicOpenapi, { recursive: true });

// Copy all *Service.openapi.json from docs/api/
const files = readdirSync(docsApi).filter((f) => f.endsWith('.openapi.json'));
for (const f of files) {
  cpSync(join(docsApi, f), join(publicOpenapi, f), { force: true });
}
console.log(`[copy-openapi] Copied ${files.length} OpenAPI specs to public/openapi/`);
