import { react, useState } from "react"
import { useDispatch, useSelector } from 'react-redux'
import { addVideos } from "../stateSlice/stateSlice"
import { setVideo, unsetVideo } from "../stateSlice/playVideoSlice"
const Categories = () => {
  const dispatch = useDispatch();
  const modal = useSelector((state) => state.video.value)
  const videos = useSelector((state)=>state.dataBase.value)
  console.log(modal);

  const categories = ["All", "History", "Drama", "Comedy", "Sci-Fi", "Cartoon"];

  const [activeCategory, setActiveCategory] = useState("All")

  const filteredVideos = activeCategory === "All" ? videos : videos.filter((v) => v.category === activeCategory)

  return (

    <>
      <section className="bg-black text-white py-20 px-6 md:px-16 min-h-screen">

        {/* Heading */}
        <div className="mb-10 flex flex-col md:flex-row md:items-center md:justify-between">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 md:mb-0">
            Browse by <span className="text-red-800">Category</span>
          </h2>

          {/* Category Buttons */}
          <div className="flex flex-wrap gap-4">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full border transition duration-300 text-sm font-medium
                ${activeCategory === cat
                    ? "bg-red-800 border-red-800"
                    : "border-gray-600 hover:border-red-800 hover:text-red-800"
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {filteredVideos.map((video) => (
            <div key={video.id} className="relative group rounded-xl overflow-hidden shadow-lg">
              <img
                src={video.image}
                alt={video.title}
                className="w-full h-60 object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* Overlay */}
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/70
                  opacity-100 md:opacity-0 md:group-hover:opacity-100
                  transition-opacity duration-300">
                <h3 className="text-lg font-semibold text-center px-4">{video.title}</h3>

                <button
                  className="bg-red-800 hover:bg-red-700 px-6 py-2 active:scale-95 rounded-md text-sm font-semibold transition mb-2"
                  onClick={() => dispatch(setVideo(video))}
                >
                  ▶ Play
                </button>

                <button
                  className="border border-white px-6 py-2 active:scale-95 rounded-md text-sm hover:bg-white hover:text-black transition"
                  onClick={() => dispatch(addVideos(video))}
                >
                  + My List
                </button>
              </div>
            </div>
          ))}
        </div>
        {modal && (
          <>
            {/* Background overlay with blur */}
            <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"></div>

            {/* Video container */}
            <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
              <div className="bg-black rounded-lg max-w-3xl w-full relative">

                {/* Close button */}
                <button className="absolute top-2 right-2 text-white text-xl font-bold hover:scale-90" onClick={()=>dispatch(unsetVideo())}>
                  ✕
                </button>

                {/* Video iframe */}
                <iframe
                  src={modal.video}
                  title="Sample Video"
                  className="w-full h-96 md:h-125 rounded-lg"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </>
        )
        }

      </section>

    </>
  )
}
export default Categories