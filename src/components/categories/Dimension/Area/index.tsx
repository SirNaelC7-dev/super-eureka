import React, { useState } from 'react';
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
import { NextComponentType } from 'next';

interface MedidaProps {
    name: string,
    key: string,
}

const medida = 'Área';
const definicao = 'Área é um conceito matemático que pode ser definida como quantidade de espaço bidimensional, ou seja, de superfície. ';
const medidas: MedidaProps[] = [
    {name:'', key:''},
    {name:'Quilômetro', key: 'quilometro'},
    {name:'Hectare', key:'hectare'},
    {name:'Are', key:'are'},
    {name:'Metro', key: 'metro'},
    {name:'Centímetro', key: 'centimetro'},
    {name:'Milímetro', key: 'milimetro'},
    {name:'Decímetro', key: 'decimetro'},
    {name:'Micrômetro', key: 'micrometro'},
    {name:'Nanometro', key: 'nanometro'}
];

const Area: NextComponentType = () => {
    const [value, setValue] = useState<number | ''>(0);
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
                    <Input id='num' type='number' value={value} onChange={(e)=>setValue(Number(e.target.value) || '')}/>
                    <FormLabel color={'gray.600'}>Selecione a medida em que está o valor</FormLabel>
                    <Select id='tipodado'>

                        {medidas.map((item)=>{
                            return(
                                <option value={item.key} key={item.key}> {item.name} </option>
                            )
                        })}

                    </Select>
                    <FormLabel color={'gray.600'}>Selecione a medida que quer como resultado</FormLabel>
                    <Select id='tiporesultado' >
                        
                        {medidas.map((item)=>{
                            return(
                                <option value={item.key} key={item.key}> {item.name} </option>
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

export default Area;

const metroToCentimetro: (metros: number) => number = (metros) => {
    return metros * 100;
}

const metroToMilimetro: (metros: number) => number = (metros) => {
    return metros * 1000;
}



