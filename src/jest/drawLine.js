// Dumb function. Adds user defined inputs to generate the increment between lines. lineSpacing should end up as a global variable.
function calc(xHeight = 4, aHeight = 2, dHeight = 2, iSpace = 2, nibWidth = 3) {
  const nibSpacing = xHeight + aHeight + dHeight + iSpace;
  const lineSpacing = nibSpacing * nibWidth;
  return lineSpacing;
}

// Dumb function. Generates an object using function args as properties.
function line(inputs = {}, defaults = {x1: 0, y1: 10, x2: 1000, y2: 10, w: 1, s: 'black'}) {
  const mergedLine = Object.assign({}, defaults, inputs)
  const line = {
    x1: mergedLine.x1,
    y1: mergedLine.y1,
    x2: mergedLine.x2,
    y2: mergedLine.y2,
    strokeWidth: mergedLine.w,
    stroke: mergedLine.s,
  };
  return line;
}

// Smart function? Manages user inputs and uses above functions to produce array of lines. Will eventually need to be able to name all of the arrays it's creating based on which guideline they render. Might eventually be able to hand diagonal guidelines as well, but that might be another function
function lineGroup() {
  // Define topMargin variable to use as y initialExpression
  const topMargin = 10
  const pageHeight = 1000
  const lineSpacing = 30
  // All user inputs need to be defined here
  const lineArray = []
  for (
    // initialExpression: Y equals topMargin (10px as placeholder)
    let y = topMargin;
    // condition: As long as y ≤ pageHeight (1000px as placeholder)
    y <= pageHeight;
    // incrementExpressions: Increment y by lineSpacing (30px as placeholder)
    y += lineSpacing
  )
  {
    //statement:
      // Call line() to generate line using current y value for y1 and y2
    const lineX = line({y1: y, y2: y});
    lineArray.push(lineX);
  }
  return lineArray;
}
module.exports = { calc, line, lineGroup };
