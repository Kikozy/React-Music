import { createContext, useState ,useContext} from "react"
// 只能在这里使用createContext，不能在函数内创建
export const TestContext = createContext()
console.log(TestContext)
function Login (){
    const [num,changeNum] = useState(0)
    
    return(
        <>
            <h1 style={{'color':'red'}}>Login</h1>
            <p style={{'color':'pink'}} onClick={()=>changeNum(num+1)}>{num}</p>
            {/* 把需要访问数据的组件包裹起来，并传递数据过去 */}
            
        </>
    )
}
export default Login