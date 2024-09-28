const mongoose = require("mongoose");

const noteSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  author: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  notebook: {
    type: Schema.Types.ObjectId,
    ref: "Notebook",
    required: true,
  },
  collaborators: [
    {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  ],
  tags: [String],
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Note", noteSchema);
