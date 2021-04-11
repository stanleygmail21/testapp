import {useState, useEffect} from 'react';


const HeartIcon = (props) => {

    const [fill, setFill] = useState('none');
    useEffect(() => {
        setFill(props.fill)
    }, [props.fill]);

    const likeProduct = (e, product) =>{
        e.stopPropagation();
        if(fill === "none"){
            setFill('#6CE7D6');
            props.onLikeProduct(e, product);
            
        }
        else{
            setFill('none');
            props.onDislikeProduct(e, product);
        }

        // props.changeAlert();
        console.log(props);
    }

    return(
        <svg  onClick={ (e) => likeProduct(e, props.product) } xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 28.889 25.58"><path className="heart__icon" d="M26.215,6.494a6.812,6.812,0,0,0-9.636,0L15.267,7.806,13.954,6.494a6.813,6.813,0,1,0-9.636,9.636l1.313,1.313,9.636,9.636L24.9,17.442l1.313-1.313a6.812,6.812,0,0,0,0-9.636Z" transform="translate(-0.823 -2.997)" fill={fill} stroke="#6ce7d6" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3"/></svg>
    )
}

export default HeartIcon;