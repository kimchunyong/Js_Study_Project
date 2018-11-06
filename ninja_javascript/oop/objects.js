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
        UserInfo.arr.push(this);
    }

    login() {
        console.log(`${this.email}, has logged in`);
    }

    logout() {
        console.log(`${this.email}, has logged out`);
    }
}
UserInfo.arr = [];

var userOne = new UserInfo('ryu@ninjas.com', 'Ryu');
var userTwo = new UserInfo('kim@naver.com', 'kim');

console.log(userOne.login());
console.log(userOne.logout());

console.log(userTwo.login());
console.log(userTwo.logout());