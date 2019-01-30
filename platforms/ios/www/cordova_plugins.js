cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
  {
    "id": "cordova-plugin-camera.Camera",
    "file": "plugins/cordova-plugin-camera/www/CameraConstants.js",
    "pluginId": "cordova-plugin-camera",
    "clobbers": [
      "Camera"
    ]
  },
  {
    "id": "cordova-plugin-camera.CameraPopoverOptions",
    "file": "plugins/cordova-plugin-camera/www/CameraPopoverOptions.js",
    "pluginId": "cordova-plugin-camera",
    "clobbers": [
      "CameraPopoverOptions"
    ]
  },
  {
    "id": "cordova-plugin-camera.camera",
    "file": "plugins/cordova-plugin-camera/www/Camera.js",
    "pluginId": "cordova-plugin-camera",
    "clobbers": [
      "navigator.camera"
    ]
  },
  {
    "id": "cordova-plugin-camera.CameraPopoverHandle",
    "file": "plugins/cordova-plugin-camera/www/ios/CameraPopoverHandle.js",
    "pluginId": "cordova-plugin-camera",
    "clobbers": [
      "CameraPopoverHandle"
    ]
  },
  {
    "id": "custom-plugin-panorama.PanoramicCamera",
    "file": "plugins/custom-plugin-panorama/www/PanoramicCamera.js",
    "pluginId": "custom-plugin-panorama",
    "clobbers": [
      "PanoramicCamera"
    ]
  },
  {
    "id": "custom-plugin-panorama.PanoramicCamera",
    "file": "plugins/custom-plugin-panorama/www/PanoramicCamera.js",
    "pluginId": "custom-plugin-panorama",
    "clobbers": [
      "PanoramicCamera"
    ]
  }
];
module.exports.metadata = 
// TOP OF METADATA
{
  "cordova-plugin-add-swift-support": "1.7.2",
  "cordova-plugin-camera": "4.0.3",
  "cordova-plugin-whitelist": "1.3.3",
  "custom-plugin-panorama": "0.1.0"
};
// BOTTOM OF METADATA
});