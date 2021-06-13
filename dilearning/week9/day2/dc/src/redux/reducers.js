let initState = {
    movies: []
}
export const reducer = (state = initState,action = {}) => {
    switch (action.type) {
        case "INIT_MOVIE":
            return {...state, movies: action.payload}
            break;
    
        default:
            return {...state}
    }
}