const { User } = require('../models');
const {AuthenticationError} = require('apollo-server-express')
const bindingScheme = require('../models/bindings');
const { signToken } = require('../utils/auth');


const resolvers = {
  Query: {
    // get single user info by id but don't return the password hash
    readUser: async (parent, args, context) => {
      if (context.user) {
        return await User.findOne( { _id: context.user._id} );//.select('-__v -password');
      }
      throw new AuthenticationError('not logged in');
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
//     readGames: async (parent, args, context) => {
// if(context.user){
//   const gamesData =  await Game.find()
//  return gamesData
// }
//     },
  },
  //may need to add const user and const token to create in db
  //write a login function to findone by email
  //const correct pw to match in user with it's valitdation
  //const token

  Mutation: {
    // create a new user
    createUser: async (parent, args) => {
      const user = await User.create({
        email: args.email,
        password: args.password,
      });
      const token = signToken(user);
      return {token, user};
    },
    // update an existing user, to rehash a password we must call the .save method
    updateUser: async (parent, args) => {
      const user = await User.findById({ _id: args._id }, async (err, result) => {
        if (err){
          console.error(err);
          return err;
        }
        // if the user didn't send data fill it in with their existing data
        args.email = args.email ? args.email : user.email;
        args.password = args.password ? args.password : user.password;
        Object.assign(result,
        {
          email: args.email,
          password: args.password,
        });
        await result.save();
      });
      return user;
    },
    // delete an existing user 
    deleteUser: async (parent, args) => {
      await Game.deleteMany( {user_id: args._id} );
      return await User.findOneAndDelete({ _id: args._id });
    },
    // create a new game under a specific user
    createGame: async (parent, args, context) => {
      if (context.user){
        const user = await User.findByIdAndUpdate(
          {_id: context.user._id},
          {$push: {games: args}},
          {new: true}
        );

        return user;
      }
      throw new AuthenticationError('not logged in');
      
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
    createBind: async (parent, args) => {
      return bindingScheme.create({
        keyBind: args.keyBind,
        Binding: args.binding
      })
    },
    // check if a user is allowed to login. Returns boolean
    login: async (parent, args) => {
      // find an existing user by id
      const user = await User.findOne({ email: args.email });
      if (!user){
        // user does not exist!
        return { message: "No user found with that email!"};
      }
      // user exists, now check password for authentication
      if( await user.isCorrectPassword(args.password) ){
        const token = signToken(user);
        return {token, user};
      } else {
        return { message: "Wrong email or password!" };
      }
    }
  }
};

module.exports = resolvers;