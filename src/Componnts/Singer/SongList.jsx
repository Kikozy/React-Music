import { useContext } from "react";
import { PlayContent } from './Player'


function SongList() {
    const {playState,playDispatch} = useContext()
    return(
        <div className='SongList'>
            <h1>2333</h1>
            {/* {playState.songList.map((item,index)=>{
                return <p key={item.name+index}>{item.name}</p>
            })} */}
        </div>
    )

}

export default SongList