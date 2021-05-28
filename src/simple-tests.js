function add(num1, num2){

    return num1 + num2;
}

function findByName(users, name) {

    for (let i = 0; i < users.length; i++) {
        let user = users[i];
        if (user.name === name) {
            return user;
        }
    }
    return null;
}

module.exports = {
    add,
    findByName,
}