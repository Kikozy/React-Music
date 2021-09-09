import { Component, createContext, createRef, useEffect, useReducer, useRef, useState } from 'react'

import loading from '../../images/loading.gif'
import style from '../../style/module/player/jdt.module.scss'
import {playerReducer} from '../../store/reducer_hook'

import SongList from './SingerPage'


export const PlayContent = createContext()

function Player() {
    //当前播放时长
    const [playTime,changePlayTime] = useState(0)
    //播放总时长
    const [playTotalTime,changePlayTotalTime] = useState(0)
    //载入状态
    const [loadingState,changeLoadingState] = useState(false)
    //进度条宽度
    const [progressWidth,changeProgressWidth] = useState(0)
    const audioRef = useRef()
    const progressRef = useRef()
    const [playerState,playerDispatch] = useReducer(playerReducer,{
        nowSongName: '',
        nowSongLink: '',
        songList: [
            {name: '喵呜',link: 'http://uhv.demos.cn.vc/uploads/voices/20210811/fb9e03183f90f6f8e910b0ce8e8856ec.mp3'}
        ]
    })
    useEffect(()=>{
        //播放地址
        audioRef.current.onloadstart = () => console.log('[onloadstart] 载入请求就绪')
        audioRef.current.ondurationchange =() => {
            console.log('[ondurationchange] 总时长确认',audioRef.current.duration)
            changePlayTotalTime(audioRef.current.duration)
        }
        audioRef.current.onloadedmetadata = () => console.log('音频源数据载入完成')
        //当播放时间更新时
        audioRef.current.ontimeupdate = () => {
            //获取一波当前的播放时间
            let nowTime = parseInt(this.audioRef.current.currentTime)/this.state.playTotalTime
            console.log("???",(nowTime*100).toFixed(2))
            this.syncSetState({jd: (nowTime*100).toFixed(2)})
            if(!this.audioRef.current.ended){
                //console.log('播放中..')
            }
        }
        this.audioRef.current.oncanplay = () => {
            console.log('[oncanplay]载入完毕，可以播放')
        }
        this.audioRef.current.oncanplaythrough= ()=> console.log('[oncanplaythrough] 缓存足够,可以播放')
        this.audioRef.current.onprogress = () => {
            console.log('[onprogress] 主动缓冲中....')
        }
        this.audioRef.current.onwaiting= ()=> {
            this.setState({loadingShow: true})
            console.log('[onwaiting] 网速跟不上了，暂停播放，等待缓冲')
        }
    },[])
    return(
        <div>
            <audio ref={audioRef} controls='controls'></audio>
            <button>暂停</button>
            <button>继续</button>
            <p style={{'color':'red'}}>TIME: {playTime}</p>
            <img src={loading} alt="" style={{display: loadingState?"block":"none"}}/>
            <div  onClick={(e) => this.tpMusicTime(e)} className={style.container}>
                <div ref={progressRef} className={style.skills,style.html} style={{width: progressWidth+"%"}}>{progressWidth}%</div>
            </div>
            <PlayContent.Provider value={playerState,playerDispatch}>
                <SongList></SongList>
            </PlayContent.Provider>
            

        </div>
    )
}

export default Player