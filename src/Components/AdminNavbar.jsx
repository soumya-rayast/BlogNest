const AdminNavbar = () => {
  return (
      <nav className="bg-purple-500 p-4 mx-auto flex justify-between items-center shadow-md">
        <a href="/" className="text-white text-2xl font-bold">BlogNest</a>
        <ul className="flex space-x-4 ">
            <li className={`hover:font-bold hover:text-red-200 text-white transition-all duration-300 ease-in-out cursor-pointer`}>All Blogs</li>
            <li className={`hover:font-bold hover:text-red-200 text-white transition-all duration-300 ease-in-out cursor-pointer`}>Create Blogs</li>
            <li className={`hover:font-bold hover:text-red-200 text-white transition-all duration-300 ease-in-out cursor-pointer`}>Log out</li>
        </ul>
      </nav>
  )
}

export default AdminNavbar
