import React from 'react';
import './index.css'

export default function Navbar({setShowModal}) {
  return (
    <nav className='navbar'>
      <div className='container'>
        <h1>Logo</h1>
        <ul>
          <li>Home</li>
          <li>Posts</li>
          <button onClick={()=>setShowModal(true)}>Sign In</button>
        </ul>
      </div>
    </nav>
  )
}
