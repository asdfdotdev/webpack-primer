# Webpack Primer Sample Project

The sample project contains four JavaScript exmaples that are compiled into a single bundle. Example components include: SCSS styles, Vanilla JS, jQuery plugin, React component, and Vue.js component.

![](https://i.imgur.com/66ZANom.png)

[See it in action.](https://christopherldotcom.github.io/webpack-primer/try-it/)

# Build Commands

```
$ npm run COMMAND_NAME
```

**prod** - production build, uses production version/mode for included libraries (jQuery, React, Vue.js, etc.) minifies css/js, removes and deletes sourcemaps.

**production** - alias for *prod*

**dev** - development build, uses development version/mode for included libraries, adds sourcemaps, js is uncompressed, and watches for source file changes for continuous rebuild

**development** - alias for *dev*

**dev-dashboard** - runs dev command within webpack dashboard for a cooler dev experience

**development-dashboard** - alias for *dev-dashboard*

**delete-maps** - deletes files ending in `.map`. Used by production build to remove js sourcemap file.

**version-check** - outputs build version number from package.json along with the output for `$ node -v` and `$ npm -v` for easy version checking. Can be updated within package.json to denote recommended node/npm versions.
