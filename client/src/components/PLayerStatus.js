import React, { useEffect, useState } from 'react'
import SubNav2 from './SubNav2'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import "../App.css"



const PLayerStatus = (props) => { 
    const {setManagePlayerStatus,gameId}=props
    const [playerData, setPlayerData]=useState([])
    const [triggerGetAllRequestDummy, setTriggerAllRequestDummy]=useState(false)
    const params = useParams()
    useEffect(()=>{
        setManagePlayerStatus(true)
    },[])

    useEffect(()=>{
        axios.get("http://localhost:8000/api/players")
        .then((response)=>{
            console.log(response.data)
            setPlayerData(response.data)
        })
        .catch((err)=>console.log(err.response))
    },[triggerGetAllRequestDummy])

    const handleCHangeGameStatus = (idFromBelow, newStatus)=>{
        let putData = {}
        if (gameId === "1"){
            putData.gameOneStatus= newStatus
        }else if(gameId === "2") {
            putData.gameTwoStatus = newStatus
        }else{
            putData.gameThreeStatus= newStatus
        }
        axios.put(`http://localhost:8000/api/player/${idFromBelow}`, putData)
            .then((response)=>{
                console.log(response)
                setTriggerAllRequestDummy(!triggerGetAllRequestDummy)
            })
            .catch((err)=>
                console.log(err))
    }
  return (
    <div>
            <SubNav2 gameId={params.gameId}/>

        <h1>Player Status- Game {params.gameId}</h1>
        <table>
            <thead>
                <tr>Player Name</tr> 
                <tr>Actions</tr>
            </thead>
            <tbody>

                {params.gameId === "1" ? (
                    playerData.map((player, index)=>{
                    return (
                        <tr key={player._id}>
                        <td>{player.name}</td>
                        <td>
                            <button
                                className={`${player.gameOneStatus === "playing" ? "green-playing-btn" : ""}`} 
                                onClick={()=>handleCHangeGameStatus(player._id, "playing")}
                                >
                                    Playing</button>
                            <button
                                className={`${player.gameOneStatus=== "not playing" ? "red-notplaying-btn" : ""}`}
                                onClick={()=>handleCHangeGameStatus(player._id, "not playing")}
                                >
                                    Not Playing</button>
                            <button 
                                className={`${player.gameOneStatus=== "undecided" ? "yellow-undecided" : ""}`}
                                onClick={()=>handleCHangeGameStatus(player._id, "undecided")}
                                >
                                    Undecided</button>
                        </td>
                        </tr>
                    )
                })
            ) : (
                <></>
            )}
                {params.gameId === "2" ? (
                    playerData.map((player, index)=>{
                    return (
                        <tr key={player._id}>
                        <td>{player.name}</td>
                        <td>
                            <button
                                className={`${player.gameTwoStatus === "playing" ? "green-playing-btn" : ""}`} 
                                onClick={()=>handleCHangeGameStatus(player._id, "playing")}
                                >
                                    Playing</button>
                            <button
                                className={`${player.gameTwoStatus === "not playing" ? "red-notplaying-btn" : ""}`}
                                onClick={()=>handleCHangeGameStatus(player._id, "not playing")}
                                >
                                    Not Playing</button>
                            <button 
                                className={`${player.gameTwoStatus === "undecided" ? "yellow-undecided" : ""}`}
                                onClick={()=>handleCHangeGameStatus(player._id, "undecided")}
                                >
                                    Undecided</button>
                        </td>
                        </tr>
                    )
                })
            ) : (
                <></>
            )}
                {params.gameId === "3" ? (
                    playerData.map((player, index)=>{
                    return (
                        <tr key={player._id}>
                        <td>{player.name}</td>
                        <td>
                            <button
                                className={`${player.gameThreeStatus === "playing" ? "green-playing-btn" : ""}`} 
                                onClick={()=>handleCHangeGameStatus(player._id, "playing")}
                                >
                                    Playing</button>
                            <button
                                className={`${player.gameThreeStatus === "not playing" ? "red-notplaying-btn" : ""}`}
                                onClick={()=>handleCHangeGameStatus(player._id, "not playing")}
                                >
                                    Not Playing</button>
                            <button 
                                className={`${player.gameThreeStatus === "undecided" ? "yellow-undecided" : ""}`}
                                onClick={()=>handleCHangeGameStatus(player._id, "undecided")}
                                >
                                    Undecided</button>
                        </td>
                        </tr>
                    )
                })
            ) : (
                <></>
            )}
            </tbody>
        </table>
        </div>
  )
            }

export default PLayerStatus