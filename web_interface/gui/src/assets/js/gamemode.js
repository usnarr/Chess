import React from 'react'

function GameMode(){
    console.log("Login component is rendering");
    return (
        <div>
            <h2>Select Game Mode</h2>
            <button>Bullet</button>
            <button>Rapid</button>
            <button>Classic</button>
        </div>
    )
}

export default GameMode;