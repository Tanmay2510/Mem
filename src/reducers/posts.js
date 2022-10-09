// a reducer is a f(x), this accepts the state and also it accepts the actions
//based on the action type "CREATE" then do some logic here 
export default (posts = [],action) =>{
    //in reducers the state(posts) should be equal to something
    switch (action.type) {
        case 'FETCH_ALL':        //FOR FETCHING ALL THE POST
            return action.payload; //our actual posts
        case 'CREATE':
            return posts;
        default:
            return posts;
    }
}