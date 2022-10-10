import axios from 'axios';

const url = 'http://localhost:5000/post';

export const fpost = ()=>axios.get(url);

export const cpost = (newPost)=>axios.post(url,newPost)



//1