import React,{useState} from 'react'
import mStyles from './Style.js'
import {TextField,Button,Typography,Paper} from "@mui/material"; 
import Filebase from "react-file-base64";
import {useDispatch} from "react-redux";
import { createPost } from '../../actions/posts.js';
function Form() {
  const classes = mStyles();
  const dispatch = useDispatch();
  const [postdata,setpostdata]=useState({creator:'',title:'',message:'',tags:'',selectedfile:''})
  const handlesub = (e) =>{
    e.preventDefault();
    dispatch(createPost(postdata))

  }
  const clear = () =>{
    
  }
  //this means in every textfield if we do the same thing but we only change the last prop
  //all the data is going to be persist while changing only the specific property
  //of that specific text field
  // onChange={(e)=>setpostdata({...postdata,creator:e.target.value})}

  return (
    <Paper className={classes.paper}>
    <form onSubmit={handlesub} autoComplete="off" className={` ${classes.root}  ${classes.form}`} noValidate>
      <Typography variant="h6">Share your memories</Typography>
      <TextField
      name="Creator"
      variant="outlined"
      label="Creator"
      fullWidth
      value={postdata.creator}
      onChange={(e)=>setpostdata({...postdata,creator:e.target.value})}
      />
      <TextField
      name="title"
      variant="outlined"
      label="title"
      fullWidth
      value={postdata.title}
      onChange={(e)=>setpostdata({...postdata,title:e.target.value})}
      />
      <TextField
      name="message"
      variant="outlined"
      label="message"
      fullWidth
      value={postdata.message}
      onChange={(e)=>setpostdata({...postdata,message:e.target.value})}
      />
      <TextField
      name="tags"
      variant="outlined"
      label="tags"
      fullWidth 
      value={postdata.tags}
      onChange={(e)=>setpostdata({...postdata,tags:e.target.value})}
      />
      <div className={classes.fileInput}>
          <Filebase
          type="file"
          multiple={false}
          //selected file: to the base 64 you are receiving from there
          onDone={({base64}) => setpostdata({...postdata,selectedFile:base64})}
          />
          
      </div>
      <Button 
      className={classes.buttonSubmit}
      sx={{
        margin:1
      }}
      variant="contained" color="primary" size="large"
      type="submit" fullWidth>Submit
      </Button>
      <Button className={classes.buttonSubmit} 
      onClick={clear}
      sx={{
        margin:1
      }}
      variant="contained"
       color="secondary" 
       size="large"
      type="submit" fullWidth>Clear
      </Button>
    </form>
    </Paper>

  )
}

export default Form