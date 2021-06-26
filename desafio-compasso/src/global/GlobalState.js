import React, { useState } from "react";
import axios from "axios";
import GlobalStateContext from "./GlobalStateContext";


const GlobalState = (props) => {
  const [exemplo, setExemplo] = useState([]);



  // const getRestaurants = () => {
  //   axios.get(`${UrlApi}/restaurants`, {
  //     headers: {
  //       auth: localStorage.getItem('token'),
  //       "Content-Type": "application/json"
  //     }
  //   }).then((response) => {
  //     setRestaurants(response.data.restaurants)
  //   }).catch((error) => {
  //     console.log(error)
  //   })
  // };

  const states = { exemplo };
  const setters = { setExemplo };
  const requests = { getRestaurants };
  const data = { states };

  return (
    <GlobalStateContext.Provider value={data}>
      {props.children}
    </GlobalStateContext.Provider>
  ); 
};

export default GlobalState;