import './Video.css'

function Video({title , combo}) {   //We would have written props and used it by props.title , props.img but its not a good way
    let bg = 'ReactTut'
    console.log(title);
    return(
        <> 

       <div className='pic'>
        <img src={combo.img} alt="Katherine Johnson" />
        </div>
        <div className={bg} style={{backgroundColor : combo.bgColor , margin : "10px 0px",width : '20rem'}}>
            {title}
       </div>


        </>
        )
    }

export {Video};

// combo k andar do cheezen thi issiliye combo.img , combo.bgColor
// ye sab alg alg tareeke hain choose anyone
// https://react.dev/learn/passing-props-to-a-component
