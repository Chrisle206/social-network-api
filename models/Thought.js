const { Schema, model } = require('mongoose');

const reactionSchema = new Schema(
  {
    reactionId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
    },
    reactionBody: {
        type: String,
        required: true,
        maxlength:280
    },
    username: {
      type: String,
      required: true
  },
    createdAt: {
      type: Date,
      default: Date.now,
      // Use a getter method to format the timestamp on query
    }});

const thoughtSchema = new Schema(
    {
      thoughtText: {
        type: String,
        required: true,
        length:[1, 200],
      },
      createdAt: {
        type: Date,
        default: Date.now,
        // Use a getter method to format the timestamp on query
      },
      username: {
          type: String,
          required: true
      },
      reactions: [reactionSchema],
    },
    {
      toJSON: {
        getters: true,
        virtuals: true
      },
    }
  );
  
  thoughtSchema
    .virtual('reactionCount')
    .get(function () {
      return `reactionCount: ${this.reactions.length}`;
    })

    // const bookData = [
    //   { title: 'Diary of Anne Frank', price: 10 },
    //   { title: 'One Thousand Years of Solitude', price: 20 },
    //   { title: 'History of Hogwarts', price: 5 },
    // ];
    
    // Library.create({ name: 'Books', books: bookData }, (err, data) => {
    //   if (err) {
    //     console.log(err);
    //   } else {
    //     console.log(data);
    //   }
    // });

  const Thought = model('thought', thoughtSchema);
  
  module.exports = Thought;