const { Schema, model } = require("mongoose");

const GameSchema = new Schema(
  {
    title: {
      type: String,
      trim: true,
      required: "Title is Required",
    },

    profile: {
      type: Object,
    },
    user_id: {
      type: String
    }
  },
);

const Game = model("Game", GameSchema);

module.exports = {Game};