import './SingleCard.css'

const SingleCard = props => {

    return (
        <div className="singleCard">
            <div className="singleCardTop">
                <img src={props.image} alt="not found"></img>
                <h2>{props.header}</h2>
            </div>
            <div className="singleCardBottom">
                <p>{props.text}</p>
            </div>
        </div>

    )
}


export default SingleCard;
