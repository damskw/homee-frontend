import React, {useEffect, useState} from 'react';
import './HeaderRightSection.css';
import HeaderSearchBar from './HeaderSearchBar/HeaderSearchBar';
import bellIcon from '../../../../../assets/icons/bell.png';
import {dataHandler} from "../../../../Api/dataHandler";
import {authenticate} from "../../../../Authenticate/authenticate";

const HeaderRightSection = (props) => {
    const [showDropdown, setShowDropdown] = useState(false);
    const [notifications, setNotifications] = useState([]);
    const [notificationCount, setNotificationCount] = useState(0);
    const notificationElements = notifications.map((n) => {
        return (
            <div onClick={() => handleNotificationClick(n)} key={n.id} className={`singleNotification ${n.read ? "readNotification" : "unreadNotification"}`}>
                <span onClick={() => handleDeleteClick(n)} id="fontSize15" className="close fontSize15">&times;</span>
                <li id={n.id}>{n.message}</li>
                {!n.read && (
                    <span className="spanGrey">Click to mark as read</span>
                )}
            </div>
        )
    });
    const noNotifications = () => {
        return (
            <div className={`singleNotification readNotification`}>
                <li>You don't have any notifications.</li>
            </div>
        )
    }

    useEffect(() => {
        async function fetchNotifications() {
            const notificationsDb = await dataHandler.getUserNotifications(authenticate.getUser().id);
            const unreadNotifications = notificationsDb.filter((n) => !n.read);
            setNotificationCount(unreadNotifications.length);
            setNotifications(notificationsDb);
        }
        fetchNotifications();
    }, [notificationCount]);


    const handleBellClick = () => {
        setShowDropdown(!showDropdown);
    };

    const handleNotificationClick = async (notification) => {
        if (notification.read) {
            return;
        }
        notification.read = true;
        await dataHandler.markNotificationAsRead(notification.id);
        setNotificationCount(notificationCount - 1);
    }
    const handleDeleteClick = async (notification) => {
        await dataHandler.deleteNotification(notification.id);
        setNotifications((prevNotifications) =>
            prevNotifications.filter((n) => n.id !== notification.id)
        );
    }


    return (
        <div className="headerRightSection">
            <HeaderSearchBar />
            <img src={props.profileImage} alt="noImage" />
            <div>
                <img className="bellIcon" src={bellIcon} alt="noImage" onClick={handleBellClick} />
                {notificationCount > 0 ? <span className="notificationCount">{notificationCount}</span> : null}
                <div className={`dropdownMenu ${showDropdown ? 'show' : ''}`}>
                    {showDropdown && (
                        <ul>
                            {notificationElements.length >= 1 ? notificationElements : noNotifications()}
                        </ul>
                    )}
                </div>
            </div>
        </div>
    );
};

export default HeaderRightSection;