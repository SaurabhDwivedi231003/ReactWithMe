import {Video} from "./component/Video"
import './App.css'
import videoData from './data/data'

function App() {

  // Hum video ka data aise bhi de skte hain but hum file (./data/data) me organise krke laa rhe both are same.

    // let videoData = [    //Rendering collection
    //     {
    //         id : 1,
    //         title: "REACT LEARNING",
    //         // img: "https://placebear.com/160/90",
    //         views: "100k",
    //         time: "1 month ago",
    //         channel: "XYZ Blogs",
    //         varified : true 

    //     }, {
    //         id : 2,
    //         title: "JS LEARNING",
    //         // img: "https://placebear.com/160/90",
    //         views: "50k",
    //         time: "2 month ago",
    //         channel: "XYZ Blogs",
    //         varified : false
    //     }, {
    //         id : 3,
    //         title: "NODE LEARNING",
    //         // img: "https://placebear.com/160/90",
    //         views: "10k",
    //         time: "2 month ago",
    //         channel: "MNQ Blogs" ,
    //         varified : true 

    //     }
    // ];
    // can use crypto.randomUUID or UUID for id heneration in frontend applications.

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
                key={video.id} //important to pass key(everytime it should be unique value ) , when rendering list. 
                />)
              } 
             {/* <Video  varified={false}  title="Props Understanding"  views="100k"  time="1 Year ago"  channel="SEEnUs_arTs"  img="https://placebear.com/160/90"/>  */}
                
             {/* <Video {...obj} /> */}
              </div>
        </div>
    )
}

export default App;
