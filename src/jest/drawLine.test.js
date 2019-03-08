const lines = require('./drawLine');

// Horizontal line
test('generates a horizontal line object with default key/values', () => {
  expect(lines.horizLine(10)).toEqual({
    x1: 0,
    y1: 10,
    x2: 1000,
    y2: 10,
    strokeWidth: 1,
    stroke: 'black',
  });
});

// Diagonal line
test('generates a diagonal line object with default key/values', () => {
  expect(lines.diagLine(20, 20)).toEqual({
    x1: 20,
    y1: 0,
    x2: 20,
    y2: 1000,
    strokeWidth: 1,
    stroke: 'gray',
    transform: 'rotate(20, 20, 0)',
  });
});
// LineGroup

test('lineGroup with default values give me 462 lines', () => {
  expect(lines.lineGroup().length).toEqual(462);
});

test('lineGroup with default values give me an expected first line object', () => {
  const lineArray = lines.lineGroup();
  expect(lineArray[0]).toEqual({
    x1: 0,
    y1: 10,
    x2: 1000,
    y2: 10,
    strokeWidth: 1,
    stroke: 'black',
  });
});

test('lineGroup with default values give me an expected second line object', () => {
  const lineArray = lines.lineGroup();
  expect(lineArray[1]).toEqual({
    x1: 0,
    y1: 12,
    x2: 1000,
    y2: 12,
    strokeWidth: 1,
    stroke: 'black',
  });
});

test('lineGroup with default values give me an expected third line object', () => {
  const lineArray = lines.lineGroup();
  expect(lineArray[2]).toEqual({
    x1: 0,
    y1: 16,
    x2: 1000,
    y2: 16,
    strokeWidth: 1,
    stroke: 'black',
  });
});

test('lineGroup with default values give me an expected fourth line object', () => {
  const lineArray = lines.lineGroup();
  expect(lineArray[3]).toEqual({
    x1: 0,
    y1: 18,
    x2: 1000,
    y2: 18,
    strokeWidth: 1,
    stroke: 'black',
  });
});

test('lineGroup with default values give me an expected fifth line object', () => {
  const lineArray = lines.lineGroup();
  expect(lineArray[4]).toEqual({
    x1: 0,
    y1: 20,
    x2: 1000,
    y2: 20,
    strokeWidth: 1,
    stroke: 'black',
  });
});


test('lineGroup with default values give me an expected last line object', () => {
  const lineArray = lines.lineGroup();
  expect(lineArray[lineArray.length - 1]).toEqual({
    x1: 1990,
    y1: 0,
    x2: 1990,
    y2: 1000,
    strokeWidth: 1,
    stroke: 'gray',
    transform: 'rotate(10, 1990, 0)',
  });
});
