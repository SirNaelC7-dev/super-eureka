import { SimpleGrid, } from '@chakra-ui/react'

import Capacitance from '../Electricity/Capacitance'

export default function Electricity(){
    return(
        <SimpleGrid
        justifyContent={'center'}
        templateColumns={{ sm: '1fr', md: '1fr 1fr', lg:'1fr 1fr 1fr' }}
        spacing={8}
      >
        <Capacitance/>
        
        </SimpleGrid>
    )
}