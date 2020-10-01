import sum from "../sum";

describe("Проверка арифметики", () => {
  test("Должна быть тройка", () => {
    expect(sum(1, 4), "А ДОЛЖНО БЫТЬ 3").toBe(3);
  });
});
