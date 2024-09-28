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
      member: {
        type: Schema.Types.ObjectId,
        ref: "User",
      },
      role: {
        type: String,
        default: "COLLABORATOR",
        ENUM: ["COLLABORATOR", "OWNER", "ADMIN", "MEMBER", "GUEST"],
      },
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
