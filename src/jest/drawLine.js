// First attempt at converting variables into object properties
const state = {
  tM: 10,
  bM: 20,
  lM: 10,
  rM: 10,
  nW: 3,
  pH: 1000,
  aH: 2,
  xH: 4,
  dH: 2,
  iS: 2,
};

// Dumb function. Generates a line object using function args as properties with defaults as backup.
function line(
  currentY,
  defaults = {
    x1: 0,
    y1: 10,
    x2: 1000,
    y2: 10,
    w: 1,
    s: 'black',
  },
) {
  const inputs = {
    y1: currentY,
    y2: currentY,
  };
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

// Smart function Manages user inputs and produces array of lines.
// Might be able to handle diagonal lines as well?

function lineGroup(inputs = state) {
  // Calculate line spacing period from user inputs in nib widths
  const lineS = (inputs.aH + inputs.xH + inputs.dH + inputs.iS);
  let currentY;
  const lineArray = [];

  for (
    let y = inputs.tM;
    y + inputs.aH + inputs.xH + inputs.dH <= inputs.pH;
    y += lineS
  ) {
    const aLine = line(currentY = y);

    const xLine = line(currentY = y + inputs.aH);

    const bLine = line(currentY = y + inputs.aH + inputs.xH);

    const dLine = line(currentY = y + inputs.aH + inputs.xH + inputs.dH);

    lineArray.push(aLine, xLine, bLine, dLine);
  }

  return lineArray;
}
module.exports = { line, lineGroup };
