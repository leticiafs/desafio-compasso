import { useContext } from "react";
import { CardUser } from "../../components/CardUser/CardUser";
import { Search } from "../../components/SearchBar/Search";
import GlobalStateContext from "../../global/GlobalStateContext";
import "./style.css";


export const SearchResults = () => {
  const { states } = useContext(GlobalStateContext);



  return (
    <div className="container">
      <Search/>
      {states.searched ? <CardUser/> : <div></div> }
    </div>
  )
};