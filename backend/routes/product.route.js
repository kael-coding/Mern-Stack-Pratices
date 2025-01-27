import express from 'express';
import { updateProduct, deleteProduct, createProduct, getProducts } from '../controllers/product.controller.js';


const router = express.Router();

router.post('/', createProduct);
router.get('/', getProducts);
router.put('/:id', updateProduct);
router.delete('/:id', deleteProduct);
export default router; 