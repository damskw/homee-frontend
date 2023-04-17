import api from './apis.json'
import {authenticate} from "../Authenticate/authenticate";

export let dataHandler = {
    getUsers: async function () {
        return await apiGet(api.apiUrl + api.getAllUsers);
    },
    getSingleUser: async function (userId) {
      const getSingleUserUrl = api.apiUrl + api.getSingleUser.replace("$userId", userId);
      return await apiGet(getSingleUserUrl);
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
        return await apiLoginRegisterPost(api.apiUrl + api.createNewUser, data);
    },
    updateUser: async function (data) {
      return await apiPutWithBody(api.apiUrl + api.updateUser, data);
    },
    changeUserPassword: async function (data) {
      return await apiPutWithBody(api.apiUrl + api.changeUserPassword, data);
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
    getDeviceImageUrl: function(imageName) {
        return api.apiUrl + api.getDeviceImage.replace("$fileName", imageName);
    },
    addNewDevice: async function(data) {
      return await apiPost(api.apiUrl + api.addNewDevice, data);
    },
    updateDevice: async function (data) {
        const updateDeviceUrl = api.apiUrl + api.updateDevice.replace("$deviceId", data.id);
        return await apiPutWithBody(updateDeviceUrl, data);
    },
    uploadDeviceImage: async function (data) {
      const uploadImageUrl = api.apiUrl + api.addDeviceImage;
      return await apiPostWithImage(uploadImageUrl, data);
    },
    deleteDevice: async function (deviceId) {
        const deleteDeviceUrl = api.apiUrl + api.deleteDevice.replace("$deviceId", deviceId);
        return await apiDelete(deleteDeviceUrl);
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
    getActivitiesForSingleDevice: async function(deviceId) {
      const getActivitiesUrl = api.apiUrl + api.getActivitiesForSingleDevice.replace("$deviceId", deviceId);
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
        return await apiLoginRegisterPost(api.apiUrl + api.loginUser, data);
    }
}


async function apiGet(url) {
    const token = authenticate.getUser().token;
    const response = await fetch(url, {
        method: "GET",
        headers: {
            'Authorization': `Bearer ${token}`
        },
    });
    if (response.ok) {
        return await response.json();
    }
}

async function apiPutNoBody(url) {
    const token = authenticate.getUser().token;
    let response = await fetch(url, {
        method: "PUT",
        headers: {
            'Authorization': `Bearer ${token}`
        },
    });
    if (response.ok) {
        return response;
    }
}

async function apiDelete(url) {
    const token = authenticate.getUser().token;
    let response = await fetch(url, {
        method: "DELETE",
        headers: {
            'Authorization': `Bearer ${token}`
        },
    });
    if (response.ok) {
        return response;
    }
}

async function apiLoginRegisterPost(url, payload) {
    let response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload),
    });
    if (response.ok) {
        return await response.json();
    }
}

async function apiPost(url, payload) {
    const token = authenticate.getUser().token;
    let response = await fetch(url, {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload),
    });
    if (response.ok) {
        return await response.json();
    }
}

async function apiPutWithBody(url, payload) {
    const token = authenticate.getUser().token;
    let response = await fetch(url, {
        method: 'PUT',
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload),
    });
    if (response.ok) {
        return await response.json();
    }
}

async function apiPostWithImage(url, payload) {
    const token = authenticate.getUser().token;
    let response = await fetch(url, {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
        },
        body: payload
    });
    if (response.ok) {
        const text = await response.text();
        return text ? JSON.parse(text) : {};
    } else {
        throw new Error('Network response was not ok');
    }
}