const UserPriorities = require('../models').userPriorities;

module.exports = {
    /*
    POST /api/userPriorities
    Posts user's priorities to the database for storage
    */
    create(req,res){
        return UserPriorities.create({
            userId: req.body.userId,
            sports: req.body.sports,
            food: req.body.food,
            education: req.body.education,
            healthcare: req.body.healthcare,
            interconnectivity: req.body.interconnectivity
        })
        .then(userPriorities => res.status(201).send(userPriorities))
        .catch(error => res.status(400).send(error));
    },
    /**
     * GET /api/userPriorities
     * @param {*} req 
     * @param {*} res 
     * Returns all user priorities
     */

    findAll(req,res){
        UserPriorities.findAll().then(
            function (userPriorities){
                res.send(userPriorities);
            }
        )
    },

    /**
     * GET /api/userPriorities/:userId
     * Gets all of user's past priorities given userId
     * @param {} req 
     * @param {*} res 
     */
    userFindAll(req,res){
        UserPriorities.findAll(
            {
                where: 
                    { 
                        userId: req.params.userId
                    },
                order: [ ['createdAt', 'DESC']]
            }
        ).then(
            function (userPriorities){
                res.send(userPriorities)
            }
        )
    },

    /**
     * GET /api/userPrioritiesLatest/:userId
     * Gets all of user's latest priorities given userId
     * @param {*} req 
     * @param {*} res 
     */
    userFindLatest(req,res){
        UserPriorities.findAll(
            {
                limit: 1,
                where: 
                    { 
                        userId: req.params.userId
                    },
                order: [ ['createdAt', 'DESC']]
            }
        ).then(
            function (userPriorities){
                res.send(userPriorities)
            }
        )
    }


};