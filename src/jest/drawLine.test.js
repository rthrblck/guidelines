const lines = require('./drawLine');

test('generates a line object with default key/values', () => {
  expect(lines.line()).toEqual(
    {
      x1: 0,
      y1: 10,
      x2: 1000,
      y2: 10,
      strokeWidth: 1,
      stroke: 'black',
    });
});

test('calculates user inputs to determine line interval', () => {
  expect(lines.calc()).toEqual(
    lineSpacing = 30
  );
})

test('lineGroup with default values give me 34 lines', () => {
  expect(lines.lineGroup().length).toEqual(34);
})

test('lineGroup with default values give me an expected first line object', () => {
  const lineArray = lines.lineGroup()
  expect(lineArray[0]).toEqual(
    {
      x1: 0,
      y1: 10,
      x2: 1000,
      y2: 10,
      strokeWidth: 1,
      stroke: 'black',
    });
})

test('lineGroup with default values give me an expected second line object', () => {
  const lineArray = lines.lineGroup()
  expect(lineArray[1]).toEqual(
    {
        x1: 0,
        y1: 40,
        x2: 1000,
        y2: 40,
        strokeWidth: 1,
        stroke: 'black',
      });
})

test('lineGroup with default values give me an expected third line object', () => {
  const lineArray = lines.lineGroup()
  expect(lineArray[2]).toEqual(
    {
        x1: 0,
        y1: 70,
        x2: 1000,
        y2: 70,
        strokeWidth: 1,
        stroke: 'black',
      });
})

test('lineGroup with default values give me an expected last line object', () => {
  const lineArray = lines.lineGroup()
  expect(lineArray[lineArray.length - 1]).toEqual(
    {
        x1: 0,
        y1: 1000,
        x2: 1000,
        y2: 1000,
        strokeWidth: 1,
        stroke: 'black',
      });
})
