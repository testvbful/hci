import React from 'react';
import SelectFilter from '../containers/SelectFilter';
import AutosuggestFilter from '../containers/AutosuggestFilter';

const Filter = (props) => {

    return(
        <div className="filters">
            <form className="filters__form">
                <div className="filters__form__inputs">
                    <div className="filters__form__inputs__top-inputs">
                        <AutosuggestFilter name="city" placeholder="Select city" value={props.city}/>
                        <AutosuggestFilter name="azil" placeholder="Select azil" value=''/>                          
                    </div>
                    <SelectFilter />
                </div>
                <div className="filters__form__button">
                    <input type="submit" value="Filter animals" className="filters__form__button__filter" name="submit-filters" onClick={props.handleFilter}/>
                </div>
            </form>
        </div>
    );
}

export default Filter;