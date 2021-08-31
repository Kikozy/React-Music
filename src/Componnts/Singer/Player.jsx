import { Component, createRef } from 'react'

import loading from '../../images/loading.gif'
import style from '../../style/module/player/jdt.module.scss'
class Player extends Component {
    constructor(props){
        super(props)
        this.audioRef = createRef()
        this.jdt = createRef()
        this.state={
            //歌曲当前播放的时间
            playTime: 0,
            //歌曲总时长
            playTotalTime: 0,
            //加载动画显示
            loadingShow: false,
            jd: 0
        }
    }
    componentDidMount(){
        //播放地址
        this.audioRef.current.src = 'https://s21.aconvert.com/convert/p3r68-cdx67/pqjua-ztfbn.mp3'
        this.audioRef.current.onloadstart = () => console.log('[onloadstart] 载入请求就绪')
        this.audioRef.current.ondurationchange =() => {
            console.log('[ondurationchange] 总时长确认',this.audioRef.current.duration)
            this.setState(() => {
                return {
                    playTotalTime: this.audioRef.current.duration
                }
            })
        }
        this.audioRef.current.onloadedmetadata = () => console.log('音频源数据载入完成')
        this.audioRef.current.ontimeupdate = () => {
            let nowTime = parseInt(this.audioRef.current.currentTime)
            this.setState(() => {
                return {
                    playTime: nowTime,
                    loadingShow: false,
                    jd: ((this.state.playTime/this.state.playTotalTime)*100).toFixed(2)
                }
            })
            if(!this.audioRef.current.ended){
                // console.log('播放中..')
            }
        }
        this.audioRef.current.oncanplay = () => console.log('[oncanplay]载入完毕，可以播放')
        this.audioRef.current.oncanplaythrough= ()=> console.log('[oncanplaythrough] 缓存足够,可以播放')
        this.audioRef.current.onprogress = () => console.log('[onprogress] 主动缓冲中....')
        this.audioRef.current.onwaiting= ()=> {
            this.setState(() => {
                return {
                    loadingShow: true
                }
            })
            console.log('[onwaiting] 网速跟不上了，暂停播放，等待缓冲')
        }
        /*
            1. 获取鼠标在进度条中的具体位置
            2. 把鼠标的位置换算成百分比，根据进度条的宽度换算
            3. 用百分比结果去计算具体的音乐TP时间
         */
    }
    tpMusicTime = (e)=> {
        console.log((e.clientX/300)*this.state.playTotalTime)
        this.audioRef.current.currentTime = (e.clientX/300)*this.state.playTotalTime
    }


    render(){
        return(
            <div>
                <audio ref={this.audioRef} controls='controls'></audio>
                <button >暂停</button>
                <button >继续</button>
                <p style={{'color':'red'}}>TIME: {this.state.playTime}</p>
                <img src={loading} alt="" style={{display: this.state.loadingShow?"block":"none"}}/>
                <div  onClick={(e) => this.tpMusicTime(e)} className={style.container}>
                    <div ref={this.jdt} className={style.skills,style.html} style={{width: this.state.jd+"%"}}>{this.state.jd}%</div>
                </div>
        </div>
        )
    }
}

export default Player