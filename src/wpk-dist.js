var path = require('path');
var webpack = require('webpack');
const common  = require('./wpk-common');

var cfgVidya = {
  ...common.CFG_BASE,
  mode: "production",
  entry: {
    vidya: "./vidya/index.js"
  },
  output: {
    ...common.CFG_OUT,
    path: path.resolve(__dirname, "../out/vidya"),
    filename: "vidya.js" // or [name].js
  }
};
/*
var cfgVidyaUi = {
  ...common.CFG_BASE,
  entry: {
    vidyaui: "./vidya-ua/index.js"
  },
  output: {
    ...common.CFG_OUT,
    path: path.resolve(__dirname, "../out/vidya-ui"),
    filename: "vidya-ui.js" // or [name.js]
  }
};
*/

//Tell Webpack what to distribute
module.exports = [
  cfgVidya
  //, cfgVidyaUi
];
