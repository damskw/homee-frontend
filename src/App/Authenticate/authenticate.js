export let authenticate = {
    loginUser: function(id, username, token) {
        const user = {
            id: id,
            name: username,
            token: token
        };
        sessionStorage.setItem("user", JSON.stringify(user))
    },
    logoutUser: function() {
      sessionStorage.clear();
      window.location = '/';
    },
    getUser: function() {
        const userJson = sessionStorage.getItem("user");
        return userJson ? JSON.parse(userJson) : null;
    }
}