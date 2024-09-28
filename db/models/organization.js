const mongoose = require("mongoose");

const organizationSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  owner: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  members: [
    {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  ],
  notebooks: [
    {
      type: Schema.Types.ObjectId,
      ref: "Notebook",
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Organization", organizationSchema);
