import {Router,Route, Switch} from 'react-router-dom'
import { createBrowserHistory } from 'history';
import HomePage from './Componnts/Home/HomePage'
import SingerPage from './Componnts/Singer/SingerPage'
import TopListPage from './Componnts/TopList/TopListPage'
import SearchPage from './Componnts/Search/SearchPage'

import style from './Music.module.scss'
function Music() {
    const history = createBrowserHistory()
    return(
        <div className={style.container}>
            <header className={style.musicHeader}>主页</header>
            <nav className={style.tabBar}>
                <ul className={style.tabBarList}>
                    <li className={style.tabBarItem} onClick={()=>history.push('/search')}>搜索</li>
                    <li className={style.tabBarItem} onClick={()=>history.push('/topList')}>排行</li>
                    <li className={style.tabBarItem} onClick={()=>history.push('/singer')}>歌手</li>
                    <li className={style.tabBarItem} >其他</li>
                </ul>
            </nav>
            <div className={style.content}>
                <Router history={history}>
                    <Switch>
                        <Route exact path="/" component={HomePage}></Route>
                        <Route path="/search" component={SearchPage}></Route>
                        <Route path="/topList" component={TopListPage}></Route>
                        <Route path="/singer" component={SingerPage}></Route>
                    </Switch>
                </Router>
            </div>
        </div>

    )
}

export default Music