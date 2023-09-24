import React from 'react';

const HomeTop = (props) => {
    return (
        <section className="home-top-container">
            <div className="home-top-text-container">
                <h2 className="movie-experience-title">{props.name}</h2>
                <p className="graphDescription">{props.desc}</p>
            </div>
        </section>
    )
}

export default HomeTop;
