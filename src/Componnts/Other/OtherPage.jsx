import Inputs from "./components/Inputs/Inputs"
import HanaList from "./components/HanaList/HanaList"
import { useReducer } from "react"
import {hanaReducer} from './store/reducer'
import { createContext } from "react"
import style from './style/hana.module.scss'

export const HanaContext = createContext()
function OtherPage() {
    const [state,dispatch] = useReducer(hanaReducer,{
        newHanaNa: '',
        hanaList: ['初始小花']
    })
    return(
        <>
            <div className={style.hanaShop}>
                <h1 className={style.shopTitle}>花店</h1>
                <HanaContext.Provider value={{state,dispatch}}>
                    <Inputs></Inputs>
                    <HanaList></HanaList>
                </HanaContext.Provider>
            </div>
        </>
    )
}

export default OtherPage