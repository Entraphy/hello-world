import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync, accessSync, constants } from 'node:fs';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');
const htmlPath = path.join(projectRoot, 'index.html');
const html = readFileSync(htmlPath, 'utf8');

const WELL_KNOWN_PATH = path.join(projectRoot, '.well-known', 'security.txt');

function findFirst(regex) {
  const match = html.match(regex);
  return match ? match[0] : '';
}

test('request early access form posts to FormSubmit', () => {
  const formOpenTag = findFirst(/<form[^>]+class="cta"[^>]*>/i);
  assert.ok(formOpenTag.includes('action="https://formsubmit.co/jarvis.taylor@taylogitech.com"'), 'Form action is not pointing to FormSubmit');
  assert.ok(formOpenTag.includes('method="POST"') || formOpenTag.includes('method="post"'), 'Form must POST emails');
});

test('request early access button is present and labeled', () => {
  const hasButton = /<button[^>]*>\s*Request early access\s*<\/button>/i.test(html);
  assert.ok(hasButton, 'Request early access button text missing');
});

test('security.txt link exists in footer', () => {
  const securityLink = findFirst(/<a[^>]+href="\/.well-known\/security\.txt"[^>]*>[^<]*<\/a>/i);
  assert.ok(securityLink.includes('security.txt'), 'Footer link to security.txt missing');
});

test('security.txt file is deployed under .well-known', () => {
  assert.doesNotThrow(() => accessSync(WELL_KNOWN_PATH, constants.R_OK));
  const contents = readFileSync(WELL_KNOWN_PATH, 'utf8');
  assert.ok(/Contact:/i.test(contents), 'security.txt missing Contact');
  assert.ok(/Policy:/i.test(contents), 'security.txt missing Policy');
});
