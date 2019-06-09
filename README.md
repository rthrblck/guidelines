# Calligraphy Guidelines Generator

## Roadmap

- [ ] Inputs
  - [X] Fix input div width in a dynamic way to eliminate text overlapping (currently fixed size as placeholder)
  - [ ] Set inputs <div> to scroll independently of svg <div>
  - [ ] Set individual input field limiters (min, max, step, etc). Actually, look up what input field properties exist, and see if any of them would be useful
  - [X] Add propType validation
  - [ ] Write custom input field component with individual variations to clean up inputs.js? Seems like a good idea
  - [ ] Add line color dropdown menu with basic options

- [ ] SVG
  - [ ] Assign proper units to all fields, stop using pixels
  - [X] Add propType validation
  - [X] Set user units as mm
  - [ ] If exporting svg to pdf requires a different internal structure, fix it
  - [ ] Set default values for inputs that will break the app if they aren't present

- [ ] Make it exportable
  - [ ] Find tool to export SVG to PDF (must be exported in real world units)
    - [ ] wkhtmltopdf? Does it allow setting size of SVG in PDF using real world units?
    - [ ] svg2pdf.js?
  - [ ] A share button? It could use the settings to create a URL that recreates the settings

- [ ] Make it all pretty
  - [ ] Write user-facing explanations of each input variable using plain English and simple, specific illustrations to make clear what each input defines for users of any knowledge level.
    - [ ] Move them to tool tips or something like them to have less information always on the page
  - [ ] Use "Butterick's Practical Typography" as a starting point for type decisions.
  - [ ] Make sure contrast and text size are appropriate for all users


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
