/*
这里是reducer文件
    相比redux中的reducer，只包含了逻辑处理，没有初始值的地方
    可以实现按需导出，多个组件多个store
*/
export const hanaReducer = (state,action) => {
    let newState = JSON.parse(JSON.stringify(state))
    switch(action.type){
        case 'changeHanaNa':
            newState.newHanaNa = action.value
            break
        case 'addHana':
            newState.hanaList.push(newState.newHanaNa)
            newState.newHanaNa = ''
            break
        case 'delHana':
            newState.hanaList.splice(action.value,1)
            break
    }
    return newState
}
export const infoReducer = (state,action) => {
    let newState = JSON.parse(JSON.stringify(state))
    switch(action.type){
        case 'changeNewInfo':
            newState.newInfo = action.value
            break
        case 'addNewInfo':
            newState.infoList.push(newState.newInfo)
            newState.newInfo = ''
            break
        case 'delInfo':
            newState.infoList.splice(action.value,1)
            break
    }
    return newState
}