//cordova.define("custom-plugin-panorama.Panorama", function(require, exports, module) {
var exec = require('cordova/exec');

var Panorama = {

  start: function() {
    exec(null, null, 'Panorama', 'start', []);
  }
};
module.exports = Panorama;

//});
