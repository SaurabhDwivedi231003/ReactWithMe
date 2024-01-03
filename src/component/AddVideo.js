import React, {useState} from 'react'
import './AddVideo.css'
import {Video} from './Video'


// Yha pe hume state Uplifting krni h , mtlb yha form se data leke video componenet me bhjna
// CHILD TO PARENT

// from 4:13:00

function AddVideo({setVideosProp}) {    // passing function as a props for handling submit.

    const setInitialState = {time: "1 month ago", channel: "XYZ Blogs", varified: true ,title:'' , views:''}

    const [video, setVideo] = useState(setInitialState);   // ye default values hain state k liye


    function handleSubmit(e) {
        e.preventDefault();
        setVideosProp(video); // ye function as a prop aa rha h App.js se taki , main video me sara change ho ske
        setVideo(setInitialState); // set video function of the state mentioned above
    }

    function handleChange(e) {
        setVideo({ ...video, [e.target.name]: e.target.value })  // ye sara changes lelega input name k according 
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

// steps
// 1. Phle input banao aur handle change se data lo.
// 2. Submit bnao aur handleSubmit function se data submit kro
// 3. video , setVideo state banao , aur kuch initial values dedo kuuki yha hum sirf title , views input krwa rhe user se aur 
//      baki value hum default de rhe.
// 4. Ab kuuki hum chahte hain ye data parent compononet yha video me jye toh waha pe hum "addVideos" naam ka function bnayege
//     aur "addVideos" naam k fucntion ko 'setVideoProp' naam k prop me se paas krdege.
// 5. Last me HandleSubmit k andar "setVideosProp(video)" ye krne se sare changes ho jyege hamare.
