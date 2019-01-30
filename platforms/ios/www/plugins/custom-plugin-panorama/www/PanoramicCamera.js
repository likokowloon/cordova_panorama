cordova.define("custom-plugin-panorama.PanoramicCamera", function(require, exports, module) {
var exec = require('cordova/exec');
/**
var PanoramicCamera = {

  start: function() {
    exec(null, null, 'PanoramicCamera', 'start', []);
  }
};
module.exports = PanoramicCamera;
*/


onDeviceReady: function() {
  app.receivedEvent('deviceready');
  PanoramicCamera.echo(
    'Plugin Ready!',
    function(msg) {
      document
        .getElementById('deviceready')
        .querySelector('.received')
        .innerHTML = msg;
    },
    function(err) {
      document
        .getElementById('deviceready')
        .innerHTML = '<p class="event received">' + err + '</p>';
    }
  );
  PanoramicCamera.echojs(
    'Hello Plugin',
    function(msg) {
      document.getElementsByTagName('h1')[0].innerHTML = msg;
    },
    function(err) {
      document.getElementsByTagName('h1')[0].innerHTML = err;
    }
  );
}

});
