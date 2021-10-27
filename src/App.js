import React from "react";
import Data from "./data.json"
import "./App.css"
import { useState } from "react";

function Apps() {
  const [searchTerm, setSearchTerm] = useState('')
  
  return (<div>
    <div className="search-bar">
      <input
        type="text"
        id="header-search"
        placeholder="Search the Emoji Here"
        onChange={(event) => {
          setSearchTerm(event.target.value);
        }}
      /><button type="submit"><i class="fa fa-search"></i></button>
    </div>
    <ul>
      {Data.filter((val) => {
        if (searchTerm == "") {
          return val
        } else if (val.keywords.toString().toLowerCase().includes(searchTerm.toString().toLowerCase())
          || (val.title.toString().toLowerCase().includes(searchTerm.toString().toLowerCase()))) {
          return val
        }
      }).map(emoji =>
        <li className="card">{emoji.symbol}
        </li>)}
    </ul>
  </div>

  );
}

export default Apps;



