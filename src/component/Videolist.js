import React from 'react'
import {Video} from "./Video";
import PlayButton from "./PlayButton";

// Sibling to sibling
// Flow : Now this relation of prop is Sibling to Parent , parent to another sibling

function Videolist({videoProp}) {
    return (
    <> 

    < div className = "video" > {
        videoProp.map((video) => (
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

    </>
    )
}

export default Videolist;