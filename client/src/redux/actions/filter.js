export const FILTER_ANIMALS = 'FILTER_ANIMALS';
export const GET_FILTERED_ANIMALS = 'GET_FILTERED_ANIMALS';
export const GET_ALL_ANIMALS = 'GET_ALL_ANIMALS';
export const CLICKED_ANIMAL = 'CLICKED_ANIMAL';
export const RESET_FILTER = 'RESET_FILTER';
export const DELETE_ANIMAL = 'DELETE_ANIMAL';
export const ADD_ANIMAL = 'ADD_ANIMAL';


export const filterAnimals = (payload, id) => ({
    type: FILTER_ANIMALS,
    payload, 
    id
});

export function getFilteredAnimals(filters, animals){
    console.log("filter",animals);
    console.log("filter1",filters.age);
    console.log("filter2",filters.city);
    console.log("filter3",filters.type);
    var filteredAnimals = animals.filter(animal => animal.ageRange === filters.age && animal.location.city === filters.city && animal.type === filters.type)
    return {
        type: GET_FILTERED_ANIMALS,
        payload: filteredAnimals
    }
}

export const getAllAnimals = (payload) => ({
    type: GET_ALL_ANIMALS,
    payload
});

export const clickedAnimal = (payload) => ({
    type: CLICKED_ANIMAL,
    payload
});

export function extendedFilter (filters, animals) {
    var filteredAnimals1 = animals.filter(animal => 
        animal.ageRange === filters.age && animal.location.city === filters.city && animal.type === filters.type && animal.gender === filters.gender && animal.breed === filters.breed && animal.location.name === filters.azil
    )
    return {
        type: GET_FILTERED_ANIMALS,
        payload: filteredAnimals1
    }
}

export const resetFilter = (payload, id) => ({
    type: RESET_FILTER,
    payload
});

export const deleteAnimal = (payload) => ({
    type: DELETE_ANIMAL,
    payload
});

export const addAnimal = (payload) => ({
    type: ADD_ANIMAL,
    payload
});