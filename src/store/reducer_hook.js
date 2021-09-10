export const playerReducer = (state,action)=>{
    //深拷贝
    let newState = JSON.parse(JSON.stringify(state))
    switch(action.name){
        case 'changePlayState':
            console.log('changePlayState')
            newState.play = action.value
            break
        case 'other':
            console.log('没事了')
            break
        case 'openFullPlayer':
            newState.playerFull = true
            break
        case 'closeFullPlayer':
            newState.playerFull = false
            break
        case 'changeProgressWidth':
            newState.progressWidth = action.value
            break
        default:
            console.log('麻了')
            break
    }
    return newState
}