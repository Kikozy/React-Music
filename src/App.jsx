import {Router,Route,Switch} from 'react-router-dom'
import { createBrowserHistory } from 'history';
import HomePage from './Componnts/Home/HomePage'
import Login from './Componnts/Login/Login'
import OtherPage from './Componnts/Other/OtherPage';
import style from './style/module/app.module.scss'
function App(){
    const history = createBrowserHistory()
    return(
        <>
            <div className={style.container}>
                <p className={style.containerTitle}>什么东西哦</p>
                <ul className={style.tabBar}>
                    <li className={style.item} onClick={()=>history.push('/login')}>redux</li>
                    <li className={style.item} onClick={()=>history.push('/otherpage')}>useReducer</li>
                    <li className={style.item}>其他</li>
                    <li className={style.item}>其他</li>
                </ul>
                <div className={style.content}>
                    <Router history={history}>
                        <Switch>
                            <Route exact path="/" component={HomePage} ></Route>
                            <Route path="/login" component={Login}></Route>
                            <Route path="/otherpage" component={OtherPage}></Route>
                            <Route render={()=><h1 style={{'color':'red'}}>NMSL</h1>}></Route>
                        </Switch>
                    </Router>
                </div>
            </div>
        </>
    )
}

export default App