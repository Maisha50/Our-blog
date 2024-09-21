
import Post from '../model/post.js';
import Category from '../model/category.js';

export const createPost = async (request, response) => {
    try {
        const post = await new Post(request.body);
        const category = await Category.findOne({ type: request.body.categories });

        if (category) {
            category.number++;
            await category.save(); // Save the updated category
        }
        post.save();

        response.status(200).json('Post saved successfully');
    } catch (error) {
        response.status(500).json(error);
    }
}

export const updatePost = async (request, response) => {
    try {
        const post = await Post.findById(request.params.id);

        if (!post) {
            response.status(404).json({ msg: 'Post not found' })
        }
        
        await Post.findByIdAndUpdate( request.params.id, { $set: request.body })

        response.status(200).json('post updated successfully');
    } catch (error) {
        response.status(500).json(error);
    }
}
export const deletePost = async (request, response) => {
    try {
        const post = await Post.findById(request.params.id);
        if (!post) {
            return response.status(404).json({ msg: 'Post not found' });
        }

        // Use findByIdAndDelete to remove the post
        await Post.findByIdAndDelete(post._id);

        return response.status(200).json({ msg: 'Post deleted successfully' });
    } catch (error) {
        return response.status(500).json({ error: error.message });
    }
};


export const getPost = async (request, response) => {
    try {
        const post = await Post.findById(request.params.id);

        response.status(200).json(post);
    } catch (error) {
        response.status(500).json(error)
    }
}

export const getAllPosts = async (request, response) => {
    let username = request.query.username;
    let category = request.query.category;
    let posts;
    try {
        if(username) 
            posts = await Post.find({ username: username });
        else if (category) 
            posts = await Post.find({ categories: category });
        else 
            posts = await Post.find({});
            
        response.status(200).json(posts);
    } catch (error) {
        response.status(500).json(error)
    }
}