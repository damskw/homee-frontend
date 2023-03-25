import api from './apis.json'

export let dataHandler = {
    getUsers: async function () {
        return await apiGet(api.getAllUsers);
    },
    getSingleSpace: async function (spaceId) {
        const getSpaceUrl = api.getSingleSpace.replace("$spaceId", spaceId);
        return await apiGet(getSpaceUrl);
    },
    updateSpace: async function (data) {
        const updateSpaceUrl = api.updateSpace.replace("$spaceId", data.id);
        return await apiPutWithBody(updateSpaceUrl, data);
    },
    deleteSpaceWithDevices: async function(spaceId) {
      const deleteSpaceUrl = api.deleteSpaceCascade.replace("$spaceId", spaceId);
      return await apiDelete(deleteSpaceUrl);
    },
    createNewUser: async function (data) {
        return await apiPost(api.createNewUser, data);
    },
    createNewSpace: async function (data) {
        return await apiPost(api.createNewSpace, data);
    },
    assignSpaceToUser: async function (spaceId, userId) {
        const assignSpaceUrl = api.assignSpaceToUser.replace("$userId", userId).replace("$spaceId", spaceId);
        return await apiPutNoBody(assignSpaceUrl);
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

async function apiPutNoBody(url) {
    let response = await fetch(url, {
        method: "PUT",
    });
    if (response.ok) {
        return response;
    }
}

async function apiDelete(url) {
    let response = await fetch(url, {
        method: "DELETE",
    });
    if (response.ok) {
        return response;
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

async function apiPutWithBody(url, payload) {
    let response = await fetch(url, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
    });
    if (response.ok) {
        return await response.json();
    }
}