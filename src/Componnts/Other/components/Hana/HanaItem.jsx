
import style from '../../style/hana.module.scss'

function Hana(props) {
    return(
        <div className={style.hanaItem}>
            <span className={style.hanaNa}>🌸{props.value.item}</span>
            <button className={style.addBtn} onClick={()=>props.value.dispatch({type: 'delHana',value: props.value.index})}>删除</button>
        </div>
    )
}
export default Hana