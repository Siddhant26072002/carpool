const mongoose = require("mongoose");
const schema = mongoose.Schema;
const passengerSchema = new schema({
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
    flag: {
        type: String,
        default: null
    },
    driver_id_allocated: {    // false: active
        type: mongoose.ObjectId,
        default: null
    },
}, { timestamps: true });

module.exports = mongoose.model("passenger", passengerSchema);