import { expect, test } from '@playwright/test'


export const dev = 'http://localhost:3333/'

test('basic test', async ({ page }) => {
  await page.goto(dev)
  const title = page.locator('.navbar__inner .navbar__title')
  await expect(title).toHaveText('Playwright')
})

/* Extend basic test by providing a "table" fixture.
const testTableFicture = base.extend<{ todoPage: TodoPage }>({
  todoPage: async ({ page }, use) => {
    const todoPage = new TodoPage(page);
    await todoPage.goto();
    await todoPage.addToDo('item1');
    await todoPage.addToDo('item2');
    await use(todoPage);
    await todoPage.removeAll();
  },
});

testTableFicture('should add an item', async ({ todoPage }) => {
  await todoPage.addToDo('my item');
  // ...
});

testTableFicture('should remove an item', async ({ todoPage }) => {
  await todoPage.remove('item1');
  // ...
});
*/