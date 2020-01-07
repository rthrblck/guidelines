import React from 'react';
import PropTypes from 'prop-types';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

import CustomInput from './CustomInput';

function Inputs(props) {
  return (
    <div>
      <Card>
        <CardContent>
          <Typography>Fundamental Lines</Typography>

          {/* Nib Width */}
          <CustomInput
            id="nW"
            label="Nib-width"
            value={props.nW}
            min={0}
            max={100}
            step={0.1}
            inputAdornment="mm"
            helpText="The width of your broad-edged nib"

            onChange={props.handleChange}
            addButtonClick={props.addButtonClick}
            subtractButtonClick={props.subtractButtonClick}
          />

          <Divider />

          {/* X-height */}
          <CustomInput
            id="xH"
            label="X-height"
            value={props.xH}
            min={0}
            max={100}
            step={0.25}
            inputAdornment="nw"
            helpText="The distance between the baseline and the x-height in nib-widths"

            onChange={props.handleChange}
            addButtonClick={props.addButtonClick}
            subtractButtonClick={props.subtractButtonClick}
          />

          <Divider />

          {/* Ascender height */}
          <CustomInput
            id="aH"
            label="Ascender height"
            value={props.aH}
            min={0}
            max={100}
            step={0.25}
            inputAdornment="nw"
            helpText="The distance between the x-height and the ascender line in nib-widths"

            onChange={props.handleChange}
            addButtonClick={props.addButtonClick}
            subtractButtonClick={props.subtractButtonClick}
          />

          <Divider />

          {/* Descender height */}
          <CustomInput
            id="dH"
            label="Descender height"
            value={props.dH}
            min={0}
            max={100}
            step={0.25}
            inputAdornment="nw"
            helpText="The distance between the baseline and the descender line in nib-widths"

            onChange={props.handleChange}
            addButtonClick={props.addButtonClick}
            subtractButtonClick={props.subtractButtonClick}
          />

          <Divider />

          {/* Interlinear spacing */}
          <CustomInput
            id="iS"
            label="Interlinear spacing"
            value={props.iS}
            min={0}
            max={100}
            step={0.25}
            inputAdornment="nw"
            helpText="The distance between the descender line of one row and the ascender line of the row below it, in nib widths"

            onChange={props.handleChange}
            addButtonClick={props.addButtonClick}
            subtractButtonClick={props.subtractButtonClick}
          />

        </CardContent>
      </Card>

      <Card>
        <CardContent>
          <Typography>Letter slope and pen angle</Typography>

          {/* Letter slope */}
          <CustomInput
            id="sA"
            label="Letter slope"
            value={props.sA}
            min={0}
            max={90}
            step={1}
            inputAdornment="degrees"
            helpText="The angle of the vertical strokes of the letters, in degrees"

            onChange={props.handleChange}
            addButtonClick={props.addButtonClick}
            subtractButtonClick={props.subtractButtonClick}
          />

          <Divider />

          {/* Distance between letter slope lines */}
          <CustomInput
            id="sS"
            label="Distance between slope lines"
            value={props.sS}
            min={10}
            max={1000}
            step={10}
            inputAdornment="mm"
            helpText="The distance between letter slope lines, in millimeters"

            onChange={props.handleChange}
            addButtonClick={props.addButtonClick}
            subtractButtonClick={props.subtractButtonClick}
          />

          <Divider />

          {/* Pen angle */}
          <CustomInput
            id="pA"
            label="Pen angle"
            value={props.pA}
            min={0}
            max={90}
            step={1}
            inputAdornment="degrees"
            helpText="The angle of the flat edge of the nib in relation to the horizontal lines, in degrees"

            onChange={props.handleChange}
            addButtonClick={props.addButtonClick}
            subtractButtonClick={props.subtractButtonClick}
          />

          <Divider />

          {/* Distance between pen angle lines */}
          <CustomInput
            id="pS"
            label="Distance between pen angle lines"
            value={props.pS}
            min={10}
            max={1000}
            step={10}
            inputAdornment="mm"
            helpText="The distance between pen angle lines, in millimeters"

            onChange={props.handleChange}
            addButtonClick={props.addButtonClick}
            subtractButtonClick={props.subtractButtonClick}
          />

        </CardContent>
      </Card>

      <Card>
        <CardContent>
          <Typography>Page Size and Margins</Typography>

          {/* Page height */}
          <CustomInput
            id="pH"
            label="Page height"
            value={props.pH}
            min={0}
            max={10000}
            step={1}
            inputAdornment="mm"
            helpText="The height of your sheet of paper, in millimeters"

            onChange={props.handleChange}
            addButtonClick={props.addButtonClick}
            subtractButtonClick={props.subtractButtonClick}
          />

          <Divider />

          {/* Page width */}
          <CustomInput
            id="pW"
            label="Page width"
            value={props.pW}
            min={0}
            max={10000}
            step={1}
            inputAdornment="mm"
            helpText="The width of your sheet of paper, in millimeters"

            onChange={props.handleChange}
            addButtonClick={props.addButtonClick}
            subtractButtonClick={props.subtractButtonClick}
          />

          <Divider />

          {/* Top margin */}
          <CustomInput
            id="tM"
            label="Top margin"
            value={props.tM}
            min={0}
            step={10000}
            inputAdornment="mm"
            helpText="The margin between the top edge of your page and the top guideline"

            onChange={props.handleChange}
            addButtonClick={props.addButtonClick}
            subtractButtonClick={props.subtractButtonClick}
          />

          <Divider />

          {/* Bottom margin */}
          <CustomInput
            id="bM"
            label="Bottom margin"
            value={props.bM}
            min={0}
            max={10000}
            step={1}
            inputAdornment="mm"
            helpText="The margin between the bottom edge of your page and the bottom guideline"

            onChange={props.handleChange}
            addButtonClick={props.addButtonClick}
            subtractButtonClick={props.subtractButtonClick}
          />

          <Divider />

          {/* Left margin */}
          <CustomInput
            id="lM"
            label="Left margin"
            value={props.lM}
            min={0}
            max={10000}
            step={1}
            inputAdornment="mm"
            helpText="The margin between the left edge of your page and the guidelines"

            onChange={props.handleChange}
            addButtonClick={props.addButtonClick}
            subtractButtonClick={props.subtractButtonClick}
          />

          <Divider />

          {/* Right margin */}
          <CustomInput
            id="rM"
            label="Right margin"
            value={props.rM}
            min={0}
            max={10000}
            step={1}
            inputAdornment="mm"
            helpText="The margin between the right edge of your page and the guidelines"

            onChange={props.handleChange}
            addButtonClick={props.addButtonClick}
            subtractButtonClick={props.subtractButtonClick}
          />

        </CardContent>
      </Card>
    </div>
  );
}

Inputs.propTypes = {
  handleChange: PropTypes.func.isRequired,
  addButtonClick: PropTypes.func.isRequired,
  subtractButtonClick: PropTypes.func.isRequired,
  nW: PropTypes.number.isRequired,
  xH: PropTypes.number.isRequired,
  aH: PropTypes.number.isRequired,
  dH: PropTypes.number.isRequired,
  // bC: PropTypes.string.isRequired,
  iS: PropTypes.number.isRequired,
  sA: PropTypes.number.isRequired,
  sS: PropTypes.number.isRequired,
  // vC: PropTypes.string.isRequired,
  pA: PropTypes.number.isRequired,
  pS: PropTypes.number.isRequired,
  // pC: PropTypes.string.isRequired,
  pH: PropTypes.number.isRequired,
  pW: PropTypes.number.isRequired,
  tM: PropTypes.number.isRequired,
  bM: PropTypes.number.isRequired,
  lM: PropTypes.number.isRequired,
  rM: PropTypes.number.isRequired,
};

export default Inputs;

// TODO: Add checkboxes for margin indicators for x-height and nib width
// ladders to Fundamental Guidelines Card
