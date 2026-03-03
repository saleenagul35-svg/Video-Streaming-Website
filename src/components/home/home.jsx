import react from "react"
import { Link } from "react-router-dom";

const Home = () =>{
 return(
    <>
          <section className="relative bg-black text-white min-h-screen flex items-center overflow-hidden">

      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1606813907291-d86efa9b94db"
          alt="Featured"
          className="w-full h-full object-cover opacity-40"
        />
      </div>

      {/* Top Gradient (Navbar Boundary Effect) */}
      <div className="absolute top-0 left-0 w-full h-40 bg-linear-to-b from-black via-black/80 to-transparent z-0"></div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 w-full h-40 bg-linear-to-t from-black via-black/80 to-transparent z-0"></div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 px-8 md:px-16 max-w-3xl">
        
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          The Future of <span className="text-red-800">Streaming</span> Starts Here
        </h1>

        <p className="text-gray-300 mb-8 text-lg">
          Watch the latest trending movies, exclusive originals,
          and binge-worthy series anytime, anywhere.
        </p>

        <div className="flex space-x-4">
          <button className="bg-red-800 hover:bg-red-700 transition duration-300 px-8 py-3 rounded-md font-semibold shadow-lg">
            ▶ Play Now
          </button>

          <Link
            to="/trending"
            className="border border-white hover:bg-white hover:text-black transition duration-300 px-8 py-3 rounded-md font-semibold"
          >
            Check The Trend 
          </Link>
        </div>

      </div>
    </section>
   
    </>
 )
}
export default Home