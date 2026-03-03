import react from "react"
import { useSelector, useDispatch } from 'react-redux'
import { setVideo,unsetVideo } from "../stateSlice/playVideoSlice"
import { removeVideos } from "../stateSlice/stateSlice"
const MyList = () => {
   const modal = useSelector((state) => state.video.value)
   const dispatch = useDispatch();
   const videos = useSelector((state) => state.list.value)
   console.log(videos);

   return (
      <>
         <section className="bg-black text-white py-20 px-6 md:px-16 min-h-screen">
            <h2 className=" text-3xl md:text-4xl font-bold mb-6 md:mb-0"> Watch Your
               <span className="text-red-800"> Favourites</span>
            </h2>
            {/* Video Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-10">
               {videos.map((video,index) => (
                  <div
                     key={index}
                     className="relative group rounded-xl overflow-hidden shadow-lg cursor-pointer"
                  >
                     <img
                        src={video.image}
                        alt={video.title}
                        className="w-full h-60 object-cover transform md:group-hover:scale-110 transition duration-500"
                     />

                     <div
                        className="
                   absolute inset-0 
                   bg-black/70 
                    flex flex-col items-center justify-center space-y-4
                    opacity-100 
                    md:opacity-0 
                    md:group-hover:opacity-100 
                    transition duration-300
                    "
                     >
                        <h3 className="text-lg font-semibold text-center px-4">
                           {video.title}
                        </h3>

                        <button className="bg-red-800 hover:bg-red-700 px-6 py-2 rounded-md text-sm font-semibold transition active:scale-95" onClick={() => dispatch(setVideo(video))}>
                           ▶ Play
                        </button>
                        <button
                           className="border border-white px-6 py-2 rounded-md text-sm hover:bg-white hover:text-black transition active:scale-95"
                           onClick={() => dispatch(removeVideos(video))}
                        >
                           - My List
                        </button>

                     </div>
                  </div>
               ))}
            </div>
            {
               modal && (
                  <>
                     {/* Background overlay with blur */}
                     <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"></div>

                     {/* Video container */}
                     <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
                        <div className="bg-black rounded-lg max-w-3xl w-full relative">

                           {/* Close button */}
                           <button className="absolute top-2 right-2 text-white text-xl font-bold hover:scale-90" onClick={() => dispatch(unsetVideo())}>
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
export default MyList