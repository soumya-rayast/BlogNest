import { Link } from "react-router-dom"
import coinwave from "../assets/Trial/coinwave.jpg"
const Main = () => {
  return (
    <div>
      <section className="py-20 bg-purple-500 min-h-[80vh] flex flex-col-reverse md:flex-row justify-between gap-5 items-center px-10">
        {/* Information  div */}
        <div className="flex flex-col gap-3">
          <h3 className="text-4xl md:text-7xl font-bold text-white">
            I love VS code and do read this
          </h3>
          <p className="text-lg md:text-3xl text-white font-sans lg:w=[50vw]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, soluta alias. Saepe hic aliquid inventore consectetur autem harum, voluptatem accusantium!
          </p>
          <hr className="" />
          <div className="flex gap-2">
            <span className="px-3 py-2 text-xs md:text-sm bg-white rounded-full font-semibold capitalize">Coding</span>
            <span className="px-3 py-2 text-xs md:text-sm bg-white rounded-full font-semibold capitalize">Programming</span>
          </div>
          <Link to={`/blog/`} className="px-8 py-2 text-xs md:text-sm bg-white mt-3 rounded-full font-semibold w-fit text-blac decoration-whitek">
            Read now</Link>
        </div>
        {/* image div */}
        <div>
          <img src={coinwave} alt="coinwave" className="w-[80vw] md:w-[40vw] rounded-3xl mt-14 md:mt-0 shadow-lg" />
        </div>
      </section>
    </div>
  )
}

export default Main
