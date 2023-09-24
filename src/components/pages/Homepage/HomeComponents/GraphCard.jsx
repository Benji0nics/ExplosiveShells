import React from 'react';
// import blade from "../HomeImages/blade.jpg";


const GraphCard = (props) => {
    return (
        <div className="graphCard">
            <a target="_blank" href={props.link}><img src={props.img} className="card--image"/></a>
        </div>
    )
}



export default GraphCard;
