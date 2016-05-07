var token = "EAADNqFLS204BANfl8rGLpHyvBQOKnK8CdAzBFlBw7kADFlyf1vG9Ru4WWk4uP7oNwJNMhj2ZCk78dSkHTUpQz2ZAgMGeJ9VmTQjoQOZBdigAFCehZAndNHIs5ZAnxVeYEPQ5sHQJStTHWZBTaLh9ZCsdLXlBtJJDPyq84zL5bWfLwZDZD";

function sendTextMessage(sender, text) {
  messageData = {
    text:text
  }
  request({
    url: 'https://graph.facebook.com/v2.6/me/messages',
    qs: {access_token:token},
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

module.exports = {

    webhook: function (req, res) {
        if (req.query['hub.verify_token'] === 'test-sails-bot') {
           res.send(req.query['hub.challenge']);
        }
        res.send('Error, wrong validation token');
    },

    webhookpost: function (req, res) {
    	messaging_events = req.body.entry[0].messaging;
        for (i = 0; i < messaging_events.length; i++) {
            event = req.body.entry[0].messaging[i];
            sender = event.sender.id;
            if (event.message && event.message.text) {
              text = event.message.text;
              // Handle a text message from this sender
            }
        }
//        res.send(200, 'Ok!');
        res.sendTextMessage(sender, "Text received, echo: "+ text.substring(0, 200));
    }

};




