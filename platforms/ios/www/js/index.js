onDeviceReady: function() {
  app.receivedEvent('deviceready');
  modusecho.echo(
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

  modusecho.echojs(
    'Hello Plugin',
    function(msg) {
      document.getElementsByTagName('h1')[0].innerHTML = msg;
    },
    function(err) {
      document.getElementsByTagName('h1')[0].innerHTML = err;
    }
  );
}
