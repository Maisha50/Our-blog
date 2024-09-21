import mongoose from 'mongoose';

const PostSchema = mongoose.Schema({
    title: {
        type: String,
       
      
    },
    description: {
        type: String,
        
    },
    picture: {
        type: String,
        
    },
    username: {
        type: String,
       
    },
    categories: {
        type: Array,
           
    },
    createdDate: {
        type: Date
    }
});


const post = mongoose.model('post', PostSchema);

export default post;