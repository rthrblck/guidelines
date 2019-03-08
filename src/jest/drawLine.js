// Placeholder for React state inputs
const state = {
// Page dimensions
  tM: 10,
  bM: 20,
  lM: 10,
  rM: 10,
  pH: 1000,
// Base proportions
  nW: 3,
  aH: 2,
  xH: 4,
  dH: 2,
  iS: 2,
// Angled lines
  vA: 10,
  vS: 30,
  pA: 30,
  pS: 30,
};

// Generates a line object using function args as properties with defaults as backup. Receives single Y input and inserts it into y1 and y2.
function horizLine(currentY) {
// Define default and input objects
  const defaults = {
    x1: 0,
    y1: 10,
    x2: 1000,
    y2: 10,
    w: 1,
    s: 'black',
  };
  const inputs = {
    y1: currentY,
    y2: currentY,
  };

  // Combine default and input objects into new object
  const mergedLine = Object.assign({}, defaults, inputs);

  // Define line based on merged object
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

// First stab at diagonal line drawing function
function diagLine(angle, currentX) {
  // Define default and input objects
  const defaults = {
    x1: 0,
    y1: 0,
    x2: 0,
    y2: 1000,
    w: 1,
    s: 'gray',
    r: 'rotate(0, 0, 0)',
  };
  const inputs = {
    x1: currentX,
    x2: currentX,
    r: `rotate(${angle}, ${currentX}, 0)`,
  };
  // Combine default and input objects into new object
  const mergedLine = Object.assign({}, defaults, inputs);
  // Define line based on merged object
  const line = {
    x1: mergedLine.x1,
    y1: mergedLine.y1,
    x2: mergedLine.x2,
    y2: mergedLine.y2,
    strokeWidth: mergedLine.w,
    stroke: mergedLine.s,
    transform: mergedLine.r,
  };

  return line;
}

// Manages user inputs and produces array of lines.
// Might be able to handle diagonal lines as well?

function lineGroup(inputs = state) {
  // Calculate line spacing period from user inputs in nib widths
  const lineS = (inputs.aH + inputs.xH + inputs.dH + inputs.iS);
  const lineArray = [];

  // Generates array of the 4 basic horizontal lines.
  for (
    let y = inputs.tM;
    y + inputs.aH + inputs.xH + inputs.dH <= inputs.pH;
    y += lineS
  ) {
    const aLine = horizLine(y);

    const xLine = horizLine(y + inputs.aH);

    const bLine = horizLine(y + inputs.aH + inputs.xH);

    const dLine = horizLine(y + inputs.aH + inputs.xH + inputs.dH);

    lineArray.push(aLine, xLine, bLine, dLine);
  }

  // Generates array of diagonal verticality lines
  for (
    // Starting X is left margin plus the vertical spacing
    let x = inputs.lM + inputs.vS;
    // To cover page in diag lines, need to generate lines far past the right margin. Placholder.
    x <= 2000;
    // Increment by the spacing between vert lines
    x += inputs.vS
  ) {
    const vLine = diagLine(inputs.vA, x);

    lineArray.push(vLine);
  }

  return lineArray;
}
module.exports = { horizLine, diagLine, lineGroup };
