import { useState } from 'react'
import { Routes, Route } from "react-router-dom"
import './App.css'
import Home from "../src/components/home/home"
import Navbar from './components/navbar/navbar'
import Footer from "./components/footer/footer"
import Categories from "./components/categories/categories"
import MyList from "./components/myList/myList"
import Trending from "./components/trending/trending"
import  Contact  from './components/contact/contact'
import { useSelector } from 'react-redux'
import Searched from './components/searched/searched'

function App() {
const search = useSelector((state)=>state.searched.value)


  return (
    <>
      <Navbar />
        {search ? (
        <Searched />
      ) : (
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path="/trending" element={<Trending />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/my-list" element={<MyList />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      )}
      <Footer />
    </>
  )
}

export default App
