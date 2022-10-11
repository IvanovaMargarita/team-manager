import React ,{useState, useEffect}from 'react'
import { Link } from 'react-router-dom'


const Nav = (props) => {
    const {managePlayerStatus, setManagePlayerStatus}=props
    const [statusTabsStyle,setStatusTabStyle]=useState({})
    const [managePlayerTabStyle,setManagePlayerTabStyle]=useState({})

    
    const styleObjBold={
        fontWeight: "800"
    }
    useEffect(() => {
        if(managePlayerStatus){
            setStatusTabStyle(styleObjBold)
            setManagePlayerTabStyle({})
        }else{
            setStatusTabStyle({})
            setManagePlayerTabStyle(styleObjBold)
        }
    },[managePlayerStatus])
  return (
    <div>
        <span style={managePlayerTabStyle}
            className='global-nav-text'>
            <Link to="/players/list">Manage Players |</Link> 
        </span>

        <span style={statusTabsStyle}
            className='global-nav-text'>
        <Link to="/status/game/1"> Manage Player Status</Link>

        </span>
    </div>
  )
}

export default Nav