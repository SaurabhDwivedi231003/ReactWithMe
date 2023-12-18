import {Video } from "./component/Video"

function App(){
  return (
    <div>
      <Video title = "React JS Understanding" combo={{ img : "https://placebear.com/160/90" , bgColor : "black"}}/>
      <Video title="Props Understanding" combo={{ img : "https://placebear.com/160/90" , bgColor : "Red"}}/>
    </div>
  )
}

export default App;