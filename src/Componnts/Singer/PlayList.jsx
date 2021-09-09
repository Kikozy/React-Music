import { useContext } from 'react'
import {playerContent} from '../../App'

function PlayList() {
    const {changeSong} = useContext(playerContent)
    return(
        <>
            <button onClick={()=>changeSong(song+1)}>点我</button>
        </>     
    )
}


export default PlayList