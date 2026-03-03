import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: [
    // --- Existing Videos (History & Sci-Fi) ---
    {
      id: Date.now(),
      title: "History of Iran",
      category: "History",
      image: "https://images.unsplash.com/photo-1743832370776-039ea449ac7c",
      video: "https://www.youtube.com/embed/MGcNoVdv-ak?si=3zew18TraNfRn6Zl",
      views: "5000"
    },
    {
      id: Date.now(),
      title: "History of Japan",
      category: "History",
      image: "https://images.unsplash.com/photo-1738699754898-7b40d755532e",
      video: "https://www.youtube.com/embed/sM34lfjEos4?si=b0mF0O1jCTc3HYmT",
      views: "1000"
    },
    {
      id: Date.now(),
      title: "History of Islam",
      category: "History",
      image: "https://images.unsplash.com/photo-1612019750679-55aaf2e0d1bb",
      video: "https://www.youtube.com/embed/FftbQo4p5b4?si=I3UW-Xbcz3PTmZYZ",
      views: "3000"
    },
    {
      id: Date.now(),
      title: "History of Mughals",
      category: "History",
      image: "https://plus.unsplash.com/premium_photo-1697730312382-2305f166cdc6",
      video: "https://www.youtube.com/embed/oWjcflqRP9w?si=Kruvg7hB9KNiXUgc",
      views: "1500"
    },
    {
      id: Date.now(),
      title: "Burmuda Triangle",
      category: "Sci-Fi",
      image: "https://plus.unsplash.com/premium_photo-1669750791963-ec6f3a565fb9",
      video: "https://www.youtube.com/embed/jF9tKMJVu78?si=nFwefFpgSJiQH7IK",
      views: "500"
    },

    // --- New Scientific Videos (Sci-Fi) ---
    {
      id: Date.now(),
      title: "Black Holes Explained",
      category: "Sci-Fi",
      image: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=500&auto=format&fit=crop", // Galaxy/Space
      video: "https://www.youtube.com/embed/e-P5IFTqB98?si=o-LwMFNBKyTRnjd7",
      views: "1700"
    },
    {
      id: Date.now(),
      title: "The Future of AI",
      category: "Sci-Fi",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=500&auto=format&fit=crop", // AI/Robot
      video: "https://www.youtube.com/embed/zWM_vXdesqE?si=884EgkiUjzcxM6Gz",
      views: "2500"
    },
    {
      id: Date.now(),
      title: "Secrets of Quantum Physics",
      category: "Sci-Fi",
      image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=500&auto=format&fit=crop", // Quantum/Atom
      video: "https://www.youtube.com/embed/K5Po5R-1rgY?si=rfElYm1bSoH-eiDL",
      views: "4000"
    },

    // --- New Drama Videos ---
    {
      id: Date.now(),
      title: "Black Pearl",
      category: "Drama",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiVMg_ry9V7NQ1uxQhQ6xIoxwK2pWgfzj-dA&s",
      video: "https://www.youtube.com/embed/F9prdA1byxE?si=_bsZjeA_E9rwYWSv",
      views: "3500"

    },
    {
      id: Date.now(),
      title: "Dayan Yuregim",
      category: "Drama",
      image: "https://static.tvmaze.com/uploads/images/original_untouched/478/1196355.jpg",
      video: "https://www.youtube.com/embed/Fu3w9Xonl3I?si=TWsh0uVVHPLMFn0a",
      views: "5000"
    },
    {
      id: Date.now(),
      title: "Arafta",
      category: "Drama",
      image: "https://m.media-amazon.com/images/M/MV5BNzgyMjZhZjEtODJkMi00NzlhLWEzNTYtOGQ5YmRlM2EwNWQxXkEyXkFqcGc@._V1_.jpg",
      video: "https://www.youtube.com/embed/E8rIANH49sg?si=bfx-1damJG7Asbe0",
      views: "3300"
    },
    {
      id: Date.now(),
      title: "Love Is In The Air",
      category: "Drama",
      image: "https://i1.sndcdn.com/artworks-d7e34sMH2nhhy3s1-LzLNxA-t500x500.jpg", // Sunset/Mystery
      video: "https://www.youtube.com/embed/cNcxz4WnoDo?si=yhkH8_r-NWJgG7ZL",
      views: "6000"
    },

    // --- New Comedy Videos ---
    {
      id: Date.now(),
      title: "Bikes and Chain Snatching",
      category: "Comedy",
      image: "https://images.unsplash.com/photo-1527224857830-43a7acc85260?w=500&auto=format&fit=crop", // Microphone/Stage
      video: "https://www.youtube.com/embed/yMOtaHJxJT8?si=saVX4WJRdmbqWuba",
      views: "2900"
    },
    {
      id: Date.now(),
      title: "Unhinged Couples",
      category: "Comedy",
      image: " https://cdn.pixabay.com/photo/2020/11/23/18/18/birds-5770589_1280.jpg", // Office/Fun
      video: "https://www.youtube.com/embed/Fcy4rO9h1Tg?si=a7TdoODJj_MjYx2M",
      views: "4400"
    },
    {
      id: Date.now(),
      title: "Ambulance",
      category: "Comedy",
      image: "https://cdn.pixabay.com/photo/2020/07/13/16/18/comedy-5401247_1280.jpg", // Family/Laugh
      video: "https://www.youtube.com/embed/mbOO0Z6ryO0?si=qwD6po7BNUWXoEWS",
      views: "4400"
    },
    {
      id: Date.now(),
      title: "Careful",
      category: "Comedy",
      image: "https://cdn.pixabay.com/photo/2016/05/11/12/16/smiley-1385615_1280.jpg", // Car/Travel
      video: "https://www.youtube.com/embed/nGcB1B82TzE?si=udYc7xsCc0gBIogY",
      views: "4400"
    },


    // --- New Disney Princess Cartoon Videos ---
    {
      id: Date.now(),
      title: "The Canterville Ghost",
      category: "Cartoon",
      image: "https://cdn.pixabay.com/photo/2023/11/21/20/07/ai-generated-8404168_1280.png", // Rose/Castle
      video: "https://www.youtube.com/embed/g0uCU8mvmdY?si=5EZHZH8chZt-ImeR",
      views: "3900"
    },
    {
      id: Date.now(),
      title: "Pinocchio",
      category: "Cartoon",
      image: "https://cdn.pixabay.com/photo/2025/01/05/09/39/ai-generated-9311688_1280.jpg", // Ocean/Shine
      video: "https://www.youtube.com/embed/CT0p4_ElBaw?si=zMoApRn1fZS4JGOW",
      views: "5500"
    },
    {
      id: Date.now(),
      title: "Rapunzel's Tower",
      category: "Cartoon",
      image: "https://plus.unsplash.com/premium_photo-1746601855019-963232d70941", // Tall Tower
      video: "https://www.youtube.com/embed/BuKfQG4iZCg?si=0L5Yq81Sye6Uxk6J",
      views: "7000"
    },
    {
      id: Date.now(),
      title: "The Stolen Princess",
      category: "Cartoon",
      image: "https://plus.unsplash.com/premium_photo-1694581983881-e11983650e26",
      video: "https://www.youtube.com/embed/kmrULc5t0jE?si=ZAYu5A6Qfr4oqN-0",
      views: "6600"
    }
  ],
}

export const dataBaseSlice = createSlice({
  name: 'dataBase',
  initialState,
  reducers: {

  },
})

// Action creators are generated for each case reducer function
export const { } = dataBaseSlice.actions

export default dataBaseSlice.reducer