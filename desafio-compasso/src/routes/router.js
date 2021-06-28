import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { SearchResults } from '../pages/SearchResults/SearchResults';
import { UserRepos } from '../pages/UserRepos/UserRepos';
import { UserStar } from '../pages/UserStar/UserStar';



const Router = () => {

  return(
    <BrowserRouter>
      <Switch>

        <Route exact path={"/"}>
          <SearchResults/>
        </Route>

        <Route exact path={"/repositorios/:user"}>
          <UserRepos/>
        </Route>

        <Route exact path={"/starred/:user"}>
          <UserStar/>
        </Route>

        <Route exact path={"/erro"}>
          <div>Página não encontrada</div>
        </Route>

      </Switch>
    </BrowserRouter>
  )
}


export default Router;