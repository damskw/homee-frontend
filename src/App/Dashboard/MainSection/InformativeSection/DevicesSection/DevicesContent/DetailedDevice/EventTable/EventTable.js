import './EventTable.css';
import SingleEvent from "./SingleEvent/SingleEvent";
import {dataHandler} from "../../../../../../../Api/dataHandler";


const EventTable = props => {

    const removeEvent = async (eventId) => {
        props.setFutureEvents(props.futureEvents.filter(e => e.id !== eventId));
        props.setPastEvents(props.pastEvents.filter(e => e.id !== eventId));
        await dataHandler.deleteSingleEvent(eventId);
    }

    const pastEvents = props.pastEvents.map((e) => {
        return (
            <SingleEvent key={e.id} e={e} onClick={() => removeEvent(e.id)} />
        );
    });

    const futureEvents = props.futureEvents.map((e) => {
        return (
            <SingleEvent key={e.id} e={e} onClick={() => removeEvent(e.id)} />
        );
    });

    return (
        <div className="eventTableWrapper">
            <h2>Future events</h2>
            <table className="eventTable">
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Notification</th>
                    <th>Notification time</th>
                    <th>Scheduled at</th>
                    <th></th>
                </tr>
                </thead>
                <tbody>
                {futureEvents}
                </tbody>
            </table>
            <h2>Past events</h2>
            <table className="eventTable">
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Notification</th>
                    <th>Notification time</th>
                    <th>Scheduled at</th>
                    <th></th>
                </tr>
                </thead>
                <tbody>
                {pastEvents}
                </tbody>
            </table>
        </div>
    );
};

export default EventTable;