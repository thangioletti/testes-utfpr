const validateIdentifier = require('./identifier')

test('Inválida (Iniciar com letra)', () => {
  expect(validateIdentifier("#abcde")).toBe(false);
});

test('Inválida (conter apenas letras e digitos)', () => {
  expect(validateIdentifier("ab12#e")).toBe(false);
});

test('Inválida (maior que 6 caracteres)', () => {
    expect(validateIdentifier("ab12#e")).toBe(false);
});


test('Inválida (deve conter entre 1 e 6 caracteres)', () => {
    expect(validateIdentifier(null)).toBe(false);
});


test('Válida (atingiu todas as condições do identificador)', () => {
    expect(validateIdentifier("abc123")).toBe(true);
    expect(validateIdentifier("abc")).toBe(true);
    expect(validateIdentifier("a123")).toBe(true);
    expect(validateIdentifier("a")).toBe(true);
});


  
