import './MainPanelSecondSection.css'
import MuiBoxWide from "./MuiBoxWide/MuiBoxWide";
import React, {useEffect, useState} from "react";
import {authenticate} from "../../../../../Authenticate/authenticate";
import {dataHandler} from "../../../../../Api/dataHandler";
import SingleActivity from "./SingleActivity/SingleActivity";


const MainPanelSecondSection = props => {

    const blueBackground = "linear-gradient(195deg, rgb(73, 163, 241), rgb(26, 115, 232))";
    const yellowBackground = "linear-gradient(195deg, rgb(235 255 122), rgb(245 203 49))";
    const redBackground = "linear-gradient(195deg, rgb(236, 64, 122), rgb(216, 27, 96))";
    const information = "INFORMATION";
    const important = "IMPORTANT";
    const reminder = "REMINDER";
    const [pageNumber, setPageNumber] = useState(1);
    const [numberOfPages, setNumberOfPages] = useState(1);
    const [activitiesList, setActivitiesList] = useState([]);
    const activitiesPerPage = 5;

    useEffect(() => {
        const user = authenticate.getUser();

        async function fetchDeviceActivities() {
            const activities = await dataHandler.getActivitiesForUserDevices(user.id);
            setNumberOfPages(Math.ceil(activities.length / activitiesPerPage));
            const start = (pageNumber - 1) * activitiesPerPage;
            const end = start + activitiesPerPage;
            const newList = activities.slice(start, end).map((a) => {
                let activityBackground = redBackground;
                switch (a.activityType) {
                    case information:
                        activityBackground = blueBackground;
                        break;
                    case important:
                        activityBackground = yellowBackground;
                        break;
                    case reminder:
                        activityBackground = redBackground;
                        break;
                    default:
                        activityBackground = redBackground;
                }
                return <SingleActivity key={a.id} date={a.date} background={activityBackground} description={a.description}
                                       deviceName={a.deviceName}/>;
            });
            setActivitiesList(newList);
        }

        fetchDeviceActivities()
    }, [pageNumber])

    const handlePageClick = (index) => {
        setPageNumber(index);
    }

    const pagination = () => {
        const pages = [];
        for (let i = 1; i <= numberOfPages; i++) {
            pages.push(<h1 className={i === pageNumber ? 'pageNumber active' : 'pageNumber'}
                           onClick={() => handlePageClick(i)} key={i}>{i}</h1>)
        }

        return (
            <div className="pagination">
                {pages}
            </div>
        )
    }

    return (
        <div className="mainPanelSectionSection">
            <MuiBoxWide bottom={pagination()} content={activitiesList} title="Recent activities"/>
        </div>
    )
}

export default MainPanelSecondSection;
