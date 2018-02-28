import { FILTER_ANIMALS, GET_FILTERED_ANIMALS, GET_ALL_ANIMALS, CLICKED_ANIMAL, RESET_FILTER, DELETE_ANIMAL, ADD_ANIMAL } from '../actions';

const initialState = {
    filteredAnimals: [],
    filters: {
        age: 'Animal age',
        city: 'Select city',
        azil: 'Select azil',
        type: 'Select type',
        breed: 'Select breed',
        gender: 'Gender'
    },
    clickedAnimal: {},
    type_breed: [
        { type: 'Select type', breed: ['Select breed'] },
        { type: 'Dog', breed: ['Labrador', 'Maltezer', 'Mops', 'Maltezer'] },
        { type: 'Cat', breed: ['Perzijska', 'Divlja']}
    ]
}

function resetFilter(state, action) {
    return {
        ...state,
        filteredAnimals: [],
        filters: {
            age: 'Animal age',
            city: 'Select city',
            azil: 'Select azil',
            type: 'Select type',
            breed: 'Select breed',
            gender: 'Gender'
        },
        clickedAnimal: {}
    }
}

function filterAnimals (state, action) {
    var name = action.id;
    return {
        ...state, 
        filters: {
            ...state.filters,
            [name]: action.payload
        }
    }
}

function getAllAnimals (state, action) {
    return {
        ...state,
        filteredAnimals: action.payload
    }
}

function getFilteredAnimals (state, action) {
    return {
        ...state,
        filteredAnimals: action.payload,
        home: false
    }
}

function clickedAnimal (state, action) {
    return {
        ...state, 
        clickedAnimal: action.payload
    }
}

function deleteAnimal (state, action){
    return {
        ...state,
        filteredAnimals: state.filteredAnimals.filter((animal) => animal._id !== action.payload) //id u _id
    }
}

function addAnimal (state, action) {
    return {
        ...state,
        filteredAnimals: [...state.filteredAnimals, action.payload]

    }
}

export default function reducer(state = initialState, action) {
    switch(action.type) {
        case RESET_FILTER:
            return resetFilter(state, action);
        
        case FILTER_ANIMALS:
            return filterAnimals(state, action);

        case GET_FILTERED_ANIMALS:
            return getFilteredAnimals(state, action);

        case CLICKED_ANIMAL:
            return clickedAnimal(state, action);

        case GET_ALL_ANIMALS:
            return getAllAnimals(state, action);

        case DELETE_ANIMAL: 
            return deleteAnimal(state, action);

        case ADD_ANIMAL:
            return addAnimal(state, action);
        
        default: 
            return state;
    }
}