const drawLine = require('./drawLine');

test('generates an object with default key/values', () => {
  expect(drawLine()).toEqual(
    {
      x1: '0',
      y1: '10',
      x2: '1000',
      y2: '10',
      strokeWidth: '1',
      stroke: 'black',
    });
});
