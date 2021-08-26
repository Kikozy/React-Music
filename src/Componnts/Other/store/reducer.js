
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