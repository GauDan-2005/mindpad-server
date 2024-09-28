const mongoose = require("mongoose");

const notebookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  author: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  notes: [
    {
      type: Schema.Types.ObjectId,
      ref: "Note",
    },
  ],
  sharedWith: [
    {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  ],
  organization: {
    type: Schema.Types.ObjectId,
    ref: "Organization",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Notebook", notebookSchema);
