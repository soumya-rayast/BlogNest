import { MdDelete } from "react-icons/md";
import JoditEditor from "jodit-react";
import { useCallback, useRef, useState } from "react";
const CreateBlog = () => {
    const editor = useRef(null);
    const [title, setTitle] = useState("");
    const [thumbnail, setThumbnail] = useState(null);
    const [content, setContent] = useState("");
    const [progress, setProgress] = useState(0);
    const [tags, setTags] = useState([]);
    const [currentTag, setCurrentTag] = useState("");

    const addTag = (tag) => {
        setTags((prev) => [...prev, tag]);
    };

    const removeTag = (tag) => {
        setTags((prev) => prev.filter((t) => t != tag))
    }
    const handleThumbnailChange = useCallback((e) => {
        const file = e.target.files[0];
        if (file.size > 1000000) {
            alert("File should be less then 1Mb")
        } else {
            console.log(file);
            setThumbnail(file);
        }
    }, [])
    const CreatePost = async (e) => {
        e.preventDefault();
        console.log(title, thumbnail, content);
        const onUploadProgress = (progressEvent) => {
            const percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total)
            setProgress(percentCompleted);
            try {
                
            } catch (error) {
                console.log(error)
            }
        }

    }
    return (
        <div className="md:w-[60vw] bg-white my-20 mx-auto py-4 rounded-2xl">
            <h3 className="text-2xl text-gray-600 text-center">Let us Create a blog Post</h3>
            <form action="" className="grid grid-cols-1 gap-3 my-6 pl-3 pr-3">
                <div className="flex flex-col">
                    <label
                        htmlFor="title"
                        className="text-lg font-semibold text-gray-600">
                        Title
                    </label>
                    <input
                        type="text"
                        name="title"
                        id="title"
                        placeholder="Enter the title here..."
                        required
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="rounded-2xl px-3 py-1 text-lg outline-none bg-gray-100 " />
                </div>
                <div className="flex flex-col">
                    <label
                        htmlFor="thumbnail"
                        className="text-lg font-semibold text-gray-600">
                        Thumbnail
                    </label>
                    <input
                        type="file"
                        name="thumbnail"
                        id="thumbnail"
                        required
                        tabIndex={1}
                        onChange={handleThumbnailChange}
                        className="rounded-2xl px-3 py-1 text-lg outline-none bg-gray-100" />
                </div>
                <div className="flex flex-col">
                    <label
                        htmlFor="tag"
                        className="text-lg font-semibold text-gray-600">
                        Tags
                    </label>
                    <div className="flex flex-col md:flex-row justify-between gap-2 md:gap-0">
                        <input
                            type="text"
                            name="tag"
                            id="tag"
                            placeholder="Enter the tags here..."
                            value={currentTag}
                            onChange={(e) => setCurrentTag(e.target.value)}
                            className="rounded-2xl px-3 py-1 text-lg outline-none bg-gray-100 w-full md:w-[80%]" />
                        <button onClick={() => { addTag(currentTag); setCurrentTag("") }}
                            className="mt-2 py-2 px-8 text-base bg-purple-500 hover:bg-purple-400 rounded-3xl text-white font-semibold w-fit">
                            Add Tag
                        </button>
                    </div>
                    <label htmlFor="tags" className="tex-lg font-semibold text-gray-600 mt-2">
                        Selected Tags
                    </label>
                    <div className="bg-gray-100 rounded-2xl">
                        {
                            tags.map((tag, i) =>
                                <div key={i} className="flex justify-between items-center px-2 capitalize">
                                    <span>{tag}</span>
                                    <MdDelete className="text-red-400 cursor-pointer hover:text-red-600" onClick={() => removeTag(tag)} />
                                </div>)
                        }

                    </div>
                </div>
                <div>
                    <label htmlFor="editor" className="text-lg font-semibold text-gray-600">Content</label>
                    <JoditEditor ref={editor} value={content} onChange={(newContent) => setContent => (newContent)} />
                    <button type="submit" className="mt-2 py-2 px-8 text-base bg-purple-500 hover:bg-purple-400 rounded-3xl text-white font-semibold w-fit">
                        Create Blog
                    </button>
                </div>
            </form>
        </div>
    )
}

export default CreateBlog
