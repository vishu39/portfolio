import { personal_details } from "../Helper/data";
import "./Content/home.scss";

const Home = () => {
  return (
    <div className="home_main">
      <h1 className="heading">
        {personal_details?.first_name} {personal_details?.last_name}
      </h1>
      <p className="para">
        I am a <span className="base animate-fd">Frontend Developer</span>
      </p>
    </div>
  );
};

export default Home;
