import React from "react"

import { Link } from 'react-router-dom'
// an API that returns a player object
import PlayerAPI from './api'    

const Player = (props) => {
  
const player = PlayerAPI.get(
    parseInt(props.match.params.number, 10)
  )
  
  if (!player) {
    return <div>Sorry, but the player was not found</div>
  }

  return (
    <div>
      <h1>{player.name} (#{player.number})</h1>
      <h2>{player.position}</h2>
    </div>
)

}

export default Player

/*
c

*/