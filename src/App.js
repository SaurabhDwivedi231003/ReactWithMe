import {Video} from "./component/Video"
import './App.css'
import videoData from './data/data'
import PlayButton from "./component/PlayButton";

function App() {


    return (
        <div className="App">
            <h1 className="heading">VIDEOS</h1>

        <div className="video">
          
          {  videoData.map(video =><Video
                varified={video.varified}
                title={video.title}
                views={video.views}
                time={video.time}
                channel={video.channel}
                img={video.img}
                id={video.id}
                key={video.id} 
                >
                {/* <PlayButton
                  onPlay={()=>console.log("Playyyy" , video.title)}
                  onPause={()=>console.log("Pauseee", video.title)}
                >
                 {video.title} 
                </PlayButton> */}
         </Video>
        )} 

         </div>
         <div>
         {/* <PlayButton message="play-message" onSmash={()=>console.log("Playyyy")}> Play </PlayButton>
         <PlayButton message="pause-message" onSmash={()=> alert("Pauseeee")}> Pause </PlayButton> */}

         <PlayButton message="play-message" onPlay={()=>console.log("Playyyy")} onPause={()=>console.log("Pauseee")}> Play </PlayButton>

         <div/>
         </div>
            
        </div>
    )
}

export default App;
