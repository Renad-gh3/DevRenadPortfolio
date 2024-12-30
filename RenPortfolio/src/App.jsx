import "./index.css";
import Nav from "../src/components/navbar/nav";
import Hero from "../src/components/Hero/hero";
import Project from "../src/components/Projects/Projects";
import Collaborations from "../src/components/Collaborations/Collaborations";
import Skill from "../src/components/TechSkil/Skill";
import Contact from "../src/components/Contact/contact";

const App = () => {
  return (
    <>
      <Nav />
      <Hero />
      <Project />
      <Collaborations />
      <Skill />
      <Contact />
    </>
  );
};

export default App;
