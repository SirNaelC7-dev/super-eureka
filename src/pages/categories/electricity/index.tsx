import { NextComponentType } from 'next';
import { useState } from 'react';

import Capacitance from '../../../components/categories/Electricity/Capacitance';
import ElectricalConductance from '../../../components/categories/Electricity/ElectricalConductance';
import ElectricalResistance from '../../../components/categories/Electricity/ElectricalResistance';
import EletricalLoad from '../../../components/categories/Electricity/EletricalLoad';
import ElectricCurrent from '../../../components/categories/Electricity/ElectricCurrent';
import ElectricPotential from '../../../components/categories/Electricity/ElectricPotential';
import Inductance from '../../../components/categories/Electricity/Inductance';

import Header from '../../../components/categories/Header'
import Footer from '../../../components/shared/Footer'

interface ItemProps {
    name: string;
    component: NextComponentType;
}

export default function Electricity(){
        const mElectricity:ItemProps[] = [
            {name:'Capacitância', component:Capacitance},
            {name:'Condutância Elétrica', component:ElectricalConductance},
            {name:'Resistência Elétrica', component:ElectricalResistance},
            {name:'Corrente Elétrica', component:ElectricCurrent},
            {name:'Potencial Elétrico', component:ElectricPotential},
            {name:'Carga Elétrica', component:EletricalLoad},
            {name:'Indutância', component:Inductance},
        ];
        const [itens, setItens] = useState<ItemProps[]>(mElectricity);
        return(
            <>
                <Header itens={itens}/>
                <Footer/>
            </>
    )
}
                
            