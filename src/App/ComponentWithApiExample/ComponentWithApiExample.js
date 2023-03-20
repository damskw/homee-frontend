import NavBar from "../LandingPage/NavBar/NavBar";
import React, {useEffect, useState} from 'react'
import {dataHandler} from "../Api/dataHandler";

const ComponentWithApiExample = props => {
    const [users, setUsers] = useState([])

    useEffect(() => {
        async function fetchData() {
            const users = await dataHandler.getUsers();
            setUsers(users);
        }

        fetchData();
    }, [])

    return (
        <div>
            <NavBar/>
            <h1>This is landing page.</h1>
            {<ul>
                {users.map(user => (
                    <li key={user.id}>
                        {user.id}
                    </li>
                ))}
            </ul>}
        </div>
    )
}


export default ComponentWithApiExample;
