import "./App.scss";
import AboutMe from "./NewComponent/AboutMe/AboutMe";
import HomePage from "./NewComponent/Home/HomePage";

function App() {
  return (
    <div className="app-main">
      <HomePage />
      <AboutMe />
    </div>
  );
}

export default App;

{
  /* <div className="left">
  <Left />
</div>
<div className="right">
  <Right />
</div> */
}
