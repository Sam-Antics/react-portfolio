import React from "react";
import coverImage from "../../assets/images/purple-glitter.jpg";

const About = () => {
  return (
    <section>
      <h1 id="about">
        About Me
      <img src={coverImage} style={{ width: "100%" }} alt="cover" />
      </h1>
    </section>
  );
}

export default About;