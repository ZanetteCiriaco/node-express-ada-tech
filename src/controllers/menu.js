const { Menu } = require('../models/menu')

class MenuController {

    async getItens(req, res) {
        try {
            const id = req.params.id;

            const menu = await Menu.findAll({ where: {userId: id} });
            res.json(menu);
        } catch (e) {
           res.status(400).json({ message: e.message }); 
        }
    }

    async addItem(req, res) {
        try {
            const {
                name,
                value,
                description,
                image,
            } = req.body;

            const newItem = await Menu.create({ 
                name, 
                value, 
                description, 
                image,
                userId: req.userId
            })
            res.status(201).json(newItem)
        } catch (e) {
            res.status(400).json({ message: e.message})
        }
    }

    async updateItem(req, res) {
        try {
            const id = req.params.id;
            const item = await Menu.findByPk(id)

            if (!item) {
                return res.status(404).json({ message: 'Item não encontrado' });
            }

            if (item.userId !== req.userId) {
                return res.status(403).json({ message: 'Você não tem permissão para modificar este item' });
            }

            const updated = await item.update(req.body, { where: { id: id } });
            res.status(200).json(updated);
        } catch (error) {
            res.status(500).json({ message: 'Internal server error' });
        }
    }

    async deleteItem(req, res) {
        try {
            const id = req.params.id;
            const item = await Menu.findByPk(id)

            if (!item) {
                return res.status(404).json({ message: 'Item não encontrado' });
            }

            if (item.userId !== req.userId) {
                return res.status(403).json({ message: 'Você não tem permissão para excluir este item' });
            }

            await item.destroy();
            res.status(200).json({ message: 'Item excluído com sucesso' });
        } catch (error) {
            res.status(500).json({ message: 'Internal server error' });
        }
    }
}
module.exports = new MenuController();