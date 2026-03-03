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

  
  //   // --- Existing Videos (History & Sci-Fi) ---
  //   {
  //     id: 1,
  //     title: "History of Iran",
  //     category: "History",
  //     image: "https://images.unsplash.com/photo-1743832370776-039ea449ac7c",
  //     video: "https://www.youtube.com/embed/MGcNoVdv-ak?si=3zew18TraNfRn6Zl"
  //   },
  //   {
  //     id: 2,
  //     title: "History of Japan",
  //     category: "History",
  //     image: "https://images.unsplash.com/photo-1738699754898-7b40d755532e",
  //     video: "https://www.youtube.com/embed/sM34lfjEos4?si=b0mF0O1jCTc3HYmT"
  //   },
  //   {
  //     id: 3,
  //     title: "History of Islam",
  //     category: "History",
  //     image: "https://images.unsplash.com/photo-1612019750679-55aaf2e0d1bb",
  //     video: "https://www.youtube.com/embed/FftbQo4p5b4?si=I3UW-Xbcz3PTmZYZ"
  //   },
  //   {
  //     id: 4,
  //     title: "History of Mughals",
  //     category: "History",
  //     image: "https://plus.unsplash.com/premium_photo-1697730312382-2305f166cdc6",
  //     video: "https://www.youtube.com/embed/oWjcflqRP9w?si=Kruvg7hB9KNiXUgc"
  //   },
  //   {
  //     id: 5,
  //     title: "Burmuda Triangle",
  //     category: "Sci-Fi",
  //     image: "https://plus.unsplash.com/premium_photo-1669750791963-ec6f3a565fb9",
  //     video: "https://www.youtube.com/embed/jF9tKMJVu78?si=nFwefFpgSJiQH7IK"
  //   },

  //   // --- New Scientific Videos (Sci-Fi) ---
  //   {
  //     id: 6,
  //     title: "Black Holes Explained",
  //     category: "Sci-Fi",
  //     image: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=500&auto=format&fit=crop", // Galaxy/Space
  //     video: "https://www.youtube.com/embed/e-P5IFTqB98?si=o-LwMFNBKyTRnjd7"
  //   },
  //   {
  //     id: 7,
  //     title: "The Future of AI",
  //     category: "Sci-Fi",
  //     image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=500&auto=format&fit=crop", // AI/Robot
  //     video: "https://www.youtube.com/embed/zWM_vXdesqE?si=884EgkiUjzcxM6Gz"
  //   },
  //   {
  //     id: 8,
  //     title: "Secrets of Quantum Physics",
  //     category: "Sci-Fi",
  //     image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=500&auto=format&fit=crop", // Quantum/Atom
  //     video: "https://www.youtube.com/embed/K5Po5R-1rgY?si=rfElYm1bSoH-eiDL"
  //   },

  //   // --- New Drama Videos ---
  //   {
  //     id: 9,
  //     title: "Black Pearl",
  //     category: "Drama",
  //     image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiVMg_ry9V7NQ1uxQhQ6xIoxwK2pWgfzj-dA&s",
  //     video: "https://www.youtube.com/embed/F9prdA1byxE?si=_bsZjeA_E9rwYWSv"
  //   },
  //   {
  //     id: 10,
  //     title: "Dayan Yuregim",
  //     category: "Drama",
  //     image: "https://static.tvmaze.com/uploads/images/original_untouched/478/1196355.jpg",
  //     video: "https://www.youtube.com/embed/Fu3w9Xonl3I?si=TWsh0uVVHPLMFn0a"
  //   },
  //   {
  //     id: 11,
  //     title: "Arafta",
  //     category: "Drama",
  //     image: "https://m.media-amazon.com/images/M/MV5BNzgyMjZhZjEtODJkMi00NzlhLWEzNTYtOGQ5YmRlM2EwNWQxXkEyXkFqcGc@._V1_.jpg",
  //     video: "https://www.youtube.com/embed/E8rIANH49sg?si=bfx-1damJG7Asbe0"
  //   },
  //   {
  //     id: 12,
  //     title: "Love Is In The Air",
  //     category: "Drama",
  //     image: "https://i1.sndcdn.com/artworks-d7e34sMH2nhhy3s1-LzLNxA-t500x500.jpg", // Sunset/Mystery
  //     video: "https://www.youtube.com/embed/cNcxz4WnoDo?si=yhkH8_r-NWJgG7ZL"
  //   },

  //   // --- New Comedy Videos ---
  //   {
  //     id: 13,
  //     title: "Bikes and Chain Snatching",
  //     category: "Comedy",
  //     image: "https://images.unsplash.com/photo-1527224857830-43a7acc85260?w=500&auto=format&fit=crop", // Microphone/Stage
  //     video: "https://www.youtube.com/embed/yMOtaHJxJT8?si=saVX4WJRdmbqWuba"
  //   },
  //   {
  //     id: 14,
  //     title: "Unhinged Couples",
  //     category: "Comedy",
  //     image: " https://cdn.pixabay.com/photo/2020/11/23/18/18/birds-5770589_1280.jpg", // Office/Fun
  //     video: "https://www.youtube.com/embed/Fcy4rO9h1Tg?si=a7TdoODJj_MjYx2M"
  //   },
  //   {
  //     id: 15,
  //     title: "Ambulance",
  //     category: "Comedy",
  //     image: "https://cdn.pixabay.com/photo/2020/07/13/16/18/comedy-5401247_1280.jpg", // Family/Laugh
  //     video: "https://www.youtube.com/embed/mbOO0Z6ryO0?si=qwD6po7BNUWXoEWS"
  //   },
  //   {
  //     id: 16,
  //     title: "Careful",
  //     category: "Comedy",
  //     image: "https://cdn.pixabay.com/photo/2016/05/11/12/16/smiley-1385615_1280.jpg", // Car/Travel
  //     video: "https://www.youtube.com/embed/nGcB1B82TzE?si=udYc7xsCc0gBIogY"
  //   },


  //   // --- New Disney Princess Cartoon Videos ---
  //   {
  //     id: 21,
  //     title: "The Canterville Ghost",
  //     category: "Cartoon",
  //     image: "https://cdn.pixabay.com/photo/2023/11/21/20/07/ai-generated-8404168_1280.png", // Rose/Castle
  //     video: "https://www.youtube.com/embed/g0uCU8mvmdY?si=5EZHZH8chZt-ImeR"
  //   },
  //   {
  //     id: 22,
  //     title: "Pinocchio",
  //     category: "Cartoon",
  //     image: "https://cdn.pixabay.com/photo/2025/01/05/09/39/ai-generated-9311688_1280.jpg", // Ocean/Shine
  //     video: "https://www.youtube.com/embed/CT0p4_ElBaw?si=zMoApRn1fZS4JGOW"
  //   },
  //   {
  //     id: 23,
  //     title: "Rapunzel's Tower",
  //     category: "Cartoon",
  //     image: "https://plus.unsplash.com/premium_photo-1746601855019-963232d70941", // Tall Tower
  //     video: "https://www.youtube.com/embed/BuKfQG4iZCg?si=0L5Yq81Sye6Uxk6J"
  //   },
  //   {
  //     id: 24,
  //     title: "The Stolen Princess",
  //     category: "Cartoon",
  //     image: "https://plus.unsplash.com/premium_photo-1694581983881-e11983650e26",
  //     video: "https://www.youtube.com/embed/kmrULc5t0jE?si=ZAYu5A6Qfr4oqN-0"
  //   }
  // ];
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
          {filteredVideos.map((video,index) => (
            <div key={index} className="relative group rounded-xl overflow-hidden shadow-lg">
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