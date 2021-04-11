import React from 'react';
const { FaCaretSquareRight, FaCaretSquareLeft } = require("react-icons/fa");


class ImageSlider extends React.Component{

    state = {
        images: []
    }

    componentDidMount(){
        // console.log(this.props.children);
    }

    onShift = () => {
        const node = document.querySelector('.product__slider');
        console.log(this.props.children);
        node.style.transform = `translateX(-${node.offsetWidth}rem)`;
    }

    displayChildren(){
        return this.props.children.map(element => {
            return <div className="product__slider">{element}</div>
        });
    }

    render(){
        return(
            <div className="product__slider">
                <div onClick={this.onShift} className="product__slider--arrow product__slider--arrow__left"> <FaCaretSquareLeft/> </div>
                {this.displayChildren()}
                <div className="product__slider--arrow product__slider--arrow__right"> <FaCaretSquareRight/> </div>
            </div>
        )
    }
}

export default ImageSlider;