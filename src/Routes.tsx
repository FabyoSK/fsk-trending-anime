import { BrowserRouter, Switch, Route } from "react-router-dom";

import { Landing } from "./pages/Landing";
import { TrendingAnimes } from "./pages/Trending";
import { AnimeInfo } from "./pages/AnimeInfo";
function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Landing} />
        <Route path="/trending/animes" exact component={TrendingAnimes} />
        <Route path="/anime/:id" component={AnimeInfo} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
