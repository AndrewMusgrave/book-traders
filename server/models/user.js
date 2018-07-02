const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt-nodejs');

const userSchema = new Schema({
  email: {
    type: String,
    unique: true,
    lowercase: true,
  },
  password: String,

  books: [
    {
      type: Schema.Types.ObjectId,
      ref: 'book',
    },
  ],
  tradeRequests: [
    {
      type: Schema.Types.ObjectId,
      ref: 'tradeRequest',
    },
  ],
  pendingTradeRequests: [
    {
      type: Schema.Types.ObjectId,
      ref: 'tradeRequest',
    },
  ],
  user: {
    first: String,
    last: String,
    address: String,
  },
});

//On save hook, encrypt password
userSchema.pre('save', function(next) {
  //instance of user model
  const user = this;

  //generate a salt
  bcrypt.genSalt(10, function(err, salt) {
    if (err) {
      return next(err);
    }

    //has (encrypt) our password using the salt
    bcrypt.hash(user.password, salt, null, function(
      err,
      hash,
    ) {
      if (err) {
        return next(err);
      }
      //overwrite plain text password with encrypted password
      user.password = hash;
      next();
    });
  });
});

userSchema.methods.comparePassword = function(
  candidatePassword,
  callback,
) {
  bcrypt.compare(candidatePassword, this.password, function(
    err,
    isMatch,
  ) {
    if (err) {
      return callback(err);
    }

    callback(null, isMatch);
  });
};

const model = mongoose.model('user', userSchema);

module.exports = model;
