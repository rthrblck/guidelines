const lines = require('./drawLine');

test('generates a line object with default key/values', () => {
  expect(lines.line()).toEqual(
    {
      x1: '0',
      y1: '10',
      x2: '1000',
      y2: '10',
      strokeWidth: '1',
      stroke: 'black',
    });
});

test('pushes object into array', () => {
  expect(lines.lineArray()).toEqual(
    [{
      x1: '0',
      y1: '10',
      x2: '1000',
      y2: '10',
      strokeWidth: '1',
      stroke: 'black',
    }]);
});
