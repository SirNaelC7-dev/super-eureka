import {
  Flex,
  Container,
  Heading,
  Stack,
  Text,
  Button,
  Icon,
  IconProps,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
} from '@chakra-ui/react';
import { NextComponentType } from 'next';
import React, { useEffect } from 'react';

interface ItemProps {
  name: string;
  component: NextComponentType;
}
interface HeaderProps {
  itens: ItemProps[];
}
export default function Header({itens}:HeaderProps) {

  return (
    <Container maxW={'5xl'}>
      <Stack
        textAlign={'center'}
        align={'center'}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 20, md: 28 }}>
        <Heading
          fontWeight={600}
          fontSize={{ base: '3xl', sm: '4xl', md: '6xl' }}
          lineHeight={'110%'}>
          Meeting scheduling{' '}
          <Text as={'span'} color={'blue.400'}>
            made easy
          </Text>
        </Heading>
        <Text color={'gray.500'} maxW={'3xl'}>
          Never miss a meeting. Never be late for one too. Keep track of your
          meetings and receive smart reminders in appropriate times. Read your
          smart “Daily Agenda” every morning.
        </Text>
        <Flex w={'full'}>
        </Flex>
        <Tabs variant='soft-rounded' colorScheme='blue'>
            <TabList justifyContent='center'>
                {itens.map((item)=>{
                  return(
                    <Tab key={item.name} >{item.name }</Tab>
                  )
                })}
            </TabList>
            <TabPanels>
                {itens.map((item)=>{
                  return(
                    <TabPanel key={item.name}>{item ? <item.component/>:<></>}</TabPanel>
                  )
                })}
            </TabPanels>
        </Tabs>
      </Stack>
    </Container>
  );
}
