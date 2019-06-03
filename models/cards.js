var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var CardSchema = new Schema({
    created: {type: Date, default: Date.now},
    name: {type: String, required: true, max:100},
    alias_name: {type: String, required: true, max:100},
    color: {type: String, required: true, enum:['gray','green','blue','purple']},
    type: {type: String, required: true, enum:['headwear','armor','weapon','offhand','garment','footgear','accessory']},
    main_effect: {type: String},
    deposit_effect: {type: String},
    loot_effect: {type: String}
});

CardSchema
.virtual('url')
.get(function(){
    return '/card/' + this._id;
});

module.exports = mongoose.model('Cards', CardSchema);