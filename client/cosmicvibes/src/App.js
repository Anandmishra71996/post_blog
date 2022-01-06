import './App.css';
import{Container,AppBar,Typography,Grow,Grid} from '@material-ui/core';
import flower from './images/flower.jpg';
import Posts from './components/Posts/posts';
import {useDispatch} from 'react-redux'
import Form from './components/Form/Form';
import usestyles from './styles';
import { useEffect } from 'react';
import {getPosts} from './actions/posts';
function App() {
  const classes=usestyles();
const dispatch= useDispatch();
useEffect(()=>{
  dispatch(getPosts());
},[dispatch]);
  return (
    <>
   <Container maxidth="lg">
     <AppBar className={classes.appBar} position="static" color="inherit">
    <Typography className={classes.heading} variant="h2" align="center">Memories  </Typography>
    <img className={classes.image} src={flower} alt='flower img' height="60"></img>
     </AppBar>
     <Grow in>
       <Container>
         <Grid container justify="space-between" alignItems="strech" spacing={3}>
          <Grid item xs={12} sm={7}>
            <Posts></Posts>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Form></Form>
          </Grid>
         </Grid>
       </Container>
     </Grow>
   </Container>
   </>
  );
}

export default App;
