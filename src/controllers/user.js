const User = require('../models/user');

class UserController {

    async getAll(req, res) {
        try {
            const users = await User.findAll({
                attributes: { exclude: ['password', 'email'] }
            });
            res.status(200).json(users);
        } catch (e) {
           res.status(404).json({ message: 'Internal server error' }); 
        }
    }

    async getMy(req, res) {
        try {
            const user = await User.findByPk(req.userId, { 
                attributes: { exclude: ['password']}
            })

            if(!user) {
                res.status(404).json({ message: 'User não encontrado'})
            }
            res.status(200).json(user);
            
        } catch (error) {
            res.status(500).json({ message: 'Internal server error' })
        }
    }

}
module.exports = new UserController();