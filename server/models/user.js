const { Schema, model } = require("mongoose");
const bcrypt = require("bcrypt");
const {Game} = require("./game");

const UserSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
      trim: true,
      required: "Username is Required",
    },
    email: {
      type: String,
      unique: true,
      required: "Username is Required",
      match: [/.+@.+\..+/],
    },
    password: {
        type: String,
        required: true,
    },
    games: {
      type: [],
    }
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

UserSchema.pre('save', async function (next) {
    if (this.isNew || this.isModified('password')) {
      const saltRounds = 10;
      this.password = await bcrypt.hash(this.password, saltRounds);
    }
  
    next();
  });
  
  // custom method to compare and validate password for logging in
  UserSchema.methods.isCorrectPassword = async function (password) {
    return bcrypt.compare(password, this.password);
  };
  
  
  
const User = model("User", UserSchema);

module.exports = {User};