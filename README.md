# CODERLOADER

<image src="/public/images/demo.png" />

Hello & welcome to CoderLoader's React.js frontend. This contains the web-facing components for to [this](https://github.com/256hz/coderloader-rails/) repo, the Ruby on Rails backend of this project.

### Overview
CoderLoader is an easily maintainable, pretty, single-page portfolio/resume site for coders. It includes a place for icons of your primary skills, featured Githubs, job experience, intro, and bio. It supports easily switching the order of your skills/jobs/Githubs and color theming.

This was bootstrapped with `create-react-app`.  Authentication is done with JWT.  All create/update actions require the JWT token header to POST.  Navigation is done with React Router and anchor tags.  Many components were used from [semantic-ui-react](https://react.semantic-ui.com).

### Installation
- First, follow the Readme in the [Rails repo](https://github.com/256hz/coderloader-rails/), install, and host.
- Clone down this repo.
- Run `yarn install` or `npm install` inside the project folder.
- In App.js, change the `apiURL` constant to the base URL of your hosted backend.
- Tinker to taste.
- Host (for example, on [Heroku](http://www.heroku.com).  A good guide to deploying a Rails/React app on Heroku can be found [here](https://medium.com/coding-in-simple-english/deploying-rails-react-app-to-heroku-35e1829242ab).
- Log in from the hamburger menu on the top right and edit your portfolio!

### Editing
The Edit icon in the section headings will open up the sidebar form editor:
<image src="/public/images/sidebar-skills.png">
- About Me: change your name, intro, bio, image, contact info, and color theme.  Contact shows up at the bottom of the page.
- Skills: add/remove/change skill icons.  Skill titles come up in a Semantic `<Popup>` when the cursor hovers over them.  When logged in, buttons appear between your skills that allow you to swap their positions.
- Jobs: Each job comes up in a card format.  When logged in, the card shows a footer that allows you to edit that job's company, title, image, dates, summary, responsibilities, and skills used.  The latter two can be added to or shrunk in number.  The logged-in footer also allows you to swap card positions.
- Repos: Same process as Jobs cards.
- Contact: edited from About Me section.
  
### Thanks!
Any changes you want to recommend, simply fork and make a PR.  Happy coding!
