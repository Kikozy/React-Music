import { Component } from "react";
import store from "../../store";

class ListItem extends Component{
    constructor(props){
        super(props)
        this.state= {
        }
    }

    delList = (index) => {
        store.dispatch({type: 'delList',value: index})
    }
 
    render(){
        return(
            <div>
                <span>{this.props.value.item}</span>
                <button onClick={()=>{this.delList(this.props.value.index)}}>删除</button>
            </div>
            
        )
    }
}

export default ListItem