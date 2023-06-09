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
    activateUserAccount: async function (userId, activationCode) {
        const activateUrl = api.apiUrl + api.activateUserAccount.replace("$userId", userId).replace("$code", activationCode);
        return await apiActivate(activateUrl);
    }
    ,
    updateUser: async function (data) {
      return await apiPutWithBody(api.apiUrl + api.updateUser, data);
    },
    changeUserPassword: async function (data) {
      return await apiPutWithBody(api.apiUrl + api.changeUserPassword, data);
    },
    requestPasswordChange: async function (email) {
        const passwordChangeUrl = api.apiUrl + api.requestPasswordChange.replace("$email", email);
        return await apiActivate(passwordChangeUrl);
    },
    changePasswordLostPassword: async function (data) {
        return await apiPostNoToken(api.apiUrl + api.changePasswordLostPassword, data);
    },
    createNewSpace: async function (data) {
        return await apiPost(api.apiUrl + api.createNewSpace, data);
    },
    assignSpaceToUser: async function (spaceId, userId) {
        const assignSpaceUrl = api.apiUrl + api.assignSpaceToUser.replace("$userId", userId).replace("$spaceId", spaceId);
        return await apiPutNoBody(assignSpaceUrl);
    },
    unassignedSpaceFromUser: async function (spaceId, userId) {
        const unassignedSpaceUrl = api.apiUrl + api.unassignedSpaceFromUser.replace("$userId", userId).replace("$spaceId", spaceId);
        return await apiDelete(unassignedSpaceUrl);
    },
    shareSpace: async function (data) {
      return await apiPutWithBody(api.apiUrl + api.shareSpace, data);
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
      return await apiPostWithFile(uploadImageUrl, data);
    },
    uploadDocument: async function (data) {
      const uploadDocumentUrl = api.apiUrl + api.uploadDocument;
      return await apiPostWithFile(uploadDocumentUrl, data)
    },
    deleteDocument: async function (documentId) {
      const deleteDocumentUrl = api.apiUrl + api.deleteDocument.replace("$documentId", documentId);
      return await apiDelete(deleteDocumentUrl);
    },
    downloadDocument: async function (documentId) {
      const downloadDocumentUrl = api.apiUrl + api.downloadDocument.replace("$documentId", documentId);
      return await apiDownload(downloadDocumentUrl);
    },
    getDocumentsForDevice: async function (deviceId) {
        const getDocumentsUrl = api.apiUrl + api.getDocumentsForDevice.replace("$deviceId", deviceId);
        return await apiGet(getDocumentsUrl);
    },
    deleteDevice: async function (deviceId) {
        const deleteDeviceUrl = api.apiUrl + api.deleteDevice.replace("$deviceId", deviceId);
        return await apiDelete(deleteDeviceUrl);
    },
    getDevicesForUser: async function (userId) {
        const getUserDevicesUrl = api.apiUrl + api.getUserDevices.replace("$userId", userId);
        return await apiGet(getUserDevicesUrl);
    },
    searchForUserDevices: async function (userId, search) {
      const searchForUserDevicesUrl = api.apiUrl + api.searchForUserDevices.replace("$userId", userId).replace("$search", search);
      return await apiGet(searchForUserDevicesUrl);
    },
    getDevicesForSpace: async function (spaceId) {
      const getSpaceDevicesUrl = api.apiUrl + api.getSpaceDevices.replace("$spaceId", spaceId);
      return await apiGet(getSpaceDevicesUrl);
    },
    getSingleDevice: async function(deviceId) {
      const getDeviceUrl = api.apiUrl + api.getSingleDevice.replace("$deviceId", deviceId);
      return await apiGet(getDeviceUrl);
    },
    getDeviceTypes: async function() {
        return await apiGet(api.apiUrl + api.getDeviceTypes);
    },
    getEventTypes: async function() {
      return await apiGet(api.apiUrl + api.getEventTypes);
    },
    deleteSingleEvent: async function(eventId) {
      return await apiDelete(api.apiUrl + api.deleteSingleEvent.replace("$eventId", eventId));
    },
    getDevicePastEvents: async function(deviceId) {
      return await apiGet(api.apiUrl + api.getDevicePastEvents.replace("$deviceId", deviceId));
    },
    getDeviceFutureEvents: async function(deviceId) {
        return await apiGet(api.apiUrl + api.getDeviceFutureEvents.replace("$deviceId", deviceId));
    },
    addNewEvent: async function(data) {
      return await apiPost(api.apiUrl + api.addNewEvent, data);
    },
    countUserDevices: async function (userId) {
      const countUserDevicesUrl = api.apiUrl + api.countUserDevices.replace("$userId", userId);
      return await apiGet(countUserDevicesUrl);
    },
    countUserEventNotifications: async function (userId) {
        const countEventsUrl = api.apiUrl + api.countUserEventNotifications.replace("$userId", userId);
        return await apiGet(countEventsUrl);
    },
    countUserDocuments: async function (userId) {
      const countDocumentsUrl = api.apiUrl + api.countUserDocuments.replace("$userId", userId);
      return await apiGet(countDocumentsUrl);
    },
    getActivitiesForUserDevices: async function(userId) {
      const getActivitiesUrl = api.apiUrl + api.getActivitiesForUserDevices.replace("$userId", userId);
      return await apiGet(getActivitiesUrl);
    },
    getUsersForSpace: async function (spaceId) {
      const getUsersForSpaceUrl = api.apiUrl + api.getUsersForSpace.replace("$spaceId", spaceId);
      return await apiGet(getUsersForSpaceUrl);
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
    },
    createNewDeviceNote: async function (data) {
        return await apiPost(api.apiUrl + api.createNewDeviceNote, data);
    },
    updateDeviceNote: async function (data) {
      return await apiPutWithBody(api.apiUrl + api.updateDeviceNote, data);
    },
    getSingleNote: async function (noteId) {
        const getSingleNoteUrl = api.apiUrl + api.getSingleNote.replace("$noteId", noteId);
        return await apiGet(getSingleNoteUrl);
    },
    deleteNote: async function (noteId) {
      const deleteNoteUrl = api.apiUrl + api.deleteNote.replace("$noteId", noteId);
      return await apiDelete(deleteNoteUrl);
    },
    getNotesForDevice: async function (deviceId) {
        const getNotesForDeviceUrl = api.apiUrl + api.getNotesForDevice.replace("$deviceId", deviceId);
        return await apiGet(getNotesForDeviceUrl);
    },
    getUserNotifications: async function (userId) {
        const getUserNotificationsUrl = api.apiUrl + api.getUserNotifications.replace("$userId", userId);
        return await apiGet(getUserNotificationsUrl);
    },
    markNotificationAsRead: async function (notificationId) {
        const markNotificationAsReadUrl = api.apiUrl + api.markNotificationAsRead.replace("$id", notificationId);
        return await apiPutNoBody(markNotificationAsReadUrl);
    },
    deleteNotification: async function (notificationId) {
        const deleteNotificationUrl = api.apiUrl + api.deleteNotification.replace("$id", notificationId);
        return await apiDelete(deleteNotificationUrl);
    },
    addNewTask: async function (data) {
        return await apiPost(api.apiUrl + api.addNewTask, data);
    },
    deleteTask: async function (taskId) {
        const deleteTaskUrl = api.apiUrl + api.deleteTask.replace("$taskId", taskId);
        return await apiDelete(deleteTaskUrl);
    },
    getTask: async function (taskId) {
        const getTaskUrl = api.apiUrl + api.getTask.replace("$taskId", taskId);
        return await apiGet(getTaskUrl);
    },
    getTasksForUser: async function (userId) {
        const getTasksForUserUrl = api.apiUrl + api.getTasksForUser.replace("$userId", userId);
        return await apiGet(getTasksForUserUrl);
    },
    getTasksForUserAndSpace: async function (userId, spaceId) {
        const getTasksForUserAndSpaceUrl = api.apiUrl + api.getTasksForUserAndSpace.replace("$userId", userId).replace("$spaceId", spaceId);
        return await apiGet(getTasksForUserAndSpaceUrl);
    },
    markTaskAsDone: async function (taskId) {
        const markTaskAsDoneUrl = api.apiUrl + api.markTaskAsDone.replace("$taskId", taskId);
        return apiPutNoBody(markTaskAsDoneUrl);
    }
}

