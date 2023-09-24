import React from "react";
import "./homePage.css";
import HomeHeader from "./HomeComponents/HomeHeader.jsx";
import HomeTop from "./HomeComponents/HomeTop.jsx";
import HomeCard from "./HomeComponents/HomeCard.jsx";
import Footer from "../footer.jsx";
import GraphCard from "./HomeComponents/GraphCard.jsx";

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
      <GraphCard img="https://drive.google.com/file/d/194RoYd2VoV5_yExB4nHl6SsMHVohJ1om/view?usp=sharing"/>
      <HomeTop name="Solar Metric"/>
      <p>Solar Metrics go here</p>
      <Footer />
    </div>
  );
};

export default Homepage;
