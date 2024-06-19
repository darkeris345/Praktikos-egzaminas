const mongoose = require("mongoose");

const procedureSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please enter procedure name"],
        trim: true,
    },
    category: {
        type: String,
        required: [true, "Please enter procedure category"],
        trim: true,
    },
    duration: {
        type: String,
        required: [true, "Please enter procedure duration"],
        trim: true,
    },
    image: {
        type: String,
        required: [true, "Please enter procedure image"],
    },
});

module.exports = mongoose.model("Procedure", procedureSchema)

