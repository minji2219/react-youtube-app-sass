import React from 'react'
import { Outlet, Route, Routes } from 'react-router-dom'
import MainPage from './pages/MainPage'
import SearchedVideosPage from './pages/SearchedVideoPage'
import VideoPage from './pages/VideoPage'
import NavigationBar from './compoents/NavigationBar'
import SideBar from './compoents/SideBar'

const Layout = ()=>{
  return(
    <>
      <NavigationBar/>
      <SideBar/>
      <main>
        <Outlet/>
      </main>
    </>
  )
}
function App() {


  return (
    <>
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route index element={<MainPage/>}/>
        <Route path="/results/:input" element={<SearchedVideosPage/>}/>
        <Route path="/video/:videoId" element={<VideoPage/>}/>
      </Route>
    </Routes>
    </>
  )
}

export default App
