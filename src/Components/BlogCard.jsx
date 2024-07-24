import { Link } from "react-router-dom"
import sam from "../assets/Trial/Sam.jpg"
const BlogCard = ({thumbnail,title,tags,_id,createdAt,author}) => {
  return (
    <Link to={`/blog/${_id}`} className="relative flex flex-col md:flex-row py-2 gap-3 justify-start items-center md:px-5 rounded-3xl shadow-md bg-white w-full h-fit">
      <img src={thumbnail} alt="thumbnail" className="md:w-[20vw] rounded-2xl md:rounded-3xl" />
      <div className="px-3 md:px-0">
        <h3 className="flex gap-2 py-2">
           {title?.length >30 ?title.slice(0,30) + "...":title}
        </h3>
        <div>
            <span className="px-4 py-2 text-gray-600 text-xs md:text-sm rounded-full font-semibold shadow-md capitalize">MERN</span>
            <span className="px-4 py-2 text-gray-600 text-xs md:text-sm rounded-full font-semibold shadow-md capitalize">Programming</span>
        </div>
        <hr className="my-2"/>
        <div className="flex justify-start items-center gap-3">
            <img src={sam} alt=""  className="rounded-full w-[30px] h-[30px]"/>
            <div >
                <h4 className="font-bold">Soumya Rayast</h4>
                <p className="font-bold">34 mar 2024</p>
            </div>
        </div>
      </div>
    </Link>
  )
}

export default BlogCard
