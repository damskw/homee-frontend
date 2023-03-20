import api from './apis.json'

export let dataHandler = {
    getUsers: async function() {
        return await apiGet(api.getAllUsers);
    }
}


async function apiGet(url) {
    let response = await fetch(url, {
        method: "GET",
    });
    if (response.ok) {
        return await response.json();
    }
}