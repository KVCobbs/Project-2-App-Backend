
const{index,seed}= require('../controllers/Insults.js')
const {Router} = ('express')
const router = Router()

router.get("/",index)

router.get('/seed',seed)

module.exports = router
