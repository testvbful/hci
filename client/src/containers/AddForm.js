import React, { Component } from 'react';
import { FormGroup, FormControl, ControlLabel, HelpBlock, Button } from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addAnimal } from '../redux/actions';

class AddForm extends Component {

    constructor(props) {
        super(props);

        this.state = {
            name: '',
            azil: '',
            type: '',
            breed: '',
            age: '',
            gender: '',
            image: '',
            description: ''
        }

        this.onChange = this.onChange.bind(this);
    }

    onChange(event) {
        var name = event.target.id;
        this.setState({ [name]: event.target.value });
    } 

    handleSubmit = (e) => {
        e.preventDefault();
        var animal = {
            name: this.state.name,
            location: {
                name: this.state.azil
            },
            type: this.state.type,
            breed: this.state.breed,
            age: this.state.age,
            gender: this.state.gender,
            image: this.state.image,
            description: this.state.description
        }
        this.props.showAddForm(false);
        this.props.actions.addAnimal(animal);

        fetch('/newAnimal',{ //post zahtjev za server
            method: 'POST',
            body: JSON.stringify({
              data: animal
            }),
            headers : { 
                'Content-Type': 'application/json',
                'Accept': 'application/json'
               }
          })
          .then(function(response){
            return response.json()
          }).then(function(body){
            console.log(body);
          });
    }

    render() {
        return (
            <div className="add-animal">
                <form className="add-animal__form">
                    <h2 className="add-animal__form__heading">Add new animal</h2>
                    <hr />
                    <FieldGroup 
                        id="name"
                        type="text"
                        label="Name"
                        placeholder="Animal name"
                        onChange = {this.onChange}
                    />
                    <FieldGroup 
                        id="azil"
                        type="text"
                        label="Azil"
                        placeholder="Name of azil"
                        onChange = {this.onChange}
                    />
                    <div className="add-animal__form__age-gender-type-breed">
                        <FieldGroup 
                            id="age"
                            type="number"
                            label="Age"
                            placeholder="12"
                            customClass="add-animal__form__age-gender-type-breed__age"
                            onChange = {this.onChange}
                        />
                        <FormGroup controlId="gender" className="add-animal__form__age-gender-type-breed__gender" onChange = {this.onChange}>
                            <ControlLabel>Gender</ControlLabel>
                            <FormControl componentClass="select" placeholder="gender">
                                <option value="Female">Female</option>
                                <option value="Male">Male</option>
                            </FormControl>
                        </FormGroup>
                        <FormGroup controlId="type" className="add-animal__form__age-gender-type-breed__type" onChange = {this.onChange}>
                            <ControlLabel>Type</ControlLabel>
                            <FormControl componentClass="select" placeholder="type">
                                <option value="Dog">Dog</option>
                                <option value="Cat">Cat</option>
                            </FormControl>
                        </FormGroup>
                        <FieldGroup 
                            id="breed"
                            type="text"
                            label="Breed"
                            placeholder="Breed of animal"
                            customClass="add-animal__form__age-gender-type-breed__breed"
                            onChange = {this.onChange}
                        />
                    </div>
                    <FieldGroup 
                        id="image"
                        type="text"
                        label="Image URL"
                        placeholder="Enter image URL"
                        onChange = {this.onChange}
                    />
                    <FormGroup controlId="description" onChange={this.onChange} className="add-animal__form__description">
                        <ControlLabel>Description</ControlLabel>
                        <FormControl componentClass="textarea" placeholder="Say something about your animal..."/>
                    </FormGroup>
                    <div className="add-animal__form__buttons">
                        <Button type="submit" bsStyle="primary" className="add-animal__form__buttons__submit" onClick={(e) => this.handleSubmit(e)}>Submit</Button>
                        <Button type="reset" className="add-animal__form__buttons__cancel" onClick={this.props.cancel}>Cancel and discard changes</Button>
                    </div>
                    <FontAwesome name="times" className="add-animal__form__close" onClick={this.props.cancel}/>
                </form>
            </div>
        );
    }
}

function FieldGroup({ id, label, help, customClass, ...props }) {
    return (
      <FormGroup controlId={id} className={customClass}>
        <ControlLabel>{label}</ControlLabel>
        <FormControl {...props} />
        {help && <HelpBlock>{help}</HelpBlock>}
      </FormGroup>
    );
}

function mapStateToProps(state) {
    return { };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(
        {
            addAnimal
        },
        dispatch
        )
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(AddForm);