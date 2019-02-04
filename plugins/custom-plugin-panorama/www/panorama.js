var exec = require('cordova/exec');

/**
var Panorama = {

  start: function() {
    exec(null, null, 'Panorama', 'start', []);
  }
};
module.exports = Panorama;
**/

var panorama = {};

panorama.loadView = function (success, error) {

  cordova.exec(
    function (result) {
      success(result);
    },
    error,
    'Panorama',
    'loadView', []
  );

};
