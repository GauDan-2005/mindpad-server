const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  is_google_auth: {
    type: Boolean,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
  },
  password: {
    type: String,
  },
  gender: {
    type: String,
    enum: ["MALE", "FEMALE", "OTHER"],
  },
  mobile_number: {
    type: String,
  },
  img_url: {
    type: String,
  },
  notebooks: [
    {
      type: Schema.Types.ObjectId,
      ref: "Notebook",
    },
  ],
  local_notebooks: [
    {
      type: Schema.Types.ObjectId,
      ref: "Notebook",
    },
  ],
  organizations: [
    {
      organization: {
        type: Schema.Types.ObjectId,
        ref: "Organization",
      },
      role: {
        type: String,
        default: "collaborator",
      },
    },
  ],
});

module.exports = mongoose.model("User", userSchema);
