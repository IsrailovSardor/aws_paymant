module.exports = {
    getUser: function () {
        if (typeof window !== 'undefined') {
            const user = localStorage.getItem('user');
            if (user === 'undefined' || !user) {
                return null;
            } else {
                return JSON.parse(user);
            }
        } else {
            console.log("local false")
        }
    },

    getToken: function () {
        if (typeof window !== 'undefined') {
            return localStorage.getItem('token');
        } else {
            console.log("local false")
        }
    },

    setUserSession: function (user, token) {
        localStorage.setItem('user', JSON.stringify(user));
        localStorage.setItem('token', token);
    },

    resetUserSession: function () {
        localStorage.removeItem('user');
        localStorage.removeItem('token');
    }
}