//rutas como router
const express = require('express');
const router = express.Router();
router.use(express.json());
const path = require('path');

router.get('/Lectura', (req, res) => {
    res.render('./LeerArchivos.ejs', { max: 15 });
    
});
router.get('/Perfil', (req, res) => {
    res.render('./Perfil.ejs', { max: 15 });
    
});
router.get('/Automata', (req, res) => {
    res.render('./indx.ejs', { max: 15 });
    
});
module.exports = router;