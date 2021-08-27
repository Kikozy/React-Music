function InfoItem(props) {
    return(
        <>
            <p onClick={()=>props.value.infoDispatch({type: 'delInfo',value: props.value.index})}>{props.value.item}</p>
        </>
    )
}


export default InfoItem