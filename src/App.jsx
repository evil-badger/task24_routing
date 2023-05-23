import './App.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import HomePage from './components/pages/HomePage';
import Layout from './components/Layout/Layout';
import Users from './components/pages/UserPage';
import { Component } from 'react';
import UserAlbum from './components/pages/UserAlbum';
import UserPhotos from './components/pages/UserPhotos';
import About from './components/pages/About';

const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      {
        path:"/home",
        Component: HomePage,
      },
      {
        path:"/users",
        Component: () => <Users/>,
      },
      {
        path:"/userAlbum",
        Component: ()=><UserAlbum userId={1}/>,
      },
      {
        path:"/userAlbumPhotos",
        Component: ()=><UserPhotos albumId={1}/>,
      },
      {
        path:"/about",
        Component: About,
      },
     
    ],
  },
]);

function App() {
  return (
    <>  <RouterProvider router={router} /></>
  )
}

export default App
