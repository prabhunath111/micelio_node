const express = require('express');
const router = express.Router();
const Charger = require('../modal/userSchema')

router.get('/', function(req, res){
  Charger.find({}, function(error, response){
    (error)?res.send({"error": error}):
      res.send({"Chargers": response})})
});
router.post('/createchargerpoint',function (req, res, next) {
  console.log("line11", req.body);
    var charger = new Charger({
      // type: req.body.location.type,
      charger_id: req.body.charger_id,
      charger_name: req.body.charger_name,
      location:{
        type: req.body.location.type,
        coordinates: [req.body.location.coordinates[0],req.body.location.coordinates[1]]
      },
      chargerStatus: req.body.chargerStatus
    });
    charger.save(function (err) {
      // if (err) return handleError(err);
      if (err) {
        console.log("error aaya hai", err);
      }
      console.log("Saved , Thanks god");
      res.send('Added data to db...');
    });
  
});
router.put('/updatecharger', function(req, resp) {
  const obj = JSON.parse(JSON.stringify(req.body));
  Charger.findByIdAndUpdate(req.body._id, obj, function(err, res){
    if(err){
      console.log("error", err)
      resp.send({"Updated data": err});
    }else {
      console.log("response", res);
      resp.send({"Updated data": res});
    }
  });
 });

module.exports = router;
