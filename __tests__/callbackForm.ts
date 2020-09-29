import { Browser, chromium } from "playwright";

let browser: Browser;

describe("Проверка обратного звонка", () => {
  beforeAll(async () => {
    console.log(process.env.MY_ENV);
    browser = await chromium.launch({
      headless: true,
    });
  });

  test("Должен быть заголовок", async () => {
    const website = "https://sdvor.com/";
    const modalTitleText = "Заказать обратный звонок";
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto(website);
    await page.click(`[data-testid="CallBackButton"]`);

    const modalTitle = await page.$eval(
      `[data-test-id="Popup"] > form > h2`,
      (el) => el.textContent
    );
    expect(modalTitle).toBe(modalTitleText);
  });

  afterAll(async () => {
    await browser.close();
  });
});
