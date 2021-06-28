import { useContext } from "react";
import { useHistory } from "react-router-dom";
import GlobalStateContext from "../../global/GlobalStateContext";
import { goToRepos, goToStar } from "../../routes/Coordinator";
import "./style.css";





export const CardUser = () => {
  const { states } = useContext(GlobalStateContext);
  const history = useHistory();



  return (
    <div className="container-results">
      <div className="card-user">

        <section className="sec-identificacao">
          <img src={states.users.avatar_url} alt="user avatar"/>
          <div className="box-identificacao">
            <h2>{states.users.name}</h2>
            <h4><em>@{states.users.login}</em></h4>
            <p><em> {states.users.location}</em></p>
          </div>
        </section>
        
        <section className="sec-infos">
          <div className="sec-infos-dados">
            <p>FOLLOWERS</p>
            <h1>{states.users.followers}</h1>
          </div>
          <div className="sec-infos-dados">
            <p>FOLLOWING</p>
            <h1>{states.users.following}</h1>
          </div>
          <div className="sec-infos-dados">
            <p>REPOSITORIES</p>
            <h1>{states.users.public_repos}</h1>

          </div>
        </section>

        <section className="sec-acesso">
          <button onClick={() => goToRepos(history, `${states.users.login}`)}>VER REPOSITÓRIOS</button>
          <button onClick={() => goToStar(history, `${states.users.login}`)}>VER STARRED</button>
        </section>

      </div>
    </div>
  )
}