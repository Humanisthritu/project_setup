const initialState = 0;

const changeNumber = (state=initialState, action: any) => {
    switch(action.type) {
        case 'INCREMENT' : return state + 1;
        case 'DECREMENT' : return state - 1;
        case 'INCREMENTVAL' : return state + action.payload;
        case 'DECREMENTVAL' : return state - action.payload;
        default: return state
    }
}

export default changeNumber;

