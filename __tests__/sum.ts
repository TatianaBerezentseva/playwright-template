import sum from '../src/sum';

describe("Проверка арифметики", () => {
  test('Должна быть тройка', () => {
    expect(sum(1,2)).toBe(3);
  });
});
