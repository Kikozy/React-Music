import { createContext ,useEffect,useReducer} from 'react';
import {Router,Route, Switch} from 'react-router-dom'
import { createBrowserHistory } from 'history';
import HomePage from './Componnts/Home/HomePage'
import SingerPage from './Componnts/Singer/SingerPage'
import TopListPage from './Componnts/TopList/TopListPage'
import SearchPage from './Componnts/Search/SearchPage'
import PlayerBar from './Componnts/Player/PlayerBar'
import { playerReducer } from './store/reducer_hook'
import style from './Music.module.scss'
import Player from './Componnts/Player/Player';


export const MusicContent = createContext()
const routeConfig = [
    {
        path: '/',
        component: HomePage,
        expect: true
    },
    {
        path: '/search',
        component: SearchPage,
    },
    {
        path: '/toplistPage',
        component: TopListPage,
    },
    {
        path: '/singer',
        component: SingerPage
    }
]
function Music() {
    const [playerState,playerDispatch] = useReducer(playerReducer,{
        play: false,
        playIcon: {play:'icon-bofang-tongyong',pause: 'icon-ai07'},
        nowSongName: '',
        nowSongLink: '',
        songList: [
            {name: '喵呜',link: 'http://uhv.demos.cn.vc/uploads/voices/20210811/fb9e03183f90f6f8e910b0ce8e8856ec.mp3'}
        ]
    })
    useEffect(()=>{
        console.log('woc',playerState)
    },[])
    const history = createBrowserHistory()
    return(
        <div className={style.container}>
        <Router routes={routeConfig} history={history}>
            <header className={style.musicHeader}>主页</header>
            <nav className={style.tabBar}>
                <ul className={style.tabBarList}>
                    <li className={style.tabBarItem} onClick={()=>history.push('/search')}>搜索</li>
                    <li className={style.tabBarItem} onClick={()=>history.push('/topList')}>排行</li>
                    <li className={style.tabBarItem} onClick={()=>history.push('/singer')}>歌手</li>
                    <li className={style.tabBarItem} onClick={()=>history.push('/player')}>其他</li>
                </ul>
            </nav>
            <div className={style.content}>
            </div>
            <MusicContent.Provider value={{playerState,playerDispatch}}>
                <PlayerBar></PlayerBar>
            </MusicContent.Provider>
        </Router>
        </div>

    )
}

export default Music