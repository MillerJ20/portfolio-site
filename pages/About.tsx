import { Technologies } from "../components/Technologies";
import { AboutMe } from "../components/AboutMe";
import { RecentWork } from "../components/RecentWork";


const About = () => {
  return (
    <div className="about-container">
      <AboutMe />
      <Technologies />
      <RecentWork />
    </div>
  )
}

export default About;