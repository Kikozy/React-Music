/*
    1. 定义默认数据
*/
const defaultState = {
    inputValue: '',
    list: [],
    str: '空空如也'
}

/*
    2. 导出一个函数
        state的默认值就是defaultState
        这个函数返回了state
*/
export default (state=defaultState,action)=>{
    //深拷贝
    let newState = JSON.parse(JSON.stringify(state))
    //寻找需要的事件
    switch(action.type){
        case 'changeInputValue':
            newState.inputValue = action.value
            break
        case 'addList':
            newState.list.push(newState.inputValue)
            newState.inputValue = ''
            break
        case 'delList':
            console.log(action)
            newState.list.splice(action.value,1)
            break
        default:
            break
    }
    //返回新的值
    return newState
}