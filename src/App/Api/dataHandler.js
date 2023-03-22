import api from './apis.json'

export let dataHandler = {
    getUsers: async function() {
        return await apiGet(api.getAllUsers);
    },
    createNewUser: async function(data) {
        return await apiPost(api.createNewUser, data);
    },
    loginUser: async function(data) {
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