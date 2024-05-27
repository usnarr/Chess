import React from 'react'
import whiteCrown from '../images/whiteCrown.png'; 
import halfBlackWhiteCrown from '../images/halfBlackWhiteCrown.png'; 
import blackCrown from '../images/blackCrown.png'; 
function GameMode(){
    //console.log("gamemode component is rendering");
    return (
        <div>
          <h2>Select Game Mode</h2>
          <div onClick={() => console.log('White side selected')}>
            <img src={whiteCrown} alt="White Crown" style={{ cursor: 'pointer' }} />
          </div>
          <div onClick={() => console.log('Half-Black Half-White side selected')}>
            <img src={halfBlackWhiteCrown} alt="Half Black and Half White Crown" style={{ cursor: 'pointer' }} />
          </div>
          <div onClick={() => console.log('Black side selected')}>
            <img src={blackCrown} alt="Black Crown" style={{ cursor: 'pointer' }} />
          </div>
        </div>
      );
    }

export default GameMode;