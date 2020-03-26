const bcrypt = require('bcrypt');
const saltRounds = 10;


/*
Util function for password hashing with salt
*/

function hashPassword(password) {
    
    return bcrypt.genSalt(saltRounds).then(salt => bcrypt.hash(password, salt))
};

/*
Util function for password verification
*/
function verifyPassword(password,hashed_password){

    return bcrypt.compare(password, hashed_password)
}

module.exports = {
    hashPassword: hashPassword,
    verifyPassword: verifyPassword
};