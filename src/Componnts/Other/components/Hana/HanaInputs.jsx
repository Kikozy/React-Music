import { useContext } from 'react'
import {HanaContext} from '../../OtherPage'
import style from '../../style/hana.module.scss'
function HanaInputs() {
    const {state,dispatch} = useContext(HanaContext)
    return(
        <>
            <input
                className={style.newHanaInput}
                type="text"
                value={state.newHanaNa} 
                onChange={(e)=>dispatch({type: 'changeHanaNa',value: e.target.value})}
            />
            <button
                className={style.addHanaBtn}
                onClick={()=>dispatch({type: 'addHana'})}
            >添加</button>
        </>
    )
}

export default HanaInputs