async function apiDownload(url) {
    const token = authenticate.getUser().token;
    fetch(url, {
        method: "GET",
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/octet-stream'
        },
    })
        .then(response => {
            const contentDisposition = response.headers.get('Content-Disposition');
            const filenameMatch = contentDisposition.match(/filename[^;=\n]*=(.*)/);
            const filename = filenameMatch ? filenameMatch[1].slice(0, -1) : 'temp';
            return response.blob().then(blob => {
                const downloadLink = document.createElement('a');
                downloadLink.setAttribute('href', window.URL.createObjectURL(blob));
                downloadLink.setAttribute('download', filename);
                downloadLink.click();
                window.URL.revokeObjectURL(url);
            });
        })
        .catch(error => console.error(error));
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

async function apiActivate(url) {
    let response = await fetch(url, {
        method: 'GET',
    });
    if (response.ok) {
        return response;
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

async function apiPostNoToken(url, payload) {
    let response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload),
    });
    if (response.ok) {
        return response;
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

async function apiPostWithFile(url, payload) {
    const token = authenticate.getUser().token;
    let response = await fetch(url, {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${token}`,
        },
        body: payload
    }).catch(error => {
        return { error: true, message: "An error occurred while communicating with the server." };
    });
    if (response.ok) {
        const text = await response.text();
        return text ? JSON.parse(text) : {};
    } else {
        return response;
    }
}