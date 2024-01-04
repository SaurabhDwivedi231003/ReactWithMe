import React, {useState} from 'react'
import './AddVideo.css'

//Yaha 'AddVideo' se data leke parent 'App' ko bhj rhe then , Parent se dusre sibling 'Videolist' ko bghhj rhe to diaplay data 

function AddVideo({setVideosProp}) {

    const setInitialState = {time: "1 month ago", channel: "XYZ Blogs", varified: true ,title:'' , views:''}

    const [video, setVideo] = useState(setInitialState); 


    function handleSubmit(e) {
        e.preventDefault();
        setVideosProp(video);     //ye App.js se aya h data save krne k liye 
        setVideo(setInitialState); 
    }

    function handleChange(e) {
        setVideo({ ...video, [e.target.name]: e.target.value })  
    }

    return (
        <form>

            <input type="text" name='title' onChange={handleChange} value={video.title} placeholder='Title'/>
            <input type="text" name="views" onChange={handleChange} value={video.views} placeholder='Views'/>

            <div className="heading">
                <button onClick={handleSubmit}> Add Video </button>
            </div>

        </form>
    )
}

export default AddVideo;

