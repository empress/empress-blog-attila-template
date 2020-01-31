'use strict';

var Funnel = require('broccoli-funnel');
const { join } = require('path');

module.exports = {
  name: require('./package').name,

  treeForPublic: function() {
    return new Funnel(join(this.root, 'public'));
  }
};
