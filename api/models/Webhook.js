/**
 * Webhook.js
 *
 * @description :: message from facebook user
 * @docs        :: 
 */

module.exports = {

  attributes: {
    id: {
      type: 'integer',
      primaryKey: true
    },
    sender: {
      type: 'string'
    },
    text: {
      type: 'string'
    },
    date : { 
    	type: 'date' 
    }
  }
};