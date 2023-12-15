const path = require('path');
const { getAll, create, getOne, deleteOne } = require('../models/product.model');

module.exports = {
    admin: async (req, res) => {
        const data = await getAll();
        res.render(path.resolve(__dirname, '../views/admin/admin.ejs'), {
        title: "Admin",
        data
    })
},
    createView: (req, res) => res.render(path.resolve(__dirname, '../views/admin/create.ejs'), {
        title: "Crear Item"
    }),
    createItem: async (req, res) => {
        const product_schema = {
           product_name: req.body.name,
           product_description: req.body.description,
           price: Number(req.body.price),
           stock: Number(req.body.stock),
           discount: Number(req.body.discount),
           sku: req.body.sku,           
           dues: Number(req.body.dues),
           image_front: req.files[0].originalname,
           image_back: req.files[1].originalname, 
           licence_id: Number(req.body.licence),           
           category_id: Number(req.body.category)                    
        }
        await create([Object.values(product_schema)]);
        res.redirect('/admin');
    },  
    editView: async (req, res) => {
        const { id } = req.params;

        const [product] = await getOne({ product_id: id });

        res.render(path.resolve(__dirname, '../views/admin/edit.ejs'), {
        title: "Editar Item",
        product
    })
},
    editItem: (req, res) => res.send('Esta es la vista para modificar un item específico'),  
    deleteItem:  async (req, res) => {
        const { id } = req.params;
    
        try {
            await deleteOne({ product_id: id });
            res.redirect('/admin');
        } catch (error) {
            console.error('Error al eliminar el elemento:', error);
            res.redirect('/admin');
        }
    }
};
