import React from 'react'
import whiteCrown from '../images/whiteCrown.png'; 
import halfBlackWhiteCrown from '../images/halfBlackWhiteCrown.png'; 
import blackCrown from '../images/blackCrown.png'; 
import '../css/App.css'
function GameMode(){
    //console.log("gamemode component is rendering");
    return (
        <div>
          <h2 class='main-text'>Select Game Mode</h2>
          <div className="icon-buttons">
            <button className="icon-button">
                <span>Play as White</span> 
                <img src={whiteCrown} alt="White Crown"/>
            </button>
            <button className="icon-button">
                <span>Randomize</span> 
                <img src={halfBlackWhiteCrown} alt="Half Black Half White Crown"/>
            </button>
            <button className="icon-button">
                <span>Play as Black</span> 
                <img src={blackCrown} alt="Black Crown"/>
            </button>
          </div>
        </div>
      );
    }

export default GameMode;