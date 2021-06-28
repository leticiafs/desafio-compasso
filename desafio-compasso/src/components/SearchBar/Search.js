import "./style.css";
import lupa from "../../img/lupa.png";
import { useContext } from "react";
import GlobalStateContext from "../../global/GlobalStateContext";
import githubicon from "../../img/githubicon.png"




export const Search = () => {
  const { setters, states, requests } = useContext(GlobalStateContext);


  const handleInputChange = (e) => {
    setters.setSearch(e.target.value)
  }

  // console.log(states.users)

  return(
    <div className="searchbox">
      <img className="icon" src={githubicon} alt="icon github"/>
      <form className="form" onSubmit={e => {
        e.preventDefault();
        requests.getUsers();
        setters.setSearched(true);
        }}>
        <input className="input" type="text" placeholder="Pesquisar usuário no GitHub" value={states.search} onChange={handleInputChange}></input>
        <button className="lupa"><img src={lupa} alt="lupa de busca" /></button>
      </form>
    </div>
  )
}