import './Video.css'

function Video({title , views , time , img , channel , varified , id}) {   //We would have written props and used it by props.title , props.img but its not a good way
  
    // let channelJSX;
    // if(varified){ channelJSX = <div className={channel}> {channel}<span>&#10003;</span></div> }
    // else {  channelJSX = <div className={channel}> {channel} </div> }
    
    
    return(
        <>
        <div className='container'>
            
        <div>
         <img src={`https://picsum.photos/180/120/?blur=${id}`} alt="Katherine Johnson" />
        </div>

        <div className={title} >
            {title}
        </div>

        {/* {varified ? <div className={channel}> {channel}<span>&#10003;</span> </div> : <div className={channel}> {channel}</div>} */}
        {/* or */}
        {/* <div className={channel}> {channel} {varified ? <span>&#10003;</span> : null} </div> */}
        {/* or */}
        <div className={channel}> {channel} {varified && <span>&#10003;</span>} </div>


        
        <div className={views}> 
        {views} <span>.</span> {time}
        </div>


        </div>   
        </>
        )
    }


export {Video};