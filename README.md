# Calligraphy Guidelines Generator

## Roadmap

- [ ] Figure out why updating to Material-ui v1.0.0 (concurrently with v0.2.0) broke everything. It seems to have something to do with how I'm importing/exporting the components, maybe a difference in the Default vs Named export syntax that I'm not getting.

- [ ] Build input form
  - [x] Figure out how to implement checkboxes with labels
  - [ ] Figure out how to handle state updates from field inputs (start with Storybook)
    - [x] Implement a checkbox changeHandler in Storybook
    - [x] Convert Checkbox component from class component to functional component
    - [x] Figure out how to abstract changeHandlers to use them with multiple field inputs an repeat less code. According to Alan, setting the state props (are they props?) should be done manually and individually to be more human friendly, but instead of writing a changeHandler for each input field that should be abstracted. Implement a second checkbox to abstract the checkbox identity
    - [ ] Create all input fields with corresponding App level infrastructure
    - [ ] Define all input field states
    - [ ] Define all props needed for states
    - [ ] Implement basic forms of all user input fields, with appropriate naming.
  - [ ] Create custom input field component, and figure out how to add instance-specific variations
  - [ ] Is Formgroup (currently used in test Checkbox component) useful for putting together each Card's input fields? If so, use it to create the initial groups of input fields.
- [ ] Build app level component that contains all needed state infrastructure

- [ ] Build guideline rendering engine
    - [x] Get SVG lines to render
      - [x] Render one SVG element in storybook
      - [x] Render one SVG line
        - [x] Add angle to the SVG line
      - [x] Figure out why vertical and horizontal lines are getting cut off around 150 pixels on the y axis (is it a div height thing?)
    - [x] See if the SVG `rotate` option is useful, or if it's better to just render diagonal lines using x/y coordinates
    - [x] Create `groups` of lines within SVG to simulate a single instance of a complete guideline set
    - [ ] Convert lines from hard coded elements to auto-generated elements
      - [x] Generate a single line from an array containing line object
      - [ ] Pass down array (and maybe the line-drawing function?) through props
      - [ ] Render a group of lines using the above machinery

  - [ ] Find/build mm to pixel conversion tool (https://stackoverflow.com/questions/7650413/pixel-to-mm-equation)

- [ ] Make it exportable
- [ ] Make it all pretty
  - [ ] Write user-facing explanations of each input variable using plain English and simple, specific illustrations to make clear what each input defines for users of any knowledge level.


## Feature Notes

### Inputs based on nib width:
* Blank entries/0 will be omitted from guidelines. Maybe include toggle switches to turn individual guidelines on/off
1. Nib width:
  * Not sure if this should be a list of manufacturers/models, or just ask for width in mm. Perhaps a toggle between the two.
    * If it's manufacturers/models, that should be two dropdown lists
    * If it's nib width in millimeters, make the step 0.1mm increments
  * Presets for common styles (dropdown menu listing Italic, Bookhand, Blackletter, etc), but all measurements are text fields and can be modified (see nib width note).
  * Baseline: this line is generated based on other user input (ascender height, x-height) but is not directly user defined.
2. X-height
3. Ascender height
4. Descender height
5. Caps height
6. (maybe) Branching line for italic
7. Interlinear spacing (distance from the descender height of a line to the ascender height of the line below it)

// TODO: Ask Cora if it's more useful to use "nib widths" as the unit for 3-7, or to set them as measurements directly using "mm". This seems like an especially good question for 7.

### Vertical of letters
* Note that for angle of vertical for letters x-axis is 90 degrees, y-axis is 0 degrees, and angle of vertical is given as degrees off of y-axis, different from pen angle, below. (Good opportunity for a visual reference next to input field).
* Need to find out if verticals can be negative (negative slope from left to right).
1. Slant of vertical: 90 to 0 degrees, I think.
2. Distance between vertical lines: default measurements that can be changed, same "x.x mm" as above

// TODO: As Cora what the range of possible angles is.

### Pen angle
* Note that for pen angle x-axis is 0 degrees, y-axis is 90 degrees, and pen is given as degrees off of x-axis, different from vertical of letter, above. (Good opportunity for a visual reference next to input field).
* Need to find out if pen angle can be negative (negative slop from left to right).
1. Pen angle
2. Distance between pen angle lines: default measurements that can be changed, same "x.x mm" as above

// TODO: Ask Cora what the range of possible angles is.

### Guideline indicators
1. "X" marker in left margin between base-line and x-height line: toggle on/off
2. Nib marks (block ladder) in left margin: toggle on/off

### Paper options
1. Paper size: selectable list that shows h/w, but can be customized, "x.x mm X x.x mm" but will also need "x.x in X x.x in", and both fields should auto update if the other is changed.
2. Paper orientation: radio buttons, default is landscape
3. Page margins on all 4 sides, mm and inches.

### Line appearance
* give options to change line thickness and color for each line separately, perhaps a color picker?
* default colors are black for all horizontals and vertical indicators, red for pen angle
1. Page title
2. User entered name/label for guidelines
3. Most important measurements and settings will automatically print along bottom margin in small text. Can be toggled on/off.

### Future
1. Toggle to switch between broad edge pen and pointed pen. Pointed pen has distinct parameters that will need to be defined, which can be a separate phase of development.
