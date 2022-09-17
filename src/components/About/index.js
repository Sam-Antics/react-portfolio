import React from "react";
import coverImage from "../../assets/images/purple-glitter.jpg";

const About = () => {
  return (
    <section>
      <h1 id="about">
        About Me
      </h1>
      <img src={coverImage} style={{ width: "100%" }} alt="cover" />
    </section>
  );
}

export default About;