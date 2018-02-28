import React from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker, InfoWindow } from "react-google-maps";

const MyMapComponent = withScriptjs(withGoogleMap((props) => {

    return (
        <GoogleMap
            defaultZoom={13}
            defaultCenter={{ lat: props.latitude, lng: props.longitude }}
        >
             <Marker
                position={{ lat: props.latitude, lng: props.longitude }}
                onClick={props.onToggleOpen}
            >
            <InfoWindow>
                <div>
                {" "}
                {props.name}, {props.address}
                </div>
            </InfoWindow>
            </Marker>
        </GoogleMap>
    )
}))

export default MyMapComponent;


