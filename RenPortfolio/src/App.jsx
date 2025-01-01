import { HashRouter as Router } from "react-router-dom";
import Nav from "../src/components/navbar/nav";
import Hero from "../src/components/Hero/hero";
import Project from "../src/components/Projects/Projects";
import Collaborations from "../src/components/Collaborations/Collaborations";
import Skill from "../src/components/TechSkil/Skill";
import Contact from "../src/components/Contact/contact";
import Footer from "../src/components/Footer/footer";

const App = () => {
  return (
    <Router>
      <Nav />
      <Hero id="hero" />
      <Project id="Projects" />
      <Collaborations id="Collaborations" />
      <Skill id="Skills" />
      <Contact id="contact" />
      <Footer />
    </Router>
  );
};

export default App;
