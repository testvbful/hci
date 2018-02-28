import React from 'react';

const HomeInfo = (props) => {
    return(
        <section>
            <div className="h-info__title">
                How to find your ideal pet?
            </div>
            <div className="h-info__items">
                <div className="h-info__items__item">
                    <i className="fa fa-search fa-3x" aria-hidden="true"></i>
                    <div className="h-info__items__item__side-text">
                        <h3>Explore</h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eget urna nec lorem venenatis rhoncus. 
                            Nunc sed tortor quis leo ultrices blandit. Praesent consectetur venenatis tortor, nec ullamcorper orci auctor a.  
                        </p>
                    </div>
                </div>

                <div className="h-info__items__item">
                    <i className="fa fa-heart-o fa-3x" aria-hidden="true"></i>
                    <div className="h-info__items__item__side-text">
                        <h3>Fall in love</h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eget urna nec lorem venenatis rhoncus. 
                            Nunc sed tortor quis leo ultrices blandit. Praesent consectetur venenatis tortor, nec ullamcorper orci auctor a. 
                        </p>
                    </div>
                </div>

                <div className="h-info__items__item">
                    <i className="fa fa-map-marker fa-3x" aria-hidden="true"></i>
                    <div className="h-info__items__item__side-text">
                        <h3>Visit location</h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eget urna nec lorem venenatis rhoncus. 
                            Nunc sed tortor quis leo ultrices blandit. Praesent consectetur venenatis tortor, nec ullamcorper orci auctor a. 
                        </p>
                    </div>
                </div>

            </div>
        </section>
    );
}

export default HomeInfo;