import React, { useState } from 'react'
import Navbar from './components/Navbar'
import PostsList from './components/PostsList'
import Modal from './components/Modal'

export default function App() {
  let [showModal,setShowModal] = useState(false);
  let [posts,setPosts] = useState([
    {
      id: 1,
      title: 'First post'
    },
    {
      id: 2,
      title: 'Second post'
    },
    {
      id: 3,
      title: 'Third post'
    }
  ])
  return (
    <>
      <Navbar setShowModal = {setShowModal} />
      <PostsList posts={posts}/>
      {showModal && <Modal danger>
        {/* modal content */}
        <h1>Zoom class is available now. </h1>
        <p>Feel free to <a href="">join</a> here</p>
        <button onClick={()=>setShowModal(false)}>close</button>
      </Modal>}
    </>
  )
}

