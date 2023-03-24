import api from './apis.json'

export let dataHandler = {
    getUsers: async function () {
        return await apiGet(api.getAllUsers);
    },
    createNewUser: async function (data) {
        return await apiPost(api.createNewUser, data);
    },
    getDevicesForUser: async function (userId) {
        const getUserDevicesUrl = api.getUserDevices.replace("$userId", userId);
        return await apiGet(getUserDevicesUrl);
    },
    getSpacesForUser: async function (userId) {
        const getUserSpacesUrl = api.getUserSpaces.replace("$userId", userId);
        return await apiGet(getUserSpacesUrl);
    },
    loginUser: async function (data) {
        return await apiPost(api.loginUser, data);
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

async function apiPost(url, payload) {
    let response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
    });
    if (response.ok) {
        return await response.json();
    }
}