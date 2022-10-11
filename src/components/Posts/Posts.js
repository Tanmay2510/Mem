import React from 'react'
import Post from './Post/Post.js'
import mStyles from './Style.js'
import {useSelector} from 'react-redux';
import { Grid , CircularProgress } from '@mui/material';



//how do we retrieve the data from within our components 
//inside here we're going to somehow fetch the data from global redux store:USE SELECTORS

function Posts({settheid}) {
  const posts = useSelector((state) => state.posts);  //fetching all the pos
  
  // const posts = useSelector((state)=>{
  //   //we are going to have all global redux store 
  //   state.posts 

  // });
  const  classes = mStyles();
  console.log(posts)
  return (
    // ! 0 = 0-false
    !posts.length ? <CircularProgress /> :(
      <Grid className={classes.mainContainer} container   //grid of type container
      align-item="stretch" spacing={3}>
      {
        //loop over the post
        posts.map((post)=>{
          console.log(post)
          return(

            //return grid of type item
            <Grid item key={post._id} xs={12} sm={6}>
              <Post 
                p={post}
                settheid={settheid}
              />
            </Grid>
          )


        })
      }

      </Grid>
    )    
  )
}

export default Posts