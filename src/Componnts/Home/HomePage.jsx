//导入仓库
import { Component} from 'react'
import store from '../../store/index'



class HomePage extends Component {
    constructor(props){
        super(props)
        this.state = {
            str: ''
        }
    }
    componentDidMount(){
        this.setState({
            str: store.getState().str
        })
        store.subscribe(this.awaitStore)
        
    }
    awaitStore = ()=>{
        this.setState({
            str: store.getState().str
        })
    }
    sendChangeStr = () => {
        store.dispatch({
            type: 'changeStr',
            value: '改变成功了！'
        })
    }

    render(){
        return(
            <>
                <h1>HomePage</h1>
                <p>{this.state.str}</p>
                <button onClick={this.sendChangeStr}>改变一下?</button>
            </>
        )
    }
}
export default HomePage