import * as TypeAction from "./../variables/typeAction";

export const LIST_MESSAGE = () => {
    return {
        type: TypeAction.LIST_MESSAGE
    }
};

export const ADD_MESSAGE = (message) => {
    return {
        type: TypeAction.ADD_MESSAGE,
        message
    }
}