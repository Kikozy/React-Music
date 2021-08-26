
import style from '../../style/hana.module.scss'

function Hana(props) {
    return(
        <div className={style.hanaItem}>
            <span>🌸{props.value}</span>
            <button>删除</button>
        </div>
    )
}
export default Hana