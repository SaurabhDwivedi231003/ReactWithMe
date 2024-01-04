import React from 'react'
import './PlayButton.css'
import {useState} from 'react';


export default function PlayButton({ children , onPlay , onPause }) { 

      // console.log("PlayButton")

     const  [playing , setPlaying] = useState(false);

     function handleClick(e){
          e.stopPropagation(e);

          if(setPlaying) onPause();
          else onPlay();
          setPlaying(!playing);
     }

  return (
    <button onClick={handleClick}>
            {children} : {playing ? '>' : '||'}                  
    </button>
  )
}
