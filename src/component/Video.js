import './Video.css'

function Video({ title, views, time, img, channel, varified, id , children}) {

    return (
        <> 
        < div className = 'container' > 
        
            {/* <div className='image'>
            <img src={img} alt="Katherine Johnson"/>
            </div> */}

        <div className={title}>
            {title}
        </div>

        <div className={channel}>
            {channel} { varified && <span>&#10003;</span>  }
        </div>

        <div className={views}>
            {views} <span>.</span> {time}
        </div>

        <div>
            {children}
        </div>

    </div>
</>
    )
}

export { Video };