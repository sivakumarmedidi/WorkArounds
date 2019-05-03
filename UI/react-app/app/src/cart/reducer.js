import { ADD_ITEM } from "./actionsTypes";
const defaultCartState = {
    items: []
}
let id = 0;

const cartReducer = (state=defaultCartState, action) => {
    switch(action.type) {
        case ADD_ITEM: {
            const items = [...state.items, {id: id++, ...action.item}];
            return {...state, items};
        }
        default: {
            return state;
        }
    }
};

export default cartReducer;