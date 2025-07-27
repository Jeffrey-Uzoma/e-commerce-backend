import express from 'express'
import {
  getProducts,
  getProductById,
  createProduct
} from '../controllers/productController.js'
import { protect, admin } from '../middleware/authMiddleware.js'

const router = express.Router()

router.get('/', getProducts)              // GET all products
router.get('/:id', getProductById)       // GET single product
router.post('/', protect, admin, createProduct)          // POST new product

export default router
