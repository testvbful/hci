import React, {Component} from 'react';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { filterAnimals, getFilteredAnimals, resetFilter, homeUnmounted } from '../redux/actions';

import AutosuggestFilter from './AutosuggestFilter';


class HomeForm extends Component {

    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {
        window.scrollTo(0, 0);
        this.props.actions.resetFilter();
    }

    handleChange(event) {
        const name = event.target.name;
        this.props.actions.filterAnimals(event.target.value, name);      
    }

    handleSubmit(event) {
        this.props.actions.getFilteredAnimals(this.props.filters, this.props.animals);
    }
//dole povecan Cat Dog
    render() {
        return (
            <section className="h-form">
                <div className="h-form__title">
                    Find your perfect pet
                </div>
                <form className="form h-form__form">
                    <div className="h-form__form__inputs">
                        <AutosuggestFilter name='city' placeholder="Where do you live?" value=''/>
                        <select id="animal-type" name="type" className="h-form__form__inputs__type" onChange={this.handleChange}>
                            <option value="default">Animal type?</option>
                            <option value="Cat">Cat</option> 
                            <option value="Dog">Dog</option>
                            <option value="Rabbit">Rabbit</option>
                        </select>
                        <select name="age" className="h-form__form__inputs__age" onChange={this.handleChange}>
                            <option value="default">Animal age?</option>
                            <option value="0-2">0-2 years</option>
                            <option value="2-6">2-6 years</option>
                            <option value="6-10">6-10 years</option>
                            <option value="10+">10+ years</option>
                        </select>
                        <Link to="/animals"><input className="h-form__form__inputs__submit" type="submit" value="Find me" onClick={this.handleSubmit} /></Link>
                    </div>
                </form>
            </section>
        );
    }
}

function mapStateToProps(state) {
    return {
      filters: state.filter.filters,
      animals: state.animals.animals
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(
        {
            resetFilter,
            filterAnimals,
            getFilteredAnimals,
            homeUnmounted
        },
        dispatch
        )
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeForm);