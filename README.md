# gsap

I'm currently following a course <em>Master JavaScript Animations with Greensock</em>. It consists of several projects.<br/>

To properly display them I decided to add a navbar. I found this cool [navbar](https://github.com/codegridweb/fullscreen-overlay-responsive-navigation-menu-css-marquee-animation) by [codegridweb](https://github.com/codegridweb). One more point - it's made using GSAP animation.
I need to add some changes, so it works well for my project.

what already have been done:<br/>
:white_check_mark: add vue router<br/>
:white_check_mark: create a routing directory & configuration file<br/>
:white_check_mark: replace anchor tags with router-link<br/>
:white_check_mark: add computed property for displaying marquee<br/>
:white_check_mark: add animation to every item of navbar => when user clicks on any item of navbar, navbar closes (before it worked only when user clicked on "menu" and "close")<br/>
:white_check_mark: show list of projects when user clicks on The Basics of Greensock<br/>
:white_check_mark: add distinctive style to current selected item (Basics)<br/>

what needs to be done:

- fix `menu-item-img` responsiveness<br/>
- fix `menu-item-img` position for anchor tags<br/>
- fix conditional rendering for Basics and Scroll sections<br/>
- add distinctive style to current selected item (Scroll)<br/>
- make close btn sticky
- update Home view content
  - add github + linkedin links
  - show an img on hover
  - add animation to links on hover

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Lints and fixes files

```
npm run lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).
