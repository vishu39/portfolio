import "./App.scss";
import Left from "./Component/Left";
import Right from "./Component/Right";

function App() {
  return (
    <div className="app-main">
      <div className="left">
        <Left />
      </div>
      <div className="right">
        <Right />
      </div>
    </div>
  );
}

export default App;
