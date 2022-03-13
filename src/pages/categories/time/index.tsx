import { 
    Tabs, 
    TabList, 
    Tab, 
    TabPanel, 
    TabPanels} from '@chakra-ui/react';

import Time from '../../../components/categories/Time/Time';
import TimeZones from '../../../components/categories/Time/TimeZones';


export default function Dimension(){
    return(
        <Tabs variant='soft-rounded' colorScheme='blue'>
            <TabList justifyContent='center'>
                <Tab>Tempo</Tab>
                <Tab>Zonas Horárias</Tab>
            </TabList>
            <TabPanels>
                <TabPanel>
                    <Time/>
                </TabPanel>
                <TabPanel>
                    <TimeZones/>
                </TabPanel>
            </TabPanels>
        </Tabs>
    )
}

