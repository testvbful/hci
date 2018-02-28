import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { filterAnimals } from '../redux/actions';

class SelectFilter extends Component {

    constructor() {
        super();
        this.state = {
            selectedAnimal: 'Select type'
        }
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {
        this.setState({ selectedAnimal: this.props.filters.type });
    }

    handleChange(event) {
        var name = event.target.name;
        this.props.actions.filterAnimals(event.target.value, name);
        if(name === 'type')
            this.setState({ selectedAnimal: event.target.value });     
    }

    render() {
        const breed = this.props.type_breed.filter(item => item.type === this.props.filters.type);
        console.log(breed);

        return(
            <div className="filters__form__inputs__bottom-inputs">
                <select className="filters__form__inputs__bottom-inputs__type" name="type" value={this.props.filters.type} onChange={this.handleChange}>
                    {
                        this.props.type_breed.map((animalType, i) => <option key={i}>{animalType.type}</option>)
                    }
                </select>
                <select className="filters__form__inputs__bottom-inputs__breed" value={this.props.filters.breed} name="breed" onChange={this.handleChange}>
                    {
                        breed[0].breed.map((animalBreed, i) => {
                            return <option key={i} >{animalBreed}</option>
                        })
                    }
                </select>
                <div className="filters__form__inputs__bottom-inputs__age-gender">
                    <select name="age" value={this.props.filters.age} onChange={this.handleChange} className="filters__form__inputs__bottom-inputs__age-gender__age">
                        <option value="default">Animal age?</option>
                        <option value="0-2">0-2 years</option>
                        <option value="2-6">2-6 years</option>
                        <option value="6-10">6-10 years</option>
                        <option value="10+">10+ years</option>
                    </select>
                    <select value={this.props.filters.gender} name="gender" onChange={this.handleChange} className="filters__form__inputs__bottom-inputs__age-gender__gender">
                        <option value="Select gender">Gender</option>
                        <option value="Female">Female</option>
                        <option value="Male">Male</option>
                    </select>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        animals: state.filter.filteredAnimals,
        filters: state.filter.filters,
        type_breed: state.filter.type_breed
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(
        {
            filterAnimals
        },
        dispatch
        )
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(SelectFilter);