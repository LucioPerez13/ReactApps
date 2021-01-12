import React, { useEffect, useState } from "react";
import axios from 'axios';
import TablaLucio from "./tablaLucio";

function Crud() {
  const [pokemon, setPokemon] = useState([]);
  const getData = async () => {
    await axios.get("https://pokeapi.co/api/v2/pokemon/bulbasaur")
      .then(res => {
        setPokemon(res.data.moves)
      })
  }
  useEffect(() => {
    getData();
  }, [])

  return (
    <div className="card">
      <div className="card-body">
        <div className="card card-title">
          <b>Api</b>
        </div>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Id</th>
              <th>Hablidades</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            <TablaLucio lista={pokemon} />
          </tbody>
        </table>
      </div>
    </div>
  )
}
export default Crud