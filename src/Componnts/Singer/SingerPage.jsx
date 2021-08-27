import { useEffect,useRef} from "react"


function audioStop(audio){
    audio.current.pause()
}
function audioPlay(audio) {
    audio.current.play()
}

function SingerPage() {
    const musicAudio = useRef(null)
    useEffect(()=>{
        console.log(musicAudio.current)
        musicAudio.current.src = 'https://s19.aconvert.com/convert/p3r68-cdx67/ulnyc-eqikb.mp3'
    },[])


    return(
        <div>
            <audio ref={musicAudio} src='http://ting6.yymp3.net:82/yymp3/01cn/03new/tangle/001.mp3'></audio>
            <button onClick={() => audioStop(musicAudio)}>暂停</button>
            <button onClick={() => audioPlay(musicAudio)}>继续</button>
        </div>
    )
}
export default SingerPage