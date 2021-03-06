const { Schema, model } = require('mongoose');


const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      max_length: 50,
      trim:true
    },
    email: {
      type: String,
      required: true,
      unique:true,
      max_length: 50,
      match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/]
    },
    thoughts: [{
      type: Schema.Types.ObjectId,
      ref: 'thought',
    }],
    friends: [{
      type: Schema.Types.ObjectId,
      ref: 'user',
    }],
  },
  {
    toJSON: {
      getters: true,
      virtuals: true
    },
  }
);

userSchema
  .virtual('friendCount')
  .get(function () {
    return `friendCount: ${this.friends.length}`;
  })

const User = model('user', userSchema);

module.exports = User;
