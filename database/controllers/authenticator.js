var passwordHash = require('password-hash');

    function hashPassword(password) {
        return passwordHash.generate(password);
    };

    function verifyPassword(password,hashedPassword){
        return passwordHash.verify(password,hashedPassword);
    }

module.exports = {
    hashPassword: hashPassword,
    verifyPassword: verifyPassword
};