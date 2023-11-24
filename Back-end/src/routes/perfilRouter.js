const { Router } = require('express');
const router = Router();
const upload = require('../config/multer');

const {
 cadastrarArte,
 listarArtes
} = require('../controllers/perfilController')

router.post('/perfil/create', upload.single('file'), cadastrarArte);
router.get('/perfil/artes/:id', listarArtes);

module.exports = router;