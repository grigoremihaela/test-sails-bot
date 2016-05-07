/**
 * Webhook.js
 *
 * @description :: message from facebook user
 * @docs        :: 
 */

module.exports = {

  tableName: "webhook",
  
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