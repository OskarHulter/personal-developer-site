// example.spec.ts
import { expect, test } from '@playwright/test'
import { dev } from './example.spec'


test('example test', async ({ page }) => {
  await page.goto(dev);
  expect(await page.screenshot()).toMatchSnapshot('landing.png');
});