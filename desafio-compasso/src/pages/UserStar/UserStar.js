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
    axios.get(`${api.baseURL}/${params.user}/starred`, {
    }).then((response) => {
      setStarred(response.data);
    }).catch((error) => {
      console.log(error)
    })
  }; 
  
  useEffect(() => {
    getStarred();
  },)


  return (
    <div>
      <section className="topo-pagina">
        <h1>Starred por {params.user}</h1>
        <button onClick={() => goToHome(history)}>VOLTAR</button>
      </section>
      <div className="grid-box">
        {starred.map((star, index) => {
          return <CardStar key={index} star={star}/>
        })}
      </div>
    </div>
  )
};