import { useState } from 'react';

import Area from '../../../components/categories/Dimension/Area';
import Length from '../../../components/categories/Dimension/Length';
import Volume from '../../../components/categories/Dimension/Volume';

import Header from '../../../components/categories/Header'
import Footer from '../../../components/shared/Footer'



export default function Dimension(){
    const mDimension = [{name:'Área', component:Area}, {name:'Comprimento', component:Length}, {name:'Volume', component:Volume}];
    const [itens, setItens] = useState([mDimension]);
    return(
        <>
            <Header itens={itens}/>

            <Footer/>
        </>
    )
}

