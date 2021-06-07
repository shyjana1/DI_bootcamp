let initState = {
    property11: 'text text 1',
    property22: 'text text 2',
}
export const reducer = (state = initState,action = {}) => {
    switch (action.type) {
        case PROP_ONE:
            
            break;
        case PROP_TWO:
            
            break;
    
        default:
            break;

            // in redux we always return a clone of a state
            return {...state}
        }
}