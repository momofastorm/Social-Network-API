const { Schema, model } = require('mongoose');

const userSchema = new Schema({
    userText: { type: String, required: true, minLength: 1, maxLength: 280 },
    createdAt: {
        type: Date, default: Date.Now,
    },
    username: { type: String, required: true },
},
    {
        toJSON: {
            virtuals: true,
        },
        id: false,
    }
);



userSchema.virtual('reactionCount').get(function () {
    // Return the reactions array
    return this.reactions;
}).set(function (v) {
    // Setter function to set the reactionCount property
    const reactionCount = v.length;
    this.set('reactionCount', reactionCount);
});



const User = model('user', userSchema);
module.exports = User;