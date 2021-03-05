const mongoose = require('mongoose');

const chargerSchema = mongoose.Schema({
    charger_id: { 
        type: String,
    },
    charger_name: { 
        type: String,
     },
     location: {
         type: {
             type: String,
         },
          coordinates: {
              type: Array
          }
     },
     chargerStatus: {
         type: String
     } 
})

module.exports = mongoose.model('Charger', chargerSchema);