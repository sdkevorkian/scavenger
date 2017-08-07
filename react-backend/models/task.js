var mongoose = require('mongoose');

var TaskSchema = mongoose.Schema({
    task: String,
    completed: {
        type: Boolean,
        default: false
    },
    memberWithEvidence: String
});

module.exports = mongoose.model('Task', TaskSchema);
