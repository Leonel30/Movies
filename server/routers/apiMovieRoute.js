const express = require ('express')
const router = express.Router()
const movieApiController = require('../controllers/movieController')


router.get('/', movieApiController.list )
router.get('/list', movieApiController.listas )
router.get('/search', movieApiController.search)
router.get('/:id', movieApiController.show )
router.post('/', movieApiController.store )
router.delete('/:id', movieApiController.delete)


module.exports = router;
