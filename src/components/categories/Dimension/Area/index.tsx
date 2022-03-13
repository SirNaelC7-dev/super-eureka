import React, { useState } from 'react';
import {
    Text,
    Container,
    Stack,
    Flex,
    FormControl,
    FormLabel,
    Input,
    Select,
    StatLabel,
    StatNumber,
    Stat,

} from '@chakra-ui/react';

import {
    ArrowRightIcon,
} from '@chakra-ui/icons'
import { NextComponentType } from 'next';

interface MedidaProps {
    name: string,
    key: string,
}

const metroQuadradoToCentimetroQuadrado: (metros: number) => number = (metros) => {
    return metros * 10000;
}

const metroQuadradoToMilimetroQuadrado: (metros: number) => number = (metros) => {
    return metros * 1000000;
}

const metroQuadradoToQuilometroQuadrado: (metros: number) => number = (metros) => {
    return metros * 0.000001;
}




const centimetroQuadradoToMetroQuadrado: (centrimetros: number) => number = (centrimetros) => {
    return centrimetros / 10000;
}

const milimetroQuadradoToMetroQuadrado: (milimetro: number) => number = (milimetro) => {
    return milimetro / 1000000;
}

const quilometroQuadradoToMetroQuadrado: (quilometro: number) => number = (quilometro) => {
    return quilometro / 0.000001;
}

const medida = 'Área';
const definicao = 'Área é um conceito matemático que pode ser definida como quantidade de espaço bidimensional, ou seja, de superfície. ';
const medidas: MedidaProps[] = [
    {name:'', key:''},
    {name:'Quilômetro Quadrado', key: 'quilometroQuadrado'},
    // {name:'Hectare', key:'hectare'},
    // {name:'Are', key:'are'},
    // {name:'Metro Quadrado', key: 'metroQuadrado'},
    {name:'Centímetro Quadrado', key: 'centimetroQuadrado'},
    {name:'Milímetro Quadrado', key: 'milimetroQuadrado'},
    // {name:'Decímetro Quadrado', key: 'decimetroQuadrado'},
    // {name:'Micrômetro Quadrado', key: 'micrometroQuadrado'},
    // {name:'Nanometro Quadrado', key: 'nanometroQuadrado'}
];

const parsesToMetro = {
    quilometroQuadrado: quilometroQuadradoToMetroQuadrado,
    centimetroQuadrado: centimetroQuadradoToMetroQuadrado,
    milimetroQuadrado: milimetroQuadradoToMetroQuadrado
}

const parsesToFinalValue = {
    quilometroQuadrado: metroQuadradoToQuilometroQuadrado,
    centimetroQuadrado: metroQuadradoToCentimetroQuadrado,
    milimetroQuadrado: metroQuadradoToMilimetroQuadrado,
}

const Area: NextComponentType = () => {
    const [value, setValue] = useState<number | ''>(0);
    const [valueParseToMetro, setValueParseToMetro] = useState<number>(0);
    const [metroToFinalValue, setMetroToFinalValue] = useState<number>(0);


    const parseToMetro = (key: string) => {
        if(parsesToMetro[key]){
            const metroValue = parsesToMetro[key](value || 0)
            setValueParseToMetro(metroValue)
        }
    }


    const parseToFinalValue = (key: string) => {
        if(parsesToFinalValue[key]){
            const finalValue = parsesToFinalValue[key](valueParseToMetro)
            setMetroToFinalValue(finalValue)
        }
    }


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
                    <Select id='tipodado' onChange={(e) => parseToMetro(e.target.value)}>

                        {medidas.map((item)=>{
                            return(
                                <option value={item.key} key={item.key}> {item.name} </option>
                            )
                        })}

                    </Select>
                    <FormLabel color={'gray.600'}>Selecione a medida que quer como resultado</FormLabel>
                    <Select id='tiporesultado' onChange={(e) => parseToFinalValue(e.target.value)}>
                        
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
                        <Stat>
                            <StatLabel>Resultado</StatLabel>
                            <StatNumber>{metroToFinalValue}</StatNumber>
                            {/* <StatHelpText>Feb 12 - Feb 28</StatHelpText> */}
                        </Stat>
                    </Flex>
                </FormControl>       
            </Stack>
        </Container>
    )
}

export default Area;
