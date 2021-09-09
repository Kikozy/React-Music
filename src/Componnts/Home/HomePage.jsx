
function HomePage(props) {

    return(
        <div>
            <h1>HomePage</h1>
            <p onClick={() => props.history.push('/singerpage')}>点击</p>
        </div>
    )
}

export default HomePage