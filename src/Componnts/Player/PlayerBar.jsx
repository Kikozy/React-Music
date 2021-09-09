import { useContext } from "react"
import {playerContent} from '../../App'
// import {MusicContent} from '../../Music'
import '../../style/player/playerBar.scss'

function PlayerBar() {
    const {audioDom,playerState,playerDispatch} = useContext(playerContent)
    return(
        <>
            <div className='playerBar' onClick={()=>playerDispatch({name: 'openFullPlayer'})}>
                <img className="songImg" src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20171221%2F2a14e6b09df846a1908379c06045ba96.jpeg&refer=http%3A%2F%2F5b0988e595225.cdn.sohucs.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1633589967&t=9c0d2d53cf835f0409bea567043ce78d" alt="" />
                <p className="songName" >用于显示名字</p>
                <button 
                    className="playAndPuaseBtn" 
                    onClick={(e) => play(e,playerState,playerDispatch,audioDom)}>
                    <span className={`iconfont ${playerState.play?'icon-zantingtingzhi':'icon-bofang-tongyong'}`}></span>
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

const tpMusicTime = async (e)=> {
    //鼠标点击的位置/盒子总长度 = 进度条百分比 然后 * 歌曲总时长 = 要跳转的时间
    let tpTime = (e.clientX/300)*this.state.playTotalTime
    //计算进度条要显示的百分比
    let progressLoction = (tpTime/this.state.playTotalTime*100).toFixed(2)
    //改变进度条的显示进度
    await this.syncSetState({jd: progressLoction})
    //让播放器跳转到指定的时间上去
    this.audioRef.current.currentTime = tpTime
}

const changePlayState = (state,dispatch) =>{
    dispatch({name: 'changePlayState',value: !state.play})
}

export default PlayerBar
