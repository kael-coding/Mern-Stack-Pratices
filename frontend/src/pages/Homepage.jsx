import { Container, VStack, Text, SimpleGrid } from "@chakra-ui/react"
import { useEffect } from "react"
import { Link } from "react-router-dom"
import { useProductStore } from "../store/product"
import { ProductCard } from "../components/ProductCard"

const Homepage = () => {
    const { fetchProducts, products } = useProductStore()

    useEffect(() => {
        fetchProducts()
    }, [fetchProducts])
    //console.log("products", products)

    return (
        <>
            <Container maxW="container.x1" py={8}>
                <VStack spacing={8}>
                    <Text
                        fontSize={{ base: "22", sm: "28" }}
                        fontFamily='heading'
                        fontWeight='bold'
                        bgGradient={'linear(to-r, cyan.400,  purple.600 ,blue.500)'}
                        bgClip={'text'}>The Current Product</Text>

                    <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8} w={"full"}>
                        {/* Product Card */}
                        {products.map((product) => (
                            <ProductCard key={product._id} product={product} />
                        ))}

                    </SimpleGrid>

                    {products.length === 0 && (
                        <Text
                            fontSize='x2'
                            fontFamily='heading'
                            fontWeight='bold'
                            textAlign='center'>
                            No product found {" "}
                            <Link to={'/create'}>
                                <Text as='span' color="blue.500" _hover={{ textDecoration: "underline" }}>
                                    Create Product
                                </Text>
                            </Link>
                        </Text>
                    )}
                </VStack>

            </Container>
        </>

    )
}
export default Homepage