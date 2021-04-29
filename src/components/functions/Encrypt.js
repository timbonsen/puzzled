

function Encrypt(input) {
    const bcrypt = require("bcryptjs")

    const password = input
    const saltRounds = 10

    bcrypt.genSalt(saltRounds, function (err, salt) {
        if (err) {
            throw err
        } else {
            bcrypt.hash(password, salt, function(err, hash) {
                if (err) {
                    throw err
                } else {
                    console.log(hash)
                    return hash
                }
            })
        }
    })
}

export default Encrypt;