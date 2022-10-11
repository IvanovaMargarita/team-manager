import React,{useEffect,useState} from 'react'
import {useNavigate} from 'react-router-dom'
import axios from 'axios'
import   SubNav1  from './SubNav1'
const PlayerFrom = (props) => {
    const {listPageIsActive,setListPageIsActive,setManagePlayerStatus}=props
    const [ name, setName ] = useState("")
    const [position, setPosition]=useState("")
    const navigate = useNavigate()

    useEffect(() => {
        setListPageIsActive(false)
        setManagePlayerStatus(false);
    });

    const onSubmit =(e)=>{
        e.preventDefault();
        axios.post('http://localhost:8000/api/player',{
            name,
            position
        })
        .then(response=>{
            console.log(response.data)
            navigate("/players/list")
        })
        .catch(err=>console.log(err))
    }

    
    return (
    <div>
        <SubNav1 listPageIsActive={listPageIsActive} setListPageIsActive={setListPageIsActive}/>
        <form onSubmit={onSubmit}>
            <div>
                <label >name:</label>
                <input type="text" id="name"
                    onChange={(e)=>setName(e.target.value)}
                    value={name}/>
            </div>
            <div>
                <label >position:</label>
                <input type="text"  id="position"
                    onChange={(e)=>setPosition(e.target.value)}
                    value={position}/>
            </div>

            <input className="btn btn-primary" type="submit" />
        </form>
    </div>
    )
}

export default PlayerFrom