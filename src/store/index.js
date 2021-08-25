
// 1. 引用createStore
import { createStore } from "redux"
// 2. 引入reducer
import reducer from "./reducer"
// 3. 使用createStore来创建仓库,传入reducer作为数据
const store = createStore(reducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
// 4. 导出仓库

export default store