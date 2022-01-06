import react from 'react';
import Post from './post/post';
import usestyles from './styles';
import { useSelector } from 'react-redux';
const Posts=()=>{
    const posts = useSelector((state)=>state.posts);
  const classes=usestyles();
    console.log(posts);
    return(
        <>
            <h1>POSTS</h1>
            <Post />
            <Post />
            
        </>
    );
}
export default Posts;