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
router.put('/dato/:id', async (req,res) => {
    const {id} = req.params;
    const {nombre,apellido,cedula,telefono,sexo,edad,fechaN} = req.body;
    const datos = [nombre,apellido,cedula,telefono,sexo,edad,fechaN,id];
    await database.query("Update usuarios set nombre = ?, apellido= ?, telefono = ?, sexo = ?, edad = ?, fechaN = ? Where id_datos=?",datos);
    res.json({msg:"Dato modificado"})
});

/// Solicitud de trabajo
// Listar
router.get('/', async (req,res) => {
    const usuarios = await database.query("Select * from usuarios");
    res.json({ usuarios })
});
// Consultar
router.get('/:id', async (req,res) => {
    const {id} = req.params;
    const usuarios = await database.query("Select * from usuarios where id_usuario = ?", [id] );
    res.json({usuarios})
});
// Agregar
router.post('/',async (req,res) =>{
    const {nombre,apellido,correo,telefono,contra,id_rol} = req.body;
    const datos = [nombre,apellido,correo,telefono,contra,id_rol];
    await database.query("Insert Into usuarios (nombre,apellido,correo,telefono,contra,id_rol) values (?,?,?,?,?,?)",datos);
    res.json({msg:"Registro exitoso"});
});
// Eliminar 
router.delete('/:id', async (req,res) => {
    const {id} = req.params;
    await database.query("Delete from usuarios where id_usuario = ?",[id]);
    res.json({msg:"Usuario eliminado"});
});
// Modificar
router.put('/:id', async (req,res) => {
    const {id} = req.params;
    const {nombre,apellido,correo,telefono,contra,id_rol} = req.body;
    const datos = [nombre,apellido,correo,telefono,contra,id_rol,id];
    await database.query("Update usuarios set nombre = ?, apellido= ?, correo = ?, telefono = ?, contra = ?, id_rol = ? Where id_usuario=?",datos);
    res.json({msg:"Registro modificado"})
});

module.exports = router;