import { BrowserRouter, Switch, Route } from 'react-router-dom';


const Router = () => {

  return(
    <BrowserRouter>
      <Switch>
        <Route exact path={"/"}>
          page
        </Route>
      </Switch>
    </BrowserRouter>
  )
}


export default Router;