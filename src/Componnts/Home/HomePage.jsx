//导入仓库
import { Component} from 'react'
import store from '../../store/index'
import ListItem from './ListItem'


class HomePage extends Component {
    constructor(props){
        super(props)
        this.state = {
            str: '',
            inputValue:'',
            list: []
        }
    }
    componentDidMount(){
        this.setState({
            str: store.getState().str
        })
        store.subscribe(this.awaitStore)
        
    }
    awaitStore = ()=>{
        this.setState(store.getState())
    }
    sendAddList = () => {
        store.dispatch({
            type: 'addList'
        })
    }
    sendChangeInputValue=(e)=>{
        store.dispatch({
            type: 'changeInputValue',
            value: e.target.value
        })
    }

    render(){
        return(
            <>
                <h1>HomePage</h1>
                <p>{this.state.str}</p>
                <input type="text" value={this.state.inputValue} onChange={(e)=>this.sendChangeInputValue(e)}/>
                <button onClick={this.sendAddList}>添加</button>
                {this.state.list.map((item,index) => <ListItem value={{index,item}} key={index+item}></ListItem>)}
                
            </>
        )
    }
}
export default HomePage