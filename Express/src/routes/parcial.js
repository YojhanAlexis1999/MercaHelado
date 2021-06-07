const router = require('express').Router();
const database = require('../../../Express/src/database');

router.get('/parcial', async (req,res) => {
    const datos = await database.query("select p.placa,s.fecha_ingreso, s.servicio from carro p, servi s where p.id_carro = s.id_carro ");
    res.json({ datos })
});
router.get('/parcials', async (req,res) => {
    const datos = await database.query("select * from userparcial");
    res.json({ datos })
});
router.get('/parcialpost', async (req,res) => {
    const datos = await database.query("select * from post");
    res.json({ datos })
});
router.get('/parcialcalifica', async (req,res) => {
    const datos = await database.query("select * from califica");
    res.json({ datos })
});

router.post('/parcials', async(req,res)=>{
    const {user} = req.body;
    const datos =  [user];
    await database.query("insert into userparcial (user) values(?)",datos)
    res.json({msg:"Usuario Agregado"})
})
router.post('/parcialpost', async(req,res)=>{
    const {id_user,descripcion} = req.body;
    const datos =  [id_user,descripcion];
    await database.query("insert into post (id_user,descripcion) values(?,?)",datos)
    res.json({msg:"Post Agregado"})
})
router.post('/parcialcalifica', async(req,res)=>{
    const {id_user,calificacion} = req.body;
    const datos =  [id_user,calificacion];
    await database.query("insert into califica (id_user,calificacion) values(?,?)",datos)
    res.json({msg:"Calificacion Agregado"})
})

module.exports = router;