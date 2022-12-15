const { User } = require('../models/user');
const { Game } = require('../models/game');

const resolvers = {
  Query: {
    readUser: async (parent, args, context) => {
      if (context.user) {
        return await User.findOne({ _id: context.user._id }).select('-__v -password');
      }

      throw new AuthenticationError('Not logged in');
    },
    readUsers: async (parent, args) => {
      return User.find({});
    },
    readGame: async (parent, args) => {
      return Game.findOne({title: args.title});
    },

    readGames: async () => {
      return Game.find({})
    }
  },
  Mutation: {
    createUser: async (parent, args) => {
      return User.create({
        username: args.username,
        email: args.email,
        password: args.password,
        games: [...args.games]
      });
    },
    updateUser: async (parent, args) => {
      return User.updateOne({
        _id: args.id
      },
      {
        username: args.username,
        email: args.email,
        password: args.password,
        games: [...args.games]
      });
    },
    deleteUser: async (parent, args) => {
      return User.findOneAndDelete({_id:args.id})
    },

    createGame: async (parent, args) => {
      return Game.create({
        title: args.title,
        profile: args.profile
      });
    },
    updateGame: async (parent, args) => {
      return Game.updateOne({
        _id: args.id
      },
      {
        title: args.title,
        profile: args.profile
      });
    },
    deleteGame: async (parent, args) => {
      return Game.findOneAndDelete({_id: args.id})
    },
  }
};
{
// const resolvers = {
//   Query: {
//     me: async (parent, args, context) => {
//       if (context.user) {
//         const userData = await User.findOne({ _id: context.user._id }).select('-__v -password');

//         return userData;
//       }

//       throw new AuthenticationError('Not logged in');
//     },

//     email: async () => {
//       return email.findOne({email: email})
//     }
//   },
//   Mutation: {
//     addUsername: async (parent, { username }) => {
//       return username.create({username});
//     },

//     deleteUsername: async (parent, {username}) => {
//       return username.findOneAndDelete({})
//     },

//     addEmail: async (parent, { email }) => {
//       return username.create({email});
//     },

//     deleteUsername: async (parent, {email}) => {
//       return username.findOneAndDelete({})
//     },
//   }
// };
}
module.exports = resolvers;

