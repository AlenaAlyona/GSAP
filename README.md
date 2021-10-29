# GSAP

[alena-alyona-gsap.netlify.app](https://alena-alyona-gsap.netlify.app/)
![](./src/assets/readme/fullscreen.gif)<br/>
When I started <em>Master JavaScript Animations with Greensock</em> course, I decided to make a small show case out of it. This course consisted of 2 parts: basics of Greensock and scroll animation.<br/>

To properly display them I chose to add a navbar. I found this [one](https://github.com/codegridweb/fullscreen-overlay-responsive-navigation-menu-css-marquee-animation) by [codegridweb](https://github.com/codegridweb). Plus point - it's made using GSAP animation.
I needed to add some changes, so it works well for my project.

what have been done navbar-wise:<br/>
:white_check_mark: add vue router<br/>
:white_check_mark: create a routing directory & configuration file<br/>
:white_check_mark: replace anchor tags with router-link<br/>
:white_check_mark: add computed property for displaying marquee<br/>
:white_check_mark: add animation to every item of navbar => when user clicks on any item of navbar, navbar closes (before it worked only when user clicked on "menu" and "close")<br/>
:white_check_mark: show list of projects when user clicks on The Basics of Greensock and Scroll Animation<br/>
:white_check_mark: add distinctive style to current selected item<br/>
:white_check_mark: conditionally display Basics and Scroll sections lists<br/>
:white_check_mark: close all lists when user clicks on Home
:white_check_mark: fix `menu-item-img` position for anchor tags<br/>
:white_check_mark: fix `menu-item-img` responsiveness<br/>

improvements/additions for course code:
:white_check_mark: fix Reveal view responsiveness<br/>
:white_check_mark: CSS tweaks<br/>
:white_check_mark: update Home view conten by:<br/>
:heavy_check_mark: adding github + linkedin links<br/>
:heavy_check_mark: showing an img on hover<br/>
:heavy_check_mark: adding animation to links on hover<br/>

It was pure fun following this course, working on a navbar and Home page. Definitely it was a good start in understanding GSAP library :rocket:

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
