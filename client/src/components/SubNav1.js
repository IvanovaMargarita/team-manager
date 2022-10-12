import React, { useEffect ,useState} from 'react'
import { Link } from 'react-router-dom'
//this is for list of players and add player left side
    const SubNav1 = (props) => {
        const {listPageIsActive,setListPageIsActive}=props
        const [listTabsStyle,setListTabStyle]=useState({})
        const [addPlayerTabStyle,setAddPlayerTabStyle]=useState({})

        const styleObj={
            fontWeight: "800"
        }


        ///sdfjksldjflksdfg
        /////skdjgflksdgklj

        useEffect(() => {
            if(listPageIsActive){
                setListTabStyle(styleObj)
                setAddPlayerTabStyle({})
            }else{
            setListTabStyle({})
            setAddPlayerTabStyle(styleObj)
            }
        },[listPageIsActive])
        
  return (
    <div>
        <span style={{...listTabsStyle}}
            className='sub-nav-text'>
            <Link to="/players/list">List |</Link>
        </span>

        <span style={{...addPlayerTabStyle}}
            className='sub-nav-text'>
            <Link to ="/players/addplayer"> Add Player</Link>
        </span>
    </div>
  )
}
export default SubNav1