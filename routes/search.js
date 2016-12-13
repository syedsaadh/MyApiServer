var express = require('express');
var router = express.Router();
var samplejson = require('./samplejson');
var jsonQuery = require('json-query');
/* GET users listing. */
router.get('/', function(req, res, next) {
  var q = req.query.q;
  if(q == undefined){
    res.send(samplejson.data.result);    
  }else {
      var query = 'result[*drug_name~'+ q +']';
      var response = jsonQuery(query,{
          data:samplejson.data
      });
      res.send(response.value);
  }
  
});

module.exports = router;
