const lines = require('./drawLine');

test('generates a line object with default key/values', () => {
  expect(lines.line(y = 10)).toEqual(
    {
      x1: 0,
      y1: 10,
      x2: 1000,
      y2: 10,
      strokeWidth: 1,
      stroke: 'black',
    });
});

// test('calculates user inputs to determine line interval', () => {
//   expect(lines.calc()).toEqual(
//     lineS = 30
//   );
// })

test('lineGroup with default values give me 396 lines', () => {
  expect(lines.lineGroup().length).toEqual(396);
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
        y1: 12,
        x2: 1000,
        y2: 12,
        strokeWidth: 1,
        stroke: 'black',
      });
})

test('lineGroup with default values give me an expected third line object', () => {
  const lineArray = lines.lineGroup()
  expect(lineArray[2]).toEqual(
    {
        x1: 0,
        y1: 16,
        x2: 1000,
        y2: 16,
        strokeWidth: 1,
        stroke: 'black',
      });
})

test('lineGroup with default values give me an expected fourth line object', () => {
  const lineArray = lines.lineGroup()
  expect(lineArray[3]).toEqual(
    {
        x1: 0,
        y1: 18,
        x2: 1000,
        y2: 18,
        strokeWidth: 1,
        stroke: 'black',
      });
})

test('lineGroup with default values give me an expected fifth line object', () => {
  const lineArray = lines.lineGroup()
  expect(lineArray[4]).toEqual(
    {
        x1: 0,
        y1: 20,
        x2: 1000,
        y2: 20,
        strokeWidth: 1,
        stroke: 'black',
      });
})


test('lineGroup with default values give me an expected last line object', () => {
  const lineArray = lines.lineGroup()
  expect(lineArray[lineArray.length - 1]).toEqual(
    {
        x1: 0,
        y1: 998,
        x2: 1000,
        y2: 998,
        strokeWidth: 1,
        stroke: 'black',
      });
})
