import mongoose from 'mongoose';

const CommentSchema = mongoose.Schema({
    name: {
        type: String,
        
    },
    postId: {
        type: String,
        
    },
    date: {
        type: String,
        
    },
    comments: {
        type: String,
        
    }
});


const comment = mongoose.model('comment', CommentSchema);

export default comment;