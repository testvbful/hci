import React, { Component } from 'react';
import { connect } from 'react-redux';

import FontAwesome from 'react-fontawesome';
import MyMapComponent from '../components/GoogleMaps.js';


class MoreAboutAzil extends Component {

    delayedShowMarker = () => {
        setTimeout(() => {
          this.setState({ isMarkerShown: true })
        }, 3000)
      }

    _getRatings() {
        const ratings = this.props.azil.ratings;
        const inputs = [];

        for(var i=0; i<ratings; i++) {
            inputs.push(<FontAwesome name="star" key={i} className="fa-2x stars-full" />);
        }

        return inputs;
        
    }

    _getEmptyRatings() {
        const ratings = this.props.azil.ratings;
        var inputs = [];

        var empty = 5 - ratings;

        for(var i=0; i<empty; i++) {
            inputs.push(<FontAwesome name="star-o" key={i} className="fa-2x stars-empty"/>);
        } 

        return inputs;
    }

    render() {

        const ratings = this._getRatings();
        const emptyRatings = this._getEmptyRatings();

        const azilImage = {
            backgroundImage: "url(" + require('../images/' + this.props.azil.imageUrl + '.jpg') + ")",
            overflow: "hidden"
        };
        
        return (
            <section className="azil-section">
                <div className="azil-section__container">
                    <div className="azil-section__container__left" style={azilImage}>
                        <div className="azil-section__container__left__overlay"></div>
                    </div>            
                    <div className="azil-section__container__right">
                        <div className="azil-section__container__right__name-location">
                            <h2>{this.props.azil.name}</h2>
                            <label>{this.props.azil.location}</label>
                        </div>
                        <p className="azil-section__container__right__description">
                            {this.props.azil.description}
                        </p>
                        <div className="azil-section__container__right__details">
                            <div className="azil-section__container__right__details__ratings">
                                {ratings}{emptyRatings}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="azil-section__google-maps">
                    <div id="map">
                    <MyMapComponent
                        googleMapURL="https://maps.googleapis.com/maps/api/js?libraries=places&key=AIzaSyAbv8qXGdO-7Wskn0UYT9d44OmZLx74wjI"
                        loadingElement={<div style={{ height: `100%` }} />}
                        containerElement={<div style={{ height: `400px` }} />}
                        mapElement={<div style={{ height: `100%` }} />}
                        latitude={this.props.azil.latitude}
                        longitude={this.props.azil.longitude}
                        name={this.props.azil.name}
                        address={this.props.azil.location}
                    />
                    </div>
                </div>
            </section>
        );
    }
}

function mapStateToProps(state) {
    return {
        azil: state.filter.clickedAnimal.location
    };
}

export default connect (mapStateToProps)(MoreAboutAzil);