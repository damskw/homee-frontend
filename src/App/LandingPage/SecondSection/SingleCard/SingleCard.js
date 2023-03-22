import './SingleCard.css'

const SingleCard = props => {

    return (
        <div className="singleCard">
            <img src={props.image} alt="not found"></img>
            <h2>{props.header}</h2>
            <p>{props.text}</p>
        </div>

    )
}


export default SingleCard;
