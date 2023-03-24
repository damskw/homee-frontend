export let authenticate = {
    loginUser: function(id) {
        const user = {
            id: id,
            name: null
        };
        sessionStorage.setItem("user", JSON.stringify(user))
    },
    logoutUser: function() {
      sessionStorage.clear();
    },
    getUser: function() {
        const userJson = sessionStorage.getItem("user");
        return userJson ? JSON.parse(userJson) : null;
    }
}