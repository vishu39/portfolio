import { BrowserRouter } from "react-router-dom";
import "./App.scss";
import Layout from "./Component/Layout/Layout";

function App() {
  return (
    <div className="app-main">
      <BrowserRouter>
        <Layout />
      </BrowserRouter>
    </div>
  );
}

export default App;
