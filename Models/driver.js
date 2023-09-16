const mongoose = require("mongoose");
const schema = mongoose.Schema;
const driverSchema = new schema({
    user_id: {
        type: mongoose.ObjectId,
        require: true,
    },    
    source: {
        type: Object,
        required: true,
    },
    destination: {
        type: Object,
        required: true,
    },
    dateTime: {
        type: Date,
        required: true,
    },
    max_riders: {
        type: Number,
        required: true,
    },
    riders: {
        type: Array,
        default: []
    },
    completed: {    // false: active
        type: Boolean,
        default: false
    },
}, { timestamps: true });

module.exports = mongoose.model("driver", driverSchema)