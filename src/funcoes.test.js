import { test, expect } from 'vitest';
import { soma, subtracao } from './funcoes';

test('Teste 1: Soma de 1 + 1 deve ser 2', () => {
  expect(soma(1, 1)).toBe(2);
});

test('Teste 2: Soma de 2 + 3 deve ser 5', () => {
  expect(soma(2, 3)).toBe(5);
});

test('Teste 3: Subtração de 5 - 2 deve ser 3', () => {
  expect(subtracao(5, 2)).toBe(3);
});

test('Teste 4: Subtração de 10 - 10 deve ser 0', () => {
  expect(subtracao(10, 10)).toBe(0);
});

test('Teste 5: Soma de números negativos (-1 + -1) deve ser -2', () => {
  expect(soma(-1, -1)).toBe(-2);
});