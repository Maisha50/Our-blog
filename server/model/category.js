import mongoose from 'mongoose';

const CategorySchema = mongoose.Schema({
    id: {
        type: Number,
    },
    type: {
        type: String,
        required: true,
    },
    number: {
        type: Number,
        required: true,
    }
});


const category = mongoose.model('category', CategorySchema, 'category');


export default category;