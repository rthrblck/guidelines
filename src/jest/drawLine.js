// Dumb function. Adds user defined inputs to generate the increment between lines
function calc(xHeight = 4, aHeight = 2, dHeight = 2, iSpace = 2, nibWidth = 3) {
  const nibSpacing = xHeight + aHeight + dHeight + iSpace;
  const lineSpacing = nibSpacing * nibWidth;
  return lineSpacing;
}

// Dumb function. Generates an object using function args as properties.
function line(x1 = '0', y1 = '10', x2 = '1000', y2 = '10', w = '1', s = 'black') {
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

// Dumb Function. Pushes object created by previous function into an array
function lineArray() {
  const lines = [];
  const line =
    {
      x1: '0',
      y1: '10',
      x2: '1000',
      y2: '10',
      strokeWidth: '1',
      stroke: 'black',
    };
  lines.push(line);
  return lines;
}

// Smart function? Manages user inputs and uses above functions to produce array of lines.
// function ascenderGroup () {
//   for (
//     //initialExpression
//     //condition
//     //incrementExpressions
//   )
//   {
//     //statement
//   }
// }
module.exports = { calc, line, lineArray };
