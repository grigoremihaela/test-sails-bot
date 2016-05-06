module.exports = {
  webhook: function (req, res) {
    if (req.query['hub.verify_token'] === 'test-sails-bot') {
       res.send(req.query['hub.challenge']);
    }
    res.send('Error, wrong validation token');
    }

    

};

