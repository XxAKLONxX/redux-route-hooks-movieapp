import React from "react";
import MouvieCard from "./MouvieCard";
import StarRating from "./StarRating";


function MouvieList({ mouvies, inputSearch, starSearch ,STE}) {
  return (
    <div>
    <div  ><StarRating STE={STE}/></div>
    <div style={{ display: "flex", flexWrap: "wrap"}}>
     
      
      {mouvies
        .filter(
          (el) =>
             el.title.toUpperCase().includes(inputSearch.toUpperCase()) &&
            el.rate >= starSearch
        )
        .map((el) => (
          <MouvieCard mouvie={el} />
        ))}
    </div>
    </div>
  );
}

export default MouvieList;
