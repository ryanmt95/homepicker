const bcrypt = require('bcrypt');
const saltRounds = 10;

function hashPassword(password) {
    
    return bcrypt.genSalt(saltRounds).then(salt => bcrypt.hash(password, salt))
};

function verifyPassword(password,hashed_password){

    return bcrypt.compare(password, hashed_password)
}

module.exports = {
    hashPassword: hashPassword,
    verifyPassword: verifyPassword
};