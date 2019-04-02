const svgPropsBlackLetter = {
  lineArray: [
    {
      x1: '0',
      y1: '11',
      x2: '1000',
      y2: '11',
      strokeWidth: '1',
      stroke: 'black',
    },
    {
      x1: '0',
      y1: '31',
      x2: '1000',
      y2: '31',
      strokeWidth: '1',
      stroke: 'black',
    },
    {
      x1: '0',
      y1: '71',
      x2: '1000',
      y2: '71',
      strokeWidth: '1',
      stroke: 'black',
    },
    {
      x1: '0',
      y1: '91',
      x2: '1000',
      y2: '91',
      strokeWidth: '1',
      stroke: 'black',
    },
  ],

  pageSettings: {
    pW: 600,
    pH: 800,
    lM: 10,
    rM: 10,
    tM: 10,
    bM: 10,
  },

  basicLines: {
    nW: 3,
    xH: 5,
    aH: 5,
    dH: 5,
    cH: 4,
    bH: 0,
    iS: 1,
  },

  angleLines: {
    vA: 90,
    vS: 10,
    pA: 0,
    pS: 10,
  },

};

const appStateBlackLetter = {

// Basic lines
  nW: 3,
  xH: 5,
  aH: 5,
  dH: 5,
  cH: 4,
  bH: 0,
  bC: 'black',
  iS: 1,

  // Angled lines
  vA: 10,
  vS: 100,
  vC: 'gray',
  pA: 10,
  pS: 100,
  pC: 'red',

  // Page settings
  pH: 850,
  pW: 1100,
  tM: 10,
  bM: 10,
  lM: 10,
  rM: 10,
};

export { svgPropsBlackLetter, appStateBlackLetter };
