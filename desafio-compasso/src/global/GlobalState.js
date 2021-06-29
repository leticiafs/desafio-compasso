import React, { useState } from "react";
import axios from "axios";
import GlobalStateContext from "./GlobalStateContext";
import { api } from "../constants/urls";

const GlobalState = (props) => {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState('');
  const [searched, setSearched] = useState(false)


  const getUsers = () => {
    axios.get(`${api.baseURL}/${search}?client_id=${api.client_id}&client_secret=${api.client_secret}`, {
    }).then((response) => {
      setUsers(response.data);
    }).catch((error) => {
      alert('Usuário não encontrado');
      refreshPage()
    
    })
    setSearch('');
  };

  const refreshPage = () => {
    window.location.reload()
  };


  const states = { users, search, searched };
  const setters = { setSearch, setSearched };
  const requests = { getUsers };
  const data = { states, setters, requests};

  return (
    <GlobalStateContext.Provider value={data}>
      {props.children}
    </GlobalStateContext.Provider>
  ); 
};

export default GlobalState;