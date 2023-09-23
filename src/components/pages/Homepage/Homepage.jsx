import React from "react";
import "./homePage.css";
import HomeHeader from "./HomeComponents/HomeHeader.jsx";
import HomeTop from "./HomeComponents/HomeTop.jsx";
import HomeCard from "./HomeComponents/HomeCard.jsx";
import Footer from "../footer.jsx";
import data from "./movieData.js";

const Homepage = () => {

  const cards = data.map(card => {
    return (
      <HomeCard
        img={card.coverImg}
        rating={card.stats.rating}
        review={card.stats.reviewCount}
        title={card.title}
        price={card.price}
      />
    )
  })

  return (
    <div>
      <HomeHeader />
      <div className="solarHomeImageContainer">
        <img src="https://media.giphy.com/media/Vf9VTiNQJXNLbFL3QL/giphy-downsized-large.gif" alt="solar pannels"/>
      </div>
      <HomeTop name="Solar Graph"/>
      <p>Solar Graphs go here</p>
      <HomeTop name="Solar Metric"/>
      <p>Solar Metrics go here</p>
      <Footer />
    </div>
  );
};

export default Homepage;
