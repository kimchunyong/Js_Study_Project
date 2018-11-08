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

class User {
    constructor(email, name) {
        this.email = email;
        this.name = name;
        this.score = 0;
        User.arr.push(this);
    }

    login() {
        console.log(`${this.email}, has logged in`);
        return this;
    }

    logout() {
        console.log(`${this.email}, has logged out`);
        return this;
    }
    updateScore() {
        this.score++;
        console.log(this.email, 'score is noew', this.score);
        return this;
    }
}
User.arr = [];

var userOne = new User('ryu@ninjas.com', 'Ryu');
var userTwo = new User('kim@naver.com', 'kim');


userOne.login()
