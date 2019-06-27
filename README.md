# CODERLOADER

<image src="/public/images/demo.png" />

Hello & welcome to CoderLoader's React.js frontend. This contains the web-facing components for to [this](https://github.com/256hz/coderloader-rails/) repo, the Ruby on Rails backend of this project.

### Overview
[CoderLoader](http://sandboxportfolio.256hz.com) is an easily maintainable, pretty, single-page portfolio/resume site for coders. It includes a place for icons of your primary skills, featured Githubs, job experience, intro, bio, and contact info. It supports easily switching the order of your skills/jobs/Githubs and color theming.  You can see and edit an example at [the sandbox site](http://sandboxportfolio.256hz.com).

This was bootstrapped with `create-react-app`.  Authentication is done with JWT.  All create/update actions require the JWT token header to POST.  Navigation is done with React Router and anchor tags.  Many components were used from [semantic-ui-react](https://react.semantic-ui.com).

### Installation (OSX/Linux)
- First, follow the Readme in the [Rails repo](https://github.com/256hz/coderloader-rails/), install, and host.
- Clone down this repo.
- Run `yarn install` or `npm install` inside the project folder.
- In App.js, change the `apiURL` constant to the base URL of your hosted backend.
- Tinker to taste.
- Host (for example, on [Heroku](http://www.heroku.com).  A good guide to deploying a Rails/React app on Heroku can be found [here](https://medium.com/coding-in-simple-english/deploying-rails-react-app-to-heroku-35e1829242ab)).
- Log in from the hamburger menu on the top right and edit your portfolio!

### Editing
The Edit icon in the section headings will open up the sidebar form editor:
<image src="/public/images/sidebar-skills.png">
#### About Me: 
  Change your name, intro, bio, image, contact info, and color theme.  Contact shows up at the bottom of the page.
#### Skills: 
  Add/remove/change skill icons.  Skill titles come up in a Semantic `<Popup>` when the cursor hovers over them.  When logged in, buttons appear between your skills that allow you to swap their positions.
#### Jobs: 
  Each job comes up in a card format.  When logged in, the card shows a footer that allows you to edit that job's company, title, image, dates, summary, responsibilities, and skills used.  The latter two can be added to or shrunk in number.  The logged-in footer also allows you to swap card positions.
#### Repos: 
  Same process as Jobs cards.
#### Contact: 
  Edited in the About Me section.

### Adding/editing a color theme
If you want to add more options, it's done manually in `/src/components/editForms/AboutMeEdit.js`.  Under the label `Color Theme` (line 71), add another `<option>` tag with a value that starts with `theme-`.  E.g.:
`<option value="theme-sparkles">Sparkles</option>`

Theme colors are at the bottom of the app CSS file (`/src/App.css`).  To make a new one, duplicate the three elements that make up one of the other themes - e.g. `.theme-berries-heading`, `.theme-berries:before`, and `.theme-berries:after`.  Take care to match the names with the `value` of the option tag you made before (`.theme-sparkles-heading`, etc.).  To keep the same overall feel of the gradients, edit the following:
- in `heading`, change the first color of the `linear-gradient`.
- in `:before` and `:after`, change: 
  - the value in the `background` element, and 
  - the first 3 numbers in the `rgba` color value in the `background: linear-gradient` property.  Take care not to change the fourth number - this is the opacity value.

All done!  Your new theme will show up in the About Me color theme dropdown. 

### To do
Currently restyling for mobile.

### Thanks!
Any changes you want to recommend, simply fork and make a PR, or find me on twitter (@256hertz).  Happy coding! --Abe

(c) 2019 Abe Dolinger & Doug Ward
