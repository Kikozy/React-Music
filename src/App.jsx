import { createContext ,useReducer, useEffect} from "react"
import { Switch,Route ,BrowserRouter,Link} from "react-router-dom"
import { createBrowserHistory } from "history"
import { playerReducer } from "./store/reducer_hook"
import PlayerBar from './Componnts/Player/PlayerBar'
import Player from "./Componnts/Player/Player"
import HomePage from "./Componnts/Home/HomePage"
import SingerPage from './Componnts/Singer/SingerPage'

export const playerContent = createContext()
const history = createBrowserHistory()

function App() {
    const {playerState,playerDispatch} = usePlayerStore()
    useCreatd(playerDispatch)
    return(
        <div className="app">
            <main className='content'>
                <BrowserRouter history={history}>
                    <Switch>
                        <Route path='/' exact component={HomePage}></Route>
                        <Route path='/singerpage' component={SingerPage}></Route>
                        <Route render={()=><h1>404</h1>} ></Route>
                    </Switch>
                </BrowserRouter>
            </main>
            <footer>
                
                <playerContent.Provider value={{audioDom,playerState,playerDispatch}}>
                    <Player></Player>
                    <PlayerBar></PlayerBar>
                </playerContent.Provider>
            </footer>
        </div>
    )
}
let audioDom = document.createElement('audio')
audioDom.src = 'http://uhv.demos.cn.vc/uploads/voices/20210811/fb9e03183f90f6f8e910b0ce8e8856ec.mp3'

function usePlayerStore() {
    const [playerState,playerDispatch] = useReducer(playerReducer,{
        audioDom: {},
        //播放状态 播放/暂停
        play: false,
        //图标
        playIcon: {play:'icon-bofang-tongyong',pause: 'icon-ai07'},
        //当前播放歌曲信息
        nowSong: {
            name: 'Release My Soul',
            author: '澤野弘之',
            link: ''
        },
        //歌单
        songList: [
            {name: '喵呜',link: 'http://uhv.demos.cn.vc/uploads/voices/20210811/fb9e03183f90f6f8e910b0ce8e8856ec.mp3'}
        ],
        //全屏播放器
        playerFull: false,
        progressWidth: 0
    })
    return {playerState , playerDispatch}
}
function useCreatd(playerDispatch) {
    useEffect(()=>{
        audioDom.ontimeupdate = () => {
            //获取一波当前的播放时间
            let nowTime = parseInt(audioDom.currentTime)/audioDom.duration
            playerDispatch({
                name: 'changeProgressWidth',
                value: (nowTime*100).toFixed(2)
            })
            //console.log((nowTime*100).toFixed(2))
        }
    },[])
    useEffect(()=>{
        audioDom.onended=()=>{
            console.log('播放完毕')
            audioDom.pause()
        }
    },[])
}


export default App


