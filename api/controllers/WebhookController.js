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
            var sender = event.sender.id;
            if (event.message && event.message.text) {
            var text = event.message.text;
              // Handle a text message from this sender
            }
        } 
        if (text) {
            Webhook.create({sender:sender, text:text}).exec(function createCB(err, created){
                console.log('Created text' + created.text);
            });
            FacebookService.sendTextMessage(sender, "Text received, echo: "+ text.substring(0, 200)); 
        };    
        res.send(200);
    },
    
    test: function (req, res) {
        FacebookService.sendTextMessage('992642237438736', "Text ok");
    }

};




