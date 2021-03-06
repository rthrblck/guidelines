# Calligraphy Guidelines Generator Roadmap

### Inputs
- [ ] Figure out how to switch between Metric and 'Merica Freedom units
- [ ] Write user-facing explanations of each input variable using plain English and simple, specific illustrations to make clear what each input defines for users of any knowledge level.
  - [ ] Move them to tool tips or something like that to have less information always on the page
  - [ ] Figure out how to put images into tooltips
- [ ] Make blank text area smaller, appropriate to amount of text in each, increase size of incremental arrows, and make sure the units are prominently displayed
- [ ] Make scroll indicator always on
- [ ] Show all decimal units for each field at all times (like "3.00" instead of "3")

### SVG
- [ ] Set default for margins (and all inputs, really) to 0 if field is blank
- [ ] Diagonal lines are not rendering properly, investigate and maybe open a git issue
- [ ] Diagonal line spacing: give density options for lines on page (maybe: *none*, *a few*, *some*, *more*, and *a lot*) and base those options on multiples of the nib width.
- [ ] Add some sort of marker to indicate x-height, like X or nib ladder
- [ ] Make sure default line colors work in black and white
- [ ] Print line of text on page that lists all of the input variables
- [ ] Add Hide Line option for all lines

### Export/Print
- [ ] Figure out how to reference the svg node without using findDOMNode(), because that shit is deprecated, and either using refs in a way that that linter likes, or maybe using something else. React hooks? Somehow putting the SVG into state?
- [ ] Add Title field at bottom next to download button, for use later as downloaded file name. Add tool tip to help explain what makes a good file name with example language
- [ ] Write and include Download and Print instructions

### Donate
- [ ] Figure out how to hook up PayPal to a donate button
- [ ] User engagement
  - [ ] Create About/Donation page
    - [ ] mynoise.net for donation page example language and flow
  - [ ] Create list of possible Educational things to include
    - [ ] Links, book list,

### Bugs
- [ ] Nib width field crashes app, other fields probably do, too (might be solved by a blank input defaulting to 0)
- [ ] Figure out initial decimal issues, probably involves string to numeral conversion

## Future

### Inputs
- [ ] Add line color dropdown menu with basic options (like calligraphypaper.appspot.com)
- [ ] Add option for dotted lines
- [ ] Add checkbox to hide/show lines

### SVG
- [ ] Calculate x value for diagonal lines using trigonometry instead of a placeholder
- [ ] Shade interlinear space, perhaps a grey? Or perhaps just blank out all slope lines from the iS areas
- [ ] Eliminate extra diagonal lines that show at the bottom of the stack when there isn't enough room to render a new set of horizontal guidelines. Maybe just set the bottom margin to the position of the last horizontal line that's rendered?
- [ ] Highlight what lines are changing on screen when a field is selected?
- [ ] Design
  - [ ] A share button? It could use the settings to create a URL that recreates the settings
  - [ ] Display SVG as a two views, one a closeup of a single set of guidelines, the other a full page view that shows page dimensions, margins, and lines
  - [ ] Add default style selector (Italic, Blackletter, Uncial, etc)
  - [ ] Add nib size selector (see nib size chart that Cora sent you)
  - [ ] Add option to increase/reduce line thickness for very large or small guidelines, or for specialty paper

### Affordances
- [ ] Add About page
  - [ ] How to use this tool tutorial, with automatic walk through on first page visit
- [ ] Get listed on calligraphies.com
  - [ ] Email list? For updates, new feature announcements, donation solicitation, etc?
    - [ ] Survey Monkey: short <10 question survey with specific questions (what instrument do you play?) about themselves, and open-ended, emotionally focused questions to get copy for content in site and donation emails

### New functions
- [ ] Circular guideline arrangements
- [ ] Pointed pen guidelines (no nib widths or pen angles)
