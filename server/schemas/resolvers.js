const { User } = require('../models/user');
const { Game } = require('../models/game');

const resolvers = {
  Query: {
    // get single user info by id but don't return the password hash
    readUser: async (parent, args) => {
      if (args._id) {
        return await User.findOne( { _id: args._id } ).select('-__v -password');//.select('-__v -password');
      }
      return('Not logged in');
    },
    // get all users in the database without their passwords
    readUsers: async () => {
      return await User.find({}).select('-__v -password');
    },
    // get one game by title 
    readGame: async (parent, args) => {
      return await Game.findOne({ _id: args._id });
    },
    // get all games of a user
    readGames: async (parent, args) => {
      return await Game.find({ user_id: args.user_id })
    },
    // check if a user is allowed to login. Returns boolean
    login: async (parent, args) => {
      // find an existing user by id
      const user = await User.findOne({ email: args.email })
      if (!user){
        // user does not exist!
        return { message: "No user found with that email!"};
      }
      // user exists, now check password for authentication
      if( await user.isCorrectPassword(args.password) ){
        return user;
      } else {
        return { message: "Wrong email or password!" };
      }
    }
  },
  Mutation: {
    // create a new user
    createUser: async (parent, args) => {
      return await User.create({
        username: args.username,
        email: args.email,
        password: args.password,
      });
    },
    // update an existing user, to rehash a password we must call the .save method
    updateUser: async (parent, args) => {
      const user = await User.findById({ _id: args._id },(err, result) => {
        if (err){
          console.error(err);
          return err;
        }
        Object.assign(result,
        {
          username: args.username,
          email: args.email,
          password: args.password,
        });
        result.save().
        then(()=> console.log(result))
      });
      return user;
    },
    // delete an existing user 
    deleteUser: async (parent, args) => {
      return await User.findOneAndDelete({ _id: args._id })
    },
    // create a new game under a specific user
    createGame: async (parent, args) => {
      return await Game.create({
        title: args.title,
        profile: args.profile,
        user_id: args.user_id
      });
    },
    // update an existing game under a specific user
    updateGame: async (parent, args) => {
      return await Game.updateOne({ _id: args._id },
      {
        title: args.title,
        profile: args.profile,
      });
    },
    // delete an existing game 
    deleteGame: async (parent, args) => {
      return await Game.findOneAndDelete({ _id: args._id })
    },
    // remove these last two. Only for development
    deleteGames: async () => {
      return await Game.deleteMany({});
    },
    deleteUsers: async () => {
      return await User.deleteMany({});
    }
  }
};

module.exports = resolvers;