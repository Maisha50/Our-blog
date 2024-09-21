import mongoose from 'mongoose';

const CategorySchema = mongoose.Schema({
    id: {
        type: Number,
    },
    type: {
        type: String,
       
    },
    number: {
        type: Number,
        
    }
});


const category = mongoose.model('category', CategorySchema, 'category');


export default category;