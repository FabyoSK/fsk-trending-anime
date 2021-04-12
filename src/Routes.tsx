import { BrowserRouter, Switch, Route } from "react-router-dom";

import { Landing } from "./pages/Landing";
import { AnimeInfo } from "./pages/AnimeInfo";
function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Landing} />
        <Route path="/anime" exact component={AnimeInfo} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
