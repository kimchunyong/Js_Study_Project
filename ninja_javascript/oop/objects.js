/*
var userOne = {
    email: 'ryu@ninjas.com',
    name: 'Ryu',

    login() {
        console.log(`${this.email}, has logged in`);
    },

    logout() {
        console.log(`${this.email}, has logged out`);
    }
};
*/

class UserInfo {
    constructor(email, name) {
        this.email = email;
        this.name = name;
    }

    login() {
        console.log(`${this.email}, has logged in`);
    }

    logout() {
        console.log(`${this.email}, has logged out`);
    }
}

var userOne = new UserInfo('ryu@ninjas.com', 'Ryu');

console.log(userOne.login());
console.log(userOne.logout());