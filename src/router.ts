import multer from 'multer'
import path from 'node:path'
import { Router } from 'express'

import { CreateCategories, CreateProducts, ListCategories, ListProducts } from './app/useCases'

export const router = Router()

const upload = multer({
    storage: multer.diskStorage({
        destination(req, file, callback) {
            callback(null, path.resolve(__dirname, '..', 'uploads'))
        },
        filename(req, file, callback) {
        callback(null, `${Date.now()}-${file.originalname}`)
        },
    })
})
// list categories 
router.get('/categories', ListCategories)

// create category
router.post('/categories', CreateCategories)

// list products
router.get('/products', ListProducts)

// create products
router.post('/products', upload.single('image'), CreateProducts)

// Get products by category
router.get('/categories/:categoryId/products', (req, res) => {
    res.send('OK')
})

// list orders
router.get('/orders', (req, res) => {
    res.send('OK')
})

// create orders
router.post('/orders', (req, res) => {
    res.send('OK')
})

// change order status
router.patch('orders/:orderId', (req, res) => {
    res.send('OK')
})

// delete / cancel order
router.delete('orders/:orderId', (req, res) => {
    res.send('OK')
})
