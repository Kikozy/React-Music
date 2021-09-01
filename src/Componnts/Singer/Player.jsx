import { Component, createRef } from 'react'

import loading from '../../images/loading.gif'
import style from '../../style/module/player/jdt.module.scss'
class Player extends Component {
    constructor(props){
        super(props)
        this.audioRef = createRef()
        this.jdt = createRef()
        this.jsq = null
        this.state={
            //歌曲当前播放的时间
            playTime: 0,
            //歌曲总时长
            playTotalTime: 0,
            //加载动画显示
            loadingShow: false,
            jd: 0,
            miao: 0
        }
    }

    componentDidMount(){
        this.audioRef.current.onplay= ()=> this.setProgress()
        //播放地址
        this.audioRef.current.src = 'https://s21.aconvert.com/convert/p3r68-cdx67/cjq85-xdh0u.mp3'
        this.audioRef.current.onloadstart = () => console.log('[onloadstart] 载入请求就绪')
        this.audioRef.current.ondurationchange =() => {
            console.log('[ondurationchange] 总时长确认',this.audioRef.current.duration)
            this.setState({playTotalTime: this.audioRef.current.duration})
        }
        this.audioRef.current.onloadedmetadata = () => console.log('音频源数据载入完成')
        //当播放时间更新时
        this.audioRef.current.ontimeupdate = () => {
            //获取一波当前的播放时间
            // let nowTime = parseInt(this.audioRef.current.currentTime)
            // //通过公式改变进度条的进度
            // this.setState({
            //     playTime: nowTime,
            //     loadingShow: false,
            //     jd: ((this.state.playTime/this.state.playTotalTime)*100).toFixed(2)
            // })
            // console.log(this.state.jd)
            // if(!this.audioRef.current.ended){
            //     //console.log('播放中..')
            // }
        }
        this.audioRef.current.oncanplay = () => console.log('[oncanplay]载入完毕，可以播放')
        this.audioRef.current.oncanplaythrough= ()=> console.log('[oncanplaythrough] 缓存足够,可以播放')
        this.audioRef.current.onprogress = () => console.log('[onprogress] 主动缓冲中....')
        this.audioRef.current.onwaiting= ()=> {
            this.setState({loadingShow: true})
            console.log('[onwaiting] 网速跟不上了，暂停播放，等待缓冲')
        }
    }
    syncSetState = (state)=> {
        return new Promise((resolv)=>{
            this.setState(state,resolv)
        })
    }
    /*
    1. 获取鼠标在进度条中的具体位置
    2. 把鼠标的位置换算成百分比，根据进度条的宽度换算
    3. 用百分比结果去计算具体的音乐TP时间
    */
    tpMusicTime = async (e)=> {
        this.setProgress()
        //鼠标点击的位置/盒子总长度 = 进度条百分比 然后 * 歌曲总时长 = 要跳转的时间
        let tpTime = (e.clientX/300)*this.state.playTotalTime
        //计算进度条要显示的百分比
        let progressLoction = (tpTime/this.state.playTotalTime*100).toFixed(2)
        //改变进度条的显示进度
        await this.syncSetState({jd: progressLoction})
        //让播放器跳转到指定的时间上去
        this.audioRef.current.currentTime = tpTime
    }

    setProgress = () => {
        //计算每次增加的进度
        let tickAdd = (300/this.state.playTotalTime).toFixed(2)
        clearInterval(this.jsq)
        this.jsq = setInterval(()=>{
            console.log(this.state.jd)
            this.setState({jd: (Number(this.state.jd) + Number(tickAdd)).toFixed(2)})
        },1000)
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
                    <div ref={this.jdt} className={style.skills,style.html} style={{width: this.state.jd+"px"}}>{this.state.jd}%</div>
                </div>
                <p>实际: {this.state.miao}</p>
        </div>
        )
    }
}

export default Player