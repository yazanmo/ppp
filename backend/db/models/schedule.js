const mongoose = require('mongoose');

const schedule = new mongoose.Schema({

	date: { type: String, required: true },
	user: { type:mongoose.Schema.Types.ObjectId, ref: 'Users'},
	buyer: [{ type: mongoose.Schema.Types.ObjectId, ref: 'buyer'
}],
});                                                                                                                              

module.exports = mongoose.model('schedule', schedule);