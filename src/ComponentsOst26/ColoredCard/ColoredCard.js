import React from 'react';

const ColoredCard = (props) => {

    return(
        <div className={`card ${props.className}`}>
        <div className="card-body text-center">
            <h4 className="card-sub">{props.sub}</h4>
            <h1 className="card-header">{props.main}</h1>
        </div>
        </div>
    )
}

export default ColoredCard;