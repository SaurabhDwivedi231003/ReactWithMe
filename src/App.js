import { useReducer, useState } from 'react';
import './App.css';
import AddVideo from './components/AddVideo';
import videoDB from './data/data';
import VideoList from './components/VideoList';
// import video from './data/data';

function App() {
  // console.log('render App');

  // const [videos, setVideos] = useState(videoDB);

  const [editableVideo, setEditableVideo] = useState(null);
  
    //   REDUCER
  const [videos , dispatch] = useReducer(videoReducer , videoDB);   // videos is state , videoReducer is a function.
  
  


  function videoReducer(videos,action){       //video is a same state , action is given in the function below
      switch(action.type){ 
        case 'ADD' :                         // 'ADD' is a type of that action
           return [ ...videos , { ...action.payload , id: videos.length + 1}]   // yaha payload me video h neeche function k hisab se

        case 'DELETE' :
           return videos.filter(video=>video.id!==action.payload)  
        
          case 'UPDATE':
            const index = videos.findIndex(v=>v.id===action.payload.id)
            const newVideos = [...videos]
            newVideos.splice(index,1,action.payload)
            setEditableVideo(null);
            return newVideos;

          default:
            return videos  
        }
  }


  function addVideos(video) {
    dispatch({type:'ADD' , payload:video});   // {type:'ADD' , payload:video} this entirely is an action

    // setVideos([...videos, { ...video, id: videos.length + 1 }]);   // earlier we used this
  }


  function deleteVideo(id) {
    dispatch({type:'DELETE' , payload:id})
    // setVideos(videos.filter((video) => video.id !== id)); 
  }
  function editVideo(id) {
    setEditableVideo(videos.find((video) => video.id === id));
  }

  function updateVideo(video) {
      dispatch({type:'UPDATE' , payload:video})
    // const index = videos.findIndex((v) => v.id === video.id);
    // const newVideos = [...videos];  //creating copy of Video
    // newVideos.splice(index, 1, video); // wrna ye splice pura state chnge krdeta
    // // setVideos(newVideos);
  }

  return (
    <div className="App" onClick={() => console.log('App')}>
      <AddVideo addVideos={addVideos} updateVideo={updateVideo} editableVideo={editableVideo}></AddVideo>
      <VideoList deleteVideo={deleteVideo} editVideo={editVideo} videos={videos}></VideoList>
    </div>
  );
}

export default App;
