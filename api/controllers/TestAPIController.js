/**
 * TestAPIController
 *
 * @description :: Server-side logic for managing testapis
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

create: function (req, res) {

   TestAPI.create({userName:'Walter Jr', password:'walterjr'}).exec(function createCB(err, created){
     console.log('Created user with name ' + created.name);
   });

}


	
};

