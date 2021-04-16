import { BrowserRouter, Switch, Route } from "react-router-dom";

import { Landing } from "./pages/Landing";
import { TrendingAnimes } from "./pages/Trending";
import { AnimeInfo } from "./pages/AnimeInfo";
import { AnimeSearch } from "./pages/AnimeSearch";

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Landing} />
        <Route path="/trending/animes" component={TrendingAnimes} />
        <Route path="/anime/:id" component={AnimeInfo} />
        <Route path="/search/anime" component={AnimeSearch} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
