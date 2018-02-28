import { GET_ANIMALS, HOME_UNMOUNTED, SHOW_FORM } from '../actions';

const initialState = {
    animals: [],
    home: false,
    form: false
}

function getAnimals (state, action) {
    return {
        ...state, 
        animals: action.payload
    }
}

function homeUnmounted (state, action) {
    return {
        ...state,
        home: false
    }
}

function showForm (state, action){
    return {
        ...state,
        form: true
    }
}

export default function reducer(state = initialState, action) {
    switch(action.type) {
        case GET_ANIMALS:
            return getAnimals(state, action);
        
        case HOME_UNMOUNTED:
            return homeUnmounted(state, action);

        case SHOW_FORM:
            return showForm(state, action);

        default:
            return state;
    }
}

