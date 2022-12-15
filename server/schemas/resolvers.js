const {  } = require('../models');

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      if (context.user) {
        const userData = await User.findOne({ _id: context.user._id }).select('-__v -password');

        return userData;
      }

      throw new AuthenticationError('Not logged in');

    
    },
    email: async () => {
      return email.findOne({email: email})
    }

    

  },
  Mutation: {
    addUsername: async (parent, { username }) => {
      return username.create({username});
    },

    deleteUsername: async (parent, {username}) => {
      return username.findOneAndDelete({})
    },

    addEmail: async (parent, { email }) => {
      return username.create({email});
    },

    deleteUsername: async (parent, {email}) => {
      return username.findOneAndDelete({})
    },
  }
};

module.exports = resolvers;

