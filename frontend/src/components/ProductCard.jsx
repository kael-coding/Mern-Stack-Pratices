import { Box, Image, Heading, Text, HStack, useColorModeValue, IconButton } from '@chakra-ui/react'
import { DeleteIcon, EditIcon } from "@chakra-ui/icons";
import React from 'react'


export const ProductCard = ({ product }) => {
    const textColor = useColorModeValue('gray.800', 'white')
    const bgColor = useColorModeValue('white', 'gray.700')
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

                <Heading as="h3" size='md' mb={2}>
                    {product.name}
                </Heading>

                <Text fontFamily={"bold"} fontSize='x1' color={textColor} m={4}>
                    {product.price}
                </Text>

                <HStack spacing={2}>
                    <IconButton icon={<EditIcon />} colorScheme='blue' aria-label='Edit Button' />
                    <IconButton icon={<DeleteIcon />} colorScheme='red' aria-label='Edit Button' />
                </HStack>
            </Box>
        </Box>

    )
}
