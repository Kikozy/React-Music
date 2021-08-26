import { useContext } from 'react'
import { HanaContext } from '../../OtherPage'
import HanaItem from './HanaItem'
import style from '../../style/hana.module.scss'


function HanaList() {
    const {state} = useContext(HanaContext)
    return(
        <div className={style.hanaList}>
            {state.hanaList.map((item,index) => <HanaItem value={item} key={index+item}/>)}            
        </div>
    )
}

export default HanaList