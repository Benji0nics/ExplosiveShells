import React from 'react';
// import blade from "../HomeImages/blade.jpg";


const GraphCard = (props) => {
    return (
        <div className="graphCard">
            <h4>{props.title}</h4>
            <a target="_blank" href="" ><img src={props.img} className="card--image"/></a>
        </div>
    )
}



export default GraphCard;
