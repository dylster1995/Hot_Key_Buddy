const mongoose = require('mongoose');

//mongodb://[username:password@]host1[:port1][,...hostN[:portN]][/[defaultauthdb][?options]]

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/hot_key_buddy_db', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = mongoose.connection;
