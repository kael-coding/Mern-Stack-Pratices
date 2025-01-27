import { Container, Flex, HStack, Text, Button, useColorMode, useColorModeValue } from "@chakra-ui/react"
import { Link } from "react-router-dom"

import { IoMoon } from "react-icons/io5"
import { LuSun } from 'react-icons/lu'
import { PlusSquareIcon } from "@chakra-ui/icons"


const Navbar = () => {
    const { colorMode, toggleColorMode } = useColorMode()

    return (
        <Container maxW={'1140px'} px={'4'} >
            <Flex
                h={'60px'}
                alignItems={'center'}
                justifyContent={'space-between'}
                flexDir={{
                    base: "column",
                    sm: "row"
                }}>

                <Text
                    fontSize={{ base: "22", sm: "28" }}
                    fontFamily={'heading'}
                    fontWeight={'bold'}
                    textTransform={'uppercase'}
                    bgGradient={'linear(to-r, cyan.400,  purple.600 ,blue.500)'}
                    bgClip={'text'}
                >
                    <Link to={'/'}>Shoe Store 👟</Link>
                </Text>

                <HStack spacing={2} alignItems={'center'}>
                    <Link to={'/create'}>
                        <Button>
                            <PlusSquareIcon fontSize={20} />
                        </Button>
                    </Link>
                    <Button onClick={toggleColorMode}>
                        {colorMode === 'light' ? <IoMoon /> : <LuSun size={'20'} />}
                    </Button>
                </HStack>
            </Flex>
        </Container >
    )
}

export default Navbar
