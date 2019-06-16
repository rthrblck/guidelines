import React from 'react';

import jsPDF from 'jspdf-yworks';
import svg2pdf from 'svg2pdf.js';

const svgElement = document.getElementById('svg');

// create a new jsPDF instance
const pdf = new jsPDF('l', 'pt', [width, height]);

// render the svg element
svg2pdf(svgElement, pdf, {
  xOffset: 0,
  yOffset: 0,
  scale: 1,
});

// or simply save the created pdf
pdf.save('myPDF.pdf');

export default pdf;
