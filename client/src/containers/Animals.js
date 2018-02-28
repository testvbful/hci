import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getFilteredAnimals, extendedFilter } from '../redux/actions';

import Animal from './Animal';
import Filter from '../components/Filter';
import Error from '../components/Error';
import AddForm from './AddForm';


class Animals extends Component {

    constructor(props) {
        super(props);
        this.state = {
            size: 6,
            showFilter: false,
            showForm: false,
            response: ''
        }
        this.filterMore = this.filterMore.bind(this);
        this.addAnimal = this.addAnimal.bind(this);
        this.cancelAdd = this.cancelAdd.bind(this);
    }

    filterMore(event) {
        event.preventDefault();
        this.props.actions.extendedFilter(this.props.filters, this.props.animals);
    }

    createAnimal() {
        return this.props.filteredAnimals.map((animal) => {
            return (
                <Animal 
                    animal = {animal}
                    key={animal._id} 
                    id = {animal._id}
                />
            );
        })
    }

    onClick() {
        this.setState({ showFilter: !this.state.showFilter })
    }

    addAnimal() {
        this.setState({ showForm: !this.state.showForm })
    }

    cancelAdd() {
        this.setState({ showForm: false });
    }


    render() {
        var data = this.createAnimal();

        return(
            <section className="a-section" style={{marginTop: 2 + 'em'}}> 
                {this.props.filteredAnimals.length > 0 ? 
                    <input type="button" className={ 'a-section__filter-more ' + (this.state.showFilter ? 'a-section__filter-more__open' : 'a-section__filter-more__closed') }  
                                         value="Filter" 
                                         onClick={() => this.onClick()} /> 
                    : null}
                {(this.props.filteredAnimals.length > 0  && this.state.showFilter) ? 
                    <Filter handleFilter={this.filterMore} city={this.props.filters.city}/> 
                    : null}
                <div className="a-section__animals">
                    {this.props.filteredAnimals.length > 0 ? data : <Error />}
                </div>
                {this.props.filteredAnimals.length > 0 ? 
                    <div className="a-section__add"  >
                        <img src={require('../images/plus-pink.png')} alt="add" onClick={this.addAnimal}/>
                    </div>
                : null}

                {this.state.showForm ? <AddForm cancel={this.cancelAdd} showAddForm={this.addAnimal.bind(this)}/> : null}
            </section>
        );
    }
}

function mapStateToProps(state) {
    return {
        filteredAnimals: state.filter.filteredAnimals,
        filters: state.filter.filters,
        animals: state.animals.animals
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(
        {
            getFilteredAnimals,
            extendedFilter
        },
        dispatch
        )
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Animals);