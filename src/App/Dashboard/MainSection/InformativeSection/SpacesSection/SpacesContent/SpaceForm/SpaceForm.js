import './SpaceForm.css'
import {useNavigate} from "react-router-dom";
import {authenticate} from "../../../../../../Authenticate/authenticate";
import {dataHandler} from "../../../../../../Api/dataHandler";
import DashboardContentButton from "../../../../../Buttons/DashboardContentButton/DashboardContentButton";
import arrowBack from '../../../../../../../assets/icons/arrow_back.png'
import {useEffect, useState} from "react";

const SpaceForm = props => {

    const navigate = useNavigate();
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get('spaceId');
    const [space, setSpace] = useState(null);


    useEffect (() => {
        async function fetchSpace() {
            const spaceApi = await dataHandler.getSingleSpace(id);
            setSpace(spaceApi);
        }
        if (id) {
            fetchSpace();
        }
    }, [id]);

    async function onSubmitNewSpace(e) {
        e.preventDefault();
        const user = authenticate.getUser();
        const data = Object.fromEntries(new FormData(e.target).entries());
        data.userId = user.id;
        await dataHandler.createNewSpace(data);
        navigate('/dashboard/spaces')
    }

    async function onSubmitEdit(e) {
        e.preventDefault();
        const data = Object.fromEntries(new FormData(e.target).entries());
        data.id = id;
        await dataHandler.updateSpace(data);
        navigate('/dashboard/spaces')
    }

    const onArrowClick = () => {
        navigate('/dashboard/spaces');
    }


    return (
        <div className="spaceFormWrapper">
            <div className="spaceFormHeader">
                <div className="arrowBack" onClick={onArrowClick}>
                    <img rel="icon" src={arrowBack} alt="arrowBack"/>
                </div>
                <div className="spaceFormTitle">
                    {space ? <h1>Edit space</h1> : <h1>Create new space</h1>}
                </div>
            </div>
            <div className="spaceForm">
                <form onSubmit={space ? onSubmitEdit : onSubmitNewSpace}>
                    <input required type="text" defaultValue={space?.name || ""} name="name" placeholder={space ? space.name : "Name"}/>
                    <input required type="text" defaultValue={space?.about || ""} name="about" placeholder={space ? space.about : "About"}/>
                    <DashboardContentButton text="Submit"/>
                </form>
            </div>

        </div>
    )
}


export default SpaceForm;
