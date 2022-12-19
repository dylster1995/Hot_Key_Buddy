const { Schema, model } = require("mongoose");
const bcrypt = require("bcrypt");
//const {Game} = require("./game");
const bindingScheme = require("./bindings");

const UserSchema = new Schema(
  {
    email: {
      type: String,
      unique: true,
      required: "Email is Required",
      match: [/.+@.+\..+/],
    },
    password: {
        type: String,
        required: true,
    },
    games: {
      type: [],
    },
    keyBinds: [bindingScheme]    
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

  UserSchema.methods.isCorrectPassword = async function (password) {
    return bcrypt.compare(password, this.password);
  };

const User = model("User", UserSchema);

module.exports = {User};