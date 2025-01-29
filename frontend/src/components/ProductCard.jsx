import { Box, Image, Heading, Text, HStack, useColorModeValue, IconButton, useToast, useDisclosure, VStack, Input } from '@chakra-ui/react'
import { DeleteIcon, EditIcon } from "@chakra-ui/icons";
import { useProductStore } from '../store/product'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
} from '@chakra-ui/react'
import { useState } from 'react'

export const ProductCard = ({ product }) => {
    const [updatedProduct, setUpdateProduct] = useState(product)
    const textColor = useColorModeValue('gray.800', 'white')
    const bgColor = useColorModeValue('white', 'gray.700')
    const { deleteProduct, editProduct } = useProductStore()
    const toast = useToast()
    const { isOpen, onOpen, onClose } = useDisclosure()


    const HandleDeleteProduct = async () => {
        const { success, message } = await deleteProduct(product._id);

        if (!success) {
            toast({
                title: "Error",
                description: message,
                status: "error",
                duration: 5000,
                isClosable: true,
            })
        } else {
            toast({
                title: "Succes Product Deleted.",
                description: message,
                status: "success",
                duration: 5000,
                isClosable: true,
            })
        }
    }
    const handleUpdateProduct = async (pid, updatedProduct) => {
        const { success, message } = await editProduct(pid, updatedProduct);
        onClose();

        if (!success) {
            toast({
                title: "Error",
                description: message,
                status: "error",
                duration: 5000,
                isClosable: true,
            })
        } else {
            toast({
                title: "Succes Product Updated.",
                description: message,
                status: "success",
                duration: 5000,
                isClosable: true,
            })

        }
    }
    return (
        <Box
            shadow={'lg'}
            rounded={"lg"}
            overflow={"hidden"}
            transition={'all 0.3s'}
            _hover={{ transform: "translateY(-5px)", shadow: "x1" }}
            bg={bgColor}>

            <Image src={product.image} alt={product.name} h={48} w="full" objectFit='cover' />

            <Box p={4}>

                <Heading as="h3" size='md' mb={4}>
                    {product.name}
                </Heading>

                <Text fontFamily={"bold"} fontSize='x1' color={textColor} mb={4}> ₱ {product.price}
                </Text>

                <HStack spacing={2} mb={4}>
                    <IconButton onClick={onOpen} icon={<EditIcon />} colorScheme='blue' aria-label='Edit Button' />
                    <IconButton onClick={() => HandleDeleteProduct(product._id)} icon={<DeleteIcon />} colorScheme='red' aria-label='Edit Button' />
                </HStack>
            </Box>

            {/*Modal for updating product */}
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Update Product</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <VStack spacing={4}>
                            <Input
                                placeholder='Product Name'
                                name='name'
                                value={updatedProduct.name}
                                onChange={(e) => setUpdateProduct({ ...updatedProduct, name: e.target.value })} />
                            <Input
                                placeholder='Price'
                                type='number'
                                name='price'
                                value={updatedProduct.price}
                                onChange={(e) => setUpdateProduct({ ...updatedProduct, price: e.target.value })} />
                            <Input
                                placeholder='Image URL'
                                name='image'
                                value={updatedProduct.image}
                                onChange={(e) => setUpdateProduct({ ...updatedProduct, i: e.target.value })} />
                        </VStack>
                    </ModalBody>
                    <ModalFooter>
                        <Button colorScheme='blue' mr={3} onClick={() => handleUpdateProduct(product._id, updatedProduct)} >
                            Confirm
                        </Button>
                        <Button onClick={onClose}>close</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </Box>

    )
}
