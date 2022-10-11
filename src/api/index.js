import axios from 'axios';

const url = 'http://localhost:5000/post';

export const fpost = ()=>axios.get(url);

export const cpost = (newPost)=>axios.post(url,newPost)

export const upost = (id,updatedPost) => axios.patch(`${url}/${id}`,updatedPost)

//1