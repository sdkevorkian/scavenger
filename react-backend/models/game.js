var mongoose = require('mongoose');

var GameSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    event: {
        type: String,
        required: true
    },
    teams: [
        [String]
    ],
    tasks: [{type: mongoose.Schema.Types.ObjectId, ref: "Task"}]
});

module.exports = mongoose.model('Game', GameSchema);
