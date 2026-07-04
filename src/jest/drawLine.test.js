import { describe, expect, test } from 'vitest';
import lineGroup from '../drawLine';

const appDefaults = {
  nW: 3,
  xH: 5,
  aH: 3,
  dH: 3,
  bC: 'black',
  iS: 1,
  sA: 0,
  sS: 30,
  sC: 'gray',
  pA: 45,
  pS: 30,
  pC: 'red',
  pH: 216,
  pW: 279,
  tM: 10,
  bM: 15,
  lM: 10,
  rM: 10,
};

test('returns an array', () => {
  const lines = lineGroup(appDefaults);
  expect(Array.isArray(lines)).toBe(true);
});

test('each line has the expected SVG attributes', () => {
  const lines = lineGroup(appDefaults);
  lines.forEach((line) => {
    expect(line).toHaveProperty('x1');
    expect(line).toHaveProperty('y1');
    expect(line).toHaveProperty('x2');
    expect(line).toHaveProperty('y2');
    expect(line).toHaveProperty('strokeWidth');
    expect(line).toHaveProperty('stroke');
  });
});

test('horizontal lines have y1 equal to y2', () => {
  const lines = lineGroup(appDefaults);
  const horizontals = lines.filter((l) => l.y1 === l.y2);
  expect(horizontals.length).toBeGreaterThan(0);
});

test('diagonal lines have a transform property', () => {
  const lines = lineGroup(appDefaults);
  const diagonals = lines.filter((l) => l.transform);
  expect(diagonals.length).toBeGreaterThan(0);
});

test('first horizontal line is at the top margin', () => {
  const lines = lineGroup(appDefaults);
  const firstHorizontal = lines.find((l) => l.y1 === l.y2);
  expect(firstHorizontal.y1).toBe(appDefaults.tM);
});

test('line stroke is passed through', () => {
  const lines = lineGroup(appDefaults);
  const blackLines = lines.filter((l) => l.stroke === 'black');
  expect(blackLines.length).toBeGreaterThan(0);
});
