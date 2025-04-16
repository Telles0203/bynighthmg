const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
    validationToken: { type: String },
    warningList: {
        emailCheck: { type: Boolean, default: true },
        paymentPending: { type: Boolean, default: false },
        profileIncomplete: { type: Boolean, default: true }
      }      
});

module.exports = mongoose.model("User", userSchema);
