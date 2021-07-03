import { Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Roadmap from "./pages/Roadmap";

const App = () => {
  return (
    <div className="container">
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/roadmap" exact component={Roadmap} />
      </Switch>
    </div>
  );
};

export default App;
