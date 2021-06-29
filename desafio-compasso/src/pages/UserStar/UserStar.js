import axios from "axios";
import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { api } from "../../constants/urls";
import { CardStar } from "../../components/CardStar/CardStar";
import "./style.css";
import { goToHome } from "../../routes/Coordinator";

export const UserStar = () => {
  const params = useParams();
  const history = useHistory();
  const [starred, setStarred] = useState([]);

  
   const getStarred = () => {
    axios.get(`${api.baseURL}/${params.user}/starred?client_id=${api.client_id}&client_secret=${api.client_secret}`, {
    }).then((response) => {
      setStarred(response.data);
    }).catch((error) => {
      alert('Ocorreu um erro. Tente novamente.')
    })
  }; 
  
  useEffect(() => {
    getStarred();
  },)

  return (
    <div>
      { starred.length>0 ? 
        (<section className="topo-pagina">
        <h1>Starred por {params.user}</h1>
        <button onClick={() => goToHome(history)}>VOLTAR</button>
        </section>) : 
        (<section className="topo-pagina-nodata">
          <h1>{params.user} ainda não deu nenhuma estrela</h1>
          <button onClick={() => goToHome(history)}>VOLTAR</button>
        </section>)}
      <div className="grid-box">
       {starred.length>0 ? starred.map((star, index) => {
          return <CardStar key={index} star={star}/>
        }) : null}
      </div>
    </div>
  )
};