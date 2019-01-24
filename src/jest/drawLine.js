function drawLine(x1 = '0', y1 = '10', x2 = '1000', y2 = '10', w = '1', s = 'black') {
  const line = {
    x1: x1,
    y1: y1,
    x2: x2,
    y2: y2,
    strokeWidth: w,
    stroke: s,
  };
  return line;
}
module.exports = drawLine;

// x1: '0',
// y1: '10',
// x2: '1000',
// y2: '10',
// strokeWidth: '1',
// stroke: 'black',
