// Horizontal line drawing function
function horizLine(currentY, strokeColor) {
// Define default and input objects
  const defaults = {
    x1: 0,
    y1: 10,
    // Need to learn a little trig to calculate x2
    x2: 10000,
    y2: 10,
    w: 0.5,
    s: 'black',
  };
  const inputs = {
    y1: currentY,
    y2: currentY,
    s: strokeColor,
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

// Diagonal line drawing function
function diagLine(angle, currentX, strokeColor) {
  // Define default and input objects
  const defaults = {
    x1: 0,
    y1: -10000,
    x2: 0,
    y2: 10000,
    w: 0.5,
    s: 'gray',
    r: 'rotate(0, 0, 0)',
  };
  const inputs = {
    x1: currentX,
    x2: currentX,
    s: strokeColor,
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

// Accepts inputs and produces array of lines.
function lineGroup(inputs) {
  const {
    nW, bC, sA, sS, sC, pA, pS, pC, pH, tM, bM, lM,
  } = inputs;

  // Sets default value to zero if falsey
  // Multiplies spacing by nib width
  const xH = (inputs.xH || 0) * nW;
  const aH = (inputs.aH || 0) * nW;
  const dH = (inputs.dH || 0) * nW;
  const iS = (inputs.iS || 0) * nW;

  // Calculate line spacing period in nib widths
  const lineS = aH + xH + dH + iS;
  const lineArray = [];

  // Generates array of the 4 basic horizontal lines.
  for (
    let y = tM;
    y + aH + xH + dH <= pH - bM;
    y += lineS
  ) {
    const aLine = horizLine(y, bC);

    const xLine = horizLine(y + aH, bC);

    const bLine = horizLine(y + aH + xH, bC);

    const dLine = horizLine(y + aH + xH + dH, bC);

    lineArray.push(aLine, xLine, bLine, dLine);
  }

  // Generates array of verticality lines
  for (
    // Starting X is left margin plus the vertical spacing
    let x = lM + sS;
    // To cover page in diag lines, need to generate lines far past the right margin. Placholder.
    x <= 10000;
    // Increment by the spacing between vert lines
    x += sS
  ) {
    const vLine = diagLine(sA, x, sC);

    lineArray.push(vLine);
  }

  // Generates array of pen angle lines
  for (
    let x = lM + pS;
    // Placeholder, will need to cover visible page in lines
    x <= 10000;
    x += pS
  ) {
    const pALine = diagLine((90 - pA), x, pC);

    lineArray.push(pALine);
  }

  return lineArray;
}

export default lineGroup;
