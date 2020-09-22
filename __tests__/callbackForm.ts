import { chromium } from "playwright";


describe("Проверка обратного звонка", () => {
  test('Должен быть заголовок', async () => {
    const website = 'https://sdvor.com/';
    const modalTitleText = 'Заказать обратный звонок';

    const browser = await chromium.launch({
      headless: false,
    });

    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto(website);
    await page.click(`[data-testid="CallBackButton"]`);

    const modalTitle = await page.$eval(`[data-test-id="Popup"] > form > h2`, (el) => el.textContent);
    expect(modalTitle).toBe(modalTitleText);
    await browser.close();
  });
});
