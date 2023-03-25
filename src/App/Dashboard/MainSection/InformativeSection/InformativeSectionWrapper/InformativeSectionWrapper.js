import './InformativeSectionWrapper.css'
import ImageHeader from "./ImageHeader/ImageHeader";
import InformativeContent from "./InformativeContent/InformativeContent";

const InformativeSectionWrapper = props => {



    return (
        <div className="informativeSectionWrapper">
            <ImageHeader image={props.topImage} onImageText={props.onImageText}/>
            <InformativeContent content={props.content}/>
        </div>
    )
}


export default InformativeSectionWrapper;
