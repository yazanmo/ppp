const mongoose = require('mongoose');

const buyer = new mongoose.Schema({
	
	name: { type: String, required: true },
	price : { type: Number, required: true },
	description: { type: String, required: true },
	email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: mongoose.Schema.ObjectId, ref: "Role" },                        
	
});                                                                                                                              

module.exports = mongoose.model('buyer', buyer);