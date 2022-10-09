import React from 'react'
import Post from './Post/Post.js'
import mStyles from './Style.js'
import {useSelector} from 'react-redux';

//how do we retrieve the data from within our components 
//inside here we're going to somehow fetch the data from global redux store:USE SELECTORS

function Posts() {
  const post = useSelector((state)=>{
    //we are going to have all global redux store 
    state.posts 
  });
  const classes = mStyles();

  return (
<>
    <h1>
    Posts
    </h1>
    <Post />
    <Post />
</>
  )
}

export default Posts