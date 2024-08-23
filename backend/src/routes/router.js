import multer from 'multer'
import { Router } from 'express'
import { fileController } from '../controllers/fileController.js'

const storage = multer.memoryStorage()
const upload = multer({ storage: storage })

const router = Router()

router.post('/recive-file', upload.single('file'), fileController.recivedFile)

export { router }
