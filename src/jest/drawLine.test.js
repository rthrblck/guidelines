const drawLine = require('./drawLine');

test('generates a line with default values', () => {
  expect(drawLine()).toEqual({
    x1: '0',
    y1: '10',
    x2: '1000',
    y2: '10',
    strokeWidth: '1',
    stroke: 'black',
  });
});
