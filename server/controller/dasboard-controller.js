import Category from '../model/category.js'

export const dashboard = async (request, response) => {
    try {
        const category = await Category.find()
        console.log("Category data:", category);
        response.status(200).json({ category: category })
    } catch (error) {
        response.status(500).json(error);
    }
}
