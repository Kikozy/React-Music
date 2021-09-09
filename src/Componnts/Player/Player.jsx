import { useContext } from 'react'
import { playerContent } from '../../App'
import playerStyle from '../../style/module/player/player.module.scss'



function Player() {
    const {audioDom,playerState,playerDispatch} = useContext(playerContent)
    return(
        <div className={playerStyle.playerPage} style={{display: playerState.playerFull?'flex':'none'}}>
            <header className={playerStyle.headArea}>
                <button className={playerStyle.closeFullPlayerBtn} onClick={()=>playerDispatch({name: 'closeFullPlayer',value: false})}>V</button>
                <div className={playerStyle.songInfo}>
                    <p className={playerStyle.songName}>{playerState.nowSong.name}</p>
                    <p className={playerStyle.songAuthor}>{playerState.nowSong.author}</p>
                </div>
                <button className={playerStyle.fenxiangBtn}>我</button>
            </header>
            <main className={playerStyle.content}>
                <div className={playerStyle.songImgArea}>
                    <img className={playerStyle.songImg} src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20171221%2F2a14e6b09df846a1908379c06045ba96.jpeg&refer=http%3A%2F%2F5b0988e595225.cdn.sohucs.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1633589967&t=9c0d2d53cf835f0409bea567043ce78d" alt="" />
                </div>

                <div className={playerStyle.btnArea}>
                    <button className={playerStyle.addMyLove}><span className="iconfont icon-xihuan"></span></button>
                    <button ><span className="iconfont icon-icon-"></span></button>
                    <button><span className="iconfont icon-icon--"></span></button>
                    <button className={playerStyle.comment}><span className="iconfont icon-liuyan"></span></button>
                    <button className={playerStyle.more}><span className="iconfont icon-xihuan"></span></button>
                </div>

                <div className={playerStyle.controllerArea}>
                    <div className={playerStyle.progressBarArea}>
                        <span className={playerStyle.nowTime}>00:01</span>
                        <div className={playerStyle.progressBox}>
                            <div className={playerStyle.progressBar}></div>
                        </div>
                        <span className={playerStyle.totalTime}>01:14</span>
                    </div>
                    <div className={playerStyle.btnArea}>
                        <button className={playerStyle.playTypeBtn}>播放模式</button>
                        <button className={playerStyle.lastSongBtn}>上一曲</button>
                        <button className={playerStyle.playBtn}>播放</button>
                        <button className={playerStyle.nextSongBtn}>下一曲</button>
                        <button className={playerStyle.openSongListBtn}>歌曲列表</button>
                    </div>
                </div>

                <button 
                    className={playerStyle.playAndPuaseBtn}
                    onClick={(e) => play(e,playerState,playerDispatch,audioDom)}>
                    <span className={`iconfont ${playerState.play?'icon-ai07':'icon-bofang-tongyong'}`}></span>
                </button>
            </main>

        </div>
    )
}

const play = (e,playerState,playerDispatch,audioDom) => {
    //阻止事件冒泡
    e.stopPropagation()
    console.log(playerState.play)
    !playerState.play?audioDom.play():audioDom.pause()
    playerDispatch({name: 'changePlayState',value: !playerState.play})
}

export default Player