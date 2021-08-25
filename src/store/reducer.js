/*
    1. 定义默认数据
*/
const defaultState = {
    num: '',
    list: [1,2,3],
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
        case 'changeStr':
            newState.str = action.value
            break
        default:
            break
    }
    //返回新的值
    return newState
}