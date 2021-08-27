import { useContext } from 'react'
import { InfoContext } from '../../OtherPage'


function InfoInput() {
    const {infoState,infoDispatch} = useContext(InfoContext)
    return(
        <>
            <input
                type="text"
                onChange={(e)=>infoDispatch({type: 'changeNewInfo',value: e.target.value})} 
                value={infoState.newInfo}
            />
            <button onClick={()=>infoDispatch({type: 'addNewInfo'})}>增加信息</button>
        </>
    )
}

export default InfoInput