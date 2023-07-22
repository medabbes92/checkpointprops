import React from "react";

import players from "./Players";


import Player from "./Player";


const PlayersList = () => {
  return (
    <div style={{display : "flex" , flexWrap : "wrap" ,justifyContent :"space-around"}}>
      {players.map(el => <Player el={el}/>
        
      )}
    </div>
  );
};

export default PlayersList;

