var exec = require('cordova/exec');

var PLUGIN_NAME = 'Sample';

var values = {
  hello: function (name, successCallback, errorCallback){
        console.log("Sample.hello() was called!");
        exec(successCallback, errorCallback, PLUGIN_NAME, "hello", [name]);
  }
};

module.exports = values ; 
