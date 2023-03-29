import './ImageHeader.css'

const ImageHeader = props => {



    return (
        <div className="imageHeader">
            <h1 className="onImageHeaderText">{props.onImageText}</h1>
            <img src={props.image} alt="imageHeader"/>
        </div>
    )
}


export default ImageHeader;
