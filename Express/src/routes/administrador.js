const router = require('express').Router();
const database = require('../database');

/// Terminos y condiciones

// Listar
router.get('/terminos', async (req,res) => {
    const terminos = await database.query("Select * from terminos");
    res.json({ terminos })
});
// Consultar
router.get('/terminos/:id', async (req,res) => {
    const {id} = req.params;
    const terminos = await database.query("Select * from terminos where id_terminos = ?", [id] );
    res.json({terminos})
});
// Agregar
router.post('/terminos',async (req,res) =>{
    const {descripcion} = req.body;
    const dato = [descripcion];
    await database.query("Insert Into terminos (descripcion)  values (?)",dato);
    res.json({msg:"Terminos y condiciones agregados"});
});
// Eliminar 
router.delete('/terminos/:id', async (req,res) => {
    const {id} = req.params;
    await database.query("Delete from terminos where id_terminos = ?",[id]);
    res.json({msg:"Termino eliminado"});
});
// Modificar
router.put('/terminos/:id', async (req,res) => {
    const {id} = req.params;
    const {descripcion} = req.body;
    const datos = [descripcion,id];
    await database.query("Update terminos set descripcion = ?  Where id_terminos=?",datos);
    res.json({msg:"Terminos modificado"})
});



/// Comentarios

//listar
router.get('/comentario', async (req,res) => {
    const comentarios = await database.query("Select * from comentarios");
    res.json({ comentarios })
});
// Consultar
router.get('/comentario/:id', async (req,res) => {
    const {id} = req.params;
    const comentarios = await database.query("Select * from comentarios where id_comentario = ?", [id] );
    res.json({comentarios})
});
// Agregar
router.post('/comentario',async (req,res) =>{
    const {descripcion} = req.body;
    const dato = [descripcion];
    await database.query("Insert Into comentarios (descripcion)  values (?)",dato);
    res.json({msg:"Comentario agregado"});
});
// Eliminar 
router.delete('/comentario/:id', async (req,res) => {
    const {id} = req.params;
    await database.query("Delete from comentarios where id_comentario = ?",[id]);
    res.json({msg:"Comentario eliminado"});
});
// Modificar
router.put('/comentario/:id', async (req,res) => {
    const {id} = req.params;
    const {descripcion} = req.body;
    const datos = [descripcion,id];
    await database.query("Update comentarios set descripcion = ?  Where id_comentario = ?",datos);
    res.json({msg:"comentario modificado"})
});

/// Productos

//listar
router.get('/productos', async (req,res) => {
    const productos = await database.query("Select * from productos");
    res.json({ productos })
});
// Consultar
router.get('/productos/:id', async (req,res) => {
    const {id} = req.params;
    const productos = await database.query("Select * from productos where id_producto = ?", [id] );
    res.json({productos})
});
// Agregar
router.post('/productos',async (req,res) =>{
    const {nombre,marca,precio,cantidad,id_pedido} = req.body;
    const dato = [nombre,marca,precio,cantidad,id_pedido];
    await database.query("Insert Into productos (nombre,marca,precio,cantidad,id_pedido)  values (?,?,?,?,?)",dato);
    res.json({msg:"Producto agregado"});
});
// Eliminar 
router.delete('/productos/:id', async (req,res) => {
    const {id} = req.params;
    await database.query("Delete from productos where id_producto = ?",[id]);
    res.json({msg:"Productos eliminado"});
});
// Modificar
router.put('/productos/:id', async (req,res) => {
    const {id} = req.params;
    const {nombre,marca,precio,cantidad,id_pedido} = req.body;
    const datos = [nombre,marca,precio,cantidad,id_pedido,id];
    await database.query("Update productos set nombre = ?, marca = ?, precio = ?,cantidad = ?,id_pedido = ? Where id_producto = ?",datos);
    res.json({msg:"Productos modificado"})
});

/// Roles

//listar
router.get('/rol', async (req,res) => {
    const rol = await database.query("Select * from rol");
    res.json({ rol })
});
// Consultar
router.get('/rol/:id', async (req,res) => {
    const {id} = req.params;
    const rol = await database.query("Select * from rol where id_rol = ?", [id] );
    res.json({ rol })
});
// Agregar
router.post('/rol',async (req,res) =>{
    const {descripcion} = req.body;
    const dato = [descripcion];
    await database.query("Insert Into rol (descripcion)  values (?)",dato);
    res.json({msg:"Rol agregado"});
});
// Eliminar 
router.delete('/rol/:id', async (req,res) => {
    const {id} = req.params;
    await database.query("Delete from rol where id_rol = ?",[id]);
    res.json({msg:"rol eliminado"});
});
// Modificar
router.put('/rol/:id', async (req,res) => {
    const {id} = req.params;
    const {descripcion} = req.body;
    const datos = [descripcion,id];
    await database.query("Update rol set descripcion = ? Where id_rol = ?",datos);
    res.json({msg:"rol modificado"})
});

