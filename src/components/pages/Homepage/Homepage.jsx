import React from "react";
import "./homePage.css";
import HomeHeader from "./HomeComponents/HomeHeader.jsx";
import HomeTop from "./HomeComponents/HomeTop.jsx";
import Footer from "../footer.jsx";
import GraphCard from "./HomeComponents/GraphCard.jsx";
import graph1 from "./HomeImages/graph1.png";
import graph2 from "./HomeImages/graph2.png";
import graph3 from "./HomeImages/graph3.png";
import graph4 from "./HomeImages/graph4.png";
import graph5 from "./HomeImages/graph5.png";
import graph6 from "./HomeImages/graph6.png";
import graph7 from "./HomeImages/graph7.png";
import graph8 from "./HomeImages/graph8.png";
import graph9 from "./HomeImages/graph9.png";
import graph10 from "./HomeImages/graph10.png";

import HomeTable from "./HomeComponents/HomeTable.jsx"

const Homepage = () => {

  return (
    <div>
      <HomeHeader />
      <div className="solarHomeImageContainer">
        <img src="https://media.giphy.com/media/Vf9VTiNQJXNLbFL3QL/giphy-downsized-large.gif" alt="solar pannels"/>
      </div>
      <HomeTop name="Solar Graph" desc="This is using an upper bolinger band to help smooth out the outliers. If the Flow Tag is above the Upper Bolinger Band the Moving Average is instead used."/>
      <div className="graphContainer">
        <GraphCard img={graph1} link="https://colab.research.google.com/drive/1MwRZ6tGDaSw0q9goAlxKzpK3_01W-Ey4?usp=sharing"/>
        <GraphCard img={graph2} link="https://colab.research.google.com/drive/1eJWFCR4jaf87Kq9q9_-Y3wjq_jn_lZiR#scrollTo=e3xRlj55z9ZW&uniqifier=1"/>
      </div>
      <HomeTop name="Electrical Vehicle Charging" desc="This is the subarray for Electrical Vehicle Charging. This shows the Flow Tag overtime for all 7 subarrays."/>
      <GraphCard img={graph3} link="https://colab.research.google.com/drive/1eJWFCR4jaf87Kq9q9_-Y3wjq_jn_lZiR?usp=sharing"/>
      <HomeTop name="Humidity Plot"/>
      <GraphCard img={graph4} link="https://colab.research.google.com/drive/1eJWFCR4jaf87Kq9q9_-Y3wjq_jn_lZiR?usp=sharing"/>
      <HomeTop name="BUSCAR" desc="Subarrays for the BUSCAR"/>
      <GraphCard img={graph5} link="https://colab.research.google.com/drive/1eJWFCR4jaf87Kq9q9_-Y3wjq_jn_lZiR?usp=sharing"/>
      <HomeTop name="Precipitation"/>
      <GraphCard img={graph6} link="https://colab.research.google.com/drive/1eJWFCR4jaf87Kq9q9_-Y3wjq_jn_lZiR?usp=sharing"/>
      <HomeTop name="Wind Speed"/>
      <GraphCard img={graph7} link="https://colab.research.google.com/drive/1eJWFCR4jaf87Kq9q9_-Y3wjq_jn_lZiR?usp=sharing"/>
      <HomeTop name="Correlation Heatmap ECV & BUSCAR"/>
      <div className="graphContainer">
        <GraphCard img={graph8} link="https://colab.research.google.com/drive/1eJWFCR4jaf87Kq9q9_-Y3wjq_jn_lZiR?usp=sharing"/>
        <GraphCard img={graph9} link="https://colab.research.google.com/drive/1eJWFCR4jaf87Kq9q9_-Y3wjq_jn_lZiR?usp=sharing"/>
      </div>
      <HomeTop name="Train 90% and Test 10% Predictiong Flow Tag"/>
      <GraphCard img={graph10}/>
      <Footer />
    </div>
  );
};

export default Homepage;
