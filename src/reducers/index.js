import { combineReducers } from "redux";
import posts from "./posts.js";
export default combineReducers({
    // posts : posts,   since key and val are the same keep the first one only
    posts,
      //in here we can use all of the individual reducers you have
})