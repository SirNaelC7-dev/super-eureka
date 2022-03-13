import { Flex, List, ListIcon, ListItem } from "@chakra-ui/react";
import Header from "../../components/categories/Header";
import Footer from "../../components/shared/Footer";
import {
    ArrowRightIcon, PhoneIcon,
} from '@chakra-ui/icons'
import Link from "next/link";


export default function Categories() {
    return (
        <>
            <Header itens={[]}/>
            <Flex justifyContent='center' >
                <List spacing={3}>
                    <ListItem>
                        <ListIcon as={ArrowRightIcon} color='green.500' />
                        <Link href='categories/dimension'>Dimensão</Link>
                    </ListItem>
                    <ListItem>
                        <ListIcon as={ArrowRightIcon} color='green.500' />
                        <Link href='categories/electricity'>Eletricidade</Link>
                    </ListItem>
                    <ListItem>
                        <ListIcon as={ArrowRightIcon} color='green.500' />
                        <Link href='categories/time'>Tempo</Link>
                    </ListItem>
                    {/* You can also use custom icons from react-icons */}
                    <ListItem>
                        <ListIcon as={ArrowRightIcon} color='green.500' />
                        Quidem, ipsam illum quis sed voluptatum quae eum fugit earum
                    </ListItem>
                    <ListItem>
                        <ListIcon as={ArrowRightIcon} color='green.500' />
                        Quidem, ipsam illum quis sed voluptatum quae eum fugit earum
                    </ListItem>
                    <ListItem>
                        <ListIcon as={ArrowRightIcon} color='green.500' />
                        Quidem, ipsam illum quis sed voluptatum quae eum fugit earum
                    </ListItem>
                    <ListItem>
                        <ListIcon as={ArrowRightIcon} color='green.500' />
                        Quidem, ipsam illum quis sed voluptatum quae eum fugit earum
                    </ListItem>
                    <ListItem>
                        <ListIcon as={ArrowRightIcon} color='green.500' />
                        Quidem, ipsam illum quis sed voluptatum quae eum fugit earum
                    </ListItem>
                </List>
            </Flex>
            <Footer />
        </>

    )
}