//使用useReducer这个Hook
import { useReducer } from "react"
//引入reducer文件
import {hanaReducer,infoReducer} from './store/reducer'
import { createContext } from "react"


import HanaItem from './components/Hana/HanaItem'
import HanaInputs from "./components/Hana/HanaInputs"
import InfoItem from './components/Info/InfoItem'
import InfoInput from './components/Info/InfoInput'

import hanaStyle from './style/hana.module.scss'
import infoStyle from './style/info.module.scss'

export const HanaContext = createContext()
export const InfoContext = createContext()
function OtherPage() {
    /* 
        初始化仓库
            - useReducer会接收一个reducer配置函数和一个初始的状态对象
            - 返回第一个是state状态，第二个是dispatch方法
            */
    const [state,dispatch] = useReducer(hanaReducer,{
        newHanaNa: '',
        hanaList: ['初始小花']
    })
    //初始化仓库
    const [infoState,infoDispatch] = useReducer(infoReducer,{
        newInfo: '',
        infoList: []
    })
    return(
        <>
            <div className={hanaStyle.hanaShop}>
                <h1 className={hanaStyle.shopTitle}>花店</h1>
                <HanaContext.Provider value={{state,dispatch}}>
                    <HanaInputs></HanaInputs>
                    {state.hanaList.map((item,index) => <HanaItem value={{item,index,dispatch}} key={index+item}/>)}  
                </HanaContext.Provider>

            </div>
            <div className={infoStyle.infoWrite}>
                <h1 className={infoStyle.title}>信息录入</h1>
                <InfoContext.Provider value={{infoState,infoDispatch}}>
                    <InfoInput></InfoInput>
                    {infoState.infoList.map((item,index) => <InfoItem value={{item,index,infoDispatch}} key={index+item}></InfoItem>)}
                </InfoContext.Provider>
            </div>
        </>
    )
}

export default OtherPage