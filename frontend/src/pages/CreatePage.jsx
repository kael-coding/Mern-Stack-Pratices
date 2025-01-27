import { Container, VStack, Heading, Box, useColorModeValue, Button, useToast } from '@chakra-ui/react';
import { useState } from 'react'
import { useProductStore } from '../store/product'

const CreatePage = () => {
    const [newProduct, setNewProduct] = useState({
        name: '',
        price: '',
        image: ''
    });

    const toast = useToast()
    const { createProduct } = useProductStore();

    const handleAddProduct = async () => {
        const { success, message } = await createProduct(newProduct);

        if (!success) {
            toast({
                title: "Failed to create product.",
                description: message,
                status: "error",
                duration: 9000,
                isClosable: true,
            })
        } else {
            toast({
                title: "Product Created.",
                description: message,
                status: "success",
                duration: 9000,
                isClosable: true,
            })
            setNewProduct({
                name: '',
                price: '',
                image: ''
            })
        }
    }
    return (
        <Container maxW={"container.sm"} py={8}>
            <VStack spacing={8}>
                <Heading as={"h1"} size={"2xl"} textAlign={"center"} mb={8}>Create New Product</Heading>

                <Box w={"full"} bg={useColorModeValue("white", "gray.700")} p={8} rounded={"lg"} shadow={"mb"}>
                    <VStack spacing={6}>
                        <input placeholder="Product Name"
                            name='name' value={newProduct.name}
                            onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
                            style={{ padding: '12px', width: '100%', borderRadius: '8px', border: '1px solid #ccc' }} />

                        <input placeholder="Product Price"
                            type='number' name='price' value={newProduct.price}
                            onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
                            style={{ padding: '12px', width: '100%', borderRadius: '8px', border: '1px solid #ccc' }} />

                        <input placeholder="Product Image (URL)"
                            value={newProduct.image}
                            onChange={(e) => setNewProduct({ ...newProduct, image: e.target.value })}
                            style={{ padding: '12px', width: '100%', borderRadius: '8px', border: '1px solid #ccc' }} />

                        <Button colorScheme={"blue"} w={"full"} size={"lg"} onClick={handleAddProduct}>Create Product</Button>
                    </VStack>
                </Box>
            </VStack>
        </Container>
    )
}

export default CreatePage