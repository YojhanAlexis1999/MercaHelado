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
router.get('/comentarios', async (req,res) => {
    const comentarios = await database.query("Select * from comentarios");
    res.json({ comentarios })
});
// Consultar
router.get('/comentarios/:id', async (req,res) => {
    const {id} = req.params;
    const comentarios = await database.query("Select * from comentarios where id_comentario = ?", [id] );
    res.json({comentarios})
});
// Agregar
router.post('/comentario',async (req,res) =>{
    const {comentarios} = req.body;
    const dato = [comentarios];
    await database.query("Insert Into comentarios (descripcion)  values (?)",dato);
    res.json({msg:"Comentario agregado"});
});
// Eliminar 
router.delete('/comentarios/:id', async (req,res) => {
    const {id} = req.params;
    await database.query("Delete from comentarios where id_comentario = ?",[id]);
    res.json({msg:"Comentario eliminado"});
});
// Modificar
router.put('/:id', async (req,res) => {
    const {id} = req.params;
    const {descripcion} = req.body;
    const datos = [descripcion,id];
    await database.query("Update comentarios set descripcion = ?  Where id_comentario = ?",datos);
    res.json({msg:"comentario modificado"})
});

/// Productos
/// Roles
// pedidos
// descuentos
// inventario 

module.exports = router;