const User = require("../models/user");
const jwt = require("jsonwebtoken");
const bcrypt = require('bcryptjs');

class AuthController {

    async login(req, res) {
        const { email, password } = req.body;

        const user = await User.findOne({ where: { email }})

        if (!user || !(await bcrypt.compare(password, user.password))) {
            return res.status(401).json({ message: 'Credenciais inválidas' });
        }
        
        const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRESIN });
        
        res.status(200).send({
            id: user.id,
            name: user.name,
            email: user.email,
            accessToken: token
        })
    };

    async register(req, res) {
        try {
            const {
                name,
                email,
                phone,
                password,
            } = req.body;

            const newUser = await User.create({ 
                name, 
                email, 
                phone, 
                password: await bcrypt.hash(password, 15) })
            res.status(201).json(newUser)
        } catch (e) {
            res.status(400).json({ message: e.message})
        }
    }
}
    
module.exports = new AuthController();