var exec = require('cordova/exec');

var Panorama = {

  start: function() {
    exec(null, null, 'Panorama', 'start', []);
  }
};
module.exports = Panorama;
