import React from 'react'
import './PlayButton.css'


export default function PlayButton({ children , onPlay , onPause }) { //Passing onClick function as prop.

    
    // function handleClick(){
    //     // console.log(message);
    //     onSmash();
    // }
    // Asli onClick yha wala hi kaam kr rha , App.js wala onSmash sirf ek naam ki trh act krta
    //App.js ka onSmash sirf value pass krne k kaam ata h , Real action PlayButton.js ka onClick perform krta h.
    

    // Dont use below Approch it is just to explain you.

    let playing = true; 
    function handleClick(e){

         e.stopPropagation(e);

         if(playing) onPlay();
         else onPause();
         playing = !playing;

}

  return (
    <button onClick={handleClick}>
            {children}                    
            {/* ye 'children' default prop h , */}
    </button>
  )
}
