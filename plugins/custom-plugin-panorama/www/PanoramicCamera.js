var exec = require('cordova/exec');

var PanoramicCamera = {

  start: function() {
    exec(null, null, 'PanoramicCamera', 'start', []);
  }
};
module.exports = PanoramicCamera;
