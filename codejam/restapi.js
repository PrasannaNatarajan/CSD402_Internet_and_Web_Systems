var express = require('express');
var app = express();
var router = express.Router();    
module.exports = router;
// REST API
//router.route('/')
router.get('/',function(req, res, next) {
  res.send('Get');
})
router.post('/',function(req, res, next) {
  res.send('Post');
});

//router.route('/:id')
router.get('/restapi/:id',function(req, res, next) {
  res.send('Get id: ' + req.params.id);
  var MongoClient = require('mongodb').MongoClient;
	var url = "mongodb://localhost:27017/codejam";
	var toStore = req.params.id;
	MongoClient.connect(url, function(err, db) {
	  if (err) throw err;

	  var myobj = { id: toStore };
	  db.collection("customers").insertOne(myobj, function(err, res) {
	    if (err) throw err;
	    console.log("1 document inserted");
	    db.close();
	  });
	  console.log("Database created!");
	  db.close();
	});
  next();
})
router.put(function(req, res, next) {
  res.send('Put id: ' + req.params.id);
})
router.delete('/:id',function(req, res, next) {
  res.send('Delete id: ' + req.params.id);
});