import React from 'react'
import mStyles from './styles.js'
import {Card,CardActions,CardContent,CardMedia,Button,Typography} from '@mui/material/';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import DeleteIcon from '@mui/icons-material/Delete';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import moment from "moment"
function Post({p,settheid}) {
  const classes = mStyles();
  console.log(p)
  return (
    <Card className={classes.card}>
  <CardMedia className ={classes.media} image={p.selectedFile} title={p.title} /> 

        <div className={classes.overlay}>
        <Typography variant="h6">{p.creator}</Typography>
        <Typography variant="body2">{moment(p.createdAtProp).fromNow()}</Typography>
        </div>
        <div className={classes.overlay2}>
            <Button style={{color:"white"}} size="small"
            onClick={()=>{settheid(p._id)}}>
            <MoreHorizIcon fontSize="default" ></MoreHorizIcon>
            </Button>
        </div>
        <div className={classes.details}>
        <Typography variant="body2" color="textSecondary">{p.tags.map((tag)=>{
          return(

          `#${tag}`
          )

        })}</Typography>
        </div>
        <Typography className={classes.title} variant="h5" gutterBottom>{
          p.title
          }</Typography>
        <CardContent>
        <Typography variant="h5" gutterBottom>{
        p.message
        }</Typography>
        </CardContent>
        <CardActions className={classes.cardActions}>
          <Button size="small" color="primary"
          onClick={()=>{}}>
            <ThumbUpAltIcon fontSize="small"></ThumbUpAltIcon>  
            Like
            {p.likeCound}        
          </Button>
          <Button size="small" color="primary"
          onClick={()=>{}}>
            <DeleteIcon fontSize="small"></DeleteIcon>  
              Delete
              </Button>
        </CardActions>
    </Card>
  )
}

export default Post