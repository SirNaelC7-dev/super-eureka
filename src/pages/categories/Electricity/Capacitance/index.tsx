import {
    Text,
    Container,
    Stack,
    Flex,
    Spacer,
    FormControl,
    FormLabel,
    Input,
    Select,
    Button,
    Icon,

} from '@chakra-ui/react';

import {
    ArrowRightIcon,
} from '@chakra-ui/icons'

let medida = 'Capacitância';
let definicao = 'A capacitância ou capacidade é a grandeza elétrica de um capacitor, que é determinada pela quantidade de energia elétrica que pode ser armazenada em si por uma determinada tensão e pela quantidade de corrente alternada que atravessa o capacitor numa determinada frequência.';
const medidas = ['','Farad', 'Decafarad', 'Hectofarad', 'Kilofarad', 'Megafarad', 'Gigafarad', 'Terafarad', 'Petafarad', 'Exafarad', 'Zettafarad', 'Yottafarad', 'Decifarad', 'Centifarad', 'Millifarad', 'Microfarad', 'Nanofarad', 'Picofarad', 'Femtofarad', 'Attofarad', 'Zeptofarad', 'Yoctofarad' ];


export default function Capacitance(){
    return(
    <Container maxW={'md'}>
        <Stack spacing={'5'}>
            <Text
            color={'blue.400'}>
                <b>{medida}</b>
            </Text>
            <Text
            color={'gray.500'}>
                {definicao}
            </Text>
            <FormControl>
                <FormLabel color={'gray.600'}>Digite abaixo o valor para converter</FormLabel>
                <Input id='num' type='number'/>
                <FormLabel color={'gray.600'}>Selecione a medida em que está o valor</FormLabel>
                <Select id='tipodado'>

                    {medidas.map((item)=>{
                        return(
                            <option value={item} key={item}> {item} </option>
                        )
                    })}

                </Select>
                <FormLabel color={'gray.600'}>Selecione a medida que quer como resultado</FormLabel>
                <Select id='tiporesultado' >
                    
                    {medidas.map((item)=>{
                        return(
                            <option value={item} key={item}> {item} </option>
                        )
                    })}

                </Select>
                <Flex
                p={6}
                flex={1}
                justify={'center'}
                align={'center'}
                flexDirection={'row-reverse'}
                >
                    <Stack>

                        <Text
                        color={'blue.400'}>
                            <b>Resultado: XXX</b>
                        </Text>
                    </Stack>
                    <Spacer/>
                    <Stack>
                        <Button color={'blue.400'}>
                            <Icon color={'blue.400'}>
                                <ArrowRightIcon />
                            </Icon>
                        </Button>
                    </Stack>
                </Flex>
            </FormControl>       
        </Stack>
    </Container>
    )
}