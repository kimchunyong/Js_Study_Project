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
    this.role = 'super admin';
}

/* same code
 * function Admin(email, name) {
 *  User.apply(this, [email, name]);
 *}
*/

Admin.prototype = Object.create(User.prototype); //User의 프로토타입을 Admin __proto__에 연결

Admin.prototype.deleteUser = function (u) {
    users = users.filter(user => {
        return user.email != u.email;
    })
}

var userOne = new User('ryu@naver.com', 'Ryu');
var userTwo = new User('yoshi@mariiokorp.com', 'Yoshi');
var admin = new Admin('kim@naver.com', 'kim');

var users = [userOne, userTwo, admin];

console.log(userOne);
userTwo.login();