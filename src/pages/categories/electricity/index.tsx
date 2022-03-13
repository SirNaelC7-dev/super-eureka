import { 
    Tabs, 
    TabList, 
    Tab, 
    TabPanel, 
    TabPanels} from '@chakra-ui/react';

import Capacitance from '../../../components/categories/Electricity/Capacitance';
import ElectricalConductance from '../../../components/categories/Electricity/ElectricalConductance';
import ElectricalResistance from '../../../components/categories/Electricity/ElectricalResistance';
import EletricalLoad from '../../../components/categories/Electricity/EletricalLoad';
import ElectricCurrent from '../../../components/categories/Electricity/ElectricCurrent';
import ElectricPotential from '../../../components/categories/Electricity/ElectricPotential';
import Inductance from '../../../components/categories/Electricity/Inductance';



export default function Dimension(){
    return(
        <Tabs variant='soft-rounded' colorScheme='blue'>
            <TabList justifyContent='center'>
                <Tab>Capacitância</Tab>
                <Tab>Condutância Elétrica</Tab>
                <Tab>Resistência Elétrica</Tab>
                <Tab>Corrente Elétrica</Tab>
                <Tab>Potencial Elétrico</Tab>
                <Tab>Carga Elétrica</Tab>
                <Tab>Indutância</Tab>
            </TabList>
            <TabPanels>
                <TabPanel>
                    <Capacitance />
                </TabPanel>
                <TabPanel>
                    <ElectricalConductance/>
                </TabPanel>
                <TabPanel>
                    <ElectricalResistance/>
                </TabPanel>
                <TabPanel>
                    <ElectricCurrent/>
                </TabPanel>
                <TabPanel>
                    <ElectricPotential/>
                </TabPanel>
                <TabPanel>
                    <EletricalLoad/>
                </TabPanel>
                <TabPanel>
                    <Inductance/>
                </TabPanel>
            </TabPanels>
        </Tabs>
    )
}

