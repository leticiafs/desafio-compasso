import React, { useState } from "react";
import axios from "axios";
import GlobalStateContext from "./GlobalStateContext";
import { api } from "../constants/urls";

const GlobalState = (props) => {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState('');
  const [searched, setSearched] = useState(false)


  const getUsers = () => {
    axios.get(`${api.baseURL}/${search}`, {
    }).then((response) => {
      setUsers(response.data);
    }).catch((error) => {
      console.log(error)
    })
    setSearch('');
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