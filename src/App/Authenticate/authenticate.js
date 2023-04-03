export let authenticate = {
    loginUser: function(id, username) {
        const user = {
            id: id,
            name: username
        };
        sessionStorage.setItem("user", JSON.stringify(user))
    },
    logoutUser: function() {
      sessionStorage.clear();
      window.location.reload();
    },
    getUser: function() {
        const userJson = sessionStorage.getItem("user");
        return userJson ? JSON.parse(userJson) : null;
    }
}