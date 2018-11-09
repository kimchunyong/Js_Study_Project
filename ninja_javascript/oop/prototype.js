function User(email, name) {
    this.email = email;
    this.name = name;
}

User.prototype.login = function () {
    this.online = true;
    console.log(this.email, 'has logged in');
}

User.prototype.logout = function () {
    this.online = false;
    console.log(this.email, 'has logged out');
}

var userOne = new User('ryu@naver.com', 'Ryu');
var userTwo = new User('yoshi@mariiokorp.com', 'Yoshi');

console.log(userOne);
userTwo.login();