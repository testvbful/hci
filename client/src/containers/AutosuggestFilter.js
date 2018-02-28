import React, {Component} from 'react';
import Autosuggest from 'react-autosuggest';
import Data from '../JSON/suggestions.json';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { filterAnimals } from '../redux/actions';

const cities = Data.suggestions.cities;
const azili = Data.suggestions.azili;

// Teach Autosuggest how to calculate suggestions for any given input value.
const getSuggestions = (value, id) => {
    const inputValue = value.trim().toLowerCase();
    const inputLength = inputValue.length;

    if(id === 'city' ){

        return inputLength === 0 ? [] : cities.filter(info =>
            info.name.toLowerCase().slice(0, inputLength) === inputValue
        );
    }
    else {

        return inputLength === 0 ? [] : azili.filter(info =>
            info.name.toLowerCase().slice(0, inputLength) === inputValue
        );
    }

  };
  
  // When suggestion is clicked, Autosuggest needs to populate the input
  // based on the clicked suggestion. Teach Autosuggest how to calculate the
  // input value for every given suggestion.
  const getSuggestionValue = (
    
    suggestion => suggestion.name);
  
  // Use your imagination to render suggestions.
  const renderSuggestion = suggestion => (
    <div>
      {suggestion.name}
    </div>
  );


class AutosuggestFilter extends Component {

    constructor(props) {
        super(props);
        this.state = {
            value: props.value,
            suggestions: []
        }
    }

    // Autosuggest will call this function every time you need to update suggestions.
    // You already implemented this logic above, so just use it.
    onSuggestionsFetchRequested = ({ value }) => {
        this.setState({
            suggestions: getSuggestions(value, this.props.name)
        });
    };

    onSuggestionSelected  = (event, { suggestionValue })=> {
        if(this.props.name === 'city'){
            this.props.actions.filterAnimals(suggestionValue, this.props.name);
        }
        else {
            this.props.actions.filterAnimals(suggestionValue, this.props.name);
        }
      }

    // Autosuggest will call this function every time you need to clear suggestions.
    onSuggestionsClearRequested = () => {
        this.setState({
            suggestions: []
        });
    };

    onChange = (event, { newValue }) => {
        this.setState({
            value: newValue
        });
    };

    render() {

        const { name, placeholder } = this.props;
        const { value, suggestions } = this.state;
        const inputProps = {
          placeholder,
          value,
          onChange: this.onChange
        };

        return(
            <Autosuggest
                id={name}
                suggestions={suggestions}
                onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
                onSuggestionsClearRequested={this.onSuggestionsClearRequested}
                onSuggestionSelected = {this.onSuggestionSelected}
                getSuggestionValue={getSuggestionValue}
                renderSuggestion={renderSuggestion}
                inputProps={inputProps}
            />
        )
    }
}

function mapStateToProps(state) {
    return {
        filters: state.filter.filters
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

export default connect(mapStateToProps, mapDispatchToProps)(AutosuggestFilter);
