import axios from "axios";
import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { api } from "../../constants/urls";
import { CardRepos } from "../../components/CardRepos/CardRepos";
import "./style.css";
import { goToHome } from "../../routes/Coordinator";



export const UserRepos = () => {
  const params = useParams();
  const history = useHistory();
  const [repos, setRepos] = useState([]);

  const getRepos = () => {
    axios.get(`${api.baseURL}/${params.user}/repos`,{
    }).then((response) => {
      setRepos(response.data);
    }).catch((error) => {
      alert('Ocorreu um erro. Tente novamente.')
    })
  };

  
  useEffect(() => {
    getRepos();
  },)



  return (
    <div className="container-grid">
      <section className="topo-pagina">
        <h1>Repositórios de {params.user}</h1>
        <button onClick={() => goToHome(history)}>VOLTAR</button>
      </section>
      <div className="grid-box">
        {repos.map((repos, index) => {
          return <CardRepos key={index} repos={repos}/>
        })}
      </div>
    </div>
  )
};