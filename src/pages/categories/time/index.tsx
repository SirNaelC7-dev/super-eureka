import { NextComponentType } from 'next';
import { useState } from 'react';

import Time from '../../../components/categories/Time/Time';
import TimeZones from '../../../components/categories/Time/TimeZones';

import Header from '../../../components/categories/Header'
import Footer from '../../../components/shared/Footer'

interface ItemProps {
    name: string;
    component: NextComponentType;
}

export default function Timem(){
    const mTime:ItemProps[] = [
        {name:'Tempo', component:Time},
        {name:'Fuso Horários', component:TimeZones},
    ];
    const [itens, setItens] = useState<ItemProps[]>(mTime);
    return(
        <>
            <Header itens={itens}/>
            <Footer/>
        </>
    )
}