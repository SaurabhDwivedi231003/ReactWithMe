import React, {useState} from "react";
import "./App.css";
import videoData from "./data/data";
import AddVideo from "./component/AddVideo.js";
import Videolist from "./component/Videolist.js";

function App() {

    const [videos, setVideos] = useState(videoData);

    function addVideos(videoComing) {  //ye function 'AddVideo' me jyega , waha aur data add hoga , waha se data iss function me save ho jyega
                                    // waha se iss function me jab data save ho jyega fir hum , iss data koVidelist.js me as a prop bhj dege
                                    // As a prop bhjne k baad videolist.js iss data ko display kara dega. 
        setVideos([
            ...videos, {
                ...videoComing, id: videos.length + 1
            }
        ]);
    }

    return (
        <div className="App">
            <AddVideo setVideosProp={addVideos}></AddVideo>
            <Videolist videoProp={videos}></Videolist>
        </div>
    );
}

export default App;
