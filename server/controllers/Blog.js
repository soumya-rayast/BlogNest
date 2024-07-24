const Blog = require("../models/Blog");

const createBlog = async (req, res) => {
    const { title, content, author, tags, thumbnail, publicId } = req.body;
    try {
        if (!title || !content || !author || !thumbnail || !tags || !publicId) {
            return res.status(400).json({ success: false, message: "Please fill all the fields" })
        }
        let blog = await Blog.create({ title, content, author, tags, thumbnail, publicId })
        await blog.save();
        return res.status(201).json({ success: true, message: "Blog Created" })
    } catch (error) {
        console.log(error)
    }
}

module.exports = {createBlog}