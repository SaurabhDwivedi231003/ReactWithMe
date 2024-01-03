import React, {useState} from "react";
import {Video} from "./component/Video";
import "./App.css";
import videoData from "./data/data";
import PlayButton from "./component/PlayButton";
import AddVideo from "./component/AddVideo.js";

function App() {

    const [videos, setVideos] = useState(videoData); 

  
    function addVideos(videoComing){
      setVideos([...videos, { ...videoComing, id: videos.length + 1 }]);
    }
  

    return (
        <div className="App">
            <AddVideo setVideosProp={addVideos}></AddVideo>   
            {/* addVideos naam ka function as a prop paas krdiya taki submit krne pe yha update ho ske */}

            <div className="video">
                {
                    videos.map((video) => (
                        <Video
                            varified={video.varified}
                            title={video.title}
                            views={video.views}
                            time={video.time}
                            channel={video.channel}
                            img={video.img}
                            id={video.id}
                            key={video.id}>
                            <PlayButton
                                onPlay={() => console.log("Playyyy", video.title)}
                                onPause={() => console.log("Pauseee", video.title)}>
                                {video.title}
                            </PlayButton>
                        </Video>
                    ))
                }
            </div>
        </div>
    );
}

export default App;
