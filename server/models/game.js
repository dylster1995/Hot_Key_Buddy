const { Schema, model } = require("mongoose");

const GameSchema = new Schema(
  {
    title: {
      type: String,
      unique: true,
      trim: true,
      required: "Title is Required",
    },

    profile: {
      type: Object,
    },
  },
);

const Game = model("Game", GameSchema);

module.exports = {Game};