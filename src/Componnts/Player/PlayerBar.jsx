import { useContext } from "react"
import {playerContent} from '../../App'
// import {MusicContent} from '../../Music'
import style from '../../style/module/player/playerBar.module.scss'

function PlayerBar() {
    const {audioDom,playerState,playerDispatch} = useContext(playerContent)
    return(
        <>
            <div 
                className={style.playerBar} 
                onClick={()=>playerDispatch({name: 'openFullPlayer'})}
                style={{display: !playerState.playerFull?'flex':'none'}}
                >
                    <img className={style.songImg} src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20171221%2F2a14e6b09df846a1908379c06045ba96.jpeg&refer=http%3A%2F%2F5b0988e595225.cdn.sohucs.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1633589967&t=9c0d2d53cf835f0409bea567043ce78d" alt="" />
                    <p className={style.songName} >{playerState.nowSong.name}-{playerState.nowSong.author}</p>
                    <button 
                        className={style.playAndPuaseBtn}
                        onClick={(e) => play(e,playerState,playerDispatch,audioDom)}>
                            <span className={`iconfont ${playerState.play?'icon-zantingtingzhi':'icon-icon_play'}`}></span>
                    </button>
            </div>
        </>

    )    
}
const play = (e,playerState,playerDispatch,audioDom) => {
    //阻止事件冒泡
    e.stopPropagation()
    console.log(playerState.play)
    !playerState.play?audioDom.play():audioDom.pause()
    playerDispatch({name: 'changePlayState',value: !playerState.play})
}


const changePlayState = (state,dispatch) =>{
    dispatch({name: 'changePlayState',value: !state.play})
}

export default PlayerBar
