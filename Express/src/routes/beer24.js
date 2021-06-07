const router = require('express').Router();
const database = require('../database');

router.get('/productos_loca/:id', async (req,res) => {
    const {id} = req.params;
    const productos = await database.query("select * from productos where id_loca = ?", [id] );
    res.json({productos})
});

router.get('/pedidos', async (req,res) => {
    const pedidos = await database.query("select * from pedidos" );
    res.json({pedidos})
});

router.post('/pedidos', async ( req,res)=>{
    const {id_usuario, id_productos, cantidad,precio} = req.body;
    const pedidos = [id_usuario, id_productos, cantidad,precio];
    await database.query("Insert Into pedidos(id_usuario, id_productos, cantidad,precio) values(?,?,?,?)", pedidos);
    res.json({msg:"Pedido Agregado"})
});


module.exports = router;