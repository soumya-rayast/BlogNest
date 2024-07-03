import { useParams, useState } from "react"
import { AiFillHome } from "react-icons/ai"
import { MdAccountCircle, MdDelete, MdEdit } from "react-icons/md"
import { Link } from "react-router-dom"
import BlogCard from "../Components/BlogCard"
import coinwave from "../assets/Trial/coinwave.jpg";
import sam from "../assets/Trial/Sam.jpg";
const Blog = () => {
  // const { id } = useParams();
  const [userAuthenticated, setUserAuthenticated] = useState(false);
  return (
    <>
      <section>
        {/* navigation bar */}
        <nav className="p-5 border-b-2 flex gap-3 bg-purple-500">
          <Link to="/" className="font-semibold flex justify-center items-center gap-2 text-gray-300 hover:text-white transition-all duration ease-in-out">
            <AiFillHome /> <span>Home</span>
          </Link>
          <span className="text-white cursor-pointer">
            Mern Stack
          </span>
        </nav>
        {/* Blog part */}
        <div className="mx-5 gap-3 flex md:gap-5 flex-col md:flex-row">
          {/* selected blog section */}
          <div className="w-full md:w-[60vw] bg-white mx-auto p-5 rounded-lg my-10">
            <h1 className="4xl font-bold my-5">Task Management MERN</h1>
            <img src={coinwave} alt="" className="w-full h-[40vh] object-cover rounded-2xl shadow-md" />
            <div className="flex gap-2 my-5  ">
              <span className="px-4 py-2 text-gray-600 text-xs  md:text-sm rounded-full font-semibold shadow-md capitalize ">Programming</span>
              <span className="px-4 py-2 text-gray-600 text-xs  md:text-sm rounded-full font-semibold shadow-md capitalize ">Coding</span>
            </div>
            <hr />
            <div className="my-5">
              <p className="overflow-x-clip">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste, tenetur veritatis eveniet cumque, ipsam sequi, fuga atque laudantium odit ipsum a quis magni accusantium itaque nulla! Est eligendi tempore suscipit esse delectus quo aliquam laboriosam officia veritatis corporis, totam perspiciatis error a fugit, et amet non dicta beatae omnis necessitatibus. Perspiciatis qui, quidem sapiente itaque molestiae velit consequuntur numquam. Voluptates officia cupiditate, fugit tempora soluta minus cum, natus obcaecati, qui nemo accusantium sequi illo veritatis harum nihil modi quia delectus itaque consequatur similique ullam exercitationem necessitatibus possimus nesciunt? Eveniet delectus assumenda temporibus dolores consequatur odit veritatis repellendus laboriosam sit minus.</p>
            </div>
            <div className="flex justify-start items-center gap-3 text-base">
              <img src={sam} alt="" className="rounded-full w-[40px] h-[40px]" />
              <div>
                <h4 className="font-bold">Soumya Rayast</h4>
                <p className="font-bold">24 mar 1988</p>
              </div>
            </div>
          </div>
          {/* Blogs - sidebar*/}
          <div className="my-10">
            {/* /Blog Content  */}
            <h3 className="text-3xl font-semibold text-gray-600 ml-3">More Blogs</h3>
            <div className="grid grid-cols-1 md:h-[80vh] md:overflow-y-scroll md:px-3 md:pb-2 scroll-hide">
              <BlogCard />
              <BlogCard />
              <BlogCard />
              <BlogCard />
            </div>
            {/* Comment section */}
            <h3 className="text-3xl font-semibold text-gray-600 ml-3 mt-10 ">
              Comments
            </h3>
            {/* Comment Content */}
            <div>
              {/* Adding comment */}

              <div className="flex justify-between items-start gap-3 my-5">
                {
                  userAuthenticated ? (<img src={sam} alt="profile" className="w-[50px] h-[50px] rounded-full " />) : (<MdAccountCircle className="text-gray-600 text-5xl" />)
                }
                <div>
                  <textarea
                    name="message"
                    id="message"
                    rows="2"
                    className="md:w-[35vw] rounded-lg outline-none shadow-md text-base px-3 py-2">          </textarea>
                  <div className="flex gap-3">
                    <button className="text-white bg-purple-500 hover:bg-purple-400 px-5 py-1 text-base font-semibold transition-all duration-300 ease-linear rounded-md w-fit">Add</button>
                    <button className="text-white bg-purple-500 hover:bg-purple-400 px-5 py-1 text-base font-semibold transition-all duration-300 ease-linear rounded-md w-fit">
                      {!userAuthenticated ? "Sign In with google" : " Sign out "}
                    </button>
                  </div>
                </div>
              </div>
              {/* LISTING COMMENTS */}
              <div>
                <div className="flex flex-col md:flex-row justify-start items-center md:gap-3 my-3 ">
                  <img src={sam} alt="profile" className="w-[50px] h-[50px] rounded-full hidden md:block" />
                  <div className="bg-white w-full md:w-[35vw] rounded-lg py-2 text-sm md:text-base px-3 shadow-md">
                    <div className="flex justify-between">
                      <span className="text-xs md:text-sm font-semibold">Soumya rayast</span>
                      <div className="flex gap-1">
                        <MdEdit  className="text-gray-500 hover:text-purple-500 hover:scale-105 transition-all ease-in-out cursor-pointer"/>
                        <MdDelete className="text-gray-500 hover:text-purple-500 hover:scale-105 transition-all ease-in-out cursor-pointer"/>
                      </div>
                    </div>
                    <p className={`outline-none bg-gray-100 shadow-inner pl-1 rounded-md my-3 transition-all duration-500 ease-in-out`}>
                      Hello your project is good
                    </p>
                    <button className="bg-purple-500 hover:bg-purple-600 px-3 py-1 text-white text-sm rounded-lg">
                      Save
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
export default Blog
