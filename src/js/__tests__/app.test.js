import Validator from '../app';

test('В username не латинские буквы', () => {
  const validError = new Validator();
  expect(validError.validateUsername('Марина')).toBe(false);
});

test('В username больше 3 цифр подряд', () => {
  const validError = new Validator();
  expect(validError.validateUsername('Марина5556')).toBe(false);
});

test('В username в начале цифры', () => {
  const validError = new Validator();
  expect(validError.validateUsername('10Марина')).toBe(false);
});

test('В username в конце -', () => {
  const validError = new Validator();
  expect(validError.validateUsername('Марина-')).toBe(false);
});

test('username корректное', () => {
  const valid = new Validator();
  expect(valid.validateUsername('Marina')).toBe(true);
});
