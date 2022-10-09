import * as api from '../api';

// api.fpost()

// now we have to create actions more specifically action creators 
//Action creators are f(x) that return actions 
//action are just the object that has the type and the payload

//we are working w/async data 
//some times is gonna pass so we're gonna use redux-thunk
// redux-thunk : allow us to +nal arrow f(x)

export const getPosts = () => async(dispatch) => {
    try {
        const {data} = await api.fpost();
        //getting the response from the api n the api have an data object which 
        //we r returning from the object
        const action ={type:'FETCH_ALL',payload:data}
        dispatch(action)
    } catch (error) {
        console.log(error);
        
    }
    // const action = {type:'FETCH_ALL',payload:[]} //pl is usually the data where we store all of
    // //our post
    // dispatch(action);
}