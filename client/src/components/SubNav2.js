import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
const SubNav2 = (props) => {
    const {gameId}=props
    const [game1Tab, setGame1Tab]=useState({})
    const [game2Tab, setGame2Tab]=useState({})
    const [game3Tab, setGame3Tab]=useState({})

    const styleObjBold={
        fontWeight: "800"
    }
    useEffect(()=>{
        if(gameId === "1"){
            setGame1Tab(styleObjBold)
            setGame2Tab({})
            setGame3Tab({})
        }else if (gameId === "2"){
            setGame1Tab({})
            setGame2Tab(styleObjBold)
            setGame3Tab({})
        }else{
            setGame1Tab({})
            setGame2Tab({})
            setGame3Tab(styleObjBold)
            }
        },[gameId])
    console.log(gameId)

  return (
    <div>
        <span className='sub-nav-text'
            style={game1Tab}>
            <Link to="/status/game/1">Game 1 |</Link>
        </span>
        <span style={game2Tab}
                className='sub-nav-text'>
            <Link to="/status/game/2">Game 2 |</Link>
        </span>
        <span style={game3Tab}
                className='sub-nav-text'>
            <Link to="/status/game/3">Game 3</Link>
        </span>
    </div>
  )
}

export default SubNav2