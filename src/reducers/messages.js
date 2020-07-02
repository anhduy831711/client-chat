import * as ActionType from "../variables/typeAction";
var initialState = ["1231231", "kjhsadkjahsda", "kjdashkjsahdkajsd", "sajhdghjas","asdasdasd"]

export default (state = initialState, action) => {
    switch (action.type) {
        case ActionType.ADD_MESSAGE:
            state.push(action.message);
            return [...state];
        default:
            return state;
    }
}

