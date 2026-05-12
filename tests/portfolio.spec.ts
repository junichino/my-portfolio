import { expect, test } from '@playwright/test';

test('renders bilingual portfolio and safe project copy', async ({ page }) => {
  await page.goto('/');

  await expect(page.getByRole('heading', { name: 'Sitthikorn Maneesut' })).toBeVisible();
  await expect(page.getByLabel('Primary actions').getByRole('link', { name: 'GitHub' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'A practical developer, still learning in public.' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Selected contributed work' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Currently exploring' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Codex' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Claude' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Gemini' })).toBeVisible();
  await expect(page.getByText('Contributed as Fullstack Developer')).toHaveCount(2);
  await expect(page.getByText('Contributed as Frontend Developer')).toHaveCount(2);

  await page.getByRole('button', { name: 'TH' }).click();
  await expect(page.getByRole('heading', { name: 'ผลงานที่เคยมีส่วนร่วม' })).toBeVisible();
  await expect(page.getByText('มีส่วนร่วมในบทบาท Fullstack Developer')).toHaveCount(2);
});

test('contact links point to the expected destinations', async ({ page }) => {
  await page.goto('/');

  await expect(page.getByRole('link', { name: /GitHub/ }).first()).toHaveAttribute(
    'href',
    'https://github.com/junichino',
  );
  await expect(page.getByRole('link', { name: /LinkedIn/ }).first()).toHaveAttribute(
    'href',
    'https://www.linkedin.com/in/sitthikornmaneesut/',
  );
  await expect(page.getByRole('link', { name: /Email/ }).first()).toHaveAttribute(
    'href',
    'mailto:sitthikornjuni@gmail.com',
  );
});
