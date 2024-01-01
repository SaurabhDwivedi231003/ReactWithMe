import React, { useState } from "react";
import { Video } from "./component/Video";
import "./App.css";
import videoData from "./data/data";
import PlayButton from "./component/PlayButton";
import Counter from "./component/Counter.js";

function App() {

  const [videos, setVideos] = useState(videoData);

  return (
    <div className="App">
      <div className="heading">
        <button onClick={() => { setVideos((prevVideos) => [
              ...prevVideos,  {
                id: prevVideos.length + 1,
                title: "REACT LEARNING",
                img: "https://placebear.com/160/90",
                views: "100k",
                time: "1 month ago",
                channel: "XYZ Blogs",
                varified: true,
              },
            ]);
          }}>
          Add Video
        </button>
      </div>

      <div className="video">
        {videos.map((video) => (
          <Video
            varified={video.varified}
            title={video.title}
            views={video.views}
            time={video.time}
            channel={video.channel}
            img={video.img}
            id={video.id}
            key={video.id}
          >
            <PlayButton
              onPlay={() => console.log("Playyyy", video.title)}
              onPause={() => console.log("Pauseee", video.title)}
            >
              {video.title}
            </PlayButton>
          </Video>
        ))}
      </div>
      <Counter></Counter>
    </div>
  );
}

export default App;
