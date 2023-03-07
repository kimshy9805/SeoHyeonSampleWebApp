const path = require('path');

module.exports = {
  //...
  resolve: {
    alias: {
    //   Utilities: path.resolve(__dirname, 'src/utilities/'),
    //   Templates: path.resolve(__dirname, 'src/templates/'),
      styles: path.resolve(__dirname, 'src/styles'),
      components: path.resolve(__dirname, 'src/components'),
      constants: path.resolve(__dirname, 'src/constants')
    },
  },
};