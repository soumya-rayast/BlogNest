import AdminNavbar from "../Components/AdminNavbar";
import BlogContext from "../context/BlogContext"
import { useContext } from "react"
import axios from "axios";
import {toast} from "react-toastify"
const Admin = () => {
  const { isAuth, setIsAuth } = useContext(BlogContext);
  
  const handleLogin = async (e) =>{
    e.preventDefault();
    try {
      const username = e.target.elements.username.value;
      const password = e.target.elements.password.value;
      const res = await axios.post("http://localhost:5000/api/login",
        {
          username,
          password
        });
        const data = await res.data;
        toast.success(data.message)
        setIsAuth(true);
    } catch (error) {
      console.log(error.message)
    }
  }
  return (
    // Admin login
    <div>
      {
        !isAuth ? (<div className="h-screen flex justify-center items-center">
          <form action="" onSubmit={handleLogin} className="grid grid-cols-1 gap-3 bg-white w-[80vh] md:w-[20vw] p-3 rounded-lg">
            <div className="flex flex-col ">
              <label
                htmlFor="username"
                className="text-lg font-semibold text-gray-600">
                Username
              </label>
              <input
                type="text"
                name="username"
                placeholder="Enter your name"
                required
                className="rounded-2xl px-3 py-1 text-lg outline-none bg-gray-100" />
            </div>
            <div className="flex flex-col ">
              <label
                htmlFor="password"
                className="text-lg font-semibold text-gray-600">
                password
              </label>
              <input
                type="password"
                name="password"
                placeholder="Enter your password"
                required className="rounded-2xl px-3 py-1 text-lg outline-none bg-gray-100" />
            </div>
            <button
              className="bg-purple-500 rounded-2xl text-gray-100 font-semibold hover:bg-purple-600 transition-all duration-300 ease-in-out"
              type="submit">
              Login
            </button>
          </form>
        </div>) : (
          <div>
            <h2><AdminNavbar/></h2>
          </div>)
      }

    </div>
  )
}

export default Admin
