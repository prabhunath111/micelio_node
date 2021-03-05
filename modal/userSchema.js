const mongoose = require('mongoose');

const chargerSchema = mongoose.Schema({
    charger_id: { 
        type: String,
    },
    charger_name: { 
        type: String,
     },
     location: {
         lat: {
             type: Number
         },
         lng: {
             type: Number
         }
     },
     chargerStatus: {
         type: String
     } 
})

module.exports = mongoose.model('Charger', chargerSchema);