module.exports = {

    sendTextMessage: function(sender, text) {
      var request = require('request');
      request('http://www.google.com', function (error, response, body) {
        if (!error && response.statusCode == 200) {
          console.log(body) // Show the HTML for the Google homepage. 
        }
      });

      messageData = {
        text:text
      }
      request({
        url: 'https://graph.facebook.com/v2.6/me/messages',
        qs: {access_token:'EAADNqFLS204BANfl8rGLpHyvBQOKnK8CdAzBFlBw7kADFlyf1vG9Ru4WWk4uP7oNwJNMhj2ZCk78dSkHTUpQz2ZAgMGeJ9VmTQjoQOZBdigAFCehZAndNHIs5ZAnxVeYEPQ5sHQJStTHWZBTaLh9ZCsdLXlBtJJDPyq84zL5bWfLwZDZD'},
        method: 'POST',
        json: {
          recipient: {id:sender},
          message: messageData,
        }
      }, function(error, response, body) {
        if (error) {
          console.log('Error sending message: ', error);
        } else if (response.body.error) {
          console.log('Error: ', response.body.error);
        }
      });
    }

};