const router = require('express').Router();
const database = require('../database');
/// Datos personales 
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