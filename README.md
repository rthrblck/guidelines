# Calligraphy Guidelines Generator Roadmap

## Make it work

### Inputs

### SVG
- [ ] Set default for margins to 0 if field is blank

### Export/Print

### Donate
- [ ] Figure out how to hook up PayPal to a donate button
- [ ] User engagement
  - [ ] Create About/Donation page
    - [ ] mynoise.net for donation page example language and flow
  - [ ] Create list of possible Educational things to include
    - [ ] Links, book list,

### Bugs
- [ ] Nib width field crashes up, other fields probably do, too

## Make it right

### Inputs
- [ ] Write custom input field component with individual variations to clean up inputs.js? Seems like a good idea
- [ ] Change "verticality" to slope
- [ ] Figure out how to switch between Metric and US Customary units
- [ ] Figure out initial decimal issues, probably involves string to numeral conversion

### SVG
- [ ] Diagonal lines are not rendering properly, investigate and maybe open a git issue
- [ ] Set degree field maximums and minimums
- [ ] Add some sort of marker to indicate x-height, like X or nib ladder
- [ ] Use smaller default margins
- [ ] Make sure default line colors work in black and white

### Export/Print
- [ ] Figure out how to reference the svg node without using findDOMNode(), because that shit is deprecated, and either using refs in a way that that linter likes, or maybe using something else. React hooks? Somehow putting the SVG into state?

## Make it all pretty
- [ ] Read MUI styling docs and watch some videos
- [ ] Read accessibility standards

### Page layout
  - [ ] Add Title field at top, for use later as downloaded file name, and indicate what makes a good file name with example language
  
### Typography
- [ ] Use "Butterick's Practical Typography" as a starting point for type decisions.
- [ ] Make sure contrast and text size are appropriate for all users
- [ ] Print line of text on page that lists all of the input variables

### Inputs
- [ ] Write user-facing explanations of each input variable using plain English and simple, specific illustrations to make clear what each input defines for users of any knowledge level. Perhaps a small graphic would help, too
  - [ ] Move them to tool tips or something like that to have less information always on the page
- [ ] Make blank text area smaller, appropriate to amount of text in each, increase size of incremental arrows, and make sure the units are prominently displayed
- [ ] Make scroll indicator always on
- [ ] Change order of margin inputs to L, R, T, B
- [ ] Show all decimal units for each field at all times (like "3.00" instead of "3")

### SVG
- [ ] Add Hide Line option for all lines

### Export/Print
- [ ] Add option to print on page for letter proportions and nib measurements/page and margin proportions
- [ ] Write and include Download and Print instructions

## Future

### Inputs
- [ ] Add line color dropdown menu with basic options (like calligraphypaper.appspot.com)
- [ ] Add option for dotted lines

### SVG
- [ ] Calculate x value for diagonal lines using trigonometry instead of a placeholder
- [ ] Shade interlinear space, perhaps a grey? Or perhaps just blank out all slope lines from the iS areas
- [ ] Remove all slope lines from bottom margin
- [ ] Highlight what lines are changing on screen when a field is selected?
- [ ] Design
  - [ ] A share button? It could use the settings to create a URL that recreates the settings
  - [ ] Display SVG as a two views, one a closeup of a single set of guidelines, the other a full page view that shows page dimensions, margins, and lines
  - [ ] Add default style selector (Italic, Blackletter, Uncial, etc)
  - [ ] Add nib size selector (see nib size chart that Cora sent you)
  - [ ] Add option to increase/reduce line thickness for very large or small guidelines, or for specialty paper
  - [ ] Change how slope lines are spaced. Potentially, instead of a distance between lines, use a slider to to add or reduce lines on the page
  
### Affordances
- [ ] Add About page
  - [ ] How to use this tool tutorial, with automatic walk through on first page visit
- [ ] Get listed on calligraphies.com
  - [ ] Email list? For updates, new feature announcements, donation solicitation, etc?
    - [ ] Survey Monkey: short <10 question survey with specific questions (what instrument do you play?) about themselves, and open-ended, emotionally focused questions to get copy for content in site and donation emails
 
### New functions
- [ ] Circular guideline arrangements
- [ ] Pointed pen guidelines (no nib widths or pen angles)
