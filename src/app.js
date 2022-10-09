import React , {useEffect}from 'react';
import { Container,AppBar,Typography,Grow,Grid } from '@mui/material';
import memories from "./images/memories.png"
import Posts from './components/Posts/Posts.js'
import Form from './components/Form/Form.js'
import mStyles from './styles.js'
import {getPosts} from './actions/posts' //to create an action
import {useDispatch} from 'react-redux';  //to dispatch an action
const App = () =>{
  const classes = mStyles();
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(getPosts());  //successful dispatch 
  },[dispatch])
    return(
      <Container maxWidth="lg">
      <AppBar  className={classes.appBar}  color="inherit">
        <Typography className={classes.heading} variant="h2" align="center">Memories</Typography>
        <img className={classes.image} src={memories} alt="icon" height="60" />
      </AppBar>
      <Grow in>
        <Container>
          <Grid container justify="space-between" alignItems="stretch" spacing={3}>
            <Grid item xs={12} sm={7}>
              <Posts  />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
    )
}
export default App;