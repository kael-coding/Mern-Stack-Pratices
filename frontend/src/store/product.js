import { create } from 'zustand'

export const useProductStore = create((set) => ({
    products: [],
    setProduct: (products) => set({ products }),
    createProduct: async (newProduct) => {
        if (!newProduct.name || !newProduct.price || !newProduct.image) {
            return { success: false, message: "Please fill the all fields" }
        }
        const res = await fetch('/api/products', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },

            body: JSON.stringify(newProduct)
        })
        const data = await res.json();
        set((state) => ({ products: [...state.products, data.data] }))
        return { success: true, message: "The Product Created" }
    },
    fetchProducts: async () => {
        const res = await fetch('/api/products')
        const data = await res.json()
        set({ products: data.data });
    },
    deleteProduct: async (pid) => {
        const res = await fetch(`/api/products/${pid}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
        })
        const data = await res.json();
        if (!data.success) return { success: false, message: message };
        set((state) => ({ products: state.products.filter((product) => product._id !== pid) }))// this use to update for the ui after deleting the items
        return { success: true, message: "Product Deleted" }
    },
    editProduct: async (pid, updatedProduct) => {
        const res = await fetch(`/api/products/${pid}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updatedProduct)
        })
        const data = await res.json();
        if (!data.success) return { success: false, message: message };
        set((state) => ({ products: state.products.map(product => product._id === pid ? data.data : product) }))
        return { success: true, message: "Product Updated" }

    }
}))