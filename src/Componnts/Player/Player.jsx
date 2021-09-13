import { useContext, useEffect, useRef } from 'react'
import { playerContent } from '../../App'
import playerStyle from '../../style/module/player/player.module.scss'



function Player() {
    const {audioDom,playerState,playerDispatch} = useContext(playerContent)
    const progressBox = useRef()
    const playrPage = useRef()
    return(
        <div ref={playrPage} className={playerStyle.playerPage} style={{display: playerState.playerFull?'flex':'none'}}>
            <header className={playerStyle.headArea}>
                <button 
                    className={playerStyle.closeFullPlayerBtn} 
                    onClick={()=>closeFun(playrPage,playerDispatch)}>V</button>
                <div className={playerStyle.songInfo}>
                    {/* 歌曲名字 */}
                    <p className={playerStyle.songName}>{playerState.nowSong.name}</p>
                    {/* 歌曲作者 */}
                    <p className={playerStyle.songAuthor}>{playerState.nowSong.author}</p>
                </div>
                <button className={playerStyle.fenxiangBtn}>我</button>
            </header>
            <main className={playerStyle.content}>
                <div className={playerStyle.songImgArea}>
                    <img className={playerStyle.songImg} src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20171221%2F2a14e6b09df846a1908379c06045ba96.jpeg&refer=http%3A%2F%2F5b0988e595225.cdn.sohucs.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1633589967&t=9c0d2d53cf835f0409bea567043ce78d" alt="" />
                </div>
                <div className={playerStyle.controllerArea}>
                    <div className={playerStyle.topBtn}>
                        <button className={playerStyle.addMyLove}>
                            <span className="iconfont icon-xihuan"></span>
                        </button>
                        <button>
                            <span className="iconfont icon-icon-"></span>
                        </button>
                        <button>
                            <span className="iconfont icon-icon--"></span>
                        </button>
                        <button className={playerStyle.comment}>
                            <span className="iconfont icon-liuyan"></span>
                        </button>
                        <button className={playerStyle.more}>
                            <span className="iconfont icon-caozuo"></span>
                        </button>
                    </div>
                    <div className={playerStyle.progressBarArea}>
                        <div className={playerStyle.nowTime}>{secToTime(audioDom.currentTime)}</div>
                        
                        <div
                            ref={progressBox}
                            className={playerStyle.progressBox}
                            onClick={(e)=>{
                                tpMusicTime(e,progressBox,audioDom,playerDispatch)
                            }}    
                        >
                            <div 
                                className={playerStyle.progressBar}
                                style={{width: (playerState.progressWidth)+'%'}}
                            ></div>
                        </div>

                        <div className={playerStyle.totalTime}>{secToTime(audioDom.duration)}</div>
                    </div>
                    <div className={playerStyle.bottomBtn}>
                        {/* 循环播放 */}
                        <button className={playerStyle.playTypeBtn}>
                            <span className="iconfont icon-xunhuan"></span>
                        </button>
                        {/* 上一曲 */}
                        <button className={playerStyle.lastSongBtn}>
                            <span className="iconfont icon-shangyiqu"></span>
                        </button>
                        {/* 播放/暂停 */}
                        <button 
                            className={playerStyle.playBtn}
                            onClick={(e) => play(e,playerState,playerDispatch,audioDom)}
                        >
                            <span className={`iconfont ${playerState.play?'icon-zantingtingzhi':'icon-icon_play'}`}></span>
                        </button>
                        {/* 下一曲 */}
                        <button className={playerStyle.nextSongBtn}>
                            <span className="iconfont icon-xiayiqu"></span>
                        </button>
                        {/* 歌曲列表 */}
                        <button className={playerStyle.openSongListBtn}>
                            <span className="iconfont icon-liebiao"></span>
                        </button>
                    </div>
                </div>
            </main>

        </div>
    )
}

const tpMusicTime = async (e,progressBox,audioDom,playerDispatch)=> { 
    //鼠标点击的位置/盒子总长度 = 进度条百分比 然后 * 歌曲总时长 = 要跳转的时间
    let tpTime = (e.nativeEvent.offsetX/progressBox.current.clientWidth)*audioDom.duration
    //计算进度条要显示的百分比
    let progressLoction = (tpTime/audioDom.duration*100).toFixed(2)
    //改变进度条的显示进度
    playerDispatch({
        name: 'changeProgressWidth',
        value: progressLoction
    })
    //让播放器跳转到指定的时间上去
    audioDom.currentTime = tpTime
}

const play = (e,playerState,playerDispatch,audioDom) => {
    //阻止事件冒泡
    e.stopPropagation()
    console.log(playerState.play)
    !playerState.play?audioDom.play():audioDom.pause()
    playerDispatch({name: 'changePlayState',value: !playerState.play})
}

const secToTime = (sec)=>{
    let time = parseInt(sec)
    let fen,miao
    if(time<60){
        fen = '00'
        miao = time<10?`0${time}`:time
    }else{
        fen = (time/60)>=10?time:`0${parseInt(time/60)}`
        miao = (time%60)>=10?time%60:`0${time%60}`
    }
    return fen+":"+miao
}

const closeFun = (playrPage,playerDispatch)=>{
    playrPage.current.style.transform = 'translateY(100vh)'
    setTimeout(() => {
        playerDispatch({name: 'closeFullPlayer',value: false})
        playrPage.current.style.transform = 'translateY(0)'
    }, 600);
}
const openFun =(playrPage,playerDispatch)=>{
    playrPage.current.style.transform = 'translateY(0)'
    setTimeout(() => {
        playerDispatch({name: 'closeFullPlayer',value: true})
    }, 600);
}
export default Player