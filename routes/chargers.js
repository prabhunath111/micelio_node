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

/* GET users listing.*/
/*
router.post('/createuser', upload.single('userImage') ,function (req, res, next) {
  console.log("file", req.file);
  bcrypt.hash(req.body.password, saltRounds, (err, hash) => {
    // Now we can store the password hash in db.
    var user = new User({
      name: req.body.name,
      email: req.body.email,
      phone: req.body.phone,
      password: hash,
      userImage: req.file.path
    });
    // Save the new model instance, passing a callback
    user.save(function (err) {
      // if (err) return handleError(err);
      if (err) {
        console.log("error aaya hai", err);
      }
      console.log("Saved , Thanks god");
      res.send('you are so cool!!!!!');
    });
  });
});

router.put('/updateuser', upload.single('userImage') ,function(req, res) {
  const obj = JSON.parse(JSON.stringify(req.body));
  if(req.file){
    obj['userImage'] = req.file.path;
  }
  if(obj.password){
    bcrypt.hash(obj.password, saltRounds, (err, hash) => {
      // Now we can store the password hash in db.
      console.log("line58", obj.password, hash);
      obj['password']=hash;
      updateUser(obj);
    });
  } else {updateUser(obj);}

  updateUser = (obj) => {
    User.findByIdAndUpdate(req.body._id, obj, function(err, res){
      (err)?console.log("error", err):console.log("response", res);
    });
  }
  res.send("Updated data");
 });
 */

module.exports = router;
