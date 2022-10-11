// a reducer is a f(x), this accepts the state and also it accepts the actions
//based on the action type "CREATE" then do some logic here 

//4
export default (posts = [],action) =>{
    console.log(action)
    //in reducers the state(posts) should be equal to something
    switch (action.type) {
        case 'FETCH_ALL':        //FOR FETCHING ALL THE POST
        // console.log(action.payload)  //all the data w/PD
            return action.payload; //our actual posts
        case 'CREATE':
            // console.log(action.payload) //new data
            return [...posts,action.payload];
        default:
            return posts;
    }
}