import React from 'react';

const AboutName = () => {
  return (
    <div className="funFactContainer">
      <p className="funFactPOne">
      These solar arrays serve as a platform for studying and comparing two distinct solar energy technologies. The Electric Vehicle Charging Station Array employs poly-crystalline silicon solar cell technology, while the CAMBUS Array utilizes a triple-junction amorphous silicon solar cell technology. These technologies possess varying properties and performance characteristics, which is a focal point of discussion within this challenge.
      </p>
      <p className="funFactPTwo">
      The challenge's main objective is to leverage over a decade of University of Iowa energy system data to develop a program that can systematically evaluate the performance of these solar technologies across the campus, accounting for various weather conditions and time. The program should not only benchmark the solar performance in terms of conversion efficiency but also extend to Level 2, where it can conduct in-depth analyses, investigations, or predictions regarding the solar installations or technologies. The ultimate goal is to provide valuable insights and findings to the University of Iowa and ENGIE North America, aiding in understanding solar performance and making informed decisions about future solar installations on campus.
      </p>
    </div>
  );
};

export default AboutName;
