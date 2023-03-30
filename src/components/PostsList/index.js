import React from 'react';
import './index.css';
import styles from './single_posts.module.css'

export default function PostsList({posts}) {
  console.log(posts);
  return (
    <div className='postsList container'>
      {
        posts.map(post =>(
          <div className={`single-post ${styles.card}`} key={post.id} >{post.title}</div>
        ))
      }
        
    </div>
  )
}
