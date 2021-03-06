import { Switch, Route, Redirect } from "react-router-dom";
import NavBar from "../components/ui/NavBar";
import MarvelScreen from "../components/marvel/MarvelScreen";
import HeroesScreen from "../components/heroes/HeroesScreen";
import DcScreen from "../components/dc/DcScreen";
import SearchScreen from "../components/search/SearchScreen"

export const DashboardRoutes = () => {
  return (
    <>
      <NavBar />

      <div className="container">
        <Switch>
          <Route exact path="/marvel" component={MarvelScreen} />
          <Route exact path="/heroe/:heroeId" component={HeroesScreen} />
          <Route exact path="/dc" component={DcScreen} />
          <Route exact path="/search" component={SearchScreen} />

          <Redirect to="/marvel" />
        </Switch>
      </div>
    </>
  );
};
