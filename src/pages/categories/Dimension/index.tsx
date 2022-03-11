import { SimpleGrid, } from '@chakra-ui/react'


import Length from './Length'
import Volume from './Volume'
import Area from './Area'

export default function Dimension(){
    return(
        <SimpleGrid
        justifyContent={'center'}
        templateColumns={{ sm: '1fr', md: '1fr 1fr', lg:'1fr 1fr 1fr' }}
        spacing={8}
      >
          <Area/>
          <Length/>
          <Volume/>
        </SimpleGrid>
    )
}