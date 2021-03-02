const router = require('express').Router();
const database = require('../database');
/// Datos personales
//listar
router.get('/datos', async (req,res) => {
    const datos = await database.query("select * from datos");
    res.json({ datos })
});
// Consultar
router.get('/datos/:id', async (req,res) => {
    const {id} = req.params;
    const datos = await database.query("Select * from datos where id_datos = ?", [id] );
    res.json({datos})
});
// Agregar
router.post('/datos',async (req,res) =>{
    const {nombre,apellido,cedula,telefono,sexo,edad,fechaN} = req.body;
    const datos = [nombre,apellido,cedula,telefono,sexo,edad,fechaN];
    await database.query("Insert Into datos (nombre,apellido,cedula,telefono,sexo,edad,fechaN) values (?,?,?,?,?,?,?)",datos);
    res.json({msg:"datos exitoso"});
});
// Eliminar 
router.delete('/datos/:id', async (req,res) => {
    const {id} = req.params;
    await database.query("Delete from datos where id_datos = ?",[id]);
    res.json({msg:"Dato eliminado"});
});
// Modificar
router.put('/datos/:id', async (req,res) => {
    const {id} = req.params;
    const {nombre,apellido,cedula,telefono,sexo,edad,fechaN} = req.body;
    const datos = [nombre,apellido,cedula,telefono,sexo,edad,fechaN,id];
    await database.query("Update datos set nombre = ?, apellido= ?, cedula=?,telefono = ?, sexo = ?, edad = ?, fechaN = ? Where id_datos=?",datos);
    res.json({msg:"Dato modificado"})
});

/// Solicitud de trabajo
// Listar
router.get('/solicitud', async (req,res) => {
    const solicitud = await database.query("Select * from solicitud");
    res.json({ solicitud })
});
// Consultar
router.get('/solicitud/:id', async (req,res) => {
    const {id} = req.params;
    const solicitud = await database.query("Select * from solicitud where id_solicitud = ?", [id] );
    res.json({solicitud})
});
// Agregar
router.post('/solicitud',async (req,res) =>{
    const {cargo,id_rol} = req.body;
    const datos = [cargo,id_rol];
    await database.query("Insert Into solicitud (cargo,id_rol) values (?,?)",datos);
    res.json({msg:"solicitud exitosa"});
});
// Eliminar 
router.delete('/solicitud/:id', async (req,res) => {
    const {id} = req.params;
    await database.query("Delete from solicitud where id_solicitud = ?",[id]);
    res.json({msg:"solicitud eliminada"});
});
// Modificar
router.put('/solicitud/:id', async (req,res) => {
    const {id} = req.params;
    const {cargo,id_rol} = req.body;
    const datos = [cargo,id_rol,id];
    await database.query("Update solicitud set cargo = ?, id_rol = ? Where id_solicitud=?",datos);
    res.json({msg:"solicitud modificada"})
});

module.exports = router;