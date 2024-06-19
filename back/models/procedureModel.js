const mongoose = require("mongoose");

const procedureSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please enter procedure name"],
        trim: true,
    },
    description: {
        type: String,
        required: [true, "Please enter procedure description"],
        trim: true,
    },
    price: {
        type: Number,
        required: [true, "Please enter procedure price"],
    },
    duration: {
        type: Number,
        required: [true, "Please enter procedure duration"],
    },
    image: {
        type: String,
        required: [true, "Please enter procedure image"],
    },
});

module.exports = mongoose.model("Procedure", procedureSchema)

