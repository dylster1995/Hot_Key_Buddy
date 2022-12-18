const { Schema } = require("mongoose");

const bindingScheme = new Schema(
    {
        keyBind: {
            type:String
        },
        binding: {
            type: Object
        }
    }
)

// const Bind = model("Bind", bindingScheme);

module.exports = bindingScheme