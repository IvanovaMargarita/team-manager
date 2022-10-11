import React from 'react'
import {useState, useEffect} from 'react'
import axios from 'axios'
import  SubNav1  from './SubNav1'

const AllPlayers = (props) => {
    const {listPageIsActive,setListPageIsActive,setManagePlayerStatus}=props
    const [allPlayers,setAllPLayers]=useState([])
    console.log("props", setListPageIsActive)

    useEffect(()=>{
        setListPageIsActive(true);
        setManagePlayerStatus(false)
    })


    useEffect(()=>{
        axios.get("http://localhost:8000/api/players")
        .then(response=>{
            console.log(response.data)
            setAllPLayers(response.data)
        })
        .catch((err)=>{
            console.log(err.response)
        })

    },[]) 

    const handleDelete=(idFromBelow)=>{
        axios.delete(`http://localhost:8000/api/player/${idFromBelow}`)
        .then(response=>{
            console.log(response)
            ///creating a new list that will have deleted players removed form it. so only the players that arent deleted are in in
            const newList = allPlayers.filter((player, index)=> player._id !== idFromBelow)
            setAllPLayers(newList)
        })
    }
  return (
    <div>
        <SubNav1 listPageIsActive={listPageIsActive} 
                setListPageIsActive={setListPageIsActive}/>
        <h1>List Players Components</h1>

        <table>
            <thead>
                <tr>
                    <th>Player Name</th>
                    <th>Preferred position</th>
                    <th>Acction</th>
                </tr>
            </thead>
            <tbody>
                {allPlayers.map((player,index)=>{
                    return(
                        <tr key={player._id}>
                            <td>{player.name}</td>
                            <td>{player.position}</td>
                            <td><button onClick={()=>handleDelete(player._id)}className='btn btn-danger'>delete</button></td>
                        </tr>
                    )
                })}
                
            </tbody>
        </table>
    </div>
  )
}

export default AllPlayers