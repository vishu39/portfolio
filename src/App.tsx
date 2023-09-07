import { BrowserRouter, HashRouter } from "react-router-dom";
import "./App.scss";
import Layout from "./Component/Layout/Layout";

function App() {
  return (
    <div className="app-main">
      <HashRouter>
        <Layout />
      </HashRouter>
    </div>
  );
}

export default App;
