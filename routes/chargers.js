const express = require('express');
const router = express.Router();
const Charger = require('../modal/userSchema')

router.get('/', function(req, res){
  Charger.find({}, function(error, response){
    (error)?res.send({"error": error}):
      res.send({"Chargers": response})})
});
router.post('/createchargerPoint',function (req, res, next) {
  // bcrypt.hash(req.body.password, saltRounds, (err, hash) => {
    // Now we can store the password hash in db.
    console.log("line13", req.body);
    var charger = new Charger({
      charger_id: req.body.charger_id,
      charger_name: req.body.charger_name,
      location: {
        lat: req.body.location.lat,
        lng: req.body.location.lng
      },
      chargerStatus: req.body.chargerStatus
    });
    // Save the new model instance, passing a callback
    charger.save(function (err) {
      // if (err) return handleError(err);
      if (err) {
        console.log("error aaya hai", err);
      }
      console.log("Saved , Thanks god");
      res.send('you are so cool!!!!!');
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
