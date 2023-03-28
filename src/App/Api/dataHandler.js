import api from './apis.json'

export let dataHandler = {
    getUsers: async function () {
        return await apiGet(api.apiUrl + api.getAllUsers);
    },
    getSingleSpace: async function (spaceId) {
        const getSpaceUrl = api.apiUrl + api.getSingleSpace.replace("$spaceId", spaceId);
        return await apiGet(getSpaceUrl);
    },
    updateSpace: async function (data) {
        const updateSpaceUrl = api.apiUrl + api.updateSpace.replace("$spaceId", data.id);
        return await apiPutWithBody(updateSpaceUrl, data);
    },
    deleteSpaceWithDevices: async function(spaceId) {
      const deleteSpaceUrl = api.apiUrl + api.deleteSpaceCascade.replace("$spaceId", spaceId);
      return await apiDelete(deleteSpaceUrl);
    },
    createNewUser: async function (data) {
        return await apiPost(api.apiUrl + api.createNewUser, data);
    },
    createNewSpace: async function (data) {
        return await apiPost(api.apiUrl + api.createNewSpace, data);
    },
    assignSpaceToUser: async function (spaceId, userId) {
        const assignSpaceUrl = api.apiUrl + api.assignSpaceToUser.replace("$userId", userId).replace("$spaceId", spaceId);
        return await apiPutNoBody(assignSpaceUrl);
    },
    assignDeviceToSpace: async function (deviceId, spaceId) {
      const assignDeviceUrl = api.apiUrl + api.assignDeviceToSpace.replace("$deviceId", deviceId).replace("$spaceId", spaceId);
      return await apiPutNoBody(assignDeviceUrl);
    },
    addNewDevice: async function(data) {
      return await apiPost(api.apiUrl + api.addNewDevice, data);
    },
    getDevicesForUser: async function (userId) {
        const getUserDevicesUrl = api.apiUrl + api.getUserDevices.replace("$userId", userId);
        return await apiGet(getUserDevicesUrl);
    },
    getSingleDevice: async function(deviceId) {
      const getDeviceUrl = api.apiUrl + api.getSingleDevice.replace("$deviceId", deviceId);
      return await apiGet(getDeviceUrl);
    },
    getDeviceTypes: async function() {
        return await apiGet(api.apiUrl + api.getDeviceTypes);
    },
    countUserDevices: async function (userId) {
      const countUserDevicesUrl = api.apiUrl + api.countUserDevices.replace("$userId", userId);
      return await apiGet(countUserDevicesUrl);
    },
    getActivitiesForUserDevices: async function(userId) {
      const getActivitiesUrl = api.apiUrl + api.getActivitiesForUserDevices.replace("$userId", userId);
      return await apiGet(getActivitiesUrl);
    },
    countUserSpaces: async function (userId) {
        const countUserSpacesUrl = api.apiUrl + api.countUserSpaces.replace("$userId", userId);
        return await apiGet(countUserSpacesUrl);
    },
    getSpacesForUser: async function (userId) {
        const getUserSpacesUrl = api.apiUrl + api.getUserSpaces.replace("$userId", userId);
        return await apiGet(getUserSpacesUrl);
    },
    loginUser: async function (data) {
        return await apiPost(api.apiUrl + api.loginUser, data);
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