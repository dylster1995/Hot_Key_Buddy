const mongoose = require('mongoose');

const localDB = 'mongodb://localhost:27017/hot_key_buddy_db';
//process.env.MONGODB_URI

// mongoose.connect('mongodb+srv://hot_key_buddy_user:8SCUaS2M9V0SjoD3@cluster0.zcgxe.mongodb.net/?retryWrites=true&w=majority', {
  mongoose.connect('mongodb+srv://hot_key_buddy_user:8SCUaS2M9V0SjoD3@cluster0.zcgxe.mongodb.net/hot_key_buddy_db?authSource=admin&replicaSet=atlas-v3ytle-shard-0&readPreference=primary&ssl=true', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = mongoose.connection;