/// Pedidos

//listar
router.get('/pedidos', async (req,res) => {
    const pedidos = await database.query("Select * from pedidos");
    res.json({ pedidos })
});
// Consultar
router.get('/pedidos/:id', async (req,res) => {
    const {id} = req.params;
    const pedidos = await database.query("Select * from pedidos where id_pedidos = ?", [id] );
    res.json({pedidos})
});
// Agregar
router.post('/pedidos',async (req,res) =>{
    const {cantidad} = req.body;
    const dato = [cantidad];
    await database.query("Insert Into pedidos (cantidad)  values (?)",dato);
    res.json({msg:"pedidos agregado"});
});
// Eliminar 
router.delete('/pedidos/:id', async (req,res) => {
    const {id} = req.params;
    await database.query("Delete from pedidos where id_pedidos = ?",[id]);
    res.json({msg:"pedidos eliminado"});
});
// Modificar
router.put('/pedidos/:id', async (req,res) => {
    const {id} = req.params;
    const {cantidad} = req.body;
    const datos = [cantidad,id];
    await database.query("Update pedidos set cantidad = ?  Where id_pedidos = ?",datos);
    res.json({msg:"Pedidos modificado"})
});
// descuentos
router.get('/descuento', async (req,res) => {
    const descuento = await database.query("select * from descuento");
    res.json({ descuento })
});
// Consultar
router.get('/descuento/:id', async (req,res) => {
    const {id} = req.params;
    const descuento = await database.query("Select * from descuento where id_descuento = ?", [id] );
    res.json({descuento})
});
// Agregar
router.post('/descuento',async (req,res) =>{
    const {descuento,id_producto} = req.body;
    const dato = [descuento,id_producto];
    await database.query("Insert Into descuento (descuento,id_producto)  values (?,?)",dato);
    res.json({msg:"descuento agregado"});
});
// Eliminar 
router.delete('/descuento/:id', async (req,res) => {
    const {id} = req.params;
    await database.query("Delete from descuento where id_descuento = ?",[id]);
    res.json({msg:"descuento eliminado"});
});
// Modificar
router.put('/descuento/:id', async (req,res) => {
    const {id} = req.params;
    const {descuento,id_producto} = req.body;
    const datos = [descuento,id_producto,id];
    await database.query("Update descuento set descuento = ?,id_producto = ? Where id_descuento = ?",datos);
    res.json({msg:"descuento modificado"})
});

// inventario
//listar
router.get('/inventario', async (req,res) => {
    const inventario = await database.query("select * from inventario");
    res.json({ inventario })
});
// Consultar
router.get('/inventario/:id', async (req,res) => {
    const {id} = req.params;
    const inventario = await database.query("Select * from inventario where id_inventario = ?", [id] );
    res.json({inventario})
});
// Agregar
router.post('/inventario',async (req,res) =>{
    const {id_producto,cantidad,peso,fecha_ingreso} = req.body;
    const dato = [id_producto,cantidad,peso,fecha_ingreso];
    await database.query("Insert Into inventario (id_producto,cantidad,peso,fecha_ingreso)  values (?,?,?,?,?)",dato);
    res.json({msg:"Inventario agregado"});
});
// Eliminar 
router.delete('/inventario/:id', async (req,res) => {
    const {id} = req.params;
    await database.query("Delete from inventario where id_inventario = ?",[id]);
    res.json({msg:"inventario eliminado"});
});
// Modificar
router.put('/inventario/:id', async (req,res) => {
    const {id} = req.params;
    const {id_producto,cantidad,peso,fecha_ingreso} = req.body;
    const datos = [id_producto,cantidad,peso,fecha_ingreso,id];
    await database.query("Update inventario set id_producto = ?,cantidad = ?,peso = ?,fecha_ingreso= ? Where id_inventario = ?",datos);
    res.json({msg:"inventario modificado"})
});

module.exports = router;