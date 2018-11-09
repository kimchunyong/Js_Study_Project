function User(email, name) {
    this.email = email;
    this.name = name;
    this.online = false;
}

User.prototype.login = function () {
    this.online = true;
    console.log(this.email, 'has logged in');
}

User.prototype.logout = function () {
    this.online = false;
    console.log(this.email, 'has logged out');
}

function Admin(...args) {
    User.apply(this, args);
}

/* same code
 * function Admin(email, name) {
 *  User.apply(this, [email, name]);
 *}
*/

var userOne = new User('ryu@naver.com', 'Ryu');
var userTwo = new User('yoshi@mariiokorp.com', 'Yoshi');
var admin = new Admin('kim@naver.com', 'kim');


console.log(userOne);
userTwo.login();