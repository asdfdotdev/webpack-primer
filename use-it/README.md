# Webpack Primer Starter Files

The starter files make it easy to start using webpack in your projects.

## Contents

- **.babelrc** - babel config file
- **package.json** - package config file
- **postcss.config.js** - css linting config file
- **webpack.config.js** - webpack config file

### Additional Resources
- [.babelrc documentation](https://babeljs.io/docs/usage/babelrc/)
- [package.json documentation](https://docs.npmjs.com/files/package.json)
- [stylelint rules](https://stylelint.io/user-guide/rules/)
- [browserlist best practices](https://github.com/browserslist/browserslist#best-practices)
- [css nano documentation](http://cssnano.co/guides/optimisations/)
- [webpack config documentation](https://webpack.js.org/configuration/)

# Setup

Copy the files above to the root directory of your project to get started.

### Update package.json

Update the values of the following for your project:

- name
- version
- repository details
- author
- license
- bugs details
- homepage

### Update postcss.config.js

The postcss config file contains stylelint rules, autoprefixer browser targeting, and css nano optimization rules that can be customized to your project needs.

### Update webpack.config.js

To personalize the build for your project update the following values:

- **entry_files** - Array containing the relative path to your primary JavaScript and SCSS/SASS file.
- **js_filename** - Filename for the output JavaScript bundle file.
- **css_filename** - Filename for the output CSS file.
- **notifier_title** - Title to display in the build notification. (Optional)
- **notifier_logo** - Relative path to the image (JPG/PNG) to display within the build notification. (Optional)

### Run the Build

Once the config files have been updated for the project the webpack build can be run using the following list of commands.


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
